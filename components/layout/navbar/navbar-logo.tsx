"use client";

import Image from "next/image";
import { BRAND } from "@vert/config/navigation";

interface NavbarLogoProps {
  className?: string;
}

/**
 * NavbarLogo - Logo da marca na navbar
 * 
 * Usa scroll suave para navegação.
 * O logo responde ao tema dark/light via filtro CSS (invert).
 */
export function NavbarLogo({ className }: NavbarLogoProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <a
      href="#hero"
      onClick={handleClick}
      className={`relative z-20 flex items-center space-x-2 px-2 py-1 cursor-pointer ${className}`}
    >
      <Image
        src="/logo-group.svg"
        alt={BRAND.name}
        width={100}
        height={20}
        className="dark:invert-0 invert"
        priority
      />
    </a>
  );
}