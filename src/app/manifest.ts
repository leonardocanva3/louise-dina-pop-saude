import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Louise Diná Psicóloga",
    short_name: "Louise Diná",
    description: "Psicoterapia e Terapia Cognitivo-Comportamental em Salvador.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf9",
    theme_color: "#642f39",
    lang: "pt-BR",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}

