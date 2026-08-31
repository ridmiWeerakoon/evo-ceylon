import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMG } from "@/lib/media";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <motion.img
        src={IMG.hero} alt="EVO CEYLON golden hour rooftop editorial"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/45" />

      <div className="relative h-full edge flex flex-col justify-end pb-20 md:pb-28">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}
          className="text-[10px] track-wide text-white/80 mb-6">EVO CEYLON — SPRING / ISLAND 26</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white text-[13vw] md:text-[7vw] leading-[0.95] track-mid">
          WEAR YOUR<br />EVOLUTION
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }}
          className="mt-8 max-w-md text-white/85 text-base leading-relaxed">
          Modern Sri Lankan clothing designed for comfort, creativity and individuality.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/shop" className="bg-[#FAF8F3] text-[#252525] px-10 py-4 text-[11px] track-wide text-center hover:bg-[#A67C52] hover:text-white transition-colors">
            SHOP COLLECTION
          </Link>
          <Link to="/custom" className="border border-white/60 text-white px-10 py-4 text-[11px] track-wide text-center hover:bg-white hover:text-[#252525] transition-colors">
            CUSTOMIZE YOUR STYLE
          </Link>
        </motion.div>
      </div>
    </section>
  );
}