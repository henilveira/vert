"use client";

import { motion } from "motion/react";

/**
 * HeroGlow - Efeito de glow animado atrás do conteúdo principal
 */
export function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* Glow principal verde */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(0px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(120px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute h-[500px] w-[500px] rounded-full bg-primary/30 dark:bg-primary/20"
      />
      
      {/* Glow secundário */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(0px)" }}
        animate={{ opacity: 0.6, filter: "blur(100px)" }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute h-[300px] w-[600px] -translate-y-20 rounded-full bg-primary/20 dark:bg-primary/10"
      />
    </div>
  );
}
