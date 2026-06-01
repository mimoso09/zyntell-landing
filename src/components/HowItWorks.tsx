"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { brand } from "@/config/brand";

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 dot-grid pointer-events-none opacity-30"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
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
          className="text-center mb-20"
        >
          <span className="badge mb-4">Proceso</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            {brand.howItWorks.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {brand.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 6%, rgba(59,130,246,0.3) 20%, rgba(139,92,246,0.3) 50%, rgba(34,211,238,0.3) 80%, transparent 94%)",
            }}
          />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {brand.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
                      border: "1px solid rgba(59,130,246,0.3)",
                      boxShadow: "0 0 30px rgba(59,130,246,0.1)",
                    }}
                  >
                    <span
                      className="text-3xl font-black"
                      style={{
                        background:
                          "linear-gradient(135deg, #60a5fa, #c4b5fd)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Connector dot */}
                  {i < 3 && (
                    <div
                      className="hidden lg:block absolute top-1/2 -right-3 w-3 h-3 rounded-full -translate-y-1/2"
                      style={{
                        background:
                          "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        boxShadow: "0 0 10px rgba(59,130,246,0.5)",
                      }}
                    />
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              boxShadow: "0 0 24px rgba(59,130,246,0.35)",
            }}
          >
            Quiero implementar esto en mi negocio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
