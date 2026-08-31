import React from "react";
import { useCart } from "@/lib/cart";
import { money } from "@/lib/media";
import Reveal from "@/components/ui/reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { Gift } from "lucide-react";

const SETS = [
  {
    title: "THE WEEKEND SET",
    desc: "Two heavyweight tees — one charcoal graphic, one ecru essential. A two-piece gift for the person who lives in oversized cotton.",
    items: ["Evolution Graphic Tee — Black", "Coastal Pocket Tee — Ecru"],
  },
  {
    title: "THE ISLAND DUO",
    desc: "Soft-washed tees in clay and off-white — a relaxed pairing for couples or best friends who share a wardrobe.",
    items: ["Island Relaxed Tee — Clay", "Studio Tee — Off White"],
  },
  {
    title: "THE LAYERED GIFT",
    desc: "A tropical-weight hoodie layered over our bone oversized tee. The complete cold-evening kit in one box.",
    items: ["Ceylon Heavy Hoodie — Sand", "Oversized Essential Tee — Bone"],
  },
];

export default function GiftSets() {
  const { add } = useCart();
  // TODO: replace with real product data once backend (Supabase/etc.) is set up
  const products = [];

  const resolve = (names) => names.map((n) => products.find((p) => p.name === n)).filter(Boolean);
  const setPrice = (items) => items.reduce((s, p) => s + (p.price || 0), 0);
  const addSet = (items) => items.forEach((p) => add(p, (p.sizes || ["M"])[0], 1));

  return (
    <section className="edge py-24 md:py-32">
      <SectionLabel>GIFT SETS</SectionLabel>
      <div className="mt-8 flex items-end justify-between gap-6">
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-xl">CURATED SETS, READY TO GIFT</h2>
        <Gift className="w-6 h-6 text-[#A67C52] hidden md:block" />
      </div>
      <p className="mt-6 max-w-lg text-[#77736B] leading-relaxed">
        Thoughtful bundles for birthdays, couples and celebrations — assembled in Colombo and wrapped in EVO packaging.
      </p>
      <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
        {SETS.map((s, i) => {
          const items = resolve(s.items);
          const price = setPrice(items);
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group border border-[#D8C8B5] bg-[#FAF8F3] flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E9DFD0]">
                  {items[0] && (
                    <img src={(items[0].images || [])[0]} alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                  )}
                  {items[1] && (
                    <img src={(items[1].images || [])[0]} alt=""
                      className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover border-l border-t border-[#FAF8F3] opacity-95" />
                  )}
                  <span className="absolute top-4 left-4 bg-[#FAF8F3] px-3 py-1 text-[10px] track-wide">SET {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[11px] track-wide">{s.title}</h3>
                  <p className="mt-3 text-sm text-[#77736B] leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm">{money(price)}</span>
                    <button onClick={() => addSet(items)} disabled={!items.length}
                      className="text-[11px] track-mid border-b border-[#252525] pb-1 hover:text-[#A67C52] hover:border-[#A67C52] transition-colors disabled:opacity-40">
                      ADD SET TO BAG
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}