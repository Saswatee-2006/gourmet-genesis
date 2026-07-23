import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { restaurantData } from "@/data/restaurantData";
import { Reveal, SectionLabel, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · Roxie Fine Dining" },
      { name: "description", content: "A visual journey through Roxie — dishes, cocktails and the intimate dining room in HSR Layout." },
      { property: "og:title", content: "Gallery · Roxie" },
      { property: "og:description", content: "Dishes, cocktails and interiors at Roxie, Bengaluru." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const images = restaurantData.gallery;
  const [idx, setIdx] = useState<number | null>(null);

  const next = () => setIdx((i) => (i === null ? 0 : (i + 1) % images.length));
  const prev = () => setIdx((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));

  return (
    <>
      <section className="pt-40 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal><SectionLabel><span className="mx-auto">Gallery</span></SectionLabel></Reveal>
          <Reveal delay={0.1}><SectionTitle className="mt-6">A visual table.</SectionTitle></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-ink/60">Every image is unretouched, captured during service.</p></Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((src, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05}>
              <button
                onClick={() => setIdx(i)}
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl"
                aria-label={`View image ${i + 1}`}
              >
                <img
                  loading="lazy"
                  src={src}
                  alt=""
                  className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-sm p-4"
            onClick={() => setIdx(null)}
          >
            <button className="absolute top-6 right-6 text-cream" onClick={() => setIdx(null)} aria-label="Close"><X className="h-6 w-6" /></button>
            <button className="absolute left-6 text-cream" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous"><ChevronLeft className="h-8 w-8" /></button>
            <button className="absolute right-6 text-cream" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next"><ChevronRight className="h-8 w-8" /></button>
            <motion.img
              key={idx}
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              src={images[idx]} alt="" className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}