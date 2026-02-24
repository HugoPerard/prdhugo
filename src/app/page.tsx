import { IconGithub } from "@/components/icons/icon-github";
import { IconLinkedin } from "@/components/icons/icon-linkedin";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <main className="flex w-full max-w-md flex-col items-center text-center">
        <div className="mb-2 text-sm font-medium tracking-widest uppercase text-[var(--muted)]">
          Lead Front Developer
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hugo Pérard
        </h1>

        <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
          <span>Rouen, France</span>
          <span aria-hidden="true">&middot;</span>
          <a
            href="https://bearstudio.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            BearStudio
          </a>
        </div>

        <div className="mt-8 h-px w-12 bg-[var(--border)]" />

        <div className="mt-8 flex gap-5">
          <a
            href="https://github.com/HugoPerard"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--border)] p-3 text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
            aria-label="GitHub"
          >
            <IconGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/hugoperard/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--border)] p-3 text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
            aria-label="LinkedIn"
          >
            <IconLinkedin className="h-5 w-5" />
          </a>
        </div>
      </main>
    </div>
  );
}
