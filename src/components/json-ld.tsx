import { approaches, specializations } from "@/data/formation";
import { services } from "@/data/services";
import { siteConfig, siteUrl } from "@/config/site";

/**
 * Dados estruturados (schema.org) em JSON-LD.
 *
 * E o que permite ao Google entender que o site pertence a uma psicologa
 * especifica, com endereco, telefone e horarios — base para aparecer em
 * buscas locais ("psicóloga perto de mim") e para exibir rich results.
 *
 * Validar em: https://search.google.com/test/rich-results
 */
export function JsonLd() {
  const businessId = `${siteUrl}/#psicologa`;

  // Areas de atuacao (cards de "Serviços") + formacao academica, sem repetir
  // string nenhuma.
  const knowsAbout = [
    ...services.map((service) => service.title),
    ...specializations,
    ...approaches,
  ];

  const graph = [
    {
      "@type": "Psychologist",
      "@id": businessId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      description: siteConfig.description,
      url: siteUrl,
      telephone: siteConfig.phone.e164,
      email: siteConfig.email,
      priceRange: "$$",
      currenciesAccepted: "BRL",
      // Cidade/estado sem rua: sustenta a busca local sem expor o consultorio.
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        addressCountry: siteConfig.location.country,
      },
      openingHoursSpecification: siteConfig.openingHoursSchema.map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: slot.days,
        opens: slot.opens,
        closes: slot.closes,
      })),
      sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean),
      // Presencial na cidade, online no resto do pais.
      areaServed: [
        { "@type": "City", name: `${siteConfig.location.city}, ${siteConfig.location.state}` },
        { "@type": "Country", name: "Brasil" },
      ],
      availableService: services.map((service) => ({
        "@type": "MedicalTherapy",
        name: service.title
      })),
      medicalSpecialty: "Psychiatric",
      founder: { "@id": `${siteUrl}/#pessoa` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#pessoa`,
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      url: siteUrl,
      worksFor: { "@id": businessId },
      knowsAbout,
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Registro Profissional",
        name: siteConfig.crp,
        recognizedBy: {
          "@type": "Organization",
          name: "Conselho Regional de Psicologia",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#site`,
      url: siteUrl,
      name: siteConfig.name,
      inLanguage: "pt-BR",
      description: siteConfig.description,
      publisher: { "@id": businessId },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // O conteudo e gerado no servidor a partir de dados proprios, nunca de
      // entrada do usuario.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
