"use client";

import React, { useState, useEffect, useRef } from "react";
import { StateInfo, ALL_50_STATES, US_MAP_VIEWBOX } from "../../data/states/statesData";
import { playStateAudio, playPositiveFeedbackAudio, playNegativeFeedbackAudio } from "../../utils/states/audio";
import { shuffleArray } from "../../utils/states/shuffle";
import { RefreshCw, CheckCircle2, XCircle, ArrowRight, Volume2, Sparkles, MapPin, SpellCheck, Trophy } from "lucide-react";
import confetti from "canvas-confetti";

type QuestionType = "mc" | "spelling_map" | "spelling_audio" | "master_speller";

interface ExamQuizProps {
  dataset: StateInfo[];
  onSuccess: () => void;
  onFailure: () => void;
}

export const ExamQuiz: React.FC<ExamQuizProps> = ({ dataset, onSuccess, onFailure }) => {
  const [currentState, setCurrentState] = useState<StateInfo>(dataset[0]);
  const [questionType, setQuestionType] = useState<QuestionType>("mc");
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  // Non-repeating card deck queue state
  const stateDeckRef = useRef<StateInfo[]>([]);
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [statesTestedInRound, setStatesTestedInRound] = useState<number>(0);

  // Spelling state
  const [spellingInputs, setSpellingInputs] = useState<string[]>([]);
  const [blankInputVal, setBlankInputVal] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const masterInputRef = useRef<HTMLInputElement | null>(null);

  const handlePlayStateAudio = (name: string) => {
    setHasPlayedAudio(true);
    playStateAudio(name);
  };

  const loadNextQuestion = () => {
    if (!dataset || dataset.length === 0) return;

    // If deck is empty, shuffle a brand new deck of active states dataset
    if (stateDeckRef.current.length === 0) {
      stateDeckRef.current = shuffleArray(dataset);
    }

    // Take next state from non-repeating deck
    const targetState = stateDeckRef.current.pop()!;
    setCurrentState(targetState);

    // Track round progress
    const tested = dataset.length - stateDeckRef.current.length;
    setStatesTestedInRound(tested);
    if (tested === 1 && statesTestedInRound === dataset.length) {
      setRoundNumber((prev) => prev + 1);
    }

    // Question type selection: ~20% chance of Master Speller (Blank Box) challenge
    let randomType: QuestionType;
    if (Math.random() < 0.20) {
      randomType = "master_speller";
    } else {
      const standardTypes: QuestionType[] = ["mc", "spelling_map", "spelling_audio"];
      randomType = standardTypes[Math.floor(Math.random() * standardTypes.length)];
    }
    setQuestionType(randomType);

    // Reset quiz state
    setSelectedAnswer(null);
    setIsCompleted(false);
    setIsCorrect(null);
    setHasPlayedAudio(false);
    setBlankInputVal("");
    setSpellingInputs(new Array(targetState.name.length).fill(""));

    // Prepare MC options
    const wrongOptions = dataset.filter((s) => s.id !== targetState.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((s) => s.name);
    const allOptions = shuffleArray([...wrongOptions, targetState.name]);
    setOptions(allOptions);

    // Auto-play audio if audio question
    if (randomType === "spelling_audio") {
      setTimeout(() => {
        handlePlayStateAudio(targetState.name);
      }, 300);
    }

    // Auto focus appropriate input
    if (randomType === "master_speller") {
      setTimeout(() => {
        masterInputRef.current?.focus();
      }, 200);
    } else if (randomType !== "mc") {
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 200);
    }
  };

  useEffect(() => {
    stateDeckRef.current = [];
    loadNextQuestion();
  }, [dataset]);

  // Handle Multiple Choice Selection
  const handleSelectMCOption = (option: string) => {
    if (selectedAnswer !== null || isCompleted) return;
    setSelectedAnswer(option);
    setIsCompleted(true);

    if (option === currentState.name) {
      setIsCorrect(true);
      onSuccess();
      playPositiveFeedbackAudio(); // Play random positive MP3 response!
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    } else {
      setIsCorrect(false);
      onFailure();
      playNegativeFeedbackAudio(); // Play random negative MP3 response!
    }
  };

  // Handle Spelling Box Typing
  const handleSpellingChange = (index: number, val: string) => {
    if (isCompleted) return;

    const upperVal = val.toUpperCase().slice(-1);
    const newInputs = [...spellingInputs];
    newInputs[index] = upperVal;
    setSpellingInputs(newInputs);

    // Auto-advance focus
    if (upperVal !== "" && index < currentState.name.length - 1) {
      if (currentState.name[index + 1] === " ") {
        newInputs[index + 1] = " ";
        setSpellingInputs(newInputs);
        inputRefs.current[index + 2]?.focus();
      } else {
        inputRefs.current[index + 1]?.focus();
      }
    }

    // Check if user finished spelling
    const filledCount = newInputs.filter((char, idx) => {
      return currentState.name[idx] === " " || char !== "";
    }).length;

    if (filledCount === currentState.name.length) {
      const userSpelling = newInputs.join("").trim().toLowerCase();
      const targetSpelling = currentState.name.toLowerCase();

      setIsCompleted(true);
      if (userSpelling === targetSpelling) {
        setIsCorrect(true);
        onSuccess();
        playPositiveFeedbackAudio(); // Play random positive MP3 response!
        confetti({
          particleCount: 110,
          spread: 85,
          origin: { y: 0.6 },
        });
      } else {
        setIsCorrect(false);
        onFailure();
        playNegativeFeedbackAudio(); // Play random negative MP3 response!
      }
    }
  };

  const handleSpellingKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && spellingInputs[index] === "" && index > 0) {
      if (currentState.name[index - 1] === " " && index - 2 >= 0) {
        inputRefs.current[index - 2]?.focus();
      } else {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  // Handle Master Speller Form Submission (Blank Box Challenge)
  const handleMasterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCompleted || !blankInputVal.trim()) return;

    const userSpelling = blankInputVal.trim().toLowerCase();
    const targetSpelling = currentState.name.trim().toLowerCase();
    const correct = userSpelling === targetSpelling;

    setIsCompleted(true);
    setIsCorrect(correct);

    if (correct) {
      onSuccess();
      playPositiveFeedbackAudio();
      confetti({
        particleCount: 110,
        spread: 85,
        origin: { y: 0.6 },
      });
    } else {
      onFailure();
      playNegativeFeedbackAudio();
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-3xl p-4 md:p-6 shadow-xl border-4 border-brand-purple/20 flex flex-col items-center">
      {/* Top Header & Question Type Badge */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          {questionType === "mc" && (
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider bg-blue-100 text-brand-blue px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <MapPin className="w-4 h-4" /> Type 1: Map Identification
            </span>
          )}
          {questionType === "spelling_map" && (
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider bg-purple-100 text-brand-purple px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <SpellCheck className="w-4 h-4" /> Type 2: Map & Spelling
            </span>
          )}
          {questionType === "spelling_audio" && (
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider bg-pink-100 text-brand-pink px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <Volume2 className="w-4 h-4" /> Type 3: Audio & Spelling
            </span>
          )}
          {questionType === "master_speller" && (
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600" /> Challenge: Master Speller
            </span>
          )}

          <span className="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1.5 rounded-full flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            State {statesTestedInRound} of {dataset.length} (Round {roundNumber})
          </span>
        </div>

        <button
          onClick={loadNextQuestion}
          className="flex items-center space-x-1.5 text-xs md:text-sm font-bold text-gray-500 hover:text-brand-purple transition bg-gray-100 px-3 py-1.5 rounded-full"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Skip Question</span>
        </button>
      </div>

      {/* 2-COLUMN SIDE-BY-SIDE GRID LAYOUT (Map Left 7 cols, Questions Right 5 cols) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Left Column: Generous Large US Map Display */}
        <div className="lg:col-span-7 w-full h-[360px] md:h-[440px] lg:h-[480px] p-2.5 bg-slate-900 border-4 border-slate-700 rounded-3xl relative shadow-xl flex items-center justify-center overflow-hidden">
          <svg
            viewBox={US_MAP_VIEWBOX}
            className="w-full h-full filter drop-shadow-lg object-contain"
            style={{ maxHeight: "100%" }}
          >
            <g>
              {/* Render all 50 US States as full US map backdrop */}
              {ALL_50_STATES.map((state) => {
                const isInActiveDataset = dataset.some((d) => d.id === state.id);
                const isTarget = state.id === currentState.id;
                const isSelected = selectedAnswer !== null && state.name === selectedAnswer;

                let fillColor = "#1E293B";
                let strokeColor = "#334155";
                let strokeWidth = "1";

                if (isInActiveDataset) {
                  fillColor = "#38BDF8";
                  strokeColor = "#0284C7";
                  strokeWidth = "1.5";
                }

                if (isTarget) {
                  fillColor = "#FACC15";
                  strokeColor = "#CA8A04";
                  strokeWidth = "3";
                } else if (isSelected) {
                  fillColor = "#EF4444";
                  strokeColor = "#B91C1C";
                }

                return (
                  <path
                    key={state.id}
                    d={state.path}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className={`transition-all duration-200 ${
                      isTarget ? "animate-pulse" : ""
                    }`}
                  >
                    <title>{isTarget ? "Highlighted State" : state.name}</title>
                  </path>
                );
              })}
            </g>
          </svg>

          <div className="absolute bottom-2 left-3 text-[11px] font-bold text-sky-200 bg-slate-800/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-600">
            📍 Target State Highlighted in Gold
          </div>
        </div>

        {/* Right Column: QUESTION INTERACTION AREA */}
        <div className="lg:col-span-5 w-full flex flex-col items-center justify-center">
        {/* TYPE 1: MULTIPLE CHOICE */}
        {questionType === "mc" && (
          <div className="w-full flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-extrabold text-gray-800 text-center mb-3">
              Which state is highlighted in yellow on the map?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-4">
              {options.map((option, idx) => {
                let btnStyle = "bg-gray-50 border-2 border-gray-200 text-gray-700 hover:border-brand-blue hover:bg-sky-50";

                if (isCompleted) {
                  if (option === currentState.name) {
                    btnStyle = "bg-green-500 border-2 border-green-600 text-white font-bold scale-[1.02]";
                  } else if (option === selectedAnswer) {
                    btnStyle = "bg-red-500 border-2 border-red-600 text-white font-bold";
                  } else {
                    btnStyle = "bg-gray-100 border-2 border-gray-200 text-gray-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isCompleted}
                    onClick={() => handleSelectMCOption(option)}
                    className={`p-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-200 flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isCompleted && option === currentState.name && (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    )}
                    {isCompleted && option === selectedAnswer && option !== currentState.name && (
                      <XCircle className="w-6 h-6 text-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TYPE 2: MAP SPELLING */}
        {questionType === "spelling_map" && (
          <div className="w-full flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-extrabold text-gray-800 text-center mb-2">
              Spell the name of the highlighted state!
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mb-3">
              ({currentState.name.length} letters)
            </p>

            {/* Letter Slots Grouped by Word for Clean Multi-Line Formatting */}
            <div className="flex flex-col items-center justify-center gap-3 max-w-full my-3">
              {currentState.name.split(" ").map((word, wordIdx, wordsArr) => {
                // Calculate starting character index for current word in overall state name string
                const wordStartIndex = wordsArr.slice(0, wordIdx).join(" ").length + (wordIdx > 0 ? 1 : 0);

                return (
                  <div key={wordIdx} className="flex flex-wrap items-center justify-center gap-2">
                    {word.split("").map((targetChar, charOffset) => {
                      const overallIdx = wordStartIndex + charOffset;
                      let boxBorder = "border-2 border-brand-purple/40 bg-purple-50 text-slate-900 font-bold";
                      if (isCompleted) {
                        const userChar = (spellingInputs[overallIdx] || "").toLowerCase();
                        const correctChar = targetChar.toLowerCase();
                        if (userChar === correctChar) {
                          boxBorder = "border-2 border-green-500 bg-green-100 text-green-900 font-bold scale-105";
                        } else {
                          boxBorder = "border-2 border-red-500 bg-red-100 text-red-900 font-bold animate-shake";
                        }
                      }

                      return (
                        <input
                          key={overallIdx}
                          ref={(el) => {
                            inputRefs.current[overallIdx] = el;
                          }}
                          type="text"
                          maxLength={1}
                          value={spellingInputs[overallIdx] || ""}
                          onChange={(e) => handleSpellingChange(overallIdx, e.target.value)}
                          onKeyDown={(e) => handleSpellingKeyDown(overallIdx, e)}
                          disabled={isCompleted}
                          style={{ color: isCompleted ? undefined : '#0f172a', padding: 0, lineHeight: 1 }}
                          className={`w-7 h-9 sm:w-9 sm:h-11 md:w-11 md:h-13 rounded-xl text-base sm:text-lg md:text-xl font-extrabold text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/40 uppercase transition-all p-0 m-0 box-border leading-none ${boxBorder}`}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TYPE 3: AUDIO SPELLING */}
        {questionType === "spelling_audio" && (
          <div className="w-full flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-extrabold text-gray-800 text-center mb-2">
              Listen to the state name and spell it!
            </h3>

            {/* Listen / Replay Audio Button */}
            <button
              onClick={() => handlePlayStateAudio(currentState.name)}
              className="my-2 bg-gradient-to-r from-brand-pink to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold px-6 py-3 rounded-2xl shadow-lg flex items-center space-x-2.5 transition transform hover:scale-105 active:scale-95"
            >
              <Volume2 className="w-6 h-6 animate-pulse" />
              <span>{hasPlayedAudio ? "Replay State Name 🔊" : "Click to Listen 🔊"}</span>
            </button>

            {/* Letter Slots Grouped by Word for Clean Multi-Line Formatting */}
            <div className="flex flex-col items-center justify-center gap-3 max-w-full my-3">
              {currentState.name.split(" ").map((word, wordIdx, wordsArr) => {
                const wordStartIndex = wordsArr.slice(0, wordIdx).join(" ").length + (wordIdx > 0 ? 1 : 0);

                return (
                  <div key={wordIdx} className="flex flex-wrap items-center justify-center gap-2">
                    {word.split("").map((targetChar, charOffset) => {
                      const overallIdx = wordStartIndex + charOffset;
                      let boxBorder = "border-2 border-brand-pink/40 bg-pink-50 text-slate-900 font-bold";
                      if (isCompleted) {
                        const userChar = (spellingInputs[overallIdx] || "").toLowerCase();
                        const correctChar = targetChar.toLowerCase();
                        if (userChar === correctChar) {
                          boxBorder = "border-2 border-green-500 bg-green-100 text-green-900 font-bold scale-105";
                        } else {
                          boxBorder = "border-2 border-red-500 bg-red-100 text-red-900 font-bold animate-shake";
                        }
                      }

                      return (
                        <input
                          key={overallIdx}
                          ref={(el) => {
                            inputRefs.current[overallIdx] = el;
                          }}
                          type="text"
                          maxLength={1}
                          value={spellingInputs[overallIdx] || ""}
                          onChange={(e) => handleSpellingChange(overallIdx, e.target.value)}
                          onKeyDown={(e) => handleSpellingKeyDown(overallIdx, e)}
                          disabled={isCompleted}
                          style={{ color: isCompleted ? undefined : '#0f172a', padding: 0, lineHeight: 1 }}
                          className={`w-7 h-9 sm:w-9 sm:h-11 md:w-11 md:h-13 rounded-xl text-base sm:text-lg md:text-xl font-extrabold text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/40 uppercase transition-all p-0 m-0 box-border leading-none ${boxBorder}`}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TYPE 4: MASTER SPELLER (BLANK BOX CHALLENGE) */}
        {questionType === "master_speller" && (
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-500 text-white shadow-sm">
                ⭐ Challenge Mode
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-extrabold text-gray-800 text-center mb-1">
              Type the full state name from memory!
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mb-4 text-center">
              No letter count clues. Look at the gold state on the map and spell it correctly.
            </p>

            <form onSubmit={handleMasterSubmit} className="w-full max-w-sm flex flex-col items-center gap-3">
              <div className="relative w-full">
                <input
                  ref={masterInputRef}
                  type="text"
                  value={blankInputVal}
                  onChange={(e) => setBlankInputVal(e.target.value)}
                  disabled={isCompleted}
                  placeholder="Type state name here..."
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  className={`w-full px-5 py-3.5 text-center text-lg md:text-xl font-black rounded-2xl border-2 transition-all shadow-md focus:outline-none focus:ring-4 ${
                    isCompleted
                      ? isCorrect
                        ? "border-green-500 bg-green-50 text-green-900"
                        : "border-red-500 bg-red-50 text-red-900 animate-shake"
                      : "border-amber-400 bg-amber-50/50 text-slate-900 focus:border-amber-500 focus:ring-amber-200"
                  }`}
                />
              </div>

              {!isCompleted && (
                <button
                  type="submit"
                  disabled={!blankInputVal.trim()}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold py-3 px-6 rounded-2xl shadow-lg transition transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Submit Answer</span>
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              )}
            </form>
          </div>
        )}

        {/* VERIFICATION FEEDBACK CARD */}
        {isCompleted && (
          <div className="w-full flex flex-col items-center bg-gray-50 p-4 rounded-2xl border border-gray-200 mt-4 animate-slideUp">
            {isCorrect ? (
              <div className="text-center mb-3">
                <span className="text-green-600 font-extrabold text-lg md:text-xl flex items-center justify-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  Awesome Job! Correct answer is {currentState.name}!
                </span>
                <p className="text-xs md:text-sm text-gray-600 mt-1 italic">
                  &ldquo;{currentState.funFact}&rdquo;
                </p>
              </div>
            ) : (
              <div className="text-center mb-3">
                <span className="text-red-500 font-extrabold text-lg md:text-xl">
                  Nice try! The correct state is {currentState.name}.
                </span>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Keep practicing, you&apos;ll get the next one!
                </p>
              </div>
            )}

            <button
              onClick={loadNextQuestion}
              className="w-full max-w-xs bg-brand-purple hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-2xl shadow-lg flex items-center justify-center space-x-2 transition transform hover:scale-105"
            >
              <span>Next Question</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};
