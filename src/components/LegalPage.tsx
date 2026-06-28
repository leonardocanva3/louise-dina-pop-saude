import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/site";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-sand py-8 sm:py-12">
      <div className="container-shell">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-extrabold text-rose hover:text-wine">
          <ArrowLeft size={17} /> Voltar ao início
        </Link>
        <article className="mx-auto mt-8 max-w-4xl rounded-[2.5rem] border border-wine/10 bg-white p-6 shadow-[0_24px_70px_rgba(91,40,48,.08)] sm:p-12">
          <Image
            src="/images/logo-louise-dina-optimized.png"
            alt="Louise Diná Psicóloga"
            width={400}
            height={234}
            sizes="165px"
            loading="lazy"
            className="h-24 w-auto"
          />
          <span className="eyebrow mt-8">{eyebrow}</span>
          <h1 className="section-title">{title}</h1>
          <div className="legal-copy mt-9 space-y-7 text-sm leading-7 text-wine/70 sm:text-base">{children}</div>
          <p className="mt-10 border-t border-wine/10 pt-6 text-xs text-wine/45">
            Última atualização: 27 de junho de 2026 · {site.professionalName} · {site.crp}
          </p>
        </article>
      </div>
    </main>
  );
}
