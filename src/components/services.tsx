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
          Pilares da pratica. O `aria-hidden` fica no <span> em volta, e nao no
          icone: assim o tipo `PillarIcon` nao precisa declarar props de ARIA e
          o `SpiralMark` continua intercambiavel com os icones do lucide.
        */}
        <div className={s.pillars}>
          <h3 className={s.pillarsTitle}>Pilares da Minha Prática</h3>

          <ul className={s.pillarsList}>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <li key={pillar.title} className={s.pillar}>
                  <span className={s.pillarIcon} aria-hidden="true">
                    <Icon size={40} />
                  </span>
                  <h4 className={s.pillarTitle}>{pillar.title}</h4>
                  <p className={s.pillarText}>{pillar.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
