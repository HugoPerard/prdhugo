import type { Metadata } from "next";
import { Bricolage_Grotesque, Sono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const sono = Sono({
  subsets: ["latin"],
  variable: "--font-sono",
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
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${sono.variable} antialiased`}>{children}</body>
    </html>
  );
}
