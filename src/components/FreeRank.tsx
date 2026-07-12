import React from 'react';
import { Gift } from 'lucide-react';
import { SERVER_DATA } from '../config/serverData';

export default function FreeRank() {
  const steps = SERVER_DATA.freeRankSteps;

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#12151D] to-[#0F1117]">
      <div className="absolute top-[20%] left-[-15%] w-[55%] aspect-square bg-[#00F0FF]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[55%] aspect-square bg-yellow-500/2 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-minecraft block mb-3">REWARDS</span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight mb-4">
            Cara Mendapatkan Rank Gratis
          </h2>
          <p className="text-sm md:text-base text-[#B7BDC8]">
            Kamu bisa berkontribusi bagi kemajuan komunitas dan mendapatkan jaminan pangkat/rank istimewa tanpa mengeluarkan uang sepeser pun.
          </p>
        </div>

        {/* Highlight Main Banner */}
        <div className="relative overflow-hidden bg-[#1A1E29] border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          {/* Ambient glow */}
          <div className="absolute top-[-40%] right-[-10%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Callout Info */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <Gift size={28} />
              </div>
              
              <h3 className="font-minecraft text-[#00F0FF] text-xl md:text-2xl font-bold tracking-wide mb-4 uppercase">
                FREE RANK CREATOR
              </h3>
              
              <p className="text-sm text-[#B7BDC8] font-sans leading-relaxed mb-6">
                Kami sangat mengapresiasi para konten kreator dan builder berbakat di komunitas kami. Pilih salah satu rute di samping, lakukan aktivitasmu, lalu hubungi tim Helper/Admin untuk klaim hadiah rank kamu!
              </p>

              <div className="inline-flex items-center gap-2.5 px-4.5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
                No Pay to Win — 100% Usaha Kamu
              </div>
            </div>

            {/* List of Steps Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="p-5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-[#00F0FF]/20 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-4 ${step.color} group-hover:scale-105 transition-transform`}>
                      <Icon size={16} />
                    </div>
                    
                    <h4 className="font-bold text-sm text-white font-sans group-hover:text-[#00F0FF] transition-colors mb-1.5">
                      {step.title}
                    </h4>
                    
                    <p className="text-xs text-[#B7BDC8] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
