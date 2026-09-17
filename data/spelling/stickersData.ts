export interface Sticker {
  id: string;
  name: string;
  category: "pets" | "magic" | "treats";
  color: string;
  svgType: "kitten" | "puppy" | "unicorn" | "bunny" | "cupcake" | "star" | "panda" | "crown" | "donut" | "rainbow" | "butterfly" | "heart";
}

export const STICKERS_COLLECTION: Sticker[] = [
  { id: "s1", name: "Sparkle Kitty", category: "pets", color: "bg-palette-pink/40 border-palette-pink", svgType: "kitten" },
  { id: "s2", name: "Magic Unicorn", category: "magic", color: "bg-palette-lavender/40 border-palette-lavender", svgType: "unicorn" },
  { id: "s3", name: "Happy Puppy", category: "pets", color: "bg-palette-peach/40 border-palette-peach", svgType: "puppy" },
  { id: "s4", name: "Sweet Cupcake", category: "treats", color: "bg-palette-pink/40 border-palette-pink", svgType: "cupcake" },
  { id: "s5", name: "Golden Star", category: "magic", color: "bg-palette-yellow/40 border-palette-yellow", svgType: "star" },
  { id: "s6", name: "Fluffy Bunny", category: "pets", color: "bg-palette-mint/40 border-palette-mint", svgType: "bunny" },
  { id: "s7", name: "Rainbow Cloud", category: "magic", color: "bg-palette-blue/40 border-palette-blue", svgType: "rainbow" },
  { id: "s8", name: "Glitter Donut", category: "treats", color: "bg-palette-peach/40 border-palette-peach", svgType: "donut" },
  { id: "s9", name: "Royal Crown", category: "magic", color: "bg-palette-yellow/40 border-palette-yellow", svgType: "crown" },
  { id: "s10", name: "Cute Panda", category: "pets", color: "bg-palette-blue/40 border-palette-blue", svgType: "panda" },
  { id: "s11", name: "Magic Butterfly", category: "magic", color: "bg-palette-lavender/40 border-palette-lavender", svgType: "butterfly" },
  { id: "s12", name: "Sparkle Heart", category: "magic", color: "bg-palette-pink/40 border-palette-pink", svgType: "heart" }
];
