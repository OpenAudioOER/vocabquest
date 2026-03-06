import React from 'react';
import { Home as HomeIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-black text-xl tracking-tight">
                <HomeIcon size={20} />
                OERTools
            </Link>

            {!isHome && (
                <div className="text-slate-500 text-sm font-medium uppercase tracking-widest hidden md:block">
                    Ms. Arbuckle's 4th Grade Class
                </div>
            )}

            <div className="flex items-center gap-4">
                {/* Future links could go here */}
            </div>
        </nav>
    );
};
