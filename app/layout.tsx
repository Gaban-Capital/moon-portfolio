import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { MOON_PORTFOLIO, TAG_LINE } from "@/constants/copy";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: [
    {
      name: "Leon Gaban",
      url: " leongaban.com",
    },
  ],
  title: MOON_PORTFOLIO,
  description: TAG_LINE,
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
