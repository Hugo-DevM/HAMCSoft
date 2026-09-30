"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Target,
  Wrench,
  MessageCircle,
  FlaskConical,
} from "lucide-react";
import {
  proyectos,
  proyectosEntregados,
  categoriasProyecto,
  type CategoriaProyecto,
} from "@/data/proyectos";
import ProyectoPreview from "@/components/portafolio/ProyectoPreview";

const WHATSAPP = `https://wa.me/523222151711?text=${encodeURIComponent(
  "Hola, vi su portafolio y me gustaría platicar sobre un proyecto.",
)}`;

type Filtro = "Todos" | CategoriaProyecto;

export default function PortafolioContent() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const visibles = useMemo(
    () =>
      filtro === "Todos"
        ? proyectos
        : proyectos.filter((p) => p.categoria === filtro),
    [filtro],
  );

  const conEnlace = proyectos.filter((p) => p.url).length;

  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-32 -left-32 w-96 h-96 orb-1 rounded-full" />
        <div className="absolute top-20 right-0 w-96 h-96 orb-2 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-5 text-balance">
              Trabajos reales,{" "}
              <span className="gradient-text">sitios que puedes visitar</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Todo lo que ves aquí lo construimos nosotros y todo está en línea
              — ábrelo, pruébalo en tu celular y juzga tú mismo el resultado.
              Lo marcado como <strong className="font-semibold text-gray-600">Demo</strong>{" "}
              son proyectos que hicimos para mostrar lo que se puede lograr en
              ese giro; el resto son trabajos entregados a clientes.
            </p>
          </motion.div>

          {/* Stats de confianza */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-6 py-8 border-t border-b border-gray-200 max-w-4xl mx-auto"
          >
            {[
              {
                valor: `${proyectosEntregados.length}`,
                label: "Entregados a clientes",
              },
              {
                valor: `${conEnlace}`,
                label:
                  conEnlace === 1 ? "Sitio que puedes abrir" : "Sitios que puedes abrir",
              },
              { valor: "100%", label: "Código propio, sin plantillas" },
              { valor: "Puerto Vallarta", label: "Base de operaciones" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-black gradient-text">{s.valor}</p>
                <p className="text-sm text-gray-400 font-medium mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────── Filtros ───────────────────────── */}
      <section className="pb-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categoriasProyecto.map((c) => {
              const activo = filtro === c;
              return (
                <button
                  key={c}
                  onClick={() => setFiltro(c as Filtro)}
                  aria-pressed={activo}
                  className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-all duration-200 ${
                    activo
                      ? "bg-primary-800 text-white border-primary-800 shadow-primary"
                      : "bg-white text-gray-600 border-gray-200 hover:border-primary-200 hover:text-primary-800"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────── Casos de estudio ───────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {visibles.map((p, i) => {
              const Icon = p.icon;
              const invertido = i % 2 === 1;

              return (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Preview */}
                    <div
                      className={`p-6 lg:p-8 flex items-center bg-gray-50 ${
                        invertido ? "lg:order-2 lg:border-l" : "lg:border-r"
                      } border-gray-100`}
                    >
                      <div className="w-full">
                        <ProyectoPreview proyecto={p} priority={i === 0} />

                        {/* Segunda vista (panel admin) si el proyecto la tiene */}
                        {p.imagenSecundaria && (
                          <div className="mt-4">
                            <ProyectoPreview proyecto={p} vista="secundaria" />
                          </div>
                        )}

                        {p.url ? (
                          <div className="mt-4 flex flex-col sm:flex-row gap-2">
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary-300 text-sm font-bold text-primary-800 px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-card"
                            >
                              {p.urlSecundaria ? "Ver el sitio" : `Abrir ${p.dominio ?? "el sitio"}`}
                              <ArrowUpRight size={15} />
                            </a>
                            {p.urlSecundaria && (
                              <a
                                href={p.urlSecundaria}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary-300 text-sm font-bold text-primary-800 px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-card"
                              >
                                Entrar al panel
                                <ArrowUpRight size={15} />
                              </a>
                            )}
                          </div>
                        ) : (
                          <p className="mt-4 text-center text-xs text-gray-400">
                            Sitio privado del cliente — te lo mostramos en una
                            llamada.
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Detalle */}
                    <div
                      className={`p-6 lg:p-10 ${invertido ? "lg:order-1" : ""}`}
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${p.accent.gradient} flex items-center justify-center shadow-sm shrink-0`}
                        >
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${p.accent.chip}`}
                          >
                            {p.categoria}
                          </span>
                          {p.demo && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full border border-dashed border-gray-300 text-gray-500">
                              <FlaskConical size={10} />
                              Proyecto demostrativo
                            </span>
                          )}
                          <span className="text-[10px] font-semibold text-gray-400">
                            {p.anio}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
                        {p.cliente}
                      </h2>
                      <p className="text-sm font-semibold text-gray-400 mb-1">
                        {p.industria}
                      </p>
                      <p className="text-sm font-bold text-primary-800 mb-5">
                        {p.titulo}
                      </p>

                      <p className="text-sm text-gray-500 leading-relaxed mb-6">
                        {p.descripcion}
                      </p>

                      {/* Reto / Solución */}
                      {(p.reto || p.solucion) && (
                        <div className="space-y-4 mb-6">
                          {p.reto && (
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                                <Target size={14} className="text-rose-600" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-gray-700 mb-0.5">
                                  El reto
                                </p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                  {p.reto}
                                </p>
                              </div>
                            </div>
                          )}
                          {p.solucion && (
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                                <Wrench
                                  size={14}
                                  className="text-primary-700"
                                />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-gray-700 mb-0.5">
                                  Lo que hicimos
                                </p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                  {p.solucion}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Entregables */}
                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                        {p.entregables.map((e) => (
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

                      {/* Tecnologías + métrica */}
                      <div className="pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {p.tecnologias.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {p.metrica && (
                          <div className="text-right">
                            <p className="text-xl font-black gradient-text leading-none">
                              {p.metrica.valor}
                            </p>
                            <p className="text-[10px] text-gray-400 font-medium mt-1">
                              {p.metrica.label}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">
            ¿Quieres que el siguiente proyecto{" "}
            <span className="gradient-text">sea el tuyo?</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Cuéntanos qué necesitas y te decimos con claridad qué se puede
            hacer, cuánto cuesta y en cuánto tiempo. Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-800 hover:bg-primary-900 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-primary hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              Platicar por WhatsApp
            </a>
            <a
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary-300 text-gray-700 hover:text-primary-800 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
            >
              Ver servicios y precios
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
