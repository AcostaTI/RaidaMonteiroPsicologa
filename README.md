# Dra. Raida Monteiro — Site institucional

Transcrição do protótipo do Figma (`stray-gloss-32882059.figma.site`) para Next.js 15,
com App Router, TypeScript e CSS puro (CSS Modules, sem framework). Conteúdo em pt-BR,
responsivo e com camada de SEO técnica.

## Rodando

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm start          # serve o build
npm run typecheck  # checagem de tipos
```

## Antes de publicar — o que precisa ser trocado

O protótipo do Figma vinha com **dados fictícios**. Eles foram preservados na
transcrição, mas estão todos isolados em **`src/config/site.ts`**, marcados com `TODO`.
Como esses campos alimentam o JSON-LD e os metadados, publicar sem trocá-los faria o
Google indexar informação errada.

| Campo em `src/config/site.ts` | Valor fictício atual |
| --- | --- |
| `crp` | `CRP 06/123456` |
| `phoneDigits` | `5511999999999` |
| `email` | `contato@drapaula.com.br` |
| `social.instagram` / `social.facebook` | links genéricos |
| `images` | 3 fotos de banco de imagens (Unsplash) |

Basta editar esse arquivo: nome, telefone, endereço e redes se propagam sozinhos para o
cabeçalho, o rodapé, os links de WhatsApp, o `tel:`, o `mailto:` e o JSON-LD.

Deixar uma rede social como string vazia (`""`) esconde o ícone automaticamente.

### Logo

Salve o símbolo Ψ recortado como **`public/logo.png`** — veja
[`public/LEIA-ME.md`](public/LEIA-ME.md) para o formato recomendado. Enquanto o arquivo
não existir, o site usa a recriação vetorial em `src/components/psi-mark.tsx`, então nada
quebra e nenhuma requisição 404 é feita (a checagem acontece em build, em `src/lib/logo.ts`).

### Domínio

Copie `.env.example` para `.env` e defina `NEXT_PUBLIC_SITE_URL` com o domínio final.
Ele alimenta canonical, `sitemap.xml`, `robots.txt` e Open Graph. Sem barra no final.

## Estrutura

```
src/
  app/
    layout.tsx            metadados, fontes, JSON-LD, skip-link
    page.tsx              composição da página
    globals.css           só faz @import de styles/tokens.css e styles/base.css
    icon.svg              favicon (símbolo Ψ)
    opengraph-image.tsx   cartão de compartilhamento, gerado no build
    sitemap.ts robots.ts  gerados automaticamente
  styles/
    tokens.css            custom properties: cores, tipografia, raios, sombras
    base.css              reset, elementos base, .sr-only, .skip-link
    shared.module.css     .container .section .btnPrimary .card .iconCircle…
  components/
    header.tsx            + header.module.css  (o padrão de todos)
    hero.tsx  about.tsx  services.tsx  contact.tsx  footer.tsx
    brand.tsx  psi-mark.tsx  section-heading.tsx  json-ld.tsx
  config/site.ts          ← todo dado editável vive aqui
  data/services.ts        áreas de atuação + etapas das sessões
  lib/logo.ts             detecta public/logo.png em build
```

### CSS

Cada componente tem seu `*.module.css` ao lado. Os módulos puxam as formas repetidas de
`styles/shared.module.css` com `composes`, então o componente importa só o próprio módulo:

```css
.primaryCta { composes: btnPrimary from "../styles/shared.module.css"; }
```

Não há `postcss.config.mjs` nem `tailwind.config.js` — o pipeline nativo do Next resolve
`@import` e CSS Modules. Cores, espaços, raios e sombras saem de `var(--token)`
definido em `styles/tokens.css`; ajustar a identidade visual é editar aquele arquivo.

## Paleta

Extraída do CSS do protótipo original — coincide com as cores da logo. Definida em
`src/styles/tokens.css`.

| Token | Hex |
| --- | --- |
| `primary` (verde sálvia) | `#8fa894` |
| `secondary` (lavanda) | `#c9b8d4` |
| `foreground` (verde escuro) | `#3a4d3f` |
| `background` (off-white) | `#faf9f7` |
| `muted` | `#f0ede9` |

Tipografia: **Cormorant Garamond** nos títulos (combina com a serifada da logo) e
**Inter** no corpo, ambas via `next/font` — sem requisição a servidor externo.

## O que foi feito na camada de SEO

O protótipo saía do Figma com `robots: noindex`, título "prototipo", sem dados
estruturados e com a navegação em `<button onClick>` (invisível para buscadores).

- `lang="pt-BR"`, título e descrição reais, canonical, keywords, Open Graph e Twitter Card
- JSON-LD com `Psychologist` + `Person` + `WebSite`: endereço, geo, horários,
  credencial no CRP e as 6 áreas de atuação como `MedicalTherapy` — base para busca local
  ([validar aqui](https://search.google.com/test/rich-results))
- `sitemap.xml` e `robots.txt` gerados pelo App Router
- HTML semântico: um único `<h1>`, hierarquia h2/h3/h4 sem saltos, `<section>` com
  `aria-labelledby`, `<nav>`, `<main>`
- Navegação por âncoras `<a href="#...">` reais, rastreáveis, com rolagem suave via CSS
- Telefone como `tel:`, e-mail como `mailto:`, endereço linkado para o Google Maps
- `next/image` com AVIF/WebP, `sizes` e `priority` na imagem de LCP
- Skip-link, foco visível, `aria-label` nos ícones, `prefers-reduced-motion`
- Página 100% estática (`○ Static`), ~111 kB de JS no primeiro carregamento

### Correção de bug herdada do protótipo

Os cards de "Áreas de Atuação" montavam as classes por interpolação
(`` bg-${cor}/10 ``), o que nunca gerava CSS — os ícones ficavam sem cor de fundo no site
original. Aqui a chave do dado é traduzida para a classe do módulo por um mapa explícito
(`accentClass` em `src/components/services.tsx`).
