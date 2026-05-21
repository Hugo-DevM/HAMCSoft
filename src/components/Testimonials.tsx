"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Propietario",
    business: "Café Central — Ciudad de Panamá",
    avatar: "CM",
    avatarBg: "bg-amber-100 text-amber-700",
    product: "Sistema de Fidelización",
    productBg: "bg-primary-50 text-primary-700",
    quote:
      "Implementamos el sistema de fidelización de HAMCSoft y en 3 meses nuestra tasa de clientes recurrentes subió 68%. Lo que más valoro es que entienden mi negocio — no solo instalaron un software, construyeron algo que encaja exactamente con cómo trabajamos.",
    rating: 5,
    metric: "+68%",
    metricLabel: "Retención de clientes",
  },
  {
    name: "Andrea Rojas",
    role: "Gerente Comercial",
    business: "TiendaMax — Bogotá",
    avatar: "AR",
    avatarBg: "bg-blue-100 text-blue-700",
    product: "Suite POS (Beta)",
    productBg: "bg-blue-50 text-blue-700",
    quote:
      "Estamos en el programa beta del POS de HAMCSoft y ya se nota la diferencia. El sistema es rapidísimo y la interfaz es tan intuitiva que mis cajeros lo dominaron el primer día. Pocas empresas de software escuchan tanto al cliente durante el desarrollo.",
    rating: 5,
    metric: "−60%",
    metricLabel: "Tiempo de capacitación",
  },
  {
    name: "Miguel Herrera",
    role: "Fundador",
    business: "Red Barberías El Estilo — Medellín",
    avatar: "MH",
    avatarBg: "bg-rose-100 text-rose-700",
    product: "Solución Personalizada",
    productBg: "bg-rose-50 text-rose-700",
    quote:
      "HAMCSoft desarrolló para nosotros un módulo de agenda integrado con el sistema de puntos. El resultado superó lo que esperaba. Son un equipo serio, profesional y que sabe traducir las necesidades del negocio en tecnología que funciona de verdad.",
    rating: 5,
    metric: "3x",
    metricLabel: "Más reservas mensuales",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-14 lg:py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Star size={12} className="fill-primary-800" />
            Lo que dicen nuestros clientes
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Negocios que ya confían{" "}
            <span className="gradient-text">en HAMCSoft</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            El mejor indicador de calidad no es lo que decimos sobre nosotros —
            es lo que logran nuestros clientes con el software que construimos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="w-9 h-9 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                  <Quote size={16} className="text-primary-700" />
                </div>
              </div>

              {/* Product tag */}
              <span
                className={`self-start text-[10px] font-bold px-2.5 py-1 rounded-full mb-4 ${t.productBg}`}
              >
                {t.product}
              </span>

              <blockquote className="text-sm text-gray-600 leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </blockquote>

              <div className="bg-primary-50 border border-primary-100 rounded-2xl px-4 py-3 mb-6">
                <p className="text-2xl font-black gradient-text">{t.metric}</p>
                <p className="text-xs text-gray-500 font-medium">
                  {t.metricLabel}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-black ${t.avatarBg}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.role} · {t.business}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-10 py-8 border-t border-b border-gray-200"
        >
          {[
            { value: "2", label: "Sistemas en producción/beta" },
            { value: "50+", label: "Clientes activos" },
            { value: "4.9/5", label: "Satisfacción promedio" },
            { value: "2+", label: "Años desarrollando" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black gradient-text">{stat.value}</p>
              <p className="text-sm text-gray-400 font-medium mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
