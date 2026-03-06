import React from 'react';
import { UserProfile } from '../types';
import { SHOP_ITEMS } from '../constants';

interface AvatarDisplayProps {
  user: UserProfile;
  size?: 'sm' | 'lg';
}

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({ user, size = 'lg' }) => {
  const getEmoji = (id?: string) => SHOP_ITEMS.find(i => i.id === id)?.emoji || '';

  const containerSize = size === 'lg' ? 'w-48 h-48' : 'w-24 h-24';
  const fontSize = size === 'lg' ? 'text-6xl' : 'text-3xl';
  const petSize = size === 'lg' ? 'text-4xl' : 'text-xl';

  return (
    <div className={`relative ${containerSize} bg-gradient-to-b from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center`}>
      {/* Base Avatar */}
      <div className={`z-10 ${fontSize} relative`}>
        😃
        {/* Face Item */}
        {user.equipped.FACE && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            {getEmoji(user.equipped.FACE)}
          </div>
        )}
      </div>

      {/* Head Item */}
      {user.equipped.HEAD && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 z-20 ${fontSize}`}>
          {getEmoji(user.equipped.HEAD)}
        </div>
      )}

      {/* Hand Item */}
      {user.equipped.HAND && (
        <div className={`absolute bottom-2 -right-2 z-30 ${fontSize} transform rotate-12`}>
          {getEmoji(user.equipped.HAND)}
        </div>
      )}

      {/* Pet Item */}
      {user.equipped.PET && (
        <div className={`absolute bottom-0 -left-4 z-30 ${petSize} animate-bounce-short`}>
          {getEmoji(user.equipped.PET)}
        </div>
      )}
    </div>
  );
};