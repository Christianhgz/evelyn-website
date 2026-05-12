import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evelyn Tomkelski — Storyteller in pictures",
  description:
    "Brazilian-born creative working across motion, design, and illustration. Currently based in Santiago, Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`h-full ${cormorant.variable} ${dmSans.variable} ${lora.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
