"use client";

import { BackgroundRippleEffect } from "@aceternity/background-ripple-effect";

export function HeroBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <BackgroundRippleEffect rows={12} cols={35} cellSize={48} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
