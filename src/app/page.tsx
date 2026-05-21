import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "HAMCSoft — Desarrollo de Software y Soluciones Digitales",
  description:
    "Transformamos tu idea en software real. Landing pages, ecommerce, sistemas web, automatizaciones y más. Conoce HAMCSoft.",
  alternates: {
    canonical: "https://hamcsoft.com",
  },
  openGraph: {
    title: "HAMCSoft — Desarrollo de Software y Soluciones Digitales",
    description:
      "Transformamos tu idea en software real. Landing pages, ecommerce, sistemas web, automatizaciones y más.",
    url: "https://hamcsoft.com",
  },
};
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import WhyUs from "@/components/WhyUs";
import SystemPreview from "@/components/SystemPreview";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <WhyUs />
      <SystemPreview />
      <TechStack />
      <Testimonials />
      <Products />
      <CTAFinal />
      <Footer />
    </main>
  );
}
