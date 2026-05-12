import {
  Globe,
  Building2,
  ShoppingCart,
  ShoppingBag,
  Cpu,
  MonitorSmartphone,
  Zap,
  Plug,
  Code2,
  Headphones,
} from "lucide-react";

export interface Servicio {
  id: string;
  icon: typeof Globe;
  title: string;
  description: string;
  technologies: string[];
  benefits: string[];
  badge?: string;
}

export const servicios: Servicio[] = [
  {
    id: "landing-page",
    icon: Globe,
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje de alto impacto diseñadas para convertir visitantes en clientes desde el primer clic.",
    technologies: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    benefits: ["Alta conversión", "Carga ultrarrápida", "100% responsive"],
    badge: "Más vendido",
  },
  {
    id: "web-institucional",
    icon: Building2,
    title: "Páginas Institucionales",
    description:
      "Sitios web corporativos que transmiten profesionalismo y generan confianza en tu marca empresarial.",
    technologies: ["Next.js", "TypeScript", "CMS", "SEO"],
    benefits: ["SEO optimizado", "Panel editable", "Multiidioma"],
  },
  {
    id: "ecommerce-basico",
    icon: ShoppingCart,
    title: "Ecommerce Básico",
    description:
      "Tiendas online funcionales con catálogo, carrito y pedidos vía WhatsApp. Sin pasarela de pago compleja.",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    benefits: ["Fácil gestión", "WhatsApp integrado", "Catálogo digital"],
  },
  {
    id: "ecommerce-avanzado",
    icon: ShoppingBag,
    title: "Ecommerce Avanzado",
    description:
      "Plataforma completa de comercio electrónico con pagos, inventario, usuarios y panel administrativo.",
    technologies: ["Next.js", "Stripe", "Prisma", "Redis"],
    benefits: ["Pasarela de pago", "Inventario real", "Dashboard completo"],
    badge: "Empresarial",
  },
  {
    id: "sistemas-web",
    icon: Cpu,
    title: "Sistemas Web Personalizados",
    description:
      "Plataformas web a medida para gestionar procesos internos, equipos, clientes o cualquier operación empresarial.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    benefits: ["100% personalizado", "Escalable", "Multi-usuario"],
    badge: "Escalable",
  },
  {
    id: "sistemas-pos",
    icon: MonitorSmartphone,
    title: "Sistemas POS",
    description:
      "Punto de venta modular y moderno para cafeterías, restaurantes, retail y más. Funciona online y offline.",
    technologies: ["React", "Electron", "SQLite", "Node.js"],
    benefits: ["Modo offline", "Reportes", "Multi-sucursal"],
    badge: "Más vendido",
  },
  {
    id: "automatizacion",
    icon: Zap,
    title: "Automatización de Procesos",
    description:
      "Automatiza tareas repetitivas, flujos de trabajo y procesos empresariales para liberar el potencial de tu equipo.",
    technologies: ["n8n", "Python", "Node.js", "Zapier"],
    benefits: ["Ahorra tiempo", "Reduce errores", "Escala solo"],
  },
  {
    id: "integraciones-api",
    icon: Plug,
    title: "Integraciones API",
    description:
      "Conectamos tus sistemas con servicios externos: CRMs, ERPs, plataformas de pago, redes sociales y más.",
    technologies: ["REST API", "GraphQL", "Webhooks", "OAuth"],
    benefits: ["Ecosistema unificado", "Tiempo real", "Seguro"],
  },
  {
    id: "software-medida",
    icon: Code2,
    title: "Desarrollo de Software a Medida",
    description:
      "Construimos desde cero el sistema exacto que tu empresa necesita. Análisis completo, arquitectura sólida y entrega ágil.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    benefits: ["Arquitectura sólida", "Documentado", "Transferible"],
    badge: "Empresarial",
  },
  {
    id: "mantenimiento",
    icon: Headphones,
    title: "Mantenimiento y Soporte",
    description:
      "Planes de mantenimiento preventivo, actualizaciones de seguridad y soporte técnico para que tu plataforma siempre esté activa.",
    technologies: ["CI/CD", "Monitoring", "Security", "Updates"],
    benefits: ["Uptime garantizado", "Respuesta rápida", "Proactivo"],
  },
];
