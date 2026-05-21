"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Heart,
  Zap,
  Users,
  Globe,
  TrendingUp,
  MessageSquare,
  Code2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Equipo ────────────────────────────────────────────────────────────────
// Cuando tengas fotos, reemplaza `photo` con la ruta de la imagen,
// por ejemplo: photo: "/team/hugo.jpg"
const team = [
  {
    name: "Hugo Montaño",
    role: "CEO & Fundador",
    initials: "HM",
    color: "from-violet-500 to-purple-600",
    bio: "Creador de HAMCSoft y arquitecto de cada solución que entregamos. Se encarga del desarrollo de los proyectos de principio a fin, asegurando código limpio, funcional y construido para durar.",
    photo: "/team/Hugo2.jpg",
  },
  {
    name: "Carlos Tapia",
    role: "Co-fundador",
    initials: "CT",
    color: "from-blue-500 to-cyan-600",
    bio: "El puente entre HAMCSoft y sus clientes. Se encarga de entender a fondo cada proyecto, gestionar la comunicación y asegurarse de que la experiencia del cliente sea clara, fluida y sin sorpresas.",
    photo: "/team/Carlos.jpg",
  },
];

// ─── Valores ───────────────────────────────────────────────────────────────
const values = [
  {
    icon: Target,
    title: "Orientados a resultados",
    description:
      "No entregamos solo código. Entregamos herramientas que generan resultados reales: más clientes, más ventas, más crecimiento para tu negocio.",
  },
  {
    icon: Heart,
    title: "Comprometidos de verdad",
    description:
      "Tratamos cada proyecto como si fuera nuestro propio negocio. Tu éxito es nuestro éxito, y eso se nota en cada decisión que tomamos.",
  },
  {
    icon: Zap,
    title: "Ágiles y transparentes",
    description:
      "Comunicación clara desde el primer día. Sin sorpresas en los precios, sin retrasos sin aviso. Sabemos que tu tiempo vale.",
  },
  {
    icon: TrendingUp,
    title: "Pensamos en el futuro",
    description:
      "Construimos con arquitecturas escalables para que tu sistema crezca contigo. Lo que hacemos hoy debe seguir funcionando en 5 años.",
  },
];

// ─── Stats ─────────────────────────────────────────────────────────────────
const stats = [
  { value: "100%", label: "Proyectos entregados a tiempo" },
  { value: "2", label: "Personas dedicadas a tu proyecto" },
  { value: "PVR", label: "Puerto Vallarta, México" },
  { value: "∞", label: "Ganas de hacer crecer tu negocio" },
];

// ─── Component ─────────────────────────────────────────────────────────────
export default function NosotrosContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 pt-32 pb-20 relative overflow-hidden">
        <div className="h-px w-full absolute top-0 bg-gradient-to-r from-transparent via-primary-700 to-transparent" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb-1 opacity-20 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-800 text-primary-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Sobre nosotros
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Hacemos que tu negocio{" "}
              <span className="gradient-text">exista en internet</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              HAMCSoft nació con un propósito claro: que ningún negocio se quede
              limitado a las cuatro paredes de su local. El mundo digital es tu
              vitrina más grande, y estamos aquí para construirla.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary-800 py-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-primary-200 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
                Nuestra historia
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                ¿Por qué existe HAMCSoft?
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Vimos un problema real: muchos negocios en México tienen todo el
                  potencial del mundo, pero siguen operando únicamente de forma
                  presencial. Sus clientes potenciales no pueden encontrarlos, sus
                  productos no llegan más lejos de su colonia, y su crecimiento está
                  limitado por el espacio físico.
                </p>
                <p>
                  HAMCSoft nació para cambiar eso. Creamos soluciones digitales
                  accesibles, bien construidas y pensadas para el contexto de los
                  negocios reales en México: sin tecnicismos innecesarios, sin
                  precios inflados y con resultados concretos.
                </p>
                <p>
                  Somos un equipo pequeño, y eso es una ventaja. Cada proyecto que
                  tomamos recibe atención directa, sin intermediarios ni equipos
                  rotantes. Conocemos tu proyecto de inicio a fin porque nosotros
                  mismos lo construimos.
                </p>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gray-950 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-20" />
                <div className="relative space-y-4">
                  {[
                    { icon: Globe, text: "Tu negocio visible en todo el mundo" },
                    { icon: Users, text: "Más clientes, más alcance" },
                    { icon: TrendingUp, text: "Crecimiento real y sostenible" },
                    { icon: Code2, text: "Tecnología que funciona de verdad" },
                  ].map(({ icon: Icon, text }, i) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5"
                    >
                      <div className="w-8 h-8 bg-primary-700/50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary-300" />
                      </div>
                      <p className="text-white text-sm font-medium">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Lo que nos define
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Nuestros valores
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              El equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Las personas detrás de HAMCSoft
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Un equipo pequeño y enfocado. Cuando trabajas con nosotros, trabajas
              directamente con quienes construyen tu proyecto.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-primary-200 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row"
              >
                {/* Photo */}
                <div className="sm:w-48 sm:shrink-0 h-52 sm:h-auto relative">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 192px"
                      quality={95}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                      <span className="text-white text-4xl font-extrabold tracking-tight">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col justify-center">
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-1">
                    {member.role}
                  </p>
                  <h3 className="font-extrabold text-gray-900 text-xl mb-3">{member.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl p-10 text-center shadow-primary"
          >
            <MessageSquare className="w-8 h-8 text-primary-300 mx-auto mb-4" />
            <h3 className="text-2xl font-extrabold text-white mb-3">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-primary-200 mb-6 max-w-md mx-auto text-sm">
              Cuéntanoslo. La primera llamada es gratuita y sin compromiso.
              Nos encanta escuchar ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/523222151711?text=${encodeURIComponent("Hola, vi su página de Sobre Nosotros y me gustaría platicar sobre mi proyecto.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
              >
                Agendar llamada gratuita →
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 bg-primary-600/40 hover:bg-primary-600/60 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors border border-primary-500/50"
              >
                Ver catálogo de servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
