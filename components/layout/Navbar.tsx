import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const isDarkTheme = location.pathname === '/vocabquest';

    const getSubtitle = () => {
        switch (location.pathname) {
            case '/vocabquest':
                return "Ms. Arbuckle's 4th Grade Class";
            case '/states':
                return "Ms. Lin & Lim's 5th Grade Class";
            case '/spelling':
                return "Ms. Diep's 2nd Grade Class";
            case '/govquiz':
                return "Prof. Barrick's Political Science Class";
            default:
                return null;
        }
    };

    const subtitle = getSubtitle();

    return (
        <nav className={`sticky top-0 z-50 w-full backdrop-blur-md border-b px-6 py-2 flex justify-between items-center transition-all ${isDarkTheme
                ? 'bg-slate-900/90 border-slate-800 text-white'
                : 'bg-surface-light/80 border-slate-100 text-slate-900'
            }`}>
            <Link to="/" className="flex items-center gap-2 select-none group">
                <div className={`w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform ${isDarkTheme ? 'ring-1 ring-slate-700' : ''
                    }`}>
                    <span className="material-symbols-outlined text-[18px]">school</span>
                </div>
                <h1 className={`text-lg font-bold tracking-tight ${isDarkTheme ? 'text-white' : 'text-slate-900'
                    }`}>OER Tools</h1>
            </Link>

            {!isHome && subtitle && (
                <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest block px-3 py-1 rounded-full border transition-colors ${isDarkTheme
                        ? 'bg-slate-800 text-slate-400 border-slate-700'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                    {subtitle}
                </div>
            )}

            <div className="flex items-center gap-4">
                {/* Simplified Navbar */}
            </div>
        </nav>
    );
};
