import type { Metadata } from "next";
import { AR_One_Sans } from "next/font/google";
import "./globals.css";

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  variable: "--font-ar-one-sans",
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
      <body className={`${arOneSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
