type AmacielMarkProps = {
  className?: string;
};

/**
 * Recriacao vetorial da marca <ΛM> da AMacielTecnologia, usada no credito do rodape.
 *
 * O ΛM herda a cor do texto em volta (`currentColor`) porque o azul-marinho original
 * nao tem contraste sobre o verde escuro do rodape; os colchetes mantem o ciano da
 * marca — cor de terceiro, por isso escrita literal e nao como token.
 */
export function AmacielMark({ className }: AmacielMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 190 64"
      fill="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="40,12 20,32 40,52" stroke="#25E5F7" strokeWidth="7" />
      <polyline points="52,56 74,8 96,56" stroke="currentColor" strokeWidth="8" />
      <polyline
        points="106,56 106,16 124,38 142,16 142,56"
        stroke="currentColor"
        strokeWidth="8"
      />
      <polyline points="150,12 170,32 150,52" stroke="#25E5F7" strokeWidth="7" />
    </svg>
  );
}
