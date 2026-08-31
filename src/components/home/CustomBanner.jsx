import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/ui/reveal";
import { IMG } from "@/lib/media";

const SERVICES = ["Business uniforms", "Hotel clothing", "Cafe uniforms", "Event clothing", "Personal customized designs"];

export default function CustomBanner() {
  return (
    <section className="bg-[#252525] text-[#FAF8F3] grid md:grid-cols-2">
      <div className="relative min-h-[380px] md:min-h-[620px]">
        <img src={IMG.printing} alt="Screen printing process" className="absolute inset-0 w-full h-full object-cover grayscale" />
      </div>
      <Reveal className="px-8 md:px-16 lg:px-24 py-20 md:py-32 flex flex-col justify-center">
        <span className="text-[10px] track-wide text-[#A67C52]">CUSTOM CLOTHING SERVICE</span>
        <h2 className="mt-8 font-display text-3xl md:text-5xl leading-[1.1]">YOUR DESIGN.<br />YOUR IDENTITY.</h2>
        <ul className="mt-10 space-y-4">
          {SERVICES.map((s) => (
            <li key={s} className="flex items-center gap-4 text-sm text-[#C9C2B8] border-b border-[#3a3a3a] pb-4">
              <span className="text-[#A67C52] text-xs">—</span>{s}
            </li>
          ))}
        </ul>
        <Link to="/custom" className="mt-12 self-start bg-[#A67C52] text-white px-10 py-4 text-[11px] track-wide hover:bg-[#FAF8F3] hover:text-[#252525] transition-colors">
          REQUEST CUSTOM ORDER
        </Link>
      </Reveal>
    </section>
  );
}