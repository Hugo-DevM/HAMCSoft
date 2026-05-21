import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Licencias — HAMCSoft",
  description:
    "Información sobre las licencias de software de código abierto utilizadas en el desarrollo del sitio web y los productos de HAMCSoft.",
  alternates: { canonical: "https://hamcsoft.com/licencias" },
  robots: { index: true, follow: true },
};

const openSourceLicenses = [
  {
    name: "Next.js",
    version: "15.x",
    author: "Vercel, Inc.",
    license: "MIT",
    url: "https://github.com/vercel/next.js/blob/canary/LICENSE",
    description: "Framework de React para aplicaciones web con renderizado del lado del servidor.",
  },
  {
    name: "React",
    version: "19.x",
    author: "Meta Platforms, Inc.",
    license: "MIT",
    url: "https://github.com/facebook/react/blob/main/LICENSE",
    description: "Librería de JavaScript para construir interfaces de usuario.",
  },
  {
    name: "TypeScript",
    version: "5.x",
    author: "Microsoft Corporation",
    license: "Apache 2.0",
    url: "https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt",
    description: "Superconjunto tipado de JavaScript que compila a JavaScript plano.",
  },
  {
    name: "Tailwind CSS",
    version: "3.x",
    author: "Tailwind Labs, Inc.",
    license: "MIT",
    url: "https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE",
    description: "Framework CSS de utilidades para construir diseños personalizados.",
  },
  {
    name: "Framer Motion",
    version: "12.x",
    author: "Framer B.V.",
    license: "MIT",
    url: "https://github.com/framer/motion/blob/main/LICENSE.md",
    description: "Librería de animaciones y gestos para React.",
  },
  {
    name: "Lucide React",
    version: "0.x",
    author: "Lucide Contributors",
    license: "ISC",
    url: "https://github.com/lucide-icons/lucide/blob/main/LICENSE",
    description: "Librería de íconos SVG de código abierto para React.",
  },
  {
    name: "Vercel Speed Insights",
    version: "1.x",
    author: "Vercel, Inc.",
    license: "Apache 2.0",
    url: "https://github.com/vercel/speed-insights/blob/main/LICENSE",
    description: "Herramienta para medir el rendimiento web (Core Web Vitals).",
  },
  {
    name: "Inter (Tipografía)",
    version: "—",
    author: "Rasmus Andersson",
    license: "SIL Open Font License 1.1",
    url: "https://github.com/rsms/inter/blob/master/LICENSE.txt",
    description: "Tipografía sans-serif diseñada para pantallas digitales.",
  },
];

const licenseTexts: Record<string, string> = {
  MIT: `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
  ISC: `Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`,
};

export default function LicenciasPage() {
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
            Licencias
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Atribuciones y licencias del software de código abierto que hace posible este sitio.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            Última actualización: 21 de mayo de 2025 · HAMCSoft · Puerto Vallarta, Jalisco, México
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Intro */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Software de código abierto
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              El sitio web de HAMCSoft y los productos que desarrollamos se construyen sobre tecnologías de código abierto creadas y mantenidas por comunidades de desarrolladores de todo el mundo. Estamos profundamente agradecidos con cada proyecto y reconocemos su contribución.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              A continuación se listan las principales dependencias de código abierto utilizadas, junto con sus respectivas licencias.
            </p>
          </div>

          {/* License cards */}
          <div className="space-y-4 mb-12">
            {openSourceLicenses.map((lib) => (
              <div
                key={lib.name}
                className="border border-gray-200 rounded-2xl p-6 hover:border-primary-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-bold text-gray-900">{lib.name}</h3>
                      <span className="text-xs text-gray-400 font-mono">v{lib.version}</span>
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${
                        lib.license === "MIT" ? "bg-blue-100 text-blue-700" :
                        lib.license === "ISC" ? "bg-purple-100 text-purple-700" :
                        lib.license.includes("Apache") ? "bg-orange-100 text-orange-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {lib.license}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">Autor: {lib.author}</p>
                    <p className="text-sm text-gray-600">{lib.description}</p>
                  </div>
                  <a
                    href={lib.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs text-primary-600 hover:text-primary-800 font-medium underline underline-offset-2 transition-colors"
                  >
                    Ver licencia completa ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* MIT License text */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Texto de la Licencia MIT
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              La Licencia MIT es utilizada por Next.js, React, Tailwind CSS y Framer Motion. A continuación se incluye el texto estándar de esta licencia (en inglés, idioma original):
            </p>
            <pre className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-xs text-gray-600 leading-relaxed whitespace-pre-wrap font-mono">
              {licenseTexts.MIT}
            </pre>
          </div>

          {/* ISC License text */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Texto de la Licencia ISC
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              La Licencia ISC es utilizada por Lucide React:
            </p>
            <pre className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-xs text-gray-600 leading-relaxed whitespace-pre-wrap font-mono">
              {licenseTexts.ISC}
            </pre>
          </div>

          {/* HAMCSoft own license */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Contenido propietario de HAMCSoft
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Todo el contenido original del sitio web de HAMCSoft —incluyendo textos, diseños, logotipos, imágenes, código propietario y elementos gráficos— es propiedad exclusiva de HAMCSoft y está protegido por la Ley Federal del Derecho de Autor de los Estados Unidos Mexicanos y los tratados internacionales aplicables.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              Queda prohibida su reproducción, distribución o uso sin autorización previa y por escrito de HAMCSoft. Para solicitar permisos de uso, escríbenos a{" "}
              <a href="mailto:hamcsoftmx@gmail.com" className="text-primary-600 hover:text-primary-800 underline underline-offset-2">
                hamcsoftmx@gmail.com
              </a>.
            </p>
          </div>

          {/* Contact box */}
          <div className="mt-12 bg-primary-50 border border-primary-100 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">¿Encontraste un problema con alguna licencia?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Si crees que omitimos alguna atribución o hay algún error, escríbenos y lo corregimos de inmediato.
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
