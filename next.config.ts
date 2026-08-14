import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera .next/standalone com um server.js e só as dependências usadas — é o que o
  // Dockerfile copia para a imagem final. Não altera a renderizacao estática das rotas.
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // TODO: remover quando as fotos do Unsplash forem trocadas pelas fotos reais em /public.
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
