"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  CalendarCheck,
  LayoutDashboard,
  UserCheck,
} from "lucide-react";
import { brand } from "@/config/brand";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  CalendarCheck,
  LayoutDashboard,
  UserCheck,
};

const colors = [
  { bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.25)", icon: "#60a5fa", glow: "rgba(59,130,246,0.25)" },
  { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)", icon: "#34d399", glow: "rgba(16,185,129,0.25)" },
  { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.25)", icon: "#c4b5fd", glow: "rgba(139,92,246,0.25)" },
  { bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.25)", icon: "#67e8f9", glow: "rgba(34,211,238,0.25)" },
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
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {brand.solutions.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {brand.solutions.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? MessageCircle;
            const c = colors[i % colors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-7 group cursor-default relative overflow-hidden"
                style={{ border: `1px solid ${c.border}` }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 0 60px ${c.glow}, 0 20px 40px rgba(0,0,0,0.3)`;
                  el.style.borderColor = c.icon;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.borderColor = c.border;
                }}
              >
                {/* Corner accent top-right */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${c.glow}, transparent 70%)`,
                  }}
                />
                {/* Top scan line on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.icon}, transparent)` }}
                />

                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      boxShadow: `0 0 24px ${c.glow}`,
                    }}
                  >
                    <Icon size={26} style={{ color: c.icon }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
