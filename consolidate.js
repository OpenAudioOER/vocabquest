import fs from 'fs';
import path from 'path';

const baseDir = '/Users/brian/Desktop/Study Tool';
const outPath = path.join(baseDir, 'vocabquest', 'data', 'govQuizData.ts');

const sources = [
    { category: 'Federalism', level: 'Level 1', file: 'Federalism/federalism-quiz-easy.json' },
    { category: 'Federalism', level: 'Level 2', file: 'Federalism/federalism-quiz-medium.json' },
    { category: 'Civil Liberties', level: 'Level 1', file: 'Civil Liberties/civil-liberties-quiz-easy.json' },
    { category: 'Civil Liberties', level: 'Level 2', file: 'Civil Liberties/politics-quiz-medium.json' },
    { category: 'Civil Rights', level: 'Level 1', file: 'Civil Rights/civil-rights-quiz-easy.json' },
    { category: 'Civil Rights', level: 'Level 2', file: 'Civil Rights/civil-rights-quiz-medium.json' }
];

const consolidated = {};

sources.forEach(src => {
    const filePath = path.join(baseDir, src.file);
    if (!fs.existsSync(filePath)) {
        console.error('Missing file:', filePath);
        return;
    }
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    if (!consolidated[src.category]) {
        consolidated[src.category] = {};
    }
    
    consolidated[src.category][src.level] = data.questions.map(q => ({
        id: `${src.category.substring(0,3)}-${src.level.slice(-1)}-${q.number}`,
        question: q.question,
        options: q.options.map(o => ({
            label: o.label,
            text: o.text,
            isCorrect: o.isCorrect,
            rationale: o.rationale
        })),
        correctAnswer: q.correctAnswer
    }));
});

// Ensure directory exists
if (!fs.existsSync(path.dirname(outPath))) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
}

const tsContent = `export type QuizOption = {
    label: string;
    text: string;
    isCorrect: boolean;
    rationale: string;
};

export type QuizQuestion = {
    id: string;
    question: string;
    options: QuizOption[];
    correctAnswer: string;
};

export type GovQuizData = {
    [category: string]: {
        [level: string]: QuizQuestion[];
    };
};

export const govQuizData: GovQuizData = ${JSON.stringify(consolidated, null, 4)};
`;

fs.writeFileSync(outPath, tsContent);
console.log('Successfully consolidated quiz data to', outPath);
