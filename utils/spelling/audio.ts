// Audio Utility for Spelling Sparkle: Pure MP3 Audio & Sound Effects (Speech Synthesis Completely Disabled)

let activeAudio: HTMLAudioElement | null = null;
let audioCtx: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
  if (!audioCtx && typeof window !== "undefined") {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx!;
};

export const stopAllAudio = () => {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
};

/**
 * Plays recorded MP3 file from /audio/words/{word}.mp3 ONLY.
 * Speech Synthesis is completely disabled.
 */
export const playWordAudio = (word: string): Promise<void> => {
  return new Promise((resolve) => {
    stopAllAudio(); // Cancel any active audio playback

    const audioUrl = `/audio/words/${encodeURIComponent(word.toLowerCase())}.mp3`;
    const audio = new Audio(audioUrl);
    activeAudio = audio;

    audio.onended = () => resolve();

    audio.play().then(() => {
      // Successfully playing MP3
    }).catch(() => {
      // MP3 file not played -> Do NOTHING (Speech Synthesis / Robotic voice permanently disabled)
      resolve();
    });
  });
};

/**
 * Magical Sparkle Chime Sound Effect for Correct Answers (Web Audio API)
 */
export const playSparkleChime = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]; // C5, E5, G5, C6, E6, G6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;

      const startTime = ctx.currentTime + idx * 0.08;
      gain.gain.setValueAtTime(0.01, startTime);
      gain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.4);
    });
  } catch (e) {
    // Silent catch
  }
};

/**
 * Sad Trombone Wha-Wha Sound Effect for Incorrect Answers (Web Audio API)
 */
export const playSadTrombone = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const pitches = [146.83, 138.59, 130.81];
    pitches.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.value = freq;

      const startTime = ctx.currentTime + idx * 0.35;
      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.32);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.33);
    });

    const finalOsc = ctx.createOscillator();
    const finalGain = ctx.createGain();
    const finalStart = ctx.currentTime + 1.05;
    finalOsc.type = "sawtooth";
    finalOsc.frequency.setValueAtTime(123.47, finalStart);
    finalOsc.frequency.linearRampToValueAtTime(110.00, finalStart + 0.8);

    finalGain.gain.setValueAtTime(0.18, finalStart);
    finalGain.gain.exponentialRampToValueAtTime(0.001, finalStart + 0.85);

    finalOsc.connect(finalGain);
    finalGain.connect(ctx.destination);

    finalOsc.start(finalStart);
    finalOsc.stop(finalStart + 0.9);
  } catch (e) {
    // Silent catch
  }
};
