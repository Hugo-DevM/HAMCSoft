"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Globe2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const badges = [
  { icon: ShieldCheck, label: "Diseño a Medida" },
  { icon: Cpu, label: "Sitios Web Rápidos" },
  { icon: Globe2, label: "Presencia Digital" },
];

function CompanyMockup() {
  const products = [
    {
      name: "Sistema de Fidelización",
      status: "Activo",
      statusColor: "bg-green-100 text-green-700",
      clients: "120+",
      icon: "🎯",
    },
    {
      name: "Suite POS Modular",
      status: "En Desarrollo",
      statusColor: "bg-amber-100 text-amber-700",
      clients: "Beta",
      icon: "🖥️",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Browser chrome */}
      <div className="bg-gray-100 rounded-t-2xl px-4 py-3 flex items-center gap-2 border border-b-0 border-gray-200">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1.5 text-xs text-gray-400 border border-gray-200">
          hamcsoft.com/soluciones
        </div>
      </div>

      {/* App window */}
      <div
        className="bg-white rounded-b-2xl border border-gray-200 shadow-2xl overflow-hidden"
        style={{ height: 360 }}
      >
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-[58px] bg-gray-950 flex flex-col items-center py-4 gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary-800 flex items-center justify-center mb-2">
              <div className="w-4 h-4 bg-white rounded-sm opacity-90" />
            </div>
            {["🏠", "📦", "📊", "👥", "⚙️"].map((icon, i) => (
              <button
                key={i}
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-colors ${
                  i === 0
                    ? "bg-primary-800 text-white"
                    : "text-gray-500 hover:bg-gray-800"
                }`}
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 bg-gray-50 overflow-hidden">
            {/* Top bar */}
            <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Portal Corporativo</p>
                <p className="text-sm font-semibold text-gray-800">
                  HAMCSoft — Nuestras Soluciones
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-800">HS</span>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3">
              {/* Company intro card */}
              <div className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-xl p-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary-300 mb-1">
                  Agencia Web
                </p>
                <p className="text-sm font-black">
                  Sitios web y soluciones digitales
                </p>
                <p className="text-[10px] text-primary-200 mt-1">
                  Transformamos negocios con tecnología de punta
                </p>
              </div>

              {/* Products grid */}
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Productos Actuales
              </p>
              {products.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-xl p-3 border border-gray-100 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center text-lg shrink-0">
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-800 truncate">
                      {p.name}
                    </p>
                    <p className="text-[9px] text-gray-400">
                      {p.clients} clientes
                    </p>
                  </div>
                  <span
                    className={`text-[9px] font-bold px-2 py-1 rounded-full shrink-0 ${p.statusColor}`}
                  >
                    {p.status}
                  </span>
                </div>
              ))}

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { label: "Años exp.", value: "3+" },
                  { label: "Proyectos", value: "12+" },
                  { label: "Clientes", value: "50+" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-xl p-2.5 border border-gray-100 text-center"
                  >
                    <p className="text-sm font-black text-gray-900">
                      {s.value}
                    </p>
                    <p className="text-[9px] text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge 1 */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-20 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
          <span className="text-lg">🎯</span>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-800">Fidelización</p>
          <p className="text-[10px] text-gray-400">En producción</p>
        </div>
      </motion.div>

      {/* Floating badge 2 */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -left-4 bottom-24 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3"
      >
        <p className="text-[10px] text-gray-400 font-medium">Suite POS</p>
        <p className="text-sm font-bold text-primary-800">En desarrollo</p>
        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 w-4 rounded-full ${
                i <= 2 ? "bg-primary-600" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] orb-1 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orb-2 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Top badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse" />
              Agencia de Desarrollo Web
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-gray-900 leading-[1.05]"
            >
              Webs que <span className="gradient-text">transforman</span>{" "}
              <br className="hidden lg:block" />
              negocios <span className="gradient-text">reales</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-lg"
            >
              Creamos sitios web, tiendas en línea y aplicaciones digitales para
              negocios que quieren crecer. También desarrollamos sistemas
              empresariales a medida cuando tu operación lo necesita.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#soluciones"
                className="inline-flex items-center gap-2.5 bg-primary-800 hover:bg-primary-900 text-white font-semibold px-7 py-4 rounded-2xl transition-all duration-200 shadow-primary hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Ver Nuestras Soluciones
                <ArrowRight size={18} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-7 py-4 rounded-2xl transition-all duration-200 border border-gray-200 hover:border-primary-200 text-base"
              >
                Hablar con un experto
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 pt-2"
            >
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-gray-500 font-medium"
                >
                  <Icon size={15} className="text-primary-600" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="pt-4 border-t border-gray-100 flex gap-8"
            >
              {[
                { number: "2", label: "Productos en portafolio" },
                { number: "50+", label: "Clientes satisfechos" },
                { number: "2+", label: "Años de experiencia" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-gray-900">
                    {stat.number}
                  </p>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <CompanyMockup />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
