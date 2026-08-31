import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/ui/reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { IMG } from "@/lib/media";

export default function Intro() {
  return (
    <section className="edge py-28 md:py-44 grid md:grid-cols-12 gap-14 items-center">
      <Reveal className="md:col-span-6 md:col-start-1">
        <SectionLabel>THE STORY</SectionLabel>
        <h2 className="mt-10 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
          FROM PRINTED TEES TO A COMPLETE CLOTHING EXPERIENCE
        </h2>
        <p className="mt-8 text-[17px] leading-[1.7] text-[#4a4a4a] max-w-lg">
          EVO CEYLON started with printed T-shirts and evolved into a modern clothing brand creating
          oversized fashion, customized clothing and everyday essentials for Sri Lanka and beyond.
        </p>
        <Link to="/about" className="inline-block mt-10 text-[11px] track-wide border-b border-[#252525] pb-1 hover:text-[#A67C52] hover:border-[#A67C52] transition-colors">
          OUR JOURNEY
        </Link>
      </Reveal>
      <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
        <img src={IMG.story} alt="EVO CEYLON island lifestyle" className="w-full aspect-[4/5] object-cover" />
      </Reveal>
    </section>
  );
}