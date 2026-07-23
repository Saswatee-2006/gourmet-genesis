import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CalendarDays, Clock, Users, Send, MessageCircle, Phone } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";
import { Reveal, SectionLabel, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations · Book a Table at Roxie" },
      { name: "description", content: "Reserve a table at Roxie, HSR Layout — pick your date, time, guest count and special requests. Confirmations via WhatsApp or email." },
      { property: "og:title", content: "Reservations · Roxie" },
      { property: "og:description", content: "Book your table at Roxie, Bengaluru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reservations,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(6, "Enter a valid phone").max(20),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  guests: z.string().min(1, "Guests required"),
  occasion: z.string().max(60).optional().or(z.literal("")),
  requests: z.string().max(600).optional().or(z.literal("")),
});

const times = ["12:30 PM", "1:30 PM", "6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM", "10:30 PM"];
const occasions = ["None", "Birthday", "Anniversary", "Date Night", "Business", "Celebration"];

function Reservations() {
  const d = restaurantData;
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState("");
  const [guests, setGuests] = useState(2);

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
    setError("");
    (e.currentTarget as HTMLFormElement).reset();
    setGuests(2);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="pt-40 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal><SectionLabel><span className="mx-auto">Reservations</span></SectionLabel></Reveal>
          <Reveal delay={0.1}><SectionTitle className="mt-6">Reserve your table.</SectionTitle></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-ink/60">Same-day requests welcome. For groups over 8, please WhatsApp us for a bespoke arrangement.</p></Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-3xl bg-ink text-cream p-8">
                <h3 className="font-display text-3xl">Prefer a quick book?</h3>
                <p className="mt-3 text-cream/70 text-sm">Confirm your table instantly on Google, or reach us directly.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={d.reserveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-ink hover:bg-cream transition">
                    <CalendarDays className="h-4 w-4" /> Reserve on Google
                  </a>
                  <a href={`https://wa.me/${d.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-cream hover:border-gold hover:text-gold transition">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                  <a href={`tel:${d.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-cream hover:border-gold hover:text-gold transition">
                    <Phone className="h-4 w-4" /> Call the Host
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-brand/10 bg-cream p-6">
                <h4 className="text-[11px] uppercase tracking-[0.24em] text-brand">Good to know</h4>
                <ul className="mt-4 space-y-3 text-sm text-ink/70">
                  <li className="flex gap-2"><span className="text-gold">•</span>Reservations held for 15 minutes past booking time.</li>
                  <li className="flex gap-2"><span className="text-gold">•</span>Smart casual dress code · No shorts at dinner.</li>
                  <li className="flex gap-2"><span className="text-gold">•</span>Valet parking available from 6 PM.</li>
                  <li className="flex gap-2"><span className="text-gold">•</span>Vegetarian, vegan and allergen menus on request.</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-brand/10 bg-cream p-8 md:p-10 space-y-6 shadow-[0_30px_80px_-30px_rgba(183,110,43,0.25)]">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Full Name</span>
                  <input name="name" required maxLength={80} className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Phone</span>
                  <input name="phone" required maxLength={20} className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Email</span>
                  <input name="email" type="email" required maxLength={120} className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60 inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> Date</span>
                  <input name="date" type="date" required min={today} className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60 inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Time</span>
                  <select name="time" required className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand">
                    <option value="">Select time</option>
                    {times.map((t) => (<option key={t} value={t}>{t}</option>))}
                  </select>
                </label>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60 inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> Guests</span>
                <input type="hidden" name="guests" value={String(guests)} />
                <div className="mt-2 flex flex-wrap gap-2">
                  {[1,2,3,4,5,6,7,8].map((n) => (
                    <button
                      type="button"
                      key={n}
                      onClick={() => setGuests(n)}
                      className={`h-10 w-10 rounded-full border text-sm transition ${guests === n ? "bg-ink text-cream border-ink" : "border-brand/20 text-ink/70 hover:border-brand hover:text-brand"}`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Occasion</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {occasions.map((o) => (
                    <label key={o} className="cursor-pointer">
                      <input type="radio" name="occasion" value={o === "None" ? "" : o} defaultChecked={o === "None"} className="peer sr-only" />
                      <span className="rounded-full border border-brand/20 px-4 py-2 text-xs text-ink/70 peer-checked:bg-brand peer-checked:text-cream peer-checked:border-brand transition inline-block">
                        {o}
                      </span>
                    </label>
                  ))}
                </div>
              </label>

              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink/60">Special Requests</span>
                <textarea name="requests" rows={4} maxLength={600} placeholder="Dietary preferences, seating preference, allergies…" className="mt-2 w-full rounded-xl border border-brand/15 bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand resize-none" />
              </label>

              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-cream hover:bg-brand transition-colors">
                <Send className="h-4 w-4" /> Request Reservation
              </button>
              {status === "ok" && <p className="text-sm text-emerald-700">Thank you — your request is in. We'll confirm within the hour.</p>}
              {status === "err" && <p className="text-sm text-red-700">{error}</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}