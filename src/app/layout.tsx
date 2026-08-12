import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/json-ld";
import { siteConfig, siteUrl } from "@/config/site";
import "./globals.css";

/*
 * Sem next/font: a tipografia agora e Comic Sans MS, fonte de sistema, entao
 * nao ha webfont para baixar. A pilha esta em --family-sans, em tokens.css.
 */

const pageTitle = `${siteConfig.name} | ${siteConfig.role} Atendimento Online e em Belém do Pará`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Saúde",
  keywords: [
    "psicóloga",
    "psicóloga em Belém do Pará",
    "psicóloga clínica",
    "terapia cognitivo-comportamental",
    "terapia online",
    "terapia de casal",
    "atendimento psicológico",
    "tratamento de ansiedade",
    "tratamento de depressão",
    "síndrome do pânico",
    "autoestima e autoconhecimento",
    "psicoterapia para adultos",
    "psicoterapia para adolescentes",
    siteConfig.name,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteConfig.name,
    title: pageTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2f4a3a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Estilos de .skip-link em src/styles/base.css. */}
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
