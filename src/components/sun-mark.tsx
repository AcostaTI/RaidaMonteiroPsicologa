type SunMarkProps = {
  /** Lado do quadrado em pixels. Mesmo contrato da prop `size` do lucide. */
  size?: number;
  className?: string;
};

/**
 * Sol nascendo sobre a linha do horizonte, simbolo de autoconhecimento. O
 * `Sun` do lucide e um circulo fechado com 8 raios; a peca do manual de marca
 * traz um arco aberto embaixo, uma linha reta de horizonte e 16 raios, entao o
 * desenho e proprio.
 *
 * Tracado a partir de `public/icone_autoconhecimento.png`: circulo de raio
 * 11,78px centrado em (49,5 / 35,2), horizonte reto em y=42,5 com meia-largura
 * 12, raios de d=15,6 a 25,5 em passos de 22,5 graus. Tudo reescalado para o
 * viewBox 24x24 do lucide, para o peso do desenho bater com o dos outros
 * icones dos pilares.
 *
 * Mesmo contrato de `spiral-mark.tsx`: aceita `size`, herda a cor via
 * `currentColor` e e decorativo.
 */
export function SunMark({ size = 24, className }: SunMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Arco do sol, aberto embaixo num vao de ~65 graus. */}
      <path d="M15.9 14.47A4.62 4.62 0 1 0 8.1 14.47" />

      {/* Linha do horizonte, um pouco mais larga que o arco. */}
      <path d="M7.29 14.86h9.42" />

      {/* Os 16 raios. */}
      <path d="M18.12 12L22 12M17.65 9.66L21.24 8.17M16.33 7.67L19.07 4.93M14.34 6.35L15.83 2.76M12 5.88L12 2M9.66 6.35L8.17 2.76M7.67 7.67L4.93 4.93M6.35 9.66L2.76 8.17M5.88 12L2 12M6.35 14.34L2.76 15.83M7.67 16.33L4.93 19.07M9.66 17.65L8.17 21.24M12 18.12L12 22M14.34 17.65L15.83 21.24M16.33 16.33L19.07 19.07M17.65 14.34L21.24 15.83" />
    </svg>
  );
}
