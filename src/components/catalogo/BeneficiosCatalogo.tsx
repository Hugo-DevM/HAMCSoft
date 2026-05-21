"use client";

import { motion } from "framer-motion";
import { beneficiosData } from "@/data/paquetes";

export default function BeneficiosCatalogo() {
  return (
    <section id="beneficios" className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 orb-1 pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 orb-2 pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Beneficios de trabajar{" "}
            <span className="gradient-text">con nosotros</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            No solo entregamos código. Entregamos soluciones que funcionan, escalan y
            generan valor real para tu negocio.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {beneficiosData.map((beneficio, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group glass-card rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 hover:border-primary-200"
            >
              {/* Icon */}
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <beneficio.icon className="w-5 h-5 text-primary-600" strokeWidth={1.75} />
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-gray-900 mb-2">{beneficio.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{beneficio.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-primary"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1.5">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-primary-200 text-sm">
              Agenda una llamada gratuita y cuéntanos tu idea. Sin compromiso.
            </p>
          </div>
          <a
            href={`https://wa.me/523222151711?text=${encodeURIComponent("Hola, buen día. Revisé su catálogo de servicios y me interesa agendar la llamada gratuita para platicar sobre un proyecto que tengo en mente. Me gustaría contarles lo que necesito y conocer qué opciones me pueden ofrecer. ¿Cuándo tienen un espacio disponible?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-primary-800 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors duration-200 shadow-lg"
          >
            Agendar llamada gratuita →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
