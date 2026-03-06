import React, { useState, useEffect, useMemo } from 'react';
import { VocabWord, QuestionType, UserProfile } from '../types';
import { SHOP_ITEMS, SPELLING_WORDS } from '../constants';
import { Button } from './ui/Button';
import { CheckCircle, XCircle, Trophy, Lightbulb, Shield, Sparkles, TrendingUp, Coins, Play, Volume2, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AvatarDisplay } from './AvatarDisplay';
import { generateSpeech } from '../services/geminiService';

interface BattleArenaProps {
  words: VocabWord[];
  user: UserProfile;
  onComplete: (score: number, goldEarned: number, xpEarned: number) => void;
  onExit: () => void;
}

type BattleStage = 'START' | 'BATTLE' | 'RESULTS';

export const BattleArena: React.FC<BattleArenaProps> = ({ words, user, onComplete, onExit }) => {
  const [stage, setStage] = useState<BattleStage>('START');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [goldEarned, setGoldEarned] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameWords, setGameWords] = useState<VocabWord[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [qType, setQType] = useState<QuestionType>(QuestionType.DEFINITION);
  const [activeSentence, setActiveSentence] = useState<string>('');
  const [synonymTarget, setSynonymTarget] = useState<'synonym' | 'antonym'>('synonym');
  const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);

  // Spelling State
  const [spellingWord, setSpellingWord] = useState<string>('');
  const [spellingInput, setSpellingInput] = useState<string[]>([]);
  const [spellingFocus, setSpellingFocus] = useState<number>(0);
  const [isAudioLoading, setIsAudioLoading] = useState<boolean>(false);
  const [spellingAttempts, setSpellingAttempts] = useState<number>(0);
  const [incorrectIndices, setIncorrectIndices] = useState<number[]>([]);

  // Power-up States
  const [hintsUsed, setHintsUsed] = useState(0);
  const [shieldsUsed, setShieldsUsed] = useState(0);

  // Calculate Gear Bonuses from equipped items
  const bonuses = useMemo(() => {
    let goldBoost = 0;
    let xpBoost = 0;
    let totalShields = 0;
    let totalHints = 0;

    Object.values(user.equipped).forEach(itemId => {
      const item = SHOP_ITEMS.find(i => i.id === itemId);
      if (item?.bonus) {
        if (item.bonus.type === 'GOLD') goldBoost += item.bonus.value;
        if (item.bonus.type === 'XP') xpBoost += item.bonus.value;
        if (item.bonus.type === 'SHIELD') totalShields += item.bonus.value;
        if (item.bonus.type === 'HINT') totalHints += item.bonus.value;
      }
    });

    return {
      goldBoost,
      xpBoost,
      maxHints: totalHints,
      maxShields: totalShields
    };
  }, [user.equipped]);

  // Initialize game
  useEffect(() => {
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    setGameWords(shuffled.slice(0, 15));
  }, [words]);

  // Helper for better shuffling
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  // Setup options when index changes
  useEffect(() => {
    if (gameWords.length === 0 || stage !== 'BATTLE') return;

    const currentWord = gameWords[currentIndex];
    const types = [
      QuestionType.DEFINITION,
      QuestionType.DEFINITION_TO_WORD,
      QuestionType.FILL_BLANK,
      QuestionType.SYNONYM,
      QuestionType.SPELLING,
      QuestionType.SPELLING, // Double the frequency
      QuestionType.SPELLING
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    setQType(type);

    let opts: string[] = [];

    if (type === QuestionType.DEFINITION) {
      opts = [currentWord.definition, ...currentWord.distractors];
    } else if (type === QuestionType.DEFINITION_TO_WORD) {
      const otherWords = words
        .filter(w => w.id !== currentWord.id)
        .map(w => w.word)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      opts = [currentWord.word, ...otherWords];
    } else if (type === QuestionType.FILL_BLANK) {
      const randomSentence = currentWord.sentences[Math.floor(Math.random() * currentWord.sentences.length)];
      setActiveSentence(randomSentence);
      const otherWords = words
        .filter(w => w.id !== currentWord.id)
        .map(w => w.word)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      opts = [currentWord.word, ...otherWords];
    } else if (type === QuestionType.SYNONYM) {
      const mode = Math.random() > 0.5 ? 'synonym' : 'antonym';
      setSynonymTarget(mode);

      const correct = mode === 'synonym' ? currentWord.synonyms[0] : currentWord.antonyms[0];
      const decoys = words
        .filter(w => w.id !== currentWord.id)
        .flatMap(w => mode === 'synonym' ? w.synonyms : w.antonyms)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      opts = [correct, ...decoys];
    } else if (type === QuestionType.SPELLING) {
      const randomSpelling = SPELLING_WORDS[Math.floor(Math.random() * SPELLING_WORDS.length)];
      setSpellingWord(randomSpelling);
      setSpellingInput(new Array(randomSpelling.length).fill(''));
      setSpellingFocus(0);
      setSpellingAttempts(0);
      setIncorrectIndices([]);
    }

    setOptions(shuffleArray(opts));
    setSelectedAnswer(null);
    setIsCorrect(null);
    setHiddenOptions([]);
  }, [currentIndex, gameWords, words, stage]);

  const useHint = () => {
    if (hintsUsed >= bonuses.maxHints || selectedAnswer || qType === QuestionType.FILL_BLANK) return;

    const currentWord = gameWords[currentIndex];
    let correct = '';
    if (qType === QuestionType.DEFINITION) correct = currentWord.definition;
    if (qType === QuestionType.SYNONYM) correct = synonymTarget === 'synonym' ? currentWord.synonyms[0] : currentWord.antonyms[0];

    const wrongs = options.filter(o => o !== correct && !hiddenOptions.includes(o));
    const toHide = wrongs.sort(() => 0.5 - Math.random()).slice(0, 2);

    setHiddenOptions(prev => [...prev, ...toHide]);
    setHintsUsed(prev => prev + 1);
  };

  const handleAnswer = (ans: string) => {
    if (selectedAnswer) return;

    const currentWord = gameWords[currentIndex];
    let correct = false;

    if (qType === QuestionType.DEFINITION) correct = ans === currentWord.definition;
    else if (qType === QuestionType.DEFINITION_TO_WORD) correct = ans === currentWord.word;
    else if (qType === QuestionType.FILL_BLANK) correct = ans === currentWord.word;
    else if (qType === QuestionType.SYNONYM) correct = synonymTarget === 'synonym' ? currentWord.synonyms.includes(ans) : currentWord.antonyms.includes(ans);

    if (!correct && (bonuses.maxShields - shieldsUsed) > 0) {
      setShieldsUsed(prev => prev + 1);
      return;
    }

    setSelectedAnswer(ans);
    setIsCorrect(correct);

    if (correct) {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      const basePoints = 100;
      const boostValue = Math.floor(basePoints * (bonuses.goldBoost / 100));
      setScore(s => s + basePoints);
      setGoldEarned(g => g + basePoints + boostValue);
    }
  };

  const handleSpellingSubmit = () => {
    if (selectedAnswer) return;

    const ans = spellingInput.join('').toLowerCase();
    const correctWord = spellingWord.toLowerCase();
    const correct = ans === correctWord;

    if (!correct) {
      // Find incorrect indices
      const wrongIndices: number[] = [];
      for (let i = 0; i < spellingWord.length; i++) {
        if (spellingInput[i].toLowerCase() !== correctWord[i]) {
          wrongIndices.push(i);
        }
      }
      setIncorrectIndices(wrongIndices);

      if (spellingAttempts < 1) {
        setSpellingAttempts(prev => prev + 1);
        return; // Give second attempt
      }

      if ((bonuses.maxShields - shieldsUsed) > 0) {
        setShieldsUsed(prev => prev + 1);
        setSpellingAttempts(0); // Reset attempts for the shielded retry
        setIncorrectIndices([]);
        return;
      }
    }

    setSelectedAnswer(ans);
    setIsCorrect(correct);

    if (correct) {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      const basePoints = 100;
      const boostValue = Math.floor(basePoints * (bonuses.goldBoost / 100));
      setScore(s => s + basePoints);
      setGoldEarned(g => g + basePoints + boostValue);
    }
  };

  const playAudio = async () => {
    if (isAudioLoading) return;

    setIsAudioLoading(true);
    try {
      // First attempt: Play from local .wav file
      const audioPath = `/audio/${spellingWord.toLowerCase()}.wav`;
      const audio = new Audio(audioPath);

      await new Promise((resolve, reject) => {
        audio.oncanplaythrough = resolve;
        audio.onerror = reject;
        audio.play().catch(reject);
      });
    } catch (error) {
      console.warn(`Local audio for "${spellingWord}" failed or not found, falling back to TTS.`, error);
      // Fallback: browser TTS
      const utterance = new SpeechSynthesisUtterance(spellingWord);
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    } finally {
      setIsAudioLoading(false);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < gameWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setStage('RESULTS');
    }
  };

  const finalizeBattle = () => {
    const basePoints = score;
    const xpBonus = Math.floor(basePoints * (bonuses.xpBoost / 100));
    onComplete(score, goldEarned, basePoints + xpBonus);
  };

  if (gameWords.length === 0) return <div className="p-10 text-center">Loading Battle...</div>;

  const currentWord = gameWords[currentIndex];
  const progress = ((currentIndex) / gameWords.length) * 100;

  // RENDER START SCREEN
  if (stage === 'START') {
    return (
      <div className="flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full min-h-screen text-center animate-in zoom-in duration-300">
        <div className="mb-8">
          <AvatarDisplay user={user} size="lg" />
          <h2 className="text-4xl font-black mt-6 mb-2">Ready for Battle?</h2>
          <p className="text-slate-400">Review your equipped gear bonuses!</p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-slate-800 p-4 rounded-2xl border-b-4 border-slate-950 flex flex-col items-center gap-2">
            <Coins className="text-yellow-400" />
            <span className="text-xs font-bold text-slate-400 uppercase">Gold Boost</span>
            <span className="text-2xl font-black text-yellow-400">+{bonuses.goldBoost}%</span>
          </div>
          <div className="bg-slate-800 p-4 rounded-2xl border-b-4 border-slate-950 flex flex-col items-center gap-2">
            <TrendingUp className="text-purple-400" />
            <span className="text-xs font-bold text-slate-400 uppercase">XP Boost</span>
            <span className="text-2xl font-black text-purple-400">+{bonuses.xpBoost}%</span>
          </div>
          <div className="bg-slate-800 p-4 rounded-2xl border-b-4 border-slate-950 flex flex-col items-center gap-2">
            <Shield className="text-blue-400" />
            <span className="text-xs font-bold text-slate-400 uppercase">Shields</span>
            <span className="text-2xl font-black text-blue-400">{bonuses.maxShields}</span>
          </div>
          <div className="bg-slate-800 p-4 rounded-2xl border-b-4 border-slate-950 flex flex-col items-center gap-2">
            <Lightbulb className="text-yellow-400" />
            <span className="text-xs font-bold text-slate-400 uppercase">Hints</span>
            <span className="text-2xl font-black text-yellow-400">{bonuses.maxHints}</span>
          </div>
        </div>

        <Button size="lg" className="w-full h-20 text-2xl" onClick={() => setStage('BATTLE')}>
          <Play fill="currentColor" /> Start Adventure
        </Button>
      </div>
    );
  }

  // RENDER RESULTS SCREEN
  if (stage === 'RESULTS') {
    const basePoints = score;
    const goldBonusTotal = goldEarned - basePoints;
    const xpBonusTotal = Math.floor(basePoints * (bonuses.xpBoost / 100));

    return (
      <div className="flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full min-h-screen animate-in fade-in duration-500">
        <div className="bg-slate-800 rounded-3xl p-8 border-b-8 border-slate-950 w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <h2 className="text-5xl font-black text-white mb-2 mt-4">Victory!</h2>
          <p className="text-slate-400 mb-8 uppercase tracking-widest font-bold">Loot Collected</p>

          <div className="space-y-4 mb-8">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400 font-bold uppercase text-sm flex items-center gap-2"><Coins size={16} /> Total Gold</span>
                <span className="text-2xl font-black text-yellow-400">💰 {goldEarned}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Base Rewards: {basePoints}</span>
                <span className="text-yellow-600 font-bold">Gear Boost (+{bonuses.goldBoost}%): +{goldBonusTotal}</span>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400 font-bold uppercase text-sm flex items-center gap-2"><Sparkles size={16} /> Total XP</span>
                <span className="text-2xl font-black text-white">{basePoints + xpBonusTotal} XP</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Base Rewards: {basePoints}</span>
                <span className="text-purple-400 font-bold">Gear Boost (+{bonuses.xpBoost}%): +{xpBonusTotal}</span>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full h-16" onClick={finalizeBattle}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const getQuestionLabel = () => {
    switch (qType) {
      case QuestionType.DEFINITION: return 'Find the Definition';
      case QuestionType.DEFINITION_TO_WORD: return 'Find the Word';
      case QuestionType.FILL_BLANK: return 'Context Challenge';
      case QuestionType.SYNONYM: return synonymTarget === 'synonym' ? 'Find a Synonym' : 'Find an Antonym';
      case QuestionType.SPELLING: return 'Spelling Quest';
      default: return 'Challenge';
    }
  };

  const getCorrectText = () => {
    if (qType === QuestionType.DEFINITION) return currentWord.definition;
    if (qType === QuestionType.DEFINITION_TO_WORD) return currentWord.word;
    if (qType === QuestionType.FILL_BLANK) return currentWord.word;
    if (qType === QuestionType.SPELLING) return spellingWord;
    return synonymTarget === 'synonym' ? currentWord.synonyms[0] : currentWord.antonyms[0];
  };

  return (
    <div className="flex flex-col flex-grow max-w-2xl mx-auto w-full p-4 min-h-[600px] justify-center animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-6">
        <Button size="sm" variant="secondary" onClick={onExit}>Exit</Button>

        <div className="flex gap-2">
          {/* Gold Counter */}
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-yellow-500/30">
            <Coins className="text-yellow-400 w-4 h-4" />
            <span className="font-black text-yellow-400">{goldEarned}</span>
          </div>

          {/* Shields Indicator */}
          {bonuses.maxShields > 0 && (
            <div className="flex items-center gap-1 bg-blue-900/30 px-3 py-1.5 rounded-full border border-blue-500/50">
              <Shield className={`${shieldsUsed < bonuses.maxShields ? 'text-blue-400' : 'text-slate-600'} w-4 h-4`} fill="currentColor" />
              <span className="text-xs font-bold text-blue-200">{bonuses.maxShields - shieldsUsed}</span>
            </div>
          )}

          {/* Score Indicator */}
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
            <Trophy className="text-white w-4 h-4" />
            <span className="font-bold text-lg">{score}</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-700 h-3 rounded-full mb-8">
        <div
          className="bg-indigo-500 h-3 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl border-b-8 border-slate-950 flex-grow flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-indigo-500 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-xl"></div>

        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center gap-2">
            <Lightbulb className="text-indigo-400 w-4 h-4" />
            <h2 className="text-gray-400 font-bold uppercase tracking-widest text-xs">
              {getQuestionLabel()}
            </h2>
          </div>

          {/* Hint Button */}
          {bonuses.maxHints > 0 && qType !== QuestionType.FILL_BLANK && (
            <button
              onClick={useHint}
              disabled={hintsUsed >= bonuses.maxHints || !!selectedAnswer}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${hintsUsed < bonuses.maxHints ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 active:scale-95 border border-yellow-500/30' : 'opacity-30 cursor-not-allowed text-slate-500'}`}
            >
              <Lightbulb size={14} fill={hintsUsed < bonuses.maxHints ? 'currentColor' : 'none'} />
              <span className="text-xs font-black">HINT ({bonuses.maxHints - hintsUsed})</span>
            </button>
          )}
        </div>

        {qType === QuestionType.DEFINITION ? (
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 drop-shadow-md">
            {currentWord.word}
          </h1>
        ) : qType === QuestionType.DEFINITION_TO_WORD ? (
          <h1 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed italic">
            "{currentWord.definition}"
          </h1>
        ) : qType === QuestionType.FILL_BLANK ? (
          <h1 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed italic">
            "{activeSentence}"
          </h1>
        ) : qType === QuestionType.SPELLING ? (
          <div className="flex flex-col items-center mb-8 w-full">
            <button
              onClick={playAudio}
              disabled={isAudioLoading}
              className="mb-6 p-6 bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg transition-all active:scale-95 group disabled:opacity-50"
            >
              {isAudioLoading ? (
                <Loader2 size={48} className="text-white animate-spin" />
              ) : (
                <Volume2 size={48} className="text-white group-hover:scale-110 transition-transform" />
              )}
            </button>
            <p className="text-slate-400 mb-6 text-sm uppercase font-bold tracking-widest italic">Listen and spell the word</p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {spellingInput.map((char, idx) => (
                <input
                  key={idx}
                  id={`spelling-input-${idx}`}
                  type="text"
                  maxLength={1}
                  value={char}
                  disabled={!!selectedAnswer}
                  onChange={(e) => {
                    const val = e.target.value.slice(-1);
                    const newInput = [...spellingInput];
                    newInput[idx] = val;
                    setSpellingInput(newInput);

                    // Clear incorrect highlight on change
                    if (incorrectIndices.includes(idx)) {
                      setIncorrectIndices(prev => prev.filter(i => i !== idx));
                    }

                    if (val && idx < spellingInput.length - 1) {
                      document.getElementById(`spelling-input-${idx + 1}`)?.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && !spellingInput[idx] && idx > 0) {
                      document.getElementById(`spelling-input-${idx - 1}`)?.focus();
                    }
                    if (e.key === 'Enter' && spellingInput.every(c => c !== '')) {
                      handleSpellingSubmit();
                    }
                  }}
                  className={`w-10 h-12 md:w-12 md:h-14 text-center text-2xl font-black rounded-xl border-2 transition-all outline-none
                    ${selectedAnswer
                      ? (isCorrect ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-red-500/20 border-red-500 text-red-400')
                      : incorrectIndices.includes(idx)
                        ? 'bg-red-500/20 border-red-500 text-red-400 animate-shake'
                        : 'bg-slate-900 border-slate-700 focus:border-indigo-500 text-white focus:ring-2 focus:ring-indigo-500/20'
                    }`}
                />
              ))}
            </div>

            {!selectedAnswer && (
              <div className="flex flex-col items-center gap-3 w-full max-w-xs">
                {spellingAttempts > 0 && !selectedAnswer && (
                  <p className="text-red-400 font-bold text-sm animate-bounce">Try again! Check the red boxes.</p>
                )}
                <Button
                  onClick={handleSpellingSubmit}
                  disabled={spellingInput.some(c => c === '')}
                  className="w-full"
                >
                  {spellingAttempts > 0 ? 'Try Again' : 'Submit Spelling'}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="mb-8">
            <p className="text-slate-400 mb-2 text-sm uppercase font-bold tracking-widest">Identify a {synonymTarget} for:</p>
            <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-md">
              {currentWord.word}
            </h1>
          </div>
        )}

        {qType !== QuestionType.SPELLING && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {options.map((opt, idx) => {
              const isHidden = hiddenOptions.includes(opt);
              let btnVariant: 'secondary' | 'success' | 'danger' = 'secondary';
              if (selectedAnswer === opt) {
                btnVariant = isCorrect ? 'success' : 'danger';
              } else if (selectedAnswer && !isCorrect) {
                if (opt === getCorrectText()) {
                  btnVariant = 'success';
                }
              }

              return (
                <Button
                  key={idx}
                  variant={btnVariant}
                  onClick={() => handleAnswer(opt)}
                  disabled={!!selectedAnswer || isHidden}
                  className={`h-full min-h-[80px] text-lg normal-case transition-opacity duration-300 ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                  {opt}
                </Button>
              );
            })}
          </div>
        )}

        {selectedAnswer && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300 w-full">
            <div className={`p-4 rounded-xl mb-4 border-2 ${isCorrect ? 'bg-green-500/10 border-green-500/30 text-green-200' : 'bg-red-500/10 border-red-500/30 text-red-200'}`}>
              {isCorrect ? (
                <div className="flex items-center justify-center gap-2 font-bold text-xl">
                  <CheckCircle /> Level Up! Correct!
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-1 font-bold">
                  <div className="flex items-center gap-2 text-xl"><XCircle /> Not quite...</div>
                  <div className="text-sm opacity-80">The right answer was:</div>
                  <div className="text-lg text-white underline">{getCorrectText()}</div>
                </div>
              )}
            </div>
            <Button size="lg" className="w-full" onClick={nextQuestion}>
              {currentIndex < gameWords.length - 1 ? 'Next Question' : 'Finish Battle'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};