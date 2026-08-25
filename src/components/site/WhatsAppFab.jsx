import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/media";

export default function WhatsAppFab() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#252525] text-[#FAF8F3] flex items-center justify-center shadow-lg hover:bg-[#A67C52] transition-colors">
      <MessageCircle className="w-5 h-5" />
    </a>
  );
}