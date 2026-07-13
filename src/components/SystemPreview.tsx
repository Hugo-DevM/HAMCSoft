"use client";

import { motion } from "framer-motion";
import { Monitor, Home, Zap, Users, Gift, BarChart3, Crown, Ticket } from "lucide-react";

function FidelizaView() {
  const stats = [
    { label: "Clientes activos", value: "128", delta: "+8 este mes", icon: "👥", iconBg: "bg-violet-100" },
    { label: "Programas activos", value: "2", delta: "este mes", icon: "🎁", iconBg: "bg-purple-100" },
    { label: "Transacciones hoy", value: "34", delta: "+12%", icon: "📊", iconBg: "bg-emerald-100" },
    { label: "Recompensas canjeadas", value: "12", delta: "esta semana", icon: "🎟️", iconBg: "bg-amber-100" },
  ];

  const activity = [
    { name: "María G.", action: "ganó 2 puntos", time: "hace 5 min", program: "Cafe express", pts: "+2 pts" },
    { name: "Carlos M.", action: "canjeó recompensa", time: "hace 20 min", program: "Programa de puntos", pts: "−50 pts" },
    { name: "Ana R.", action: "ganó 2 puntos", time: "hace 1 h", program: "Cafe express", pts: "+2 pts" },
  ];

  const sidebar = [
    { icon: Home, label: "Resumen", active: true },
    { icon: Zap, label: "Registro rápido" },
    { icon: Users, label: "Clientes" },
    { icon: Gift, label: "Programas" },
    { icon: Crown, label: "Niveles VIP" },
    { icon: Ticket, label: "Bonos" },
    { icon: BarChart3, label: "Analíticas" },
  ];

  return (
    <div className="bg-gray-50 h-full flex">
      {/* Sidebar — hidden on mobile */}
      <div className="hidden sm:flex w-40 bg-white border-r border-gray-100 flex-col py-4 px-2 shrink-0">
        <p className="text-sm font-black text-gray-900 px-3 mb-4">
          <span className="text-primary-700">∞</span> Fideliza
        </p>
        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-1.5">
          Operación
        </p>
        {sidebar.slice(0, 2).map(({ icon: Icon, label, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-semibold ${
              active ? "bg-primary-50 text-primary-800" : "text-gray-500"
            }`}
          >
            <Icon size={11} />
            {label}
          </div>
        ))}
        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest px-3 mt-3 mb-1.5">
          Gestión
        </p>
        {sidebar.slice(2).map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-semibold text-gray-500"
          >
            <Icon size={11} />
            {label}
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 p-4 space-y-3 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-black text-gray-900">Hola de nuevo, Café Demo</p>
            <p className="text-[10px] text-gray-400">
              Esto es lo que pasó en tu programa de fidelización hoy.
            </p>
          </div>
          <span className="bg-primary-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shrink-0">
            ⚡ Registro rápido
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100">
              <div className={`w-6 h-6 rounded-lg ${s.iconBg} flex items-center justify-center text-[10px] mb-1.5`}>
                {s.icon}
              </div>
              <p className="text-[9px] text-gray-400 leading-tight">{s.label}</p>
              <p className="text-base font-black text-gray-900">{s.value}</p>
              <p className="text-[9px] text-green-600 font-semibold">{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Activity + Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-bold text-gray-700">Actividad reciente</p>
              <span className="text-[9px] font-semibold text-primary-700">Ver clientes</span>
            </div>
            {activity.map((a) => (
              <div key={a.name + a.time} className="flex items-center gap-2.5 py-2 border-b border-gray-50 last:border-0">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] shrink-0 ${
                  a.pts.startsWith("+") ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                }`}>
                  {a.pts.startsWith("+") ? "+" : "🎁"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-gray-800 truncate">
                    {a.name} <span className="font-medium text-gray-500">{a.action}</span>
                  </p>
                  <p className="text-[9px] text-gray-400">{a.time} · {a.program}</p>
                </div>
                <span className={`text-[10px] font-bold shrink-0 ${
                  a.pts.startsWith("+") ? "text-green-600" : "text-amber-600"
                }`}>{a.pts}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs font-bold text-gray-700">Programas</p>
                <span className="text-[9px] font-semibold text-primary-700">Gestionar</span>
              </div>
              {[
                { name: "Cafe express", type: "Visitas" },
                { name: "Puntos por compra", type: "Puntos" },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-[10px] font-bold text-gray-800">{p.name}</p>
                    <p className="text-[9px] text-gray-400">{p.type}</p>
                  </div>
                  <span className="text-[8px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                    ● Activo
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-4 text-white">
              <p className="text-[8px] font-bold uppercase tracking-widest text-primary-300 mb-1">
                Portal de clientes
              </p>
              <p className="text-xs font-black">Comparte tu enlace</p>
              <p className="text-[9px] text-primary-200 mt-1">
                Tus clientes consultan sus puntos y recompensas en línea
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SystemPreview() {
  return (
    <section id="preview" className="py-14 lg:py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-900 opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Monitor size={12} />
            Nuestros Sistemas en Acción
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Mira cómo se ve{" "}
            <span className="gradient-text">el software real</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Así se ve Fideliza, nuestro sistema de fidelización en producción.
            Interfaces diseñadas para la velocidad y claridad del trabajo diario.
          </p>
        </motion.div>

        {/* Mock app */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Window chrome */}
          <div className="bg-gray-900 px-4 py-3 flex items-center gap-3 border-b border-white/10">
            <div className="flex gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center min-w-0">
              <div className="bg-gray-800 rounded-lg px-4 py-1.5 text-xs text-gray-400 font-mono truncate max-w-[200px] sm:max-w-none">
                Fideliza — Panel de Resumen
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-gray-500 hidden sm:block">En línea</span>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-hidden bg-white" style={{ height: "clamp(420px, 55vw, 400px)" }}>
            <div className="h-full overflow-auto scrollbar-hide">
              <FidelizaView />
            </div>
          </div>
        </motion.div>

        {/* Footnotes */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            "Datos en tiempo real",
            "Interfaz optimizada para operadores",
            "Responsive en cualquier dispositivo",
            "Actualización continua de funciones",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
