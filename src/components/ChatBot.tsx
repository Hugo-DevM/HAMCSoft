"use client";

import { useState, useRef, useEffect } from "react";
import {
  X,
  ArrowRight,
  Bot,
  User,
  Phone,
  Mail,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

/* ─── Types ─────────────────────────────────────────────── */
type EndType = "hot" | "warm" | "cold" | "disqualified";
type ServiceType = "pos" | "fid" | "dev" | "web" | null;

type Option = {
  label: string;
  value: string;
  next: string;
  score?: number;
  service?: "web" | "pos" | "fid" | "dev";
};

type Step = {
  id: string;
  botMessage: string;
  options?: Option[];
  isEnd?: boolean;
  endType?: EndType;
};

type Message = {
  id: string;
  from: "bot" | "user";
  text: string;
};

/* ─── Conversation tree ──────────────────────────────────── */
const STEPS: Record<string, Step> = {
  /* ── Entrada ─────────────────────────────────────────────── */
  start: {
    id: "start",
    botMessage:
      "¡Hola! Soy el asistente de HAMCSoft. Te haré unas preguntas rápidas para entender cómo podemos ayudarte mejor. ¿Empezamos?",
    options: [
      { label: "¡Claro, adelante!", value: "yes", next: "service_type" },
      {
        label: "Prefiero contactar directo",
        value: "direct",
        next: "direct_contact",
      },
    ],
  },

  /* ── Bifurcación principal ───────────────────────────────── */
  service_type: {
    id: "service_type",
    botMessage: "¿Qué es lo que estás buscando?",
    options: [
      {
        label: "🌐 Sitio web / Landing page / Ecommerce",
        value: "web",
        next: "web_type",
        service: "web",
      },
      {
        label: "🖥️ Sistema de punto de venta (POS)",
        value: "pos",
        next: "pos_business_type",
        service: "pos",
      },
      {
        label: "🎯 Sistema de fidelización de clientes",
        value: "fid",
        next: "fid_business_type",
        service: "fid",
      },
      {
        label: "💻 Aplicación web / Sistema a medida",
        value: "dev",
        next: "dev_idea",
        service: "dev",
      },
      {
        label: "📚 Solo estoy investigando / Soy estudiante",
        value: "student",
        next: "disqualified",
      },
    ],
  },

  /* ══ RAMA DESARROLLO WEB ════════════════════════════════════ */
  web_type: {
    id: "web_type",
    botMessage: "¿Qué tipo de proyecto web necesitas?",
    options: [
      {
        label: "🚀 Landing page de alto impacto",
        value: "landing",
        next: "web_timeline",
        score: 2,
      },
      {
        label: "🏢 Sitio web corporativo / Negocio local",
        value: "corporate",
        next: "web_timeline",
        score: 2,
      },
      {
        label: "🛒 Tienda online / Ecommerce",
        value: "ecommerce",
        next: "web_timeline",
        score: 3,
      },
      {
        label: "🔄 Rediseño de web existente",
        value: "redesign",
        next: "web_timeline",
        score: 2,
      },
      {
        label: "🤷 Aún no lo tengo claro",
        value: "unclear",
        next: "web_timeline",
        score: 0,
      },
    ],
  },
  web_timeline: {
    id: "web_timeline",
    botMessage: "¿Para cuándo necesitas tener lista tu web?",
    options: [
      {
        label: "⚡ Lo antes posible",
        value: "asap",
        next: "web_budget",
        score: 4,
      },
      {
        label: "📅 En el próximo mes",
        value: "1m",
        next: "web_budget",
        score: 3,
      },
      {
        label: "🗓️ En los próximos 3 meses",
        value: "3m",
        next: "web_budget",
        score: 2,
      },
      {
        label: "🤔 Aún no lo sé",
        value: "unknown",
        next: "web_budget",
        score: 0,
      },
    ],
  },
  web_budget: {
    id: "web_budget",
    botMessage: "¿Tienes presupuesto asignado para tu proyecto web?",
    options: [
      {
        label: "💰 Sí, tengo presupuesto definido",
        value: "yes",
        next: "result_web",
        score: 3,
      },
      {
        label: "📊 Estoy cotizando opciones",
        value: "estimating",
        next: "result_web",
        score: 1,
      },
      {
        label: "❓ Aún no hemos hablado de presupuesto",
        value: "no",
        next: "result_web",
        score: 0,
      },
    ],
  },
  result_web: { id: "result_web", botMessage: "", isEnd: true },

  /* ══ RAMA POS ════════════════════════════════════════════════ */
  pos_business_type: {
    id: "pos_business_type",
    botMessage: "¿Qué tipo de negocio tienes?",
    options: [
      {
        label: "🍽️ Restaurante / Bar / Cafetería",
        value: "restaurant",
        next: "pos_locations",
        score: 2,
      },
      {
        label: "🛍️ Tienda / Retail / Abarrotes",
        value: "retail",
        next: "pos_locations",
        score: 2,
      },
      {
        label: "🏢 Otro tipo de negocio",
        value: "other",
        next: "pos_locations",
        score: 1,
      },
    ],
  },
  pos_locations: {
    id: "pos_locations",
    botMessage: "¿Cuántos puntos de venta o sucursales tienes actualmente?",
    options: [
      { label: "1 sucursal", value: "1", next: "pos_decision_maker", score: 1 },
      {
        label: "2 a 5 sucursales",
        value: "2-5",
        next: "pos_decision_maker",
        score: 3,
      },
      {
        label: "6 o más sucursales",
        value: "6+",
        next: "pos_decision_maker",
        score: 5,
      },
      {
        label: "Ninguna, apenas estoy empezando",
        value: "0",
        next: "pos_decision_maker",
        score: 0,
      },
    ],
  },
  pos_decision_maker: {
    id: "pos_decision_maker",
    botMessage:
      "¿Eres tú quien toma las decisiones de inversión en tu negocio?",
    options: [
      {
        label: "Sí, yo decido las compras",
        value: "yes",
        next: "pos_timeline",
        score: 2,
      },
      {
        label: "No, debo consultarlo con alguien",
        value: "no",
        next: "pos_timeline",
        score: 0,
      },
    ],
  },
  pos_timeline: {
    id: "pos_timeline",
    botMessage: "¿En qué plazo te gustaría implementar el sistema POS?",
    options: [
      {
        label: "⚡ Lo antes posible",
        value: "asap",
        next: "result_pos",
        score: 4,
      },
      {
        label: "📅 En los próximos 3 meses",
        value: "3m",
        next: "result_pos",
        score: 2,
      },
      {
        label: "🗓️ En 6 meses o más",
        value: "6m",
        next: "result_pos",
        score: 1,
      },
      {
        label: "🤔 Aún no lo sé",
        value: "unknown",
        next: "result_pos",
        score: 0,
      },
    ],
  },
  result_pos: { id: "result_pos", botMessage: "", isEnd: true },

  /* ══ RAMA FIDELIZACIÓN ═══════════════════════════════════════ */
  fid_business_type: {
    id: "fid_business_type",
    botMessage: "¿Qué tipo de negocio tienes?",
    options: [
      {
        label: "🍽️ Restaurante / Bar / Cafetería",
        value: "restaurant",
        next: "fid_current",
        score: 2,
      },
      {
        label: "🛍️ Tienda / Retail / Abarrotes",
        value: "retail",
        next: "fid_current",
        score: 2,
      },
      {
        label: "💇 Salón / Spa / Servicio local",
        value: "service",
        next: "fid_current",
        score: 2,
      },
      {
        label: "🏢 Otro tipo de negocio",
        value: "other",
        next: "fid_current",
        score: 1,
      },
    ],
  },
  fid_current: {
    id: "fid_current",
    botMessage: "¿Actualmente tienes algún programa de lealtad o fidelización?",
    options: [
      {
        label: "❌ No, no tenemos nada",
        value: "none",
        next: "fid_customers",
        score: 2,
      },
      {
        label: "📋 Sí, pero es manual (tarjetas, sellos)",
        value: "manual",
        next: "fid_customers",
        score: 3,
      },
      {
        label: "💾 Sí, usamos un sistema digital",
        value: "digital",
        next: "fid_customers",
        score: 1,
      },
    ],
  },
  fid_customers: {
    id: "fid_customers",
    botMessage: "¿Cuántos clientes aproximadamente visitan tu negocio al mes?",
    options: [
      {
        label: "Menos de 200 clientes",
        value: "low",
        next: "fid_decision_maker",
        score: 0,
      },
      {
        label: "Entre 200 y 1,000 clientes",
        value: "mid",
        next: "fid_decision_maker",
        score: 2,
      },
      {
        label: "Más de 1,000 clientes",
        value: "high",
        next: "fid_decision_maker",
        score: 4,
      },
    ],
  },
  fid_decision_maker: {
    id: "fid_decision_maker",
    botMessage:
      "¿Eres tú quien toma las decisiones de inversión en tu negocio?",
    options: [
      {
        label: "Sí, yo decido las compras",
        value: "yes",
        next: "fid_timeline",
        score: 2,
      },
      {
        label: "No, debo consultarlo con alguien",
        value: "no",
        next: "fid_timeline",
        score: 0,
      },
    ],
  },
  fid_timeline: {
    id: "fid_timeline",
    botMessage:
      "¿En qué plazo te gustaría implementar el sistema de fidelización?",
    options: [
      {
        label: "⚡ Lo antes posible",
        value: "asap",
        next: "result_fid",
        score: 4,
      },
      {
        label: "📅 En los próximos 3 meses",
        value: "3m",
        next: "result_fid",
        score: 2,
      },
      {
        label: "🗓️ En 6 meses o más",
        value: "6m",
        next: "result_fid",
        score: 1,
      },
      {
        label: "🤔 Aún no lo sé",
        value: "unknown",
        next: "result_fid",
        score: 0,
      },
    ],
  },
  result_fid: { id: "result_fid", botMessage: "", isEnd: true },

  /* ══ RAMA DESARROLLO DE SOFTWARE ════════════════════════════ */
  dev_idea: {
    id: "dev_idea",
    botMessage: "¿Tienes ya una idea definida del software que necesitas?",
    options: [
      {
        label: "✅ Sí, tengo el proyecto claro",
        value: "clear",
        next: "dev_type",
        score: 2,
      },
      {
        label: "💡 Tengo una idea general",
        value: "general",
        next: "dev_type",
        score: 1,
      },
      {
        label: "🔍 Apenas estoy explorando",
        value: "exploring",
        next: "dev_type",
        score: 0,
      },
    ],
  },
  dev_type: {
    id: "dev_type",
    botMessage: "¿Qué tipo de software necesitas desarrollar?",
    options: [
      {
        label: "🌐 Aplicación web",
        value: "web",
        next: "dev_budget",
        score: 2,
      },
      { label: "📱 App móvil", value: "mobile", next: "dev_budget", score: 2 },
      {
        label: "🏗️ Sistema interno / ERP / CRM",
        value: "erp",
        next: "dev_budget",
        score: 2,
      },
      {
        label: "🤷 No lo tengo claro aún",
        value: "unclear",
        next: "dev_budget",
        score: 0,
      },
    ],
  },
  dev_budget: {
    id: "dev_budget",
    botMessage: "¿Tienen presupuesto asignado para este proyecto?",
    options: [
      {
        label: "💰 Sí, tenemos presupuesto definido",
        value: "yes",
        next: "dev_timeline",
        score: 3,
      },
      {
        label: "📊 Estamos estimando el costo",
        value: "estimating",
        next: "dev_timeline",
        score: 1,
      },
      {
        label: "❓ Aún no hemos hablado de presupuesto",
        value: "no",
        next: "dev_timeline",
        score: 0,
      },
    ],
  },
  dev_timeline: {
    id: "dev_timeline",
    botMessage: "¿En qué plazo necesitan tener el software listo?",
    options: [
      {
        label: "⚡ Urgente (menos de 3 meses)",
        value: "urgent",
        next: "result_dev",
        score: 4,
      },
      {
        label: "📅 Entre 3 y 6 meses",
        value: "mid",
        next: "result_dev",
        score: 2,
      },
      {
        label: "🗓️ Más de 6 meses",
        value: "long",
        next: "result_dev",
        score: 1,
      },
      {
        label: "🤔 Aún no está definido",
        value: "unknown",
        next: "result_dev",
        score: 0,
      },
    ],
  },
  result_dev: { id: "result_dev", botMessage: "", isEnd: true },

  /* ══ Finales estáticos ═══════════════════════════════════════ */
  direct_contact: {
    id: "direct_contact",
    botMessage:
      "¡Con gusto! Puedes contactarnos ahora mismo y un asesor te atenderá.",
    isEnd: true,
    endType: "hot",
  },
  disqualified: {
    id: "disqualified",
    botMessage:
      "¡Gracias por visitarnos! Si en el futuro tienes un proyecto o un negocio, aquí estaremos. 😊",
    isEnd: true,
    endType: "disqualified",
  },
};

/* ─── Mensajes finales por servicio ──────────────────────── */
const FINAL_MESSAGES = {
  web: {
    hot: "¡Proyecto web ideal para HAMCSoft! 🚀 Nos encantaría construirlo contigo. Un especialista te contactará muy pronto.",
    warm: "¡Tu proyecto web tiene mucho potencial! 👍 Te recomendamos una llamada para explorar cómo podemos hacerlo realidad.",
    cold: "Gracias por compartir. Cuando estés listo para lanzar tu web, aquí estaremos. 😊",
  },
  pos: {
    hot: "¡Excelente perfil! 🎉 Tu negocio es exactamente el tipo al que HAMCSoft genera mayor impacto. Un asesor te contactará muy pronto.",
    warm: "¡Buen perfil! 👍 Tienes potencial para aprovechar HAMCSoft al máximo. Te recomendamos una llamada sin compromiso.",
    cold: "Gracias por compartir. Por ahora quizás no es el momento ideal, pero cuando estés listo, aquí estaremos. 😊",
  },
  fid: {
    hot: "¡Perfil ideal para nuestro sistema de fidelización! 🎯 Podemos ayudarte a retener y hacer crecer tu base de clientes. Un asesor te contactará muy pronto.",
    warm: "¡Tu negocio tiene buen potencial para fidelizar clientes! 👍 Te recomendamos una llamada para ver cómo podemos ayudarte.",
    cold: "Gracias por compartir. Cuando estés listo para dar el siguiente paso con tu programa de lealtad, aquí estaremos. 😊",
  },
  dev: {
    hot: "¡Proyecto con mucho potencial! 🚀 Nos encantaría trabajar contigo. Un desarrollador senior de HAMCSoft se pondrá en contacto pronto.",
    warm: "¡Tu proyecto suena interesante! 👍 Te recomendamos una llamada para explorar cómo podemos construirlo juntos.",
    cold: "Gracias por compartir tu idea. Cuando tengas más claridad sobre el proyecto, con gusto podemos retomar la conversación. 😊",
  },
};

/* ─── Tarjeta final por resultado ───────────────────────── */
const END_CONTENT: Record<
  EndType,
  Record<"pos" | "fid" | "dev" | "web", { title: string; desc: string }> & {
    color: string;
  }
> = {
  hot: {
    color: "from-emerald-500 to-green-400",
    web: {
      title: "¡Tu web está lista para despegar!",
      desc: "Un especialista revisará tu proyecto y te contactará muy pronto. También puedes escribirnos ahora.",
    },
    pos: {
      title: "¡Eres un cliente ideal para HAMCSoft!",
      desc: "Un asesor se pondrá en contacto contigo muy pronto. También puedes escribirnos ahora mismo.",
    },
    fid: {
      title: "¡Tu negocio es perfecto para fidelización!",
      desc: "Un asesor te contactará pronto para mostrarte cómo aumentar la retención de tus clientes.",
    },
    dev: {
      title: "¡Tu proyecto es perfecto para HAMCSoft!",
      desc: "Un desarrollador senior revisará tu caso y te contactará pronto. También puedes escribirnos ahora.",
    },
  },
  warm: {
    color: "from-primary-600 to-purple-400",
    web: {
      title: "¡Tu proyecto web tiene potencial!",
      desc: "Agenda una llamada para conocer cómo podemos construir tu web juntos. Sin compromiso.",
    },
    pos: {
      title: "¡Tienes buen potencial!",
      desc: "Te recomendamos una llamada exploratoria sin compromiso para conocer más sobre tu negocio.",
    },
    fid: {
      title: "¡Buen candidato para fidelización!",
      desc: "Agenda una llamada para conocer cómo podemos ayudarte a retener y hacer crecer tu clientela.",
    },
    dev: {
      title: "¡Tu proyecto tiene potencial!",
      desc: "Agenda una llamada con nuestro equipo para explorar cómo podemos hacerlo realidad.",
    },
  },
  cold: {
    color: "from-gray-500 to-gray-400",
    web: {
      title: "Gracias por tu interés",
      desc: "Cuando tengas más claro tu proyecto web, aquí estaremos para ayudarte.",
    },
    pos: {
      title: "Gracias por tu interés",
      desc: "Cuando tengas mayor claridad sobre tus planes, con gusto podemos orientarte.",
    },
    fid: {
      title: "Gracias por tu interés",
      desc: "Cuando estés listo para potenciar la lealtad de tus clientes, aquí estaremos.",
    },
    dev: {
      title: "Gracias por compartir",
      desc: "Cuando tengas más definido el proyecto, aquí estaremos para ayudarte.",
    },
  },
  disqualified: {
    color: "from-gray-400 to-gray-300",
    web: {
      title: "¡Hasta pronto!",
      desc: "Si en el futuro necesitas un sitio web, aquí estaremos.",
    },
    pos: {
      title: "¡Hasta pronto!",
      desc: "Si en el futuro tienes un negocio, aquí estaremos para ayudarte.",
    },
    fid: {
      title: "¡Hasta pronto!",
      desc: "Si en el futuro tienes un negocio, aquí estaremos.",
    },
    dev: {
      title: "¡Hasta pronto!",
      desc: "Si en el futuro tienes un proyecto, aquí estaremos.",
    },
  },
};

/* ─── Component ──────────────────────────────────────────── */
export default function ChatBot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<Step>(STEPS.start);
  const [score, setScore] = useState(0);
  const [serviceType, setServiceType] = useState<"pos" | "fid" | "dev" | "web">("web");
  const [endType, setEndType] = useState<EndType | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  /* Contact capture */
  const [pendingResult, setPendingResult] = useState<{
    endType: EndType;
    svc: "pos" | "fid" | "dev";
    finalMsg: string;
  } | null>(null);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const chatRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;
    const dispatch = () =>
      window.dispatchEvent(
        new CustomEvent("chatbot:resize", { detail: { height: el.offsetHeight } })
      );
    dispatch();
    const ro = new ResizeObserver(dispatch);
    ro.observe(el);
    return () => {
      ro.disconnect();
      window.dispatchEvent(new CustomEvent("chatbot:close"));
    };
  }, []);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    showBotMessage(STEPS.start.botMessage, () => setOptionsVisible(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, optionsVisible, pendingResult]);

  function showBotMessage(text: string, onDone?: () => void) {
    setIsTyping(true);
    setOptionsVisible(false);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, from: "bot", text },
      ]);
      onDone?.();
    }, 900);
  }

  function handleOption(option: Option) {
    const newScore = score + (option.score ?? 0);
    setScore(newScore);
    setOptionsVisible(false);

    /* Track service type when chosen */
    if (option.service) setServiceType(option.service);

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, from: "user", text: option.label },
    ]);

    /* Disqualify shortcut */
    if (option.next === "disqualified") {
      setTimeout(() => {
        showBotMessage(STEPS.disqualified.botMessage, () => {
          setCurrentStep(STEPS.disqualified);
          setEndType("disqualified");
        });
      }, 300);
      return;
    }

    const next = STEPS[option.next];
    if (!next) return;

    /* Resolve result steps dynamically — first collect contact info */
    if (
      next.id === "result_pos" ||
      next.id === "result_fid" ||
      next.id === "result_dev" ||
      next.id === "result_web"
    ) {
      const svc =
        next.id === "result_dev"
          ? "dev"
          : next.id === "result_fid"
            ? "fid"
            : next.id === "result_web"
              ? "web"
              : "pos";
      const thresholds =
        svc === "dev" || svc === "web" ? { hot: 6, warm: 3 } : { hot: 8, warm: 4 };
      const resolved: EndType =
        newScore >= thresholds.hot
          ? "hot"
          : newScore >= thresholds.warm
            ? "warm"
            : "cold";

      setTimeout(() => {
        showBotMessage(
          "¡Casi listo! Para que un asesor pueda contactarte, ¿me compartes tu nombre y número de WhatsApp?",
          () =>
            setPendingResult({
              endType: resolved,
              svc,
              finalMsg: FINAL_MESSAGES[svc][resolved],
            }),
        );
      }, 300);
      return;
    }

    setTimeout(() => {
      showBotMessage(next.botMessage, () => {
        setCurrentStep(next);
        if (!next.isEnd) setOptionsVisible(true);
        else if (next.endType) setEndType(next.endType);
      });
    }, 300);
  }

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!pendingResult || !contactName.trim() || !contactPhone.trim()) return;
    const { endType: resolved, svc, finalMsg } = pendingResult;

    setSending(true);
    setSendError(false);

    const QUAL_LABELS: Record<EndType, string> = {
      hot: "⭐ Cliente calificado",
      warm: "👍 Cliente potencial",
      cold: "❄️ Lead frío",
      disqualified: "Descalificado",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          lead_name: contactName.trim(),
          lead_phone: contactPhone.trim(),
          lead_service: SERVICE_LABELS[svc],
          lead_score: score,
          lead_status: QUAL_LABELS[resolved],
        },
        EMAILJS_PUBLIC_KEY,
      );
    } catch {
      setSendError(true);
      setSending(false);
      return;
    }

    setSending(false);

    /* Add user message showing their info */
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        from: "user",
        text: `${contactName.trim()} · ${contactPhone.trim()}`,
      },
    ]);
    setPendingResult(null);
    setServiceType(svc as "pos" | "fid" | "dev" | "web");

    setTimeout(() => {
      showBotMessage(finalMsg, () => setEndType(resolved));
    }, 300);
  }

  const SERVICE_LABELS: Record<"pos" | "fid" | "dev" | "web", string> = {
    web: "Desarrollo Web",
    pos: "Sistema POS",
    fid: "Sistema de Fidelización",
    dev: "Aplicación / Sistema a Medida",
  };

  function buildWhatsAppMsg() {
    const svc = SERVICE_LABELS[serviceType];
    return `Hola, quiero saber más sobre ${svc} con HAMCSoft.`;
  }

  const endContent = endType ? END_CONTENT[endType] : null;
  const endTexts = endContent
    ? endContent[serviceType]
    : null;
  const showContacts = endType === "hot" || endType === "warm";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      ref={chatRef}
      className="fixed bottom-6 right-6 z-50 w-[370px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
      style={{ maxHeight: "min(640px, calc(100vh - 3rem))" }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-5 py-4 shrink-0"
        style={{
          background: "linear-gradient(135deg, #4A0F7E 0%, #9333EA 100%)",
        }}
      >
        <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center shrink-0">
          <Bot size={18} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm leading-tight">
            Asistente HAMCSoft
          </p>
          <p className="text-white/70 text-xs">Cuéntanos sobre tu proyecto</p>
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  msg.from === "bot" ? "bg-primary-100" : "bg-primary-600"
                }`}
              >
                {msg.from === "bot" ? (
                  <Bot size={14} className="text-primary-700" />
                ) : (
                  <User size={14} className="text-white" />
                )}
              </div>
              <div
                className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.from === "bot"
                    ? "bg-white text-gray-800 shadow-sm rounded-tl-sm"
                    : "bg-primary-600 text-white rounded-tr-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex gap-2"
            >
              <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                <Bot size={14} className="text-primary-700" />
              </div>
              <div className="bg-white shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full block"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* End card */}
        <AnimatePresence>
          {endContent && endTexts && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-2"
            >
              <div
                className={`bg-gradient-to-br ${endContent.color} rounded-2xl p-4 text-white mb-3`}
              >
                <p className="font-bold text-sm leading-snug mb-1">
                  {endTexts.title}
                </p>
                <p className="text-white/85 text-xs leading-relaxed">
                  {endTexts.desc}
                </p>
              </div>

              {showContacts && (
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/523222151711?text=${encodeURIComponent(buildWhatsAppMsg())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba58] transition-colors text-white font-semibold text-sm px-4 py-3 rounded-xl w-full"
                  >
                    <MessageCircle size={16} />
                    Escribir por WhatsApp
                    <ArrowRight size={14} className="ml-auto" />
                  </a>
                  <a
                    href="mailto:info@hamcsoft.com"
                    className="flex items-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700 font-semibold text-sm px-4 py-3 rounded-xl w-full"
                  >
                    <Mail size={16} className="text-primary-600" />
                    hamcsoftmx@gmail.com
                    <ArrowRight size={14} className="ml-auto text-gray-400" />
                  </a>
                  <a
                    href="tel:+523222151711"
                    className="flex items-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700 font-semibold text-sm px-4 py-3 rounded-xl w-full"
                  >
                    <Phone size={16} className="text-primary-600" />
                    +52 322-215-17-11
                    <ArrowRight size={14} className="ml-auto text-gray-400" />
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={bottomRef} />
      </div>

      {/* Contact form */}
      <AnimatePresence>
        {pendingResult && (
          <motion.form
            onSubmit={handleContactSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="px-4 py-3 bg-white border-t border-gray-100 space-y-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-200"
            />
            <input
              type="tel"
              placeholder="Tu número de WhatsApp"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-200"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {sending ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Enviando...
                </>
              ) : (
                <>
                  Enviar mis datos <ArrowRight size={14} />
                </>
              )}
            </button>
            {sendError && (
              <p className="text-xs text-red-500 text-center">
                No se pudo enviar. Intenta escribirnos directamente por
                WhatsApp.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>

      {/* Options */}
      <AnimatePresence>
        {optionsVisible &&
          currentStep.options &&
          !endType &&
          !pendingResult && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="px-4 py-3 bg-white border-t border-gray-100 space-y-2 shrink-0"
            >
              {currentStep.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleOption(opt)}
                  className="w-full text-left px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 font-medium hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 transition-all duration-150"
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          )}
      </AnimatePresence>
    </motion.div>
  );
}
