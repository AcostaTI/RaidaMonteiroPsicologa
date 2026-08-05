import { SectionHeading } from "@/components/section-heading";
import { sessionSteps, services } from "@/data/services";
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

/** Cor do numero de cada etapa, alternando verde e lavanda. */
const stepNumberClass = [
  s.stepNumberPrimary,
  s.stepNumberSecondary,
  s.stepNumberPrimary,
] as const;

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

        <div className={s.steps}>
          <h3 className={s.stepsTitle}>Como Funcionam as Sessões?</h3>

          <ol className={s.stepsList}>
            {sessionSteps.map((step, index) => (
              <li key={step.title}>
                <span className={stepNumberClass[index]} aria-hidden="true">
                  {index + 1}
                </span>
                <h4 className={s.stepTitle}>{step.title}</h4>
                <p className={s.stepText}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
