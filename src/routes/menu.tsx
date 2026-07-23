import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";
import { Reveal, SectionLabel, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu · Roxie Fine Dining" },
      { name: "description", content: "Explore Roxie's seasonal menu — starters, small plates, mains, desserts and a curated bar. Signature and popular items highlighted." },
      { property: "og:title", content: "Menu · Roxie" },
      { property: "og:description", content: "Seasonal, thoughtful dishes at Roxie, HSR Layout." },
    ],
  }),
  component: Menu,
});

function VegBadge({ veg }: { veg: boolean }) {
  return (
    <span className={`flex h-4 w-4 items-center justify-center border ${veg ? "border-emerald-600" : "border-red-600"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${veg ? "bg-emerald-600" : "bg-red-600"}`} />
    </span>
  );
}

function Menu() {
  const d = restaurantData;
  const categories = ["All", ...d.menu.map((c) => c.category)];
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return d.menu
      .filter((c) => active === "All" || c.category === active)
      .map((c) => ({
        ...c,
        items: c.items.filter((i) =>
          (i.name + i.desc).toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [active, query, d.menu]);

  return (
    <>
      <section className="pt-40 pb-14 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal><SectionLabel><span className="mx-auto">The Menu</span></SectionLabel></Reveal>
          <Reveal delay={0.1}><SectionTitle className="mt-6">A Season in Courses.</SectionTitle></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-ink/60">Prices in INR. Please advise us of any allergies or dietary preferences.</p></Reveal>
        </div>
      </section>

      <section className="pb-8 sticky top-16 z-30 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-full border border-brand/15 bg-cream p-2 flex items-center gap-2 shadow-sm">
            <Search className="ml-3 h-4 w-4 text-ink/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              maxLength={80}
              className="flex-1 bg-transparent py-2 text-sm placeholder:text-ink/40 focus:outline-none"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-all ${
                  active === c
                    ? "bg-ink text-cream"
                    : "border border-brand/20 text-ink/70 hover:border-brand hover:text-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 space-y-16">
          {filtered.length === 0 && (
            <p className="text-center text-ink/50">No dishes match your search.</p>
          )}
          {filtered.map((cat) => (
            <div key={cat.category}>
              <Reveal>
                <div className="flex items-center gap-6 mb-8">
                  <h2 className="font-display text-4xl md:text-5xl text-ink">{cat.category}</h2>
                  <span className="hairline flex-1" />
                </div>
              </Reveal>
              <ul className="space-y-8">
                {cat.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 0.05}>
                    <li className="group flex items-start gap-4 md:gap-6 pb-8 border-b border-brand/10 last:border-0">
                      <div className="pt-2"><VegBadge veg={item.veg} /></div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <h3 className="font-display text-xl md:text-2xl text-ink group-hover:text-brand transition-colors">{item.name}</h3>
                          {item.tag && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-brand">
                              <Sparkles className="h-3 w-3" /> {item.tag}
                            </span>
                          )}
                          {item.popular && !item.tag && (
                            <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-brand">Popular</span>
                          )}
                          <span className="ml-auto flex-1 border-b border-dashed border-brand/25 translate-y-[-4px]" />
                          <span className="font-display text-lg text-ink">{item.price}</span>
                        </div>
                        <p className="mt-2 text-sm text-ink/60 max-w-2xl">{item.desc}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}