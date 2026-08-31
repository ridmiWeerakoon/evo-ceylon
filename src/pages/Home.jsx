import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setSEO } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Categories from "@/components/home/Categories";
import CustomBanner from "@/components/home/CustomBanner";
import GiftSets from "@/components/home/GiftSets";
import InstagramFeed from "@/components/home/InstagramFeed";
import Ceylon from "@/components/home/Ceylon";

import Reviews from "@/components/site/Reviews";
import ProductCard from "@/components/site/ProductCard";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/ui/reveal";

export default function Home() {
  // TODO: replace with real product data once backend (Supabase/etc.) is set up
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setSEO({
      title: "EVO CEYLON — Modern Sri Lankan Lifestyle Clothing",
      description: "Premium oversized tees, men's and women's casual wear and custom clothing from Sri Lanka. Wear your evolution.",
      jsonLd: { "@context": "https://schema.org", "@type": "Organization", name: "EVO CEYLON", description: "Modern Sri Lankan lifestyle clothing", address: { "@type": "PostalAddress", addressCountry: "LK", addressLocality: "Colombo" } },
    });
  }, []);

  return (
    <>
      <Hero />
      <Intro />
      <Categories />

      <section className="edge py-24 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <div className="flex-1"><SectionLabel>FEATURED PIECES</SectionLabel></div>
          <Link to="/shop" className="text-[11px] track-mid text-[#77736B] hover:text-[#252525]">VIEW ALL</Link>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}><ProductCard product={p} /></Reveal>
          ))}
        </div>
      </section>

      <GiftSets />
      <CustomBanner />
      <Ceylon />
      <Reviews />
      <InstagramFeed />
    </>
  );
}