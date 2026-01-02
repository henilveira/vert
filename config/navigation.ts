/**
 * Configurações centralizadas da navegação
 * 
 * Mantém todas as configurações de navegação em um único lugar,
 * facilitando manutenção e garantindo consistência.
 */

export interface NavItem {
  name: string;
  link: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "O Problema", link: "#problema" },
  { name: "Soluções", link: "#solucoes" },
  { name: "Como Funciona", link: "#como-funciona" },
  { name: "Resultados", link: "#resultados" },
];

export const BRAND = {
  name: "Vert Group",
  logo: {
    light: "/v-light.svg",
    dark: "/v-dark.svg",
  },
} as const;
