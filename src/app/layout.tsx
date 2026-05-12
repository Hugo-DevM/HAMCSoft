import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hamcsoft.com"),
  title: {
    default: "HAMCSoft — Desarrollo de Software y Soluciones Digitales",
    template: "%s | HAMCSoft",
  },
  description:
    "Desarrollamos software a medida, sitios web profesionales, sistemas POS, ecommerce y automatizaciones para negocios modernos. Tecnología que impulsa tu crecimiento.",
  keywords: [
    "desarrollo de software",
    "soluciones digitales",
    "software a medida",
    "sitios web profesionales",
    "ecommerce",
    "sistema POS",
    "automatización",
    "HAMCSoft",
    "landing page",
    "aplicaciones web",
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
    title: "HAMCSoft — Desarrollo de Software y Soluciones Digitales",
    description:
      "Desarrollamos software a medida, sitios web profesionales, sistemas POS, ecommerce y automatizaciones para negocios modernos.",
    siteName: "HAMCSoft",
    type: "website",
    url: "https://hamcsoft.com",
    locale: "es_MX",
    images: [
      {
        url: "/hamcsoft.png",
        width: 1200,
        height: 630,
        alt: "HAMCSoft — Desarrollo de Software y Soluciones Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAMCSoft — Desarrollo de Software y Soluciones Digitales",
    description:
      "Desarrollamos software a medida, sitios web profesionales, sistemas POS, ecommerce y automatizaciones para negocios modernos.",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
