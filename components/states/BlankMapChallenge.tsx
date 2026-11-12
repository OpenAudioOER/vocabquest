"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { StateInfo, ALL_50_STATES, US_MAP_VIEWBOX } from "../../data/states/statesData";
import { playPositiveFeedbackAudio, playNegativeFeedbackAudio } from "../../utils/states/audio";
import {
  MapPin,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  PenTool,
  X,
  AlertCircle,
  Send,
} from "lucide-react";
import confetti from "canvas-confetti";

interface BlankMapChallengeProps {
  onSuccess: () => void;
  onFailure: () => void;
}

const SOLVED_STORAGE_KEY = "states_blank_map_solved_ids";
const WRONG_COUNTS_STORAGE_KEY = "states_blank_map_wrong_counts";

/**
 * Normalizes a state name guess for comparison:
 * trims whitespace, collapses internal spaces, and lowercases.
 */
function normalizeGuess(value: string): string {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

/**
 * Computes an interior checkmark coordinate and scale factor using the centroid
 * of the state's largest SVG subpath polygon, falling back to its bounding-box center.
 */
function getStatePinPosition(state: StateInfo): { x: number; y: number; scale: number } {
  const fallbackX = state.bounds ? state.bounds.minX + state.bounds.width / 2 : 0;
  const fallbackY = state.bounds ? state.bounds.minY + state.bounds.height / 2 : 0;
  const minDim = state.bounds ? Math.min(state.bounds.width, state.bounds.height) : 40;
  const scale = minDim < 22 ? 0.65 : minDim < 32 ? 0.85 : 1;

  const subpaths = state.path.split("M").slice(1);
  let bestArea = 0;
  let bestCx = fallbackX;
  let bestCy = fallbackY;

  for (const sp of subpaths) {
    const pts = [...sp.matchAll(/([-\d.]+),([-\d.]+)/g)].map((m) => [
      parseFloat(m[1]),
      parseFloat(m[2]),
    ]);
    if (pts.length < 3) continue;

    let signedArea = 0;
    let cx = 0;
    let cy = 0;
    for (let i = 0; i < pts.length; i++) {
      const [x0, y0] = pts[i];
      const [x1, y1] = pts[(i + 1) % pts.length];
      const cross = x0 * y1 - x1 * y0;
      signedArea += cross;
      cx += (x0 + x1) * cross;
      cy += (y0 + y1) * cross;
    }

    signedArea /= 2;
    const absArea = Math.abs(signedArea);
    if (absArea > bestArea && signedArea !== 0) {
      bestArea = absArea;
      bestCx = cx / (6 * signedArea);
      bestCy = cy / (6 * signedArea);
    }
  }

  return { x: bestCx, y: bestCy, scale };
}

/**
 * Blank 50-state map challenge where students click states and type exact state names
 * (case-insensitive, no hints on wrong attempts) with full completion error reporting.
 */
export const BlankMapChallenge: React.FC<BlankMapChallengeProps> = ({
  onSuccess,
  onFailure,
}) => {
  const [solvedIds, setSolvedIds] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(SOLVED_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [wrongAttemptsByState, setWrongAttemptsByState] = useState<Record<string, number>>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(WRONG_COUNTS_STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
    return {};
  });

  const [selectedState, setSelectedState] = useState<StateInfo | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [feedback, setFeedback] = useState<{
    type: "error" | "success" | "info";
    message: string;
  } | null>(null);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const pinPositions = useMemo(() => {
    const map: Record<string, { x: number; y: number; scale: number }> = {};
    for (const st of ALL_50_STATES) {
      map[st.id] = getStatePinPosition(st);
    }
    return map;
  }, []);

  // Auto-focus text input whenever a new state is selected
  useEffect(() => {
    if (selectedState) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [selectedState?.id]);

  const persistSolved = (nextIds: string[]) => {
    setSolvedIds(nextIds);
    try {
      localStorage.setItem(SOLVED_STORAGE_KEY, JSON.stringify(nextIds));
    } catch {}
  };

  const persistWrongCounts = (nextCounts: Record<string, number>) => {
    setWrongAttemptsByState(nextCounts);
    try {
      localStorage.setItem(WRONG_COUNTS_STORAGE_KEY, JSON.stringify(nextCounts));
    } catch {}
  };

  const totalIncorrectAttempts = (Object.values(wrongAttemptsByState) as number[]).reduce(
    (sum, count) => sum + count,
    0
  );
  const solvedCount = solvedIds.length;
  const isAllCompleted = solvedCount === ALL_50_STATES.length;
  const firstTryCount = solvedIds.filter((id) => !wrongAttemptsByState[id]).length;

  const missedStatesSummary = useMemo(() => {
    return ALL_50_STATES.filter((s) => (wrongAttemptsByState[s.id] || 0) > 0)
      .map((s) => ({
        state: s,
        attempts: wrongAttemptsByState[s.id] || 0,
      }))
      .sort((a, b) => b.attempts - a.attempts || a.state.name.localeCompare(b.state.name));
  }, [wrongAttemptsByState]);

  const handleStateClick = (state: StateInfo) => {
    if (solvedIds.includes(state.id)) {
      setSelectedState(null);
      setInputValue("");
      setFeedback({
        type: "info",
        message: `${state.name} is already solved! Pick another blank state.`,
      });
      return;
    }

    setSelectedState(state);
    setInputValue("");
    setFeedback(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedState) return;

    const guess = normalizeGuess(inputValue);
    if (!guess) {
      inputRef.current?.focus();
      return;
    }

    const expected = normalizeGuess(selectedState.name);

    if (guess === expected) {
      const nextSolved = solvedIds.includes(selectedState.id)
        ? solvedIds
        : [...solvedIds, selectedState.id];
      persistSolved(nextSolved);

      onSuccess();
      playPositiveFeedbackAudio();

      const completedNow = nextSolved.length === ALL_50_STATES.length;
      confetti({
        particleCount: completedNow ? 160 : 65,
        spread: completedNow ? 90 : 65,
        origin: { y: 0.6 },
      });

      const solvedName = selectedState.name;
      setSelectedState(null);
      setInputValue("");
      setFeedback({
        type: "success",
        message: completedNow
          ? `All 50 states complete! Finished with ${solvedName}!`
          : `Correct! ${solvedName} (${nextSolved.length}/${ALL_50_STATES.length})`,
      });
    } else {
      const nextWrongCounts = {
        ...wrongAttemptsByState,
        [selectedState.id]: (wrongAttemptsByState[selectedState.id] || 0) + 1,
      };
      persistWrongCounts(nextWrongCounts);

      onFailure();
      playNegativeFeedbackAudio();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 450);

      // No hints given; student may retry or click any other state on the map
      setFeedback({
        type: "error",
        message: "Incorrect. Try again, or click another state to switch!",
      });
      inputRef.current?.focus();
    }
  };

  const handleReset = () => {
    persistSolved([]);
    persistWrongCounts({});
    setSelectedState(null);
    setInputValue("");
    setFeedback(null);
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      {/* Top Status & Progress Bar */}
      <div className="w-full bg-white rounded-3xl p-4 md:p-6 shadow-xl border-4 border-brand-purple/20 mb-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-purple text-white flex items-center justify-center shadow-md shrink-0">
            <PenTool className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base md:text-lg font-black text-slate-800">
                Blank Map Challenge
              </h2>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                🗺️ All 50 States • Exact Spelling
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Click any blank state and type its full name. Capitalization doesn&apos;t matter, no hints!
            </p>
          </div>
        </div>

        {/* Live Counts & Reset */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-end flex-wrap">
          <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-2xl shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                Solved
              </div>
              <div className="text-sm md:text-base font-black text-emerald-900 leading-none">
                {solvedCount} / {ALL_50_STATES.length}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-2xl shadow-xs">
            <AlertCircle className="w-4 h-4 text-rose-500" />
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-rose-700">
                Mistakes
              </div>
              <div className="text-sm md:text-base font-black text-rose-900 leading-none">
                {totalIncorrectAttempts}
              </div>
            </div>
          </div>

          {(solvedCount > 0 || totalIncorrectAttempts > 0) && (
            <button
              onClick={handleReset}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition border border-slate-200"
              title="Reset map progress and start over"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Map</span>
            </button>
          )}
        </div>
      </div>

      {/* Completion Summary Card when all 50 states are solved */}
      {isAllCompleted ? (
        <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-emerald-400 mb-4 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shrink-0">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  All 50 States Complete!
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  {totalIncorrectAttempts === 0
                    ? "Flawless run — zero incorrect attempts across the entire map!"
                    : `Here is your accuracy breakdown across all 50 states.`}
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-purple hover:bg-purple-700 text-white font-black text-sm shadow-md transition active:scale-95 shrink-0"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Again</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                States Solved
              </div>
              <div className="text-2xl font-black text-emerald-900 mt-1">50 / 50</div>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-700">
                Total Incorrect Attempts
              </div>
              <div className="text-2xl font-black text-rose-900 mt-1">
                {totalIncorrectAttempts}
              </div>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                First-Try Accuracy
              </div>
              <div className="text-2xl font-black text-indigo-900 mt-1">
                {firstTryCount} / 50 ({Math.round((firstTryCount / 50) * 100)}%)
              </div>
            </div>
          </div>

          {missedStatesSummary.length > 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-600 mb-3">
                States with Incorrect Attempts ({missedStatesSummary.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {missedStatesSummary.map(({ state, attempts }) => (
                  <div
                    key={state.id}
                    className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm"
                  >
                    <span className="font-bold text-slate-800">{state.name}</span>
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                      {attempts} {attempts === 1 ? "miss" : "misses"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Prompt & Text Entry Area (positioned above map so map stays visible) */
        <div className="w-full mb-4">
          {selectedState ? (
            <div
              className={`bg-white rounded-3xl p-4 md:p-5 shadow-xl border-4 border-yellow-400 animate-fade-in ${
                isShaking ? "animate-shake" : ""
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-stretch md:items-center gap-3"
              >
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-black text-slate-800">
                      Name the highlighted state
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Type the full name or click another state to switch
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    name="state-guess-no-autofill"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      if (feedback?.type === "error") setFeedback(null);
                    }}
                    placeholder="Type state name..."
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    className="flex-1 min-w-0 px-4 py-3 rounded-2xl border-2 border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none text-base md:text-lg font-bold bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  />

                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="px-5 py-3 rounded-2xl bg-brand-purple hover:bg-purple-700 disabled:bg-slate-300 text-white font-black text-sm md:text-base shadow-md transition flex items-center gap-1.5 shrink-0 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span>Submit</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedState(null);
                      setInputValue("");
                      setFeedback(null);
                    }}
                    className="p-3 rounded-2xl border-2 border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition shrink-0"
                    title="Cancel and pick another state"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </form>

              {feedback?.type === "error" && (
                <div className="mt-3 flex items-center gap-2 text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-3.5 py-2 text-xs md:text-sm font-bold">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{feedback.message}</span>
                </div>
              )}
            </div>
          ) : (
            <div
              className={`rounded-2xl px-4 py-3 border-2 flex items-center justify-between gap-3 text-sm font-bold shadow-sm ${
                feedback?.type === "success"
                  ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                  : feedback?.type === "info"
                  ? "bg-sky-50 border-sky-200 text-sky-900"
                  : "bg-white border-slate-200 text-slate-600"
              }`}
            >
              <div className="flex items-center gap-2">
                {feedback?.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <MapPin className="w-5 h-5 text-brand-purple shrink-0" />
                )}
                <span>
                  {feedback?.message || "Click any blank state on the map below to start!"}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Blank Interactive SVG Map Container */}
      <div className="w-full bg-slate-900 border-4 border-slate-700 rounded-3xl p-3 md:p-6 shadow-2xl relative overflow-hidden flex flex-col items-center">
        <div className="w-full h-[400px] md:h-[520px] flex items-center justify-center">
          <svg
            viewBox={US_MAP_VIEWBOX}
            className="w-full h-full filter drop-shadow-xl object-contain select-none"
            style={{ maxHeight: "100%" }}
          >
            <g>
              {ALL_50_STATES.map((state) => {
                const isSelected = selectedState?.id === state.id;
                const isSolved = solvedIds.includes(state.id);

                let fill = "#E2E8F0"; // Blank neutral map fill
                let stroke = "#475569";
                let strokeWidth = "1.2";

                if (isSolved) {
                  fill = "#10B981"; // Solved emerald green
                  stroke = "#047857";
                  strokeWidth = "1.5";
                } else if (isSelected) {
                  fill = "#FACC15"; // Highlighted yellow
                  stroke = "#CA8A04";
                  strokeWidth = "2.5";
                }

                return (
                  <path
                    key={state.id}
                    d={state.path}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    style={{ cursor: "pointer", transition: "all 0.2s ease" }}
                    className={
                      isSolved
                        ? "hover:brightness-105"
                        : isSelected
                        ? ""
                        : "hover:fill-sky-200"
                    }
                    onClick={() => handleStateClick(state)}
                  >
                    <title>{isSolved ? `${state.name} ✓` : "Click to name this state"}</title>
                  </path>
                );
              })}

              {/* Checkmarks over Solved States */}
              {ALL_50_STATES.map((state) => {
                if (!solvedIds.includes(state.id)) return null;
                const pos = pinPositions[state.id];
                if (!pos) return null;

                return (
                  <g
                    key={`check-${state.id}`}
                    transform={`translate(${pos.x}, ${pos.y}) scale(${pos.scale})`}
                    className="pointer-events-none drop-shadow-md animate-fade-in"
                  >
                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      fill="#065F46"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M -3.4 0.4 L -0.9 2.9 L 3.8 -2.6"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
