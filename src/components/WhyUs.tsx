"use client";

import { motion } from "framer-motion";
import { X, Check, Trophy } from "lucide-react";

const comparison = [
  {
    category: "Enfoque del producto",
    traditional: "Software genérico que intenta cubrir todos los negocios sin especializarse en ninguno",
    hamcsoft: "Cada solución construida específicamente para los procesos reales de tu industria",
  },
  {
    category: "Personalización",
    traditional: "Limitado a configuraciones predefinidas. Cambios requieren licencias costosas",
    hamcsoft: "Desarrollo a medida desde la arquitectura. Tu negocio define el producto",
  },
  {
    category: "Integración entre sistemas",
    traditional: "Productos desconectados que no se comunican entre sí — silos de información",
    hamcsoft: "Ecosistema unificado: fidelización, POS y futuros módulos integrados nativamente",
  },
  {
    category: "Tiempo de implementación",
    traditional: "Meses de configuración, capacitación extensa y adopción lenta del equipo",
    hamcsoft: "Entrega iterativa con resultados funcionales desde las primeras semanas",
  },
  {
    category: "Soporte post-entrega",
    traditional: "Soporte limitado, tickets lentos y actualizaciones escasas",
    hamcsoft: "Acompañamiento continuo, mejoras proactivas y canal directo con el equipo",
  },
  {
    category: "Escalabilidad",
    traditional: "Costoso y disruptivo escalar. Cambiar de plan o migrar datos es un dolor",
    hamcsoft: "Arquitectura modular diseñada para crecer sin reescribir el sistema",
  },
];

const advantages = [
  { number: "100%", label: "Código propio, sin dependencias" },
  { number: "2", label: "Sistemas ya en portafolio" },
  { number: "0", label: "Plantillas genéricas usadas" },
  { number: "∞", label: "Posibilidad de personalización" },
];

export default function WhyUs() {
  return (
    <section id="por-que-nosotros" className="py-14 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] orb-1 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Trophy size={12} />
            La diferencia HAMCSoft
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            No somos una fábrica de software.{" "}
            <span className="gradient-text">Somos tu equipo tech.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Las soluciones genéricas se construyeron para el promedio.
            HAMCSoft construye para ti — con tu proceso, tu equipo y tu futuro en mente.
          </p>
        </motion.div>

        {/* Advantage numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="text-center bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-3xl p-6"
            >
              <p className="text-4xl lg:text-5xl font-black gradient-text mb-2">{adv.number}</p>
              <p className="text-sm text-gray-500 font-medium">{adv.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison table — desktop */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-gray-100 shadow-card">
          <div className="grid grid-cols-3 bg-gray-950 text-white">
            <div className="px-6 py-4 text-sm font-semibold text-gray-400">Aspecto</div>
            <div className="px-6 py-4 text-sm font-semibold text-gray-400 border-l border-gray-800">
              Desarrollo Tradicional / Software Genérico
            </div>
            <div className="px-6 py-4 border-l border-gray-800">
              <span className="text-sm font-bold gradient-text">HAMCSoft</span>
            </div>
          </div>

          {comparison.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`grid grid-cols-3 border-t border-gray-100 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              } hover:bg-primary-50/30 transition-colors`}
            >
              <div className="px-6 py-5 text-sm font-semibold text-gray-800">
                {row.category}
              </div>
              <div className="px-6 py-5 border-l border-gray-100">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={11} className="text-red-500" />
                  </div>
                  <p className="text-sm text-gray-500">{row.traditional}</p>
                </div>
              </div>
              <div className="px-6 py-5 border-l border-gray-100">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-primary-800" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{row.hamcsoft}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison cards — mobile */}
        <div className="md:hidden space-y-4">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-100 rounded-2xl px-4 py-2.5 text-center">
              <p className="text-xs font-semibold text-gray-500">Tradicional</p>
            </div>
            <div className="bg-primary-800 rounded-2xl px-4 py-2.5 text-center">
              <p className="text-xs font-bold text-white">HAMCSoft</p>
            </div>
          </div>

          {comparison.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              {/* Category */}
              <div className="bg-gray-950 px-4 py-3">
                <p className="text-sm font-bold text-white">{row.category}</p>
              </div>
              {/* Two columns */}
              <div className="grid grid-cols-2 divide-x divide-gray-100">
                <div className="p-4 bg-white">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={9} className="text-red-500" />
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{row.traditional}</p>
                  </div>
                </div>
                <div className="p-4 bg-primary-50/40">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={9} className="text-primary-800" />
                    </div>
                    <p className="text-xs text-primary-900 font-medium leading-relaxed">{row.hamcsoft}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
