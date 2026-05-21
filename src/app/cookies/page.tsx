import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies — HAMCSoft",
  description:
    "Conoce qué cookies utiliza HAMCSoft, para qué sirven y cómo puedes gestionarlas o desactivarlas en tu navegador.",
  alternates: { canonical: "https://hamcsoft.com/cookies" },
  robots: { index: true, follow: true },
};

const cookieTable = [
  {
    name: "_vercel_insights",
    provider: "Vercel Inc.",
    purpose: "Medir el rendimiento del sitio web (Core Web Vitals, velocidad de carga). No identifica usuarios.",
    type: "Analítica",
    duration: "Sesión / 30 días",
  },
  {
    name: "Conexión a fonts.googleapis.com",
    provider: "Google LLC",
    purpose: "Cargar la tipografía Inter. Google recibe tu dirección IP al establecer la conexión.",
    type: "Técnica / Terceros",
    duration: "Caché del navegador",
  },
  {
    name: "Cookies de sesión Next.js",
    provider: "HAMCSoft (Vercel)",
    purpose: "Necesarias para el funcionamiento correcto del sitio (navegación, estado de la aplicación).",
    type: "Técnica / Esencial",
    duration: "Sesión",
  },
];

const sections = [
  {
    title: "1. ¿Qué son las cookies?",
    content: `Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (computadora, smartphone o tablet) cuando los visitas. Sirven para que el sitio recuerde información sobre tu visita, como tus preferencias de idioma o configuración, lo que facilita tu próxima visita y hace que el sitio resulte más útil.

Además de las cookies en sentido estricto, tecnologías similares como el almacenamiento local (localStorage) o el almacenamiento de sesión (sessionStorage) pueden utilizarse con fines equivalentes.`,
  },
  {
    title: "2. ¿Qué cookies usa HAMCSoft?",
    content: `Nuestro sitio web utiliza un número reducido de cookies, todas con propósitos técnicos o analíticos. No utilizamos cookies publicitarias, de seguimiento entre sitios ni de perfilado de usuarios.

A continuación encontrarás el detalle de cada cookie.`,
  },
  {
    title: "3. Cookies de rendimiento — Vercel Speed Insights",
    content: `Utilizamos Vercel Speed Insights, una herramienta desarrollada por Vercel Inc., para medir y mejorar el rendimiento de nuestro sitio web.

¿Qué mide?
• Velocidad de carga de las páginas (LCP, FID, CLS — Core Web Vitals de Google).
• Tiempo hasta el primer byte (TTFB).
• Interactividad y estabilidad visual del sitio.

¿Recopila datos personales?
No. Los datos recopilados son completamente anónimos y no permiten identificar a ningún usuario en particular. Vercel no comparte esta información con terceros ni la utiliza para publicidad.

¿Por qué lo usamos?
Nos permite identificar y corregir problemas de rendimiento para ofrecerte una experiencia más rápida y estable.

Puedes consultar la política de privacidad de Vercel en: vercel.com/legal/privacy-policy`,
  },
  {
    title: "4. Cookies de terceros — Google Fonts",
    content: `Nuestro sitio carga la tipografía Inter desde los servidores de Google Fonts (fonts.googleapis.com). Esta conexión es técnicamente necesaria para mostrar el texto del sitio con la fuente correcta.

¿Qué ocurre exactamente?
Al visitar cualquier página de hamcsoft.com, tu navegador realiza una solicitud a los servidores de Google para descargar la fuente. En esa solicitud, Google recibe automáticamente tu dirección IP y ciertos encabezados del navegador (User-Agent, referrer).

¿Google guarda cookies por esto?
Google puede guardar la fuente en caché en tu navegador y establecer algunas cookies técnicas. Sin embargo, Google declara que los datos de Google Fonts no se utilizan para identificar usuarios ni para publicidad.

Puedes consultar la política de Google Fonts en: developers.google.com/fonts/faq/privacy

Alternativa: Si prefieres que tu navegador no se conecte a Google, puedes bloquear las solicitudes a fonts.googleapis.com desde la configuración de privacidad de tu navegador o mediante extensiones de bloqueo de contenido.`,
  },
  {
    title: "5. Cookies técnicas esenciales",
    content: `Nuestro sitio está construido con Next.js, un framework de React. Durante la navegación, el framework puede utilizar almacenamiento de sesión para mantener el estado de la aplicación (por ejemplo, para la navegación entre páginas). Estas no son cookies persistentes y se eliminan automáticamente al cerrar el navegador.

Estas cookies son esenciales para el funcionamiento básico del sitio y no pueden desactivarse sin afectar la experiencia de navegación.`,
  },
  {
    title: "6. Cookies que NO utilizamos",
    content: `HAMCSoft no utiliza:

• Cookies publicitarias o de retargeting (como las de Facebook Pixel, Google Ads, etc.).
• Cookies de seguimiento entre sitios (cross-site tracking).
• Cookies de redes sociales (excepto si el usuario hace clic en un enlace externo a una red social).
• Tecnologías de fingerprinting o perfilado de usuarios.
• Google Analytics u otras herramientas de analítica de audiencia basadas en cookies.`,
  },
  {
    title: "7. ¿Cómo gestionar o eliminar las cookies?",
    content: `Puedes controlar y gestionar las cookies desde la configuración de tu navegador. A continuación encontrarás enlaces directos a las instrucciones de los navegadores más comunes:

• Google Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.
• Mozilla Firefox: Opciones → Privacidad y seguridad → Cookies y datos del sitio.
• Safari (Mac/iOS): Preferencias → Privacidad → Gestionar datos de sitios web.
• Microsoft Edge: Configuración → Privacidad, búsqueda y servicios → Cookies.

Ten en cuenta que desactivar ciertas cookies puede afectar el funcionamiento de algunas partes del sitio.`,
  },
  {
    title: "8. Cambios a esta Política de Cookies",
    content: `Podemos actualizar esta Política de Cookies cuando incorporemos nuevas tecnologías o herramientas a nuestro sitio. La fecha de última actualización siempre estará visible al inicio de esta página. Te recomendamos revisarla periódicamente.`,
  },
  {
    title: "9. Contacto",
    content: `Si tienes dudas sobre el uso de cookies en nuestro sitio, puedes escribirnos a:

Correo electrónico: hamcsoftmx@gmail.com
Sitio web: hamcsoft.com`,
  },
];

