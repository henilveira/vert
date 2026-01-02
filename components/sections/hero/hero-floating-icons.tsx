"use client";

import { motion } from "motion/react";
import { 
  IconChartBar, 
  IconRocket, 
  IconBulb, 
  IconTarget,
  IconTrendingUp,
  IconPuzzle
} from "@tabler/icons-react";

const FLOATING_ITEMS = [
  { icon: IconChartBar, position: "top-1/4 left-[10%]", delay: 0 },
  { icon: IconRocket, position: "top-1/3 right-[12%]", delay: 0.2 },
  { icon: IconBulb, position: "bottom-1/3 left-[15%]", delay: 0.4 },
  { icon: IconTarget, position: "bottom-1/4 right-[10%]", delay: 0.6 },
  { icon: IconTrendingUp, position: "top-[15%] right-[25%]", delay: 0.3 },
  { icon: IconPuzzle, position: "bottom-[20%] left-[25%]", delay: 0.5 },
];

/**
 * HeroFloatingIcons - Ícones flutuantes com animação sutil
 */
export function HeroFloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {FLOATING_ITEMS.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ 
              opacity: 1, 
              y: [0, -10, 0],
              filter: "blur(0px)",
            }}
            transition={{
              opacity: { delay: item.delay + 0.5, duration: 0.8, ease: "easeOut" },
              filter: { delay: item.delay + 0.5, duration: 0.8, ease: "easeOut" },
              y: {
                delay: item.delay + 0.5,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={`absolute ${item.position}`}
          >
            <div className="rounded-2xl border border-border/10 bg-background/40 p-4 shadow-sm backdrop-blur-sm dark:border-border/30 dark:bg-background/30">
              <Icon className="h-8 w-8 text-primary/70 dark:text-primary/50" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
