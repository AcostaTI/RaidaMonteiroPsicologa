/**
 * Formacao academica. As especializacoes alimentam a lista do card "Formação
 * Academica" em components/about.tsx **e** o `knowsAbout` do JSON-LD, entao os
 * dois nunca saem de sincronia.
 */
export const specializations = [
  "Sexologia Humana",
  "Terapia Sexual e de Casal",
  "Neuropsicologia",
  "Avaliação Psicológica",
] as const;

/** Abordagens de base, exibidas no texto do card e somadas ao JSON-LD. */
export const approaches = ["Psicologia Humanista", "Psicologia Transpessoal"] as const;
