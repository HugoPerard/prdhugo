"use client";

import { IconGithub } from "@/components/icons/icon-github";
import { IconLinkedin } from "@/components/icons/icon-linkedin";
import { Orb } from "@/components/orb";

import PixelBlast from "@/components/PixelBlast";

export function HomeContent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6">
      <div className="absolute inset-0 -z-10 data-theme-arcade:invisible">
        <Orb />
      </div>
      <div className="absolute inset-0 -z-10 invisible data-theme-arcade:visible opacity-20">
        <PixelBlast color="#00ff41" transparent variant="square" />
      </div>

      <main className="home-main relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <div className="home-subtitle mb-2 text-sm font-medium tracking-widest uppercase">
          Lead Front Developer
        </div>

        <h1 className="home-title font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Hugo Pérard
        </h1>

        <div className="home-meta mt-4 flex items-center gap-2 text-sm">
          <span>Rouen, France</span>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://bearstudio.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link transition-colors hover:underline"
          >
            BearStudio
          </a>
        </div>

        <div className="home-divider mt-8 h-px w-12" />

        <div className="mt-8 flex gap-5">
          <a
            href="https://github.com/HugoPerard"
            target="_blank"
            rel="noopener noreferrer"
            className="home-icon-button border p-3 transition-colors"
            aria-label="GitHub"
          >
            <IconGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/hugoperard/"
            target="_blank"
            rel="noopener noreferrer"
            className="home-icon-button border p-3 transition-colors"
            aria-label="LinkedIn"
          >
            <IconLinkedin className="h-5 w-5" />
          </a>
        </div>
      </main>
    </div>
  );
}
