import type { Metadata } from "next";
import { Geist, Geist_Mono, Oooh_Baby, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ooohBaby = Oooh_Baby({
  variable: "--oooh-baby",
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  variable: "--manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vyro",
  description: "Vyro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ooohBaby.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
