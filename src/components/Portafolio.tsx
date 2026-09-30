"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  FlaskConical,
} from "lucide-react";
import { proyectosDestacados } from "@/data/proyectos";
import ProyectoPreview from "./portafolio/ProyectoPreview";

export default function Portafolio() {
  return (
    <section
      id="portafolio"
      className="py-14 lg:py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Briefcase size={12} />
            Trabajos realizados
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Proyectos que ya están{" "}
            <span className="gradient-text">en línea</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            No pedimos que nos creas. Entra a los sitios que hemos construido,
            revísalos en tu celular y saca tus propias conclusiones.
          </p>
        </motion.div>

        {/*
          Grid de proyectos destacados.
          Se usa flex-wrap en lugar de grid para que la última fila quede
          centrada cuando el total de destacados no es múltiplo de 3.
        */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {proyectosDestacados.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              {/* Preview */}
              <div className="p-4 pb-0">
                <ProyectoPreview proyecto={p} priority={i === 0} />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${p.accent.chip}`}
                  >
                    {p.categoria}
                  </span>
                  {p.demo && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full border border-dashed border-gray-300 text-gray-500">
                      <FlaskConical size={10} />
                      Demo
                    </span>
                  )}
                  <span className="text-[10px] font-semibold text-gray-400">
                    {p.anio}
                  </span>
                </div>

                <h3 className="text-lg font-black text-gray-900 leading-tight">
                  {p.cliente}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-3">
                  {p.industria}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                  {p.descripcion}
                </p>

                {/* Entregables */}
                <ul className="space-y-1.5 mb-5">
                  {p.entregables.slice(0, 3).map((e) => (
                    <li
                      key={e}
                      className="flex items-start gap-2 text-xs text-gray-600"
                    >
                      <Check
                        size={12}
                        className="text-primary-500 mt-0.5 shrink-0"
                      />
                      {e}
                    </li>
                  ))}
                </ul>

                {/* Métrica + enlace en vivo */}
                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
                  {p.metrica ? (
                    <div>
                      <p className="text-lg font-black gradient-text leading-none">
                        {p.metrica.valor}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium mt-1">
                        {p.metrica.label}
                      </p>
                    </div>
                  ) : (
                    <span />
                  )}

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-800 hover:text-primary-900 hover:gap-2.5 transition-all shrink-0"
                    >
                      {p.demo ? "Ver demo" : "Ver sitio"}
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA al portafolio completo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="/portafolio"
            className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-primary hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver portafolio completo
            <ArrowRight size={16} />
          </a>
          <p className="text-xs text-gray-400 mt-4">
            Todos los enlaces abren el sitio funcionando, no una imagen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
