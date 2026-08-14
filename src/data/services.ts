import {
  Brain,
  Clock,
  HeartPulse,
  Shield,
  Sparkles,
  UsersRound,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  /** Define o par de cores usado no card. */
  accent: "primary" | "secondary";
};

/**
 * Areas de atuacao. Esta mesma lista alimenta os cards da secao "Serviços"
 * e a propriedade `availableService` do JSON-LD, entao os dois nunca saem
 * de sincronia.
 */
export const services: Service[] = [
   {
    icon: Sparkles,
    title: "Autoestima e Autoconhecimento",
    accent: "secondary",
  },
  {
    icon: Brain,
    title: "Ansiedade e Gestão do Estresse",
    accent: "primary",
  },
  {
    icon: HeartPulse,
    title: "Disforia de gênero - Adultos",
    accent: "secondary",
  },
  {
    icon: Users,
    title: "Terapia de casal e outros relacionamentos",
    accent: "primary",
  },
  {
    icon: Shield,
    title: "Traumas e Luto",
    accent: "primary",
  },
  {
    icon: Clock,
    title: "Transtornos do humor",
    accent: "secondary",
  },
  {
    icon: UsersRound,
    title: "Transtornos da personalidade",
    accent: "secondary",  
  }
];
