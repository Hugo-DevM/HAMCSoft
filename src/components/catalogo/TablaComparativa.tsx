"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { comparativaData } from "@/data/paquetes";

const columns = [
  { key: "landing", label: "Landing Page", short: "Landing" },
  { key: "institucional", label: "Web Institucional", short: "Institucional" },
  { key: "ecommerceBasico", label: "Ecommerce Básico", short: "E-comm. Básico" },
  { key: "ecommerceAvanzado", label: "Ecommerce Avanzado", short: "E-comm. Avanzado", highlight: true },
  { key: "softwarePersonalizado", label: "Software a Medida", short: "Software" },
];

function CellValue({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${highlight ? "bg-white/20" : "bg-emerald-100"}`}>
          <Check size={13} className={highlight ? "text-white" : "text-emerald-600"} strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <Minus size={16} className={highlight ? "text-white/30" : "text-gray-300"} strokeWidth={2} />
      </div>
    );
  }
  return (
    <span className={`text-xs font-medium text-center block leading-snug ${highlight ? "text-white" : "text-gray-700"}`}>
      {value}
    </span>
  );
}

export default function TablaComparativa() {
  const [activeCol, setActiveCol] = useState(0);

  return (
    <section id="comparativa" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Comparativa
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Compara y elige{" "}
            <span className="gradient-text">con claridad</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Una vista clara de lo que incluye cada paquete para que tomes la mejor decisión.
          </p>
        </motion.div>

        {/* ── DESKTOP TABLE ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:block overflow-hidden rounded-2xl border border-gray-100 shadow-card"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 w-48">
                  Característica
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`text-center px-4 py-4 text-xs font-semibold uppercase tracking-wide ${
                      col.highlight ? "bg-primary-50 text-primary-700" : "text-gray-500"
                    }`}
                  >
                    {col.label}
                    {col.highlight && (
                      <span className="block text-xs font-medium text-primary-500 normal-case tracking-normal mt-0.5">
                        Recomendado
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparativaData.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-50 transition-colors hover:bg-gray-50/50 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">
                    {row.feature}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`px-4 py-4 text-center ${col.highlight ? "bg-primary-50/40" : ""}`}
                    >
                      <CellValue value={row[col.key as keyof typeof row] as string | boolean} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* ── MOBILE CARD VIEW ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:hidden"
        >
          {/* Tab selector */}
          <div className="flex overflow-x-auto gap-2 pb-3 scrollbar-hide mb-5">
            {columns.map((col, i) => (
              <button
                key={col.key}
                onClick={() => setActiveCol(i)}
                className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCol === i
                    ? col.highlight
                      ? "bg-primary-800 text-white shadow-primary"
                      : "bg-primary-50 text-primary-800 border border-primary-200"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {col.short}
                {col.highlight && activeCol === i && (
                  <span className="ml-1.5 text-xs font-normal opacity-70">★</span>
                )}
              </button>
            ))}
          </div>

          {/* Active column card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCol}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl overflow-hidden border shadow-card ${
                columns[activeCol].highlight
                  ? "border-primary-600 ring-2 ring-primary-600"
                  : "border-gray-100"
              }`}
            >
              {/* Card header */}
              <div
                className={`px-5 py-4 ${
                  columns[activeCol].highlight
                    ? "bg-gradient-to-r from-primary-800 to-primary-700"
                    : "bg-gray-50"
                }`}
              >
                <p
                  className={`text-base font-bold ${
                    columns[activeCol].highlight ? "text-white" : "text-gray-800"
                  }`}
                >
                  {columns[activeCol].label}
                </p>
                {columns[activeCol].highlight && (
                  <span className="text-xs text-primary-300 font-medium">Recomendado</span>
                )}
              </div>

              {/* Rows */}
              <div className="bg-white divide-y divide-gray-50">
                {comparativaData.map((row, i) => {
                  const val = row[columns[activeCol].key as keyof typeof row] as string | boolean;
                  return (
                    <div key={i} className="flex items-center justify-between px-5 py-3.5 gap-4">
                      <span className="text-sm font-medium text-gray-700 flex-1">
                        {row.feature}
                      </span>
                      <div className="shrink-0 min-w-[80px] text-right flex justify-end">
                        <CellValue value={val} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-5">
            {columns.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCol(i)}
                className={`rounded-full transition-all duration-200 ${
                  activeCol === i ? "w-5 h-2 bg-primary-600" : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
              <Check size={11} className="text-emerald-600" strokeWidth={2.5} />
            </div>
            Incluido
          </div>
          <div className="flex items-center gap-2">
            <Minus size={16} className="text-gray-300" />
            No incluido
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">
              Texto
            </span>
            Descripción del nivel
          </div>
        </motion.div>
      </div>
    </section>
  );
}
