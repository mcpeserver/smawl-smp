import React from 'react';
import { SERVER_DATA } from '../config/serverData';

export default function QuickInfo() {
  const cards = SERVER_DATA.quickInfoCards;

  return (
    <div id="informasi" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto scroll-mt-28">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="relative bg-[#1A1E29] border border-white/5 hover:border-[#00F0FF]/30 rounded-2xl p-6 shadow-lg hover:shadow-[0_10px_30px_rgba(0,240,255,0.05)] transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Ambient Background Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent rounded-2xl pointer-events-none" />

            <div>
              {/* Header Icon + Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className={`p-3 rounded-xl border ${card.color} group-hover:scale-105 transition-transform duration-300`}>
                  <Icon size={20} />
                </div>
                <span className="text-[10px] font-bold font-minecraft px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[#B7BDC8]">
                  {card.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-sans text-white group-hover:text-[#00F0FF] transition-colors mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#B7BDC8] font-sans font-normal leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Accent Corner Decorator */}
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-white/10 group-hover:bg-[#00F0FF] rounded-full transition-colors" />
          </div>
        );
      })}
    </div>
  );
}
