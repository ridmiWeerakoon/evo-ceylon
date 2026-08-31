import React from "react";
import Reveal from "@/components/ui/reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { IMG, INSTAGRAM } from "@/lib/media";

const FALLBACK = [
  { url: IMG.oversized, link: INSTAGRAM },
  { url: IMG.couple, link: INSTAGRAM },
  { url: IMG.packaging, link: INSTAGRAM },
  { url: IMG.womens, link: INSTAGRAM },
  { url: IMG.island, link: INSTAGRAM },
  { url: IMG.teeCharcoal, link: INSTAGRAM },
];

export default function InstagramFeed() {
  const shots = FALLBACK;

  return (
    <section className="edge pb-10">
      <SectionLabel>@EVOCEYLON</SectionLabel>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {shots.map((s, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <a href={s.link} target="_blank" rel="noreferrer" className="block aspect-square overflow-hidden bg-[#E9DFD0]">
              <img src={s.url} alt="EVO CEYLON on Instagram" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}