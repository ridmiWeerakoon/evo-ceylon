import React from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { money } from "@/lib/media";

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 bg-black/30 z-[60]" onClick={() => setOpen(false)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#FAF8F3] z-[61] flex flex-col"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-[#D8C8B5]">
              <span className="text-[11px] track-wide">YOUR BAG</span>
              <button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.length === 0 && <p className="text-sm text-[#77736B]">Your bag is empty.</p>}
              {items.map((i) => (
                <div key={i.key} className="flex gap-4">
                  <img src={i.image} alt={i.name} className="w-20 h-24 object-cover bg-[#E9DFD0]" />
                  <div className="flex-1">
                    <div className="text-sm">{i.name}</div>
                    <div className="text-xs text-[#77736B] mt-1">Size {i.size}</div>
                    <div className="mt-3 flex items-center gap-3">
                      <button onClick={() => setQty(i.key, i.qty - 1)}><Minus className="w-3 h-3" /></button>
                      <span className="text-xs w-4 text-center">{i.qty}</span>
                      <button onClick={() => setQty(i.key, i.qty + 1)}><Plus className="w-3 h-3" /></button>
                      <button onClick={() => remove(i.key)} className="ml-auto text-[10px] track-mid text-[#77736B]">REMOVE</button>
                    </div>
                  </div>
                  <div className="text-sm">{money(i.price * i.qty)}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#D8C8B5] px-6 py-6">
              <div className="flex justify-between text-sm mb-5">
                <span className="track-mid text-[11px]">SUBTOTAL</span>
                <span>{money(total)}</span>
              </div>
              <Link to="/checkout" onClick={() => setOpen(false)}
                className={`block text-center bg-[#252525] text-[#FAF8F3] py-4 text-[11px] track-wide ${items.length ? "" : "pointer-events-none opacity-40"}`}>
                CHECKOUT
              </Link>
              <Link to="/cart" onClick={() => setOpen(false)} className="block text-center mt-3 text-[11px] track-mid text-[#77736B]">VIEW BAG</Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}