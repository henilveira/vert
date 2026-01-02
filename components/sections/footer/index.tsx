"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@vert/config/navigation";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="relative border-t border-border bg-muted/30 py-12 px-4"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-group.svg"
              alt={BRAND.name}
              width={100}
              height={28}
              className="dark:invert-0 invert"
            />
          </Link>

          {/* Tagline */}
          <p className="mt-4 text-sm text-muted-foreground">
            guiar processos. construir negócios. juntos.
          </p>

          {/* Separador */}
          <div className="mt-8 h-px w-24 bg-border" />

          {/* Copyright */}
          <p className="mt-8 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vert Group. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
