export type Pillar = {
  /**
   * Caminho do desenho em `/public`. Os quatro arquivos sao quadrados e tem o
   * traco ocupando 88% do lado, entao todos aparecem no mesmo tamanho optico
   * dentro da caixa fixa de `.pillarImage` — sem ajuste por item.
   */
  image: string;
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
    image: "/acolhimento.png",
    title: "Acolhimento",
    description: "Um espaço seguro para ser quem você é.",
  },
  {
    image: "/presenca.png",
    title: "Presença",
    description: "Escuta genuína e respeito à sua história.",
  },
  {
    image: "/autoconhecimento.png",
    title: "Autoconhecimento",
    description: "Caminhos para ampliar a consciência e integrar-se.",
  },
  {
    image: "/transformacao.png",
    title: "Transformação",
    description: "Libertar-se do que te limita para viver com mais sentido.",
  },
];
