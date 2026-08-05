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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.raidamonteiro.com.br"
).replace(/\/$/, "");

/**
 * Numero de telefone. Preencha apenas `digits` (somente numeros, com DDI 55).
 * Os outros formatos sao derivados automaticamente.
 */
const phoneDigits = "5511999999999"; // TODO: numero real (55 + DDD + numero)

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
  description:
    "Psicóloga clínica especializada em terapia cognitivo-comportamental, oferecendo atendimento humanizado para adultos e adolescentes.",

  phone: {
    /** Formato de exibicao: (11) 99999-9999 */
    display: `(${ddd}) ${localNumber.slice(0, 5)}-${localNumber.slice(5)}`,
    /** Formato E.164, para o link tel: */
    e164: `+${phoneDigits}`,
    /** Somente digitos, para o link do WhatsApp */
    whatsapp: phoneDigits,
  },

  /** TODO: e-mail real. */
  email: "contato@drapaula.com.br",

  /** TODO: endereco real do consultorio. */
  address: {
    street: "Av. Paulista, 1000 - Conjunto 808",
    district: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    postalCode: "01310-100",
    country: "BR",
    /** Coordenadas do consultorio. Ajudam no SEO local (Google Maps / busca local). */
    latitude: -23.5613,
    longitude: -46.6565,
  },

  /** Horarios exibidos na secao de contato. */
  openingHours: [
    { label: "Segunda a Sexta", value: "8h às 19h" },
    { label: "Sábados", value: "8h às 13h" },
  ],

  /** Mesmos horarios em formato schema.org, para o JSON-LD. */
  openingHoursSchema: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
    { days: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],

  /** TODO: perfis reais. Deixe a string vazia para ocultar o icone no site. */
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },

  stats: {
    yearsOfExperience: "10+",
    patients: "500+",
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
      "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbiUyMHBlYWNlZnVsJTIwY2FsbXxlbnwxfHx8fDE3ODE1NTI3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    wellness:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzgxNTUyNzU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
} as const;

/** Monta um link de WhatsApp com mensagem pre-preenchida e codificada. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.phone.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Endereco em uma linha, para o rodape. */
export const addressOneLine = `${siteConfig.address.street} - ${siteConfig.address.city}/${siteConfig.address.state}`;

/** Itens de navegacao. Os href sao ancoras reais, rastreaveis por buscadores. */
export const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
] as const;
