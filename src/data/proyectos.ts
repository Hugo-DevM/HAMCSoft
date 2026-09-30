import {
  Globe,
  ShoppingCart,
  Gift,
  Scale,
  Smile,
  Scissors,
} from "lucide-react";

export type CategoriaProyecto =
  | "Landing Page"
  | "Ecommerce"
  | "Web Institucional"
  | "Sistema / SaaS"
  | "Aplicación Web";

export interface Proyecto {
  id: string;
  cliente: string;
  industria: string;
  titulo: string;
  categoria: CategoriaProyecto;
  icon: typeof Globe;
  descripcion: string;
  reto?: string;
  solucion?: string;
  url?: string;
  dominio?: string;
  /**
   * true = proyecto demostrativo construido por nosotros para enseñar lo que
   * se puede hacer en ese giro, NO un trabajo entregado a un cliente real.
   * Se marca con una etiqueta visible: presentar una demo como cliente es
   * justo lo que destruye la confianza que el portafolio busca construir.
   */
  demo?: boolean;
  imagen?: string;
  /**
   * Captura extra para proyectos con dos caras (p. ej. el panel
   * administrativo además del sitio público). Solo se muestra en /portafolio.
   */
  imagenSecundaria?: string;
  /** Etiqueta de la captura extra, p. ej. "Panel administrativo" */
  imagenSecundariaLabel?: string;
  /** URL de la vista secundaria, si es visitable (p. ej. /panel) */
  urlSecundaria?: string;
  tecnologias: string[];
  entregables: string[];
  metrica?: { valor: string; label: string };
  anio: string;
  destacado?: boolean;
  accent: {
    gradient: string;
    chip: string;
  };
}

