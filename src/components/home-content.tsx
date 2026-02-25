"use client";

import { IconGithub } from "@/components/icons/icon-github";
import { IconLinkedin } from "@/components/icons/icon-linkedin";
import { Orb } from "@/components/orb";
import { useTheme } from "@/components/konami-theme-provider";

export function HomeContent() {
  const { isVideoGameMode } = useTheme();

  return (
    <div className="relative flex min-h-screen items-center justify-center px-6">
      <Orb
        hue={isVideoGameMode ? 120 : 220}
        forceHoverState={false}
        backgroundColor={isVideoGameMode ? "#0d1117" : "#000000"}
      />

      <main
        className={`relative z-10 flex w-full max-w-md flex-col items-center text-center ${
          isVideoGameMode ? "font-display" : ""
        }`}
      >
        <div
          className={
            isVideoGameMode
              ? "mb-2 text-sm font-medium tracking-widest uppercase text-[var(--color-foreground)]/80"
              : "mb-2 text-sm font-medium tracking-widest uppercase text-white/60"
          }
        >
          Lead Front Developer
        </div>

        <h1
          className={
            isVideoGameMode
              ? "font-display text-4xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-5xl"
              : "font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
          }
        >
          Hugo Pérard
        </h1>

        <div
          className={
            isVideoGameMode
              ? "mt-4 flex items-center gap-2 text-sm text-[var(--color-foreground)]/70"
              : "mt-4 flex items-center gap-2 text-sm text-white/50"
          }
        >
          <span>Rouen, France</span>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://bearstudio.fr"
            target="_blank"
            rel="noopener noreferrer"
            className={
              isVideoGameMode
                ? "text-[var(--color-foreground)]/90 transition-colors hover:text-[var(--color-foreground)] hover:underline"
                : "text-white/70 transition-colors hover:text-white hover:underline"
            }
          >
            BearStudio
          </a>
        </div>

        <div
          className={
            isVideoGameMode
              ? "mt-8 h-px w-12 bg-[var(--color-foreground)]/40"
              : "mt-8 h-px w-12 bg-white/20"
          }
        />

        <div className="mt-8 flex gap-5">
          <a
            href="https://github.com/HugoPerard"
            target="_blank"
            rel="noopener noreferrer"
            className={
              isVideoGameMode
                ? "rounded-none border-2 border-[var(--color-foreground)]/50 p-3 text-[var(--color-foreground)]/70 transition-colors hover:border-[var(--color-foreground)] hover:bg-[var(--color-foreground)]/10 hover:text-[var(--color-foreground)]"
                : "rounded-full border border-white/20 p-3 text-white/50 transition-colors hover:border-white/60 hover:text-white"
            }
            aria-label="GitHub"
          >
            <IconGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/hugoperard/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              isVideoGameMode
                ? "rounded-none border-2 border-[var(--color-foreground)]/50 p-3 text-[var(--color-foreground)]/70 transition-colors hover:border-[var(--color-foreground)] hover:bg-[var(--color-foreground)]/10 hover:text-[var(--color-foreground)]"
                : "rounded-full border border-white/20 p-3 text-white/50 transition-colors hover:border-white/60 hover:text-white"
            }
            aria-label="LinkedIn"
          >
            <IconLinkedin className="h-5 w-5" />
          </a>
        </div>
      </main>
    </div>
  );
}
