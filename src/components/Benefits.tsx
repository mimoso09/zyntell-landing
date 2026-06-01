"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { brand } from "@/config/brand";

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
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
          <span className="badge mb-4">Resultados</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            {brand.benefits.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {brand.benefits.subtitle}
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {brand.benefits.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-8 text-center relative overflow-hidden group"
              style={{ border: "1px solid rgba(59,130,246,0.15)" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 70%)",
                }}
              />
              <div
                className="text-5xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #60a5fa, #c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.metric}
              </div>
              <div className="text-base font-semibold text-white mb-1">
                {item.label}
              </div>
              <div className="text-sm text-slate-500">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass rounded-2xl p-8"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Responde clientes al instante, sin demoras",
              "Agenda citas automáticamente con Google Calendar",
              "Reduce la carga operativa del equipo",
              "Mejora la experiencia del cliente en cada interacción",
              "Centraliza todas las conversaciones en un dashboard",
              "Escala sin necesidad de contratar más personal",
            ].map((feat, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.3)",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
                <span className="text-sm text-slate-300 leading-relaxed">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
