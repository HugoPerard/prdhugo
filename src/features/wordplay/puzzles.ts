import { DIFFICULTIES, type Difficulty, type Puzzle } from "./types";

export const puzzles: Puzzle[] = [
  {
    id: "vin-diesel",
    answer: "Vin Diesel",
    acceptedAnswers: ["Vin Diesel"],
    difficulty: "facile",
    title: "Enigme effervescente",
    prompt: "Observe bien les objets: le prénom se sert, le nom se pompe.",
    hints: [
      "Le prénom est une boisson.",
      "Le nom sent clairement la station-service.",
      "C'est une star de films d'action.",
    ],
    scene: "vin-diesel",
  },
  {
    id: "ice-spice",
    answer: "Ice Spice",
    acceptedAnswers: ["Ice Spice"],
    difficulty: "facile",
    title: "Enigme qui pique un peu",
    prompt: "Deux mots tres directs sont caches dans l'image.",
    hints: [
      "Le premier indice fond si tu attends trop.",
      "Le second se trouve souvent dans un moulin ou un bocal.",
      "C'est une rappeuse americaine.",
    ],
    scene: "ice-spice",
  },
  {
    id: "jean-dujardin",
    answer: "Jean Dujardin",
    acceptedAnswers: ["Jean Dujardin"],
    difficulty: "moyen",
    title: "Enigme botanique",
    prompt: "Ici, un vetement rencontre un coin tres vert.",
    hints: [
      "Le prenom est aussi une matiere textile tres connue.",
      "Le nom de famille decrit presque l'endroit sans detour.",
      "C'est un acteur francais oscarise.",
    ],
    scene: "jean-dujardin",
  },
  {
    id: "jean-reno",
    answer: "Jean Reno",
    acceptedAnswers: ["Jean Reno"],
    difficulty: "moyen",
    title: "Enigme a corne",
    prompt: "Cette fois, le meme vetement croise un animal massif.",
    hints: [
      "Le premier mot se porte sur les jambes.",
      "Le second sonne presque comme l'animal illustre.",
      "C'est un acteur francais associe a Leon et au Grand Bleu.",
    ],
    scene: "jean-reno",
  },
  {
    id: "shakira",
    answer: "Shakira",
    acceptedAnswers: ["Shakira"],
    difficulty: "corse",
    title: "Enigme feline",
    prompt: "Parfois un simple son transforme un animal en star mondiale.",
    hints: [
      "L'image se lit a voix haute.",
      "On entend presque 'chat qui...'.",
      "C'est une chanteuse colombienne.",
    ],
    scene: "shakira",
  },
  {
    id: "kendji-girac",
    answer: "Kendji Girac",
    acceptedAnswers: ["Kendji Girac", "Kendji"],
    difficulty: "corse",
    title: "Enigme bavarde",
    prompt: "Ici, il faut ecouter la scene et pas seulement la regarder.",
    hints: [
      "Le premier son ressemble fort au nom d'une poupee celebre.",
      "Le second evoque un animal au long cou si tu l'entends vite.",
      "C'est un chanteur francais revele par un tele-crochet.",
    ],
    scene: "kendji-girac",
  },
];

export function getDailyDifficulty(dailyKey: string): Difficulty {
  return DIFFICULTIES[hashString(dailyKey) % DIFFICULTIES.length];
}

export function getPuzzlesByDifficulty(difficulty: Difficulty) {
  return puzzles.filter((puzzle) => puzzle.difficulty === difficulty);
}

export function getDailyIndices(dailyKey: string) {
  return Object.fromEntries(
    DIFFICULTIES.map((difficulty) => {
      const pool = getPuzzlesByDifficulty(difficulty);
      const index = pool.length === 0 ? 0 : hashString(`${dailyKey}-${difficulty}`) % pool.length;
      return [difficulty, index];
    }),
  ) as Record<Difficulty, number>;
}

function hashString(value: string) {
  let hash = 0;

  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return hash;
}
