type SpiralMarkProps = {
  /** Lado do quadrado em pixels. Mesmo contrato da prop `size` do lucide. */
  size?: number;
  className?: string;
};

/**
 * Espiral aberta, simbolo de transformacao. O lucide 0.487 nao traz nenhum
 * icone com essa forma, entao o desenho e proprio — mesmo contrato de
 * `leaf-mark.tsx`: `currentColor`, decorativo, sem cor propria.
 *
 * Diferente do `LeafMark`, aceita `size` e o aplica em `width`/`height`. Assim
 * ele e intercambiavel com os icones do lucide na lista de `pillars`, que
 * renderiza todos com um `<Icon size={40} />` so.
 *
 * O traco e uma espiral de Arquimedes de 2,35 voltas, amostrada e convertida em
 * cubicas, com a caixa centrada no viewBox 24x24 do lucide para o peso do
 * desenho bater com o dos outros tres icones.
 */
export function SpiralMark({ size = 24, className }: SpiralMarkProps) {
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
      <path d="M11.43 12.53 C11.33 12.36 11.31 12.14 11.13 12.03 C10.95 11.92 10.63 11.81 10.36 11.87 C10.09 11.92 9.71 12.1 9.5 12.38 C9.28 12.65 9.08 13.11 9.09 13.54 C9.1 13.96 9.26 14.53 9.58 14.91 C9.9 15.29 10.45 15.69 11.01 15.81 C11.56 15.93 12.34 15.91 12.92 15.63 C13.5 15.36 14.17 14.81 14.51 14.17 C14.84 13.54 15.06 12.6 14.93 11.82 C14.81 11.03 14.38 10.07 13.76 9.47 C13.13 8.86 12.13 8.31 11.19 8.19 C10.26 8.06 9.03 8.23 8.14 8.73 C7.25 9.22 6.3 10.16 5.85 11.16 C5.4 12.15 5.19 13.56 5.43 14.7 C5.67 15.85 6.38 17.19 7.32 18.02 C8.25 18.84 9.7 19.54 11.02 19.66 C12.33 19.77 14.01 19.45 15.2 18.73 C16.39 18.01 17.61 16.68 18.17 15.32 C18.74 13.96 18.94 12.08 18.57 10.58 C18.2 9.08 17.2 7.36 15.96 6.32 C14.71 5.28 12.8 4.45 11.11 4.34 C9.42 4.24 7.57 5.23 5.8 5.68" />
    </svg>
  );
}
