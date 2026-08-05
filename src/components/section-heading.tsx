type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  /** Vincula o <h2> ao aria-labelledby da <section> que o contem. */
  id?: string;
};

/** Titulo de secao com o divisor em degrade verde/lavanda do layout original. */
export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <h2 id={id} className="mb-4 text-3xl text-foreground md:text-4xl">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary"
      />
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
