"use client";

import React, { useState, useEffect } from "react";
import { StateInfo, ALL_50_STATES, US_MAP_VIEWBOX } from "../../data/states/statesData";
import { FocusType } from "../../data/states/scheduleData";
import { playPositiveFeedbackAudio, playNegativeFeedbackAudio } from "../../utils/states/audio";
import { shuffleArray } from "../../utils/states/shuffle";
import { MapPin, CheckCircle2, XCircle, Sparkles, Star, RotateCcw, Trophy, ArrowRight, HelpCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface MapTapQuizProps {
  dataset: StateInfo[];
  focus: FocusType;
  onSuccess: () => void;
  onFailure: () => void;
}

export const MapTapQuiz: React.FC<MapTapQuizProps> = ({
  dataset,
  focus,
  onSuccess,
  onFailure,
}) => {
  const [selectedState, setSelectedState] = useState<StateInfo | null>(null);
  const [stepInBoth, setStepInBoth] = useState<"state" | "capital">("state");
  const [options, setOptions] = useState<string[]>([]);
  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [hint, setHint] = useState<string | null>(null);

  // Set of state IDs that the student has conquered in this session
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("states_mastered_map_ids");
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Track the set of valid state IDs in current dataset
  const datasetIds = new Set(dataset.map((s) => s.id));
  const masteredInCurrentDataset = masteredIds.filter((id) => datasetIds.has(id)).length;

  const saveMastered = (nextList: string[]) => {
    setMasteredIds(nextList);
    try {
      localStorage.setItem("states_mastered_map_ids", JSON.stringify(nextList));
    } catch (e) {}
  };

  const handleResetMastered = () => {
    saveMastered([]);
    setSelectedState(null);
    setChosenAnswer(null);
    setIsAnswerCorrect(null);
  };

  // Build question options when a state is tapped or when moving from state->capital
  const setupQuestion = (target: StateInfo, activeStep: "state" | "capital") => {
    setSelectedState(target);
    setChosenAnswer(null);
    setIsAnswerCorrect(null);
    setHint(null);

    const isCapitalQuestion = focus === "capitals" || (focus === "both" && activeStep === "capital");

    if (isCapitalQuestion) {
      const wrong = dataset
        .filter((s) => s.id !== target.id)
        .map((s) => s.capital);
      const shuffledWrong = shuffleArray(wrong).slice(0, 3);
      setOptions(shuffleArray([...shuffledWrong, target.capital]));
    } else {
      const wrong = dataset
        .filter((s) => s.id !== target.id)
        .map((s) => s.name);
      const shuffledWrong = shuffleArray(wrong).slice(0, 3);
      setOptions(shuffleArray([...shuffledWrong, target.name]));
    }
  };

  const handleStateClick = (state: StateInfo) => {
    if (!datasetIds.has(state.id)) return; // not in active group
    setStepInBoth("state");
    setupQuestion(state, "state");
  };

  const handleOptionClick = (option: string) => {
    if (!selectedState || chosenAnswer !== null) return;
    setChosenAnswer(option);

    const isCapitalQuestion = focus === "capitals" || (focus === "both" && stepInBoth === "capital");
    const correctAnswer = isCapitalQuestion ? selectedState.capital : selectedState.name;

    if (option === correctAnswer) {
      // Correct!
      setIsAnswerCorrect(true);
      playPositiveFeedbackAudio();

      if (focus === "both" && stepInBoth === "state") {
        // In "both" mode, proceed to capital step
        setTimeout(() => {
          setStepInBoth("capital");
          setupQuestion(selectedState, "capital");
        }, 1100);
      } else {
        // Full question completed!
        onSuccess();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });

        // Add to mastered list if not already there
        if (!masteredIds.includes(selectedState.id)) {
          saveMastered([...masteredIds, selectedState.id]);
        }
      }
    } else {
      // Incorrect
      setIsAnswerCorrect(false);
      onFailure();
      playNegativeFeedbackAudio();
      setHint(`Hint: It starts with "${correctAnswer.charAt(0)}"!`);
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      {/* Top Status & Progress Bar */}
      <div className="w-full bg-white rounded-3xl p-4 md:p-6 shadow-xl border-4 border-brand-purple/20 mb-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-pink text-white flex items-center justify-center shadow-md">
            <MapPin className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base md:text-lg font-black text-slate-800">
                Interactive Map Explorer
              </h2>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                {focus === "states" ? "🗺️ States" : focus === "capitals" ? "🏛️ Capitals" : "⭐ States & Capitals"}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Tap any highlighted state on the map to test your knowledge!
            </p>
          </div>
        </div>

        {/* Progress & Reset */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center space-x-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-2xl shadow-xs">
            <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Conquered</div>
              <div className="text-sm md:text-base font-black text-amber-900 leading-none">
                {masteredInCurrentDataset} / {dataset.length}
              </div>
            </div>
          </div>

          {masteredInCurrentDataset > 0 && (
            <button
              onClick={handleResetMastered}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition border border-slate-200"
              title="Reset all star pins on this map"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Stars</span>
            </button>
          )}
        </div>
      </div>

      {/* SVG Interactive Map Container */}
      <div className="w-full bg-slate-900 border-4 border-slate-700 rounded-3xl p-3 md:p-6 shadow-2xl relative overflow-hidden flex flex-col items-center">
        {/* Instruction overlay for kids */}
        <div className="absolute top-4 left-4 z-10 bg-slate-800/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/20 text-white text-xs font-bold flex items-center gap-2 shadow-md">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span>Click any glowing state below!</span>
        </div>

        <div className="w-full h-[400px] md:h-[520px] flex items-center justify-center">
          <svg
            viewBox={US_MAP_VIEWBOX}
            className="w-full h-full filter drop-shadow-xl object-contain select-none"
            style={{ maxHeight: "100%" }}
          >
            <g>
              {ALL_50_STATES.map((state) => {
                const isPlayable = datasetIds.has(state.id);
                const isSelected = selectedState?.id === state.id;
                const isMastered = masteredIds.includes(state.id);

                // Styling logic:
                let fill = "#334155"; // Inactive/outside unit: soft slate
                let stroke = "#1e293b";
                let strokeWidth = "1";
                let opacity = "0.45";
                let cursor = "default";

                if (isPlayable) {
                  cursor = "pointer";
                  opacity = "1";

                  if (isMastered) {
                    fill = "#10B981"; // Conquered: emerald green
                    stroke = "#047857";
                    strokeWidth = "1.5";
                  } else {
                    fill = "#38BDF8"; // Playable default: sky blue
                    stroke = "#0284C7";
                    strokeWidth = "1.5";
                  }

                  if (isSelected) {
                    fill = "#FACC15"; // Selected target: radiant yellow
                    stroke = "#CA8A04";
                    strokeWidth = "3";
                  }
                }

                return (
                  <path
                    key={state.id}
                    d={state.path}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    opacity={opacity}
                    style={{ cursor, transition: "all 0.25s ease" }}
                    className={isPlayable ? "hover:brightness-110 active:scale-95" : ""}
                    onClick={() => handleStateClick(state)}
                  >
                    <title>{isPlayable ? (isMastered ? `${state.name} ⭐` : "Tap to test this state!") : ""}</title>
                  </path>
                );
              })}

              {/* Render Gold Star Pins for Mastered States */}
              {ALL_50_STATES.map((state) => {
                if (!datasetIds.has(state.id) || !masteredIds.includes(state.id) || !state.bounds) {
                  return null;
                }
                const centerX = state.bounds.minX + state.bounds.width / 2;
                const centerY = state.bounds.minY + state.bounds.height / 2;

                return (
                  <g
                    key={`star-${state.id}`}
                    transform={`translate(${centerX - 7}, ${centerY - 7})`}
                    className="pointer-events-none drop-shadow-md animate-fade-in"
                  >
                    <circle cx="7" cy="7" r="8" fill="#F59E0B" />
                    <polygon
                      points="7,2 8.6,5.3 12.2,5.8 9.6,8.3 10.2,12 7,10.2 3.8,12 4.4,8.3 1.8,5.8 5.4,5.3"
                      fill="#FEF08A"
                    />
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>

      {/* Interactive Question Card */}
      <div className="w-full mt-4">
        {selectedState ? (
          <div className="bg-white rounded-3xl p-5 md:p-7 shadow-2xl border-4 border-yellow-400 animate-fade-in">
            {/* Header info */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-800">
                    {focus === "capitals"
                      ? `What is the capital of ${selectedState.name}?`
                      : focus === "both" && stepInBoth === "capital"
                      ? `Step 2: What is the capital of ${selectedState.name}?`
                      : "Which state is highlighted in yellow?"}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {focus === "both" ? `Challenge: Step ${stepInBoth === "state" ? "1 of 2" : "2 of 2"}` : "Pick the correct answer below!"}
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Large Tactile Multiple-Choice Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {options.map((option, idx) => {
                const isSelected = chosenAnswer === option;
                const isCapitalQuestion = focus === "capitals" || (focus === "both" && stepInBoth === "capital");
                const correctAnswer = isCapitalQuestion ? selectedState.capital : selectedState.name;
                const isTarget = option === correctAnswer;

                let btnStyle = "bg-slate-50 border-2 border-slate-200 text-slate-800 hover:bg-purple-50 hover:border-purple-300";

                if (chosenAnswer !== null) {
                  if (isTarget) {
                    btnStyle = "bg-emerald-500 border-2 border-emerald-600 text-white shadow-lg scale-[1.02]";
                  } else if (isSelected) {
                    btnStyle = "bg-rose-500 border-2 border-rose-600 text-white";
                  } else {
                    btnStyle = "bg-slate-100 border-2 border-slate-200 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={chosenAnswer !== null}
                    onClick={() => handleOptionClick(option)}
                    className={`py-4 px-5 rounded-2xl font-black text-base md:text-lg transition-all duration-200 shadow-sm flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {chosenAnswer !== null && isTarget && (
                      <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    )}
                    {chosenAnswer !== null && isSelected && !isTarget && (
                      <XCircle className="w-6 h-6 text-white shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback / Fun Fact Banner */}
            {isAnswerCorrect === true && (
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 flex items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm md:text-base text-emerald-900">
                      Awesome Job! ⭐
                    </h4>
                    <p className="text-xs text-emerald-700">
                      {selectedState.funFact}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedState(null);
                    setChosenAnswer(null);
                    setIsAnswerCorrect(null);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 shadow-md transition"
                >
                  Pick Next State 🗺️
                </button>
              </div>
            )}

            {isAnswerCorrect === false && (
              <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-3 flex items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span className="text-xs font-bold text-rose-800">
                    {hint || "Almost! Try another choice!"}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setChosenAnswer(null);
                    setIsAnswerCorrect(null);
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shrink-0 shadow-sm transition"
                >
                  Try Again ↺
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 text-center shadow-lg border-2 border-slate-200">
            <p className="text-sm md:text-base font-extrabold text-slate-700">
              👆 Tap any highlighted state on the map above to start the challenge!
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Conquer states to earn gold stars across the country! 🌟
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
