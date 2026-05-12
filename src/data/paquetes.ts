import { Check, X } from "lucide-react";

export interface PaqueteFeature {
  label: string;
  included: boolean;
  note?: string;
}

export interface Paquete {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  discountLabel?: string;
  priceNote: string;
  badge?: string;
  badgeColor?: string;
  highlight: boolean;
  idealFor: string;
  features: PaqueteFeature[];
  cta: string;
  gradient: string;
  accentColor: string;
}

export const paquetes: Paquete[] = [
  {
    id: "landing",
    name: "Landing Page",
    subtitle: "Presencia rápida y efectiva",
    price: "$2,999",
    originalPrice: "$4,999",
    discountLabel: "40% OFF",
    priceNote: "MXN · Pago único",
    highlight: false,
    idealFor: "Negocios que necesitan presencia digital inmediata con alta conversión.",
    badge: undefined,
    gradient: "from-slate-50 to-gray-50",
    accentColor: "text-gray-700",
    cta: "Solicitar este paquete",
    features: [
      { label: "Diseño responsive premium", included: true },
      { label: "1 sección principal con CTA", included: true },
      { label: "Formulario de contacto", included: true },
      { label: "Integración WhatsApp", included: true },
      { label: "Optimización móvil", included: true },
      { label: "Dominio y hosting (opcional)", included: true, note: "Costo adicional" },
      { label: "Entrega en 5–7 días", included: true },
      { label: "Panel administrativo", included: false },
      { label: "Ecommerce", included: false },
      { label: "SEO avanzado", included: false },
    ],
  },
  {
    id: "institucional",
    name: "Web Institucional",
    subtitle: "Presencia corporativa completa",
    price: "$5,999",
    originalPrice: "$9,999",
    discountLabel: "40% OFF",
    priceNote: "MXN · Pago único",
    highlight: false,
    idealFor: "Empresas y negocios establecidos que requieren presencia corporativa.",
    gradient: "from-violet-50 to-purple-50",
    accentColor: "text-primary-700",
    cta: "Solicitar este paquete",
    features: [
      { label: "Hasta 6 secciones completas", included: true },
      { label: "Diseño profesional personalizado", included: true },
      { label: "Formularios de contacto", included: true },
      { label: "SEO básico optimizado", included: true },
      { label: "Panel básico editable", included: true },
      { label: "Integración WhatsApp", included: true },
      { label: "Optimización de velocidad", included: true },
      { label: "Ecommerce", included: false },
      { label: "Pasarela de pago", included: false },
      { label: "Inventario", included: false },
    ],
  },
  {
    id: "ecommerce-basico",
    name: "Ecommerce Básico",
    subtitle: "Vende sin pasarela de pago",
    price: "$8,999",
    originalPrice: "$14,999",
    discountLabel: "40% OFF",
    priceNote: "MXN · Pago único",
    highlight: false,
    idealFor: "Negocios que quieren vender en línea sin complicaciones de pago digital.",
    badge: "Más vendido",
    badgeColor: "bg-emerald-100 text-emerald-700",
    gradient: "from-emerald-50 to-teal-50",
    accentColor: "text-emerald-700",
    cta: "Solicitar este paquete",
    features: [
      { label: "Catálogo de productos", included: true },
      { label: "Carrito de compra", included: true },
      { label: "Pedido vía WhatsApp", included: true },
      { label: "Panel básico de gestión", included: true },
      { label: "Diseño responsive", included: true },
      { label: "Categorías y filtros", included: true },
      { label: "Galería de productos", included: true },
      { label: "Pasarela de pago", included: false },
      { label: "Gestión de usuarios", included: false },
      { label: "Dashboard avanzado", included: false },
    ],
  },
  {
    id: "ecommerce-avanzado",
    name: "Ecommerce Avanzado",
    subtitle: "Tienda online completa",
    price: "$17,999",
    originalPrice: "$29,999",
    discountLabel: "40% OFF",
    priceNote: "MXN · Pago único",
    highlight: true,
    idealFor: "Tiendas online que necesitan gestión completa y pagos en línea.",
    badge: "Recomendado",
    badgeColor: "bg-primary-100 text-primary-700",
    gradient: "from-primary-800 to-primary-900",
    accentColor: "text-white",
    cta: "Solicitar este paquete",
    features: [
      { label: "Pasarela de pago integrada", included: true },
      { label: "Gestión de usuarios y roles", included: true },
      { label: "Inventario en tiempo real", included: true },
      { label: "Panel administrativo completo", included: true },
      { label: "Dashboard con métricas", included: true },
      { label: "Órdenes y seguimiento", included: true },
      { label: "Correos automáticos", included: true },
      { label: "Seguridad avanzada", included: true },
      { label: "Gestión avanzada", included: true },
      { label: "SEO optimizado", included: true },
    ],
  },
  {
    id: "software-personalizado",
    name: "Software Personalizado",
    subtitle: "Solución empresarial a medida",
    price: "Cotización",
    priceNote: "personalizada",
    highlight: false,
    idealFor: "Empresas con necesidades específicas que requieren soluciones únicas.",
    badge: "Empresarial",
    badgeColor: "bg-amber-100 text-amber-700",
    gradient: "from-amber-50 to-orange-50",
    accentColor: "text-amber-700",
    cta: "Solicitar cotización",
    features: [
      { label: "Análisis completo del proyecto", included: true },
      { label: "Arquitectura del sistema", included: true },
      { label: "Desarrollo modular", included: true },
      { label: "Escalabilidad garantizada", included: true },
      { label: "Seguridad enterprise", included: true },
      { label: "APIs documentadas", included: true },
      { label: "Base de datos optimizada", included: true },
      { label: "Panel administrativo", included: true },
      { label: "Soporte y mantenimiento", included: true },
      { label: "Capacitación al equipo", included: true },
    ],
  },
];

