"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "@vert/components/ui/aceternity/hover-border-gradient";

interface HeroActionsProps {
  primaryLabel: string;
  onPrimaryClick?: () => void;
}

export function HeroActions({ primaryLabel }: HeroActionsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      className="mt-10 flex flex-col items-center gap-4"
    >
      <a
        href="https://www.instagram.com/direct/t/17850624900604487"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="cursor-pointer group/btn flex items-center gap-2 bg-primary px-8 py-3 text-base font-semibold text-primary-foreground"
          duration={0.8}
        >
          {primaryLabel}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </HoverBorderGradient>
      </a>
    </motion.div>
  );
}
