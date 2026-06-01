import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { brand } from "@/config/brand";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.description,
  keywords: [
    "automatización WhatsApp",
    "asistente IA",
    "bot WhatsApp negocio",
    "agenda citas IA",
    "dashboard WhatsApp",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
