import React from 'react';
import { SERVER_DATA } from '../config/serverData';

export default function ServerFeatures() {
  const features = SERVER_DATA.features;

  return (
    <section id="fitur" className="py-20 relative bg-gradient-to-b from-[#0F1117] to-[#12151D]">
      <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-widest font-minecraft block mb-3">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight mb-4">
            Fitur Utama Server Smawl SMP
          </h2>
          <p className="text-sm md:text-base text-[#B7BDC8]">
            Kami menghadirkan gameplay survival premium yang kaya akan fitur untuk memastikan kamu tidak pernah bosan bermain.
          </p>
        </div>

        {/* Dynamic Responsive Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            const isLast = index === features.length - 1;
            return (
              <div
                key={feat.name}
                className={`relative rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 ${
                  isLast 
                    ? 'col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-1 bg-gradient-to-br from-[#1E2638] to-[#1A1E29] border border-[#00F0FF]/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                    : 'bg-[#1A1E29] border border-white/5 hover:border-[#00F0FF]/20 shadow-md'
                }`}
              >
                {/* Accent top gradient glow for highlight cards */}
                {isLast && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent" />
                )}

                {/* Icon Container */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-5 ${feat.color} group-hover:scale-105 transition-transform`}>
                  <Icon size={18} />
                </div>

                {/* Name */}
                <h3 className={`text-base font-bold font-sans mb-2 ${isLast ? 'text-[#00F0FF] font-minecraft' : 'text-white'}`}>
                  {feat.name}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-[#B7BDC8] leading-relaxed">
                  {feat.desc}
                </p>

                {/* Corner detail */}
                <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-white/10 group-hover:bg-[#00F0FF] transition-colors" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
