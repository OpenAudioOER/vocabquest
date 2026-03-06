import React from 'react';
import { UserProfile, ShopItem } from '../types';
import { SHOP_ITEMS } from '../constants';
import { Button } from './ui/Button';
import { Lock, Check, ArrowLeft, Star, Zap } from 'lucide-react';
import { AvatarDisplay } from './AvatarDisplay';

interface ShopProps {
  user: UserProfile;
  onPurchase: (item: ShopItem) => void;
  onEquip: (item: ShopItem) => void;
  onClose: () => void;
}

export const Shop: React.FC<ShopProps> = ({ user, onPurchase, onEquip, onClose }) => {
  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header with Avatar Preview */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md pt-2 pb-6 border-b border-slate-800 mb-8 shadow-2xl -mx-4 px-4 md:-mx-6 md:px-6 rounded-b-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Button variant="secondary" size="sm" onClick={onClose} className="shrink-0 h-12 w-12 rounded-full p-0 flex items-center justify-center">
              <ArrowLeft size={24} />
            </Button>
            <div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Item Shop</h2>
              <p className="text-slate-400 text-sm">Equip items for Gold & XP bonuses!</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
             {/* Mini Avatar Preview */}
             <div className="scale-75 md:scale-100 origin-right">
                <AvatarDisplay user={user} size="sm" />
             </div>

             <div className="bg-slate-800 border-2 border-yellow-500/50 px-6 py-3 rounded-2xl text-yellow-400 font-bold text-2xl shadow-[0_0_15px_rgba(234,179,8,0.2)] flex flex-col items-end">
                <span className="text-xs text-slate-400 uppercase tracking-widest">Balance</span>
                <span className="flex items-center gap-2">💰 {user.gold}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SHOP_ITEMS.map(item => {
          const owned = user.inventory.includes(item.id);
          const equipped = user.equipped[item.type] === item.id;
          const canAfford = user.gold >= item.price;

          return (
            <div key={item.id} className={`relative bg-slate-800 rounded-2xl p-4 border-2 flex flex-col items-center text-center transition-all group hover:scale-[1.02] ${equipped ? 'border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-green-900/10' : 'border-slate-700 hover:border-indigo-500'}`}>
              
              {/* Bonus Badge */}
              {item.bonus && (
                <div className={`absolute top-0 right-0 rounded-bl-xl rounded-tr-lg px-2 py-1 text-xs font-bold text-white flex items-center gap-1 ${item.bonus.type === 'GOLD' ? 'bg-yellow-600' : 'bg-purple-600'}`}>
                   {item.bonus.type === 'GOLD' ? '💰' : '✨'} +{item.bonus.value}%
                </div>
              )}

              <div className="text-6xl mb-4 mt-2 bg-slate-900 w-24 h-24 rounded-full flex items-center justify-center shadow-inner relative">
                <span className="group-hover:scale-110 transition-transform duration-300 block drop-shadow-md">{item.emoji}</span>
              </div>
              
              <h3 className="font-bold text-white mb-1">{item.name}</h3>
              <p className="text-xs text-slate-400 mb-4 min-h-[1rem]">{item.description}</p>

              <div className="mt-auto w-full">
                {owned ? (
                  <Button 
                    variant={equipped ? "success" : "secondary"} 
                    size="sm" 
                    className="w-full"
                    onClick={() => onEquip(item)}
                    disabled={equipped}
                  >
                    {equipped ? (
                      <span className="flex items-center gap-1"><Check size={16}/> Equipped</span>
                    ) : 'Equip'}
                  </Button>
                ) : (
                  <Button 
                    variant={canAfford ? "primary" : "ghost"} 
                    className={`w-full ${!canAfford && 'opacity-50 cursor-not-allowed'}`}
                    disabled={!canAfford}
                    onClick={() => onPurchase(item)}
                  >
                     {item.price} 💰
                  </Button>
                )}
              </div>

              {!owned && !canAfford && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-950/50 pointer-events-none">
                  <Lock size={64} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
         <Button variant="secondary" size="lg" onClick={onClose} className="w-full md:w-auto">Back to Adventure</Button>
      </div>
    </div>
  );
};