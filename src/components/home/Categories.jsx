import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/ui/reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { IMG } from "@/lib/media";

const CATS = [
  { title: "OVERSIZED COLLECTION", to: "/shop?c=oversized", img: IMG.teeCream },
  { title: "MEN'S COLLECTION", to: "/shop?c=mens", img: IMG.hoodie },
  { title: "WOMEN'S COLLECTION", to: "/shop?c=womens", img: IMG.womens },
  { title: "CUSTOM CLOTHING", to: "/custom", img: IMG.uniforms },
];

export default function Categories() {
  return (
    <section className="edge py-20 md:py-28 bg-[#E9DFD0]/50">
      <SectionLabel>COLLECTIONS</SectionLabel>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {CATS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <Link to={c.to} className="group block relative overflow-hidden aspect-[3/4] bg-[#D8C8B5]">
              <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <span className="absolute bottom-5 left-5 right-5 text-white text-[11px] track-mid">{c.title}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}