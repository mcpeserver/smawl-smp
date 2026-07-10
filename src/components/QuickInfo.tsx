import React from 'react';
import { Monitor, Smartphone, ThumbsUp, Shield } from 'lucide-react';

export default function QuickInfo() {
  const cards = [
    {
      title: 'Java Edition',
      description: 'Mainkan di PC/Mac menggunakan Client Minecraft asli dengan performa grafis terbaik.',
      icon: Monitor,
      badge: 'PC / MAC',
      color: 'text-[#00F0FF] bg-[#00F0FF]/10 border-[#00F0FF]/20',
    },
    {
      title: 'Bedrock Edition',
      description: 'Bergabung melalui smartphone (Android/iOS), konsol, atau Windows 10 Edition kapan saja.',
      icon: Smartphone,
      badge: 'MOBILE / CONSOLE',
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    },
    {
      title: 'Vote Server',
      description: 'Dukung server kami setiap hari di platform voting untuk mendapatkan hadiah menarik.',
      icon: ThumbsUp,
      badge: 'DUKUNG KAMI',
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    },
    {
      title: 'Claim Land',
      description: 'Amankan bangunan dan barang berharga milikmu dari serangan griefer dan pencuri.',
      icon: Shield,
      badge: '100% AMAN',
      color: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    },
  ];

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
