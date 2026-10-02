import { IMG } from "./media";

export const PRODUCTS = [
  { id: "p1", name: "Evolution Graphic Tee — Black", price: 3500, images: [IMG.teeCharcoal], sizes: ["S", "M", "L", "XL"], category: "oversized", featured: true },
  { id: "p2", name: "Coastal Pocket Tee — Ecru", price: 3200, images: [IMG.teeCream], sizes: ["S", "M", "L", "XL"], category: "oversized", featured: true },
  { id: "p3", name: "Island Relaxed Tee — Clay", price: 3200, images: [IMG.oversized], sizes: ["S", "M", "L", "XL"], category: "oversized", featured: false },
  { id: "p4", name: "Studio Tee — Off White", price: 3000, images: [IMG.story], sizes: ["S", "M", "L", "XL"], category: "oversized", featured: false },
  { id: "p5", name: "Ceylon Heavy Hoodie — Sand", price: 6500, images: [IMG.hoodie], sizes: ["S", "M", "L", "XL"], category: "mens", featured: true },
  { id: "p6", name: "Oversized Essential Tee — Bone", price: 3400, images: [IMG.packaging], sizes: ["S", "M", "L", "XL"], category: "mens", featured: false },
  { id: "p7", name: "Women's Relaxed Fit Tee", price: 3300, images: [IMG.womens], sizes: ["XS", "S", "M", "L"], category: "womens", featured: true },
  { id: "p8", name: "Couple Edit Tee Set", price: 5800, images: [IMG.couple], sizes: ["S", "M", "L", "XL"], category: "womens", featured: false },
];