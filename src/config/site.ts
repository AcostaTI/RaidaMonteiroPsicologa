/**
 * ============================================================================
 * ARQUIVO CENTRAL DE CONFIGURACAO
 * ============================================================================
 * Todo dado editavel do site vive aqui. Nenhum texto de contato, endereco ou
 * rede social esta escrito direto nos componentes.
 *
 * Os campos marcados com "TODO" ainda contem dados FICTICIOS, herdados do
 * prototipo do Figma. Eles alimentam o JSON-LD e os metadados de SEO, entao
 * precisam ser trocados pelos dados reais ANTES de publicar o site.
 * ============================================================================
 */

/** URL publica do site, sem barra no final. Definida em .env como NEXT_PUBLIC_SITE_URL. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.raidamonteiropsi.com.br"
).replace(/\/$/, "");

/**
 * Numero de telefone. Preencha apenas `digits` (somente numeros, com DDI 55).
 * Os outros formatos sao derivados automaticamente.
 */
const phoneDigits = "5591983163213"; // TODO: numero real (55 + DDD + numero)

const ddd = phoneDigits.slice(2, 4);
const localNumber = phoneDigits.slice(4);

export const siteConfig = {
  /** Nome completo, como aparece no titulo e no JSON-LD. */
  name: "Raida Monteiro",
  /** Nome curto, para o menu e o rodape. */
  shortName: "Raida Monteiro",
  role: "Psicóloga",

  /** TODO: registro real no Conselho Regional de Psicologia. */
  crp: "CRP 10/848",

  tagline: "Um espaço de escuta, acolhimento e transformação.",

  /**
   * Frase unica de resumo. Alimenta <meta name="description">, Open Graph e o
   * JSON-LD — NAO e o texto exibido na Hero. Buscadores cortam por volta de
   * 155 caracteres, entao mantenha curta e sem quebras de linha.
   */
  description:
    "Psicóloga clínica em Belém (PA). Um espaço de escuta, acolhimento e transformação, com atendimento presencial e online para adolescentes e adultos.",

  /**
   * Texto de apresentacao da Hero. Um item por paragrafo: o componente
   * renderiza um <p> para cada um.
   *
   * Nao use "\n" para separar paragrafos — o HTML colapsa quebras de linha em
   * um unico espaco e o texto sairia corrido.
   */
  intro: [
    "Seja muito bem-vindo(a).",
    "Se você chegou até aqui, talvez esteja buscando compreensão, apoio ou um novo olhar para sua vida. Quero que saiba que este é um espaço de acolhimento, respeito e escuta, onde sua história será recebida sem julgamentos.",
    "Acredito no potencial humano de crescimento e transformação. Juntos, podemos construir caminhos que favoreçam o autoconhecimento, o equilíbrio emocional e uma vida mais consciente e plena.",
    "Será um prazer caminhar ao seu lado nessa jornada.",
    "Raida Monteiro"
  ],

  phone: {
    /** Formato de exibicao: (11) 99999-9999 */
    display: `(${ddd}) ${localNumber.slice(0, 5)}-${localNumber.slice(5)}`,
    /** Formato E.164, para o link tel: */
    e164: `+${phoneDigits}`,
    /** Somente digitos, para o link do WhatsApp */
    whatsapp: phoneDigits,
  },

  /**
   * Localizacao do atendimento presencial, sem rua.
   *
   * Um PostalAddress apenas com cidade/estado e valido no schema.org e ja
   * sustenta a busca local ("psicóloga em Belém"), sem expor o endereco do
   * consultorio. Se um dia houver endereco publico, acrescente `street` e
   * `postalCode` aqui e no PostalAddress em components/json-ld.tsx.
   */
  location: {
    city: "Belém",
    state: "PA",
    /** Codigo de pais em ISO 3166-1 alpha-2. */
    country: "BR",
  },

  /**
   * Modalidade de atendimento. Aparece em dois lugares: o selo de destaque no
   * topo da Hero e a nota do cartao de agendamento em "Entre em Contato".
   */
  attendanceNote: "Atendimento presencial e online",

  /** Horarios exibidos na secao de contato. */
  openingHours: [
    { label: "Segunda a Sexta", value: "8h às 18h" },
    { label: "Sábados", value: "9h às 11h" },
  ],

  /** Mesmos horarios em formato schema.org, para o JSON-LD. */
  openingHoursSchema: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
    { days: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],

  /** TODO: perfis reais. Deixe a string vazia para ocultar o icone no site. */
  social: {
    instagram: "https://www.instagram.com/psi.raidamonteiro/",
    facebook: "https://www.facebook.com/raida.monteiro.7",
  },

  stats: {
    yearsOfExperience: "32",
    patients: "500+",
  },

  /** Credito de desenvolvimento, exibido na linha inferior do rodape. */
  developer: {
    name: "AMacielTecnologia",
    url: "https://amacieltecnologia.dev.br",
  },

  /**
   * TODO: trocar pelas fotos reais.
   * Ao usar arquivos locais, salve em /public e use caminhos como "/fotos/retrato.jpg",
   * depois remova o remotePatterns do Unsplash em next.config.ts.
   */
  images: {
    portrait:
      "https://images.unsplash.com/photo-1758273241086-f3585ef8c2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwc3ljaG9sb2dpc3QlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgxNTUyNzU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    therapy:
      "/perfil.png",
    wellness:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzgxNTUyNzU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
} as const;

/** Monta um link de WhatsApp com mensagem pre-preenchida e codificada. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.phone.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Itens de navegacao. Os href sao ancoras reais, rastreaveis por buscadores. */
export const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
] as const;
