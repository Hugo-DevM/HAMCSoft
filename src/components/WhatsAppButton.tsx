"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


const WA_NUMBER = "523222151711";
const WA_MESSAGE = "Hola HAMCSoft, me interesa conocer más sobre sus servicios web.";

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [chatbotHeight, setChatbotHeight] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onResize = (e: Event) => {
      const height = (e as CustomEvent<{ height: number }>).detail.height;
      setChatbotHeight(height);
    };
    const onClose = () => setChatbotHeight(null);
    window.addEventListener("chatbot:resize", onResize);
    window.addEventListener("chatbot:close", onClose);
    return () => {
      window.removeEventListener("chatbot:resize", onResize);
      window.removeEventListener("chatbot:close", onClose);
    };
  }, []);

  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed right-6 z-50 transition-[bottom] duration-300 ease-in-out"
          style={{ bottom: chatbotHeight != null ? `${chatbotHeight + 24 + 8}px` : "24px" }}
        >
          {/* Tooltip — absolutamente posicionado, no afecta el botón */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.18 }}
                className="absolute bottom-[calc(100%+10px)] right-0 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 w-52 pointer-events-none"
              >
                <p className="text-xs font-semibold text-gray-800 leading-snug">
                  ¿Tienes dudas?
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Escríbenos por WhatsApp, respondemos rápido.
                </p>
                {/* Arrow hacia abajo */}
                <div className="absolute bottom-[-5px] right-5 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón */}
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba58] rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Contactar por WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-7 h-7 relative z-10"
              fill="white"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.67 4.797 1.835 6.789L2 30l7.438-1.808A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.82-1.587l-.418-.248-4.414 1.073 1.112-4.302-.272-.44A11.456 11.456 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.617c-.345-.172-2.04-1.006-2.355-1.12-.316-.115-.546-.172-.776.172-.23.345-.89 1.12-1.09 1.35-.2.23-.4.258-.745.086-.345-.172-1.456-.537-2.773-1.71-1.025-.913-1.717-2.04-1.918-2.385-.2-.345-.021-.531.15-.703.155-.155.345-.402.517-.603.172-.2.23-.345.345-.574.115-.23.057-.431-.029-.603-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.591l-.66-.011c-.23 0-.603.086-.918.431-.316.345-1.206 1.178-1.206 2.872s1.235 3.332 1.407 3.562c.172.23 2.43 3.71 5.888 5.204.823.355 1.465.567 1.966.726.826.263 1.578.226 2.172.137.662-.099 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.086-.144-.316-.23-.66-.402z" />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
