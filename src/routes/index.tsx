import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, ArrowRight, MapPin, Phone, CalendarDays, UtensilsCrossed, Clock, Instagram, Wine, Music, Users } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";
import { Reveal, SectionLabel, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roxie · Fine Dining in HSR Layout, Bengaluru" },
      { name: "description", content: "A 4.3★ fine dining destination in HSR Layout. Seasonal tasting menus, curated cellar and intimate hospitality." },
      { property: "og:title", content: "Roxie · Fine Dining in HSR Layout" },
      { property: "og:description", content: "Seasonal, thoughtful, unforgettable. Reserve your table at Roxie, Bengaluru." },
    ],
  }),
  component: Index,
});

function Index() {
  const d = restaurantData;
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={d.hero} alt={`${d.name} dining room`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/85" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center text-cream">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-3 rounded-full border border-cream/25 bg-cream/5 backdrop-blur px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-cream/90"
          >
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            <span>{d.rating} · Google Rating · {d.totalReviews.toLocaleString()} reviews</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.6 }}
            className="mt-8 font-display text-6xl md:text-8xl lg:text-[9rem] font-medium leading-[0.95] tracking-tight"
          >
            {d.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 1, delay: 1 }}
            className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}
            className="mt-6 max-w-xl font-display italic text-lg md:text-2xl text-cream/85"
          >
            {d.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }}
            className="mt-4 text-[11px] uppercase tracking-[0.32em] text-cream/70"
          >
            {d.shortAddress} · {d.cuisine.split("·")[0]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <a href={d.reserveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-ink transition-all hover:bg-cream hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.7)]">
              <CalendarDays className="h-4 w-4" /> Reserve Table
            </a>
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-cream hover:border-gold hover:text-gold transition-colors">
              <UtensilsCrossed className="h-4 w-4" /> View Menu
            </Link>
            <a href={`tel:${d.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-cream hover:border-gold hover:text-gold transition-colors">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={d.directionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-cream hover:border-gold hover:text-gold transition-colors">
              <MapPin className="h-4 w-4" /> Directions
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 z-10"
        >
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em]">
            <span>Scroll</span>
            <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="h-8 w-px bg-cream/50" />
          </div>
        </motion.div>
      </section>

      <section className="relative py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal><SectionLabel><span className="mx-auto">A Table in Bengaluru</span></SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-3xl md:text-4xl leading-tight text-ink text-balance">
              &ldquo;Great dining should feel like a private letter — considered, warm, and slightly unforgettable.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-ink/70 max-w-2xl mx-auto">{d.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-ink text-cream relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <Reveal><SectionLabel><span className="text-gold">The Kitchen</span></SectionLabel></Reveal>
              <Reveal delay={0.1}><h2 className="mt-4 font-display text-5xl md:text-6xl text-cream text-balance">Featured Dishes</h2></Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link to="/menu" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-gold hover:text-cream transition-colors">
                Explore Full Menu <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {d.featuredDishes.map((dish, i) => (
              <Reveal key={dish.id} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl bg-cream/5 border border-cream/10">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img loading="lazy" src={dish.image} alt={dish.name} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">{dish.tag}</span>
                    <span className={`flex h-6 items-center gap-1.5 rounded-full px-2 text-[10px] ${dish.veg ? "bg-emerald-500/20 text-emerald-300" : "bg-red-500/20 text-red-300"}`}>
                      <span className={`h-2 w-2 rounded-full ${dish.veg ? "bg-emerald-400" : "bg-red-400"}`} />
                      {dish.veg ? "Veg" : "Non-Veg"}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl text-cream">{dish.name}</h3>
                      <span className="font-display text-xl text-gold">{dish.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-cream/60">{dish.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal><SectionLabel><span className="mx-auto">Why Roxie</span></SectionLabel></Reveal>
            <Reveal delay={0.1}><SectionTitle className="mt-6">A dinner that lingers.</SectionTitle></Reveal>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: UtensilsCrossed, title: "Seasonal Menus", text: "Every plate begins with what the season quietly permits." },
              { icon: Star, title: "4.3★ Rated", text: `${d.totalReviews.toLocaleString()}+ guests. A love letter, one review at a time.` },
              { icon: Clock, title: "Open Late", text: "Doors open 12 PM to 1 AM. Lunch, dinner, and long conversations." },
              { icon: MapPin, title: "HSR Layout", text: "A candle-lit townhouse moments from Ambalipura Lake." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-brand/10 bg-cream p-8 transition-all hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(183,110,43,0.25)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-gold group-hover:text-ink">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#F5EBDB]">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative">
              <img loading="lazy" src={d.chefImage} alt="Executive Chef" className="rounded-[2rem] shadow-2xl aspect-[4/5] object-cover w-full" />
              <div className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl bg-ink px-6 py-5 text-cream shadow-xl">
                <p className="font-display text-3xl text-gold">4.3<span className="text-cream/60 text-base">/5</span></p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-cream/60">Google Rated</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><SectionLabel>Chef's Special</SectionLabel></Reveal>
            <Reveal delay={0.1}><SectionTitle className="mt-6">A menu curated with obsession.</SectionTitle></Reveal>
            <Reveal delay={0.2}><p className="mt-6 text-ink/70 leading-relaxed">{d.chef.bio}</p></Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-4">
                <div className="hairline w-16" />
                <div>
                  <p className="font-display text-2xl text-ink">{d.chef.name}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-brand">{d.chef.title}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <Link to="/about" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-cream hover:bg-brand transition-colors">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal><SectionLabel><span className="mx-auto">Guest Voices</span></SectionLabel></Reveal>
            <Reveal delay={0.1}><SectionTitle className="mt-6">Reviews from our table.</SectionTitle></Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {d.reviews.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <figure className="h-full rounded-3xl border border-brand/10 bg-cream p-8">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: r.rating }).map((_, k) => (<Star key={k} className="h-4 w-4 fill-gold text-gold" />))}
                  </div>
                  <blockquote className="mt-6 text-ink/80 leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
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
          <div className="mt-12 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-brand hover:text-ink transition-colors">
              Read all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 bg-ink">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Reveal><SectionLabel><span className="text-gold">Gallery</span></SectionLabel></Reveal>
              <Reveal delay={0.1}><h2 className="mt-4 font-display text-5xl md:text-6xl text-cream text-balance">Moments at Roxie.</h2></Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link to="/gallery" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-gold hover:text-cream">View Gallery <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {d.gallery.slice(0, 8).map((src, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="group relative overflow-hidden rounded-2xl aspect-square">
                  <img loading="lazy" src={src} alt="" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="py-28 bg-[#F5EBDB]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Reveal><SectionLabel>The Bar</SectionLabel></Reveal>
              <Reveal delay={0.1}><SectionTitle className="mt-4">Signature Cocktails.</SectionTitle></Reveal>
            </div>
            <Reveal delay={0.15}>
              <p className="max-w-md text-ink/60 text-sm">Barrel-aged classics and modern pours — mixed with care by our head bartender.</p>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {d.cocktails.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl bg-cream border border-brand/10 transition-all hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(183,110,43,0.25)]">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img loading="lazy" src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  </div>
                  {c.tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">{c.tag}</span>
                  )}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl text-ink flex items-center gap-2"><Wine className="h-4 w-4 text-brand" /> {c.name}</h3>
                      <span className="font-display text-lg text-brand">{c.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-ink/60">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Picks */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal><SectionLabel><span className="mx-auto">Chef's Picks</span></SectionLabel></Reveal>
            <Reveal delay={0.1}><SectionTitle className="mt-6">Tonight, we recommend.</SectionTitle></Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {d.chefsPicks.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img loading="lazy" src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl">{p.name}</h3>
                      <span className="font-display text-lg text-gold">{p.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-cream/75">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-28 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Reveal><SectionLabel><span className="text-gold">On the Calendar</span></SectionLabel></Reveal>
              <Reveal delay={0.1}><h2 className="mt-4 font-display text-5xl md:text-6xl text-cream text-balance">Upcoming Events.</h2></Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link to="/events" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-gold hover:text-cream">All Events <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {d.events.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.06}>
                <article className="group relative overflow-hidden rounded-3xl bg-cream/5 border border-cream/10 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img loading="lazy" src={e.image} alt={e.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-gold"><Music className="h-3 w-3" /> {e.tag}</span>
                    <h3 className="mt-4 font-display text-2xl text-cream">{e.title}</h3>
                    <p className="mt-2 text-xs text-cream/60">{e.date} · {e.time}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Reveal><SectionLabel>Instagram</SectionLabel></Reveal>
              <Reveal delay={0.1}><SectionTitle className="mt-4">{d.instagram.handle}</SectionTitle></Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 max-w-lg text-ink/60 text-sm inline-flex items-center gap-2"><Users className="h-4 w-4 text-brand" /> {d.instagram.followers} followers · {d.instagram.bio}</p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <a href={d.instagram.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[12px] uppercase tracking-[0.22em] text-cream hover:bg-brand transition-colors">
                <Instagram className="h-4 w-4" /> Follow
              </a>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {d.instagram.posts.map((src, i) => (
              <Reveal key={i} delay={(i % 6) * 0.04}>
                <a href={d.instagram.url} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-2xl aspect-square">
                  <img loading="lazy" src={src} alt="Instagram post" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={d.hero} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ink/80" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center text-cream">
          <Reveal><SectionLabel><span className="mx-auto text-gold">Reserve</span></SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-tight text-balance">Your table is waiting.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-cream/70">Same-day bookings welcome. For groups over 8, message us on WhatsApp.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/reservations" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-ink hover:bg-cream transition">
                <CalendarDays className="h-4 w-4" /> Book a Table
              </Link>
              <a href={`https://wa.me/${d.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-cream hover:border-gold hover:text-gold transition-colors">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}