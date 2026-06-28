"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Component, useEffect, useState, type ErrorInfo, type ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

const links = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["TCC", "#abordagem"],
  ["Como posso ajudar", "#terapia"],
  ["Contato", "#contato"],
];

class HeaderBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.error("Interactive header failed; rendering static header.", error, errorInfo);
    }
  }

  render() {
    return this.state.failed ? <StaticHeader /> : this.props.children;
  }
}

function BrandLogo() {
  return (
    <Image
      src="/images/logo-louise-dina-optimized.png"
      alt="Louise Diná Psicóloga"
      width={400}
      height={234}
      sizes="(max-width: 640px) 110px, 125px"
      loading="lazy"
      className="h-[3.6rem] w-auto sm:h-[4rem]"
    />
  );
}

function StaticHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-4">
      <div className="glass mx-auto flex h-[4.6rem] max-w-[1240px] items-center justify-between rounded-[1.5rem] px-4 sm:px-6">
        <a href="#inicio" aria-label="Louise Diná — início">
          <BrandLogo />
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-wine px-4 py-3 text-sm font-extrabold text-white"
        >
          <FaWhatsapp className="text-lg" />
          <span className="hidden sm:inline">Agendar consulta</span>
        </a>
      </div>
    </header>
  );
}

function InteractiveHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-4">
      <div className="glass mx-auto max-w-[1240px] rounded-[1.5rem] px-3 sm:px-5 lg:px-6">
        <div className="flex h-[4.6rem] items-center justify-between gap-3">
          <a href="#inicio" className="flex shrink-0 items-center" aria-label="Louise Diná — início">
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegação principal">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-[0.82rem] font-bold text-wine/72 transition hover:text-rose">
                {label}
              </a>
            ))}
          </nav>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar atendimento com Louise Diná pelo WhatsApp"
            className="hidden items-center gap-2 rounded-full bg-wine px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(91,40,48,.18)] transition hover:-translate-y-0.5 hover:bg-rose sm:flex"
          >
            <FaWhatsapp className="text-lg" /> Agendar consulta
          </a>

          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full bg-wine text-white xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="border-t border-wine/10 pb-4 pt-3 xl:hidden">
            <nav className="grid gap-1" aria-label="Navegação móvel">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-wine transition hover:bg-blush"
                >
                  {label}
                </a>
              ))}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-wine px-4 py-3 text-sm font-extrabold text-white sm:hidden"
              >
                <FaWhatsapp className="text-lg" /> Agendar pelo WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function Header() {
  return (
    <HeaderBoundary>
      <InteractiveHeader />
    </HeaderBoundary>
  );
}
