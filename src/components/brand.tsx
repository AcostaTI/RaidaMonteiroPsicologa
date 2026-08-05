"use client";

import { useState } from "react";
import { PsiMark } from "@/components/psi-mark";
import { siteConfig } from "@/config/site";

type BrandProps = {
  /** "light" inverte as cores do texto para uso sobre o rodape escuro. */
  tone?: "brand" | "light";
  /** Substitui a linha de baixo (por padrao, a funcao: "Psicóloga"). */
  subtitle?: string;
  /**
   * Se public/logo.png existe. Calculado no build por src/lib/logo.ts e
   * repassado pelos Server Components.
   */
  hasLogo?: boolean;
  className?: string;
};

/**
 * Assinatura da marca: simbolo + nome + funcao.
 *
 * O simbolo tenta carregar /public/logo.png (a logo real). Se o arquivo ainda
 * nao existir, cai automaticamente na versao vetorial <PsiMark />, entao o
 * layout nunca quebra.
 */
export function Brand({
  tone = "brand",
  subtitle,
  hasLogo = false,
  className = "",
}: BrandProps) {
  // Rede de seguranca: cobre o caso de o arquivo sumir depois do build.
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = hasLogo && !imageFailed;

  const nameColor = tone === "light" ? "text-white" : "text-foreground";
  const roleColor = tone === "light" ? "text-white/70" : "text-muted-foreground";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="relative flex size-11 shrink-0 items-center justify-center">
        {showImage ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="size-full object-contain"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <PsiMark className="size-full" tone={tone} />
        )}
      </span>

      <span className="flex flex-col leading-tight">
        <span className={`font-serif text-lg font-medium ${nameColor}`}>
          {siteConfig.name}
        </span>
        <span className={`text-sm ${roleColor}`}>{subtitle ?? siteConfig.role}</span>
      </span>
    </span>
  );
}
