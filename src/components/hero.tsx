import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import s from "./hero.module.css";

export function Hero() {
  return (
    <section id="topo" className={s.section}>
      <div className={s.grid}>
        <div className={s.content}>
          <p className={s.badge}>{siteConfig.crp}</p>

          {/* Unico <h1> da pagina: o titulo mais importante para SEO. */}
          <h1 className={s.title}>{siteConfig.tagline}</h1>

          <div className={s.lead}>
            {siteConfig.intro.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>

          <div className={s.actions}>
            <a
              href={whatsappUrl("Olá! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className={s.primaryCta}
            >
              <MessageCircle size={20} aria-hidden="true" />
              Agendar Consulta
            </a>
            <a href="#sobre" className={s.secondaryCta}>
              Saiba Mais
            </a>
          </div>
        </div>

        <div className={s.figure}>
          <div aria-hidden="true" className={s.haloTop} />
          <div aria-hidden="true" className={s.haloBottom} />
          <Image
            src={siteConfig.images.portrait}
            alt={`${siteConfig.name}, ${siteConfig.role.toLowerCase()} clínica, em seu consultório`}
            width={1080}
            height={1350}
            /* priority: esta e a maior imagem visivel no carregamento (LCP). */
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={s.portrait}
          />
        </div>
      </div>
    </section>
  );
}
