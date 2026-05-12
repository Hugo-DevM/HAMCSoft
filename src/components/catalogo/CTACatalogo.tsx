"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Mail, Phone } from "lucide-react";

export default function CTACatalogo() {
  return (
    <section id="contacto-catalogo" className="py-28 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-16 w-32 h-32 rounded-full bg-primary-400/10 blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-16 right-16 w-48 h-48 rounded-full bg-primary-300/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponibles ahora
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
        >
          Lleva tu negocio al{" "}
          <span className="text-primary-300">siguiente nivel</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Agenda una reunión sin costo, cuéntanos tu proyecto y te damos una cotización
          clara en menos de 24 horas. Sin rodeos, sin compromisos.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={`https://wa.me/523222151711?text=${encodeURIComponent("Hola, buen día. Acabo de revisar su catálogo de servicios completo y estoy listo para dar el siguiente paso. Me interesa iniciar un proyecto y me gustaría recibir una cotización formal. ¿Podríamos agendar una reunión sin costo esta semana para definir los detalles?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-primary-900 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:bg-primary-50 hover:-translate-y-1 shadow-xl"
          >
            <MessageCircle size={20} className="text-emerald-600" />
            Contactar por WhatsApp
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="mailto:contacto@hamcsoft.com"
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-1"
          >
            <Mail size={18} />
            Solicitar cotización por correo
          </a>
        </motion.div>

        {/* Contact info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-8 text-primary-300 text-sm"
        >
          <div className="flex items-center gap-2">
            <MessageCircle size={15} />
            <span>WhatsApp disponible</span>
          </div>
          <div className="w-px h-4 bg-primary-700 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Mail size={15} />
            <span>contacto@hamcsoft.com</span>
          </div>
          <div className="w-px h-4 bg-primary-700 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Phone size={15} />
            <span>Respuesta en &lt; 24 hrs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
