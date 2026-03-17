import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const isVocabQuest = location.pathname === '/vocabquest';

    return (
        <nav className={`sticky top-0 z-50 w-full backdrop-blur-md border-b px-6 py-2 flex justify-between items-center transition-all ${isVocabQuest
                ? 'bg-slate-900/90 border-slate-800 text-white'
                : 'bg-surface-light/80 border-slate-100 text-slate-900'
            }`}>
            <Link to="/" className="flex items-center gap-2 select-none group">
                <div className={`w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform ${isVocabQuest ? 'ring-1 ring-slate-700' : ''
                    }`}>
                    <span className="material-symbols-outlined text-[18px]">school</span>
                </div>
                <h1 className={`text-lg font-bold tracking-tight ${isVocabQuest ? 'text-white' : 'text-slate-900'
                    }`}>OER Tools</h1>
            </Link>

            {!isHome && (
                <div className={`text-[10px] font-bold uppercase tracking-widest hidden md:block px-3 py-1 rounded-full border transition-colors ${isVocabQuest
                        ? 'bg-slate-800 text-slate-400 border-slate-700'
                        : 'bg-slate-50 text-slate-400 border-slate-100'
                    }`}>
                    {isVocabQuest ? "Ms. Arbuckle's 4th Grade Class" : "Prof. Barrick's Political Science Class"}
                </div>
            )}

            <div className="flex items-center gap-4">
                {/* Simplified Navbar - Users do not login */}
            </div>
        </nav>
    );
};
