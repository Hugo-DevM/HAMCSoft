"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import ChatBot from "./ChatBot";

const points = [
  "Consulta inicial sin costo ni compromiso",
  "Analizamos tu negocio y diseñamos la solución ideal",
  "Implementación ágil con entregas funcionales rápidas",
  "Acompañamiento y soporte continuo post-lanzamiento",
];

export default function CTAFinal() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section
      id="demo"
      className="py-14 lg:py-20 relative overflow-hidden bg-white"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #4A0F7E 0%, #6B1BB2 40%, #9333EA 70%, #BA5AFF 100%)",
          }}
        >
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-950/40 blur-3xl" />

          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-16 hidden lg:block"
          >
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
              <p className="text-white/90 text-xs font-bold">🎯 Fidelización</p>
              <p className="text-white text-lg font-black">En producción</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-10 right-32 hidden lg:block"
          >
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
              <p className="text-white/90 text-xs font-bold">⚽ Tornea Cup</p>
              <p className="text-white text-lg font-black">Próximamente</p>
            </div>
          </motion.div>

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <Sparkles size={12} />
              Hablemos sobre tu próximo proyecto
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Tu negocio merece
              <br />
              <span className="text-white/70">una web que</span>
              <br />
              realmente venda.
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Cuéntanos tu proyecto. Nosotros te mostramos cómo un sitio web
              bien construido puede transformar la presencia de tu negocio.
            </p>

            <ul className="space-y-3 mb-10">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 text-white/90 text-sm font-medium"
                >
                  <CheckCircle2 size={18} className="text-white/70 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setChatOpen(true)}
                className="inline-flex items-center gap-2.5 bg-white text-primary-800 font-bold px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-200 text-base hover:shadow-xl hover:-translate-y-0.5"
              >
                Iniciar conversación
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/523222151711?text=Hola%20HAMCSoft,%20estoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20soluciones%20y%20sistemas%20personalizados."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/15 border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/25 transition-all duration-200 text-base"
              >
                Escribirnos directamente
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {chatOpen && <ChatBot onClose={() => setChatOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
