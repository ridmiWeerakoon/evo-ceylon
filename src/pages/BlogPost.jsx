import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { setSEO } from "@/lib/seo";
import ProductCard from "@/components/site/ProductCard";
import { Link2 } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function BlogPost() {
  const { id } = useParams();
  // TODO: replace with real article lookup once backend (Supabase/etc.) is set up
  const [a] = useState(null);
  const [products] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSEO({ title: "Journal — EVO CEYLON", description: "Sri Lankan streetwear trends and styling guides." });
  }, [id]);

  if (!a) {
    return (
      <div className="pt-48 pb-32 edge text-center text-sm text-[#77736B]">
        <p>This article isn't available yet.</p>
        <Link to="/blog" className="inline-block mt-6 text-[11px] track-mid border-b border-[#252525] pb-1">BACK TO JOURNAL</Link>
      </div>
    );
  }

  const share = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  return (
    <article className="pt-32 md:pt-40">
      <div className="edge max-w-3xl mx-auto text-center">
        <span className="text-[10px] track-wide text-[#A67C52]">{a.category}</span>
        <h1 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">{a.title}</h1>
        <p className="mt-6 text-[11px] track-mid text-[#77736B]">{a.author} · {a.read_minutes} MIN READ</p>
      </div>

      <div className="edge mt-14">
        <img src={a.cover_image} alt={a.title} className="w-full h-[45vh] md:h-[70vh] object-cover" />
      </div>

      <div className="edge mt-16 max-w-2xl mx-auto">
        <div className="prose-evo text-[18px] leading-[1.75] text-[#333] space-y-6">
          <ReactMarkdown components={{
            h2: ({ children }) => <h2 className="font-display text-2xl md:text-3xl mt-12 mb-4">{children}</h2>,
            p: ({ children }) => <p className="mb-6">{children}</p>,
            li: ({ children }) => <li className="ml-5 list-disc mb-2">{children}</li>,
          }}>{a.body || ""}</ReactMarkdown>
        </div>

        <div className="mt-16 pt-8 border-t border-[#D8C8B5] flex items-center gap-6">
          <span className="text-[11px] track-mid text-[#77736B]">SHARE</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer"><FacebookIcon className="w-4 h-4" /></a>
          <a href="https://instagram.com/evoceylon" target="_blank" rel="noreferrer"><InstagramIcon className="w-4 h-4" /></a>
          <button onClick={share} className="flex items-center gap-2 text-[11px] track-mid"><Link2 className="w-4 h-4" />{copied ? "COPIED" : "COPY LINK"}</button>
        </div>
      </div>

      <div className="edge mt-28">
        <div className="rule mb-10" />
        <h2 className="text-[11px] track-wide">SHOP THE STORY</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <Link to="/blog" className="inline-block mt-12 text-[11px] track-mid border-b border-[#252525] pb-1">BACK TO JOURNAL</Link>
      </div>
    </article>
  );
}