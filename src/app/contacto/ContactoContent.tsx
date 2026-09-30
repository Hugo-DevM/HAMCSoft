"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WA_NUMBER = "523222151711";

const projectTypes = [
  "Landing Page",
  "Sitio Web Institucional",
  "Ecommerce Básico",
  "Ecommerce Avanzado",
  "Software Personalizado",
  "Mantenimiento / Soporte",
  "Otro",
];

const contactInfo = [
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+52 322-215-17-11",
    href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola, me gustaría platicar sobre un proyecto.")}`,
    description: "Respuesta en menos de 1 hora en horario hábil",
    cta: "Abrir WhatsApp",
    highlight: true,
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "hamcsoftmx@gmail.com",
    href: "mailto:hamcsoftmx@gmail.com",
    description: "Respondemos en menos de 24 horas hábiles",
    cta: "Enviar correo",
    highlight: false,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Puerto Vallarta, Jalisco",
    href: "https://maps.google.com/?q=Puerto+Vallarta+Jalisco+Mexico",
    description: "México · Atendemos clientes de toda la república",
    cta: "Ver en mapa",
    highlight: false,
  },
];

const hours = [
  { day: "Lunes – Viernes", time: "9:00 – 18:00 hrs" },
  { day: "Sábado", time: "10:00 – 14:00 hrs" },
  { day: "Domingo", time: "Cerrado" },
];

export default function ContactoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `Hola, me contacto desde el sitio web de HAMCSoft.`,
      ``,
      `*Nombre:* ${form.name}`,
      `*Correo:* ${form.email}`,
      form.phone ? `*Teléfono:* ${form.phone}` : null,
      form.projectType ? `*Tipo de proyecto:* ${form.projectType}` : null,
      ``,
      `*Mensaje:*`,
      form.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSent(true);
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-950 pt-32 pb-16 relative overflow-hidden">
        <div className="h-px w-full absolute top-0 bg-gradient-to-r from-transparent via-primary-700 to-transparent" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-800 text-primary-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Contáctanos
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Hablemos de tu proyecto
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sin compromiso y sin costo. Cuéntanos tu idea y te decimos cómo podemos ayudarte.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left — form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                {!sent ? (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Envíanos un mensaje
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                      Completa el formulario y te contactamos por WhatsApp de inmediato.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name + email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Nombre completo <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Juan García"
                            required
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Correo electrónico <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="juan@ejemplo.com"
                            required
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      {/* Phone + project type */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Teléfono / WhatsApp
                            <span className="text-gray-400 font-normal ml-1">(opcional)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+52 322 000 0000"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Tipo de proyecto
                          </label>
                          <select
                            name="projectType"
                            value={form.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white"
                          >
                            <option value="">Selecciona una opción</option>
                            {projectTypes.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Cuéntanos sobre tu proyecto <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Describe brevemente lo que necesitas: tipo de sitio, funciones que buscas, si ya tienes material (logo, textos, imágenes), presupuesto aproximado, etc."
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={!isValid}
                        className="w-full flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200"
                      >
                        <Send className="w-4 h-4" />
                        Enviar por WhatsApp
                      </button>

                      <p className="text-center text-xs text-gray-400">
                        Al enviar, se abrirá WhatsApp con tu mensaje listo para enviarnos.
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ¡Mensaje listo!
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
                      Se abrió WhatsApp con tu información. Solo presiona enviar y te respondemos pronto.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-sm text-primary-600 hover:text-primary-800 font-semibold underline underline-offset-2 transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right — contact info */}
            <div className="lg:col-span-2 space-y-4">
              {/* Contact cards */}
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`block p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      item.highlight
                        ? "bg-primary-700 border-primary-600 text-white"
                        : "bg-white border-gray-200 text-gray-900"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        item.highlight ? "bg-white/15" : "bg-primary-50"
                      }`}>
                        <Icon className={`w-5 h-5 ${item.highlight ? "text-white" : "text-primary-600"}`} />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-xs font-semibold uppercase tracking-wide mb-0.5 ${
                          item.highlight ? "text-primary-200" : "text-gray-400"
                        }`}>
                          {item.label}
                        </p>
                        <p className={`font-bold text-sm mb-1 ${item.highlight ? "text-white" : "text-gray-900"}`}>
                          {item.value}
                        </p>
                        <p className={`text-xs ${item.highlight ? "text-primary-200" : "text-gray-500"}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              {/* Hours */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <p className="text-sm font-bold text-gray-900">Horario de atención</p>
                </div>
                <div className="space-y-2">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{day}</span>
                      <span className={`font-semibold ${time === "Cerrado" ? "text-gray-300" : "text-gray-900"}`}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-400 border-t border-gray-100 pt-3">
                  Zona horaria: CST (Ciudad de México). Para urgencias fuera de horario escríbenos por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
