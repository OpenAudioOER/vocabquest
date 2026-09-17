"use client";

import React, { useState, useEffect, useRef } from "react";
import { WordItem, INITIAL_WORD_LIST } from "../../data/spelling/wordList";
import { playWordAudio, playSparkleChime, playSadTrombone } from "../../utils/spelling/audio";
import { STICKERS_COLLECTION, Sticker } from "../../data/spelling/stickersData";
import { unlockSticker } from "../../utils/spelling/storage";
import { MascotFriend } from "./MascotFriend";
import { StickerGraphic } from "./StickerGraphic";
import { Volume2, Lightbulb, RefreshCw, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface SpellingCardProps {
  onWordCompleted: (newTotalCorrect: number) => void;
  correctCount: number;
}

export const SpellingCard: React.FC<SpellingCardProps> = ({ onWordCompleted, correctCount }) => {
  const [currentWordItem, setCurrentWordItem] = useState<WordItem>(INITIAL_WORD_LIST[0]);
  const [inputs, setInputs] = useState<string[]>([]);
  const [usedHint, setUsedHint] = useState(false);
  const [isSelectingHintSlot, setIsSelectingHintSlot] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [unlockedNewSticker, setUnlockedNewSticker] = useState<Sticker | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const recentHistoryRef = useRef<string[]>([]);
  // Queue to track words student answered incorrectly, scheduled to reappear after ~3 turns
  const missedQueueRef = useRef<{ wordId: string; delayRemaining: number }[]>([]);

  const checkAndTriggerCompletion = (currentInputs: string[], wordItem: WordItem) => {
    const userSpelling = currentInputs.join("").toLowerCase();
    const targetSpelling = wordItem.word.toLowerCase();

    setIsCompleted(true);
    if (userSpelling === targetSpelling) {
      setIsCorrect(true);
      playSparkleChime(); // Play magical sparkle chime on correct answer!

      const updatedTotal = correctCount + 1;
      onWordCompleted(updatedTotal);

      // Check if unlocked a sticker (every 10 correct answers)
      if (updatedTotal > 0 && updatedTotal % 10 === 0) {
        const stickerIndex = (Math.floor(updatedTotal / 10) - 1) % STICKERS_COLLECTION.length;
        const newSticker = STICKERS_COLLECTION[stickerIndex];
        unlockSticker(newSticker.id);
        setUnlockedNewSticker(newSticker);
      }

      confetti({
        particleCount: 110,
        spread: 85,
        origin: { y: 0.6 },
      });
    } else {
      setIsCorrect(false);
      playSadTrombone(); // Play sad trombone on incorrect answer!

      // Schedule missed word to reappear in ~3 turns
      if (!missedQueueRef.current.some((item) => item.wordId === wordItem.id)) {
        missedQueueRef.current.push({ wordId: wordItem.id, delayRemaining: 3 });
      }
    }
  };

  const loadNextWord = () => {
    // Decrement delay countdown for queued missed words
    missedQueueRef.current = missedQueueRef.current.map((item) => ({
      ...item,
      delayRemaining: item.delayRemaining - 1,
    }));

    // Check if any missed word is ready to reappear (delayRemaining <= 0)
    const readyMissedIndex = missedQueueRef.current.findIndex((item) => item.delayRemaining <= 0);
    let target: WordItem;

    if (readyMissedIndex !== -1) {
      const missedItem = missedQueueRef.current[readyMissedIndex];
      missedQueueRef.current.splice(readyMissedIndex, 1);
      target = INITIAL_WORD_LIST.find((w) => w.id === missedItem.wordId) || INITIAL_WORD_LIST[0];
    } else {
      // Pick random word not recently seen
      const availablePool = INITIAL_WORD_LIST.filter(
        (item) => !recentHistoryRef.current.includes(item.id)
      );
      const candidateList = availablePool.length > 0 ? availablePool : INITIAL_WORD_LIST;
      const randomIndex = Math.floor(Math.random() * candidateList.length);
      target = candidateList[randomIndex];
    }

    // Update recent history queue (keep last 5 words)
    recentHistoryRef.current = [...recentHistoryRef.current, target.id].slice(-5);

    setCurrentWordItem(target);
    setInputs(new Array(target.word.length).fill(""));
    setUsedHint(false);
    setIsSelectingHintSlot(false);
    setIsCompleted(false);
    setIsCorrect(null);
    setUnlockedNewSticker(null);

    // Auto-play audio when word loads
    setTimeout(() => {
      playWordAudio(target.word);
    }, 300);

    // Auto focus first input
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 200);
  };

  useEffect(() => {
    loadNextWord();
  }, []);

  const handleInputChange = (index: number, val: string) => {
    if (isCompleted) return;

    // Extract letter(s) typed or pasted
    const cleanVal = val.replace(/[^a-zA-Z]/g, "").toUpperCase();
    if (!cleanVal) {
      // User cleared the box (e.g. backspace/delete)
      const newInputs = [...inputs];
      newInputs[index] = "";
      setInputs(newInputs);
      return;
    }

    // If typing a new letter into an already occupied box, take the newest character
    const charToUse = cleanVal.slice(-1);
    const newInputs = [...inputs];
    newInputs[index] = charToUse;
    setInputs(newInputs);

    // Auto-advance cursor to next box immediately
    if (index < currentWordItem.word.length - 1) {
      inputRefs.current[index + 1]?.focus();
      inputRefs.current[index + 1]?.select();
    }

    // Check if user filled all boxes
    const filledCount = newInputs.filter((char) => char !== "").length;
    if (filledCount === currentWordItem.word.length) {
      checkAndTriggerCompletion(newInputs, currentWordItem);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (inputs[index] !== "") {
        // Clear current box
        const newInputs = [...inputs];
        newInputs[index] = "";
        setInputs(newInputs);
      } else if (index > 0) {
        // Move focus back and clear previous box
        const newInputs = [...inputs];
        newInputs[index - 1] = "";
        setInputs(newInputs);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < currentWordItem.word.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Start Targeted Hint Mode (Prompts student to pick which letter slot to reveal)
  const handleStartHintSelection = () => {
    if (usedHint || isCompleted) return;
    setIsSelectingHintSlot(true);
  };

  // Reveal letter at specific slot chosen by student
  const handleRevealSpecificSlot = (targetIndex: number) => {
    const targetChar = currentWordItem.word[targetIndex].toUpperCase();
    const newInputs = [...inputs];
    newInputs[targetIndex] = targetChar;
    setInputs(newInputs);

    setUsedHint(true);
    setIsSelectingHintSlot(false);

    // Check if revealing this hint filled the final box
    const filledCount = newInputs.filter((val) => val !== "").length;
    if (filledCount === currentWordItem.word.length) {
      checkAndTriggerCompletion(newInputs, currentWordItem);
    } else {
      // Auto focus next empty box
      const nextEmpty = newInputs.findIndex((val) => val === "");
      if (nextEmpty !== -1) {
        inputRefs.current[nextEmpty]?.focus();
      }
    }
  };

  const mascotStatus = isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : "idle";

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      {/* Prominent Animal Friend Mascot */}
      <MascotFriend status={mascotStatus} />

      {/* Main Spelling Card */}
      <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-palette-pink flex flex-col items-center relative mt-2">
        {/* Top Header & Skip Button */}
        <div className="w-full flex items-center justify-between mb-2">
          <span className="text-xs md:text-sm font-black bg-palette-mint text-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Word {currentWordItem.word.length} Letters
          </span>

          <button
            onClick={loadNextWord}
            className="flex items-center space-x-1.5 text-xs md:text-sm font-black text-purple-900 transition bg-palette-lavender px-3.5 py-1.5 rounded-full hover:bg-purple-200"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Skip Word</span>
          </button>
        </div>

        {/* Big Intuitive Audio Play Button */}
        <button
          onClick={() => playWordAudio(currentWordItem.word)}
          className="my-3 bg-gradient-to-r from-palette-pink via-palette-lavender to-palette-blue hover:opacity-95 text-purple-950 font-black px-8 py-4 rounded-3xl shadow-xl flex items-center space-x-3 transition transform hover:scale-105 active:scale-95 text-lg md:text-xl border-4 border-white"
        >
          <Volume2 className="w-8 h-8 animate-pulse text-purple-900" />
          <span>Click to Listen 🔊</span>
        </button>

        {/* Targeted Hint Tool Prompt */}
        <div className="my-2">
          {!usedHint && !isCompleted ? (
            !isSelectingHintSlot ? (
              <button
                onClick={handleStartHintSelection}
                className="inline-flex items-center space-x-1.5 text-xs md:text-sm font-black text-amber-900 bg-palette-yellow hover:bg-yellow-200 px-4 py-2 rounded-full border-2 border-amber-300 transition shadow-sm"
              >
                <Lightbulb className="w-4.5 h-4.5 text-amber-600 fill-amber-400" />
                <span>Need a Hint? (Pick 1 Letter to Reveal)</span>
              </button>
            ) : (
              <div className="bg-amber-100 border-2 border-amber-400 text-amber-950 px-4 py-2 rounded-2xl text-xs md:text-sm font-black animate-bounce flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <span>Tap any empty box below to reveal that letter! 👇</span>
              </div>
            )
          ) : usedHint ? (
            <span className="text-xs font-black text-amber-900 bg-palette-yellow px-3.5 py-1.5 rounded-full border border-amber-300">
              💡 Hint Used!
            </span>
          ) : null}
        </div>

        {/* Tactile Letter Slots with Targeted Hint Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-full my-4">
          {currentWordItem.word.split("").map((targetChar, idx) => {
            const isFilled = inputs[idx] !== "";
            let boxBorder = "border-4 border-palette-lavender bg-purple-50 text-purple-950";

            if (isCompleted) {
              const userChar = (inputs[idx] || "").toLowerCase();
              const correctChar = targetChar.toLowerCase();
              if (userChar === correctChar) {
                boxBorder = "border-4 border-emerald-400 bg-palette-mint text-emerald-950 font-black scale-105";
              } else {
                boxBorder = "border-4 border-rose-400 bg-pink-100 text-rose-950 font-black animate-shake";
              }
            } else if (isSelectingHintSlot && !isFilled) {
              boxBorder = "border-4 border-amber-400 bg-yellow-100 cursor-pointer animate-pulse";
            }

            return (
              <div key={idx} className="flex flex-col items-center relative">
                {/* Reveal button overlay during hint selection */}
                {isSelectingHintSlot && !isFilled && (
                  <button
                    onClick={() => handleRevealSpecificSlot(idx)}
                    className="absolute -top-3 z-10 bg-amber-400 text-amber-950 text-xs font-black px-2 py-0.5 rounded-full shadow-md hover:bg-amber-500 transition scale-110"
                  >
                    Reveal 💡
                  </button>
                )}

                <input
                  ref={(el) => {
                    inputRefs.current[idx] = el;
                  }}
                  type="text"
                  maxLength={1}
                  value={inputs[idx] || ""}
                  onChange={(e) => handleInputChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  disabled={isCompleted}
                  onClick={() => {
                    if (isSelectingHintSlot && !isFilled) {
                      handleRevealSpecificSlot(idx);
                    }
                  }}
                  className={`w-12 h-14 md:w-16 md:h-18 rounded-2xl text-2xl md:text-3xl font-black text-center shadow-md focus:outline-none focus:ring-4 focus:ring-palette-blue uppercase transition-all ${boxBorder}`}
                />
              </div>
            );
          })}
        </div>

        {/* Completion Feedback Card */}
        {isCompleted && (
          <div className="w-full flex flex-col items-center bg-palette-lavender/40 p-5 rounded-3xl border-2 border-purple-200 mt-4 animate-slideUp">
            {isCorrect ? (
              <div className="text-center mb-3">
                <span className="text-emerald-800 font-black text-xl flex items-center justify-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-400" />
                  Awesome Job! You spelled &ldquo;{currentWordItem.word}&rdquo;!
                </span>
                <p className="text-xs md:text-sm text-purple-900 mt-1 font-semibold italic">
                  &ldquo;{currentWordItem.sentence}&rdquo;
                </p>
              </div>
            ) : (
              <div className="text-center mb-3">
                <span className="text-rose-600 font-black text-xl">
                  Nice try! The correct spelling is: {currentWordItem.word}
                </span>
                <p className="text-xs md:text-sm text-purple-900 mt-1 font-medium">
                  Keep sparkling! You&apos;ll get the next one! ✨
                </p>
              </div>
            )}

            {/* New Vector Sticker Unlocked Modal */}
            {unlockedNewSticker && (
              <div className="w-full bg-palette-yellow border-4 border-amber-300 p-4 rounded-3xl my-3 text-center animate-bounce shadow-lg flex flex-col items-center">
                <div className="my-1">
                  <StickerGraphic type={unlockedNewSticker.svgType} className="w-16 h-16" />
                </div>
                <h4 className="text-lg font-black text-purple-950">
                  NEW STICKER UNLOCKED! 🎉
                </h4>
                <p className="text-xs md:text-sm font-bold text-purple-800">
                  You unlocked the <strong>{unlockedNewSticker.name}</strong> sticker! Check your Sticker Album!
                </p>
              </div>
            )}

            <button
              onClick={loadNextWord}
              className="w-full max-w-xs bg-gradient-to-r from-palette-pink via-palette-lavender to-palette-blue hover:opacity-90 text-purple-950 font-black py-3.5 px-6 rounded-2xl shadow-lg flex items-center justify-center space-x-2 transition transform hover:scale-105 text-base md:text-lg border-2 border-white"
            >
              <span>Next Word</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
