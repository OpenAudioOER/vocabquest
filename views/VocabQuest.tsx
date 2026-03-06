import React, { useState, useEffect } from 'react';
import { GameScreen, ShopItem, UserProfile, VocabWord } from '../types';
import { INITIAL_USER, DEMO_WORDS } from '../constants';
import { AvatarDisplay } from '../components/AvatarDisplay';
import { Button } from '../components/ui/Button';
import { BattleArena } from '../components/BattleArena';
import { Shop } from '../components/Shop';
import { Inventory } from '../components/Inventory';
import { WordManager } from '../components/admin/WordManager';
import { Settings, Play, ShoppingBag, BookOpen, Star, Sparkles, User } from 'lucide-react';

export const VocabQuest: React.FC = () => {
    // State initialization with localStorage persistence
    const [user, setUser] = useState<UserProfile>(() => {
        const saved = localStorage.getItem('vq_user');
        if (saved) {
            const parsed = JSON.parse(saved);
            return { ...INITIAL_USER, ...parsed };
        }
        return INITIAL_USER;
    });

    const [words, setWords] = useState<VocabWord[]>(() => {
        const saved = localStorage.getItem('vq_words_v7');
        return saved ? JSON.parse(saved) : DEMO_WORDS;
    });

    const [screen, setScreen] = useState<GameScreen>(GameScreen.HOME);
    const [lastBattleStats, setLastBattleStats] = useState<{ score: number, gold: number, xp: number } | null>(null);

    // Persistence effects
    useEffect(() => {
        localStorage.setItem('vq_user', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem('vq_words_v7', JSON.stringify(words));
    }, [words]);

    // Actions
    const handleBattleComplete = (score: number, gold: number, xp: number) => {
        setUser(prev => ({
            ...prev,
            gold: prev.gold + gold,
            xp: prev.xp + xp,
            level: Math.floor((prev.xp + xp) / 1000) + 1,
            questsCompleted: (prev.questsCompleted || 0) + 1
        }));
        setLastBattleStats({ score, gold, xp });
        setScreen(GameScreen.HOME);
    };

    const handlePurchase = (item: ShopItem) => {
        if (user.gold >= item.price && !user.inventory.includes(item.id)) {
            setUser(prev => ({
                ...prev,
                gold: prev.gold - item.price,
                inventory: [...prev.inventory, item.id]
            }));
        }
    };

    const handleEquip = (item: ShopItem) => {
        setUser(prev => ({
            ...prev,
            equipped: {
                ...prev.equipped,
                [item.type]: item.id
            }
        }));
    };

    const handleUnequip = (type: 'HEAD' | 'FACE' | 'HAND' | 'PET') => {
        setUser(prev => {
            const newEquipped = { ...prev.equipped };
            delete newEquipped[type];
            return {
                ...prev,
                equipped: newEquipped
            };
        });
    };

    const handleUpdateName = (name: string) => {
        setUser(prev => ({ ...prev, name }));
    };

    const renderScreen = () => {
        switch (screen) {
            case GameScreen.BATTLE:
                return (
                    <BattleArena
                        words={words}
                        user={user}
                        onComplete={handleBattleComplete}
                        onExit={() => setScreen(GameScreen.HOME)}
                    />
                );

            case GameScreen.SHOP:
                return (
                    <Shop
                        user={user}
                        onPurchase={handlePurchase}
                        onEquip={handleEquip}
                        onClose={() => setScreen(GameScreen.HOME)}
                    />
                );

            case GameScreen.INVENTORY:
                return (
                    <Inventory
                        user={user}
                        onEquip={handleEquip}
                        onUnequip={handleUnequip}
                        onUpdateName={handleUpdateName}
                        onClose={() => setScreen(GameScreen.HOME)}
                    />
                );

            case GameScreen.PARENT_ZONE:
                return (
                    <WordManager
                        currentWords={words}
                        onUpdateWords={setWords}
                        onClose={() => setScreen(GameScreen.HOME)}
                    />
                );

            case GameScreen.HOME:
            default:
                return (
                    <div className="flex flex-col items-center justify-center p-4 pt-10 animate-in fade-in duration-500">
                        <div className="text-center mb-8 relative">
                            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm mb-2">
                                VocabQuest
                            </h1>
                            <p className="text-xl text-slate-400 font-bold tracking-wide uppercase">Hero's Journey</p>

                            <button
                                onClick={() => setScreen(GameScreen.PARENT_ZONE)}
                                className="absolute -top-10 right-0 p-2 text-slate-700 hover:text-slate-500"
                                title="Parent Zone"
                            >
                                <Settings size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                            <div
                                className="bg-slate-800 rounded-3xl p-8 border-b-8 border-slate-950 flex flex-col items-center relative overflow-hidden cursor-pointer hover:bg-slate-800/80 transition-colors group"
                                onClick={() => setScreen(GameScreen.INVENTORY)}
                            >
                                <div className="absolute top-0 w-full h-full bg-indigo-500/5 z-0 pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
                                <div className="z-10 mb-6 group-hover:scale-105 transition-transform">
                                    <AvatarDisplay user={user} size="lg" />
                                </div>
                                <div className="w-full z-10 space-y-3">
                                    <h2 className="text-3xl font-bold text-center mb-1">{user.name}</h2>
                                    <div className="flex justify-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                                        <span>Lvl {user.level}</span>
                                        <span>•</span>
                                        <span>{user.xp} XP</span>
                                    </div>
                                    <div className="bg-slate-900 rounded-xl p-4 flex justify-between items-center border border-slate-700">
                                        <span className="text-yellow-400 font-bold flex items-center gap-2">
                                            <div className="bg-yellow-500/20 p-2 rounded-lg">💰</div>
                                            {user.gold} Gold
                                        </span>
                                        <span className="text-indigo-400 font-bold flex items-center gap-2">
                                            {words.length} Words <div className="bg-indigo-500/20 p-2 rounded-lg"><BookOpen size={16} /></div>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 justify-center">
                                {lastBattleStats && (
                                    <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-2xl mb-4 animate-in slide-in-from-right">
                                        <h3 className="text-green-400 font-bold flex items-center gap-2 mb-1">
                                            <Sparkles size={18} /> Battle Report
                                        </h3>
                                        <p className="text-sm text-green-200">
                                            You scored {lastBattleStats.score} pts and earned {lastBattleStats.gold} gold!
                                        </p>
                                    </div>
                                )}

                                <Button
                                    size="lg"
                                    className="w-full h-24 text-2xl relative overflow-hidden group"
                                    onClick={() => setScreen(GameScreen.BATTLE)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-105 transition-transform duration-500"></div>
                                    <div className="relative z-10 flex items-center gap-3">
                                        <Play fill="currentColor" size={32} /> Start Adventure
                                    </div>
                                </Button>

                                <div className="grid grid-cols-2 gap-4">
                                    <Button variant="secondary" className="w-full h-20 text-lg flex-col gap-1" onClick={() => setScreen(GameScreen.INVENTORY)}>
                                        <div className="flex items-center gap-2"><User size={24} /> My Hero</div>
                                    </Button>
                                    <Button variant="secondary" className="w-full h-20 text-lg flex-col gap-1" onClick={() => setScreen(GameScreen.SHOP)}>
                                        <div className="flex items-center gap-2"><ShoppingBag size={24} /> Shop</div>
                                    </Button>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="bg-slate-800 p-4 rounded-2xl text-center border-b-4 border-slate-900">
                                        <div className="text-3xl font-black text-slate-600 mb-1">0</div>
                                        <div className="text-xs text-slate-500 uppercase font-bold">Daily Streak</div>
                                    </div>
                                    <div className="bg-slate-800 p-4 rounded-2xl text-center border-b-4 border-slate-900">
                                        <div className="text-3xl font-black text-yellow-500 mb-1 flex justify-center items-center gap-1">
                                            {user.questsCompleted || 0} <Star fill="currentColor" size={20} />
                                        </div>
                                        <div className="text-xs text-slate-500 uppercase font-bold">Quests Done</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            {renderScreen()}
        </div>
    );
};
