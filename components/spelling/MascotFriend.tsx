"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";

interface MascotFriendProps {
  status: "idle" | "correct" | "incorrect";
}

export const MascotFriend: React.FC<MascotFriendProps> = ({ status }) => {
  return (
    <div className="flex flex-col items-center justify-center my-2 relative group">
      {/* Speech Bubble */}
      <div className="bg-white px-4 py-2 rounded-2xl border-2 border-palette-pink shadow-md text-xs md:text-sm font-black text-purple-900 mb-2 relative animate-bounce">
        {status === "idle" && "Hi! Tap the button to hear your spelling word! ✨"}
        {status === "correct" && "HOORAY! You are an amazing speller! 🎉💖"}
        {status === "incorrect" && "Don't worry! You've got this, keep trying! 💪✨"}
        <div className="w-3 h-3 bg-white border-r-2 border-b-2 border-palette-pink transform rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2" />
      </div>

      {/* High Quality Animated Pet Mascot SVG (Sparkles the Kitten) */}
      <div className={`w-28 h-28 md:w-36 md:h-36 relative transition-transform duration-300 ${
        status === "correct" ? "scale-110 rotate-6" : status === "incorrect" ? "scale-95 -rotate-3" : "hover:scale-105"
      }`}>
        <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-lg">
          {/* Background Aura */}
          <circle cx="100" cy="100" r="90" fill="#F2C6DE" opacity="0.4" />
          <circle cx="100" cy="100" r="75" fill="#DBCDF0" opacity="0.6" />

          {/* Kitten Body */}
          <ellipse cx="100" cy="140" rx="45" ry="38" fill="#FFFFFF" stroke="#C084FC" strokeWidth="4" />

          {/* Ears */}
          <polygon points="65,55 45,15 85,45" fill="#F2C6DE" stroke="#C084FC" strokeWidth="4" strokeLinejoin="round" />
          <polygon points="65,52 52,24 80,45" fill="#FAEDCB" />
          
          <polygon points="135,55 155,15 115,45" fill="#F2C6DE" stroke="#C084FC" strokeWidth="4" strokeLinejoin="round" />
          <polygon points="135,52 148,24 120,45" fill="#FAEDCB" />

          {/* Head */}
          <ellipse cx="100" cy="85" rx="55" ry="48" fill="#FFFFFF" stroke="#C084FC" strokeWidth="4" />

          {/* Cheeks */}
          <circle cx="65" cy="98" r="10" fill="#F2C6DE" opacity="0.7" />
          <circle cx="135" cy="98" r="10" fill="#F2C6DE" opacity="0.7" />

          {/* Eyes */}
          {status === "correct" ? (
            <>
              {/* Happy Arc Eyes ^ ^ */}
              <path d="M70,82 Q80,70 90,82" stroke="#4C1D95" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M110,82 Q120,70 130,82" stroke="#4C1D95" strokeWidth="5" fill="none" strokeLinecap="round" />
            </>
          ) : status === "incorrect" ? (
            <>
              {/* Encouraging Winking Eyes */}
              <circle cx="80" cy="82" r="7" fill="#4C1D95" />
              <path d="M112,82 Q122,88 132,82" stroke="#4C1D95" strokeWidth="4" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              {/* Big Cute Sparkle Eyes */}
              <ellipse cx="78" cy="82" rx="8" ry="11" fill="#4C1D95" />
              <circle cx="76" cy="78" r="3" fill="#FFFFFF" />
              <ellipse cx="122" cy="82" rx="8" ry="11" fill="#4C1D95" />
              <circle cx="120" cy="78" r="3" fill="#FFFFFF" />
            </>
          )}

          {/* Nose & Mouth */}
          <polygon points="96,95 104,95 100,100" fill="#F472B6" />
          <path d="M93,103 Q100,109 107,103" stroke="#4C1D95" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Whiskers */}
          <line x1="45" y1="90" x2="25" y2="86" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="97" x2="23" y2="98" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" />
          <line x1="155" y1="90" x2="175" y2="86" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" />
          <line x1="155" y1="97" x2="177" y2="98" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" />

          {/* Magic Crown/Bow */}
          <path d="M85,42 L100,28 L115,42 Z" fill="#FAEDCB" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="100" cy="35" r="4" fill="#F472B6" />
        </svg>

        {/* Sparkle Badges */}
        <Sparkles className="w-5 h-5 text-yellow-400 fill-yellow-400 absolute -top-1 -right-1 animate-pulse" />
        <Heart className="w-4 h-4 text-pink-400 fill-pink-400 absolute -bottom-1 -left-1 animate-bounce" />
      </div>
    </div>
  );
};
