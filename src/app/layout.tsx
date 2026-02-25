import type { Metadata } from "next";
import { Bricolage_Grotesque, Press_Start_2P, Sono, VT323 } from "next/font/google";
import { KonamiThemeProvider } from "@/components/konami-theme-provider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const sono = Sono({
  subsets: ["latin"],
  variable: "--font-sono",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Hugo Pérard — Lead Front Developer",
  description:
    "Personal site of Hugo Pérard, lead front-end developer based in Rouen, France.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = `${bricolage.variable} ${sono.variable} ${pressStart2P.variable} ${vt323.variable}`;
  return (
    <html lang="en" className={fontVariables}>
      <body className="antialiased">
        <KonamiThemeProvider>{children}</KonamiThemeProvider>
      </body>
    </html>
  );
}
