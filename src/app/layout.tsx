import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SanHogar — Plan de Negocio · Fichox",
  description: "Modelo de negocio, plan de marketing, curva de ROI y meta de clientes para breakeven de SanHogar — inventario inteligente con IA para comerciantes venezolanos/LATAM.",
  keywords: ["SanHogar", "Fichox", "SaaS", "LATAM", "Venezuela", "IA", "MercadoLibre", "Instagram", "USDT", "plan de negocio"],
  authors: [{ name: "SanHogar" }],
  icons: {
    icon: "/sanhogar-logo.png",
  },
  openGraph: {
    title: "SanHogar — Plan de Negocio",
    description: "Modelo de negocio, marketing, ROI y breakeven para comerciantes LATAM",
    siteName: "SanHogar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SanHogar — Plan de Negocio",
    description: "Modelo de negocio, marketing, ROI y breakeven para comerciantes LATAM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
