import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { WHATSAPP, INSTAGRAM } from "@/lib/media";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: replace with your own backend (Supabase/Mailchimp/etc.) once ready
    console.log("Newsletter signup:", email);
    setDone(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#252525] text-[#E9DFD0] pt-40 pb-14 mt-32">
      <div className="edge grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl track-wide text-white">EVO CEYLON</div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#A9A199]">
            Modern Sri Lankan lifestyle clothing designed for comfort, creativity and self-expression.
          </p>
          <form onSubmit={submit} className="mt-10 flex max-w-sm border-b border-[#4a4a4a] pb-2">
            <input
              value={email} onChange={(e) => setEmail(e.target.value)} type="email"
              placeholder="Email for new drops"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#77736B]"
            />
            <button className="text-[11px] track-mid text-white">JOIN</button>
          </form>
          {done && <p className="mt-3 text-xs text-[#A67C52]">Welcome to the evolution.</p>}
        </div>

        <div>
          <h4 className="text-[11px] track-wide text-[#77736B]">SHOP</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/shop?c=new-arrivals" className="hover:text-white">New Arrivals</Link></li>
            <li><Link to="/shop?c=oversized" className="hover:text-white">Oversized Collection</Link></li>
            <li><Link to="/shop?c=mens" className="hover:text-white">Men's Clothing</Link></li>
            <li><Link to="/shop?c=womens" className="hover:text-white">Women's Clothing</Link></li>
            <li><Link to="/custom" className="hover:text-white">Custom Clothing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] track-wide text-[#77736B]">BRAND</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/lookbook" className="hover:text-white">Lookbook</Link></li>
            <li><Link to="/blog" className="hover:text-white">Journal</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/track" className="hover:text-white">Track Order</Link></li>
            <li><Link to="/admin" className="hover:text-white">Admin</Link></li>
          </ul>
          <div className="mt-8 flex gap-4">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon className="w-4 h-4" /></a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="edge mt-20 pt-8 border-t border-[#3a3a3a] flex flex-col md:flex-row justify-between gap-3 text-[11px] track-mid text-[#77736B]">
        <span>© {new Date().getFullYear()} EVO CEYLON — COLOMBO, SRI LANKA</span>
        <span>WEAR YOUR EVOLUTION</span>
      </div>
    </footer>
  );
}