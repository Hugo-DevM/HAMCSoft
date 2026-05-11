"use client";

import { motion } from "framer-motion";
import {
  Code2, Layers, Rocket, Users,
  RefreshCw, ShieldCheck, Headphones, TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Code2,
    title: "Desarrollo a Medida",
    description:
      "Cada solución nace del análisis profundo de tu negocio. No adaptamos plantillas — construimos desde cero para tus procesos exactos.",
    color: "from-violet-500 to-primary-800",
  },
  {
    icon: Layers,
    title: "Arquitectura Modular",
    description:
      "Diseñamos sistemas que crecen contigo. Activa funcionalidades cuando las necesitas, sin rediseñar desde cero.",
    color: "from-blue-400 to-indigo-600",
  },
  {
    icon: Rocket,
    title: "Entrega Ágil",
    description:
      "Metodología iterativa con entregas funcionales desde las primeras semanas. Ves resultados reales, no solo promesas.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Users,
    title: "Enfoque en el Usuario",
    description:
      "Cada interfaz está diseñada para el operador real. Software que cualquier empleado puede dominar desde el primer día.",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: RefreshCw,
    title: "Integración Total",
    description:
      "Nuestros sistemas se integran entre sí y con herramientas externas. Tu ecosistema tecnológico unificado y sincronizado.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Enterprise",
    description:
      "Datos encriptados, backups automáticos y control de accesos granular. Cumplimos estándares de seguridad empresarial.",
    color: "from-slate-500 to-gray-700",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad Real",
    description:
      "Construimos pensando en el futuro. Tu software escala desde un negocio local hasta una operación multinacional.",
    color: "from-primary-500 to-primary-800",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description:
      "No desaparecemos después de entregar. Acompañamos la evolución de tu sistema con soporte técnico y mejoras continuas.",
    color: "from-pink-400 to-rose-600",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

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
            <Rocket size={12} />
            Por qué HAMCSoft
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Más que software.{" "}
            <span className="gradient-text">Un socio tecnológico</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            No entregamos código. Entregamos soluciones que impactan directamente en
            la operación y el crecimiento de tu negocio.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-sm`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
