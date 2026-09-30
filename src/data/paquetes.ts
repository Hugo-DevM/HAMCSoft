import {
  Check,
  X,
  Sparkles,
  Zap,
  TrendingUp,
  Code2,
  Headphones,
  Search,
  ShieldCheck,
  Smartphone,
  MessageSquare,
  ClipboardList,
  Palette,
  CheckCircle,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

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

/* Ninguno de los paquetes incluye dominio ni hosting. Se dice en tres lugares a
   propósito —en `priceNote`, como última línea de features y en el FAQ— porque
   es la sorpresa que más molesta cuando aparece al final: el cliente ya cerró
   pensando un número y le llega otro. Si cambias esto, cámbialo en los tres.

   Los descuentos son todos del 33% sobre `originalPrice`. Si mueves un precio,
   recalcula: un "40% OFF" que no da 40% al dividir es un número que el cliente
   puede comprobar en diez segundos. */
const SIN_DOMINIO = {
  label: "Dominio y hosting",
  included: false,
  note: "Se cotiza aparte",
} as const;

const NOTA_PRECIO = "MXN · Pago único · Sin dominio ni hosting";

export const paquetes: Paquete[] = [
  {
    id: "landing",
    name: "Landing Page",
    subtitle: "Presencia rápida y efectiva",
    price: "$4,000",
    originalPrice: "$5,999",
    discountLabel: "33% OFF",
    priceNote: NOTA_PRECIO,
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
      { label: "Entrega en 5–7 días", included: true },
      { label: "Panel administrativo", included: false },
      { label: "Ecommerce", included: false },
      { label: "SEO avanzado", included: false },
      SIN_DOMINIO,
    ],
  },
  {
    id: "institucional",
    name: "Web Institucional",
    subtitle: "Presencia corporativa completa",
    price: "$7,999",
    originalPrice: "$11,999",
    discountLabel: "33% OFF",
    priceNote: NOTA_PRECIO,
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
      SIN_DOMINIO,
    ],
  },
  {
    id: "ecommerce-basico",
    name: "Ecommerce Básico",
    subtitle: "Vende sin pasarela de pago",
    price: "$12,999",
    originalPrice: "$19,499",
    discountLabel: "33% OFF",
    priceNote: NOTA_PRECIO,
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
      SIN_DOMINIO,
    ],
  },
  {
    id: "sistema-reservas",
    name: "Sistema de Reservas",
    subtitle: "Tu agenda, sin mensualidad",
    price: "$19,999",
    originalPrice: "$29,999",
    discountLabel: "33% OFF",
    priceNote: NOTA_PRECIO,
    highlight: true,
    idealFor:
      "Negocios que agendan por cita —barberías, spas, estéticas, clínicas— y pierden citas por no-shows.",
    badge: "Recomendado",
    badgeColor: "bg-primary-100 text-primary-700",
    gradient: "from-primary-800 to-primary-900",
    accentColor: "text-white",
    cta: "Solicitar este paquete",
    features: [
      { label: "Agenda en línea con confirmación", included: true },
      { label: "Anticipo por transferencia", included: true, note: "Sin comisión" },
      { label: "Panel de agenda para el negocio", included: true },
      { label: "Control de no-shows por cliente", included: true },
      { label: "Servicios de duración variable", included: true },
      { label: "Varios empleados o estaciones", included: true },
      { label: "Recordatorios y alta en calendario", included: true },
      { label: "Sitio público con tus servicios", included: true },
      { label: "Cobro con tarjeta", included: false, note: "Opcional, se cotiza" },
      SIN_DOMINIO,
    ],
  },
  {
    id: "ecommerce-avanzado",
    name: "Ecommerce Avanzado",
    subtitle: "Tienda online completa",
    price: "$24,999",
    originalPrice: "$37,499",
    discountLabel: "33% OFF",
    priceNote: NOTA_PRECIO,
    highlight: false,
    idealFor: "Tiendas online que necesitan gestión completa y pagos en línea.",
    gradient: "from-sky-50 to-blue-50",
    accentColor: "text-sky-700",
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
      { label: "SEO optimizado", included: true },
      SIN_DOMINIO,
    ],
  },
  {
    id: "software-personalizado",
    name: "Software Personalizado",
    subtitle: "Solución empresarial a medida",
    price: "Cotización",
    priceNote: "personalizada · sin dominio ni hosting",
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
      { label: "Soporte y mantenimiento", included: true },
      { label: "Capacitación al equipo", included: true },
      SIN_DOMINIO,
    ],
  },
];

