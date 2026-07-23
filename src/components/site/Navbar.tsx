import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/reviews", label: "Reviews" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display text-2xl md:text-3xl tracking-widest text-ink">
            R<span className="text-gold-gradient">O</span>XIE
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative text-[13px] uppercase tracking-[0.22em] text-ink/80 transition-colors hover:text-brand"
                activeProps={{ className: "text-brand" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[12px] text-ink/70">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            <span className="font-medium">{restaurantData.rating}</span>
            <span className="text-ink/40">Google</span>
          </div>
          <a
            href={restaurantData.reserveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] text-cream transition-all hover:bg-brand hover:shadow-[0_10px_30px_-10px_rgba(183,110,43,0.6)]"
          >
            Reserve
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden rounded-full border border-ink/15 p-2.5 text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mt-3 mx-4 rounded-3xl border border-brand/10 bg-cream/95 backdrop-blur-lg p-6 shadow-2xl animate-fade-in">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl text-ink hover:text-brand transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 hairline" />
          <a
            href={restaurantData.reserveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block rounded-full bg-ink px-5 py-3 text-center text-[12px] uppercase tracking-[0.2em] text-cream"
          >
            Reserve Table
          </a>
        </div>
      )}
    </header>
  );
}