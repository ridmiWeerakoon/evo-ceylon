import React from "react";

export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[10px] track-wide text-[#A67C52]">{children}</span>
      <span className="flex-1 h-px bg-[#D8C8B5]" />
    </div>
  );
}