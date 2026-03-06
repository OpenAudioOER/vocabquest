
import React, { useMemo, useState } from 'react';
import { UserProfile, ShopItem } from '../types';
import { SHOP_ITEMS } from '../constants';
import { Button } from './ui/Button';
import { AvatarDisplay } from './AvatarDisplay';
import { ArrowLeft, XCircle, Edit2, Check, X } from 'lucide-react';

interface InventoryProps {
  user: UserProfile;
  onEquip: (item: ShopItem) => void;
  onUnequip: (type: 'HEAD' | 'FACE' | 'HAND' | 'PET') => void;
  onUpdateName: (name: string) => void;
  onClose: () => void;
}

export const Inventory: React.FC<InventoryProps> = ({ user, onEquip, onUnequip, onUpdateName, onClose }) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(user.name);

  const ownedItems = useMemo(() => 
    SHOP_ITEMS.filter(item => user.inventory.includes(item.id)), 
  [user.inventory]);

  // Calculate stats
  const bonuses = useMemo(() => {
    let gold = 0;
    let xp = 0;
    Object.values(user.equipped).forEach(id => {
        const item = SHOP_ITEMS.find(i => i.id === id);
        if (item?.bonus?.type === 'GOLD') gold += item.bonus.value;
        if (item?.bonus?.type === 'XP') xp += item.bonus.value;
    });
    return { gold, xp };
  }, [user.equipped]);

  const categories: ('HEAD' | 'FACE' | 'HAND' | 'PET')[] = ['HEAD', 'FACE', 'HAND', 'PET'];

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdateName(tempName.trim());
      setIsEditingName(false);
    }
  };

  const handleCancelName = () => {
    setTempName(user.name);
    setIsEditingName(false);
  };

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="secondary" size="sm" onClick={onClose}><ArrowLeft size={20} /></Button>
        <h2 className="text-3xl font-black text-white">My Hero & Gear</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Col: Avatar & Active Stats */}
        <div className="bg-slate-800 rounded-3xl p-6 border-2 border-slate-700 flex flex-col items-center h-fit">
            <div className="mb-6 scale-110">
                <AvatarDisplay user={user} size="lg" />
            </div>
            
            <div className="w-full flex flex-col items-center mb-6">
                {isEditingName ? (
                    <div className="flex items-center gap-2 w-full">
                        <input 
                            type="text"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                            className="bg-slate-900 border-2 border-indigo-500 rounded-xl px-4 py-2 text-white font-bold w-full focus:outline-none"
                            autoFocus
                            maxLength={15}
                        />
                        <button 
                            onClick={handleSaveName}
                            className="bg-green-500 p-2 rounded-xl text-white hover:bg-green-400 transition-colors"
                        >
                            <Check size={20} />
                        </button>
                        <button 
                            onClick={handleCancelName}
                            className="bg-slate-700 p-2 rounded-xl text-white hover:bg-slate-600 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 group">
                        <h3 className="text-2xl font-bold">{user.name}</h3>
                        <button 
                            onClick={() => setIsEditingName(true)}
                            className="text-slate-500 hover:text-indigo-400 transition-colors p-1"
                        >
                            <Edit2 size={18} />
                        </button>
                    </div>
                )}
            </div>

            <div className="w-full bg-slate-900 rounded-xl p-4 space-y-3 border border-slate-800">
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Active Bonuses</h4>
                <div className="flex justify-between items-center text-yellow-400 font-bold text-lg">
                    <span className="flex items-center gap-2">💰 Gold Bonus</span>
                    <span>+{bonuses.gold}%</span>
                </div>
                <div className="flex justify-between items-center text-purple-400 font-bold text-lg">
                    <span className="flex items-center gap-2">✨ XP Bonus</span>
                    <span>+{bonuses.xp}%</span>
                </div>
            </div>
        </div>

        {/* Right Col: Inventory Grid */}
        <div className="md:col-span-2 space-y-6">
            
            {categories.map(cat => {
                const categoryItems = ownedItems.filter(i => i.type === cat);
                const equippedId = user.equipped[cat];
                
                return (
                    <div key={cat} className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-slate-300 flex items-center gap-2">
                                {cat === 'HEAD' && '🧢 Headgear'}
                                {cat === 'FACE' && '😎 Face Accessories'}
                                {cat === 'HAND' && '🗡️ Hand Items'}
                                {cat === 'PET' && '🐾 Pets'}
                            </h3>
                            {equippedId && (
                                <button 
                                    onClick={() => onUnequip(cat)}
                                    className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-bold bg-red-950/30 px-2 py-1 rounded-lg"
                                >
                                    <XCircle size={14}/> Unequip
                                </button>
                            )}
                        </div>

                        {categoryItems.length === 0 ? (
                            <div className="text-slate-600 text-sm italic py-2">No items owned. Visit the shop!</div>
                        ) : (
                            <div className="flex flex-wrap gap-3">
                                {categoryItems.map(item => {
                                    const isEquipped = equippedId === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => onEquip(item)}
                                            className={`
                                                relative p-3 rounded-xl border-2 transition-all flex flex-col items-center w-24 group
                                                ${isEquipped 
                                                    ? 'bg-indigo-600/20 border-indigo-500 shadow-lg shadow-indigo-500/20' 
                                                    : 'bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-slate-500'
                                                }
                                            `}
                                        >
                                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.emoji}</div>
                                            <div className="text-xs font-bold text-center leading-tight truncate w-full text-slate-200">{item.name}</div>
                                            {item.bonus && (
                                                <div className={`absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 rounded-full font-bold shadow-sm ${item.bonus.type === 'GOLD' ? 'bg-yellow-600' : 'bg-purple-600'}`}>
                                                    +{item.bonus.value}%
                                                </div>
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>

      </div>
    </div>
  );
};
