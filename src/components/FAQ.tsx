"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { brand } from "@/config/brand";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="glass rounded-2xl overflow-hidden"
      style={{
        border: open
          ? "1px solid rgba(59,130,246,0.25)"
          : "1px solid rgba(255,255,255,0.07)",
        transition: "border-color 0.3s",
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-medium text-sm sm:text-base pr-4"
          style={{ color: open ? "#f1f5f9" : "#cbd5e1" }}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={18}
            style={{ color: open ? "#60a5fa" : "#475569" }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-5 text-sm text-slate-400 leading-relaxed"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="pt-4">{a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(3,7,18,0) 0%, rgba(8,14,28,0.5) 50%, rgba(3,7,18,0) 100%)",
      }}
    >
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge mb-4">Preguntas frecuentes</span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Todo lo que necesitas saber
          </h2>
          <p className="text-slate-400 text-lg">
            Si tu pregunta no está aquí, escríbenos directamente.
          </p>
        </motion.div>

        <div className={`space-y-3 ${inView ? "" : "opacity-0"}`}>
          {brand.faq.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
