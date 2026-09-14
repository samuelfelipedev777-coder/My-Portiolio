import type { Metadata } from "next";

import {
  Unbounded,
  Plus_Jakarta_Sans,
  Noto_Sans_JP,
} from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const japanese = Noto_Sans_JP({
  variable: "--font-japanese",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Felipe — Developer & Data",
  description:
    "Portfólio de Samuel Felipe, desenvolvedor focado em desenvolvimento web, software e dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${unbounded.variable} ${plusJakartaSans.variable} ${japanese.variable} antialiased`}
    >
      <body>
        <Header />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}