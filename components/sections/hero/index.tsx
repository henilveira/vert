import { HeroBackground } from "./hero-background";
import { HeroTitle } from "./hero-title";
import { HeroDescription } from "./hero-description";
import { HeroActions } from "./hero-actions";
import { HeroGlow } from "./hero-glow";
import { HeroFloatingIcons } from "./hero-floating-icons";

const HERO_CONTENT = {
  titleParts: ["guiar processos.", "construir negócios."],
  highlight: "juntos.",
  description:
    "Organizamos operações, revelamos gargalos e ajudamos empresas a crescer com método e tecnologia.",
  primaryAction: "Agendar conversa",
} as const;

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      <HeroBackground />
      <HeroGlow />
      <HeroFloatingIcons />

      <div className="relative z-10 flex flex-col items-center pointer-events-auto">
        <HeroTitle 
          titleParts={HERO_CONTENT.titleParts} 
          highlight={HERO_CONTENT.highlight} 
        />

        <HeroDescription text={HERO_CONTENT.description} />

        <HeroActions primaryLabel={HERO_CONTENT.primaryAction} />
      </div>
    </section>
  );
}
