import type { Metadata } from "next";
import ProximamenteContent from "./ProximamenteContent";

export const metadata: Metadata = {
  title: "Próximamente — Nuevos productos de HAMCSoft",
  description:
    "Lo que viene en HAMCSoft: la app móvil y el panel empresarial multiusuario. Entérate antes que nadie.",
  alternates: { canonical: "https://hamcsoft.com/proximamente" },
  openGraph: {
    title: "Próximamente — HAMCSoft",
    description: "Los siguientes productos de HAMCSoft, en camino.",
    url: "https://hamcsoft.com/proximamente",
    siteName: "HAMCSoft",
    locale: "es_MX",
    type: "website",
  },
};

export default function ProximamentePage() {
  return <ProximamenteContent />;
}
