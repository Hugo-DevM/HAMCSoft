import type { Metadata } from "next";
import AyudaContent from "./AyudaContent";

export const metadata: Metadata = {
  title: "Centro de Ayuda — Preguntas Frecuentes",
  description:
    "Resuelve tus dudas sobre proceso, tiempos de entrega, precios, pagos, mantenimiento, dominios y soporte de los proyectos web de HAMCSoft.",
  alternates: { canonical: "https://hamcsoft.com/ayuda" },
  openGraph: {
    title: "Centro de Ayuda — HAMCSoft",
    description:
      "Preguntas frecuentes sobre proceso, precios, pagos, mantenimiento y soporte.",
    url: "https://hamcsoft.com/ayuda",
    siteName: "HAMCSoft",
    locale: "es_MX",
    type: "website",
  },
};

export default function AyudaPage() {
  return <AyudaContent />;
}
