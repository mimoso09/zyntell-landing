"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  CalendarCheck,
  Calendar,
  LayoutDashboard,
  UserCheck,
  ShieldCheck,
  BookOpen,
  Settings,
} from "lucide-react";
import { brand } from "@/config/brand";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  CalendarCheck,
  Calendar,
  LayoutDashboard,
  UserCheck,
  ShieldCheck,
  BookOpen,
  Settings,
};

const colors = [
  { bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)", icon: "#60a5fa", glow: "rgba(59,130,246,0.2)" },
  { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)", icon: "#34d399", glow: "rgba(16,185,129,0.2)" },
  { bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.2)", icon: "#67e8f9", glow: "rgba(34,211,238,0.2)" },
  { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)", icon: "#c4b5fd", glow: "rgba(139,92,246,0.2)" },
  { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)", icon: "#fcd34d", glow: "rgba(245,158,11,0.2)" },
  { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)", icon: "#34d399", glow: "rgba(16,185,129,0.2)" },
  { bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)", icon: "#60a5fa", glow: "rgba(59,130,246,0.2)" },
  { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)", icon: "#c4b5fd", glow: "rgba(139,92,246,0.2)" },
];

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="soluciones"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(3,7,18,0) 0%, rgba(10,15,30,0.8) 50%, rgba(3,7,18,0) 100%)",
      }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
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
          <span className="badge mb-4">La solución</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Un asistente de IA trabajando
            <br />
            <span className="gradient-text">por tu negocio 24/7</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {brand.solutions.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {brand.solutions.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Settings;
            const c = colors[i % colors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-5 group cursor-default relative overflow-hidden"
                style={{ border: `1px solid ${c.border}` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${c.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Shimmer on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
                  }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                >
                  <Icon size={20} style={{ color: c.icon }} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
