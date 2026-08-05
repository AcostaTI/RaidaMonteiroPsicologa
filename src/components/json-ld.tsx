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
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.address.latitude,
        longitude: siteConfig.address.longitude,
      },
      openingHoursSpecification: siteConfig.openingHoursSchema.map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: slot.days,
        opens: slot.opens,
        closes: slot.closes,
      })),
      sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean),
      // Atendimento online alem do presencial.
      areaServed: { "@type": "Country", name: "Brasil" },
      availableService: services.map((service) => ({
        "@type": "MedicalTherapy",
        name: service.title,
        description: service.description,
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
      knowsAbout: services.map((service) => service.title),
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
