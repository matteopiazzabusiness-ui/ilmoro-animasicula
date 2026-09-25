import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ilmoroanimasicula.it"),
  alternates: { canonical: "https://www.ilmoroanimasicula.it" },
  title: "Il Moro — Anima Sicula | Pizzeria a Sommatino",
  description:
    "Il Moro Anima Sicula: la pizza d'autore di Filippo Volpe nel cuore di Sommatino (CL). Impasti a lunga maturazione, ingredienti siciliani, un'esperienza di gusto.",
  keywords: [
    "pizzeria Sommatino",
    "Il Moro Anima Sicula",
    "Filippo Volpe",
    "pizza contemporanea Sicilia",
    "Caltanissetta pizzeria",
  ],
  openGraph: {
    title: "Il Moro — Anima Sicula",
    description:
      "La pizza d'autore di Filippo Volpe nel cuore di Sommatino. Impasti a lunga maturazione, anima siciliana.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="grain">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
