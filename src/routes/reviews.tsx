import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";
import { Reveal, SectionLabel, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews · Roxie 4.3★ on Google" },
      { name: "description", content: "Read guest reviews of Roxie fine dining, HSR Layout — 4.3★ on Google with warm, detailed testimonials from repeat diners." },
      { property: "og:title", content: "Reviews · Roxie" },
      { property: "og:description", content: "4.3★ Google-rated fine dining in Bengaluru." },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  const d = restaurantData;
  const total = Object.values(d.ratingBreakdown).reduce((a, b) => a + b, 0);
  return (
    <>
      <section className="pt-40 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal><SectionLabel><span className="mx-auto">Guest Reviews</span></SectionLabel></Reveal>
          <Reveal delay={0.1}><SectionTitle className="mt-6">A love letter, one visit at a time.</SectionTitle></Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-2 items-center">
          <Reveal>
            <div className="rounded-3xl bg-ink text-cream p-10 text-center">
              <p className="font-display text-7xl text-gold">{d.rating}</p>
              <div className="mt-3 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.round(d.rating) ? "fill-gold text-gold" : "text-cream/30"}`} />
                ))}
              </div>
              <p className="mt-3 text-cream/60 text-sm">{d.totalReviews.toLocaleString()} Google reviews</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {[5, 4, 3, 2, 1].map((n) => {
                const pct = ((d.ratingBreakdown as Record<number, number>)[n] / total) * 100;
                return (
                  <li key={n} className="flex items-center gap-4">
                    <span className="w-4 text-sm text-ink/70">{n}</span>
                    <Star className="h-3 w-3 fill-gold text-gold" />
                    <div className="flex-1 h-2 rounded-full bg-brand/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand to-gold" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-10 text-right text-sm text-ink/60">{pct.toFixed(0)}%</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {d.reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08}>
              <figure className="h-full rounded-3xl border border-brand/10 bg-cream p-8 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, k) => (<Star key={k} className="h-4 w-4 fill-gold text-gold" />))}
                </div>
                <blockquote className="mt-6 text-ink/80 leading-relaxed">“{r.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-cream font-display">{r.name[0]}</span>
                  <div>
                    <p className="font-medium text-ink">{r.name}</p>
                    <p className="text-xs text-ink/50">{r.date}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}