"use client";

import { useMemo, useState } from "react";
import { GeneratedIllustration } from "./generated-illustration";
import { normalizeAnswer } from "./normalize-answer";
import {
  getDailyDifficulty,
  getDailyIndices,
  getPuzzlesByDifficulty,
} from "./puzzles";
import { DIFFICULTIES, type Difficulty } from "./types";

type WordplayGameShellProps = {
  dailyKey: string;
};

export function WordplayGameShell({ dailyKey }: WordplayGameShellProps) {
  const [difficulty, setDifficulty] = useState<Difficulty>(() =>
    getDailyDifficulty(dailyKey),
  );
  const [indices, setIndices] = useState(() => getDailyIndices(dailyKey));
  const [guess, setGuess] = useState("");
  const [hintCount, setHintCount] = useState(1);
  const [isSolved, setIsSolved] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const currentPool = useMemo(
    () => getPuzzlesByDifficulty(difficulty),
    [difficulty],
  );
  const currentPuzzle = currentPool[indices[difficulty] % currentPool.length];
  const revealedHints = currentPuzzle.hints.slice(0, hintCount);

  function resetRound() {
    setGuess("");
    setHintCount(1);
    setIsSolved(false);
    setIsRevealed(false);
    setFeedback(null);
  }

  function changeDifficulty(nextDifficulty: Difficulty) {
    setDifficulty(nextDifficulty);
    resetRound();
  }

  function showNextPuzzle() {
    setIndices((current) => ({
      ...current,
      [difficulty]: current[difficulty] + 1,
    }));
    resetRound();
  }

  function showMoreHints() {
    setHintCount((current) => Math.min(current + 1, currentPuzzle.hints.length));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedGuess = normalizeAnswer(guess);
    const matches = currentPuzzle.acceptedAnswers.some(
      (answer) => normalizeAnswer(answer) === normalizedGuess,
    );

    if (matches) {
      setIsSolved(true);
      setFeedback("Bien vu, tu as trouve la bonne celebrite.");
      return;
    }

    setFeedback("Pas encore. Essaie une autre proposition ou demande un indice.");
  }

  return (
    <section className="home-main relative z-10 flex w-full min-w-[20rem] max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-4 text-center">
        <div className="home-subtitle mx-auto flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs tracking-[0.3em] uppercase">
          <span className="game-dot h-2 w-2 rounded-full" />
          Images de jeux de mots
        </div>

        <div className="space-y-3">
          <h1 className="home-title font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Devine la celebrite cachee dans l&apos;image
          </h1>
          <p className="game-muted mx-auto max-w-2xl text-sm leading-6 sm:text-base">
            Une enigme visuelle a la fois, avec un niveau qui change et une
            reponse masquee tant que tu ne la demandes pas.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="game-panel flex flex-col gap-6 rounded-[2rem] p-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="game-pill">Enigme du jour</span>
                <span className="game-pill game-pill-strong">
                  Niveau {difficulty}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{currentPuzzle.title}</h2>
                <p className="game-muted mt-2 text-sm leading-6">
                  {currentPuzzle.prompt}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {DIFFICULTIES.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => changeDifficulty(level)}
                  className={`game-button game-button-small ${
                    level === difficulty ? "game-button-active" : ""
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <GeneratedIllustration scene={currentPuzzle.scene} />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={showMoreHints}
              disabled={hintCount >= currentPuzzle.hints.length}
              className="game-button"
            >
              Ajouter un indice
            </button>
            <button type="button" onClick={showNextPuzzle} className="game-button">
              Changer d&apos;enigme
            </button>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
              Indices debloques
            </h3>
            <ul className="space-y-2">
              {revealedHints.map((hint, index) => (
                <li key={hint} className="game-note text-sm leading-6">
                  <span className="game-note-index">{index + 1}</span>
                  <span>{hint}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="game-panel flex flex-col gap-5 rounded-[2rem] p-5 sm:p-7">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Ta proposition</h2>
            <p className="game-muted text-sm leading-6">
              Entre un nom, valide, puis decide toi-meme si tu veux demander la
              reponse.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 text-sm font-medium">
              Nom de la celebrite
              <input
                type="text"
                value={guess}
                onChange={(event) => setGuess(event.target.value)}
                placeholder="Ex: ... ?"
                className="game-input"
                autoComplete="off"
              />
            </label>

            <button type="submit" className="game-button game-button-primary">
              Valider ma reponse
            </button>
          </form>

          <div
            className={`game-feedback text-sm leading-6 ${
              feedback ? "is-visible" : ""
            }`}
            aria-live="polite"
          >
            {feedback}
          </div>

          <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-black/15 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Reponse
                </h3>
                <p className="game-muted mt-2 text-sm leading-6">
                  Elle reste masquee par defaut. Clique seulement si tu veux la
                  demander.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsRevealed((current) => !current)}
                className="game-button game-button-small"
              >
                {isRevealed ? "Masquer" : "Afficher"}
              </button>
            </div>

            <div className={`game-answer ${isRevealed ? "is-visible" : ""}`}>
              <span className="game-answer-label">
                {isSolved ? "Tu avais vu juste:" : "Solution demandee:"}
              </span>
              <strong>{currentPuzzle.answer}</strong>
            </div>
          </div>

          <div className="game-footer flex flex-wrap items-center justify-between gap-3 text-sm">
            <span className="game-muted">Cree par Hugo Perard</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/HugoPerard"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/hugoperard/"
                target="_blank"
                rel="noopener noreferrer"
                className="home-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
