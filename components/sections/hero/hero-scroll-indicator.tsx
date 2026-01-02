"use client";

import { motion } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

export function HeroScrollIndicator() {
  const handleClick = () => {
    const problemSection = document.getElementById("problema");
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-20 outline-none focus:outline-none"
      aria-label="Scroll para baixo"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-14 w-9 items-center justify-center rounded-full border border-border/30 bg-background/30 backdrop-blur-sm"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
