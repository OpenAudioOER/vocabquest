"use client";

import React from "react";
import { Sparkles, Star, BookOpen, Gift } from "lucide-react";

interface HeaderProps {
  currentTab: "spelling" | "stickers";
  setTab: (tab: "spelling" | "stickers") => void;
  stars: number;
  correctCount: number;
  unlockedStickerCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setTab,
  stars,
  correctCount,
  unlockedStickerCount,
}) => {
  const nextStickerProgress = correctCount % 10;

  return (
    <header className="w-full bg-gradient-to-r from-palette-pink via-palette-lavender to-palette-blue p-4 md:p-6 shadow-md rounded-b-3xl mb-6 border-b-4 border-palette-pink">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-white p-3 rounded-3xl shadow-md text-3xl transform -rotate-3 hover:rotate-6 transition-transform flex items-center justify-center border-2 border-palette-pink">
            ✨🐱✨
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-purple-950 tracking-wide flex items-center gap-2">
              Spelling Sparkle!
              <Sparkles className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-bounce" />
            </h1>
            <p className="text-xs md:text-sm font-bold text-purple-900 flex items-center gap-2">
              <span className="bg-palette-yellow text-amber-950 font-extrabold px-2.5 py-0.5 rounded-full text-xs border border-amber-300">
                Grade 2
              </span>
              Practice & Collect Vector Stickers! 💖
            </p>
          </div>
        </div>

        {/* Star & Sticker Reward Counter */}
        <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border-2 border-palette-lavender shadow-sm">
          <div className="flex items-center space-x-1.5">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
            <span className="text-lg font-black text-purple-950">{stars} Stars</span>
          </div>

          <div className="h-6 w-px bg-palette-lavender" />

          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-1 text-xs font-black text-purple-950">
              <Gift className="w-4 h-4 text-pink-500" />
              <span>{nextStickerProgress} / 10 to Sticker</span>
            </div>
            <div className="w-24 h-2.5 bg-purple-100 rounded-full mt-1 overflow-hidden border border-purple-200">
              <div
                className="h-full bg-gradient-to-r from-palette-pink to-palette-lavender rounded-full transition-all duration-300"
                style={{ width: `${(nextStickerProgress / 10) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Intuitive 2-Tab Navigation */}
      <div className="max-w-md mx-auto mt-4 grid grid-cols-2 gap-2 p-1.5 bg-white/70 backdrop-blur-md rounded-2xl border-2 border-white shadow-sm">
        <button
          onClick={() => setTab("spelling")}
          className={`flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl font-black transition-all text-sm md:text-base ${
            currentTab === "spelling"
              ? "bg-gradient-to-r from-palette-pink to-palette-lavender text-purple-950 shadow-md scale-[1.02] border border-white"
              : "text-purple-900 hover:bg-white/60"
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>🎮 Spelling Game</span>
        </button>

        <button
          onClick={() => setTab("stickers")}
          className={`flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl font-black transition-all text-sm md:text-base ${
            currentTab === "stickers"
              ? "bg-gradient-to-r from-palette-pink to-palette-lavender text-purple-950 shadow-md scale-[1.02] border border-white"
              : "text-purple-900 hover:bg-white/60"
          }`}
        >
          <Gift className="w-5 h-5 text-amber-500" />
          <span>🎨 Sticker Book ({unlockedStickerCount})</span>
        </button>
      </div>
    </header>
  );
};
