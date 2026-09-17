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
                        Discover, experiment, and learn with open educational resources designed for explorers.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="bento-grid">
                    {/* Card: Vocab Quest */}
                    <Link
                        to="/vocabquest"
                        className="group relative bg-primary-light/30 rounded-3xl border-2 border-primary/10 p-8 shadow-glow-blue bento-card-playful bento-card-wide cursor-pointer overflow-hidden"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg">
                                    <BookOpen size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-primary mb-4">Vocab Quest</h3>
                                <p className="text-slate-700 font-medium text-lg leading-relaxed max-w-xl">
                                    Empower Ms. Arbuckle's 4th Grade Class with interactive vocabulary and spelling adventures.
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-primary text-white shadow-sm">
                                    4th Grade Class App
                                </span>
                                <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <BookOpen size={180} className="text-primary" />
                        </div>
                    </Link>

                    {/* Card: US States Explorer */}
                    <Link
                        to="/states"
                        className="group relative bg-emerald-50/50 rounded-3xl border-2 border-emerald-200/50 p-8 shadow-glow-green bento-card-playful cursor-pointer overflow-hidden"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-8 shadow-lg">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-emerald-900 mb-4">US States Explorer</h3>
                                <p className="text-slate-700 font-medium text-lg leading-relaxed">
                                    Master US geography, state shapes, capitals, and spelling games.
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-emerald-600 text-white shadow-sm">
                                    Geography App
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

                    {/* Card: Spelling Sparkle */}
                    <Link
                        to="/spelling"
                        className="group relative bg-pink-50/50 rounded-3xl border-2 border-pink-200/50 p-8 shadow-glow-pink bento-card-playful cursor-pointer overflow-hidden"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-pink-500 text-white flex items-center justify-center mb-8 shadow-lg">
                                    <Wand2 size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-pink-950 mb-4">Spelling Sparkle</h3>
                                <p className="text-slate-700 font-medium text-lg leading-relaxed">
                                    Interactive spelling cards, earn stars, and build your sticker collection.
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-pink-500 text-white shadow-sm">
                                    Spelling App
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
                        className="group relative bg-soft-yellow rounded-3xl border-2 border-bright-yellow/30 p-8 shadow-glow-yellow bento-card-playful bento-card-wide cursor-pointer overflow-hidden"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-bright-yellow text-slate-900 flex items-center justify-center mb-8 shadow-lg">
                                    <Landmark size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Gov Quiz</h3>
                                <p className="text-slate-800 font-medium text-lg leading-relaxed max-w-xl">
                                    College-level practice for American Government. Master the concepts for your exam.
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-bright-yellow text-slate-900 shadow-sm">
                                    College App
                                </span>
                                <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <Landmark size={180} className="text-amber-600" />
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
};
