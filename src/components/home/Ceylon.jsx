import React from "react";
import Reveal from "@/components/ui/reveal";
import { IMG } from "@/lib/media";

const NOTES = [
  { t: "NATURE", d: "Palm shade, monsoon light and the green interior of the island." },
  { t: "OCEAN", d: "Salt air, long swells and the slow rhythm of the south coast." },
  { t: "CULTURE", d: "Temple ochre, handloom craft and street colour from Colombo." },
  { t: "TRAVEL", d: "Train windows, tuk-tuk roads and mornings that start before six." },
];

export default function Ceylon() {
  return (
    <section className="py-28 md:py-40">
      <Reveal className="edge">
        <h2 className="font-display text-4xl md:text-6xl track-mid">INSPIRED BY CEYLON</h2>
        <p className="mt-6 max-w-xl text-[#77736B] leading-relaxed">
          Every drop begins with the island — its light, its texture, its unhurried pace.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-14">
        <img src={IMG.island} alt="Sri Lankan coastline at sunrise" className="w-full h-[45vh] md:h-[70vh] object-cover" />
      </Reveal>
      <div className="edge mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {NOTES.map((n, i) => (
          <Reveal key={n.t} delay={i * 0.07}>
            <div className="rule mb-5" />
            <h3 className="text-[11px] track-wide">{n.t}</h3>
            <p className="mt-3 text-sm text-[#77736B] leading-relaxed">{n.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}