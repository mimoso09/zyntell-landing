"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Calendar, MessageCircle } from "lucide-react";

const messages = [
  { from: "client", text: "Hola, ¿qué horarios tienen disponibles?" },
  {
    from: "bot",
    text: "¡Hola! 👋 Atendemos de lunes a sábado de 10:00 a.m. a 7:00 p.m. ¿Te gustaría agendar una cita?",
  },
  { from: "client", text: "Sí, mañana a las 5" },
  {
    from: "bot",
    text: "Perfecto ✅ Tu cita quedó agendada y sincronizada con el calendario del negocio.",
  },
];

export default function DemoChat() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let idx = 0;
    const next = () => {
      if (idx >= messages.length) return;
      const msg = messages[idx];
      if (msg.from === "bot") {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setVisible((v) => v + 1);
          idx++;
          setTimeout(next, 900);
        }, 1200);
      } else {
        setVisible((v) => v + 1);
        idx++;
        setTimeout(next, 800);
      }
    };
    setTimeout(next, 500);
  }, [inView]);

  return (
    <section
      id="demo"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(3,7,18,0) 0%, rgba(8,14,30,0.6) 50%, rgba(3,7,18,0) 100%)",
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Demo en vivo</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Así funciona una conversación
            <br />
            <span className="gradient-text-cyan">con tu asistente de IA</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            El asistente responde con lenguaje natural, agenda la cita y sincroniza automáticamente con el calendario.
          </p>
        </motion.div>

        {/* Demo grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Chat window */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(34,211,238,0.15), 0 30px 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Chat header */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#22c55e,#15803d)" }}
              >
                <MessageCircle size={16} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Tu Negocio
                </div>
                <div className="flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  IA activa · En línea
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 min-h-[280px]">
              <AnimatePresence>
                {messages.slice(0, visible).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
                  >
                    {msg.from === "bot" && (
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1"
                        style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
                      >
                        <span className="text-[10px] font-bold text-white">IA</span>
                      </div>
                    )}
                    <div
                      className="max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                      style={{
                        background:
                          msg.from === "bot"
                            ? "rgba(59,130,246,0.15)"
                            : "rgba(139,92,246,0.2)",
                        border:
                          msg.from === "bot"
                            ? "1px solid rgba(59,130,246,0.2)"
                            : "1px solid rgba(139,92,246,0.25)",
                        color: msg.from === "bot" ? "#bfdbfe" : "#ddd6fe",
                      }}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start items-center gap-2"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
                    >
                      <span className="text-[10px] font-bold text-white">IA</span>
                    </div>
                    <div
                      className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
                      style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.2)" }}
                    >
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Calendar confirmation card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Calendar card */}
            <div
              className="glass-strong rounded-2xl p-6"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(34,211,238,0.2), 0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg,#22d3ee,#3b82f6)",
                    boxShadow: "0 0 16px rgba(34,211,238,0.3)",
                  }}
                >
                  <Calendar size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Cita confirmada</div>
                  <div className="text-xs text-slate-400">Sincronizada automáticamente</div>
                </div>
                <div className="ml-auto">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)" }}
                  >
                    <Check size={14} className="text-green-400" strokeWidth={3} />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Servicio", value: "Corte premium", color: "#f1f5f9" },
                  { label: "Hora", value: "5:00 p.m.", color: "#f1f5f9" },
                  { label: "Fecha", value: "Mañana", color: "#f1f5f9" },
                  { label: "Estado", value: "✓ Sync Google Calendar", color: "#34d399" },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <span className="text-sm text-slate-500">{label}</span>
                    <span className="text-sm font-medium" style={{ color }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info bullets */}
            <div className="space-y-3">
              {[
                "El cliente recibe confirmación por WhatsApp",
                "La cita aparece en Google Calendar al instante",
                "Tu equipo puede ver todo desde el dashboard",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
                  >
                    <Check size={10} className="text-green-400" strokeWidth={3} />
                  </div>
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
