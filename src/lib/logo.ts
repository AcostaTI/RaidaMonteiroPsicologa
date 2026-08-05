import fs from "node:fs";
import path from "node:path";

/**
 * Checa, no momento do build, se a logo real foi salva em public/logo.png.
 *
 * Sem isso o site pediria /logo.png a cada visita mesmo sem o arquivo existir,
 * gerando um 404 e um flash de imagem quebrada antes do fallback entrar.
 *
 * Este modulo usa `fs`, entao so pode ser importado por Server Components.
 */
export const hasLogoFile = fs.existsSync(path.join(process.cwd(), "public", "logo.png"));
