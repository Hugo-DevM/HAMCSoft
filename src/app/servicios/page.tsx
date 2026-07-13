import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CatalogoHero from "@/components/catalogo/CatalogoHero";
import ServiciosGrid from "@/components/catalogo/ServiciosGrid";
import PaquetesPrecios from "@/components/catalogo/PaquetesPrecios";
import TablaComparativa from "@/components/catalogo/TablaComparativa";
import ProcesoTrabajo from "@/components/catalogo/ProcesoTrabajo";
import BeneficiosCatalogo from "@/components/catalogo/BeneficiosCatalogo";
import TecnologiasSection from "@/components/catalogo/TecnologiasSection";
import FAQSection from "@/components/catalogo/FAQSection";
import CTACatalogo from "@/components/catalogo/CTACatalogo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Catálogo de Servicios — HAMCSoft | Agencia de Desarrollo Web",
  description:
    "Conoce todos nuestros servicios de desarrollo web: landing pages, ecommerce, aplicaciones web, automatización y más. Precios claros y transparentes.",
  keywords: [
    "desarrollo web",
    "software a medida",
    "landing page",
    "ecommerce",
    "aplicaciones web",
    "automatización",
    "HAMCSoft",
    "catálogo de servicios",
  ],
  openGraph: {
    title: "Catálogo de Servicios — HAMCSoft",
    description:
      "Sitios web profesionales para negocios modernos. Landing pages, ecommerce, aplicaciones web y más.",
    siteName: "HAMCSoft",
    type: "website",
    url: "https://hamcsoft.com/servicios",
    locale: "es_MX",
    images: [
      {
        url: "/hamcsoft.png",
        width: 1200,
        height: 630,
        alt: "Catálogo de Servicios — HAMCSoft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Servicios — HAMCSoft",
    description:
      "Sitios web profesionales para negocios modernos. Landing pages, ecommerce, aplicaciones web y más.",
    images: ["/hamcsoft.png"],
  },
  alternates: {
    canonical: "https://hamcsoft.com/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <CatalogoHero />
      <ServiciosGrid />
      <PaquetesPrecios />
      <TablaComparativa />
      <ProcesoTrabajo />
      <BeneficiosCatalogo />
      <TecnologiasSection />
      <FAQSection />
      <CTACatalogo />
      <Footer />
    </main>
  );
}
