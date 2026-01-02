"use client";

import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Providers - Componente agregador de todos os providers da aplicação
 * 
 * Centraliza todos os context providers para manter o layout.tsx limpo
 * e facilitar a adição de novos providers no futuro.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
