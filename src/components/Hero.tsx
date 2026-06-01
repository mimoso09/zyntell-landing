"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, Check } from "lucide-react";
import { brand } from "@/config/brand";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// Floating status indicators inside the mockup
const indicators = [
  { color: "#10b981", label: "IA activa", dot: true },
  { color: "#3b82f6", label: "Cita agendada ✓", dot: false },
  { color: "#22d3ee", label: "Google Calendar sync", dot: false },
  { color: "#a78bfa", label: "Modo humano disponible", dot: false },
];

// Mock chat messages inside the dashboard
const chatMessages = [
  { from: "client", text: "Hola, ¿tienen disponibilidad mañana?" },
  { from: "bot", text: "¡Hola! 👋 Sí, tenemos horarios disponibles. ¿A qué hora te conviene?" },
  { from: "client", text: "A las 5 PM" },
  { from: "bot", text: "Perfecto ✅ Tu cita quedó agendada para mañana a las 5:00 PM." },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start mb-6">
              <span className="badge">
                <Zap size={12} fill="currentColor" />
                {brand.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="text-white">Automatiza la atención</span>
              <br />
              <span className="gradient-text">de tu negocio</span>
              <br />
              <span className="text-white">con agentes de IA</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              {brand.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={brand.contact.whatsapp}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow: "0 0 20px rgba(59,130,246,0.35)",
                }}
              >
                {brand.hero.cta1}
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#como-funciona"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {brand.hero.cta2}
                <ChevronRight size={16} />
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {["#3b82f6", "#8b5cf6", "#22d3ee", "#10b981"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#030712] flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: c }}
                  >
                    {["B", "E", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-semibold">+30 negocios</span>{" "}
                ya automatizan su atención
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Main dashboard card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-strong rounded-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(59,130,246,0.2), 0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(59,130,246,0.08)",
                }}
              >
                {/* Dashboard header */}
                <div
                  className="px-4 py-3 flex items-center gap-2"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div
                    className="flex-1 mx-3 h-6 rounded-md px-3 flex items-center"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <span className="text-xs text-slate-500">
                      dashboard.zyntell.com
                    </span>
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="p-4">
                  {/* Top row stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: "Conversaciones", value: "47" },
                      { label: "Citas hoy", value: "12" },
                      { label: "Tasa respuesta", value: "100%" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl p-2.5 text-center"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      >
                        <div className="text-lg font-bold text-white">
                          {s.value}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat preview */}
                  <div
                    className="rounded-xl p-3 mb-3"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
                      >
                        W
                      </div>
                      <span className="text-xs font-medium text-slate-300">
                        WhatsApp · Conversación activa
                      </span>
                      <span className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>

                    <div className="space-y-2">
                      {chatMessages.slice(0, 3).map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: msg.from === "client" ? -10 : 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.3 }}
                          className={`flex ${msg.from === "bot" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className="text-[11px] px-2.5 py-1.5 rounded-lg max-w-[80%] leading-relaxed"
                            style={{
                              background:
                                msg.from === "bot"
                                  ? "rgba(59,130,246,0.25)"
                                  : "rgba(255,255,255,0.07)",
                              color: msg.from === "bot" ? "#93c5fd" : "#cbd5e1",
                            }}
                          >
                            {msg.text}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Status indicators */}
                  <div className="space-y-1.5">
                    {indicators.map((ind, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 + i * 0.15 }}
                        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{
                            background: ind.color,
                            boxShadow: `0 0 6px ${ind.color}`,
                          }}
                        />
                        <span className="text-[11px] text-slate-400">
                          {ind.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating calendar card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                animate-y={[0, -6, 0]}
                className="absolute -bottom-6 -left-6 glass rounded-xl p-3 w-48"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(34,211,238,0.2), 0 20px 40px rgba(0,0,0,0.4)",
                  animation: "float-y 7s ease-in-out 1s infinite",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#22d3ee,#3b82f6)" }}
                  >
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-semibold text-white">
                    Cita confirmada
                  </span>
                </div>
                <div className="space-y-1">
                  {[
                    ["Servicio", "Corte premium"],
                    ["Hora", "5:00 PM"],
                    ["Estado", "✓ Sync Calendar"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-[10px]">
                      <span className="text-slate-500">{k}</span>
                      <span className="text-slate-300">{v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating AI badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(16,185,129,0.3), 0 10px 30px rgba(0,0,0,0.4)",
                  animation: "float-y 8s ease-in-out 3s infinite",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-green-400">
                    IA activa · 24/7
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(3,7,18,0.8))",
        }}
      />
    </section>
  );
}
