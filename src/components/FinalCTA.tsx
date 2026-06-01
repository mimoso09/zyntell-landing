"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { brand } from "@/config/brand";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contacto"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(139,92,246,0.4), transparent)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute -top-20 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float-y 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-10 right-1/4 w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float-y-slow 10s ease-in-out 2s infinite",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="badge">
              <Zap size={12} fill="currentColor" />
              Listo para empezar
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ letterSpacing: "-0.04em", lineHeight: 1.1 }}
          >
            Convierte tu WhatsApp
            <br />
            <span className="gradient-text">en un asistente inteligente</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {brand.finalCta.subtitle}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={brand.contact.whatsapp}
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(59,130,246,0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 0 24px rgba(59,130,246,0.4)",
              }}
            >
              {brand.finalCta.cta}
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href={brand.contact.email}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white transition-colors"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Escribirnos por email
            </motion.a>
          </div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-slate-600"
          >
            Sin contratos. Sin letra pequeña. Implementación en menos de una semana.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
