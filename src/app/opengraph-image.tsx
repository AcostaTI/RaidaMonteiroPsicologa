import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Imagem de previa gerada no build. E o cartao que aparece quando o link do
 * site e compartilhado no WhatsApp, Instagram, Facebook ou LinkedIn.
 */
export default function OpengraphImage() {
  const psiSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="180" height="180">
      <path d="M49.4 63C38.6 50.4 41.6 31 54.4 15.5c2.6 14.4-4.2 22.6-5 47.5Z" fill="#b0a0c4"/>
      <path d="M50.6 63C61.4 50.4 58.4 31 45.6 15.5c-2.6 14.4 4.2 22.6 5 47.5Z" fill="#c9b8d4"/>
      <g fill="none" stroke="#8fa894" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M27.5 28.5C24.5 52 28.5 71 50 79"/>
        <path d="M72.5 28.5C75.5 52 71.5 71 50 79"/>
        <path d="M50 46.5V87"/>
        <path d="M40 87.5h20"/>
      </g>
    </svg>`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf9f7",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c9b8d455 0%, transparent 45%), radial-gradient(circle at 80% 80%, #8fa89455 0%, transparent 45%)",
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml;base64,${Buffer.from(psiSvg).toString("base64")}`}
          alt=""
          width={180}
          height={180}
        />

        <div style={{ display: "flex", fontSize: 68, color: "#3a4d3f", marginTop: 28 }}>
          {siteConfig.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#6b6b78",
            marginTop: 12,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.role}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#3a4d3f",
            marginTop: 36,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size,
  );
}
