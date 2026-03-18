const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'govQuizData.ts');
let content = fs.readFileSync(dataPath, 'utf-8');

const prefixMatch = content.match(/([\s\S]*?export const govQuizData: GovQuizData = )({[\s\S]*)/);
if (!prefixMatch) {
    console.error("Could not find the export declaration.");
    process.exit(1);
}

const prefix = prefixMatch[1];
const jsonStr = prefixMatch[2].replace(/;\s*$/, '');

let data;
try {
    data = JSON.parse(jsonStr);
} catch (e) {
    console.error("Failed to parse JSON", e);
    process.exit(1);
}

// Civil Liberties Level 2
const civLibL2ToRemove = ['Civ-2-5', 'Civ-2-13', 'Civ-2-14', 'Civ-2-17', 'Civ-2-22'];
data['Civil Liberties']['Level 2'] = data['Civil Liberties']['Level 2'].filter(q => !civLibL2ToRemove.includes(q.id));

// Civil Rights Level 1
const civRightL1ToRemove = ['Civ-1-15', 'Civ-1-16'];
data['Civil Rights']['Level 1'] = data['Civil Rights']['Level 1'].filter(q => !civRightL1ToRemove.includes(q.id));

// Civil Rights Level 2
const civRightL2ToRemove = ['Civ-2-2', 'Civ-2-3', 'Civ-2-9', 'Civ-2-11', 'Civ-2-12', 'Civ-2-16', 'Civ-2-18', 'Civ-2-19', 'Civ-2-20'];
data['Civil Rights']['Level 2'] = data['Civil Rights']['Level 2'].filter(q => !civRightL2ToRemove.includes(q.id));

const newContent = prefix + JSON.stringify(data, null, 4) + ';\n';
fs.writeFileSync(dataPath, newContent, 'utf-8');
console.log("Successfully filtered questions.");
