import { SectionHeading } from "@/components/section-heading";
import { sessionSteps, services } from "@/data/services";

/**
 * Classes completas por variante.
 *
 * O prototipo original montava as classes por interpolacao (`bg-${cor}/10`),
 * o que nao funciona: o Tailwind faz analise estatica do codigo e so gera as
 * classes que consegue ler por inteiro. Por isso os icones ficavam sem fundo.
 */
const accentStyles = {
  primary: { wrapper: "bg-primary/10", icon: "text-primary" },
  secondary: { wrapper: "bg-secondary/25", icon: "text-secondary-foreground" },
} as const;

const stepAccent = ["text-primary", "text-secondary-foreground", "text-primary"] as const;

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="titulo-servicos"
      className="scroll-mt-24 px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="titulo-servicos"
          title="Áreas de Atuação"
          subtitle="Atendimento especializado e personalizado para diferentes questões emocionais e psicológicas"
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            const accent = accentStyles[service.accent];

            return (
              <li key={service.title}>
                <article className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <span
                    className={`mb-4 flex size-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${accent.wrapper}`}
                  >
                    <Icon className={`size-7 ${accent.icon}`} aria-hidden="true" />
                  </span>
                  <h3 className="mb-3 text-xl text-foreground">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/20 p-8 text-center md:p-12">
          <h3 className="mb-4 text-2xl text-foreground md:text-3xl">
            Como Funcionam as Sessões?
          </h3>

          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {sessionSteps.map((step, index) => (
              <li key={step.title}>
                <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className={`font-semibold ${stepAccent[index]}`} aria-hidden="true">
                    {index + 1}
                  </span>
                </span>
                <h4 className="mb-2 text-lg text-foreground">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
