import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/lib/cart";
import { money } from "@/lib/media";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [pick, setPick] = useState(false);
  const imgs = product.images || [];

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-[#E9DFD0] aspect-[4/5]">
        <img src={imgs[0]} alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
        {imgs[1] && (
          <img src={imgs[1]} alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        )}
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <Link to={`/product/${product.id}`} className="text-sm hover:text-[#A67C52] transition-colors">{product.name}</Link>
          <div className="text-xs text-[#77736B] mt-1">{money(product.price)}</div>
        </div>
        <button onClick={() => setPick(!pick)} className="text-[11px] track-mid text-[#77736B] hover:text-[#252525]">
          {pick ? "CLOSE" : "+ ADD"}
        </button>
      </div>

      {pick && (
        <div className="mt-3 flex flex-wrap gap-2">
          {(product.sizes || ["M", "L", "XL"]).map((s) => (
            <button key={s} onClick={() => { add(product, s); setPick(false); }}
              className="border border-[#D8C8B5] px-3 py-1.5 text-[11px] track-mid hover:bg-[#252525] hover:text-[#FAF8F3] transition-colors">
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}