import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evelyn Tomkelski — Storyteller in pictures",
  description:
    "Brazilian-born creative working across motion, design, and illustration. Currently based in Santiago, Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
