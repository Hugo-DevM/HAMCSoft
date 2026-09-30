"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Bell,
  ArrowLeft,
  Sparkles,
  Trophy,
  Zap,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WA_NUMBER = "523222151711";

const coming = [
  {
    icon: Trophy,
    title: "Tornea Cup",
    description:
      "SaaS para dueños de canchas de fútbol rápido: crea torneos, genera el rol de juegos, lleva tablas de posiciones en vivo y gestiona equipos, jugadores y pagos — sin depender de WhatsApp.",
    eta: "Próximamente",
  },
  {
    icon: Zap,
    title: "App móvil HAMCSoft",
    description:
      "Gestiona tu negocio desde cualquier lugar con nuestra aplicación nativa para iOS y Android.",
    eta: "En desarrollo",
  },
  {
    icon: ShieldCheck,
    title: "Panel empresarial multiusuario",
    description:
      "Administra múltiples sucursales, roles y permisos desde un solo panel centralizado.",
    eta: "En desarrollo",
  },
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 3,
  duration: Math.random() * 4 + 3,
}));

export default function ProximamentePage() {
  const [notified, setNotified] = useState(false);

  const handleNotify = () => {
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola, me gustaría que me avisaran cuando tengan disponibles las nuevas funciones y módulos de HAMCSoft.")}`,
      "_blank",
    );
    setNotified(true);
  };

  return (
    <main className="min-h-screen bg-gray-950 overflow-hidden relative flex flex-col">
      {/* Fondo animado de partículas */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary-500/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ opacity: [0, 0.6, 0], scale: [1, 1.5, 1] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Orbs de fondo */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-700/10 rounded-full blur-3xl" />
      </div>

      {/* Grid decorativo */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-700 to-transparent" />

      {/* Contenido */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-6 pb-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo-icon.svg"
              alt="HAMCSoft ícono"
              width={100}
              height={100}
              className="h-28 w-auto"
            />
            <Image
              src="/logo.svg"
              alt="HAMCSoft"
              width={720}
              height={160}
              className="h-48 w-auto -ml-3"
            />
          </Link>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-primary-900/60 border border-primary-700/50 text-primary-300 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Estamos construyendo algo grande
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white text-center leading-tight mb-6 max-w-3xl"
        >
          Próxima <span className="gradient-text">evolución</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-lg text-center max-w-xl mb-12 leading-relaxed"
        >
          Estamos trabajando en nuevas funciones y módulos para llevar tu
          negocio al siguiente nivel. Sé el primero en enterarte cuando estén
          listos.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 mb-20"
        >
          {!notified ? (
            <button
              onClick={handleNotify}
              className="inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-600 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-primary hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Bell className="w-4 h-4" />
              Avísame cuando esté listo
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-green-900/40 border border-green-700/50 text-green-400 font-semibold text-sm px-7 py-3.5 rounded-xl"
            >
              ✓ ¡Listo! Te avisaremos por WhatsApp
            </motion.div>
          )}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </motion.div>

        {/* Cards de lo que viene */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-4xl"
        >
          <p className="text-center text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">
            Lo que se viene
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {coming.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-primary-700/40 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 bg-primary-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-700/50 transition-colors">
                    <Icon
                      className="w-4 h-4 text-primary-400"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary-400 bg-primary-900/50 px-2.5 py-1 rounded-full border border-primary-800/50">
                    <Rocket className="w-2.5 h-2.5" />
                    {item.eta}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer mínimo */}
      <div className="relative border-t border-white/5 py-5 text-center">
        <p className="text-xs text-gray-700">
          © {new Date().getFullYear()} HAMCSoft · Puerto Vallarta, México
        </p>
      </div>
    </main>
  );
}
