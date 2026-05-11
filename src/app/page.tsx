import Navbar from "@/components/Navbar";
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
      <Products />
      <Benefits />
      <WhyUs />
      <SystemPreview />
      <TechStack />
      <Testimonials />
      <CTAFinal />
      <Footer />
    </main>
  );
}
