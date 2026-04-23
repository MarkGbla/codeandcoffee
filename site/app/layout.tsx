import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Manrope,
  Gloria_Hallelujah,
  Inter,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const scribble = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-scribble",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ai + frnds",
  description: "you don't need another AI tutorial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${scribble.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased bg-white text-black">
        {children}
        <Script
          id="luma-checkout"
          src="https://embed.lu.ma/checkout-button.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
