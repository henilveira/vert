"use client";

import { motion } from "motion/react";

const TRUSTED_BY = [
  "Startups",
  "Scale-ups", 
  "Empresas",
] as const;

export function HeroTrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      className="mt-16 flex flex-col items-center gap-4"
    >
      <p className="text-sm text-muted-foreground">
        Ajudamos a transformar
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {TRUSTED_BY.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.4, ease: "easeOut" }}
            className="rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
