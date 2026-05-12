"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/paquetes";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Preguntas frecuentes
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Resolvemos tus{" "}
            <span className="gradient-text">dudas más comunes</span>
          </h2>
          <p className="text-lg text-gray-500">
            Si no encuentras la respuesta que buscas, escríbenos directamente por WhatsApp.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                openIndex === i
                  ? "border-primary-200 shadow-card"
                  : "border-gray-100 shadow-sm hover:border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span
                  className={`text-base font-semibold leading-snug ${
                    openIndex === i ? "text-primary-800" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIndex === i
                      ? "bg-primary-100 text-primary-700 rotate-180"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <ChevronDown size={15} strokeWidth={2.5} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">¿Tienes más preguntas?</p>
          <a
            href={`https://wa.me/523222151711?text=${encodeURIComponent("Hola, buen día. Estoy revisando su catálogo de servicios y tengo algunas dudas que no encontré en las preguntas frecuentes. ¿Me pueden apoyar con más información antes de tomar una decisión? Quedo en espera, gracias.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-primary hover:-translate-y-0.5"
          >
            Pregúntanos por WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
