import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hamcsoft.com"),
  title: {
    default: "HAMCSoft — Agencia de Desarrollo Web y Soluciones Digitales",
    template: "%s | HAMCSoft",
  },
  description:
    "Creamos sitios web profesionales, tiendas en línea, landing pages y aplicaciones web para negocios modernos. También desarrollamos sistemas empresariales a medida.",
  keywords: [
    "desarrollo web",
    "agencia web",
    "soluciones digitales",
    "sitios web profesionales",
    "ecommerce",
    "landing page",
    "aplicaciones web",
    "HAMCSoft",
    "sistema POS",
    "automatización",
  ],
  authors: [{ name: "HAMCSoft", url: "https://hamcsoft.com" }],
  creator: "HAMCSoft",
  publisher: "HAMCSoft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "HAMCSoft — Agencia de Desarrollo Web y Soluciones Digitales",
    description:
      "Creamos sitios web profesionales, tiendas en línea, landing pages y aplicaciones web para negocios modernos.",
    siteName: "HAMCSoft",
    type: "website",
    url: "https://hamcsoft.com",
    locale: "es_MX",
    images: [
      {
        url: "/hamcsoft.png",
        width: 1200,
        height: 630,
        alt: "HAMCSoft — Agencia de Desarrollo Web y Soluciones Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAMCSoft — Agencia de Desarrollo Web y Soluciones Digitales",
    description:
      "Creamos sitios web profesionales, tiendas en línea, landing pages y aplicaciones web para negocios modernos.",
    images: ["/hamcsoft.png"],
  },
  alternates: {
    canonical: "https://hamcsoft.com",
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
        <WhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  );
}
