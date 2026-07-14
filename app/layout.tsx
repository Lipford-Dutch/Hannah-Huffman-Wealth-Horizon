import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://lipford-dutch.github.io/Hannah-Huffman-Wealth-Horizon";

export const metadata: Metadata = {
  metadataBase: new URL("https://lipford-dutch.github.io"),
  title: "Hannah's Wealth Horizon | A 10-Year Family Plan",
  description: "A personalized, interactive roadmap for financial independence, resilience, and generational wealth.",
  openGraph: {
    title: "Hannah's Wealth Horizon",
    description: "A 10-year family plan for freedom, resilience, and legacy.",
    type: "website",
    url: siteUrl,
    images: [{ url: "/Hannah-Huffman-Wealth-Horizon/og.webp", width: 1672, height: 941, alt: "Hannah's Wealth Horizon - A 10-Year Family Plan" }],
  },
  twitter: { card: "summary_large_image", title: "Hannah's Wealth Horizon", description: "A 10-year family plan for freedom, resilience, and legacy.", images: ["/Hannah-Huffman-Wealth-Horizon/og.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
