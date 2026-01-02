"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { InfiniteMovingCards } from "@aceternity/infinite-moving-cards";

const PRINCIPLES = [
  {
    quote: "Simplicidade é a sofisticação suprema. Processos complexos demais não funcionam no mundo real.",
    name: "Clareza",
    title: "Princípio #1",
  },
  {
    quote: "Tecnologia é meio, não fim. Só aplicamos quando realmente resolve um problema.",
    name: "Pragmatismo",
    title: "Princípio #2",
  },
  {
    quote: "Resultados vêm de execução consistente. Planejamento sem ação é só PowerPoint.",
    name: "Execução",
    title: "Princípio #3",
  },
  {
    quote: "Crescimento sustentável nasce de processos sólidos, não de atalhos.",
    name: "Fundação",
    title: "Princípio #4",
  },
  {
    quote: "Parceria real significa estar junto nas trincheiras, não só nas reuniões.",
    name: "Compromisso",
    title: "Princípio #5",
  },
  {
    quote: "Cada empresa é única. Copiamos frameworks, mas adaptamos para sua realidade.",
    name: "Personalização",
    title: "Princípio #6",
  },
];

export function PrinciplesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            No que acreditamos
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Princípios que guiam nosso trabalho
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="mt-12"
      >
        <InfiniteMovingCards
          items={PRINCIPLES}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className="py-4"
        />
      </motion.div>
    </section>
  );
}