export default function CookiesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-950 pt-32 pb-16 relative overflow-hidden">
        <div className="h-px w-full absolute top-0 bg-gradient-to-r from-transparent via-primary-700 to-transparent" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-800 text-primary-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Política de Cookies
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Qué cookies usamos, para qué sirven y cómo puedes gestionarlas.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            Última actualización: 21 de mayo de 2025 · HAMCSoft · Puerto Vallarta, Jalisco, México
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Cookie table */}
          <div className="mb-12 overflow-x-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Resumen de cookies utilizadas
            </h2>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200 text-xs uppercase tracking-wide">Cookie / Tecnología</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200 text-xs uppercase tracking-wide">Proveedor</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200 text-xs uppercase tracking-wide">Finalidad</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200 text-xs uppercase tracking-wide">Tipo</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200 text-xs uppercase tracking-wide">Duración</th>
                </tr>
              </thead>
              <tbody>
                {cookieTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 border border-gray-200 font-mono text-xs text-gray-800">{row.name}</td>
                    <td className="px-4 py-3 border border-gray-200 text-gray-600">{row.provider}</td>
                    <td className="px-4 py-3 border border-gray-200 text-gray-600">{row.purpose}</td>
                    <td className="px-4 py-3 border border-gray-200">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${
                        row.type.includes("Esencial") ? "bg-green-100 text-green-700" :
                        row.type.includes("Analítica") ? "bg-blue-100 text-blue-700" :
                        "bg-orange-100 text-orange-700"
                      }`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 border border-gray-200 text-gray-600 text-xs">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sections */}
          <div className="prose prose-gray max-w-none">
            {sections.map((section) => (
              <div key={section.title} className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-12 bg-primary-50 border border-primary-100 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">¿Preguntas sobre cookies?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Si tienes dudas sobre cómo tratamos tus datos de navegación, escríbenos.
            </p>
            <a
              href="mailto:hamcsoftmx@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
            >
              hamcsoftmx@gmail.com →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
