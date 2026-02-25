import { IconGithub } from "@/components/icons/icon-github";
import { IconLinkedin } from "@/components/icons/icon-linkedin";
import { Orb } from "@/components/orb";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6">
      <Orb hue={220} forceHoverState={false} />

      <main className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <div className="mb-2 text-sm font-medium tracking-widest uppercase text-white/60">
          Lead Front Developer
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Hugo Pérard
        </h1>

        <div className="mt-4 flex items-center gap-2 text-sm text-white/50">
          <span>Rouen, France</span>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://bearstudio.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-white hover:underline"
          >
            BearStudio
          </a>
        </div>

        <div className="mt-8 h-px w-12 bg-white/20" />

        <div className="mt-8 flex gap-5">
          <a
            href="https://github.com/HugoPerard"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 p-3 text-white/50 transition-colors hover:border-white/60 hover:text-white"
            aria-label="GitHub"
          >
            <IconGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/hugoperard/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 p-3 text-white/50 transition-colors hover:border-white/60 hover:text-white"
            aria-label="LinkedIn"
          >
            <IconLinkedin className="h-5 w-5" />
          </a>
        </div>
      </main>
    </div>
  );
}
