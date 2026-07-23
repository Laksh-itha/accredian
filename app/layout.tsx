import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Corporate Training That Moves the Skill Gap Needle",
  description:
    "Enterprise upskilling programs built on the CAT Framework — Concept, Application, Tools. Trusted by Reliance, IBM, HCL, ADP, Bayer and CRIF.",
  keywords: [
    "Accredian",
    "Enterprise",
    "Corporate Training",
    "Workforce Upskilling",
    "Learning Platform",
    "Employee Training",
  ],
  authors: [{ name: "Lakshitha R" }],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} ${plexMono.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
