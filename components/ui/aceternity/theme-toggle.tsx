"use client";

import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useEffect, useState } from "react";

/**
 * ThemeToggle - Botão para alternar entre temas claro e escuro
 * 
 * Usa um estado local para evitar hydration mismatch,
 * renderizando o conteúdo correto apenas após o mount.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita hydration mismatch - só renderiza o ícone após mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Placeholder durante SSR para evitar layout shift
  if (!mounted) {
    return (
      <button
        className="relative z-50 cursor-pointer rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
        aria-label="Alternar tema"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative z-50 cursor-pointer rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      {theme === "dark" ? (
        <IconSun className="h-5 w-5 text-neutral-300" />
      ) : (
        <IconMoon className="h-5 w-5 text-neutral-600" />
      )}
    </button>
  );
}
