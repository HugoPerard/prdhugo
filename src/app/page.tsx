import Image from "next/image";
import me from "../../public/me.png";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="photo"
          src={me}
          alt="Photo of Hugo Pérard"
          width={200}
          height={200}
          priority
        />
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
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github logo icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/hugoperard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn logo icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://whereiam.prdhugo.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/whereiam.svg"
            alt="WhereIAm icon"
            width={16}
            height={16}
          />
          Where I am ?
        </a>
      </footer>
    </div>
  );
}
