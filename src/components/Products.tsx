"use client";

import { motion } from "framer-motion";
import {
  Gift,
  Monitor,
  Coffee,
  ShoppingBag,
  Scissors,
  Store,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Puzzle,
} from "lucide-react";

const posModules = [
  {
    icon: Store,
    name: "Cafeterías y restaurantes",
    desc: "Comandas, mesas y cocina en pantalla",
  },
  {
    icon: Coffee,
    name: "Retail y tiendas",
    desc: "Inventario, variantes y código de barras",
  },
  {
    icon: ShoppingBag,
    name: "Barberías y estéticas",
    desc: "Agenda de citas y servicios por operador",
  },
  {
    icon: Scissors,
    name: "Y más sectores…",
    desc: "Módulos en desarrollo continuo",
  },
];

const products = [
  {
    id: "fidelizacion",
    status: "production",
    statusLabel: "En Producción",
    icon: Gift,
    name: "Sistema de Fidelización",
    tagline: "Convierte clientes únicos en clientes de por vida",
    description:
      "Plataforma completa para diseñar, lanzar y gestionar programas de lealtad personalizados. Acumula puntos, canjea recompensas y construye relaciones duraderas con tus clientes.",
    features: [
      "Programa de puntos y recompensas",
      "Panel de gestión para el negocio",
      "Interfaz web para el cliente",
      "Proximamente: Integración con sistemas POS",
      "Proximamente: Reportes de retención y LTV",
      "Proximamente: Campañas de reactivación automática",
    ],
    cta: "Ver sistema",
    color: "from-violet-500 to-primary-800",
    bgLight: "from-violet-50 to-primary-50",
    accentColor: "text-primary-800",
    borderColor: "border-primary-200",
  },
  {
    id: "pos",
    status: "development",
    statusLabel: "En Desarrollo",
    icon: Monitor,
    name: "Sistema POS General",
    tagline: "Un solo sistema, módulos para cada sector",
    description:
      "Sistema de punto de venta general que permite instalar módulos especializados según el tipo de negocio. Un núcleo sólido y escalable al que se le agregan las funcionalidades exactas que cada sector necesita — sin pagar por lo que no se usa.",
    features: [
      "Núcleo POS con caja, inventario y reportes",
      "Módulos instalables por tipo de negocio",
      "100% operativo sin conexión a internet",
      "Sincronización automática en la nube",
      "Multi-sucursal y multi-usuario",
      "Interfaz nativa ultrarrápida",
    ],
    cta: "Ver el sistema",
    color: "from-blue-500 to-cyan-600",
    bgLight: "from-blue-50 to-cyan-50",
    accentColor: "text-blue-700",
    borderColor: "border-blue-200",
    modules: posModules,
  },
];

const upcoming = [
  {
    name: "CRM Empresarial",
    desc: "Gestión completa de relaciones con clientes",
    icon: "👥",
  },
  {
    name: "ERP Modular",
    desc: "Planificación de recursos empresariales",
    icon: "🏭",
  },
  {
    name: "Analytics Platform",
    desc: "Inteligencia de negocio en tiempo real",
    icon: "📊",
  },
];

export default function Products() {
  return (
    <section
      id="soluciones"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Sparkles size={12} />
            Portafolio de Soluciones
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Soluciones que construimos{" "}
            <span className="gradient-text">para tu industria</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            No desarrollamos software genérico. Cada producto nace del análisis
            profundo de un problema real de negocio — y se construye para
            resolverlo de forma definitiva.
          </p>
        </motion.div>

        {/* Products — main cards */}
        <div className="space-y-8 mb-16">
          {products.map((product, i) => {
            const Icon = product.icon;
            const isProduction = product.status === "production";

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative bg-white rounded-3xl border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ${
                  isProduction ? "border-primary-100" : "border-gray-100"
                }`}
              >
                <div className="grid lg:grid-cols-2">
                  {/* Left — info */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-sm`}
                        >
                          <Icon size={22} className="text-white" />
                        </div>
                        <span
                          className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                            isProduction
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }`}
                        >
                          {isProduction ? "✓ " : "⏳ "}
                          {product.statusLabel}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p
                        className={`text-sm font-semibold mb-4 ${product.accentColor}`}
                      >
                        {product.tagline}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                        {product.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <ChevronRight
                              size={13}
                              className="text-primary-500 mt-0.5 shrink-0"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <a
                      href={product.id === "fidelizacion" ? "https://fideliza.app" : "https://pos-modular-lemon.vercel.app"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 ${product.accentColor} hover:gap-3`}
                    >
                      {product.cta}
                      <ArrowRight size={15} />
                    </a>
                  </div>

                  {/* Right — visual */}
                  <div
                    className={`bg-gradient-to-br ${product.bgLight} p-8 lg:p-10 flex flex-col justify-center border-l border-gray-100`}
                  >
                    {product.id === "fidelizacion" ? (
                      /* Fidelización visual */
                      <div className="space-y-4">
                        <div className="bg-white rounded-2xl p-5 shadow-card border border-white/80">
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-bold text-gray-700">
                              Panel de Fidelización
                            </p>
                            <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full">
                              En vivo
                            </span>
                          </div>
                          {[
                            { name: "Carlos M.", points: 2840, level: "Oro" },
                            { name: "Ana R.", points: 1420, level: "Plata" },
                            { name: "Luis P.", points: 680, level: "Bronce" },
                          ].map((c) => (
                            <div
                              key={c.name}
                              className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0"
                            >
                              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-xs font-black text-primary-800">
                                {c.name[0]}
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-bold text-gray-800">
                                  {c.name}
                                </p>
                                <p className="text-[10px] text-gray-400">
                                  {c.points} puntos
                                </p>
                              </div>
                              <span
                                className={`text-[9px] font-bold px-2 py-1 rounded-full ${
                                  c.level === "Oro"
                                    ? "bg-amber-100 text-amber-700"
                                    : c.level === "Plata"
                                      ? "bg-gray-100 text-gray-600"
                                      : "bg-orange-100 text-orange-700"
                                }`}
                              >
                                {c.level}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded-xl p-4 shadow-card border border-white/80">
                            <p className="text-[10px] text-gray-400 mb-1">
                              Retención
                            </p>
                            <p className="text-xl font-black gradient-text">
                              +68%
                            </p>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-card border border-white/80">
                            <p className="text-[10px] text-gray-400 mb-1">
                              Clientes activos
                            </p>
                            <p className="text-xl font-black gradient-text">
                              120+
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* POS Suite visual — modules grid */
                      <div className="space-y-4">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                          Módulos instalables por sector
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {product.modules?.map(
                            ({ icon: ModIcon, name, desc }) => (
                              <div
                                key={name}
                                className="bg-white rounded-2xl p-4 shadow-card border border-white/80 hover:border-blue-100 transition-colors"
                              >
                                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                                  <ModIcon
                                    size={16}
                                    className="text-blue-600"
                                  />
                                </div>
                                <p className="text-xs font-bold text-gray-800">
                                  {name}
                                </p>
                                <p className="text-[10px] text-gray-400 mt-0.5">
                                  {desc}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                        <div className="bg-white/70 rounded-xl p-3 border border-blue-100 text-center">
                          <p className="text-[10px] text-blue-600 font-semibold">
                            + nuevos módulos en desarrollo continuo
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Upcoming section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              En el Roadmap
            </p>
            <h3 className="text-2xl font-black text-gray-800 mt-2">
              Lo que viene después
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {upcoming.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-center gap-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                </div>
                <span className="ml-auto text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-full shrink-0">
                  Pronto
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
