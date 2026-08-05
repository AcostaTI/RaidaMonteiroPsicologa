import { Facebook, Heart, Instagram } from "lucide-react";
import { Brand } from "@/components/brand";
import { addressOneLine, siteConfig } from "@/config/site";
import { hasLogoFile } from "@/lib/logo";

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
    <footer className="bg-foreground px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <Brand
              tone="light"
              hasLogo={hasLogoFile}
              subtitle={`${siteConfig.role} ${siteConfig.crp}`}
              className="mb-4"
            />
            <p className="text-sm text-white/70">{siteConfig.tagline}</p>
          </div>

          <div>
            <h2 className="mb-4 text-lg text-white">Contato</h2>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${siteConfig.phone.e164}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{addressOneLine}</li>
            </ul>
          </div>

          {socialLinks.length > 0 && (
            <div>
              <h2 className="mb-4 text-lg text-white">Redes Sociais</h2>
              <ul className="flex gap-4">
                {socialLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/70">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1 text-sm text-white/70">
            Feito com
            <Heart className="size-4 fill-red-500 text-red-500" aria-label="amor" />
            para cuidar de você
          </p>
        </div>
      </div>
    </footer>
  );
}
