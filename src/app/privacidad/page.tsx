import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — HAMCSoft",
  description:
    "Conoce cómo HAMCSoft recopila, usa y protege tu información personal conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  alternates: { canonical: "https://hamcsoft.com/privacidad" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Responsable del tratamiento de datos",
    content: `HAMCSoft (en adelante "HAMCSoft", "nosotros" o "el Responsable"), con domicilio en Puerto Vallarta, Jalisco, México, es responsable del tratamiento de los datos personales que usted nos proporcione a través del sitio web hamcsoft.com y sus subdominios.

Para cualquier consulta relacionada con este Aviso de Privacidad, puede contactarnos en: hamcsoftmx@gmail.com`,
  },
  {
    title: "2. Datos personales que recopilamos",
    content: `Recopilamos únicamente los datos necesarios para brindarle nuestros servicios:

• Datos de contacto: nombre, dirección de correo electrónico y número de teléfono, cuando usted los proporciona voluntariamente a través de formularios de contacto o comunicaciones por WhatsApp.
• Datos de navegación: dirección IP, tipo de navegador, sistema operativo, páginas visitadas y tiempo de permanencia, recopilados de forma automática mediante Vercel Speed Insights con fines de rendimiento y mejora del sitio.
• Datos de comunicación: mensajes y solicitudes que usted nos envíe por cualquier medio de contacto.

No recopilamos datos sensibles (origen racial, estado de salud, creencias religiosas, datos genéticos, etc.).`,
  },
  {
    title: "3. Finalidades del tratamiento",
    content: `Sus datos personales son utilizados para las siguientes finalidades:

Finalidades primarias (necesarias para la relación contractual):
• Responder a sus solicitudes, cotizaciones y consultas.
• Comunicarnos con usted para la prestación de nuestros servicios de desarrollo de software.
• Gestionar el seguimiento de proyectos contratados.
• Emitir cotizaciones, propuestas y documentos relacionados.

Finalidades secundarias (opcionales, puede negarse sin afectar el servicio):
• Enviarle información sobre nuevos servicios, promociones o contenidos de valor relacionados con nuestro giro.
• Solicitarle retroalimentación sobre los servicios recibidos.

Si no desea que sus datos sean utilizados para finalidades secundarias, puede manifestarlo en cualquier momento escribiéndonos a hamcsoftmx@gmail.com.`,
  },
  {
    title: "4. Fundamento legal",
    content: `El tratamiento de sus datos personales se realiza con fundamento en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, publicados en el Diario Oficial de la Federación.

La base legal que justifica el tratamiento es:
• Su consentimiento libre e informado al contactarnos o contratar nuestros servicios.
• La ejecución de un contrato o relación de servicio entre usted y HAMCSoft.
• El cumplimiento de obligaciones legales aplicables.`,
  },
  {
    title: "5. Transferencia de datos a terceros",
    content: `HAMCSoft no vende, renta ni comparte sus datos personales con terceros para fines propios de estos, salvo en los siguientes casos:

• Proveedores de infraestructura tecnológica: utilizamos Vercel Inc. como plataforma de alojamiento y despliegue del sitio web. Vercel puede procesar datos de navegación conforme a su propia política de privacidad.
• Google LLC: al cargar tipografías mediante Google Fonts, su navegador establece una conexión con servidores de Google, quienes pueden recibir su dirección IP.
• Autoridades competentes: cuando así lo requiera la ley mexicana o una orden judicial.

Todas las transferencias a proveedores externos se realizan bajo acuerdos de confidencialidad o términos de servicio que garantizan un nivel adecuado de protección.`,
  },
  {
    title: "6. Derechos ARCO",
    content: `Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales, conforme a lo establecido en la LFPDPPP.

Para ejercer sus derechos ARCO, envíe una solicitud a hamcsoftmx@gmail.com indicando:
• Su nombre completo y datos de contacto.
• El derecho que desea ejercer (Acceso, Rectificación, Cancelación u Oposición).
• Una descripción clara de los datos sobre los que solicita el ejercicio.
• Copia de un documento que acredite su identidad.

Daremos respuesta a su solicitud en un plazo máximo de 20 días hábiles contados a partir de su recepción.`,
  },
  {
    title: "7. Cookies y tecnologías de rastreo",
    content: `Nuestro sitio web utiliza cookies y tecnologías similares. Para mayor información sobre el uso específico de cookies, consulte nuestra Política de Cookies en hamcsoft.com/cookies.`,
  },
  {
    title: "8. Seguridad de los datos",
    content: `HAMCSoft implementa medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra acceso no autorizado, pérdida, alteración o divulgación. Entre las medidas aplicadas se encuentran:

• Comunicación cifrada mediante protocolo HTTPS (TLS).
• Acceso restringido a los datos únicamente al personal autorizado.
• Revisión periódica de nuestras prácticas de seguridad.

No obstante, ningún sistema de transmisión de datos por internet es 100% seguro. En caso de incidente de seguridad que afecte sus derechos, le notificaremos en la brevedad posible.`,
  },
  {
    title: "9. Retención de datos",
    content: `Conservamos sus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades descritas en este aviso, o por el tiempo que la ley aplicable lo exija. Una vez concluida la relación de servicio y cumplidos los plazos legales de conservación, los datos serán eliminados o anonimizados de forma segura.`,
  },
  {
    title: "10. Modificaciones al Aviso de Privacidad",
    content: `HAMCSoft se reserva el derecho de modificar este Aviso de Privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página con la fecha de actualización correspondiente. Le recomendamos revisarlo periódicamente.

El uso continuo de nuestros servicios después de la publicación de cambios constituye su aceptación de dichos cambios.`,
  },
  {
    title: "11. Autoridad competente",
    content: `Si considera que el tratamiento de sus datos no ha sido atendido satisfactoriamente, tiene derecho a acudir ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) en www.inai.org.mx.`,
  },
];

export default function PrivacidadPage() {
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
            Aviso de Privacidad
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
          </p>
          <p className="mt-4 text-xs text-gray-600">
            Última actualización: 21 de mayo de 2025 · HAMCSoft · Puerto Vallarta, Jalisco, México
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
            <h3 className="font-bold text-gray-900 mb-2">¿Tienes preguntas sobre tu privacidad?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Escríbenos directamente y respondemos en menos de 24 horas.
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
