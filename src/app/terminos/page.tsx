import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos de Uso — HAMCSoft",
  description:
    "Lee los Términos de Uso de HAMCSoft. Condiciones que rigen el uso del sitio web y la contratación de nuestros servicios de desarrollo de software.",
  alternates: { canonical: "https://hamcsoft.com/terminos" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Aceptación de los términos",
    content: `Al acceder y utilizar el sitio web hamcsoft.com (en adelante "el Sitio"), así como al contratar cualquiera de nuestros servicios, usted (en adelante "el Usuario" o "el Cliente") acepta quedar vinculado por los presentes Términos de Uso y nuestra Política de Privacidad.

Si no está de acuerdo con alguno de estos términos, le pedimos que se abstenga de utilizar el Sitio o contratar nuestros servicios. HAMCSoft se reserva el derecho de modificar estos términos en cualquier momento, siendo efectivos desde su publicación en esta página.`,
  },
  {
    title: "2. Descripción del servicio",
    content: `HAMCSoft es una empresa de desarrollo de software con sede en Puerto Vallarta, Jalisco, México, que ofrece servicios de:

• Desarrollo de sitios web (Landing Pages, sitios institucionales, ecommerce).
• Desarrollo de software a medida y sistemas empresariales.
• Sistemas de punto de venta (POS) y fidelización.
• Automatización de procesos mediante herramientas digitales.
• Consultoría y asesoría tecnológica.

Toda la información disponible en el Sitio es de carácter informativo y no constituye una oferta contractual hasta que sea formalizada mediante cotización escrita y/o contrato entre las partes.`,
  },
  {
    title: "3. Uso permitido del sitio",
    content: `El Usuario se compromete a utilizar el Sitio de forma lícita, ética y conforme a los presentes Términos. Queda expresamente prohibido:

• Reproducir, distribuir o modificar contenido del Sitio sin autorización previa y por escrito de HAMCSoft.
• Intentar acceder de forma no autorizada a sistemas, servidores o bases de datos relacionados con el Sitio.
• Realizar actividades que puedan dañar, sobrecargar o deteriorar el funcionamiento del Sitio.
• Utilizar el Sitio para difundir spam, malware o cualquier contenido ilícito.
• Suplantar la identidad de HAMCSoft o de cualquier tercero.
• Utilizar robots, scrapers u otras herramientas automatizadas sin autorización expresa.`,
  },
  {
    title: "4. Propiedad intelectual",
    content: `Todo el contenido del Sitio —incluyendo, sin limitarse a, textos, logotipos, imágenes, diseños, código fuente, íconos y elementos gráficos— es propiedad de HAMCSoft o de sus respectivos titulares y está protegido por las leyes de propiedad intelectual aplicables en México.

Respecto a los proyectos desarrollados para clientes:
• El código fuente, diseños y entregables desarrollados específicamente para el Cliente pasan a ser propiedad del Cliente una vez completado el pago íntegro del servicio, salvo pacto en contrario por escrito.
• HAMCSoft conserva el derecho de mencionar el proyecto como referencia en su portafolio, a menos que el Cliente indique lo contrario de forma expresa.
• Las herramientas, librerías y componentes de terceros utilizados en el desarrollo se rigen por sus respectivas licencias de código abierto.`,
  },
  {
    title: "5. Proceso de contratación y pagos",
    content: `Los servicios de HAMCSoft se contratan mediante el siguiente proceso:

1. Solicitud de cotización por parte del Cliente (vía formulario, WhatsApp o correo electrónico).
2. Análisis de requerimientos y envío de propuesta económica detallada.
3. Aceptación del Cliente y firma de contrato (cuando aplique).
4. Pago inicial del 50% para dar inicio al proyecto.
5. Entrega de avances conforme al cronograma acordado.
6. Pago del 25% en la etapa de revisión y aprobación.
7. Entrega final y pago del 25% restante.

HAMCSoft se reserva el derecho de ajustar el alcance o costo si los requerimientos del Cliente se modifican sustancialmente durante el desarrollo. Todo cambio de alcance será comunicado y acordado por escrito antes de proceder.`,
  },
  {
    title: "6. Plazos de entrega",
    content: `Los plazos de entrega son estimados y se establecen en la cotización o contrato correspondiente. HAMCSoft se compromete a cumplir los plazos acordados; sin embargo, los siguientes factores pueden justificar una extensión del plazo:

• Retrasos en la entrega de información, recursos o retroalimentación por parte del Cliente.
• Cambios de alcance solicitados por el Cliente durante el desarrollo.
• Circunstancias de fuerza mayor o caso fortuito.

En caso de retraso atribuible a HAMCSoft y no justificado, el Cliente podrá solicitar una compensación acordada por ambas partes.`,
  },
  {
    title: "7. Garantías y soporte post-entrega",
    content: `HAMCSoft ofrece un período de soporte post-entrega conforme al paquete contratado:

• Landing Page: 30 días de soporte técnico.
• Web Institucional: 60 días de soporte técnico.
• Ecommerce Básico: 60 días de soporte técnico.
• Ecommerce Avanzado: 90 días de soporte técnico.
• Software Personalizado: según contrato específico.

Durante el período de soporte, HAMCSoft corregirá sin costo adicional los errores funcionales directamente atribuibles al desarrollo. Quedan excluidos del soporte gratuito: cambios de diseño, nuevas funcionalidades, errores por modificaciones realizadas por el Cliente o terceros, y problemas de hosting o dominio no gestionados por HAMCSoft.`,
  },
  {
    title: "8. Limitación de responsabilidad",
    content: `HAMCSoft no será responsable por:

• Daños indirectos, lucro cesante o pérdida de datos ocasionados por el uso o imposibilidad de uso del software entregado, salvo dolo o negligencia grave comprobada.
• El contenido publicado por el Cliente en los sitios o sistemas desarrollados.
• Interrupciones del servicio causadas por terceros (proveedores de hosting, dominio, pasarelas de pago, etc.).
• Cambios en algoritmos de motores de búsqueda que afecten el posicionamiento SEO.
• Problemas derivados del uso de software de terceros integrado en el proyecto.

La responsabilidad total de HAMCSoft ante el Cliente, en cualquier circunstancia, no excederá el monto total pagado por el proyecto en cuestión.`,
  },
  {
    title: "9. Confidencialidad",
    content: `Ambas partes se comprometen a mantener confidencial toda información sensible intercambiada durante la relación de servicio, incluyendo datos de negocio, estrategias, precios internos, credenciales de acceso y cualquier información marcada como confidencial.

Esta obligación de confidencialidad permanece vigente durante la ejecución del proyecto y por un período de 2 (dos) años posteriores a la terminación del mismo.`,
  },
  {
    title: "10. Rescisión del contrato",
    content: `Cualquiera de las partes puede rescindir el contrato de servicios en los siguientes supuestos:

• Incumplimiento grave de las obligaciones contractuales por parte de la otra parte, previa notificación escrita con 15 días de anticipación para subsanar el incumplimiento.
• Mutuo acuerdo entre las partes.
• Fuerza mayor que imposibilite la continuación del proyecto por más de 30 días.

En caso de rescisión anticipada por parte del Cliente sin causa imputable a HAMCSoft, los pagos realizados no serán reembolsables y podrá exigirse el pago proporcional al trabajo realizado hasta la fecha.`,
  },
  {
    title: "11. Ley aplicable y jurisdicción",
    content: `Los presentes Términos de Uso se rigen por las leyes de los Estados Unidos Mexicanos. Para la resolución de cualquier controversia derivada de estos términos, las partes se someten a la jurisdicción de los tribunales competentes de Puerto Vallarta, Jalisco, México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.`,
  },
  {
    title: "12. Contacto",
    content: `Para cualquier consulta relacionada con estos Términos de Uso, puede contactarnos en:

Correo electrónico: hamcsoftmx@gmail.com
Ubicación: Puerto Vallarta, Jalisco, México
Sitio web: hamcsoft.com`,
  },
];

export default function TerminosPage() {
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
            Términos de Uso
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Condiciones que rigen el uso del sitio web hamcsoft.com y la contratación de nuestros servicios.
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
            <h3 className="font-bold text-gray-900 mb-2">¿Tienes preguntas sobre nuestros términos?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Contáctanos y con gusto te aclaramos cualquier duda antes de contratar.
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