export interface ComparativaRow {
  feature: string;
  landing: string | boolean;
  institucional: string | boolean;
  ecommerceBasico: string | boolean;
  reservas: string | boolean;
  ecommerceAvanzado: string | boolean;
  softwarePersonalizado: string | boolean;
}

export const comparativaData: ComparativaRow[] = [
  {
    feature: "Páginas / Secciones",
    landing: "1",
    institucional: "Hasta 6",
    ecommerceBasico: "Ilimitadas",
    reservas: "Hasta 6",
    ecommerceAvanzado: "Ilimitadas",
    softwarePersonalizado: "Ilimitadas",
  },
  {
    feature: "Panel administrativo",
    landing: false,
    institucional: "Básico",
    ecommerceBasico: "Básico",
    reservas: "Agenda",
    ecommerceAvanzado: "Completo",
    softwarePersonalizado: "Enterprise",
  },
  {
    feature: "Agenda y reservas en línea",
    landing: false,
    institucional: false,
    ecommerceBasico: false,
    reservas: true,
    ecommerceAvanzado: false,
    softwarePersonalizado: true,
  },
  {
    feature: "Anticipo sin comisión",
    landing: false,
    institucional: false,
    ecommerceBasico: false,
    reservas: true,
    ecommerceAvanzado: false,
    softwarePersonalizado: true,
  },
  {
    feature: "Ecommerce",
    landing: false,
    institucional: false,
    ecommerceBasico: true,
    reservas: false,
    ecommerceAvanzado: true,
    softwarePersonalizado: true,
  },
  {
    feature: "Pasarela de pago",
    landing: false,
    institucional: false,
    ecommerceBasico: false,
    reservas: "Opcional",
    ecommerceAvanzado: true,
    softwarePersonalizado: true,
  },
  {
    feature: "SEO optimizado",
    landing: "Básico",
    institucional: "Básico",
    ecommerceBasico: "Básico",
    reservas: "Básico",
    ecommerceAvanzado: "Avanzado",
    softwarePersonalizado: "Avanzado",
  },
  {
    feature: "Soporte incluido",
    landing: "30 días",
    institucional: "60 días",
    ecommerceBasico: "60 días",
    reservas: "90 días",
    ecommerceAvanzado: "90 días",
    softwarePersonalizado: "Personalizado",
  },
  {
    feature: "Personalización",
    landing: "Media",
    institucional: "Alta",
    ecommerceBasico: "Alta",
    reservas: "Muy alta",
    ecommerceAvanzado: "Muy alta",
    softwarePersonalizado: "Total",
  },
  {
    feature: "Escalabilidad",
    landing: false,
    institucional: "Media",
    ecommerceBasico: "Media",
    reservas: "Alta",
    ecommerceAvanzado: "Alta",
    softwarePersonalizado: "Enterprise",
  },
  /* Va al final de la tabla a propósito: es lo único que NINGÚN paquete
     incluye, y una fila entera de "no" se lee de un golpe. */
  {
    feature: "Dominio y hosting",
    landing: false,
    institucional: false,
    ecommerceBasico: false,
    reservas: false,
    ecommerceAvanzado: false,
    softwarePersonalizado: false,
  },
];