export const proyectos: Proyecto[] = [
  {
    id: "fideliza",
    cliente: "Fideliza",
    industria: "SaaS · Producto propio",
    titulo: "Plataforma de programas de lealtad",
    categoria: "Sistema / SaaS",
    icon: Gift,
    descripcion:
      "SaaS completo para que cualquier negocio lance su propio programa de puntos y recompensas: panel de administración, portal para clientes, niveles VIP y analíticas.",
    reto: "Los negocios locales premiaban a sus clientes frecuentes con tarjetas de sellos de papel, sin datos ni forma de medir si funcionaba.",
    solucion:
      "Construimos la plataforma de punta a punta autenticación, registro de transacciones, canje de recompensas y reportes y hoy opera en producción con clientes reales.",
    url: "https://fideliza.app/",
    dominio: "fideliza.app",
    imagen: "/portafolio/fideliza.webp",
    tecnologias: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    entregables: [
      "Panel de administración",
      "Portal para clientes",
      "Sistema de puntos y niveles",
      "Analíticas y reportes",
    ],
    metrica: { valor: "En producción", label: "Con clientes activos" },
    anio: "2025",
    destacado: true,
    accent: {
      gradient: "from-primary-800 via-primary-600 to-primary-400",
      chip: "bg-primary-50 text-primary-700 border-primary-100",
    },
  },
  {
    id: "floreria-tulipan",
    cliente: "Florería Tulipán",
    industria: "Florería · Puerto Vallarta",
    titulo: "Tienda en línea con pedidos por WhatsApp",
    categoria: "Ecommerce",
    icon: ShoppingCart,
    descripcion:
      "Catálogo en línea de arreglos florales donde el cliente arma su pedido y lo envía directo al WhatsApp del negocio, sin pasarela de pago ni fricción.",
    reto: "Los pedidos llegaban como mensajes sueltos y se perdían entre conversaciones.",
    solucion:
      "Catálogo navegable por categoría y un carrito que genera un mensaje de WhatsApp ya formateado con el pedido completo.",
    url: "https://www.floreriatulipan.mx/",
    dominio: "floreriatulipan.mx",
    imagen: "/portafolio/floreria-tulipan.webp",
    tecnologias: ["Next.js", "TailwindCSS", "WhatsApp API"],
    entregables: [
      "Catálogo de productos",
      "Carrito con checkout por WhatsApp",
      "Diseño responsive",
      "SEO local",
    ],
    metrica: { valor: "2x", label: "Más pedidos en línea" },
    anio: "2025",
    destacado: true,
    accent: {
      gradient: "from-rose-600 via-rose-500 to-pink-400",
      chip: "bg-rose-50 text-rose-700 border-rose-100",
    },
  },
  {
    id: "laptops-master",
    cliente: "Laptops Master",
    industria: "Venta y reparación de equipos",
    titulo: "Landing page para captación de clientes",
    categoria: "Landing Page",
    icon: Globe,
    descripcion:
      "Landing de una sola página que presenta equipos y servicios de reparación, optimizada para que los clientes de la zona los encuentren en Google y contacten al instante.",
    reto: "No tenían ninguna presencia en internet: todo dependía de recomendaciones de boca en boca.",
    solucion:
      "Landing rápida y clara con servicios, catálogo de equipos y botones de contacto directo, más configuración de SEO local.",
    url: "https://www.laptopsmaster.com/",
    dominio: "laptopsmaster.com",
    imagen: "/portafolio/laptops-master.webp",
    tecnologias: ["Next.js", "TailwindCSS", "SEO"],
    entregables: [
      "Landing de alta conversión",
      "SEO local (Google Maps)",
      "Contacto directo por WhatsApp",
      "Optimización de velocidad",
    ],
    metrica: { valor: "3x", label: "Más clientes nuevos" },
    anio: "2025",
    destacado: true,
    accent: {
      gradient: "from-blue-700 via-blue-500 to-sky-400",
      chip: "bg-blue-50 text-blue-700 border-blue-100",
    },
  },
  {
    id: "despacho-abogados",
    cliente: "Despacho de abogados",
    industria: "Servicios legales",
    demo: true,
    titulo: "Landing page para despacho de abogados",
    categoria: "Landing Page",
    icon: Scale,
    descripcion:
      "Landing sobria y profesional que presenta las áreas de práctica del despacho, el perfil de los abogados y un formulario de consulta que filtra el tipo de caso antes del primer contacto.",
    reto: "Un despacho compite por confianza: el cliente potencial busca en Google con un problema urgente y decide en segundos a quién le va a contar algo delicado.",
    solucion:
      "Estructuramos la página alrededor de la credibilidad áreas de práctica claras, trayectoria del equipo, casos de éxito y preguntas frecuentes con contacto directo por WhatsApp y llamada para que no haya fricción en el momento de decidir.",
    url: "https://abogados-gold.vercel.app/",
    dominio: "abogados-gold.vercel.app",
    imagen: "/portafolio/despacho-abogados.webp",
    tecnologias: ["Next.js", "TypeScript", "TailwindCSS", "SEO"],
    entregables: [
      "Áreas de práctica",
      "Perfil del equipo legal",
      "Formulario de consulta",
      "Agenda de citas por WhatsApp",
      "SEO local por especialidad",
      "Diseño 100% responsive",
    ],
    anio: "2026",
    destacado: true,
    accent: {
      gradient: "from-slate-800 via-slate-600 to-indigo-500",
      chip: "bg-slate-100 text-slate-700 border-slate-200",
    },
  },
  {
    id: "clinica-dental",
    cliente: "Clínica dental",
    industria: "Salud · Odontología",
    demo: true,
    titulo: "Landing page para clínica dental",
    categoria: "Landing Page",
    icon: Smile,
    descripcion:
      "Landing luminosa y cercana con el catálogo de tratamientos, precios orientativos y agendado de cita en un solo paso, pensada para reducir la ansiedad del paciente antes de llamar.",
    reto: "La mayoría de los pacientes posterga la visita al dentista por miedo y por no saber cuánto le va a costar.",
    solucion:
      "Priorizamos tratamientos explicados en lenguaje sencillo, resultados antes y después, y un botón de agendar cita visible en todo momento, para que pedir una valoración se sienta fácil.",
    url: "https://dentista-red.vercel.app/",
    dominio: "dentista-red.vercel.app",
    imagen: "/portafolio/clinica-dental.webp",
    tecnologias: ["Next.js", "TypeScript", "TailwindCSS", "SEO"],
    entregables: [
      "Catálogo de tratamientos",
      "Galería antes y después",
      "Agendado de cita",
      "Ubicación y horarios",
      "SEO local (Google Maps)",
      "Optimización móvil",
    ],
    anio: "2026",
    destacado: true,
    accent: {
      gradient: "from-cyan-600 via-sky-500 to-teal-400",
      chip: "bg-cyan-50 text-cyan-700 border-cyan-100",
    },
  },
  {
    id: "barberia",
    cliente: "Barbería",
    industria: "Barbería · Cuidado personal",
    demo: true,
    titulo: "Sitio con agendado de citas y panel administrativo",
    categoria: "Aplicación Web",
    icon: Scissors,
    descripcion:
      "Sitio donde el cliente elige servicio, barbero y horario disponible para agendar su cita solo, más un panel privado donde la barbería ve la agenda del día y administra sus citas.",
    reto: "En la mayoría de las barberías las citas se apartan por mensaje o llamada y se anotan en un cuaderno: se duplican horarios y el barbero interrumpe el corte para contestar el teléfono.",
    solucion:
      "Construimos el agendado en línea con horarios reales —solo se muestra lo que está libre, así no hay dobles reservas— y un panel administrativo donde el dueño ve las citas del día, las confirma o cancela y da de alta servicios, barberos y horarios de atención.",
    url: "https://barberos-iota-liard.vercel.app/",
    dominio: "barberos-iota-liard.vercel.app",
    imagen: "/portafolio/barberia.webp",
    imagenSecundaria: "/portafolio/barberia-panel.webp",
    imagenSecundariaLabel: "Panel administrativo · agenda del día",
    urlSecundaria: "https://barberos-iota-liard.vercel.app/panel",
    tecnologias: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    entregables: [
      "Agendado de citas en línea",
      "Disponibilidad real por barbero",
      "Panel administrativo de citas",
      "Catálogo de servicios y precios",
      "Confirmación por WhatsApp",
      "Diseño 100% responsive",
    ],
    anio: "2026",
    destacado: true,
    accent: {
      gradient: "from-amber-700 via-amber-500 to-orange-400",
      chip: "bg-amber-50 text-amber-700 border-amber-100",
    },
  },
];

/** Categorías presentes, para los filtros de /portafolio */
export const categoriasProyecto = [
  "Todos",
  ...Array.from(new Set(proyectos.map((p) => p.categoria))),
] as const;

export const proyectosDestacados = proyectos.filter((p) => p.destacado);

/** Trabajo entregado de verdad — sin las demostraciones */
export const proyectosEntregados = proyectos.filter((p) => !p.demo);
