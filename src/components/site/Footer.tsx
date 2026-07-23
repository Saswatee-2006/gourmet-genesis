import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock, Mail } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-3xl tracking-widest">
              R<span className="text-gold">O</span>XIE
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">{restaurantData.description}</p>
            <div className="mt-6 flex gap-3">
              <a href={restaurantData.instagram.url} target="_blank" rel="noreferrer" className="rounded-full border border-cream/20 p-2.5 hover:bg-brand hover:border-brand transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full border border-cream/20 p-2.5 hover:bg-brand hover:border-brand transition-colors" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="rounded-full border border-cream/20 p-2.5 hover:bg-brand hover:border-brand transition-colors" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              {["/about","/menu","/gallery","/events","/reviews","/reservations","/contact"].map((p, i) => (
                <li key={p}><Link to={p} className="hover:text-gold transition-colors">{["About","Menu","Gallery","Events","Reviews","Reservations","Contact"][i]}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-gold">Visit</h4>
            <ul className="mt-5 space-y-4 text-sm text-cream/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span>{restaurantData.address}</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><a href={`tel:${restaurantData.phoneRaw}`} className="hover:text-gold">{restaurantData.phone}</a></li>
              <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span>Daily · 12 PM – 1 AM</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><a href={`mailto:${restaurantData.email}`} className="hover:text-gold">{restaurantData.email}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-gold">Newsletter</h4>
            <p className="mt-5 text-sm text-cream/70">Seasonal menus, private events and cellar releases — direct to your inbox.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) { setSent(true); setEmail(""); } }}
              className="mt-5 flex overflow-hidden rounded-full border border-cream/20 bg-cream/5"
            >
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required maxLength={120} placeholder="you@email.com" className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-cream/40 focus:outline-none" />
              <button className="bg-gold px-5 text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-gold-soft transition-colors">Join</button>
            </form>
            {sent && <p className="mt-3 text-xs text-gold">Thank you — welcome to the table.</p>}
          </div>
        </div>
        <div className="mt-16 hairline opacity-40" />
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Roxie. All rights reserved.</p>
          <p>Crafted with intention in Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}