export interface ComparativaRow {
  feature: string;
  landing: string | boolean;
  institucional: string | boolean;
  ecommerceBasico: string | boolean;
  ecommerceAvanzado: string | boolean;
  softwarePersonalizado: string | boolean;
}

export const comparativaData: ComparativaRow[] = [
  {
    feature: "Páginas / Secciones",
    landing: "1",
    institucional: "Hasta 6",
    ecommerceBasico: "Ilimitadas",
    ecommerceAvanzado: "Ilimitadas",
    softwarePersonalizado: "Ilimitadas",
  },
  {
    feature: "Panel administrativo",
    landing: false,
    institucional: "Básico",
    ecommerceBasico: "Básico",
    ecommerceAvanzado: "Completo",
    softwarePersonalizado: "Enterprise",
  },
  {
    feature: "Ecommerce",
    landing: false,
    institucional: false,
    ecommerceBasico: true,
    ecommerceAvanzado: true,
    softwarePersonalizado: true,
  },
  {
    feature: "Pasarela de pago",
    landing: false,
    institucional: false,
    ecommerceBasico: false,
    ecommerceAvanzado: true,
    softwarePersonalizado: true,
  },
  {
    feature: "SEO optimizado",
    landing: "Básico",
    institucional: "Básico",
    ecommerceBasico: "Básico",
    ecommerceAvanzado: "Avanzado",
    softwarePersonalizado: "Avanzado",
  },
  {
    feature: "Soporte incluido",
    landing: "30 días",
    institucional: "60 días",
    ecommerceBasico: "60 días",
    ecommerceAvanzado: "90 días",
    softwarePersonalizado: "Personalizado",
  },
  {
    feature: "Personalización",
    landing: "Media",
    institucional: "Alta",
    ecommerceBasico: "Alta",
    ecommerceAvanzado: "Muy alta",
    softwarePersonalizado: "Total",
  },
  {
    feature: "Escalabilidad",
    landing: false,
    institucional: "Media",
    ecommerceBasico: "Media",
    ecommerceAvanzado: "Alta",
    softwarePersonalizado: "Enterprise",
  },
];

export const procesoData = [
  {
    step: 1,
    title: "Reunión inicial",
    description:
      "Escuchamos tus necesidades, objetivos y visión del proyecto sin costo ni compromiso.",
    icon: "💬",
    duration: "1–2 días",
  },
  {
    step: 2,
    title: "Análisis del proyecto",
    description:
      "Evaluamos requerimientos técnicos, funcionales y de negocio para definir el alcance.",
    icon: "🔍",
    duration: "2–3 días",
  },
  {
    step: 3,
    title: "Diseño UI/UX",
    description:
      "Creamos prototipos y maquetas del diseño para tu aprobación antes de desarrollar.",
    icon: "🎨",
    duration: "3–5 días",
  },
  {
    step: 4,
    title: "Desarrollo",
    description:
      "Construimos tu proyecto con código limpio, arquitectura sólida y buenas prácticas.",
    icon: "⚡",
    duration: "Variable",
  },
  {
    step: 5,
    title: "Revisión y QA",
    description:
      "Pruebas exhaustivas de funcionalidad, rendimiento, seguridad y compatibilidad.",
    icon: "✅",
    duration: "2–3 días",
  },
  {
    step: 6,
    title: "Lanzamiento",
    description:
      "Desplegamos tu proyecto en producción con configuración de dominio y hosting optimizado.",
    icon: "🚀",
    duration: "1 día",
  },
  {
    step: 7,
    title: "Soporte activo",
    description:
      "Acompañamiento post-lanzamiento para resolver dudas, ajustes y actualizaciones.",
    icon: "🛡️",
    duration: "Continuo",
  },
];

