"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { brand } from "@/config/brand";
import { createWhatsAppLink } from "@/config/whatsapp";

const planMessages: Record<string, string> = {
  Básico:
    "Hola, quiero cotizar el Plan Básico de Zyntell para automatizar la atención por WhatsApp de mi negocio.",
  Profesional:
    "Hola, quiero cotizar el Plan Profesional de Zyntell con automatización por WhatsApp, agenda de citas y Google Calendar.",
};

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState("Profesional");

  return (
    <section
      id="precios"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(3,7,18,0) 0%, rgba(10,15,30,0.5) 50%, rgba(3,7,18,0) 100%)",
      }}
    >
      {/* Background orb */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)",
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
          <span className="badge mb-4">Planes</span>
          <p
            className="text-sm sm:text-base font-semibold text-blue-300 mb-3 tracking-wide uppercase"
            style={{ letterSpacing: "0.08em" }}
          >
            {brand.pricing.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            {brand.pricing.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {brand.pricing.subtitle}
          </p>
          <p className="text-slate-500 text-sm mt-3">
            Selecciona el plan que mejor se adapte a tu negocio
          </p>
        </motion.div>

        {/* Two-plan grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {brand.pricing.plans.map((plan, i) => {
            const isSelected = selected === plan.name;
            const whatsappLink = createWhatsAppLink(planMessages[plan.name] ?? "");

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28, scale: 1 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, scale: isSelected ? 1.03 : 1 }
                    : {}
                }
                transition={{
                  opacity: { duration: 0.55, delay: i * 0.15 },
                  y: { duration: 0.55, delay: i * 0.15 },
                  scale: { duration: 0.35, ease: "easeOut", delay: 0 },
                }}
                onClick={() => setSelected(plan.name)}
                className="relative rounded-2xl overflow-hidden cursor-pointer select-none"
                style={{
                  background: isSelected
                    ? "linear-gradient(145deg, rgba(59,130,246,0.16), rgba(139,92,246,0.16))"
                    : "rgba(255,255,255,0.03)",
                  border: isSelected
                    ? "1px solid rgba(59,130,246,0.55)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isSelected
                    ? "0 0 60px rgba(59,130,246,0.22), 0 0 120px rgba(139,92,246,0.1)"
                    : "none",
                  transition:
                    "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
                }}
              >
                {/* Top gradient accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-0.5"
                  style={{
                    background:
                      "linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee)",
                    boxShadow: "0 0 10px rgba(59,130,246,0.5)",
                    opacity: isSelected ? 1 : 0,
                    transition: "opacity 0.35s ease",
                  }}
                />

                <div className="p-8">
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-2 mb-5 min-h-[28px]">
                    <AnimatePresence mode="popLayout">
                      {isSelected && (
                        <motion.span
                          key={`sel-${plan.name}`}
                          initial={{ opacity: 0, scale: 0.8, x: -6 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.8, x: -6 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5"
                          style={{
                            background: "rgba(16,185,129,0.15)",
                            border: "1px solid rgba(16,185,129,0.35)",
                            color: "#6ee7b7",
                          }}
                        >
                          <CheckCircle2 size={11} strokeWidth={2.5} />
                          Seleccionado
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {plan.badge && (
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(59,130,246,0.15)",
                          border: "1px solid rgba(59,130,246,0.35)",
                          color: "#93c5fd",
                          boxShadow: isSelected
                            ? "0 0 10px rgba(59,130,246,0.2)"
                            : "none",
                          transition: "box-shadow 0.35s ease",
                        }}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Plan name row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: isSelected
                          ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
                          : "rgba(255,255,255,0.06)",
                        boxShadow: isSelected
                          ? "0 0 20px rgba(59,130,246,0.4)"
                          : "none",
                        transition:
                          "background 0.35s ease, box-shadow 0.35s ease",
                      }}
                    >
                      <Zap
                        size={17}
                        className={isSelected ? "text-white" : "text-slate-400"}
                        fill={isSelected ? "currentColor" : "none"}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px mb-6"
                    style={{
                      background: isSelected
                        ? "rgba(59,130,246,0.25)"
                        : "rgba(255,255,255,0.07)",
                      transition: "background 0.35s ease",
                    }}
                  />

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: isSelected
                              ? "rgba(59,130,246,0.2)"
                              : "rgba(255,255,255,0.05)",
                            border: isSelected
                              ? "1px solid rgba(59,130,246,0.4)"
                              : "1px solid rgba(255,255,255,0.1)",
                            transition:
                              "background 0.35s ease, border-color 0.35s ease",
                          }}
                        >
                          <Check
                            size={11}
                            className={
                              isSelected ? "text-blue-400" : "text-slate-400"
                            }
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm text-slate-300 leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button — stops propagation so card onClick doesn't fire */}
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold"
                    style={
                      isSelected
                        ? {
                            background:
                              "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                            color: "white",
                            boxShadow: "0 0 24px rgba(59,130,246,0.35)",
                            transition: "box-shadow 0.35s ease",
                          }
                        : {
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#cbd5e1",
                            transition: "background 0.35s ease",
                          }
                    }
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advanced note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-2 px-6 py-4 rounded-2xl text-sm text-slate-400 leading-relaxed text-center sm:text-left"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span>
              <span className="text-white font-semibold">
                ¿Necesitas algo más avanzado?
              </span>{" "}
              Creamos automatizaciones personalizadas para negocios con procesos
              especiales.
            </span>
            <a
              href={brand.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition font-semibold whitespace-nowrap flex items-center gap-1"
            >
              Hablemos <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Quote note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-slate-600 mt-5 max-w-xl mx-auto"
        >
          Los precios se cotizan según el tipo de negocio, cantidad de mensajes,
          flujos requeridos e integraciones necesarias.
        </motion.p>
      </div>
    </section>
  );
}
