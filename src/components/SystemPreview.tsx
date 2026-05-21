"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Gift, LayoutDashboard, ShoppingCart, Package, BarChart3 } from "lucide-react";

type TabId = "fidelizacion" | "pos-dashboard" | "pos-ventas" | "pos-inventario" | "pos-stats";

const systemTabs = [
  { system: "Fidelización", id: "fidelizacion" as TabId, icon: Gift },
  { system: "Suite POS", id: "pos-dashboard" as TabId, icon: LayoutDashboard },
  { system: "Suite POS", id: "pos-ventas" as TabId, icon: ShoppingCart },
  { system: "Suite POS", id: "pos-inventario" as TabId, icon: Package },
  { system: "Suite POS", id: "pos-stats" as TabId, icon: BarChart3 },
];

const tabLabels: Record<TabId, string> = {
  fidelizacion: "Fidelización",
  "pos-dashboard": "POS — Dashboard",
  "pos-ventas": "POS — Ventas",
  "pos-inventario": "POS — Inventario",
  "pos-stats": "POS — Estadísticas",
};

function FidelizacionView() {
  const clients = [
    { name: "Carlos M.", pts: 2840, level: "Oro", visits: 42, spent: "$1,240" },
    { name: "Ana Rodríguez", pts: 1420, level: "Plata", visits: 28, spent: "$680" },
    { name: "Luis Pérez", pts: 680, level: "Bronce", visits: 15, spent: "$340" },
    { name: "María González", pts: 3210, level: "Platino", visits: 58, spent: "$2,100" },
  ];
  const bars = [55, 70, 60, 85, 68, 90, 72, 95, 80, 88, 78, 100];
  return (
    <div className="bg-gray-50 h-full p-4 space-y-3">
      {/* Stats — 2 cols on mobile, 4 on sm+ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { label: "Clientes Activos", value: "120", delta: "+8 este mes" },
          { label: "Puntos Emitidos", value: "48,200", delta: "este mes" },
          { label: "Canjes Realizados", value: "342", delta: "+23%" },
          { label: "Tasa Retención", value: "68%", delta: "+5% vs mes ant." },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-[9px] text-gray-400 uppercase tracking-wide leading-tight">{s.label}</p>
            <p className="text-base font-black text-gray-900 mt-0.5">{s.value}</p>
            <p className="text-[9px] text-green-600 font-semibold">{s.delta}</p>
          </div>
        ))}
      </div>

      {/* Main content — stacked on mobile, 2 cols on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <p className="text-xs font-bold text-gray-700 mb-3">Top Clientes Fieles</p>
          {clients.map((c) => (
            <div key={c.name} className="flex items-center gap-2.5 py-2 border-b border-gray-50 last:border-0">
              <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center text-[10px] font-black text-primary-800 shrink-0">
                {c.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-gray-800 truncate">{c.name}</p>
                <p className="text-[9px] text-gray-400">{c.pts} pts · {c.visits} visitas</p>
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                c.level === "Platino" ? "bg-slate-100 text-slate-700"
                : c.level === "Oro" ? "bg-amber-100 text-amber-700"
                : c.level === "Plata" ? "bg-gray-100 text-gray-600"
                : "bg-orange-100 text-orange-700"
              }`}>{c.level}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <p className="text-xs font-bold text-gray-700 mb-3">Puntos emitidos — 12 meses</p>
            <div className="flex items-end gap-1 h-14">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 11
                      ? "linear-gradient(180deg, #BA5AFF, #6B1BB2)"
                      : `rgba(107,27,178,${0.1 + i * 0.07})`,
                  }} />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-4 text-white">
            <p className="text-[10px] text-primary-300 font-semibold mb-1">Campaña activa</p>
            <p className="text-sm font-black">2x puntos en fin de semana</p>
            <p className="text-[10px] text-primary-300 mt-1.5">Vence en 3 días · 48 clientes elegibles</p>
            <div className="mt-2 bg-white/20 rounded-full h-1.5">
              <div className="bg-white rounded-full h-1.5 w-3/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function POSDashboardView() {
  const bars = [40, 65, 50, 80, 70, 90, 60, 95, 75, 88, 72, 100];
  return (
    <div className="bg-gray-50 h-full p-4 space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { label: "Ventas Hoy", value: "$18,240", delta: "+23%" },
          { label: "Transacciones", value: "342", delta: "+15%" },
          { label: "Ticket Prom.", value: "$53.3", delta: "+8%" },
          { label: "Clientes", value: "247", delta: "+12%" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-[9px] text-gray-400 uppercase tracking-wide">{s.label}</p>
            <p className="text-base font-black text-gray-900 mt-0.5">{s.value}</p>
            <span className="text-[9px] font-semibold text-green-600">{s.delta}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <p className="text-xs font-bold text-gray-700 mb-3">Ventas por hora</p>
          <div className="flex items-end gap-1 h-16">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{
                height: `${h}%`,
                background: i === 11
                  ? "linear-gradient(180deg, #BA5AFF, #6B1BB2)"
                  : `rgba(107,27,178,${0.1 + i * 0.07})`,
              }} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <p className="text-xs font-bold text-gray-700 mb-3">Actividad reciente</p>
          {[
            { name: "Venta #1847", time: "hace 1m", amt: "$24.50" },
            { name: "Venta #1846", time: "hace 4m", amt: "$8.00" },
            { name: "Devolución #102", time: "hace 8m", amt: "-$14.00" },
            { name: "Venta #1845", time: "hace 12m", amt: "$32.00" },
          ].map((a) => (
            <div key={a.name} className="flex justify-between py-1.5 border-b border-gray-50 last:border-0">
              <div>
                <p className="text-[10px] font-medium text-gray-700">{a.name}</p>
                <p className="text-[9px] text-gray-400">{a.time}</p>
              </div>
              <span className={`text-[10px] font-bold ${a.amt.startsWith("-") ? "text-red-500" : "text-primary-700"}`}>
                {a.amt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function POSVentasView() {
  const items = [
    { name: "Café Americano", price: 4.50, qty: 1 },
    { name: "Croissant", price: 3.80, qty: 2 },
    { name: "Jugo Natural", price: 5.20, qty: 1 },
  ];
  const subtotal = items.reduce((a, i) => a + i.price * i.qty, 0);
  return (
    <div className="bg-gray-50 h-full flex flex-col sm:flex-row gap-3 p-4">
      {/* Products panel */}
      <div className="flex-1 space-y-3">
        <div className="bg-white rounded-xl p-3 border border-gray-100">
          <input className="w-full text-sm outline-none text-gray-400" placeholder="🔍  Buscar producto..." readOnly />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Bebidas","Comida","Postres","Combos","Especiales","Todo"].map((cat) => (
            <button key={cat} className={`py-2 px-2 rounded-xl text-[10px] font-semibold border transition-colors ${
              cat === "Bebidas" ? "bg-primary-800 text-white border-primary-800" : "bg-white text-gray-600 border-gray-100"
            }`}>{cat}</button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Café Americano", price: "$4.50", emoji: "☕" },
            { name: "Cappuccino", price: "$5.00", emoji: "☕" },
            { name: "Latte", price: "$5.50", emoji: "☕" },
            { name: "Té Verde", price: "$3.50", emoji: "🍵" },
            { name: "Jugo Natural", price: "$5.20", emoji: "🥤" },
            { name: "Agua Mineral", price: "$2.00", emoji: "💧" },
          ].map((prod) => (
            <button key={prod.name} className="bg-white rounded-xl p-2 border border-gray-100 hover:border-primary-200 text-left transition-colors">
              <span className="text-lg block mb-1">{prod.emoji}</span>
              <p className="text-[9px] font-semibold text-gray-800 leading-tight">{prod.name}</p>
              <p className="text-[9px] font-bold text-primary-700">{prod.price}</p>
            </button>
          ))}
        </div>
      </div>
      {/* Ticket panel */}
      <div className="w-full sm:w-44 bg-white rounded-2xl border border-gray-100 flex flex-col">
        <div className="p-3 border-b border-gray-100">
          <p className="text-xs font-bold text-gray-800">Ticket #1848</p>
        </div>
        <div className="flex-1 p-3 space-y-2">
          {items.map((item) => (
            <div key={item.name} className="text-xs">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium text-[10px]">{item.name}</span>
                <span className="font-bold text-gray-900 text-[10px]">${(item.price * item.qty).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-gray-100 space-y-1.5">
          <div className="flex justify-between text-[10px] text-gray-500"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-[10px] text-gray-900 font-black pt-1 border-t border-gray-100"><span>Total</span><span>${(subtotal * 1.07).toFixed(2)}</span></div>
          <button className="w-full bg-primary-800 text-white text-[10px] font-bold py-2 rounded-xl">Cobrar</button>
        </div>
      </div>
    </div>
  );
}

function POSInventarioView() {
  const prods = [
    { name: "Café en Grano", stock: 45, unit: "kg", min: 10, status: "ok" },
    { name: "Leche Entera", stock: 8, unit: "Lt", min: 12, status: "low" },
    { name: "Azúcar", stock: 22, unit: "kg", min: 5, status: "ok" },
    { name: "Harina", stock: 3, unit: "kg", min: 8, status: "critical" },
    { name: "Mantequilla", stock: 15, unit: "kg", min: 5, status: "ok" },
  ];

  const statusConfig = {
    ok: { label: "Normal", cls: "bg-green-100 text-green-700" },
    low: { label: "Bajo", cls: "bg-amber-100 text-amber-700" },
    critical: { label: "Crítico", cls: "bg-red-100 text-red-700" },
  };

  return (
    <div className="bg-gray-50 h-full p-4 space-y-3">
      <div className="flex gap-3">
        <div className="flex-1 bg-white rounded-xl p-3 border border-gray-100">
          <input className="w-full text-sm outline-none text-gray-400" placeholder="🔍  Buscar producto..." readOnly />
        </div>
        <button className="bg-primary-800 text-white text-xs font-bold px-4 rounded-xl">+ Agregar</button>
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-5 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
          {["Producto","Stock","Unidad","Mín.","Estado"].map(h => (
            <p key={h} className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">{h}</p>
          ))}
        </div>
        {prods.map((p) => (
          <div key={p.name} className="grid grid-cols-5 px-4 py-3 border-b border-gray-50 hover:bg-gray-50 items-center">
            <p className="text-xs font-semibold text-gray-800">{p.name}</p>
            <p className="text-xs font-bold text-gray-900">{p.stock}</p>
            <p className="text-xs text-gray-500">{p.unit}</p>
            <p className="text-xs text-gray-500">{p.min}</p>
            <span className={`text-[9px] font-bold px-2 py-1 rounded-full w-fit ${statusConfig[p.status as keyof typeof statusConfig].cls}`}>
              {statusConfig[p.status as keyof typeof statusConfig].label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile card list */}
      <div className="sm:hidden space-y-2">
        {prods.map((p) => {
          const s = statusConfig[p.status as keyof typeof statusConfig];
          return (
            <div key={p.name} className="bg-white rounded-xl px-4 py-3 border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-800">{p.name}</p>
                <p className="text-[9px] text-gray-400 mt-0.5">{p.stock} {p.unit} · mín. {p.min}</p>
              </div>
              <span className={`text-[9px] font-bold px-2 py-1 rounded-full ${s.cls}`}>{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function POSStatsView() {
  const weekly = [
    { day: "Lun", sales: 12400 },
    { day: "Mar", sales: 15800 },
    { day: "Mié", sales: 11200 },
    { day: "Jue", sales: 18240 },
    { day: "Vie", sales: 22100 },
    { day: "Sáb", sales: 28500 },
    { day: "Dom", sales: 19800 },
  ];
  const max = Math.max(...weekly.map((d) => d.sales));
  return (
    <div className="bg-gray-50 h-full p-4 space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Esta Semana", value: "$127,840" },
          { label: "Mejor Día", value: "Sábado" },
          { label: "Crecimiento", value: "+30.2%" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-[9px] text-gray-400 uppercase tracking-wide">{s.label}</p>
            <p className="text-sm font-black text-gray-900">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-4 border border-gray-100">
        <p className="text-xs font-bold text-gray-700 mb-4">Ventas semanales</p>
        <div className="flex items-end gap-2 h-24">
          {weekly.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[8px] text-gray-400 hidden sm:block">${(d.sales / 1000).toFixed(1)}k</span>
              <div className="w-full rounded-t-lg" style={{
                height: `${(d.sales / max) * 100}%`,
                background: d.day === "Sáb"
                  ? "linear-gradient(180deg, #BA5AFF 0%, #6B1BB2 100%)"
                  : "rgba(107,27,178,0.2)",
              }} />
              <span className="text-[9px] text-gray-500 font-medium">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const views: Record<TabId, React.ReactNode> = {
  fidelizacion: <FidelizacionView />,
  "pos-dashboard": <POSDashboardView />,
  "pos-ventas": <POSVentasView />,
  "pos-inventario": <POSInventarioView />,
  "pos-stats": <POSStatsView />,
};

export default function SystemPreview() {
  const [activeTab, setActiveTab] = useState<TabId>("fidelizacion");

  const posTabs = systemTabs.slice(1);

  return (
    <section id="preview" className="py-14 lg:py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-900 opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Monitor size={12} />
            Nuestros Sistemas en Acción
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Mira cómo se ve{" "}
            <span className="gradient-text">el software real</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Interfaces diseñadas para la velocidad y claridad del trabajo diario.
            Sin complejidad innecesaria — solo lo que tu operación necesita.
          </p>
        </motion.div>

        {/* Tab selector — scrollable on mobile */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="flex items-center gap-3 w-max lg:w-auto lg:flex-wrap lg:justify-center mx-auto">
            {/* Fidelización tab */}
            <button
              onClick={() => setActiveTab("fidelizacion")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all border whitespace-nowrap ${
                activeTab === "fidelizacion"
                  ? "bg-primary-800 text-white border-primary-700 shadow-primary"
                  : "bg-white/10 text-white/60 border-white/20 hover:bg-white/15"
              }`}
            >
              <Gift size={15} />
              Sistema de Fidelización
            </button>

            {/* POS tabs */}
            <div className="flex items-center gap-1 bg-white/10 border border-white/20 rounded-2xl p-1 shrink-0">
              <span className="text-[10px] text-white/40 font-bold pl-2 pr-1">POS</span>
              {posTabs.map(({ id, icon: Icon }) => {
                const label = tabLabels[id].replace("POS — ", "");
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                      activeTab === id
                        ? "bg-primary-800 text-white shadow-sm"
                        : "text-white/60 hover:text-white/80"
                    }`}
                  >
                    <Icon size={13} />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mock app */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Window chrome */}
          <div className="bg-gray-900 px-4 py-3 flex items-center gap-3 border-b border-white/10">
            <div className="flex gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center min-w-0">
              <div className="bg-gray-800 rounded-lg px-4 py-1.5 text-xs text-gray-400 font-mono truncate max-w-[200px] sm:max-w-none">
                HAMCSoft — {tabLabels[activeTab]}
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-gray-500 hidden sm:block">En línea</span>
            </div>
          </div>

          {/* Content — taller on mobile to fit stacked layout */}
          <div className="overflow-hidden bg-white" style={{ height: "clamp(420px, 55vw, 400px)" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="h-full overflow-auto scrollbar-hide"
              >
                {views[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footnotes */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            "Datos en tiempo real",
            "Interfaz optimizada para operadores",
            "Responsive en cualquier dispositivo",
            "Actualización continua de funciones",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
