import { AR_One_Sans } from "next/font/google";
import "./globals.css";

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  variable: "--font-ar-one-sans",
});

export const metadata = {
  title: "prdHugo | Hugo Pérard",
  description: "Hugo Pérard's (aka. prdHugo) presentation website",
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
