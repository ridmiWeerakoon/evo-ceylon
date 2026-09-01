import React, { useEffect, useState } from "react";
import { setSEO } from "@/lib/seo";
import { WHATSAPP, INSTAGRAM } from "@/lib/media";
import { MessageCircle, MapPin, Mail, Check } from "lucide-react";

const field = "w-full bg-transparent border-b border-[#D8C8B5] py-3 outline-none text-sm focus:border-[#A67C52] transition-colors";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setSEO({ title: "Contact — EVO CEYLON", description: "Talk to the EVO CEYLON team in Colombo — orders, custom clothing and wholesale." });
  }, []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    // TODO: replace with your own backend (Supabase/email service/etc.) once ready
    console.log("Contact form submitted:", form);
    setSent(true);
  };

  return (
    <div className="pt-32 md:pt-40 edge">
      <h1 className="font-display text-5xl md:text-7xl track-mid">SAY HELLO</h1>
      <p className="mt-6 max-w-md text-[#77736B] leading-relaxed">Orders, sizing, collaborations or custom studio enquiries — we reply fast.</p>

      <div className="mt-20 grid md:grid-cols-2 gap-16 lg:gap-24">
        <div>
          {sent ? (
            <div>
              <Check className="w-8 h-8 text-[#A67C52]" />
              <h2 className="mt-6 font-display text-3xl">Message sent.</h2>
              <p className="mt-4 text-[#4a4a4a]">We'll be in touch within one working day.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-8">
              <input required placeholder="Name" value={form.name} onChange={set("name")} className={field} />
              <input required type="email" placeholder="Email" value={form.email} onChange={set("email")} className={field} />
              <input placeholder="Subject" value={form.subject} onChange={set("subject")} className={field} />
              <textarea rows={5} placeholder="Message" value={form.message} onChange={set("message")} className={field} />
              <button className="bg-[#252525] text-[#FAF8F3] px-12 py-4 text-[11px] track-wide hover:bg-[#A67C52] transition-colors">SEND MESSAGE</button>
            </form>
          )}
        </div>

        <div className="space-y-10">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-4 border border-[#D8C8B5] px-6 py-5 hover:bg-[#252525] hover:text-[#FAF8F3] transition-colors">
            <MessageCircle className="w-5 h-5" /><span className="text-[11px] track-mid">CHAT ON WHATSAPP</span>
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-4 border border-[#D8C8B5] px-6 py-5 hover:bg-[#252525] hover:text-[#FAF8F3] transition-colors">
            <InstagramIcon className="w-5 h-5" /><span className="text-[11px] track-mid">@EVOCEYLON</span>
          </a>

          <div>
            <div className="rule mb-6" />
            <div className="flex gap-4"><MapPin className="w-4 h-4 mt-1 text-[#A67C52]" />
              <p className="text-sm leading-relaxed">EVO CEYLON Studio<br />Marine Drive, Colombo 06<br />Sri Lanka</p>
            </div>
            <div className="flex gap-4 mt-6"><Mail className="w-4 h-4 mt-1 text-[#A67C52]" />
              <p className="text-sm">hello@evoceylon.lk</p>
            </div>
            <p className="mt-8 text-xs text-[#77736B] leading-relaxed">Studio hours — Mon to Sat, 9.00am to 6.00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}