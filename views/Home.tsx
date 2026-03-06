import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light text-slate-900 font-display selection:bg-primary/20">
            <main className="w-full max-w-7xl mx-auto px-6 py-8">
                {/* Hero / Welcome */}
                <div className="mb-12 text-center sm:text-left">
                    <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Welcome to your Lab
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-lg font-medium">
                        Discover, experiment, and build with open educational resources designed for the modern classroom.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="bento-grid">
                    {/* Card: Vocab Quest (Primary/Wide) */}
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
                                    Class App
                                </span>
                                <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <BookOpen size={180} className="text-primary" />
                        </div>
                    </Link>

                    {/* Placeholder: Future Tool */}
                    <div className="group bg-soft-yellow rounded-3xl border-2 border-bright-yellow/30 p-8 shadow-glow-yellow bento-card-playful flex flex-col h-80 justify-center items-center text-center opacity-70">
                        <div className="w-16 h-16 rounded-2xl bg-bright-yellow text-slate-900 flex items-center justify-center mb-6 shadow-md">
                            <span className="material-symbols-outlined text-[32px]">science</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Next Project...</h3>
                        <p className="text-slate-700 font-medium italic">
                            Building the future of OER tools.
                        </p>
                    </div>

                    {/* Placeholder: Community */}
                    <div className="group bg-mint-green rounded-3xl border-2 border-sage-green/20 p-8 shadow-glow-green bento-card-playful flex flex-col h-80 justify-center items-center text-center opacity-70">
                        <div className="w-16 h-16 rounded-2xl bg-sage-green text-white flex items-center justify-center mb-6 shadow-md">
                            <span className="material-symbols-outlined text-[32px]">groups</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Open Source</h3>
                        <p className="text-slate-700 font-medium italic">
                            Collaborative & Free Forever.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};
