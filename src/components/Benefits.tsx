"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { brand } from "@/config/brand";

function CountUp({ metric, inView, delay = 0 }: { metric: string; inView: boolean; delay?: number }) {
  const [value, setValue] = useState(0);

  const match = metric.match(/^([+\-]?)(\d+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const isLiteral = !match;

  useEffect(() => {
    if (!inView || isLiteral) return;
    setValue(0);
    const duration = 3800;
    let rafId: number;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out-quad: más suave y gradual que cubic
        const eased = progress * (2 - progress);
        setValue(Math.round(eased * target));
        if (progress < 1) rafId = requestAnimationFrame(update);
      };
      rafId = requestAnimationFrame(update);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [inView, target, isLiteral, delay]);

  if (isLiteral) return <>{metric}</>;
  return <>{prefix}{value}{suffix}</>;
}

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 circuit-grid pointer-events-none opacity-50"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(59,130,246,0.09) 0%, transparent 70%)",
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
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {brand.benefits.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brand.benefits.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 24 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.13, duration: 0.6, ease: "easeOut" }}
              className="glass rounded-2xl p-8 text-center relative overflow-hidden group cursor-default"
              style={{ border: "1px solid rgba(59,130,246,0.15)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(59,130,246,0.5)";
                el.style.boxShadow = "0 0 50px rgba(59,130,246,0.18), 0 0 0 1px rgba(59,130,246,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(59,130,246,0.15)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Radial glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 100%, rgba(59,130,246,0.12) 0%, transparent 70%)",
                }}
              />
              {/* Top scan line on hover */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.8), transparent)" }}
              />

              <div
                className="text-5xl font-black mb-2 tabular-nums number-glow"
                style={{
                  background: "linear-gradient(135deg, #60a5fa, #c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <CountUp metric={item.metric} inView={inView} delay={i * 220} />
              </div>
              <div className="text-base font-semibold text-white mb-1">{item.label}</div>
              <div className="text-sm text-slate-500">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
