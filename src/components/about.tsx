import Image from "next/image";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import s from "./about.module.css";

export function About() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className={s.section}>
      <div className={s.inner}>
        <SectionHeading id="titulo-sobre" title="Sobre Mim" />

        <div className={s.grid}>
          <div className={s.text}>
            <p className={s.intro}>
              Sou a {siteConfig.name}, {siteConfig.role.toLowerCase()} clínica com mais de{" "}
              {siteConfig.stats.yearsOfExperience.replace("+", "")} anos de experiência no
              atendimento de adolescentes e adultos. Acredito profundamente no poder
              transformador da terapia e no potencial de cada pessoa para superar seus
              desafios.
            </p>
            <p className={s.paragraph}>
              Minha abordagem é Humanista e Transpessoal.
            </p>

            <dl className={s.stats}>
              <div className={s.stat}>
                <span className={s.statIconPrimary}>
                  <Award size={24} aria-hidden="true" />
                </span>
                <div>
                  <dt className={s.statValue}>
                    {siteConfig.stats.yearsOfExperience} Anos
                  </dt>
                  <dd className={s.statLabel}>Experiência</dd>
                </div>
              </div>
              <div className={s.stat}>
                <span className={s.statIconSecondary}>
                  <Users size={24} aria-hidden="true" />
                </span>
                <div>
                  <dt className={s.statValue}>{siteConfig.stats.patients}</dt>
                  <dd className={s.statLabel}>Pacientes</dd>
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
            className={s.photo}
          />
        </div>

        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardIconPrimary}>
              <BookOpen size={24} aria-hidden="true" />
            </span>
            <h3 className={s.cardTitle}>Formação Acadêmica</h3>
            <p className={s.cardText}>
              Graduação em Psicologia pela Universidade da Amazônia - UNAMA, Formação em Psicologia Humanista Rogeriana, Especialização: Sexologia Humana, Terapia Sexual e de Casal, Neuropsicologia e Avalaiação Psicologica.
            </p>
          </article>

          <article className={s.card}>
            <span className={s.cardIconSecondary}>
              <Heart size={24} aria-hidden="true" />
            </span>
            <h3 className={s.cardTitle}>Abordagem Humanizada</h3>
            <p className={s.cardText}>
              Acredito na escuta ativa, no acolhimento genuíno e na construção de uma relação
              terapêutica baseada na confiança e no respeito.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
