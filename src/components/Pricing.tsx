"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap } from "lucide-react";
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
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {brand.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {brand.pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: plan.highlight
                  ? "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))"
                  : "rgba(255,255,255,0.03)",
                border: plan.highlight
                  ? "1px solid rgba(59,130,246,0.35)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: plan.highlight
                  ? "0 0 40px rgba(59,130,246,0.15), 0 0 80px rgba(139,92,246,0.08)"
                  : "none",
              }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div
                  className="absolute top-0 inset-x-0 h-0.5"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                  }}
                />
              )}

              <div className="p-8">
                {plan.badge && (
                  <div className="flex justify-center mb-4">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(59,130,246,0.15)",
                        border: "1px solid rgba(59,130,246,0.3)",
                        color: "#93c5fd",
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: plan.highlight
                        ? "linear-gradient(135deg,#3b82f6,#8b5cf6)"
                        : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <Zap
                      size={16}
                      className={plan.highlight ? "text-white" : "text-slate-400"}
                      fill={plan.highlight ? "currentColor" : "none"}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>

                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div
                  className="h-px mb-6"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />

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
                            ? "1px solid rgba(59,130,246,0.35)"
                            : "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <Check
                          size={11}
                          className={plan.highlight ? "text-blue-400" : "text-slate-400"}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-sm text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all"
                  style={
                    plan.highlight
                      ? {
                          background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                          color: "white",
                          boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                        }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#cbd5e1",
                        }
                  }
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-slate-500 mt-10"
        >
          Los precios se cotizan según el negocio y los flujos específicos.{" "}
          <a href="#contacto" className="text-blue-400 hover:text-blue-300 transition">
            Solicita una cotización personalizada.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
