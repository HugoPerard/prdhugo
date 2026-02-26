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
    if (typeof document === "undefined") return;
    if (isVideoGameMode) {
      document.documentElement.setAttribute("data-theme", "video-game");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isVideoGameMode]);

  const toggleVideoGameMode = useCallback(() => {
    setIsVideoGameMode((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const expected = KONAMI_SEQUENCE[sequenceIndex];
      if (e.code === expected) {
        if (sequenceIndex === KONAMI_SEQUENCE.length - 1) {
          setIsVideoGameMode((prev) => !prev);
          setSequenceIndex(0);
        } else {
          setSequenceIndex((i) => i + 1);
        }
      } else {
        setSequenceIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () =>
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [sequenceIndex]);

  return (
    <ThemeContext.Provider value={{ isVideoGameMode, toggleVideoGameMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
