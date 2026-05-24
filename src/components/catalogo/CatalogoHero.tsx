"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";

const stats = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "24/7", label: "Soporte activo" },
  { value: "7 días", label: "Entrega express" },
];

export default function CatalogoHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white pt-28 pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/40 to-white" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] orb-1 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] orb-2 pointer-events-none" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary-400/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Pre-badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
          Catálogo de Servicios 2026 — HAMCSoft
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6"
        >
          Desarrollamos sitios web{" "}
          <span className="gradient-text">y soluciones digitales</span>
          <br />
          profesionales para{" "}
          <span className="relative inline-block">
            negocios modernos
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </span>
          .
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Desde landing pages de alto impacto hasta sistemas empresariales a
          medida. Cada proyecto construido con{" "}
          <span className="text-gray-700 font-medium">
            código limpio, diseño premium
          </span>{" "}
          y entrega en tiempo real.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={`https://wa.me/523222151711?text=${encodeURIComponent("Hola, buen día. Me contacto desde su página web (Catálogo de Servicios). Estoy interesado en cotizar un proyecto de desarrollo de software/web para mi negocio y me gustaría agendar una reunión sin costo para platicar sobre mis necesidades y opciones disponibles. ¿Cuándo tienen disponibilidad?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-primary-800 hover:bg-primary-900 text-white font-semibold text-base px-7 py-3.5 rounded-2xl transition-all duration-200 shadow-primary hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            Solicitar cotización
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#paquetes"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-base px-7 py-3.5 rounded-2xl border border-gray-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Ver paquetes
            <ChevronDown size={16} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="inline-flex flex-wrap justify-center gap-0 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-card overflow-hidden"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center px-8 py-5 ${
                i < stats.length - 1 ? "border-r border-gray-100" : ""
              }`}
            >
              <span className="text-2xl font-extrabold gradient-text">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
