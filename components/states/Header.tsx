"use client";

import React from "react";
import { Star, Trophy, Sparkles, Map, SpellCheck, Compass, Award, MapPin, Building2, Layers } from "lucide-react";
import { UnitType, FocusType } from "../../data/states/scheduleData";

export type StateExplorerMode = "map" | "exam" | "shape" | "spelling";

interface HeaderProps {
  currentMode: StateExplorerMode;
  setMode: (mode: StateExplorerMode) => void;
  activeUnit: UnitType;
  setActiveUnit: (unit: UnitType) => void;
  activeFocus: FocusType;
  setActiveFocus: (focus: FocusType) => void;
  score: number;
  streak: number;
  longestStreak: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  setMode,
  activeUnit,
  setActiveUnit,
  activeFocus,
  setActiveFocus,
  score,
  streak,
  longestStreak,
}) => {
  return (
    <header className="w-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink p-3 md:p-4 shadow-xl text-white rounded-b-3xl mb-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* Top Row: Brand Logo, Groups & Focus, Score/Streak */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          {/* Logo / Title */}
          <div className="flex items-center space-x-3">
            <div className="bg-white text-brand-purple p-2 rounded-2xl shadow-md">
              <Compass className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-wide drop-shadow-sm flex items-center gap-1.5">
                US Geography Explorer
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              </h1>
              <p className="text-xs text-purple-100 font-medium">5th Grade States & Capitals Mastery</p>
            </div>
          </div>

          {/* Quick Controls: Group & Focus Selectors */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* GROUP SELECTOR */}
            <div className="flex items-center gap-1 p-1 bg-purple-950/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
              <button
                onClick={() => setActiveUnit("unit1")}
                className={`py-1.5 px-3 rounded-xl font-black text-xs md:text-sm transition ${
                  activeUnit === "unit1"
                    ? "bg-yellow-300 text-purple-950 shadow-md scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                title="Map Group A (23 States)"
              >
                Group A (23)
              </button>

              <button
                onClick={() => setActiveUnit("unit2")}
                className={`py-1.5 px-3 rounded-xl font-black text-xs md:text-sm transition ${
                  activeUnit === "unit2"
                    ? "bg-yellow-300 text-purple-950 shadow-md scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                title="Map Group B (27 States)"
              >
                Group B (27)
              </button>

              <button
                onClick={() => setActiveUnit("all")}
                className={`py-1.5 px-3 rounded-xl font-black text-xs md:text-sm transition ${
                  activeUnit === "all"
                    ? "bg-yellow-300 text-purple-950 shadow-md scale-105"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                title="Entire Map (All 50 States)"
              >
                All 50 🏆
              </button>
            </div>

            {/* FOCUS SELECTOR */}
            <div className="flex items-center gap-1 p-1 bg-black/25 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
              <button
                onClick={() => setActiveFocus("states")}
                className={`py-1.5 px-2.5 rounded-xl font-bold text-xs md:text-sm transition flex items-center gap-1 ${
                  activeFocus === "states"
                    ? "bg-white text-purple-950 shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>States</span>
              </button>

              <button
                onClick={() => setActiveFocus("capitals")}
                className={`py-1.5 px-2.5 rounded-xl font-bold text-xs md:text-sm transition flex items-center gap-1 ${
                  activeFocus === "capitals"
                    ? "bg-white text-purple-950 shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Capitals</span>
              </button>

              <button
                onClick={() => setActiveFocus("both")}
                className={`py-1.5 px-2.5 rounded-xl font-bold text-xs md:text-sm transition flex items-center gap-1 ${
                  activeFocus === "both"
                    ? "bg-white text-purple-950 shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Both</span>
              </button>
            </div>
          </div>

          {/* Score & Streaks */}
          <div className="flex items-center space-x-2.5 md:space-x-3 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/30 shadow-inner">
            <div className="flex items-center space-x-1" title="Total Score">
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
              <span className="text-xs md:text-base font-bold whitespace-nowrap">{score} pts</span>
            </div>
            <div className="h-4 md:h-5 w-px bg-white/30" />
            <div className="flex items-center space-x-1" title="Current Streak">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400 animate-bounce" />
              <span className="text-xs md:text-base font-bold whitespace-nowrap">{streak} Streak</span>
            </div>
            <div className="h-4 md:h-5 w-px bg-white/30" />
            <div className="flex items-center space-x-1 text-amber-200" title="Longest Streak Record (Saved)">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-300" />
              <span className="text-xs md:text-sm font-extrabold whitespace-nowrap">Best: {longestStreak}</span>
            </div>
          </div>
        </div>

        {/* Navigation Mode Tabs */}
        <div className="max-w-3xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-1.5 p-1 bg-black/20 backdrop-blur-md rounded-2xl">
          <button
            onClick={() => setMode("exam")}
            className={`flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl font-bold transition-all text-xs md:text-sm ${
              currentMode === "exam"
                ? "bg-white text-brand-purple shadow-md scale-[1.02]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <Map className="w-4 h-4" />
            <span>Map Exam ⭐</span>
          </button>

          <button
            onClick={() => setMode("map")}
            className={`flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl font-bold transition-all text-xs md:text-sm ${
              currentMode === "map"
                ? "bg-white text-brand-purple shadow-md scale-[1.02]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Map Explorer</span>
          </button>

          <button
            onClick={() => setMode("shape")}
            className={`flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl font-bold transition-all text-xs md:text-sm ${
              currentMode === "shape"
                ? "bg-white text-brand-purple shadow-md scale-[1.02]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Shape Flashcards</span>
          </button>

          <button
            onClick={() => setMode("spelling")}
            className={`flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl font-bold transition-all text-xs md:text-sm ${
              currentMode === "spelling"
                ? "bg-white text-brand-purple shadow-md scale-[1.02]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <SpellCheck className="w-4 h-4" />
            <span>Spelling Bee</span>
          </button>
        </div>
      </div>
    </header>
  );
};
