import type { ComponentType } from "react";
import { Flower2, HandHeart } from "lucide-react";
import { SpiralMark } from "@/components/spiral-mark";
import { SunMark } from "@/components/sun-mark";

/**
 * Aceita tanto um `LucideIcon` quanto o `SpiralMark`: os dois recebem `size` e
 * herdam a cor do contêiner via `currentColor`.
 */
export type PillarIcon = ComponentType<{ size?: number; className?: string }>;

export type Pillar = {
  icon: PillarIcon;
  title: string;
  description: string;
};

/**
 * Os quatro pilares da prática, conforme a peça do manual de marca. O título
 * fica em capitalização normal — a caixa alta é `text-transform` no CSS, para o
 * leitor de tela não soletrar letra a letra.
 */
export const pillars: Pillar[] = [
  {
    icon: HandHeart,
    title: "Acolhimento",
    description: "Um espaço seguro para ser quem você é.",
  },
  {
    icon: Flower2,
    title: "Presença",
    description: "Escuta genuína e respeito à sua história.",
  },
  {
    icon: SunMark,
    title: "Autoconhecimento",
    description: "Caminhos para ampliar a consciência e integrar-se.",
  },
  {
    icon: SpiralMark,
    title: "Transformação",
    description: "Libertar-se do que limita para viver com mais sentido.",
  },
];
