"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquareX,
  CalendarX2,
  RefreshCcw,
  UserX,
  AlertCircle,
  Shuffle,
} from "lucide-react";
import { brand } from "@/config/brand";

const iconMap: Record<string, React.ElementType> = {
  MessageX: MessageSquareX,
  CalendarX: CalendarX2,
  RotateCcw: RefreshCcw,
  UserX,
  AlertCircle,
  Shuffle,
};


export default function Problems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problemas" className="relative py-24 overflow-hidden">
      {/* Subtle red/orange orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,68,68,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
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
          <span className="badge mb-4">El problema</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Tu negocio pierde clientes
            <br />
            <span className="text-red-400">cuando tarda en responder</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {brand.problems.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {brand.problems.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? AlertCircle;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="glass rounded-2xl p-7 group cursor-default"
                style={{
                  border: "1px solid rgba(239,68,68,0.1)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(239,68,68,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 20px rgba(239,68,68,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(239,68,68,0.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <Icon size={20} className="text-red-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
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
