import Image from "next/image";
import { Clock, Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, whatsappUrl } from "@/config/site";

const { address } = siteConfig;

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${address.street}, ${address.district}, ${address.city} - ${address.state}`,
)}`;

const socialLinks = [
  {
    href: siteConfig.social.instagram,
    label: `Instagram de ${siteConfig.name}`,
    Icon: Instagram,
    className: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    href: siteConfig.social.facebook,
    label: `Facebook de ${siteConfig.name}`,
    Icon: Facebook,
    className: "bg-blue-600",
  },
].filter((link) => Boolean(link.href));

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="scroll-mt-24 bg-muted/40 px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="titulo-contato"
          title="Entre em Contato"
          subtitle="Estou aqui para ajudar você. Entre em contato para agendar sua consulta"
        />

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-xl text-foreground">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    {/* Link tel: real: liga com um toque no celular. */}
                    <a
                      href={`tel:${siteConfig.phone.e164}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary/25">
                    <MapPin className="size-5 text-secondary-foreground" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Endereço</p>
                    <address className="not-italic text-muted-foreground">
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        {address.street}
                        <br />
                        {address.district}, {address.city} - {address.state}
                      </a>
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Horário de Atendimento</p>
                    <p className="text-muted-foreground">
                      {siteConfig.openingHours.map((slot) => (
                        <span key={slot.label} className="block">
                          {slot.label}: {slot.value}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {socialLinks.length > 0 && (
              <div>
                <h3 className="mb-4 text-xl text-foreground">Redes Sociais</h3>
                <ul className="flex gap-4">
                  {socialLinks.map(({ href, label, Icon, className }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={`flex size-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 ${className}`}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-border bg-white p-8 shadow-lg">
            <div className="mb-6 text-center">
              <span className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                <MessageCircle className="size-8 text-white" aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-xl text-foreground">Agende sua Consulta</h3>
              <p className="text-muted-foreground">
                Entre em contato pelo WhatsApp para agendar sua primeira sessão
              </p>
            </div>

            <a
              href={whatsappUrl("Olá! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Conversar no WhatsApp
            </a>

            <Image
              src={siteConfig.images.wellness}
              alt="Momento de bem-estar e cuidado com a saúde mental"
              width={1080}
              height={720}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="mt-8 h-48 w-full rounded-2xl object-cover"
            />

            <p className="mt-6 rounded-2xl bg-muted/60 p-4 text-center text-sm text-muted-foreground">
              ✨ Atendimento presencial e online disponível
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
