"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function NotFound() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] orb-1 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orb-2 pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-50" />

        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 text-center relative z-10">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse" />
            Error 404 — Página no encontrada
          </motion.div>

          {/* 404 number */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[140px] lg:text-[200px] font-black leading-none tracking-tight gradient-text select-none">
              404
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl lg:text-4xl font-black tracking-tight text-gray-900 mt-2"
          >
            Esta página no existe
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-gray-500 leading-relaxed mt-4 max-w-md mx-auto"
          >
            La URL que buscas no está disponible o fue movida. Te ayudamos a
            encontrar lo que necesitas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 bg-primary-800 hover:bg-primary-900 text-white font-semibold px-7 py-4 rounded-2xl transition-all duration-200 shadow-primary hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              <Home size={18} />
              Ir al inicio
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-7 py-4 rounded-2xl transition-all duration-200 border border-gray-200 hover:border-primary-200 text-base"
            >
              <Search size={18} />
              Ver servicios
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 pt-8 border-t border-gray-100"
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Páginas populares
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Nosotros", href: "/nosotros" },
                { label: "Servicios", href: "/servicios" },
                { label: "Contacto", href: "/contacto" },
                { label: "Ayuda", href: "/ayuda" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm text-primary-700 hover:text-primary-900 font-medium bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-xl transition-all duration-200"
                >
                  <ArrowLeft size={13} />
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </section>

      <Footer />
    </main>
  );
}
