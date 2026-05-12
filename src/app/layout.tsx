import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HAMCSoft — Plataforma POS Empresarial Modular",
  description:
    "Ecosistema de puntos de venta inteligentes para cafeterías, retail, barberías y más. Tecnología moderna, escalable y preparada para tu negocio.",
  keywords: [
    "POS", "punto de venta", "software empresarial", "cafetería", "retail",
    "barbería", "HAMCSoft", "sistema modular", "offline POS", "SaaS"
  ],
  openGraph: {
    title: "HAMCSoft — Plataforma POS Empresarial Modular",
    description: "Ecosistema de puntos de venta inteligentes y modulares.",
    siteName: "HAMCSoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAMCSoft — Plataforma POS Empresarial Modular",
    description: "Ecosistema de puntos de venta inteligentes y modulares.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo-icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
