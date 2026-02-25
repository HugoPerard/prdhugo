"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

const STORAGE_KEY = "konami-video-game-mode";

type ThemeContextValue = {
  isVideoGameMode: boolean;
  toggleVideoGameMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within KonamiThemeProvider");
  }
  return ctx;
}

export function KonamiThemeProvider({ children }: { children: React.ReactNode }) {
  const [isVideoGameMode, setIsVideoGameMode] = useState(false);
  const [sequenceIndex, setSequenceIndex] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      queueMicrotask(() => setIsVideoGameMode(true));
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute(
      "data-theme",
      isVideoGameMode ? "video-game" : "default"
    );
  }, [isVideoGameMode]);

  const toggleVideoGameMode = useCallback(() => {
    setIsVideoGameMode((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, String(next));
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[sequenceIndex];
      if (e.code === expected) {
        if (sequenceIndex === KONAMI_SEQUENCE.length - 1) {
          setIsVideoGameMode((prev) => {
            const next = !prev;
            if (typeof window !== "undefined") {
              localStorage.setItem(STORAGE_KEY, String(next));
            }
            return next;
          });
          setSequenceIndex(0);
        } else {
          setSequenceIndex((i) => i + 1);
        }
      } else {
        setSequenceIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sequenceIndex]);

  return (
    <ThemeContext.Provider value={{ isVideoGameMode, toggleVideoGameMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
