type PsiMarkProps = {
  className?: string;
  /**
   * "brand" usa o verde salvia da identidade (para fundos claros).
   * "light" clareia o simbolo para manter contraste sobre o rodape escuro.
   */
  tone?: "brand" | "light";
};

/**
 * Recriacao vetorial do simbolo da logo: o Psi (letra que simboliza a
 * Psicologia) desenhado em verde, com a chama em bege ao centro.
 *
 * Serve como fallback quando /public/logo.png ainda nao foi salvo, e tambem
 * como favicon. Por ser SVG, fica nitido em qualquer tamanho e nao pesa nada.
 */
export function PsiMark({ className, tone = "brand" }: PsiMarkProps) {
  const stem = tone === "light" ? "#b7c7b3" : "#587350";
  const flameFront = tone === "light" ? "#ede3d2" : "#dccbb4";
  const flameBack = tone === "light" ? "#dccbb4" : "#c6b296";

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* Chama central em bege: duas linguas espelhadas subindo do centro. */}
      <path d="M49.4 63C38.6 50.4 41.6 31 54.4 15.5c2.6 14.4-4.2 22.6-5 47.5Z" fill={flameBack} />
      <path d="M50.6 63C61.4 50.4 58.4 31 45.6 15.5c-2.6 14.4 4.2 22.6 5 47.5Z" fill={flameFront} />

      {/* Bracos externos do Psi, abrindo como folhas. */}
      <g
        fill="none"
        stroke={stem}
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M27.5 28.5C24.5 52 28.5 71 50 79" />
        <path d="M72.5 28.5C75.5 52 71.5 71 50 79" />
        {/* Haste vertical e base. */}
        <path d="M50 46.5V87" />
        <path d="M40 87.5h20" />
      </g>
    </svg>
  );
}
