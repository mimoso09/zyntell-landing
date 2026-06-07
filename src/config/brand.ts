// ─── CONFIGURACIÓN DE MARCA ───────────────────────────────────────────────────
// Cambia el nombre de la empresa, colores, textos y links desde aquí.
// ─────────────────────────────────────────────────────────────────────────────

export const brand = {
  name: "Zyntell",
  tagline: "Soluciones de inteligencia artificial para negocios modernos.",
  description:
    "Estudio de soluciones con IA: agentes de WhatsApp, automatización, páginas web, apps, dashboards, contenido y consultoría.",

  contact: {
    whatsapp: "https://wa.me/523324913241?text=Hola%2C%20quiero%20solicitar%20una%20demo%20de%20Zyntell%20para%20automatizar%20la%20atenci%C3%B3n%20de%20mi%20negocio%20con%20IA.",
    email: "soporte@zyntell.com.mx",
    calendly: "#",
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Casos de uso", href: "#casos-de-uso" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    badge: "Soluciones con IA · WhatsApp, Web, Apps y más",
    headline: "Automatiza y escala tu negocio con inteligencia artificial",
    subheadline:
      "Creamos agentes de WhatsApp, páginas web, aplicaciones, contenido y automatizaciones con IA para que tu negocio atienda mejor, venda más y reduzca tareas repetitivas.",
    cta1: "Solicitar demo",
    cta2: "Ver cómo funciona",
  },

  services: {
    badge: "Servicios",
    title: "Soluciones de IA para tu negocio",
    subtitle:
      "Diseñamos, implementamos y conectamos inteligencia artificial real a tu operación. Nuestro producto estrella son los agentes de WhatsApp, pero podemos automatizar mucho más.",
    advantage:
      "No solo instalamos herramientas: diseñamos, implementamos y conectamos soluciones de IA reales para cada negocio.",
    items: [
      {
        icon: "MessageCircle",
        title: "Agentes de IA para WhatsApp",
        desc: "Asistentes inteligentes que responden clientes, toman datos, atienden preguntas frecuentes y permiten cambiar a modo humano desde un panel privado.",
        featured: true,
        tag: "Producto principal",
      },
      {
        icon: "Workflow",
        title: "Automatización de procesos",
        desc: "Automatizamos tareas repetitivas como registro de clientes, seguimiento de pedidos, recordatorios, reportes, cotizaciones y respuestas frecuentes.",
      },
      {
        icon: "Globe",
        title: "Páginas web y landing pages",
        desc: "Creamos sitios modernos, rápidos y optimizados para captar clientes, conectar formularios, WhatsApp y sistemas internos.",
      },
      {
        icon: "LayoutDashboard",
        title: "Aplicaciones y dashboards",
        desc: "Desarrollamos paneles, sistemas internos y aplicaciones a la medida para controlar clientes, citas, ventas, mensajes y procesos.",
      },
      {
        icon: "Video",
        title: "Videos y contenido con IA",
        desc: "Creamos videos, anuncios, piezas para redes sociales y contenido visual apoyado con inteligencia artificial para mejorar la presencia digital del negocio.",
      },
      {
        icon: "Lightbulb",
        title: "Consultoría de IA",
        desc: "Analizamos tu negocio y detectamos oportunidades reales para aplicar inteligencia artificial sin complicarte con herramientas técnicas.",
      },
    ],
    diagnosis: {
      title: "¿Quieres automatizar otra parte de tu negocio?",
      subtitle:
        "Cuéntanos qué procesos te quitan más tiempo y diseñamos una solución con IA a tu medida.",
      cta: "Solicitar diagnóstico",
      message:
        "Hola, quiero solicitar un diagnóstico para automatizar procesos de mi negocio con inteligencia artificial.",
    },
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
    eyebrow: "Planes para agentes de WhatsApp con IA",
    title: "Planes diseñados para cada etapa",
    subtitle: "Los planes Básico y Profesional corresponden principalmente al Agente de WhatsApp con IA. Sin contratos largos. Sin letra pequeña.",
    plans: [
      {
        name: "Básico",
        description: "Ideal para negocios que quieren responder automáticamente por WhatsApp.",
        highlight: false,
        badge: null,
        features: [
          "Bot de WhatsApp activo 24/7",
          "Dashboard privado",
          "Configuración inicial",
          "Respuestas a preguntas frecuentes",
          "Base de conocimiento del negocio",
          "Modo IA / Humano",
          "Soporte por email",
        ],
        cta: "Cotizar Básico",
      },
      {
        name: "Profesional",
        description: "Para negocios que quieren automatizar atención, citas y calendario.",
        highlight: true,
        badge: "Más recomendado",
        features: [
          "Todo lo del plan Básico",
          "Agenda de citas integrada",
          "Sincronización con Google Calendar",
          "Notificaciones automáticas",
          "Flujos personalizados",
          "Soporte mensual incluido",
          "Mejoras y ajustes del asistente",
        ],
        cta: "Cotizar Profesional",
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
