"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Cover } from "@aceternity/cover";
import { AnimatedBeam } from "@vert/components/ui/magic/animated-beam";
import { IconSearch, IconSettings, IconChartLine } from "@tabler/icons-react";

const STEPS = [
  {
    number: "1",
    title: "Diagnóstico",
    description: "Entendemos o negócio e identificamos oportunidades.",
    icon: IconSearch,
  },
  {
    number: "2",
    title: "Estruturação",
    description: "Organizamos processos e implementamos melhorias.",
    icon: IconSettings,
  },
  {
    number: "3",
    title: "Acompanhamento",
    description: "Medição, ajustes e evolução contínua.",
    icon: IconChartLine,
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Refs para os círculos dos steps
  const containerRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  
  const stepRefs = [step1Ref, step2Ref, step3Ref];

  return (
    <section
      ref={ref}
      id="como-funciona"
      className="relative py-24 px-4"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Como funciona
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Animated Beams conectando os steps */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={step1Ref}
            toRef={step2Ref}
            pathColor="rgba(16, 185, 129, 0.2)"
            pathWidth={2}
            gradientStartColor="#10b981"
            gradientStopColor="#059669"
            curvature={-50}
            duration={3}
            delay={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={step2Ref}
            toRef={step3Ref}
            pathColor="rgba(16, 185, 129, 0.2)"
            pathWidth={2}
            gradientStartColor="#10b981"
            gradientStopColor="#059669"
            curvature={-50}
            duration={3}
            delay={1.5}
          />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  delay: 0.2 + index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="relative"
              >
                <div className="relative flex flex-col items-center text-center">
                  {/* Círculo com ícone */}
                  <div 
                    ref={stepRefs[index]}
                    className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/30 bg-background shadow-lg shadow-primary/10"
                  >
                    <Icon className="h-10 w-10 text-primary" />
                  </div>

                  {/* Número */}
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </span>

                  {/* Conteúdo */}
                  <h3 className="mt-6 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-lg text-muted-foreground">
            👉 tudo{" "}
            <Cover className="font-semibold">prático</Cover>,{" "}
            <Cover className="font-semibold">direto</Cover>,{" "}
            <Cover className="font-semibold">aplicável</Cover>.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
