import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { setSEO } from "@/lib/seo";
import Reveal from "@/components/ui/reveal";
import { IMG } from "@/lib/media";

const VALUES = [
  ["MISSION", "To make comfortable, well-made clothing that lets Sri Lankan youth express who they are — without importing someone else's identity."],
  ["VISION", "To create modern Sri Lankan fashion that combines comfort, creativity, individuality and island identity."],
  ["CEYLON IDENTITY", "Our prints, palettes and campaigns are drawn from the island: its coastline, its craft and its everyday street colour."],
  ["QUALITY COMMITMENT", "Heavyweight combed cotton, pre-shrunk fabric, reinforced stitching and prints that survive the wash — every single drop."],
];

export default function About() {
  useEffect(() => {
    setSEO({ title: "About — EVO CEYLON", description: "The story of EVO CEYLON: from printed tees to a modern Sri Lankan lifestyle clothing brand." });
  }, []);

  return (
    <div className="pt-32 md:pt-40">
      <div className="edge max-w-3xl">
        <span className="text-[10px] track-wide text-[#A67C52]">ABOUT THE BRAND</span>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">WE STARTED WITH ONE PRINT</h1>
        <p className="mt-10 text-[18px] leading-[1.75] text-[#4a4a4a]">
          EVO CEYLON began in a small Colombo workspace, printing graphic tees for friends. What people kept
          returning for wasn't only the artwork — it was the feel of the garment. So we went deeper: heavier
          cotton, wider shoulders, better finishing.
        </p>
        <p className="mt-6 text-[18px] leading-[1.75] text-[#4a4a4a]">
          Today EVO CEYLON is a complete clothing experience — oversized essentials, men's and women's casual
          wear, and a custom studio dressing hotels, cafes and corporate teams across the island.
        </p>
      </div>

      <Reveal className="edge mt-20">
        <img src={IMG.oversized} alt="EVO CEYLON community" className="w-full h-[45vh] md:h-[70vh] object-cover" />
      </Reveal>

      <div className="edge mt-24 grid md:grid-cols-2 gap-x-16 gap-y-14">
        {VALUES.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.06}>
            <div className="rule mb-6" />
            <h2 className="text-[11px] track-wide">{t}</h2>
            <p className="mt-4 text-[#4a4a4a] leading-[1.7]">{d}</p>
          </Reveal>
        ))}
      </div>

      <div className="edge mt-28 grid md:grid-cols-2 gap-6">
        <img src={IMG.packaging} alt="EVO CEYLON packaging" className="w-full aspect-[3/2] object-cover" />
        <img src={IMG.printing} alt="Printing craft" className="w-full aspect-[3/2] object-cover" />
      </div>

      <div className="edge mt-24 text-center">
        <p className="font-display text-2xl md:text-4xl max-w-3xl mx-auto leading-snug">
          “Modern Sri Lankan lifestyle clothing designed for comfort, creativity and self-expression.”
        </p>
        <Link to="/shop" className="inline-block mt-10 bg-[#252525] text-[#FAF8F3] px-12 py-4 text-[11px] track-wide hover:bg-[#A67C52] transition-colors">
          EXPLORE THE COLLECTION
        </Link>
      </div>
    </div>
  );
}