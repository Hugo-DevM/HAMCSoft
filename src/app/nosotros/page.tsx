import type { Metadata } from "next";
import { motion } from "framer-motion"; // Note: motion needs "use client" — see below
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NosotrosContent from "./NosotrosContent";

export const metadata: Metadata = {
  title: "Sobre Nosotros — HAMCSoft",
  description:
    "Conoce al equipo detrás de HAMCSoft. Somos una agencia de desarrollo de software con sede en Puerto Vallarta, México, comprometida con hacer crecer los negocios en línea.",
  alternates: { canonical: "https://hamcsoft.com/nosotros" },
  openGraph: {
    title: "Sobre Nosotros — HAMCSoft",
    description:
      "Conoce al equipo detrás de HAMCSoft. Desarrollo de software hecho con propósito.",
    url: "https://hamcsoft.com/nosotros",
    siteName: "HAMCSoft",
    locale: "es_MX",
    type: "website",
  },
};

export default function NosotrosPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NosotrosContent />
      <Footer />
    </main>
  );
}
