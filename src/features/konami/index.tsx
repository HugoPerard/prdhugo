"use client";

import { useHotkeySequence } from "@tanstack/react-hotkeys";
import { playSound } from "@/lib/sound-engine";
import { arcadeModeSound } from "@/lib/arcade-mode";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "B",
  "A",
] as const;

export function Konami() {
  useHotkeySequence([...KONAMI_SEQUENCE], () => {
    document.documentElement.setAttribute("data-theme", "arcade");
    playSound(arcadeModeSound.dataUri);
  });

  return null;
}
