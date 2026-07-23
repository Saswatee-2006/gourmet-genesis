import { createFileRoute } from "@tanstack/react-router";
import { restaurantData } from "@/data/restaurantData";
import { Reveal, SectionLabel, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Roxie · Story, Chef & Mission" },
      { name: "description", content: "The story behind Roxie — a fine dining destination in HSR Layout, Bengaluru, and the chef obsessed with getting every detail right." },
      { property: "og:title", content: "About Roxie" },
      { property: "og:description", content: "Story, chef, mission and interiors of Roxie, a fine dining restaurant in Bengaluru." },
    ],
  }),
  component: About,
});

function About() {
  const d = restaurantData;
  return (
    <>
      <section className="relative pt-40 pb-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal><SectionLabel><span className="mx-auto">Our Story</span></SectionLabel></Reveal>
          <Reveal delay={0.1}><SectionTitle className="mt-6">Craft, considered.</SectionTitle></Reveal>
          <Reveal delay={0.2}><p className="mt-8 text-ink/70 leading-relaxed text-lg">{d.story}</p></Reveal>
        </div>
      </section>

      {/* Chef */}
      <section className="py-24 bg-[#F5EBDB]">
        <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-2 items-center">
          <Reveal>
            <img loading="lazy" src={d.chefImage} alt={d.chef.name} className="rounded-[2rem] shadow-2xl aspect-[4/5] object-cover w-full" />
          </Reveal>
          <div>
            <Reveal><SectionLabel>Meet the Chef</SectionLabel></Reveal>
            <Reveal delay={0.1}><h2 className="mt-6 font-display text-5xl md:text-6xl text-ink">{d.chef.name}</h2></Reveal>
            <Reveal delay={0.15}><p className="mt-2 text-xs uppercase tracking-[0.24em] text-brand">{d.chef.title}</p></Reveal>
            <Reveal delay={0.2}><p className="mt-6 text-ink/70 leading-relaxed">{d.chef.bio}</p></Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal><SectionLabel><span className="mx-auto">Our Mission</span></SectionLabel></Reveal>
          <Reveal delay={0.1}><p className="mt-8 font-display text-3xl md:text-4xl leading-tight text-ink text-balance">“{d.mission}”</p></Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-ink text-cream">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <Reveal><SectionLabel><span className="mx-auto text-gold">Milestones</span></SectionLabel></Reveal>
            <Reveal delay={0.1}><h2 className="mt-6 font-display text-5xl md:text-6xl text-cream">The journey.</h2></Reveal>
          </div>
          <div className="mt-16 relative">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-cream/15" />
            {d.timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className={`relative flex gap-6 md:gap-0 mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2 md:px-10">
                    <div className={`inline-block ${i % 2 === 0 ? "md:text-right md:ml-auto" : ""}`}>
                      <p className="font-display text-4xl text-gold">{t.year}</p>
                      <h3 className="mt-1 font-display text-2xl text-cream">{t.title}</h3>
                      <p className="mt-2 text-cream/60 max-w-xs">{t.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-[8px] md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-gold ring-4 ring-ink" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <Reveal><SectionLabel><span className="mx-auto">Inside Roxie</span></SectionLabel></Reveal>
            <Reveal delay={0.1}><SectionTitle className="mt-6">The Interior.</SectionTitle></Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {d.interiorGallery.map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden rounded-3xl group aspect-[4/5]">
                  <img loading="lazy" src={src} alt="" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}