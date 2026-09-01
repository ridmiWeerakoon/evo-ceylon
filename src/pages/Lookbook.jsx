import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { setSEO } from "@/lib/seo";
import Reveal from "@/components/ui/reveal";
import { IMG } from "@/lib/media";

const STORIES = [
  { n: "01", t: "THE OVERSIZED ERA", d: "Boxy shoulders, dropped sleeves and heavy cotton that holds its shape. Styled loose, worn everywhere.", img: IMG.oversized, to: "/shop?c=oversized" },
  { n: "02", t: "ISLAND LIFESTYLE", d: "Beach mornings, cafe afternoons and long coastal drives — clothing built for the island's pace.", img: IMG.story, to: "/shop?c=new-arrivals" },
  { n: "03", t: "COUPLE STORIES", d: "Matching neutrals and travel-ready layers for two. Effortless, never matching too hard.", img: IMG.couple, to: "/shop?c=womens" },
  { n: "04", t: "CUSTOM CREATIONS", d: "Cafe teams, hotel crews and event capsules dressed in tailored EVO staples.", img: IMG.uniforms, to: "/custom" },
  { n: "05", t: "BEHIND EVO CEYLON", d: "Ink, fabric, folding and packaging — the slow craft behind every piece we ship.", img: IMG.packaging, to: "/about" },
];

export default function Lookbook() {
  useEffect(() => {
    setSEO({ title: "Lookbook — EVO CEYLON", description: "Editorial styling stories from the island: oversized streetwear, travel fashion and custom creations." });
  }, []);

  return (
    <div className="pt-32 md:pt-40">
      <div className="edge">
        <h1 className="font-display text-5xl md:text-7xl track-mid">LOOKBOOK</h1>
        <p className="mt-6 max-w-lg text-[#77736B] leading-relaxed">
          A fashion journal of the island — how EVO CEYLON is worn, styled and lived in.
        </p>
      </div>

      <div className="mt-24 space-y-28 md:space-y-40">
        {STORIES.map((s, i) => (
          <Reveal key={s.n}>
            <div className={`edge grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
              <div className="md:col-span-7 [direction:ltr]">
                <img src={s.img} alt={s.t} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="md:col-span-4 md:col-start-9 [direction:ltr]">
                <span className="text-[10px] track-wide text-[#A67C52]">{s.n}</span>
                <h2 className="mt-5 font-display text-3xl md:text-4xl leading-tight">{s.t}</h2>
                <p className="mt-6 text-[#4a4a4a] leading-[1.7]">{s.d}</p>
                <Link to={s.to} className="inline-block mt-8 text-[11px] track-wide border-b border-[#252525] pb-1 hover:text-[#A67C52] hover:border-[#A67C52] transition-colors">
                  SHOP THIS LOOK
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}