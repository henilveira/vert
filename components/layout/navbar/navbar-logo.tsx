"use client";

import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@vert/config/navigation";

interface NavbarLogoProps {
  className?: string;
}

/**
 * NavbarLogo - Logo da marca na navbar
 * 
 * Usa Next.js Link para navegação SPA otimizada.
 * O logo responde ao tema dark/light via filtro CSS (invert).
 */
export function NavbarLogo({ className }: NavbarLogoProps) {
  return (
    <Link
      href="/"
      className={`relative z-20 flex items-center space-x-2 px-2 py-1 ${className}`}
    >
      <Image
        src="/logo-group.svg"
        alt={BRAND.name}
        width={100}
        height={20}
        className="dark:invert-0 invert"
        priority
      />
    </Link>
  );
}