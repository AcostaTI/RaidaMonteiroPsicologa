import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { pillars } from "@/data/pillars";
import { services } from "@/data/services";
import s from "./services.module.css";

/**
 * Mapa de variantes de cor.
 *
 * Com CSS Modules os nomes de classe sao gerados no build, entao a chave do
 * dado (`primary` / `secondary`) precisa ser traduzida para a classe do modulo
 * por um mapa explicito como este — nunca por interpolacao de string.
 */
const accentClass = {
  primary: s.accentPrimary,
  secondary: s.accentSecondary,
} as const;

export function Services() {
  return (
    <section id="servicos" aria-labelledby="titulo-servicos" className={s.section}>
      <div className={s.inner}>
        <SectionHeading
          id="titulo-servicos"
          title="Áreas de Atuação"
          subtitle="Atendimento especializado e personalizado para diferentes questões emocionais e psicológicas"
        />

        <ul className={s.grid}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <li key={service.title}>
                <article className={s.card}>
                  <span className={accentClass[service.accent]}>
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <h3 className={s.cardTitle}>{service.title}</h3>
                  <p className={s.cardText}>{service.description}</p>
                </article>
              </li>
            );
          })}
        </ul>

        {/*
          Pilares da pratica. Os desenhos sao os PNGs do manual de marca, nao
          icones do lucide — o `aria-hidden` fica no <span> em volta e o `alt`
          e vazio, porque o titulo logo abaixo ja diz a mesma coisa.
        */}
        <div className={s.pillars}>
          <h3 className={s.pillarsTitle}>Pilares da Minha Prática</h3>

          <Image
            src="/ramo.png"
            alt=""
            aria-hidden="true"
            width={350}
            height={147}
            className={s.pillarsOrnament}
          />

          <ul className={s.pillarsList}>
            {pillars.map((pillar) => (
              <li key={pillar.title} className={s.pillar}>
                <span className={s.pillarIcon} aria-hidden="true">
                  <Image
                    src={pillar.image}
                    alt=""
                    width={44}
                    height={44}
                    className={s.pillarImage}
                  />
                </span>
                <h4 className={s.pillarTitle}>{pillar.title}</h4>
                <p className={s.pillarText}>{pillar.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
