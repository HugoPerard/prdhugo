"use client";

import Orb from "@/components/orb";
import PixelBlast from "@/components/PixelBlast";
import { WordplayGameShell } from "@/features/wordplay";

type HomeContentProps = {
  dailyKey: string;
};

export function HomeContent({ dailyKey }: HomeContentProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-3 py-10 sm:px-6">
      <div className="absolute inset-0 -z-10 data-theme-arcade:invisible">
        <Orb />
      </div>
      <div className="absolute inset-0 -z-10 invisible data-theme-arcade:visible opacity-20">
        <PixelBlast color="#00ff41" transparent variant="square" />
      </div>

      <main className="relative z-10 flex w-full justify-center">
        <WordplayGameShell dailyKey={dailyKey} />
      </main>
    </div>
  );
}
