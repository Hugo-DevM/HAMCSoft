"use client";

import { motion } from "framer-motion";
import { procesoData } from "@/data/paquetes";

export default function ProcesoTrabajo() {
  return (
    <section
      id="proceso"
      className="py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
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
            Proceso de trabajo
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            ¿Cómo construimos{" "}
            <span className="gradient-text">tu proyecto?</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Un proceso claro, ágil y transparente desde la primera conversación hasta el
            lanzamiento y más allá.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

          <div className="grid grid-cols-7 gap-4">
            {procesoData.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step bubble */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border border-gray-100 group-hover:border-primary-200 shadow-card group-hover:shadow-card-hover transition-all duration-300 flex flex-col items-center justify-center mb-5 group-hover:-translate-y-1">
                  <span className="text-2xl mb-1">{step.icon}</span>
                  <span className="text-xs font-bold text-primary-600">0{step.step}</span>
                </div>

                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  {step.description}
                </p>
                <span className="inline-flex items-center text-xs font-semibold bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-transparent" />

          <div className="flex flex-col gap-6">
            {procesoData.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative flex items-start gap-5 pl-0"
              >
                {/* Bubble */}
                <div className="relative z-10 w-16 h-16 shrink-0 rounded-2xl bg-white border border-gray-100 shadow-card flex flex-col items-center justify-center">
                  <span className="text-xl mb-0.5">{step.icon}</span>
                  <span className="text-xs font-bold text-primary-600">0{step.step}</span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                    <span className="text-xs font-semibold bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
