import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const LINKS = [
  { to: "/shop", label: "SHOP" },
  { to: "/lookbook", label: "LOOKBOOK" },
  { to: "/custom", label: "CUSTOM" },
  { to: "/blog", label: "JOURNAL" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
];

export default function Header() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const loc = useLocation();

  useEffect(() => { setMenu(false); }, [loc.pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#FAF8F3]/85 backdrop-blur-md border-b border-[#D8C8B5]" : "bg-transparent"}`}>
      <div className="edge flex items-center justify-between h-16 md:h-20">
        <button className="md:hidden -ml-1" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.slice(0, 3).map((l) => (
            <Link key={l.to} to={l.to} className="text-[11px] track-mid hover:text-[#A67C52] transition-colors">{l.label}</Link>
          ))}
        </nav>

        <Link to="/" className="font-display text-lg md:text-xl track-wide">EVO CEYLON</Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.slice(3).map((l) => (
              <Link key={l.to} to={l.to} className="text-[11px] track-mid hover:text-[#A67C52] transition-colors">{l.label}</Link>
            ))}
          </nav>
          <button onClick={() => setOpen(true)} className="relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#A67C52] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{count}</span>
            )}
          </button>
        </div>
      </div>

      {menu && (
        <div className="md:hidden bg-[#FAF8F3] border-t border-[#D8C8B5] edge py-8 flex flex-col gap-6">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm track-mid">{l.label}</Link>
          ))}
          <Link to="/admin" className="text-[11px] track-mid text-[#77736B]">ADMIN</Link>
        </div>
      )}
    </header>
  );
}