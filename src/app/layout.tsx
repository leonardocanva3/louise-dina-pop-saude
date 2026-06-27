import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { GoogleTags } from "@/components/GoogleTags";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Louise Diná | Psicóloga em Salvador – Psicoterapia e TCC",
    template: "%s | Louise Diná Psicóloga",
  },
  description:
    "Psicóloga em Salvador com cerca de 15 anos de experiência. Psicoterapia e Terapia Cognitivo-Comportamental para adolescentes, adultos, casais e famílias.",
  keywords: [
    "psicóloga em Salvador", "psicóloga Salvador", "psicoterapia Salvador",
    "terapia cognitivo comportamental Salvador", "TCC Salvador", "terapia online",
    "psicóloga para adolescentes Salvador", "terapia de casal Salvador", "Louise Diná psicóloga",
  ],
  authors: [{ name: "Louise Diná" }],
  creator: "Louise Diná",
  publisher: "Louise Diná Psicóloga",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: "Louise Diná Psicóloga",
    title: "Louise Diná | Psicóloga em Salvador",
    description: "Psicoterapia acolhedora e Terapia Cognitivo-Comportamental em Salvador.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Louise Diná, psicóloga em Salvador" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Louise Diná | Psicóloga em Salvador",
    description: "Psicoterapia acolhedora e Terapia Cognitivo-Comportamental em Salvador.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "Saúde mental",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#642f39",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={manrope.variable + " " + cormorant.variable + " scroll-smooth"}>
      <body>
        {children}
        <GoogleTags />
      </body>
    </html>
  );
}

