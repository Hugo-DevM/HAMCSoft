"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MessageSquare,
  Clock,
  CreditCard,
  Wrench,
  Globe,
  ShieldCheck,
  Rocket,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WA_NUMBER = "523222151711";
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

const categories = [
  {
    id: "proceso",
    icon: Rocket,
    label: "Proceso y tiempos",
    color: "bg-violet-50 text-violet-600 border-violet-100",
    faqs: [
      {
        q: "¿Cómo inicio un proyecto con HAMCSoft?",
        a: `Es muy sencillo:\n\n1. Contáctanos por WhatsApp, correo o el formulario del sitio.\n2. Agendamos una llamada gratuita para entender tu proyecto sin compromiso.\n3. Te enviamos una propuesta y cotización detallada.\n4. Si aceptas, firmamos el acuerdo y arrancamos con el 50% del pago inicial.\n\nNo necesitas tener todo claro desde el principio — te ayudamos a definir el alcance.`,
      },
      {
        q: "¿Cuánto tarda en entregarse un proyecto?",
        a: `Los tiempos dependen del tipo de proyecto:\n\n• Landing Page: 5–7 días hábiles.\n• Sitio Web Institucional: 2–3 semanas.\n• Ecommerce Básico: 3–4 semanas.\n• Ecommerce Avanzado: 6–8 semanas.\n• Software Personalizado: se estima en la reunión inicial según alcance.\n\nEstos plazos aplican cuando el Cliente entrega el material necesario (textos, imágenes, logos) a tiempo. Retrasos en la entrega de información pueden extender los tiempos.`,
      },
      {
        q: "¿Puedo ver avances durante el desarrollo?",
        a: `Sí, siempre. Trabajamos con entregas por etapas:\n\n• Al inicio: maqueta o prototipo del diseño para tu aprobación antes de programar.\n• A la mitad: versión funcional en entorno de pruebas.\n• Al final: revisión completa antes del lanzamiento.\n\nPuedes solicitar actualizaciones en cualquier momento durante el proceso.`,
      },
      {
        q: "¿Qué pasa si quiero hacer cambios durante el desarrollo?",
        a: `Los cambios menores de contenido o estilo (colores, textos, orden de secciones) están incluidos sin costo adicional durante el desarrollo.\n\nSi el cambio implica nuevas funcionalidades, secciones adicionales o un giro significativo del alcance original, te lo comunicamos antes de proceder y acordamos el costo adicional por escrito.\n\nSiempre trabajamos de forma transparente: ningún cargo sorpresa.`,
      },
    ],
  },
  {
    id: "pagos",
    icon: CreditCard,
    label: "Pagos y precios",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    faqs: [
      {
        q: "¿Cuál es el esquema de pagos?",
        a: `Trabajamos con pagos por etapas para que no tengas que desembolsar todo de golpe:\n\n• 50% al inicio del proyecto (arrancamos con esto).\n• 25% en la etapa de revisión y aprobación del diseño/funcionalidad.\n• 25% restante al momento de la entrega final.\n\nPara proyectos grandes o de largo plazo, podemos acordar un esquema más flexible en la reunión inicial.`,
      },
      {
        q: "¿Qué métodos de pago aceptan?",
        a: `Aceptamos:\n\n• Transferencia bancaria (SPEI) a cuenta BBVA o CLABE interbancaria.\n• Depósito en efectivo en sucursal bancaria.\n• Pago por PayPal (con recargo del 5% por comisión de la plataforma).\n\nAl iniciar el proyecto te enviamos los datos de pago. Siempre emitimos comprobante de cada pago recibido.`,
      },
      {
        q: "¿Los precios del catálogo son fijos?",
        a: `Los precios del catálogo son bases referenciales con el alcance descrito. El precio final puede variar si:\n\n• Necesitas funcionalidades adicionales fuera del paquete.\n• El proyecto requiere integraciones especiales (pasarela de pagos, APIs de terceros, etc.).\n• Hay requerimientos de diseño muy específicos o fuera del estándar.\n\nSiempre tendrás la cotización exacta por escrito antes de comprometerte.`,
      },
      {
        q: "¿Ofrecen descuentos o promociones?",
        a: `Sí. Actualmente nuestros paquetes ya incluyen un descuento del 40% sobre el precio regular.\n\nAdemás, si tienes un proyecto urgente, eres un cliente recurrente, o conoces a alguien que contrate con nosotros, podemos ofrecerte condiciones especiales. Pregúntanos directamente.`,
      },
      {
        q: "¿Se puede pagar en mensualidades?",
        a: `Para proyectos de Software Personalizado o de largo plazo sí manejamos esquemas de pago mensual o por hitos. Para paquetes estándar (Landing, Institucional, Ecommerce) manejamos el esquema 50-25-25 descrito arriba.\n\nSi tienes una situación especial, cuéntanosla y buscamos una solución.`,
      },
    ],
  },
  {
    id: "soporte",
    icon: Wrench,
    label: "Soporte y mantenimiento",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    faqs: [
      {
        q: "¿Qué incluye el soporte post-entrega?",
        a: `Todos los proyectos incluyen soporte técnico gratuito después de la entrega:\n\n• Landing Page: 30 días.\n• Web Institucional: 60 días.\n• Ecommerce Básico: 60 días.\n• Ecommerce Avanzado: 90 días.\n• Software Personalizado: según contrato.\n\nDurante ese período corregimos sin costo cualquier error funcional directamente atribuible a nuestro desarrollo. Los cambios de diseño o nuevas funcionalidades se cotizan aparte.`,
      },
      {
        q: "¿Qué pasa cuando termina el período de soporte?",
        a: `Una vez concluido el soporte incluido, puedes:\n\n• Contratarnos por hora para correcciones o mejoras puntuales.\n• Contratar un plan de mantenimiento mensual que incluye actualizaciones, respaldos y soporte prioritario.\n• Solicitarnos una cotización para nuevas funcionalidades.\n\nNunca te dejaremos sin opciones. Pregúntanos por los planes de mantenimiento disponibles.`,
      },
      {
        q: "¿Con qué rapidez responden a una solicitud de soporte?",
        a: `Durante el período de soporte incluido:\n\n• Errores críticos (sitio caído, funcionalidad bloqueada): respuesta en menos de 4 horas hábiles.\n• Errores menores o preguntas: respuesta en 24 horas hábiles.\n\nNuestro horario de atención es de lunes a viernes de 9:00 a 18:00 hrs (CST). Para urgencias fuera de horario, escríbenos por WhatsApp y hacemos nuestro mejor esfuerzo.`,
      },
      {
        q: "¿Puedo hacer cambios al sitio yo mismo?",
        a: `Depende del tipo de proyecto:\n\n• Sitios con panel administrativo: sí, puedes editar contenido, productos, precios e imágenes desde el panel sin tocar código.\n• Sitios sin panel (Landing básica): los cambios se realizan directamente en el código. Puedes solicitar los archivos y hacer cambios con conocimientos básicos de HTML, o contratarnos para realizarlos.\n\nSi quieres poder editar tu sitio de forma autónoma, dínoslo desde el inicio y lo diseñamos con eso en mente.`,
      },
    ],
  },
  {
    id: "hosting",
    icon: Globe,
    label: "Dominio y hosting",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    faqs: [
      {
        q: "¿Los paquetes incluyen dominio y hosting?",
        a: `No están incluidos por defecto, ya que cada cliente tiene necesidades distintas. Sin embargo:\n\n• Te asesoramos para elegir el proveedor más adecuado según tu proyecto y presupuesto.\n• Podemos gestionar la contratación del dominio y hosting por ti (como parte del servicio de lanzamiento).\n• Si ya tienes dominio o hosting propios, los usamos sin problema.\n\nLos costos típicos de hosting van desde $50–200 MXN/mes dependiendo del tipo de sitio.`,
      },
      {
        q: "¿Qué plataforma de hosting usan?",
        a: `Para sitios web y aplicaciones Next.js usamos principalmente Vercel, que ofrece:\n\n• Despliegue automático y rápido.\n• CDN global para carga rápida desde cualquier país.\n• HTTPS incluido automáticamente.\n• Plan gratuito disponible para proyectos pequeños.\n\nPara proyectos más complejos (bases de datos, APIs pesadas) usamos Railway, DigitalOcean o AWS según el caso.`,
      },
      {
        q: "¿El sitio tendrá HTTPS (candado verde)?",
        a: `Sí, siempre. El certificado SSL/TLS (HTTPS) está incluido en todos los proyectos sin costo adicional. Es parte de nuestros estándares mínimos de seguridad y además mejora el posicionamiento en Google.`,
      },
      {
        q: "¿Pueden migrar mi sitio actual a uno nuevo?",
        a: `Sí. Si tienes un sitio web antiguo que quieres reemplazar, podemos:\n\n• Analizar el contenido existente y migrarlo al nuevo diseño.\n• Redirigir las URLs antiguas para no perder posicionamiento SEO.\n• Gestionar el cambio de DNS para que la transición sea transparente para tus usuarios.\n\nComéntanoslo en la reunión inicial para incluirlo en el alcance.`,
      },
    ],
  },
  {
    id: "seguridad",
    icon: ShieldCheck,
    label: "Seguridad y privacidad",
    color: "bg-red-50 text-red-600 border-red-100",
    faqs: [
      {
        q: "¿Cómo protegen mis datos y los de mis clientes?",
        a: `Aplicamos buenas prácticas de seguridad en todos los proyectos:\n\n• HTTPS obligatorio en todos los sitios.\n• Contraseñas encriptadas (nunca guardamos contraseñas en texto plano).\n• Protección contra inyección SQL y ataques XSS.\n• Variables de entorno para credenciales sensibles (nunca en el código).\n• Acceso restringido al panel administrativo con autenticación segura.\n\nPara proyectos con datos sensibles o de cumplimiento regulatorio, implementamos medidas adicionales según el caso.`,
      },
      {
        q: "¿Hacen respaldos de mi sitio?",
        a: `Sí. Durante el desarrollo y en la entrega final realizamos respaldos completos del código y la base de datos.\n\nEn producción, Vercel mantiene historial de despliegues que permite revertir a versiones anteriores. Para proyectos con base de datos, configuramos respaldos automáticos diarios (incluido en planes de mantenimiento).`,
      },
      {
        q: "¿Quién tiene acceso al código de mi proyecto?",
        a: `Solo el equipo de HAMCSoft asignado a tu proyecto. El código se maneja en repositorios privados de Git con acceso controlado.\n\nAl finalizar el proyecto, te entregamos el código fuente completo y te damos acceso al repositorio. El código es tuyo una vez completado el pago total.`,
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AyudaPage() {
  const [activeCategory, setActiveCategory] = useState("proceso");
  const current = categories.find((c) => c.id === activeCategory)!;

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-950 pt-32 pb-16 relative overflow-hidden">
        <div className="h-px w-full absolute top-0 bg-gradient-to-r from-transparent via-primary-700 to-transparent" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-800 text-primary-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Soporte
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Centro de Ayuda
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios, pagos, tiempos y soporte.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar — categories */}
            <aside className="lg:w-64 shrink-0">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">
                Categorías
              </p>
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = cat.id === activeCategory;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap lg:whitespace-normal w-full text-left ${
                        isActive
                          ? "bg-white shadow-sm border border-primary-200 text-primary-700"
                          : "text-gray-600 hover:bg-white hover:text-gray-900 border border-transparent"
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-primary-600" : "text-gray-400"}`} />
                      {cat.label}
                    </button>
                  );
                })}
              </nav>

              {/* Contact card */}
              <div className="hidden lg:block mt-8 bg-white border border-gray-200 rounded-2xl p-5">
                <MessageSquare className="w-6 h-6 text-primary-600 mb-3" />
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  ¿No encontraste tu respuesta?
                </p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  Escríbenos directamente y respondemos en menos de 24 horas.
                </p>
                <a
                  href={WA_BASE + encodeURIComponent("Hola, tengo una pregunta sobre sus servicios.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary-700 hover:bg-primary-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Escribir por WhatsApp
                </a>
                <a
                  href="mailto:hamcsoftmx@gmail.com"
                  className="mt-2 flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  Enviar correo
                </a>
              </div>
            </aside>

            {/* FAQs */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${current.color}`}>
                  <current.icon className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{current.label}</h2>
                <span className="text-xs text-gray-400 font-medium">
                  {current.faqs.length} preguntas
                </span>
              </div>

              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {current.faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </motion.div>

              {/* Mobile contact */}
              <div className="lg:hidden mt-8 bg-white border border-gray-200 rounded-2xl p-5">
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  ¿No encontraste tu respuesta?
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Escríbenos y respondemos en menos de 24 horas.
                </p>
                <div className="flex gap-2">
                  <a
                    href={WA_BASE + encodeURIComponent("Hola, tengo una pregunta sobre sus servicios.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:hamcsoftmx@gmail.com"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                  >
                    Correo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-primary">
            <div>
              <h3 className="text-xl font-bold text-white mb-1.5">
                ¿Listo para comenzar tu proyecto?
              </h3>
              <p className="text-primary-200 text-sm">
                Agenda una llamada gratuita. Sin compromiso, sin costo.
              </p>
            </div>
            <a
              href={WA_BASE + encodeURIComponent("Hola, buen día. Me gustaría agendar una llamada gratuita para platicar sobre mi proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-primary-800 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
            >
              <Clock className="w-4 h-4" />
              Agendar llamada gratuita →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
