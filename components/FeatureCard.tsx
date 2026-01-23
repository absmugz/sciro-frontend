import React from "react";

export default function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
      <div className="font-semibold text-white">{title}</div>
      <div className="text-gray-400 text-sm">{desc}</div>
    </div>
  );
}
