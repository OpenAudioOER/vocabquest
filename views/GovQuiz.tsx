import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Landmark, Shield, Scale, Star, Zap, Info, PlayCircle } from 'lucide-react';
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
        const shuffledQuestions = [...topicData].sort(() => 0.5 - Math.random()).slice(0, 15);
        
        // Randomize the options for each question
        const randomizedQuestions = shuffledQuestions.map(q => {
            const shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());
            const labels = ['A', 'B', 'C', 'D'];
            let newCorrectAnswer = q.correctAnswer;
            
            const newOptions = shuffledOptions.map((opt, index) => {
                const newLabel = labels[index] || opt.label;
                if (opt.isCorrect) {
                    newCorrectAnswer = newLabel;
                }
                return { ...opt, label: newLabel };
            });
            
            return {
                ...q,
                options: newOptions,
                correctAnswer: newCorrectAnswer
            };
        });

        setQuestions(randomizedQuestions);
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

    const getTopicIcon = (t: string) => {
        switch(t) {
            case 'Federalism': return <Landmark className="mb-3 text-primary" size={36} />;
            case 'Civil Liberties': return <Shield className="mb-3 text-primary" size={36} />;
            case 'Civil Rights': return <Scale className="mb-3 text-primary" size={36} />;
            default: return <BookOpen className="mb-3 text-primary" size={36} />;
        }
    };

    const getLevelIcon = (l: string) => {
        switch(l) {
            case 'Level 1': return <Star className="mb-3 text-amber-500" size={36} />;
            case 'Level 2': return <Zap className="mb-3 text-orange-500" size={36} />;
            default: return <Star className="mb-3 text-slate-400" size={36} />;
        }
    };

    if (gameState === 'setup') {
        return (
            <div className="min-h-screen bg-background-light py-12 px-6 flex items-center justify-center">
                <div className="max-w-3xl w-full bg-white rounded-3xl shadow-playful p-10 border-2 border-slate-100">
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                            <BookOpen size={32} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black text-slate-900">American Government Prep</h1>
                            <p className="text-slate-500 font-medium">Practice quizzes designed for college students.</p>
                        </div>
                    </div>

                    <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-6 mb-10 flex items-start shadow-sm">
                        <div className="bg-white p-2 rounded-xl shadow-sm mr-4 mt-1 border border-blue-50">
                            <Info className="text-primary" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">How it works</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Select a topic and difficulty below to begin. We'll generate a <strong>randomized 15-question quiz</strong> just for you. 
                                <strong> Want more practice?</strong> You can repeat the quiz as many times as you like to get a brand new set of questions!
                            </p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-5 relative inline-block">
                                1. Select Topic
                                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary/20 rounded-full"></div>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {topics.map(t => (
                                    <button
                                        key={t}
                                        onClick={() => setTopic(t)}
                                        className={`p-6 flex flex-col items-center justify-center rounded-2xl border-2 font-bold text-lg transition-all duration-300 ${
                                            topic === t 
                                            ? 'bg-primary/5 border-primary text-primary shadow-md scale-105 transform' 
                                            : 'bg-white border-slate-200 text-slate-600 hover:border-primary-light hover:bg-slate-50 hover:-translate-y-1 hover:shadow-sm'
                                        }`}
                                    >
                                        {getTopicIcon(t)}
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-5 relative inline-block">
                                2. Select Difficulty
                                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-bright-yellow/40 rounded-full"></div>
                            </h2>
                            <div className="grid grid-cols-2 gap-5">
                                {levels.map(l => (
                                    <button
                                        key={l}
                                        onClick={() => setLevel(l)}
                                        className={`p-6 flex flex-col items-center justify-center rounded-2xl border-2 font-bold text-lg transition-all duration-300 ${
                                            level === l 
                                            ? 'bg-soft-yellow/40 border-bright-yellow text-slate-900 shadow-md scale-105 transform' 
                                            : 'bg-white border-slate-200 text-slate-600 hover:border-bright-yellow hover:bg-slate-50 hover:-translate-y-1 hover:shadow-sm'
                                        }`}
                                    >
                                        {getLevelIcon(l)}
                                        {l}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={startQuiz}
                            disabled={!topic || !level}
                            className="w-full py-5 rounded-2xl bg-primary text-white font-black text-xl shadow-glow-blue hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-8 flex items-center justify-center group"
                        >
                            <PlayCircle className="mr-3 group-hover:scale-110 transition-transform" size={28} />
                            Start Randomized Quiz
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
