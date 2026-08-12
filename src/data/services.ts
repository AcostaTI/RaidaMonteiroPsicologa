import {
  Brain,
  Clock,
  HeartPulse,
  Shield,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
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
    description:
      "Desenvolvimento pessoal, fortalecimento da autoconfiança e descoberta de potenciais.",
    accent: "secondary",
  },
  {
    icon: Brain,
    title: "Ansiedade e Estresse",
    description:
      "Transtorno da ansiedade, TAG(Transtorno de Ansiedade Generalizada) e Gestão de Estresse.",
    accent: "primary",
  },
  {
    icon: HeartPulse,
    title: "Disforia de gênero - Adultos",
    description:
      "",
    accent: "secondary",
  },
  {
    icon: UsersRound,
    title: "Terapia de casal e outros relacionamentos",
    description:
      "Terapia para questões relacionadas a vínculos afetivos, familiares e interpessoais.",
    accent: "primary",
  },
  {
    icon: Shield,
    title: "Traumas e Luto",
    description:
      "Suporte terapêutico para superação de traumas e processos de luto e perdas.",
    accent: "primary",
  },
  {
    icon: Clock,
    title: "Transtorno do humor",
    description:
      "Bipolaridade, depressão: leve, moderada e grave(se necessário, com acompanhamento domiciliar).",
    accent: "secondary",
  },
];