export const beneficiosData = [
  {
    icon: "🎨",
    title: "Diseño moderno",
    description: "Interfaces limpias, elegantes y alineadas con las tendencias actuales del diseño digital.",
  },
  {
    icon: "⚡",
    title: "Entrega rápida",
    description: "Metodología ágil que nos permite entregar proyectos de calidad en los tiempos acordados.",
  },
  {
    icon: "📈",
    title: "Escalabilidad",
    description: "Arquitecturas preparadas para crecer. Tu sistema evoluciona con tu negocio sin rehacer todo.",
  },
  {
    icon: "🧹",
    title: "Código limpio",
    description: "Desarrollamos con estándares de industria: documentado, mantenible y transferible.",
  },
  {
    icon: "🛡️",
    title: "Soporte real",
    description: "Soporte técnico humano, rápido y efectivo. Respondemos cuando más lo necesitas.",
  },
  {
    icon: "🔍",
    title: "SEO optimizado",
    description: "Cada proyecto se construye pensando en visibilidad orgánica desde el primer día.",
  },
  {
    icon: "🔒",
    title: "Seguridad",
    description: "Implementamos HTTPS, autenticación segura, protección de datos y mejores prácticas.",
  },
  {
    icon: "📱",
    title: "Mobile first",
    description: "Diseñamos primero para móvil. Tus usuarios tendrán una experiencia perfecta en cualquier dispositivo.",
  },
];

export const faqData = [
  {
    question: "¿Cuánto tarda en completarse un proyecto?",
    answer:
      "Depende del tipo de proyecto. Una Landing Page puede estar lista en 5–7 días. Un sitio institucional toma 2–3 semanas. Un ecommerce básico de 3–4 semanas y uno avanzado de 6–8 semanas. Proyectos de software personalizado se estiman en la reunión inicial.",
  },
  {
    question: "¿Los paquetes incluyen dominio y hosting?",
    answer:
      "Los paquetes no incluyen dominio y hosting por defecto, ya que existen múltiples opciones según tus necesidades. Sin embargo, te asesoramos para elegir la mejor opción y podemos gestionar la contratación como parte del servicio.",
  },
  {
    question: "¿Se puede pagar el proyecto por etapas?",
    answer:
      "Sí. Trabajamos con un esquema de pagos por etapas: 50% al inicio del proyecto, 25% en la etapa de revisión y 25% restante al momento de la entrega final. Para proyectos grandes manejamos esquemas más flexibles.",
  },
  {
    question: "¿Ofrecen soporte después de la entrega?",
    answer:
      "Todos los paquetes incluyen soporte post-lanzamiento. La duración varía según el paquete (30 a 90 días). Además ofrecemos planes de mantenimiento mensual para quienes requieren soporte continuo.",
  },
  {
    question: "¿Los sistemas son escalables a futuro?",
    answer:
      "Absolutamente. Diseñamos cada proyecto con arquitecturas modulares y escalables. Puedes agregar funciones, secciones o módulos completos sin necesidad de rehacer el sistema desde cero.",
  },
  {
    question: "¿Puedo solicitar funciones personalizadas fuera del paquete?",
    answer:
      "Sí, todos los paquetes son base. Puedes solicitar funciones adicionales que cotizamos por separado. Al final siempre trabajamos para que el sistema resuelva exactamente lo que tu negocio necesita.",
  },
];

export const tecnologiasData = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Base de datos" },
  { name: "Prisma ORM", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Vercel", category: "Deploy" },
  { name: "Stripe", category: "Pagos" },
  { name: "WhatsApp API", category: "Integración" },
  { name: "n8n", category: "Automatización" },
];