export const procesoData: {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
}[] = [
  {
    step: 1,
    title: "Reunión inicial",
    description:
      "Escuchamos tus necesidades, objetivos y visión del proyecto sin costo ni compromiso.",
    icon: MessageSquare,
    duration: "1–2 días",
  },
  {
    step: 2,
    title: "Análisis del proyecto",
    description:
      "Evaluamos requerimientos técnicos, funcionales y de negocio para definir el alcance.",
    icon: ClipboardList,
    duration: "2–3 días",
  },
  {
    step: 3,
    title: "Diseño UI/UX",
    description:
      "Creamos prototipos y maquetas del diseño para tu aprobación antes de desarrollar.",
    icon: Palette,
    duration: "3–5 días",
  },
  {
    step: 4,
    title: "Desarrollo",
    description:
      "Construimos tu proyecto con código limpio, arquitectura sólida y buenas prácticas.",
    icon: Code2,
    duration: "Variable",
  },
  {
    step: 5,
    title: "Revisión y QA",
    description:
      "Pruebas exhaustivas de funcionalidad, rendimiento, seguridad y compatibilidad.",
    icon: CheckCircle,
    duration: "2–3 días",
  },
  {
    step: 6,
    title: "Lanzamiento",
    description:
      "Desplegamos tu proyecto en producción con configuración de dominio y hosting optimizado.",
    icon: Rocket,
    duration: "1 día",
  },
  {
    step: 7,
    title: "Soporte activo",
    description:
      "Acompañamiento post-lanzamiento para resolver dudas, ajustes y actualizaciones.",
    icon: LifeBuoy,
    duration: "Continuo",
  },
];

export const beneficiosData: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Sparkles,
    title: "Diseño moderno",
    description: "Interfaces limpias, elegantes y alineadas con las tendencias actuales del diseño digital.",
  },
  {
    icon: Zap,
    title: "Entrega rápida",
    description: "Metodología ágil que nos permite entregar proyectos de calidad en los tiempos acordados.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description: "Arquitecturas preparadas para crecer. Tu sistema evoluciona con tu negocio sin rehacer todo.",
  },
  {
    icon: Code2,
    title: "Código limpio",
    description: "Desarrollamos con estándares de industria: documentado, mantenible y transferible.",
  },
  {
    icon: Headphones,
    title: "Soporte real",
    description: "Soporte técnico humano, rápido y efectivo. Respondemos cuando más lo necesitas.",
  },
  {
    icon: Search,
    title: "SEO optimizado",
    description: "Cada proyecto se construye pensando en visibilidad orgánica desde el primer día.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
    description: "Implementamos HTTPS, autenticación segura, protección de datos y mejores prácticas.",
  },
  {
    icon: Smartphone,
    title: "Mobile first",
    description: "Diseñamos primero para móvil. Tus usuarios tendrán una experiencia perfecta en cualquier dispositivo.",
  },
];

export const faqData = [
  {
    question: "¿Cuánto tarda en completarse un proyecto?",
    answer:
      "Depende del tipo de proyecto. Una Landing Page puede estar lista en 5–7 días. Un sitio institucional toma 2–3 semanas. Un ecommerce básico de 3–4 semanas y uno avanzado de 6–8 semanas. El Sistema de Reservas toma 3–4 semanas. Proyectos de software personalizado se estiman en la reunión inicial.",
  },
  {
    question: "¿Los paquetes incluyen dominio y hosting?",
    answer:
      "No. Ningún paquete incluye dominio ni hosting: son servicios de terceros que se contratan a nombre tuyo, para que la propiedad del dominio quede en tus manos y no en las nuestras. Como referencia, un dominio .com o .mx ronda los $200–500 MXN al año y el hosting va de $0 a $400 MXN al mes según el tipo de proyecto (una landing puede quedar en un plan gratuito; un ecommerce con base de datos no). Te asesoramos para elegir, podemos gestionar la contratación por ti como parte del lanzamiento, y si ya tienes dominio o hosting propios los usamos sin problema.",
  },
  {
    question: "¿Por qué el Sistema de Reservas cuesta más que un sitio web?",
    answer:
      "Porque no es un sitio, es un sistema que opera tu negocio: la agenda vive ahí, el cliente reserva solo, elige servicio y deja anticipo, y tú lo administras desde un panel. Un sitio te presenta; este te trabaja. La comparación honesta no es contra una landing, sino contra plataformas de agenda tipo Booksy o Fresha, que cobran mensualidad para siempre: el nuestro se paga una vez y es tuyo.",
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
