import Image from "next/image";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="scroll-mt-24 bg-muted/40 px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="titulo-sobre" title="Sobre Mim" />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              Sou a {siteConfig.name}, {siteConfig.role.toLowerCase()} clínica com mais de 10
              anos de experiência no atendimento de adolescentes e adultos. Acredito
              profundamente no poder transformador da terapia e no potencial de cada pessoa
              para superar seus desafios.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Minha abordagem é baseada na terapia cognitivo-comportamental (TCC), oferecendo
              um espaço seguro e acolhedor onde você pode explorar seus pensamentos, emoções e
              comportamentos de forma honesta e sem julgamentos.
            </p>

            <dl className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Award className="size-6 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <dt className="font-medium text-foreground">
                    {siteConfig.stats.yearsOfExperience} Anos
                  </dt>
                  <dd className="text-sm text-muted-foreground">Experiência</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary/25">
                  <Users className="size-6 text-secondary-foreground" aria-hidden="true" />
                </span>
                <div>
                  <dt className="font-medium text-foreground">{siteConfig.stats.patients}</dt>
                  <dd className="text-sm text-muted-foreground">Pacientes</dd>
                </div>
              </div>
            </dl>
          </div>

          <Image
            src={siteConfig.images.therapy}
            alt="Ambiente de terapia acolhedor e tranquilo"
            width={1080}
            height={810}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-[400px] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="size-6 text-primary" aria-hidden="true" />
            </span>
            <h3 className="mb-2 text-xl text-foreground">Formação Acadêmica</h3>
            <p className="text-muted-foreground">
              Graduação em Psicologia pela USP, especialização em Terapia
              Cognitivo-Comportamental e mestrado em Psicologia Clínica.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-secondary/25">
              <Heart className="size-6 text-secondary-foreground" aria-hidden="true" />
            </span>
            <h3 className="mb-2 text-xl text-foreground">Abordagem Humanizada</h3>
            <p className="text-muted-foreground">
              Acredito na escuta ativa, no acolhimento genuíno e na construção de uma relação
              terapêutica baseada na confiança e no respeito.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
