import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setSEO } from "@/lib/seo";
import Reveal from "@/components/ui/reveal";
import { Search } from "lucide-react";

const CATS = ["All", "Fashion Trends", "Style Guides", "Sri Lankan Fashion Culture", "Custom Clothing Guides", "Fabric & Quality"];

export default function Blog() {
  // TODO: replace with real article data once backend (Supabase/etc.) is set up
  const [articles] = useState([]);
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  useEffect(() => {
    setSEO({ title: "Journal — EVO CEYLON", description: "Sri Lankan streetwear trends, styling guides, fabric education and custom clothing advice." });
  }, []);

  const featured = articles.find((a) => a.featured) || articles[0];
  const rest = articles
    .filter((a) => a.id !== featured?.id)
    .filter((a) => cat === "All" || a.category === cat)
    .filter((a) => (a.title + " " + (a.excerpt || "")).toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="pt-32 md:pt-40 edge">
      <h1 className="font-display text-5xl md:text-7xl track-mid">THE JOURNAL</h1>
      <p className="mt-6 max-w-lg text-[#77736B] leading-relaxed">Fashion, fabric and island culture — written from Colombo.</p>

      {featured && (
        <Reveal className="mt-16">
          <Link to={`/blog/${featured.id}`} className="group grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 overflow-hidden">
              <img src={featured.cover_image} alt={featured.title} className="w-full aspect-[16/10] object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
            </div>
            <div className="md:col-span-5">
              <span className="text-[10px] track-wide text-[#A67C52]">FEATURED · {featured.category}</span>
              <h2 className="mt-5 font-display text-3xl md:text-4xl leading-tight">{featured.title}</h2>
              <p className="mt-5 text-[#4a4a4a] leading-[1.7]">{featured.excerpt}</p>
              <span className="mt-8 inline-block text-[11px] track-mid border-b border-[#252525] pb-1">READ ARTICLE</span>
            </div>
          </Link>
        </Reveal>
      )}

      <div className="mt-24 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#D8C8B5] pb-5">
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`text-[11px] track-mid ${cat === c ? "text-[#A67C52]" : "text-[#77736B] hover:text-[#252525]"}`}>
              {c.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 md:w-56">
          <Search className="w-4 h-4 text-[#77736B]" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles"
            className="bg-transparent outline-none text-sm w-full placeholder:text-[#77736B]" />
        </div>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-12">
        {rest.map((a, i) => (
          <Reveal key={a.id} delay={(i % 3) * 0.07}>
            <Link to={`/blog/${a.id}`} className="group block">
              <div className="overflow-hidden aspect-[4/3] bg-[#E9DFD0]">
                <img src={a.cover_image} alt={a.title} className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
              </div>
              <span className="mt-5 block text-[10px] track-wide text-[#A67C52]">{a.category}</span>
              <h3 className="mt-3 font-display text-xl leading-snug">{a.title}</h3>
              <p className="mt-3 text-sm text-[#77736B] leading-relaxed">{a.excerpt}</p>
              <span className="mt-4 block text-[11px] track-mid text-[#77736B]">{a.read_minutes} MIN READ</span>
            </Link>
          </Reveal>
        ))}
      </div>
      {rest.length === 0 && <p className="mt-14 text-sm text-[#77736B]">No articles found.</p>}
    </div>
  );
}