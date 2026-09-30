"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock } from "lucide-react";
import type { Proyecto } from "@/data/proyectos";

/**
 * Cuánto se recorta del borde derecho de cada captura para esconder la barra
 * de scroll del navegador que quedó dentro de la imagen.
 *
 * Las capturas actuales miden 1455px de ancho y la barra ocupa ~15px (1.03%).
 * 1.6% deja margen de sobra sin que se note el recorte. Si algún día cambias
 * las capturas por unas sin barra, pon "0%" aquí y listo.
 */
const RECORTE_DERECHA = "1.6%";

/**
 * Preview de un proyecto dentro de un mockup de navegador.
 *
 * Si `proyecto.imagen` no existe todavía (o falla al cargar) se dibuja un
 * preview generado con el gradiente del proyecto — así el portafolio nunca
 * muestra una imagen rota mientras se consiguen las capturas.
 */
export default function ProyectoPreview({
  proyecto,
  className = "",
  priority = false,
  vista = "principal",
}: {
  proyecto: Proyecto;
  className?: string;
  priority?: boolean;
  /** "secundaria" muestra la captura extra (p. ej. el panel administrativo) */
  vista?: "principal" | "secundaria";
}) {
  const [imgFallo, setImgFallo] = useState(false);
  const esSecundaria = vista === "secundaria";

  const src = esSecundaria ? proyecto.imagenSecundaria : proyecto.imagen;
  const mostrarImagen = Boolean(src) && !imgFallo;
  const Icon = proyecto.icon;

  /* En la vista secundaria la barra muestra la etiqueta (es un panel
     privado, no una URL pública que el visitante pueda abrir). */
  const etiquetaBarra = esSecundaria
    ? (proyecto.imagenSecundariaLabel ?? "Panel administrativo")
    : (proyecto.dominio ?? proyecto.cliente.toLowerCase());

  const iniciales = proyecto.cliente
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`rounded-2xl overflow-hidden bg-gray-800 shadow-card ring-1 ring-black/5 ${className}`}
    >
      {/* Barra del navegador */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-800">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/90" />
        </div>
        <div className="flex-1 flex items-center gap-1.5 bg-gray-700/70 rounded-md px-2.5 py-1 min-w-0">
          <Lock
            size={9}
            className={esSecundaria ? "text-amber-400 shrink-0" : "text-green-400 shrink-0"}
          />
          <span className="text-[10px] text-gray-300 font-medium truncate">
            {etiquetaBarra}
          </span>
        </div>
      </div>

      {/* Viewport */}
      <div className="relative aspect-[16/10] bg-white overflow-hidden">
        {mostrarImagen ? (
          /*
            Las capturas se tomaron con el navegador real, así que traen la
            barra de scroll dibujada en el borde derecho (~15px de 1455 =
            1.03% del ancho). Estiramos la imagen RECORTE_DERECHA más allá del
            borde del marco y el overflow-hidden del padre se la come.
          */
          <div
            className="absolute inset-y-0 left-0"
            style={{ right: `-${RECORTE_DERECHA}` }}
          >
            <Image
              src={src as string}
              alt={
                esSecundaria
                  ? `${proyecto.imagenSecundariaLabel ?? "Panel administrativo"} de ${proyecto.cliente}`
                  : `Captura del sitio de ${proyecto.cliente}`
              }
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={priority}
              onError={() => setImgFallo(true)}
              className="object-cover object-top"
            />
          </div>
        ) : (
          /* Preview generado — placeholder mientras no hay captura */
          <div
            className={`absolute inset-0 bg-gradient-to-br ${proyecto.accent.gradient} flex flex-col items-center justify-center gap-3`}
          >
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="relative w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
              <Icon size={24} className="text-white" />
            </div>
            <div className="relative text-center px-6">
              <p className="text-white font-black text-lg leading-tight">
                {proyecto.cliente}
              </p>
              <p className="text-white/70 text-[11px] font-semibold tracking-widest uppercase mt-1">
                {esSecundaria
                  ? (proyecto.imagenSecundariaLabel ?? "Panel administrativo")
                  : `${iniciales} · ${proyecto.categoria}`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
