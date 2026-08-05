import s from "./section-heading.module.css";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  /** Vincula o <h2> ao aria-labelledby da <section> que o contem. */
  id?: string;
};

/** Titulo de secao com o divisor em degrade verde/lavanda do layout original. */
export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className={s.wrapper}>
      <h2 id={id} className={s.title}>
        {title}
      </h2>
      <div aria-hidden="true" className={s.divider} />
      {subtitle && <p className={s.subtitle}>{subtitle}</p>}
    </div>
  );
}
