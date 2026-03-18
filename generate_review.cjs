const fs = require('fs');
const path = require('path');

const baseDir = '/Users/brian/Desktop/Study Tool';
const outFile = path.join('/Users/brian/Desktop', 'Gov_Quiz_Questions_Review.md');

const sources = [
    { category: 'Federalism', level: 'Level 1', file: 'Federalism/federalism-quiz-easy.json' },
    { category: 'Federalism', level: 'Level 2', file: 'Federalism/federalism-quiz-medium.json' },
    { category: 'Civil Liberties', level: 'Level 1', file: 'Civil Liberties/civil-liberties-quiz-easy.json' },
    { category: 'Civil Liberties', level: 'Level 2', file: 'Civil Liberties/politics-quiz-medium.json' },
    { category: 'Civil Rights', level: 'Level 1', file: 'Civil Rights/civil-rights-quiz-easy.json' },
    { category: 'Civil Rights', level: 'Level 2', file: 'Civil Rights/civil-rights-quiz-medium.json' }
];

let mdContent = `# American Government Practice Quiz Review\n\n`;
mdContent += `This document contains all the questions organized by Topic and Difficulty to make it easy to review.\n\n`;

sources.forEach(src => {
    const filePath = path.join(baseDir, src.file);
    if (!fs.existsSync(filePath)) return;
    
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    mdContent += `## ${src.category} - ${src.level}\n\n`;
    
    data.questions.forEach(q => {
        mdContent += `### Q${q.number}: ${q.question}\n\n`;
        q.options.forEach(opt => {
            const isCorrect = opt.isCorrect ? '✅' : '❌';
            mdContent += `- **${opt.label}** ${isCorrect}: ${opt.text}\n`;
            if (opt.isCorrect) {
                 mdContent += `  - *Rationale: ${opt.rationale}*\n`;
            }
        });
        mdContent += `\n---\n\n`;
    });
});

fs.writeFileSync(outFile, mdContent);
console.log('Review document created at:', outFile);
