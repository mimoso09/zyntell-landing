"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PageLoader() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 2700);
    const t2 = setTimeout(() => setPhase("done"), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  const exiting = phase === "out";
  const curtainEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

  return (
    <>
      {/* Top curtain */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: exiting ? "-100%" : "0%" }}
        transition={{ duration: 0.9, ease: curtainEase }}
        className="fixed inset-x-0 top-0 z-[9999]"
        style={{ height: "calc(50% + 2px)", background: "#030712" }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <motion.div
          animate={{ opacity: exiting ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), rgba(139,92,246,0.6), transparent)",
            boxShadow: "0 0 8px rgba(59,130,246,0.4)",
          }}
        />
      </motion.div>

      {/* Bottom curtain */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: exiting ? "100%" : "0%" }}
        transition={{ duration: 0.9, ease: curtainEase }}
        className="fixed inset-x-0 bottom-0 z-[9999]"
        style={{ height: "calc(50% + 2px)", background: "#030712" }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <motion.div
          animate={{ opacity: exiting ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), rgba(139,92,246,0.6), transparent)",
            boxShadow: "0 0 8px rgba(59,130,246,0.4)",
          }}
        />
      </motion.div>

      {/* Center logo */}
      <motion.div
        animate={{
          opacity: exiting ? 0 : 1,
          scale: exiting ? 1.09 : 1,
        }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
      >
        {/* Orbs */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full -translate-x-16"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full translate-x-28 translate-y-12"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        <div className="relative text-center px-6">
          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 50px rgba(59,130,246,0.55))" }}
          >
            <span
              className="text-7xl sm:text-9xl font-black block"
              style={{
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.05em",
              }}
            >
              ZYNTELL
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 0.55, letterSpacing: "0.38em" }}
            transition={{ delay: 0.75, duration: 0.9 }}
            className="text-slate-300 text-xs uppercase mt-3"
          >
            Automatización inteligente
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
            className="mt-8 mx-auto w-48 h-px rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.15, duration: 1.45, ease: "easeInOut" }}
              className="h-full origin-left rounded-full"
              style={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee)",
                boxShadow: "0 0 8px rgba(59,130,246,0.6)",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
