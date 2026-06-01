"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Stethoscope,
  Star,
  Briefcase,
  UtensilsCrossed,
  Building2,
  Laptop,
} from "lucide-react";
import { brand } from "@/config/brand";

const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Sparkles,
  Stethoscope,
  Star,
  Briefcase,
  UtensilsCrossed,
  Building2,
  Laptop,
};

const gradients = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-green-500 to-emerald-400",
  "from-cyan-500 to-blue-400",
  "from-orange-500 to-amber-400",
  "from-rose-500 to-orange-400",
  "from-indigo-500 to-purple-400",
  "from-teal-500 to-cyan-400",
];

const glowColors = [
  "rgba(59,130,246,0.2)",
  "rgba(139,92,246,0.2)",
  "rgba(16,185,129,0.2)",
  "rgba(34,211,238,0.2)",
  "rgba(245,158,11,0.2)",
  "rgba(244,63,94,0.2)",
  "rgba(99,102,241,0.2)",
  "rgba(20,184,166,0.2)",
];

export default function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="casos-de-uso" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 dot-grid pointer-events-none opacity-20"
      />
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
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
          <span className="badge mb-4">Casos de uso</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Diseñado para negocios
            <br />
            <span className="gradient-text">que atienden personas</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Implementamos asistentes personalizados para cada tipo de negocio, con sus flujos, horarios y servicios específicos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {brand.useCases.map((uc, i) => {
            const Icon = iconMap[uc.icon] ?? Laptop;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 group cursor-default relative overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${glowColors[i % glowColors.length]}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${gradients[i % gradients.length]}`}
                  style={{ boxShadow: `0 0 20px ${glowColors[i % glowColors.length]}` }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{uc.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
