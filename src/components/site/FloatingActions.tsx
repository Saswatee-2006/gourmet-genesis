import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={restaurantData.reserveUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-cream shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] transition-all hover:bg-brand hover:scale-105"
        aria-label="Reserve a table"
      >
        <CalendarDays className="h-5 w-5" />
        <span className="hidden md:inline text-[11px] uppercase tracking-[0.2em]">Reserve</span>
      </a>
      <a
        href={`https://wa.me/${restaurantData.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
        style={{ animation: "float-slow 3s ease-in-out infinite" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={`tel:${restaurantData.phoneRaw}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-cream shadow-[0_15px_40px_-10px_rgba(183,110,43,0.6)] transition-transform hover:scale-105"
        aria-label="Call"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}