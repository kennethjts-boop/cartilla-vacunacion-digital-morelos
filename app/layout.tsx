import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Estatal Dashboard - Cartilla de Vacunación Digital Morelos (CVD -Morelos)",
  description: "Monitoreo en tiempo real de la cobertura de vacunación infantil en Morelos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} font-display text-slate-900 bg-background-light dark:bg-background-dark dark:text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
