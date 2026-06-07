// ─── WHATSAPP HELPER ─────────────────────────────────────────────────────────
// Número de WhatsApp del negocio en formato internacional sin signos.
// Cambia este valor si el número cambia.
// ─────────────────────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = "523324913241";

export const createWhatsAppLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
