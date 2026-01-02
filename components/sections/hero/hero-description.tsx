"use client";

import { motion } from "motion/react";

interface HeroDescriptionProps {
  text: string;
}

export function HeroDescription({ text }: HeroDescriptionProps) {
  return (
    <motion.p 
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl"
    >
      {text}
    </motion.p>
  );
}
