"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { comparativaData } from "@/data/paquetes";

const columns = [
  { key: "landing", label: "Landing", short: "LP" },
  { key: "institucional", label: "Institucional", short: "Inst." },
  { key: "ecommerceBasico", label: "E-comm. Básico", short: "ECB" },
  { key: "ecommerceAvanzado", label: "E-comm. Avanzado", short: "ECA", highlight: true },
  { key: "softwarePersonalizado", label: "Software a Medida", short: "SM" },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
          <Check size={13} className="text-emerald-600" strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <Minus size={16} className="text-gray-300" strokeWidth={2} />
      </div>
    );
  }
  return (
    <span className="text-xs font-medium text-gray-700 text-center block leading-snug">
      {value}
    </span>
  );
}

export default function TablaComparativa() {
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

        {/* Table wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto rounded-2xl border border-gray-100 shadow-card"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 w-48">
                  Característica
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`text-center px-4 py-4 text-xs font-semibold uppercase tracking-wide ${
                      col.highlight
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-500"
                    }`}
                  >
                    <span className="hidden sm:inline">{col.label}</span>
                    <span className="sm:hidden">{col.short}</span>
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
                      className={`px-4 py-4 text-center ${
                        col.highlight ? "bg-primary-50/40" : ""
                      }`}
                    >
                      <CellValue
                        value={row[col.key as keyof typeof row] as string | boolean}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
