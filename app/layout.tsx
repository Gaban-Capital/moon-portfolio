import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: [
    {
      name: "Leon Gaban",
      url: " leongaban@gmail.com",
    },
  ],
  title: "Moon Portfolio",
  description: "Track and Project your Crypto Wealth.",
  keywords: ["crypto", "portfolio", "Bitcoin", "Ethereum", "Solana", "wealth"],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
