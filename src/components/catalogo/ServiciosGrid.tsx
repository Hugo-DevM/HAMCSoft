"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicios } from "@/data/servicios";

const badgeColors: Record<string, string> = {
  "Más vendido": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Empresarial": "bg-amber-100 text-amber-700 border-amber-200",
  "Escalable": "bg-blue-100 text-blue-700 border-blue-200",
};

export default function ServiciosGrid() {
  return (
    <section id="servicios" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />

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
            Nuestros servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Soluciones para cada{" "}
            <span className="gradient-text">etapa de tu negocio</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Desde una presencia digital básica hasta sistemas empresariales complejos.
            Tenemos la solución exacta para lo que necesitas.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, i) => {
            const Icon = servicio.icon;
            return (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Badge */}
                {servicio.badge && (
                  <span
                    className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColors[servicio.badge] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}
                  >
                    {servicio.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={22} className="text-primary-700" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{servicio.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {servicio.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {servicio.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-gray-50 border border-gray-100 text-gray-600 px-2.5 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-1.5 mb-6">
                  {servicio.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#paquetes"
                  className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                >
                  Más información
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover/btn:translate-x-1"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
