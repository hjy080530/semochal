import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GNB from "@/components/GNB";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEMO — 세모챌",
  description: "공모전 팀매칭 플랫폼 세모챌",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-surface text-text-900">
        <GNB />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
