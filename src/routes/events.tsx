import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, Music, ArrowRight } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";
import { Reveal, SectionLabel, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events · Live Music & DJ Nights at Roxie" },
      { name: "description", content: "Live jazz, weekend DJ nights, chef's table Sundays and cellar release dinners at Roxie, HSR Layout." },
      { property: "og:title", content: "Events at Roxie" },
      { property: "og:description", content: "Music, tasting menus and cellar releases at Roxie, Bengaluru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Events,
});

function Events() {
  const d = restaurantData;
  return (
    <>
      <section className="pt-40 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal><SectionLabel><span className="mx-auto">Music · Nights · Tables</span></SectionLabel></Reveal>
          <Reveal delay={0.1}><SectionTitle className="mt-6">Evenings that stay with you.</SectionTitle></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-ink/60">From candle-lit jazz to late-night DJ sets — a considered calendar of nights, at the table and the bar.</p></Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
          {d.events.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-3xl bg-ink text-cream">
                <div className="aspect-[16/10] overflow-hidden">
                  <img loading="lazy" src={e.image} alt={e.title} className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-ink">{e.tag}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <h3 className="font-display text-3xl md:text-4xl">{e.title}</h3>
                  <p className="mt-3 text-cream/75 text-sm max-w-md">{e.desc}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-5 text-[11px] uppercase tracking-[0.22em] text-cream/70">
                    <span className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-gold" />{e.date}</span>
                    <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gold" />{e.time}</span>
                  </div>
                  <a href="/reservations" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-ink hover:bg-cream transition">
                    Book Now <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#F5EBDB]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal><SectionLabel><span className="mx-auto">Private Events</span></SectionLabel></Reveal>
          <Reveal delay={0.1}><SectionTitle className="mt-6">Host it with us.</SectionTitle></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-ink/70">Birthdays, anniversaries, brand dinners and intimate weddings. Our private dining room seats up to 14 — with bespoke menus curated by the chef.</p></Reveal>
          <Reveal delay={0.3}>
            <a href={`https://wa.me/${d.whatsapp}?text=Hi%20Roxie%2C%20I'd%20like%20to%20enquire%20about%20a%20private%20event.`} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-cream hover:bg-brand transition-colors">
              <Music className="h-4 w-4" /> Enquire on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}