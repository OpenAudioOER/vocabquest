// LocalStorage Persistence Manager for Spelling Sparkle

const STORAGE_KEYS = {
  STARS: "spelling_sparkle_stars",
  CORRECT_COUNT: "spelling_sparkle_correct_count",
  UNLOCKED_STICKERS: "spelling_sparkle_unlocked_stickers",
  PLACED_STICKERS: "spelling_sparkle_placed_stickers",
};

export interface PlacedSticker {
  id: string;
  stickerId: string;
  x: number;
  y: number;
}

export const getSavedStars = (): number => {
  if (typeof window === "undefined") return 0;
  const val = localStorage.getItem(STORAGE_KEYS.STARS);
  return val ? parseInt(val, 10) : 0;
};

export const saveStars = (stars: number) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.STARS, stars.toString());
  }
};

export const getSavedCorrectCount = (): number => {
  if (typeof window === "undefined") return 0;
  const val = localStorage.getItem(STORAGE_KEYS.CORRECT_COUNT);
  return val ? parseInt(val, 10) : 0;
};

export const saveCorrectCount = (count: number) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.CORRECT_COUNT, count.toString());
  }
};

export const getUnlockedStickers = (): string[] => {
  if (typeof window === "undefined") return ["s1"]; // Default start with 1 sticker
  const val = localStorage.getItem(STORAGE_KEYS.UNLOCKED_STICKERS);
  return val ? JSON.parse(val) : ["s1"];
};

export const unlockSticker = (stickerId: string) => {
  if (typeof window !== "undefined") {
    const current = getUnlockedStickers();
    if (!current.includes(stickerId)) {
      const updated = [...current, stickerId];
      localStorage.setItem(STORAGE_KEYS.UNLOCKED_STICKERS, JSON.stringify(updated));
    }
  }
};

export const getPlacedStickers = (): PlacedSticker[] => {
  if (typeof window === "undefined") return [];
  const val = localStorage.getItem(STORAGE_KEYS.PLACED_STICKERS);
  return val ? JSON.parse(val) : [];
};

export const savePlacedStickers = (placed: PlacedSticker[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.PLACED_STICKERS, JSON.stringify(placed));
  }
};
