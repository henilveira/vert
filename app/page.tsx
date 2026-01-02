import { HeroSection } from "@vert/components/sections/hero";
import { ProblemSection } from "@vert/components/sections/problem";
import { WhatWeDoSection } from "@vert/components/sections/what-we-do";
import { HowItWorksSection } from "@vert/components/sections/how-it-works";
import { ResultsSection } from "@vert/components/sections/results";
import { PartnershipSection } from "@vert/components/sections/partnership";
import { CTASection } from "@vert/components/sections/cta";
import { Footer } from "@vert/components/sections/footer";
import { LandingNavbar } from "@vert/components/layout/navbar";
import { SectionProgress } from "@vert/components/layout/section-progress";

export default function Page() {
  return (
    <>
      <LandingNavbar />
      <SectionProgress />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatWeDoSection />
        <HowItWorksSection />
        <ResultsSection />
        <PartnershipSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}