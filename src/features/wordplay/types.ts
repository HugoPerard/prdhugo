export const DIFFICULTIES = ["facile", "moyen", "corse"] as const;

export type Difficulty = (typeof DIFFICULTIES)[number];

export type SceneId =
  | "vin-diesel"
  | "ice-spice"
  | "jean-dujardin"
  | "jean-reno"
  | "shakira"
  | "kendji-girac";

export type Puzzle = {
  id: string;
  answer: string;
  acceptedAnswers: string[];
  difficulty: Difficulty;
  title: string;
  prompt: string;
  hints: string[];
  scene: SceneId;
};
