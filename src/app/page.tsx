import { MeImage } from "@/components/MeImage";
import { IconGithub } from "@/components/icons/icon-github";
import { IconLinkedin } from "@/components/icons/icon-linkedin";
import { IconTicketsHunt } from "@/components/icons/icon-tickets-hunt";
import { FooterLink } from "@/components/footer-link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <MeImage />
        <div className="flex flex-col">
          <h1>
            Hi, I&apos;m <strong>Hugo Pérard</strong>
          </h1>
          <h2>Lead front developer</h2>
        </div>
        <div className="flex flex-col">
          <p>In Rouen, France</p>
          <p>
            Working at{" "}
            <a
              href="https://bearstudio.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              BearStudio
            </a>
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <FooterLink href="https://github.com">
          <IconGithub />
          Github
        </FooterLink>
        <FooterLink href="https://linkedin.com/in/hugoperard/">
          <IconLinkedin />
          LinkedIn
        </FooterLink>
      </footer>
    </div>
  );
}
