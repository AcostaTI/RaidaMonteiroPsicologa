import Image from "next/image";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { specializations } from "@/data/formation";
import s from "./about.module.css";

export function About() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className={s.section}>
      <div className={s.inner}>
        <SectionHeading id="titulo-sobre" title="Sobre Mim" />

        <div className={s.grid}>
          <div className={s.text}>
            <p className={s.intro}>
              Sou a {siteConfig.name}, {siteConfig.role.toLowerCase()} há {" "}
              {siteConfig.stats.yearsOfExperience} anos, dedicada ao cuidado da saúde mental e emocional do ser humano.
            </p>
            <p className={s.intro}>
              Ao longo da minha trajetória profissional, busquei uma formação ampla e contínua, 
              com formação em Psicologia Transpessoal, especializações em Sexologia, Neuropsicologia e 
              Avaliação Psicológica.
            </p>
            <p className={s.intro}>
              Meu trabalho é fundamentado na Psicologia Humanista e Transpessoal, abordagem que valoriza a 
              pessoa em sua totalidade — corpo, emoção, pensamento e consciência. Acredito que cada pessoa 
              possui recursos internos para crescer, ressignificar experiências e construir uma vida com mais equilíbrio, 
              autenticidade e sentido.
            </p>
            <p className={s.intro}>
              Ofereço um espaço de escuta acolhedora, respeito e confiança, onde cada pessoa possa se sentir segura para se 
              revelar e compreender suas questões, fortalecer seus recursos emocionais e desenvolver uma relação mais saudável 
              consigo mesma e com os outros.
            </p>
            <p className={s.intro}>
              Será um prazer caminhar ao seu lado em sua jornada de autoconhecimento e transformação.
            </p>

            {/* Ramo do manual de marca, fechando o texto antes do indicador. */}
            <Image
              src="/ramo.png"
              alt=""
              aria-hidden="true"
              width={350}
              height={147}
              className={s.ornament}
            />

          </div>

          <Image
            src={siteConfig.images.therapy}
            alt={`${siteConfig.name}, ${siteConfig.role.toLowerCase()}`}
            width={1080}
            height={810}
            sizes="(max-width: 48rem) 100vw, 30rem"
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
              - Graduação em Psicologia pela Universidade da Amazônia - UNAMA, em dezembro de 1994.
            </p>
            <p className={s.cardText}> - Formação em Psicologia Humanista Rogeriana - UNAMA.</p>
            <p className={s.cardText}> - Formação em Psicologia Transpessoal - ALUBRAT.</p>
            <p className={s.cardLabel}> - Especialização:</p>
            <ul className={s.cardList}>
              {specializations.map((specialization) => (
                <li key={specialization}>{specialization}</li>
              ))}
            </ul>
          </article>

          <article className={s.card}>
            <span className={s.cardIconSecondary}>
              <Heart size={24} aria-hidden="true" />
            </span>
            <h3 className={s.cardTitle}>Minha Abordagem Terapêutica </h3>
            <h4> - Humanista Rogeriana</h4>
            <p className={s.cardText}>
              Segundo Carl Rogers, todo ser humano possui uma força natural que o 
              impulsiona a crescer, aprender, superar dificuldades e desenvolver 
              suas potencialidades. Assim como uma semente tende a se transformar 
              em árvore quando encontra condições favoráveis, as pessoas também tendem a 
              se desenvolver quando vivem relações baseadas em acolhimento, respeito e aceitação.
            </p>
            <br />
            <h4> - Psicologia Transpessoal</h4>
            <p className={s.cardText}>
              A Psicologia Transpessoal tenta compreender o ser humano em sua totalidade.
               Além das emoções e dos pensamentos, considera também a busca por significado, 
               propósito e crescimento interior. O trabalho terapêutico acolhe o que a pessoa 
               sente (corpo emocional), o que ela pensa (corpo mental) e os aprendizados mais 
               profundos de sua trajetória (corpo causal), favorecendo o autoconhecimento, 
               a expansão da consciência e uma vida mais plena e significativa.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
