"use client";

import { useState } from "react";
import { PsiMark } from "@/components/psi-mark";
import { siteConfig } from "@/config/site";
import s from "./brand.module.css";

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
  className,
}: BrandProps) {
  // Rede de seguranca: cobre o caso de o arquivo sumir depois do build.
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = hasLogo && !imageFailed;
  const isLight = tone === "light";

  return (
    <span className={className ? `${s.brand} ${className}` : s.brand}>
      <span className={s.markSlot}>
        {showImage ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className={s.markImage}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <PsiMark className={s.markImage} tone={tone} />
        )}
      </span>

      <span className={s.text}>
        <span className={isLight ? `${s.name} ${s.nameLight}` : s.name}>
          {siteConfig.name}
        </span>
        <span className={isLight ? `${s.role} ${s.roleLight}` : s.role}>
          {subtitle ?? siteConfig.role}
        </span>
      </span>
    </span>
  );
}
