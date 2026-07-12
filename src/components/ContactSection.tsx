import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Heart, ThumbsUp, Send } from 'lucide-react';
import { SERVER_DATA } from '../config/serverData';

export default function ContactSection() {
  const handleScrollToInfo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#informasi');
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="kontak" className="py-20 relative overflow-hidden bg-[#0F1117] grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#12151D]/0 via-[#0F1117] to-[#0F1117] pointer-events-none" />
      <div className="absolute top-[30%] left-[-20%] w-[60%] aspect-square bg-[#00F0FF]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact info grid - "Sell Plugin" & "Official Links" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* Sell Plugin Kontak Card */}
          <div className="bg-[#1A1E29] border border-white/5 hover:border-[#00F0FF]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20 text-[#00F0FF]">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white font-sans">Hubungi Kami</h3>
                  <p className="text-xs text-[#B7BDC8]">Pertanyaan seputar plugin kustom</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-[#00F0FF] uppercase tracking-wider block mb-0.5">Layanan / Label</span>
                    <p className="font-minecraft text-sm text-white tracking-wide">{SERVER_DATA.contactServiceLabel}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded w-fit uppercase font-minecraft">AKTIF</span>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-[10px] font-bold text-[#00F0FF] uppercase tracking-wider block mb-0.5">Nomor Telepon</span>
                  <p className="font-mono text-base md:text-lg text-white font-bold tracking-wide">{SERVER_DATA.contactNumber}</p>
                </div>
              </div>
            </div>

            <div>
              <a
                href={SERVER_DATA.contactWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-[#00F0FF]/10 text-white hover:text-[#00F0FF] font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-[#00F0FF]/20 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <MessageSquare size={16} />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* Official Social/Vote Community Links */}
          <div className="bg-[#1A1E29] border border-white/5 hover:border-[#00F0FF]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
                  <Heart size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white font-sans">Link Resmi Komunitas</h3>
                  <p className="text-xs text-[#B7BDC8]">Tempat kumpul player {SERVER_DATA.serverName}</p>
                </div>
              </div>

              {/* Social Links List */}
              <div className="space-y-3 mb-8">
                {/* Vote Link */}
                <a
                  href={SERVER_DATA.voteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white/[0.02] hover:bg-[#00F0FF]/5 border border-white/5 hover:border-[#00F0FF]/20 rounded-xl transition-all group/link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-[#00F0FF]/10 text-[#00F0FF] rounded-lg">
                      <ThumbsUp size={14} />
                    </div>
                    <span className="text-xs md:text-sm text-[#B7BDC8] group-hover/link:text-white font-medium transition-colors">Vote Server {SERVER_DATA.serverName}</span>
                  </div>
                  <span className="text-[9px] font-bold font-minecraft text-[#00F0FF] group-hover/link:translate-x-1 transition-transform">VOTE &gt;</span>
                </a>

                {/* WhatsApp group */}
                <a
                  href={SERVER_DATA.whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white/[0.02] hover:bg-[#00F0FF]/5 border border-white/5 hover:border-[#00F0FF]/20 rounded-xl transition-all group/link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <MessageSquare size={14} />
                    </div>
                    <span className="text-xs md:text-sm text-[#B7BDC8] group-hover/link:text-white font-medium transition-colors">WhatsApp Group Server</span>
                  </div>
                  <span className="text-[9px] font-bold font-minecraft text-emerald-400 group-hover/link:translate-x-1 transition-transform">GABUNG &gt;</span>
                </a>

                {/* Discord link */}
                <a
                  href={SERVER_DATA.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white/[0.02] hover:bg-[#00F0FF]/5 border border-white/5 hover:border-[#00F0FF]/20 rounded-xl transition-all group/link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-[#5865F2]/10 text-[#5865F2] rounded-lg">
                      <Send size={14} />
                    </div>
                    <span className="text-xs md:text-sm text-[#B7BDC8] group-hover/link:text-white font-medium transition-colors">Discord Server Komunitas</span>
                  </div>
                  <span className="text-[9px] font-bold font-minecraft text-[#5865F2] group-hover/link:translate-x-1 transition-transform">DISCORD &gt;</span>
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[10px] text-white/30 font-sans">
                Gunakan link di atas untuk memantau pengumuman dan maintenance server secara langsung.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Penutup Banner */}
        <div className="relative bg-gradient-to-br from-[#121A2E] to-[#0A0D15] border border-[#00F0FF]/30 rounded-3xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,240,255,0.1)] text-center overflow-hidden">
          {/* Ambient glows inside the card */}
          <div className="absolute top-[-50%] left-[-20%] w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-50%] right-[-20%] w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-widest font-minecraft block mb-4">ADVENTURE AWAITS</span>
            
            <h2 className="text-3xl md:text-5xl font-bold font-sans text-white tracking-tight mb-5 text-glow">
              Siap Memulai Petualanganmu?
            </h2>
            
            <p className="text-xs md:text-sm text-[#B7BDC8] leading-relaxed mb-10 max-w-lg">
              {SERVER_DATA.serverName} siap menyambut kehadiranmu. Ambil pedangmu, rakit perlengkapanmu, kumpulkan teman-temanmu, dan mulailah bertahan hidup bersama ribuan player aktif lainnya!
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Gabung Sekarang - Smooth Scroll */}
              <a
                href="#informasi"
                onClick={handleScrollToInfo}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#00D1FF] text-[#0F1117] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] font-bold text-xs uppercase tracking-wider rounded-xl hover:scale-[1.03] transition-all duration-200 cursor-pointer text-center"
              >
                Gabung Sekarang
              </a>

              {/* Vote Server */}
              <a
                href={SERVER_DATA.voteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white hover:text-[#00F0FF] font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-[#00F0FF]/20 hover:bg-[#00F0FF]/5 rounded-xl hover:scale-[1.03] transition-all duration-200 cursor-pointer text-center"
              >
                Vote Server
              </a>

              {/* Discord */}
              <a
                href={SERVER_DATA.discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#5865F2]/10 hover:bg-[#5865F2]/25 text-[#5865F2] hover:text-white font-bold text-xs uppercase tracking-wider border border-[#5865F2]/30 rounded-xl hover:scale-[1.03] transition-all duration-200 cursor-pointer text-center"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
