import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortafolioContent from "./PortafolioContent";
import { proyectos } from "@/data/proyectos";

export const metadata: Metadata = {
  title: "Portafolio — Proyectos y casos de éxito",
  description:
    "Sitios web, tiendas en línea y sistemas que HAMCSoft ha desarrollado para negocios de Puerto Vallarta y México. Visita los proyectos en vivo.",
  alternates: { canonical: "https://hamcsoft.com/portafolio" },
  openGraph: {
    title: "Portafolio — Proyectos y casos de éxito | HAMCSoft",
    description:
      "Trabajos reales de HAMCSoft: landing pages, ecommerce y sistemas a medida. Visita cada proyecto en vivo.",
    url: "https://hamcsoft.com/portafolio",
    siteName: "HAMCSoft",
    locale: "es_MX",
    type: "website",
  },
};

/** Datos estructurados: ayuda a que Google muestre el portafolio como colección. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portafolio de HAMCSoft",
  url: "https://hamcsoft.com/portafolio",
  description:
    "Proyectos web y sistemas desarrollados por HAMCSoft para negocios reales.",
  hasPart: proyectos.map((p) => ({
    "@type": "CreativeWork",
    name: `${p.cliente} — ${p.titulo}`,
    description: p.descripcion,
    ...(p.url ? { url: p.url } : {}),
    creator: { "@type": "Organization", name: "HAMCSoft" },
  })),
};

export default function PortafolioPage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PortafolioContent />
      <Footer />
    </main>
  );
}
