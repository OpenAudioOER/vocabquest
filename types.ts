export enum GameScreen {
  HOME = 'HOME',
  ADVENTURE = 'ADVENTURE',
  SHOP = 'SHOP',
  INVENTORY = 'INVENTORY',
  PARENT_ZONE = 'PARENT_ZONE',
  BATTLE = 'BATTLE'
}

export enum QuestionType {
  DEFINITION = 'DEFINITION', // Word to Definition
  DEFINITION_TO_WORD = 'DEFINITION_TO_WORD', // Definition to Word
  FILL_BLANK = 'FILL_BLANK',
  SYNONYM = 'SYNONYM',
  SPELLING = 'SPELLING'
}

export interface VocabWord {
  id: string;
  word: string;
  definition: string;
  sentences: string[];
  synonyms: string[];
  antonyms: string[];
  distractors: string[];
  masteryLevel: number;
}

export interface ShopItem {
  id: string;
  name: string;
  emoji: string;
  price: number;
  type: 'HEAD' | 'FACE' | 'HAND' | 'PET';
  description: string;
  bonus?: {
    type: 'GOLD' | 'XP' | 'SHIELD' | 'HINT';
    value: number; // Percentage for GOLD/XP, absolute count for SHIELD/HINT
  };
}

export interface UserProfile {
  name: string;
  gold: number;
  xp: number;
  level: number;
  questsCompleted: number;
  inventory: string[];
  equipped: {
    HEAD?: string;
    FACE?: string;
    HAND?: string;
    PET?: string;
  };
}

export interface GameState {
  currentScreen: GameScreen;
  words: VocabWord[];
  user: UserProfile;
  lastScore: number | null;
}