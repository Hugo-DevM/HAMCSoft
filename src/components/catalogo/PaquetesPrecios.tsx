"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { paquetes } from "@/data/paquetes";

export default function PaquetesPrecios() {
  return (
    <section
      id="paquetes"
      className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

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
            Paquetes y precios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Transparencia total en{" "}
            <span className="gradient-text">cada inversión</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-5">
            Elige el paquete que mejor se adapte a tu etapa de negocio. Sin costos ocultos,
            sin sorpresas.
          </p>
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            Precios de lanzamiento — Oferta por tiempo limitado
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {paquetes.map((paquete, i) => (
            <motion.div
              key={paquete.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                paquete.highlight
                  ? "shadow-primary ring-2 ring-primary-600 scale-[1.02] z-10"
                  : "shadow-card hover:shadow-card-hover border border-gray-100"
              }`}
            >
              {/* Card top gradient */}
              <div
                className={`p-6 bg-gradient-to-br ${paquete.gradient} ${
                  paquete.highlight ? "text-white" : ""
                }`}
              >
                {/* Badge */}
                {paquete.badge && (
                  <span
                    className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${
                      paquete.highlight
                        ? "bg-white/20 text-white border border-white/30"
                        : paquete.badgeColor
                    }`}
                  >
                    {paquete.badge}
                  </span>
                )}

                {/* Name */}
                <h3
                  className={`text-lg font-bold mb-1 ${
                    paquete.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {paquete.name}
                </h3>
                <p
                  className={`text-xs mb-5 ${
                    paquete.highlight ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {paquete.subtitle}
                </p>

                {/* Price */}
                <div className="mb-2">
                  {paquete.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-sm font-medium line-through ${
                          paquete.highlight ? "text-white/40" : "text-gray-400"
                        }`}
                      >
                        {paquete.originalPrice}
                      </span>
                      {paquete.discountLabel && (
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            paquete.highlight
                              ? "bg-white/20 text-white"
                              : "bg-rose-100 text-rose-600"
                          }`}
                        >
                          {paquete.discountLabel}
                        </span>
                      )}
                    </div>
                  )}
                  <span
                    className={`text-3xl font-extrabold ${
                      paquete.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {paquete.price}
                  </span>
                </div>
                <p
                  className={`text-xs font-medium ${
                    paquete.highlight ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  {paquete.priceNote}
                </p>
              </div>

              {/* Features list */}
              <div className="flex-1 p-5 bg-white flex flex-col">
                <p className="text-xs text-gray-500 mb-4 italic leading-snug">
                  Ideal para: {paquete.idealFor}
                </p>

                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {paquete.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2">
                      {typeof feature.included === "boolean" ? (
                        feature.included ? (
                          <Check
                            size={14}
                            className="text-emerald-500 shrink-0 mt-0.5"
                            strokeWidth={2.5}
                          />
                        ) : (
                          <X
                            size={14}
                            className="text-gray-300 shrink-0 mt-0.5"
                            strokeWidth={2.5}
                          />
                        )
                      ) : (
                        <Check
                          size={14}
                          className="text-emerald-500 shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                      )}
                      <span
                        className={`text-xs leading-snug ${
                          typeof feature.included === "boolean" && !feature.included
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                      >
                        {feature.label}
                        {feature.note && (
                          <span className="text-gray-400 ml-1">({feature.note})</span>
                        )}
                        {typeof feature.included === "string" && (
                          <span className="text-gray-400 ml-1">· {feature.included}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/523222151711?text=${encodeURIComponent(`Hola, buen día. Estoy revisando su catálogo de servicios y me interesa el paquete "${paquete.name}"${paquete.originalPrice ? ` que tiene precio de lanzamiento de ${paquete.price} MXN (precio regular ${paquete.originalPrice} MXN)` : ` (${paquete.price} ${paquete.priceNote})`}. Me gustaría conocer más detalles: qué incluye exactamente, cuáles son los tiempos de entrega y cómo sería el proceso de trabajo. Quedo en espera, gracias.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    paquete.highlight
                      ? "bg-primary-800 hover:bg-primary-900 text-white shadow-primary hover:-translate-y-0.5"
                      : "bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-800 border border-gray-200 hover:border-primary-200"
                  }`}
                >
                  {paquete.cta}
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          * Los precios son base. El costo final puede variar según requerimientos específicos.
          Todos los paquetes incluyen soporte post-lanzamiento.
        </motion.p>
      </div>
    </section>
  );
}
