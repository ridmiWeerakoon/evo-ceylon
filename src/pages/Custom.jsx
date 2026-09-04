import React, { useEffect, useState } from "react";
import { setSEO } from "@/lib/seo";
import Reveal from "@/components/ui/reveal";
import { IMG } from "@/lib/media";
import { Upload, Check } from "lucide-react";

const SERVICES = [
  ["BUSINESS UNIFORMS", "Corporate teams dressed in comfortable, branded staples."],
  ["HOTEL UNIFORMS", "Resort and villa staff wear built for tropical climates."],
  ["CAFE CLOTHING", "Aprons, tees and caps that match your interior."],
  ["EVENT CLOTHING", "Launches, festivals and team days, delivered on time."],
  ["BULK ORDERS", "From 25 to 5,000 pieces with consistent quality."],
  ["PERSONAL CUSTOMIZATION", "One-off prints for birthdays, couples and gifts."],
];

const field = "w-full bg-transparent border-b border-[#D8C8B5] py-3 outline-none text-sm focus:border-[#A67C52] transition-colors";

export default function Custom() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "Business uniforms", quantity: "", requirements: "" });
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setSEO({ title: "Custom Clothing — EVO CEYLON", description: "Custom uniforms and bulk clothing for hotels, cafes, corporate teams and events in Sri Lanka." });
  }, []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    // TODO: replace with real file upload + backend once ready (Supabase Storage + DB, etc.)
    console.log("Custom inquiry submitted:", { ...form, file: file?.name || null });
    setBusy(false);
    setSent(true);
  };

  return (
    <div className="pt-32 md:pt-40">
      <div className="edge">
        <span className="text-[10px] track-wide text-[#A67C52]">CUSTOM CLOTHING STUDIO</span>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">CREATE YOUR<br />OWN IDENTITY</h1>
        <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-[#4a4a4a]">
          We design, print and produce clothing for brands across Sri Lanka — from a single custom tee
          to a full hotel uniform programme.
        </p>
      </div>

      <div className="edge mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {SERVICES.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.05}>
            <div className="rule mb-5" />
            <h3 className="text-[11px] track-wide">{t}</h3>
            <p className="mt-3 text-sm text-[#77736B] leading-relaxed">{d}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-28 grid md:grid-cols-2">
        <div className="relative min-h-[300px] md:min-h-full">
          <img src={IMG.printing} alt="Printing process" className="absolute inset-0 w-full h-full object-cover grayscale" />
        </div>
        <div className="bg-[#E9DFD0]/60 px-8 md:px-16 py-20">
          {sent ? (
            <div className="max-w-sm">
              <Check className="w-8 h-8 text-[#A67C52]" />
              <h2 className="mt-6 font-display text-3xl">Request received.</h2>
              <p className="mt-4 text-[#4a4a4a] leading-relaxed">Our studio team will reach out within one working day with fabric options and pricing.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="max-w-lg space-y-8">
              <h2 className="font-display text-3xl">Request a design consultation</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <input required placeholder="Name" value={form.name} onChange={set("name")} className={field} />
                <input required type="email" placeholder="Email" value={form.email} onChange={set("email")} className={field} />
                <input placeholder="Phone" value={form.phone} onChange={set("phone")} className={field} />
                <input placeholder="Company name" value={form.company} onChange={set("company")} className={field} />
                <select value={form.service} onChange={set("service")} className={field}>
                  {["Business uniforms", "Hotel uniforms", "Cafe clothing", "Event clothing", "Bulk order", "Personal customization"].map((s) => <option key={s}>{s}</option>)}
                </select>
                <input type="number" placeholder="Required quantity" value={form.quantity} onChange={set("quantity")} className={field} />
              </div>
              <textarea rows={4} placeholder="Design requirements" value={form.requirements} onChange={set("requirements")} className={field} />
              <label className="flex items-center gap-3 text-[11px] track-mid text-[#77736B] cursor-pointer">
                <Upload className="w-4 h-4" />
                {file ? file.name : "UPLOAD DESIGN (OPTIONAL)"}
                <input type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
              </label>
              <button disabled={busy} className="bg-[#252525] text-[#FAF8F3] px-12 py-4 text-[11px] track-wide hover:bg-[#A67C52] transition-colors disabled:opacity-50">
                {busy ? "SENDING…" : "SUBMIT REQUEST"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}