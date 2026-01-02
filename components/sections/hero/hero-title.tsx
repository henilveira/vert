"use client";

import { motion } from "motion/react";
import { FlipWords } from "@aceternity/flip-words";

interface HeroTitleProps {
  titleParts: readonly string[];
  highlight?: string;
}

export function HeroTitle({ titleParts, highlight }: HeroTitleProps) {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-4xl text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
    >
      <FlipWords 
        words={[...titleParts]} 
        duration={2500}
        className="text-foreground"
      />
      <br />
      {highlight && (
        <motion.span 
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
        >
          {highlight}
        </motion.span>
      )}
    </motion.h1>
  );
}
