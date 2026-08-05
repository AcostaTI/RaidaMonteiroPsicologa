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
    icon: Brain,
    title: "Ansiedade e Estresse",
    description:
      "Tratamento especializado para transtornos de ansiedade, síndrome do pânico e gestão de estresse.",
    accent: "primary",
  },
  {
    icon: HeartPulse,
    title: "Depressão",
    description:
      "Acompanhamento terapêutico para pessoas que enfrentam sintomas depressivos e dificuldades emocionais.",
    accent: "secondary",
  },
  {
    icon: UsersRound,
    title: "Relacionamentos",
    description:
      "Terapia para questões relacionadas a vínculos afetivos, familiares e interpessoais.",
    accent: "primary",
  },
  {
    icon: Sparkles,
    title: "Autoestima e Autoconhecimento",
    description:
      "Desenvolvimento pessoal, fortalecimento da autoconfiança e descoberta de potenciais.",
    accent: "secondary",
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
    title: "Transições de Vida",
    description:
      "Apoio em momentos de mudança, como mudança de carreira, casamento, maternidade e outras transições.",
    accent: "secondary",
  },
];

/** Etapas do acompanhamento, exibidas no bloco "Como Funcionam as Sessões?". */
export const sessionSteps = [
  {
    title: "Primeira Consulta",
    description: "Conhecemos suas necessidades e objetivos terapêuticos",
  },
  {
    title: "Planejamento",
    description: "Criamos juntos um plano terapêutico personalizado",
  },
  {
    title: "Acompanhamento",
    description: "Sessões semanais com foco no seu desenvolvimento",
  },
] as const;
