type LeafMarkProps = {
  className?: string;
};

/**
 * Elemento grafico da marca: um ramo de folhas, simbolo de crescimento e
 * acolhimento. Usado como divisor decorativo.
 *
 * Herda a cor de quem o contem via `currentColor` e o tamanho vem da classe do
 * consumidor — o SVG nao define largura propria.
 */
export function LeafMark({ className }: LeafMarkProps) {
  return (
    <svg
      viewBox="0 0 64 24"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* Haste. */}
      <path
        d="M4 19C18 16 34 12 56 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Folhas acima da haste. */}
      <g fill="currentColor" opacity="0.75">
        <path d="M14 16c0-4.4 3.4-8 7.6-8.4.4 4.4-3 8-7.6 8.4Z" />
        <path d="M26 13c0-4.4 3.4-8 7.6-8.4.4 4.4-3 8-7.6 8.4Z" />
        <path d="M38 10c0-4.4 3.4-8 7.6-8.4.4 4.4-3 8-7.6 8.4Z" />
      </g>

      {/* Folhas abaixo, alternadas. */}
      <g fill="currentColor" opacity="0.45">
        <path d="M20 15c0 4.4 3.4 8 7.6 8.4.4-4.4-3-8-7.6-8.4Z" />
        <path d="M32 12c0 4.4 3.4 8 7.6 8.4.4-4.4-3-8-7.6-8.4Z" />
      </g>
    </svg>
  );
}
