import Image from "next/image";
import { Clock, Facebook, Instagram, MessageCircle, Phone, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, whatsappUrl } from "@/config/site";
import s from "./contact.module.css";

const socialLinks = [
  {
    href: siteConfig.social.instagram,
    label: `Instagram de ${siteConfig.name}`,
    Icon: Instagram,
    className: s.instagram,
  },
  {
    href: siteConfig.social.facebook,
    label: `Facebook de ${siteConfig.name}`,
    Icon: Facebook,
    className: s.facebook,
  },
].filter((link) => Boolean(link.href));

export function Contact() {
  return (
    <section id="contato" aria-labelledby="titulo-contato" className={s.section}>
      <div className={s.inner}>
        <SectionHeading
          id="titulo-contato"
          title="Entre em Contato"
          subtitle="A psicoteria é um encontro consigo mesmo. Você não precisa caminhar sozinho."
        />

        <div className={s.grid}>
          <div className={s.details}>
            <div>
              <h3 className={s.blockTitle}>Informações de Contato</h3>

              <div className={s.items}>
                <div className={s.item}>
                  <span className={s.itemIconPrimary}>
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className={s.itemLabel}>Telefone | WhatsApp</p>
                    {/* Link tel: real: liga com um toque no celular. */}
                    <a href={`tel:${siteConfig.phone.e164}`} className={s.itemLink}>
                      {siteConfig.phone.display}
                    </a>
                  </div>
                </div>

                <div className={s.item}>
                  <span className={s.itemIconPrimary}>
                    <Clock size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className={s.itemLabel}>Horário de Atendimento</p>
                    <p className={s.itemValue}>
                      {siteConfig.openingHours.map((slot) => (
                        <span key={slot.label} className={s.hoursRow}>
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
                <h3 className={s.socialTitle}>Redes Sociais</h3>
                <ul className={s.socialList}>
                  {socialLinks.map(({ href, label, Icon, className }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={className}
                      >
                        <Icon size={20} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={s.cta}>
            <div className={s.ctaHeader}>
              <span className={s.ctaIcon}>
                <MessageCircle size={32} aria-hidden="true" />
              </span>
              <h3 className={s.ctaTitle}>Agende sua Consulta</h3>
              <p className={s.ctaText}>
                Entre em contato pelo WhatsApp para agendar sua primeira sessão
              </p>
            </div>

            <a
              href={whatsappUrl("Olá! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className={s.ctaButton}
            >
              <MessageCircle size={20} aria-hidden="true" />
              Conversar no WhatsApp
            </a>

            {/* Mesmo texto do selo da Hero — os dois saem de `site.ts`. */}
            <p className={s.ctaNote}>
              <Sparkles size={20} aria-hidden="true" />
              {siteConfig.attendanceNote} disponível
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
