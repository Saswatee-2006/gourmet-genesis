import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Clock, MessageCircle, Send, Mail } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";
import { Reveal, SectionLabel, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations · Roxie Bengaluru" },
      { name: "description", content: "Reserve a table, get directions, or reach us on WhatsApp. Roxie is located in HSR Layout, Bengaluru — open daily 12 PM to 1 AM." },
      { property: "og:title", content: "Contact Roxie" },
      { property: "og:description", content: "Directions, phone, WhatsApp and reservations for Roxie, HSR Layout." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(6).max(20).optional().or(z.literal("")),
  date: z.string().max(30).optional().or(z.literal("")),
  guests: z.string().max(3).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(600),
});

function Contact() {
  const d = restaurantData;
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      setStatus("err");
      setError(parsed.error.issues[0]?.message || "Please check your inputs.");
      return;
    }
    setStatus("ok");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="pt-40 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal><SectionLabel><span className="mx-auto">Reservations & Enquiries</span></SectionLabel></Reveal>
          <Reveal delay={0.1}><SectionTitle className="mt-6">Come sit with us.</SectionTitle></Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-3xl bg-ink text-cream p-8">
                <h3 className="font-display text-3xl">Visit</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-4"><MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" /><span className="text-cream/80">{d.address}</span></li>
                  <li className="flex gap-4"><Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" /><a href={`tel:${d.phoneRaw}`} className="text-cream/80 hover:text-gold">{d.phone}</a></li>
                  <li className="flex gap-4"><Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" /><a href={`mailto:${d.email}`} className="text-cream/80 hover:text-gold">{d.email}</a></li>
                  <li className="flex gap-4"><Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" /><span className="text-cream/80">Daily · 12 PM – 1 AM</span></li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  <a href={d.directionsUrl} target="_blank" rel="noreferrer" className="rounded-full bg-gold px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-cream transition">Get Directions</a>
                  <a href={`https://wa.me/${d.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-cream hover:border-gold hover:text-gold transition"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp</a>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-brand/10 shadow-lg">
                <iframe
                  title="Roxie on Google Maps"
                  src={`https://www.google.com/maps?q=${d.lat},${d.lng}&hl=en&z=16&output=embed`}
                  className="w-full h-72 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-3xl border border-brand/10 bg-cream p-6">
                <h4 className="text-[11px] uppercase tracking-[0.24em] text-brand">Nearby Landmarks</h4>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {d.nearbyLandmarks.map((l) => (<li key={l} className="flex gap-2"><span className="text-gold">•</span>{l}</li>))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-brand/10 bg-cream p-8 md:p-10 space-y-5">
              <h3 className="font-display text-3xl text-ink">Reserve a Table</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Name</span>
                  <input name="name" required maxLength={80} className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Email</span>
                  <input name="email" type="email" required maxLength={120} className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Phone</span>
                  <input name="phone" maxLength={20} className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Guests</span>
                  <input name="guests" type="number" min={1} max={20} className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Date & Time</span>
                  <input name="date" type="datetime-local" className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Message</span>
                  <textarea name="message" required rows={4} maxLength={600} className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand resize-none" />
                </label>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-cream hover:bg-brand transition-colors">
                <Send className="h-4 w-4" /> Send Request
              </button>
              {status === "ok" && <p className="text-sm text-emerald-700">Thank you — we'll be in touch shortly.</p>}
              {status === "err" && <p className="text-sm text-red-700">{error}</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-[#F5EBDB]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <Reveal><SectionLabel><span className="mx-auto">FAQ</span></SectionLabel></Reveal>
            <Reveal delay={0.1}><SectionTitle className="mt-6">Frequently Asked.</SectionTitle></Reveal>
          </div>
          <div className="space-y-3">
            {d.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group rounded-2xl border border-brand/15 bg-cream p-6 open:shadow-lg transition-shadow">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-xl text-ink list-none">
                    {f.q}
                    <span className="text-brand text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-ink/70 leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}