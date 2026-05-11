"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    label: "Soluciones",
    href: "#soluciones",
    children: [
      { label: "Sistema de Fidelización", href: "#soluciones" },
      { label: "Suite POS Modular", href: "#soluciones" },
    ],
  },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/logo-2.svg"
              alt="Logo ícono"
              width={120}
              height={120}
              className="h-14 w-auto object-contain"
              priority
            />
            <Image
              src="/logo.svg"
              alt="HAMCSoft"
              width={420}
              height={240}
              className="h-28 w-auto object-contain -ml-2"
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.children ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-800 transition-colors rounded-lg hover:bg-primary-50">
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary-800 hover:bg-primary-50 transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-800 transition-colors rounded-lg hover:bg-primary-50"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contacto"
              className="text-sm font-medium text-gray-600 hover:text-primary-800 transition-colors px-3 py-2"
            >
              Contacto
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-primary hover:shadow-lg hover:-translate-y-0.5"
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white pt-16 px-6"
          >
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-800 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-3 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Contacto
                </a>
                <a
                  href="#demo"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-primary-800 text-white text-sm font-semibold px-4 py-3 rounded-xl hover:bg-primary-900 transition-colors"
                >
                  Solicitar Demo
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
