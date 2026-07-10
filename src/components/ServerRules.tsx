import React from 'react';
import { ShieldAlert, Info, AlertTriangle, Users, BookOpen } from 'lucide-react';
import { SERVER_DATA } from '../config/serverData';

export default function ServerRules() {
  const serverRules = SERVER_DATA.serverRules;
  const groupRules = SERVER_DATA.groupRules;

  return (
    <section id="rules" className="py-20 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] aspect-square bg-red-500/3 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] aspect-square bg-[#00F0FF]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-minecraft block mb-3">REGULATION</span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight mb-4">
            Rules &amp; Regulasi Komunitas
          </h2>
          <p className="text-sm md:text-base text-[#B7BDC8]">
            Harap baca dan patuhi semua aturan di bawah ini untuk menjaga kedamaian dan kenyamanan bersama di dalam server maupun grup koordinasi.
          </p>
        </div>

        {/* Server Rules Timeline Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
            <div className="p-2 bg-[#00F0FF]/10 text-[#00F0FF] rounded-lg border border-[#00F0FF]/20">
              <BookOpen size={18} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-sans text-white">Aturan Bermain di Server Minecraft</h3>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">
            {serverRules.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#1A1E29] border-2 border-[#00F0FF] flex items-center justify-center text-[10px] font-bold text-[#00F0FF] font-minecraft shadow-[0_0_10px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>

                <div className="bg-[#1A1E29] border border-white/5 hover:border-[#00F0FF]/20 rounded-2xl p-6 shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors">{item.title}</h4>
                    <span className="text-[10px] font-semibold text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-2.5 py-1 rounded-md uppercase font-minecraft w-fit">
                      {item.type}
                    </span>
                  </div>
                  
                  <p className="text-sm text-[#B7BDC8] leading-relaxed mb-4">{item.description}</p>
                  
                  {/* Warning Punishment block */}
                  <div className="flex items-start gap-2.5 p-3 bg-red-500/5 border border-red-500/20 rounded-xl">
                    <ShieldAlert size={14} className="text-red-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-red-300 font-sans font-medium">
                      <span className="font-bold text-red-400">Hukuman:</span> {item.punishment}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Warning Card Section */}
        <div className="bg-gradient-to-br from-[#291A1E] to-[#1D1215] border border-red-500/30 rounded-2xl p-6 md:p-8 mb-20 shadow-lg flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 border border-red-500/20 shrink-0">
            <AlertTriangle size={32} className="animate-pulse" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white font-sans mb-1">Catatan Penting Pelanggaran!</h4>
            <p className="text-sm text-[#B7BDC8] leading-relaxed">
              Seluruh aktivitas chat dan blok di Smawl SMP tercatat secara otomatis oleh sistem keamanan kami. Jajaran Helper dan Admin berhak melakukan tindakan disipliner langsung di tempat bagi siapa saja yang terbukti merusak suasana damai server.
            </p>
          </div>
        </div>

        {/* Group Rules Two-Column Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
              <Users size={18} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-sans text-white">Aturan Grup Koordinasi (WA &amp; Discord)</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Rules grid */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-[#1A1E29] border border-white/5 rounded-2xl p-6 md:p-8 space-y-4 shadow-md">
                {groupRules.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 pb-4 border-b border-white/[0.03] last:border-0 last:pb-0">
                      <div className="text-emerald-400 mt-0.5 bg-emerald-500/10 p-1 rounded-md shrink-0">
                        <Icon size={14} />
                      </div>
                      <p className="text-sm text-[#B7BDC8] font-sans font-medium">{item.rule}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Warning card for group tags */}
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-br from-[#2D2112] to-[#1F150A] border border-amber-500/30 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between shadow-md">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-1.5 bg-amber-500/10 border border-amber-500/20 rounded-md text-amber-500">
                      <Info size={16} />
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-minecraft">Warning Tag</span>
                  </div>
                  
                  <h4 className="font-bold text-lg text-white mb-2 font-sans">Ketentuan Tag Grup</h4>
                  <p className="text-xs md:text-sm text-[#B7BDC8] leading-relaxed mb-6">
                    Melakukan penyebaran tag grup tanpa alasan mendesak, spam tag, atau mengganggu anggota grup lainnya dilarang.
                  </p>
                </div>

                <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-xl flex items-center gap-2">
                  <ShieldAlert size={14} className="text-amber-500 shrink-0" />
                  <p className="text-xs text-amber-300 font-sans font-semibold">
                    Pelanggaran tag grup dapat dikenakan tindakan Kick atau Ban.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
