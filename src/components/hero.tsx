import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";

export function Hero() {
  return (
    <section id="topo" className="scroll-mt-24 px-4 pb-20 pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-secondary/25 px-4 py-2 text-secondary-foreground">
            {siteConfig.crp}
          </p>

          {/* Unico <h1> da pagina: o titulo mais importante para SEO. */}
          <h1 className="text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl("Olá! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Agendar Consulta
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-border bg-white px-8 py-4 text-center text-foreground transition-colors hover:bg-muted"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Halos decorativos do layout original. */}
          <div
            aria-hidden="true"
            className="absolute -left-6 -top-6 size-72 rounded-full bg-secondary/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 size-72 rounded-full bg-primary/25 blur-3xl"
          />
          <Image
            src={siteConfig.images.portrait}
            alt={`${siteConfig.name}, ${siteConfig.role.toLowerCase()} clínica, em seu consultório`}
            width={1080}
            height={1350}
            /* priority: esta e a maior imagem visivel no carregamento (LCP). */
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="relative h-[420px] w-full rounded-3xl object-cover shadow-2xl md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
