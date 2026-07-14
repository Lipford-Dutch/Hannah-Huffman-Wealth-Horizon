import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.webp`;

  return {
    title: "Hannah's Wealth Horizon | A 10-Year Family Plan",
    description: "A personalized, interactive roadmap for financial independence, resilience, and generational wealth.",
    openGraph: {
      title: "Hannah's Wealth Horizon",
      description: "A 10-year family plan for freedom, resilience, and legacy.",
      type: "website",
      images: [{ url: image, width: 1672, height: 941, alt: "Hannah's Wealth Horizon - A 10-Year Family Plan" }],
    },
    twitter: { card: "summary_large_image", title: "Hannah's Wealth Horizon", description: "A 10-year family plan for freedom, resilience, and legacy.", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
