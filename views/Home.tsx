import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-6 pt-24 animate-in fade-in duration-700">
            <div className="text-center mb-12">
                <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm mb-4">
                    OERTools
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-medium">
                    Interactive learning tools for explorers.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {/* Vocab Quest Tile */}
                <Link to="/vocabquest" className="group">
                    <div className="bg-slate-800 rounded-3xl p-8 border-b-8 border-slate-950 flex flex-col items-start relative overflow-hidden transition-all hover:translate-y-[-4px] active:translate-y-[0px]">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Sparkles size={120} className="text-indigo-400" />
                        </div>

                        <div className="bg-indigo-500/20 p-4 rounded-2xl mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                            <BookOpen size={32} />
                        </div>

                        <h2 className="text-3xl font-black text-white mb-2">Vocab Quest</h2>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Vocabulary and Spelling tool for Ms. Arbuckle's 4th Grade Class.
                        </p>

                        <div className="mt-8 flex items-center gap-2 text-indigo-400 font-black uppercase tracking-widest text-sm">
                            Launch App <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>
                </Link>

                {/* Placeholder for future tools */}
                <div className="bg-slate-800/30 rounded-3xl p-8 border-2 border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
                    <div className="text-slate-600 font-bold mb-2 italic">New Tool Coming Soon...</div>
                    <p className="text-slate-700 text-sm">Stay tuned for more 4th-grade adventures!</p>
                </div>
            </div>
        </div>
    );
};
