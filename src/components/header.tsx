"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Brand } from "@/components/brand";
import { navItems, whatsappUrl } from "@/config/site";
import s from "./header.module.css";
import { siteConfig } from "@/config/site";

export function Header({ hasLogo }: { hasLogo: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <a href="#topo" aria-label="Ir para o início da página">
          <Brand hasLogo={hasLogo}  subtitle={`${siteConfig.role} ${siteConfig.crp}`} className={s.brand} />
        </a>

        {/* Navegacao desktop: ancoras reais, rastreaveis por buscadores. */}
        <nav aria-label="Navegação principal" className={s.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={s.navLink}>
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={s.whatsapp}
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className={s.menuButton}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className={s.mobileNav}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={s.mobileNavLink}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className={s.mobileWhatsapp}
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
