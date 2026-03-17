import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { govQuizData, QuizQuestion } from '../data/govQuizData';

type GameState = 'setup' | 'playing' | 'completed';

export const GovQuiz: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>('setup');
    const [topic, setTopic] = useState<string>('');
    const [level, setLevel] = useState<string>('');
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isShaking, setIsShaking] = useState(false);

    const topics = Object.keys(govQuizData);
    const levels = ['Level 1', 'Level 2'];

    const startQuiz = () => {
        if (!topic || !level) return;
        const topicData = govQuizData[topic]?.[level] || [];
        // Randomly select 15 questions
        const shuffled = [...topicData].sort(() => 0.5 - Math.random()).slice(0, 15);
        setQuestions(shuffled);
        setCurrentIndex(0);
        setSelectedOption(null);
        setScore(0);
        setGameState('playing');
    };

    const handleOptionSelect = (optionLabel: string) => {
        if (selectedOption !== null) return; // Prevent changing answer
        setSelectedOption(optionLabel);
        
        const currentQ = questions[currentIndex];
        if (optionLabel === currentQ.correctAnswer) {
            setScore(prev => prev + 1);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#164ea5', '#87b3f8', '#fed664', '#83c997']
            });
        } else {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
        }
    };

    const nextQuestion = () => {
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
        } else {
            setGameState('completed');
        }
    };

    const restartQuiz = () => {
        setGameState('setup');
        setTopic('');
        setLevel('');
    };

    useEffect(() => {
        if (gameState === 'completed') {
            const percentage = (score / questions.length) * 100;
            if (percentage >= 70) {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#164ea5', '#87b3f8', '#fed664', '#83c997']
                });
            }
        }
    }, [gameState, score, questions.length]);

    if (gameState === 'setup') {
        return (
            <div className="min-h-screen bg-background-light py-12 px-6 flex items-center justify-center">
                <div className="max-w-2xl w-full bg-white rounded-3xl shadow-playful p-10 border-2 border-slate-100">
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
                            <BookOpen size={28} />
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900">American Government Prep</h1>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Select Topic</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {topics.map(t => (
                                    <button
                                        key={t}
                                        onClick={() => setTopic(t)}
                                        className={`p-4 rounded-2xl border-2 font-semibold transition-all ${
                                            topic === t 
                                            ? 'bg-primary-light/20 border-primary text-primary shadow-sm' 
                                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-primary-light hover:bg-slate-100'
                                        }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Select Difficulty</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {levels.map(l => (
                                    <button
                                        key={l}
                                        onClick={() => setLevel(l)}
                                        className={`p-4 rounded-2xl border-2 font-semibold transition-all ${
                                            level === l 
                                            ? 'bg-soft-yellow/50 border-bright-yellow text-slate-900 shadow-sm' 
                                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-bright-yellow hover:bg-slate-100'
                                        }`}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={startQuiz}
                            disabled={!topic || !level}
                            className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-glow-blue hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-4 flex items-center justify-center group"
                        >
                            Begin Practice 
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (gameState === 'completed') {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <div className="min-h-screen bg-background-light py-12 px-6 flex items-center justify-center">
                <div className="max-w-lg w-full bg-white rounded-3xl shadow-playful p-10 border-2 border-slate-100 text-center">
                    <div className="w-24 h-24 rounded-full bg-soft-yellow text-bright-yellow mx-auto flex items-center justify-center mb-6 shadow-glow-yellow">
                        <Award size={48} className="text-primary" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Quiz Complete!</h2>
                    <p className="text-lg text-slate-600 mb-8 font-medium">Topic: {topic} • {level}</p>
                    
                    <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                        <div className="text-6xl font-black text-primary mb-2">{percentage}%</div>
                        <p className="text-slate-500 font-medium">You scored {score} out of {questions.length} correct.</p>
                    </div>

                    <button
                        onClick={restartQuiz}
                        className="w-full flex items-center justify-center py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-glow-blue hover:bg-primary/90 transition-all"
                    >
                        <RotateCcw className="mr-2" size={20} />
                        Take Another Quiz
                    </button>
                </div>
            </div>
        );
    }

    const currentQ = questions[currentIndex];
    const isAnswered = selectedOption !== null;

    return (
        <div className={`min-h-screen bg-background-light py-8 px-4 sm:px-6 ${isShaking ? 'animate-shake' : ''}`}>
            <div className="max-w-3xl mx-auto">
                {/* Header & Progress */}
                <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div>
                        <span className="text-sm font-bold text-primary tracking-wide uppercase">{topic}</span>
                        <div className="text-xs text-slate-500 font-medium mt-1">{level}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-lg font-bold text-slate-800">Question {currentIndex + 1} of {questions.length}</div>
                        <div className="w-32 h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
                            <div 
                                className="h-full bg-primary transition-all duration-500"
                                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Question */}
                <div className="bg-white rounded-3xl shadow-playful p-6 sm:p-10 border-2 border-slate-100 mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 leading-relaxed mb-8">
                        {currentQ.question}
                    </h3>

                    <div className="space-y-3">
                        {currentQ.options.map((opt) => {
                            let optionClass = "bg-slate-50 border-slate-200 text-slate-700 hover:border-primary-light hover:bg-slate-100";
                            let Icon = null;

                            if (isAnswered) {
                                if (opt.label === currentQ.correctAnswer) {
                                    optionClass = "bg-mint-green/30 border-sage-green text-slate-900 shadow-sm";
                                    Icon = <CheckCircle2 className="text-sage-green" size={24} />;
                                } else if (opt.label === selectedOption) {
                                    optionClass = "bg-red-50 border-red-200 text-slate-900";
                                    Icon = <XCircle className="text-red-400" size={24} />;
                                } else {
                                    optionClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
                                }
                            }

                            return (
                                <button
                                    key={opt.label}
                                    onClick={() => handleOptionSelect(opt.label)}
                                    disabled={isAnswered}
                                    className={`w-full text-left p-4 rounded-2xl border-2 font-medium flex items-center justify-between transition-all ${optionClass}`}
                                >
                                    <div className="flex items-center pr-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-500 shadow-sm mr-4">
                                            {opt.label}
                                        </span>
                                        <span className="text-lg leading-relaxed">{opt.text}</span>
                                    </div>
                                    {Icon && <div className="flex-shrink-0">{Icon}</div>}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Feedback & Next Button */}
                {isAnswered && (
                    <div className="animate-fade-in-up">
                        <div className={`p-6 rounded-3xl border-2 mb-6 shadow-sm ${
                            selectedOption === currentQ.correctAnswer 
                                ? 'bg-mint-green/30 border-sage-green' 
                                : 'bg-soft-yellow/30 border-bright-yellow'
                        }`}>
                            <h4 className={`text-lg font-bold mb-2 flex items-center ${
                                selectedOption === currentQ.correctAnswer ? 'text-sage-green' : 'text-amber-600'
                            }`}>
                                {selectedOption === currentQ.correctAnswer ? 'Correct!' : 'Incorrect'}
                            </h4>
                            <p className="text-slate-700 font-medium text-lg leading-relaxed">
                                {currentQ.options.find(o => o.label === currentQ.correctAnswer)?.rationale}
                            </p>
                        </div>
                        
                        <div className="flex justify-end">
                            <button
                                onClick={nextQuestion}
                                className="py-4 px-8 rounded-2xl bg-primary text-white font-bold text-lg shadow-glow-blue hover:bg-primary/90 transition-all flex items-center group"
                            >
                                {currentIndex + 1 === questions.length ? 'See Results' : 'Next Question'}
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
