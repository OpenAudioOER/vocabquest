import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Landmark, MapPin, Wand2 } from 'lucide-react';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light text-slate-900 font-display selection:bg-primary/20">
            <main className="w-full max-w-7xl mx-auto px-6 py-8">
                {/* Hero / Welcome */}
                <div className="mb-12 text-center sm:text-left">
                    <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Welcome to OERTools
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-lg font-medium">
                        Discover, experiment, and learn with interactive open educational tools.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="bento-grid">
                    {/* Featured Card 1: US States Explorer */}
                    <Link
                        to="/states"
                        className="group relative bg-emerald-50/70 rounded-3xl border-2 border-emerald-200/60 p-8 shadow-glow-green bento-card-playful bento-card-wide cursor-pointer overflow-hidden"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-8 shadow-lg">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mb-4">US States Explorer</h3>
                                <p className="text-slate-700 font-medium text-lg leading-relaxed max-w-xl">
                                    Interactive map quiz, state shape detective, state spelling bee, and full 50-state exams for learners!
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-emerald-600 text-white shadow-sm">
                                    Featured Geography Tool
                                </span>
                                <div className="w-12 h-12 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <MapPin size={180} className="text-emerald-600" />
                        </div>
                    </Link>

                    {/* Featured Card 2: Spelling Sparkle */}
                    <Link
                        to="/spelling"
                        className="group relative bg-pink-50/70 rounded-3xl border-2 border-pink-200/60 p-8 shadow-glow-pink bento-card-playful bento-card-wide cursor-pointer overflow-hidden"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-pink-500 text-white flex items-center justify-center mb-8 shadow-lg">
                                    <Wand2 size={32} />
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-extrabold text-pink-950 mb-4">Spelling Sparkle</h3>
                                <p className="text-slate-700 font-medium text-lg leading-relaxed max-w-xl">
                                    Fun interactive spelling cards, earn stars, and collect rewards in your personalized sticker book!
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-pink-500 text-white shadow-sm">
                                    Featured Spelling Practice
                                </span>
                                <div className="w-12 h-12 rounded-full bg-white text-pink-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <Wand2 size={180} className="text-pink-500" />
                        </div>
                    </Link>

                    {/* Card: Gov Quiz */}
                    <Link
                        to="/govquiz"
                        className="group relative bg-soft-yellow rounded-3xl border-2 border-bright-yellow/30 p-8 shadow-glow-yellow bento-card-playful cursor-pointer overflow-hidden"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-bright-yellow text-slate-900 flex items-center justify-center mb-8 shadow-lg">
                                    <Landmark size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Gov Quiz</h3>
                                <p className="text-slate-700 font-medium text-base leading-relaxed">
                                    Practice exam for American Government.
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-bright-yellow text-slate-900 shadow-sm">
                                    College Level
                                </span>
                                <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <Landmark size={140} className="text-amber-600" />
                        </div>
                    </Link>

                    {/* Small/Compact Card: Vocab Quest (De-prioritized) */}
                    <Link
                        to="/vocabquest"
                        className="group relative bg-slate-100 rounded-3xl border-2 border-slate-200 p-8 shadow-sm bento-card-playful cursor-pointer overflow-hidden opacity-80 hover:opacity-100 transition-opacity"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-slate-400 text-white flex items-center justify-center mb-6 shadow-md">
                                    <BookOpen size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-700 mb-2">Vocab Quest</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                    Vocabulary adventure tool (Archive).
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-600">
                                    Class App
                                </span>
                                <div className="w-9 h-9 rounded-full bg-white text-slate-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                            <BookOpen size={120} className="text-slate-500" />
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
};
