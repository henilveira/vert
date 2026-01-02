"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * ThemeProvider - Wrapper do next-themes para gerenciamento de tema
 * 
 * Este componente deve ser usado apenas no lado do cliente (client-side).
 * A prop `attribute="class"` garante que o tema seja aplicado via classe CSS,
 * compatível com Tailwind CSS dark mode.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
