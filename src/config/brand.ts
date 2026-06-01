// ─── CONFIGURACIÓN DE MARCA ───────────────────────────────────────────────────
// Cambia el nombre de la empresa, colores, textos y links desde aquí.
// ─────────────────────────────────────────────────────────────────────────────

export const brand = {
  name: "Zyntell",
  tagline: "Automatización inteligente para negocios modernos.",
  description:
    "Creamos asistentes de IA para WhatsApp que transforman la atención al cliente.",

  contact: {
    whatsapp: "https://wa.me/523324913241?text=hola%20quiero%20probar%20una%20demo%20de%20como%20se%20veria%20en%20mi%20negocio",
    email: "soporte@zyntell.com.mx",
    calendly: "#",
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Casos de uso", href: "#casos-de-uso" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    badge: "Automatización con IA · Disponible 24/7",
    headline: "Automatiza la atención de tu negocio con agentes de IA",
    subheadline:
      "Creamos asistentes inteligentes para WhatsApp que responden clientes, agendan citas, conectan con Google Calendar y te dan un dashboard privado para controlar cada conversación.",
    cta1: "Solicitar demo",
    cta2: "Ver cómo funciona",
  },

  problems: {
    title: "Tu negocio pierde clientes cuando tarda en responder",
    subtitle: "Cada mensaje sin contestar es una oportunidad que se va.",
    items: [
      {
        icon: "MessageX",
        title: "Mensajes sin contestar",
        desc: "Clientes sin respuesta se van con la competencia.",
      },
      {
        icon: "CalendarX",
        title: "Citas olvidadas",
        desc: "Sin agenda automática se pierden reservas y hay confusión.",
      },
      {
        icon: "RotateCcw",
        title: "Preguntas repetitivas",
        desc: "Tu equipo responde lo mismo todos los días: precios y horarios.",
      },
      {
        icon: "Shuffle",
        title: "Sin control",
        desc: "Sin un dashboard, no sabes qué se habló ni qué falta.",
      },
    ],
  },

  solutions: {
    title: "Un asistente de IA trabajando por tu negocio 24/7",
    subtitle: "No es solo un bot. Es un sistema completo de atención al cliente, personalizado para tu negocio.",
    items: [
      {
        icon: "MessageCircle",
        title: "Respuestas automáticas 24/7",
        desc: "Atiende clientes al instante, día y noche, en lenguaje natural.",
      },
      {
        icon: "CalendarCheck",
        title: "Agenda de citas integrada",
        desc: "Clientes agendan, modifican y cancelan directo en el chat con sync a Google Calendar.",
      },
      {
        icon: "LayoutDashboard",
        title: "Dashboard privado",
        desc: "Controla todas las conversaciones, citas y métricas desde un panel exclusivo.",
      },
      {
        icon: "UserCheck",
        title: "Modo IA / Humano",
        desc: "Toma el control cuando quieras. El asistente espera y retoma cuando tú lo indiques.",
      },
    ],
  },

  howItWorks: {
    title: "Cómo funciona",
    subtitle: "En menos de una semana, tu asistente está activo y atendiendo clientes.",
    steps: [
      {
        number: "01",
        title: "Configuramos tu negocio",
        desc: "Levantamos un formulario contigo para entender tus servicios, precios, horarios y flujos de atención.",
      },
      {
        number: "02",
        title: "Conectamos tu WhatsApp",
        desc: "Vinculamos tu número de WhatsApp Business con nuestra plataforma de forma segura.",
      },
      {
        number: "03",
        title: "Entrenamos el asistente",
        desc: "Configuramos la IA con tu información: servicios, horarios, preguntas frecuentes y tono de tu marca.",
      },
      {
        number: "04",
        title: "Empiezas a recibir clientes",
        desc: "El asistente comienza a responder, agendar citas y sincronizar con tu calendario de manera automática.",
      },
    ],
  },

  useCases: [
    {
      icon: "Scissors",
      title: "Barberías",
      desc: "Agenda cortes, confirma horarios y responde sobre servicios disponibles sin intervención manual.",
    },
    {
      icon: "Sparkles",
      title: "Estéticas",
      desc: "Reserva citas de tratamientos, envía recordatorios y gestiona cancelaciones automáticamente.",
    },
    {
      icon: "Stethoscope",
      title: "Clínicas",
      desc: "Captura consultas, filtra urgencias y agenda citas con el médico correcto.",
    },
    {
      icon: "Star",
      title: "Dentistas",
      desc: "Programa revisiones, limpiezas y seguimientos postratamiento sin llamadas telefónicas.",
    },
    {
      icon: "Briefcase",
      title: "Consultorios",
      desc: "Primeras consultas, seguimiento de pacientes y gestión de historial básico.",
    },
    {
      icon: "UtensilsCrossed",
      title: "Restaurantes",
      desc: "Reservaciones de mesa, pedidos para llevar y respuestas sobre menú y horarios.",
    },
    {
      icon: "Building2",
      title: "Inmobiliarias",
      desc: "Captura prospectos, agenda visitas y da información de propiedades disponibles.",
    },
    {
      icon: "Laptop",
      title: "Servicios profesionales",
      desc: "Presupuestos, agendas de reuniones y atención inicial para abogados, contadores y más.",
    },
  ],

  benefits: {
    title: "Más respuestas, más citas, menos trabajo manual",
    subtitle: "Los resultados que notan nuestros clientes en las primeras semanas de implementación.",
    items: [
      { metric: "100%", label: "Respuestas al instante", desc: "Sin tiempos de espera para tus clientes." },
      { metric: "24/7", label: "Disponibilidad continua", desc: "Funciona incluso cuando tu equipo descansa." },
      { metric: "-60%", label: "Menos carga operativa", desc: "Tu personal se enfoca en lo que realmente importa." },
      { metric: "+40%", label: "Más citas confirmadas", desc: "El proceso de agenda se vuelve fluido y sin fricciones." },
    ],
  },

  pricing: {
    title: "Planes diseñados para cada etapa",
    subtitle:
      "Sin contratos largos. Sin letra pequeña. Implementación rápida y soporte real.",
    plans: [
      {
        name: "Piloto",
        description: "Ideal para empezar y validar el sistema en tu negocio.",
        highlight: false,
        badge: null,
        features: [
          "Bot de WhatsApp activo 24/7",
          "Dashboard privado básico",
          "Configuración inicial",
          "Respuestas a preguntas frecuentes",
          "Base de conocimiento del negocio",
          "Soporte por email",
        ],
        cta: "Cotizar Piloto",
      },
      {
        name: "Profesional",
        description: "Para negocios que quieren automatizar citas y calendario.",
        highlight: true,
        badge: "Más popular",
        features: [
          "Todo lo del plan Piloto",
          "Agenda de citas integrada",
          "Sincronización con Google Calendar",
          "Modo IA / Humano (toma de control)",
          "Notificaciones automáticas",
          "Soporte mensual incluido",
        ],
        cta: "Cotizar Profesional",
      },
      {
        name: "Premium",
        description: "Automatizaciones avanzadas y flujos a medida para tu operación.",
        highlight: false,
        badge: null,
        features: [
          "Todo lo del plan Profesional",
          "Automatizaciones personalizadas",
          "Integraciones con sistemas externos",
          "Reportes y análisis de conversaciones",
          "Flujos de atención a medida",
          "Soporte prioritario dedicado",
        ],
        cta: "Cotizar Premium",
      },
    ],
    cta: "Cotizar mi implementación",
  },

  trust: {
    title: "Tu información, bajo tu control",
    subtitle: "Diseñamos el sistema pensando en la privacidad y el control total de cada negocio.",
    items: [
      {
        icon: "Database",
        title: "Base de datos propia",
        desc: "Cada negocio tiene su propia base de datos aislada. Tu información no se mezcla con la de otros clientes.",
      },
      {
        icon: "Smartphone",
        title: "Tu número de WhatsApp",
        desc: "Conectas tu propio número de WhatsApp Business. No usamos números genéricos compartidos.",
      },
      {
        icon: "Lock",
        title: "Dashboard protegido",
        desc: "Acceso exclusivo con usuario y contraseña. Solo tú y tu equipo pueden ver las conversaciones.",
      },
      {
        icon: "UserCog",
        title: "Control humano siempre disponible",
        desc: "Puedes tomar el control de cualquier conversación en cualquier momento con un solo clic.",
      },
    ],
  },

  faq: [
    {
      q: "¿Necesito cambiar mi número de WhatsApp?",
      a: "No. Conectamos tu número de WhatsApp Business actual. Tus clientes seguirán escribiendo al mismo número que ya conocen.",
    },
    {
      q: "¿La IA puede agendar citas automáticamente?",
      a: "Sí. El asistente propone horarios disponibles, confirma citas y las sincroniza con tu Google Calendar en tiempo real.",
    },
    {
      q: "¿Puedo intervenir manualmente en las conversaciones?",
      a: "Absolutamente. El Modo Humano te permite tomar el control de cualquier conversación. El asistente espera hasta que tú indiques que puede continuar.",
    },
    {
      q: "¿Cuánto tarda la implementación?",
      a: "La mayoría de las implementaciones están listas en menos de una semana, dependiendo de la complejidad de los flujos.",
    },
    {
      q: "¿Qué pasa si la IA no sabe cómo responder?",
      a: "El sistema tiene fallback automático: si la IA no puede responder con precisión, notifica a tu equipo para intervenir sin dejar al cliente sin atención.",
    },
  ],

  finalCta: {
    title: "Convierte tu WhatsApp en un asistente inteligente",
    subtitle:
      "Automatiza respuestas, agenda citas y atiende clientes incluso cuando tu equipo está ocupado.",
    cta: "Solicitar demo",
  },
};
