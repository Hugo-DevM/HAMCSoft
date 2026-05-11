"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Server, Database, Cloud, Layers } from "lucide-react";

const stack = [
  {
    icon: Cpu,
    name: "Electron",
    description: "Aplicaciones desktop nativas para Windows, macOS y Linux con rendimiento superior.",
    badge: "Runtime",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: Code2,
    name: "React",
    description: "Interfaz de usuario moderna, reactiva y extremadamente rápida con componentes reutilizables.",
    badge: "Frontend",
    color: "from-sky-400 to-cyan-600",
  },
  {
    icon: Server,
    name: "Node.js",
    description: "Backend potente y asíncrono que procesa miles de transacciones con eficiencia máxima.",
    badge: "Backend",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Database,
    name: "SQLite",
    description: "Base de datos local embebida para operación offline confiable y consultas ultrarrápidas.",
    badge: "Database",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Cloud,
    name: "Cloud Sync",
    description: "Sincronización automática en la nube con resolución de conflictos y respaldo continuo.",
    badge: "Cloud",
    color: "from-violet-400 to-primary-600",
  },
  {
    icon: Layers,
    name: "Arquitectura Modular",
    description: "Sistema de plugins e módulos independientes que se integran sin afectar el núcleo central.",
    badge: "Architecture",
    color: "from-rose-400 to-pink-600",
  },
];

const principles = [
  { number: "01", title: "Offline-first", body: "Diseñamos para la ausencia de internet. La conectividad es una mejora, no un requisito." },
  { number: "02", title: "Performance nativo", body: "Electron + React brinda la velocidad de una app nativa con la flexibilidad del web." },
  { number: "03", title: "Datos seguros", body: "Encriptación local + backups en la nube. Tu información nunca está en riesgo." },
  { number: "04", title: "Modularidad real", body: "Cada módulo es independiente. Activa, desactiva o personaliza sin romper el sistema." },
];

export default function TechStack() {
  return (
    <section id="tecnologia" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-64 -right-64 w-[600px] h-[600px] orb-1 opacity-30 pointer-events-none" />

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
            <Cpu size={12} />
            Stack Tecnológico
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Construido con{" "}
            <span className="gradient-text">tecnología enterprise</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Elegimos las mejores herramientas del ecosistema moderno para construir
            software que dure, escale y rinda bajo cualquier condición.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {stack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

                <div className="relative">
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-sm`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture principles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-950 rounded-3xl p-10 lg:p-14 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute top-0 right-0 w-80 h-80 orb-1 opacity-20 pointer-events-none" />

          <div className="relative">
            <p className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-3">
              Principios de Ingeniería
            </p>
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-10">
              Construido para durar
            </h3>

            <div className="grid sm:grid-cols-2 gap-8">
              {principles.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex gap-5"
                >
                  <span className="text-4xl font-black text-primary-800/40 font-mono shrink-0">
                    {p.number}
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{p.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
