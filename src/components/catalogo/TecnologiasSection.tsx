"use client";

import { motion } from "framer-motion";
import { tecnologiasData } from "@/data/paquetes";

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-700 border-blue-100",
  Backend: "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Base de datos": "bg-amber-50 text-amber-700 border-amber-100",
  DevOps: "bg-slate-50 text-slate-700 border-slate-100",
  Deploy: "bg-violet-50 text-violet-700 border-violet-100",
  Pagos: "bg-rose-50 text-rose-700 border-rose-100",
  Integración: "bg-cyan-50 text-cyan-700 border-cyan-100",
  Automatización: "bg-orange-50 text-orange-700 border-orange-100",
};

export default function TecnologiasSection() {
  return (
    <section id="tecnologias" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Stack tecnológico
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Construido con las{" "}
            <span className="gradient-text">mejores tecnologías</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Usamos el stack moderno más potente del mercado para garantizar rendimiento,
            seguridad y escalabilidad en cada proyecto.
          </p>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {tecnologiasData.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-shadow hover:shadow-sm cursor-default ${
                categoryColors[tech.category] ?? "bg-gray-50 text-gray-700 border-gray-100"
              }`}
            >
              <span>{tech.name}</span>
              <span className="text-xs opacity-60 font-normal hidden sm:inline">
                · {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {Object.entries(categoryColors).map(([cat, classes]) => (
            <span
              key={cat}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border ${classes}`}
            >
              {cat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
