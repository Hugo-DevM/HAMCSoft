import type { Metadata } from "next";
import ProximamenteContent from "./ProximamenteContent";

export const metadata: Metadata = {
  title: "Próximamente — Tornea Cup y nuevos productos",
  description:
    "Lo que viene en HAMCSoft: Tornea Cup, el SaaS para torneos de fútbol rápido, y la app móvil HAMCSoft. Entérate antes que nadie.",
  alternates: { canonical: "https://hamcsoft.com/proximamente" },
  openGraph: {
    title: "Próximamente — HAMCSoft",
    description:
      "Tornea Cup y los siguientes productos de HAMCSoft, en camino.",
    url: "https://hamcsoft.com/proximamente",
    siteName: "HAMCSoft",
    locale: "es_MX",
    type: "website",
  },
};

export default function ProximamentePage() {
  return <ProximamenteContent />;
}
