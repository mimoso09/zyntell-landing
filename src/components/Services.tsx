"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Workflow,
  Globe,
  LayoutDashboard,
  Video,
  Lightbulb,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { brand } from "@/config/brand";
import { createWhatsAppLink } from "@/config/whatsapp";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Workflow,
  Globe,
  LayoutDashboard,
  Video,
  Lightbulb,
};

const palette = [
  { bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.3)", icon: "#60a5fa", glow: "rgba(59,130,246,0.28)" },
  { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)", icon: "#34d399", glow: "rgba(16,185,129,0.25)" },
  { bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.3)", icon: "#c4b5fd", glow: "rgba(139,92,246,0.28)" },
  { bg: "rgba(34,211,238,0.12)", border: "rgba(34,211,238,0.3)", icon: "#67e8f9", glow: "rgba(34,211,238,0.25)" },
  { bg: "rgba(244,114,182,0.12)", border: "rgba(244,114,182,0.3)", icon: "#f9a8d4", glow: "rgba(244,114,182,0.25)" },
  { bg: "rgba(250,204,21,0.12)", border: "rgba(250,204,21,0.3)", icon: "#fde047", glow: "rgba(250,204,21,0.22)" },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const diagnosisLink = createWhatsAppLink(brand.services.diagnosis.message);

  return (
    <section
      id="servicios"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(3,7,18,0) 0%, rgba(10,15,30,0.6) 50%, rgba(3,7,18,0) 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-40 left-10 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="badge mb-4">
            <Sparkles size={12} />
            {brand.services.badge}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span className="gradient-text">Soluciones de IA</span>
            <br className="sm:hidden" />
            <span className="text-white"> para tu negocio</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {brand.services.subtitle}
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brand.services.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            const c = palette[i % palette.length];
            const featured = "featured" in item && item.featured;
            const tag = "tag" in item ? item.tag : undefined;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 sm:p-7 group cursor-default relative overflow-hidden h-full"
                style={{
                  border: featured
                    ? `1px solid ${c.icon}`
                    : `1px solid ${c.border}`,
                  boxShadow: featured
                    ? `0 0 40px ${c.glow}, 0 10px 30px rgba(0,0,0,0.3)`
                    : "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 0 60px ${c.glow}, 0 20px 40px rgba(0,0,0,0.3)`;
                  el.style.borderColor = c.icon;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = featured
                    ? `0 0 40px ${c.glow}, 0 10px 30px rgba(0,0,0,0.3)`
                    : "none";
                  el.style.borderColor = featured ? c.icon : c.border;
                }}
              >
                {/* Featured tag */}
                {tag && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(59,130,246,0.18)",
                      border: "1px solid rgba(59,130,246,0.4)",
                      color: "#93c5fd",
                    }}
                  >
                    {tag}
                  </span>
                )}

                {/* Corner accent on hover */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${c.glow}, transparent 70%)`,
                  }}
                />
                {/* Top scan line */}
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${c.icon}, transparent)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    boxShadow: `0 0 20px ${c.glow}`,
                  }}
                >
                  <Icon size={22} style={{ color: c.icon }} />
                </div>

                <h3 className="font-bold text-white text-lg mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Competitive advantage line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex justify-center px-2"
        >
          <p
            className="text-center text-sm sm:text-base max-w-3xl mx-auto leading-relaxed px-5 py-4 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#cbd5e1",
            }}
          >
            <span className="gradient-text font-semibold">
              No solo instalamos herramientas:
            </span>{" "}
            diseñamos, implementamos y conectamos soluciones de IA reales para
            cada negocio.
          </p>
        </motion.div>

        {/* Diagnosis CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.55 }}
          className="mt-10 relative rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))",
            border: "1px solid rgba(59,130,246,0.3)",
            boxShadow:
              "0 0 60px rgba(59,130,246,0.15), 0 20px 40px rgba(0,0,0,0.3)",
          }}
        >
          {/* Accent line top */}
          <div
            className="absolute top-0 inset-x-0 h-0.5"
            style={{
              background:
                "linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, transparent)",
              boxShadow: "0 0 10px rgba(59,130,246,0.5)",
            }}
          />

          <div className="p-7 sm:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
            <div className="flex-1">
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                {brand.services.diagnosis.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                {brand.services.diagnosis.subtitle}
              </p>
            </div>

            <motion.a
              href={diagnosisLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white cta-glow whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              }}
            >
              {brand.services.diagnosis.cta}
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
