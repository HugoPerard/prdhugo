import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Press_Start_2P,
  Sono,
  VT323,
} from "next/font/google";
import "./globals.css";
import { Konami } from "@/features/konami";

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
  title: "Images de jeux de mots",
  description:
    "Des enigmes visuelles de celebrites, avec difficulte variable et reponse masquee sur demande.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = `${bricolage.variable} ${sono.variable} ${pressStart2P.variable} ${vt323.variable}`;

  return (
    <html lang="fr" className={fontVariables}>
      <Konami />
      <body className="antialiased">{children}</body>
    </html>
  );
}
