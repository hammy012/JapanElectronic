import React from 'react';

export default function ProductMarquee() {
  const marqueeItems = [
    "INVERTER AC (1.0 - 2.0 TON)",
    "REFRIGERATORS & FREEZERS",
    "SMART 4K LED TV",
    "AUTOMATIC WASHING MACHINES",
    "ROOM AIR COOLERS",
    "DEEP FREEZERS",
    "WATER DISPENSERS",
    "MICROWAVE OVENS",
    "100% GENUINE OFFICIAL WARRANTY"
  ];

  return (
    <div className="bg-slate-900 text-white py-4 overflow-hidden shadow-inner relative border-y border-slate-800">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First Loop */}
        <div className="flex items-center gap-8 shrink-0">
          {marqueeItems.map((item, index) => (
            <div key={`item1-${index}`} className="flex items-center gap-8 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              <span className="text-slate-300 hover:text-blue-400 transition-colors">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
            </div>
          ))}
        </div>

        {/* Duplicate Loop for Seamless Infinite Scroll */}
        <div className="flex items-center gap-8 shrink-0 ml-8" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <div key={`item2-${index}`} className="flex items-center gap-8 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              <span className="text-slate-300 hover:text-blue-400 transition-colors">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
