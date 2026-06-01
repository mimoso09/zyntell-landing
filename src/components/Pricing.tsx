"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, ArrowRight } from "lucide-react";
import { brand } from "@/config/brand";

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            {brand.pricing.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {brand.pricing.subtitle}
          </p>
        </motion.div>

        {/* Two-plan grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto items-start">
          {brand.pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: plan.highlight
                  ? "linear-gradient(145deg, rgba(59,130,246,0.13), rgba(139,92,246,0.13))"
                  : "rgba(255,255,255,0.03)",
                border: plan.highlight
                  ? "1px solid rgba(59,130,246,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: plan.highlight
                  ? "0 0 50px rgba(59,130,246,0.18), 0 0 100px rgba(139,92,246,0.08)"
                  : "none",
                transform: plan.highlight ? "scale(1.025)" : "scale(1)",
              }}
            >
              {/* Top gradient line for highlighted plan */}
              {plan.highlight && (
                <div
                  className="absolute top-0 inset-x-0 h-0.5"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee)",
                    boxShadow: "0 0 10px rgba(59,130,246,0.5)",
                  }}
                />
              )}

              <div className="p-8">
                {/* Badge */}
                {plan.badge && (
                  <div className="flex justify-center mb-5">
                    <span
                      className="text-xs font-semibold px-4 py-1.5 rounded-full"
                      style={{
                        background: "rgba(59,130,246,0.15)",
                        border: "1px solid rgba(59,130,246,0.35)",
                        color: "#93c5fd",
                        boxShadow: "0 0 12px rgba(59,130,246,0.2)",
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: plan.highlight
                        ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
                        : "rgba(255,255,255,0.06)",
                      boxShadow: plan.highlight
                        ? "0 0 20px rgba(59,130,246,0.35)"
                        : "none",
                    }}
                  >
                    <Zap
                      size={17}
                      className={plan.highlight ? "text-white" : "text-slate-400"}
                      fill={plan.highlight ? "currentColor" : "none"}
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
                    background: plan.highlight
                      ? "rgba(59,130,246,0.2)"
                      : "rgba(255,255,255,0.07)",
                  }}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: plan.highlight
                            ? "rgba(59,130,246,0.2)"
                            : "rgba(255,255,255,0.05)",
                          border: plan.highlight
                            ? "1px solid rgba(59,130,246,0.4)"
                            : "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <Check
                          size={11}
                          className={plan.highlight ? "text-blue-400" : "text-slate-400"}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <motion.a
                  href={brand.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all"
                  style={
                    plan.highlight
                      ? {
                          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                          color: "white",
                          boxShadow: "0 0 24px rgba(59,130,246,0.35)",
                        }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#cbd5e1",
                        }
                  }
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
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
              <span className="text-white font-semibold">¿Necesitas algo más avanzado?</span>
              {" "}Creamos automatizaciones personalizadas para negocios con procesos especiales.
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
          Los precios se cotizan según el tipo de negocio, cantidad de mensajes, flujos requeridos e integraciones necesarias.
        </motion.p>
      </div>
    </section>
  );
}
