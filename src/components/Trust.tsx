"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Smartphone, Lock, UserCog } from "lucide-react";
import { brand } from "@/config/brand";

const iconMap: Record<string, React.ElementType> = {
  Database,
  Smartphone,
  Lock,
  UserCog,
};

export default function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)",
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
          <span
            className="badge mb-4"
            style={{
              background: "rgba(16,185,129,0.1)",
              borderColor: "rgba(16,185,129,0.25)",
              color: "#6ee7b7",
            }}
          >
            Seguridad y privacidad
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            {brand.trust.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {brand.trust.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brand.trust.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Lock;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6"
                style={{ border: "1px solid rgba(16,185,129,0.12)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    boxShadow: "0 0 20px rgba(16,185,129,0.1)",
                  }}
                >
                  <Icon size={22} className="text-emerald-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 glass rounded-2xl px-8 py-6 flex flex-wrap gap-6 items-center justify-center"
          style={{ border: "1px solid rgba(16,185,129,0.15)" }}
        >
          {[
            "Dashboard privado por negocio",
            "Base de datos aislada",
            "WhatsApp propio",
            "Control humano 24/7",
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm text-slate-300">{t}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
