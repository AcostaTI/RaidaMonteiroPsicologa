import { Facebook, Heart, Instagram } from "lucide-react";
import { Brand } from "@/components/brand";
import { siteConfig } from "@/config/site";
import { hasLogoFile } from "@/lib/logo";
import s from "./footer.module.css";

const socialLinks = [
  {
    href: siteConfig.social.instagram,
    label: `Instagram de ${siteConfig.name}`,
    Icon: Instagram,
  },
  {
    href: siteConfig.social.facebook,
    label: `Facebook de ${siteConfig.name}`,
    Icon: Facebook,
  },
].filter((link) => Boolean(link.href));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.columns}>
          <div>
            <Brand
              tone="light"
              hasLogo={hasLogoFile}
              subtitle={`${siteConfig.role} ${siteConfig.crp}`}
              className={s.brand}
            />
            <p className={s.tagline}>{siteConfig.tagline}</p>
          </div>

          <div>
            <h2 className={s.columnTitle}>Contato</h2>
            <ul className={s.contactList}>
              <li>
                <a href={`tel:${siteConfig.phone.e164}`} className={s.contactLink}>
                  {siteConfig.phone.display}
                </a>
              </li>
            </ul>
          </div>

          {socialLinks.length > 0 && (
            <div>
              <h2 className={s.columnTitle}>Redes Sociais</h2>
              <ul className={s.socialList}>
                {socialLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={s.socialLink}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={s.bottom}>
          <p className={s.copyright}>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className={s.madeWith}>
            Feito com
            <Heart size={16} className={s.heart} aria-label="amor" />
            para cuidar de você
          </p>
        </div>
      </div>
    </footer>
  );
}
