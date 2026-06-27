import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com Louise Diná pelo WhatsApp"
      className="fixed bottom-5 right-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#20a95a] text-3xl text-white shadow-[0_14px_38px_rgba(23,132,70,.34)] transition hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7 sm:size-16"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#20a95a]/20" />
      <FaWhatsapp />
    </a>
  );
}

