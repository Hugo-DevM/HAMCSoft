"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  Soluciones: [
    { label: "Sistema de Fidelización", href: "#soluciones" },
    { label: "Sistema POS General", href: "#soluciones" },
    { label: "Módulos por sector", href: "#soluciones" },
    { label: "Próximamente", href: "#soluciones" },
  ],
  Empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Casos de Éxito", href: "#testimonios" },
    { label: "Prensa", href: "#" },
    { label: "Carreras", href: "#" },
  ],
  Soporte: [
    { label: "Centro de Ayuda", href: "#" },
    { label: "Documentación", href: "#" },
    { label: "Estado del Sistema", href: "#" },
    { label: "Contacto", href: "#contacto" },
    { label: "Solicitar Demo", href: "#demo" },
  ],
  Legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos de Uso", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Licencias", href: "#" },
  ],
};

const social = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const contact = [
  { icon: Mail, text: "info@hamcsoft.com", href: "mailto:info@hamcsoft.com" },
  { icon: Phone, text: "+52 322-215-17-11", href: "tel:+523222151711" },
  {
    icon: MapPin,
    text: "Ciudad de Puerto Vallarta, Jalisco, México",
    href: "#",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-700 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="block mb-4">
              <Image
                src="/logo-white.svg"
                alt="HAMCSoft"
                width={160}
                height={90}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Plataforma modular de puntos de venta para negocios modernos.
              Rápido, confiable y diseñado para crecer contigo.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              {contact.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <Icon size={14} className="text-primary-500 shrink-0" />
                  <span>{text}</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>

            {/* Social */}
            {/* <div className="flex gap-2">
              {social.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-primary-800/40 border border-white/10 hover:border-primary-700 flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={15} className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {year} HAMCSoft. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-500">
              Todos los sistemas operativos
            </span>
          </div>
          <p className="text-xs text-gray-600">Hecho con ❤️ en México</p>
        </div>
      </div>
    </footer>
  );
}
