# Pasta `public/`

Arquivos colocados aqui ficam acessíveis na raiz do site (`public/logo.png` → `/logo.png`).

## `logo.png` — a logo real

O site procura por **`public/logo.png`** e usa esse arquivo como símbolo da marca no
cabeçalho e no rodapé. Enquanto o arquivo não existir, entra automaticamente a versão
vetorial do símbolo Ψ (`src/components/psi-mark.tsx`) — o layout nunca quebra.

**Salve aqui uma versão recortada contendo apenas o símbolo Ψ** (o desenho do topo da
logo, sem o nome escrito embaixo), em PNG com fundo transparente, quadrado,
preferencialmente 512×512.

O recorte importa: ao lado do símbolo o site já escreve "Dra. Raida Monteiro / Psicóloga"
em texto real — que é o que os buscadores leem. Se você salvar a logo completa (com o
nome desenhado), o nome apareceria duas vezes e, reduzido para 44 px de altura no
cabeçalho, ficaria ilegível.

## Opcional

- `logo-completa.png` — a logo original inteira, se quiser usá-la em outros materiais.
- `fotos/` — as fotos reais da profissional e do consultório. Depois de salvá-las,
  atualize os caminhos em `src/config/site.ts` (campo `images`) e remova o
  `remotePatterns` do Unsplash em `next.config.ts`.
