"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Brand } from "@/components/brand";
import { navItems, whatsappUrl } from "@/config/site";

export function Header({ hasLogo }: { hasLogo: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#topo" aria-label="Ir para o início da página">
          <Brand hasLogo={hasLogo} />
        </a>

        {/* Navegacao desktop: ancoras reais, rastreaveis por buscadores. */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className="flex flex-col gap-4 border-t border-border bg-white px-4 py-4 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-left text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
