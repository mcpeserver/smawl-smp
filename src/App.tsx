import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import ServerInfo from './components/ServerInfo';
import KeepInventoryCard from './components/KeepInventoryCard';
import ServerFeatures from './components/ServerFeatures';
import ServerRules from './components/ServerRules';
import FreeRank from './components/FreeRank';
import StaffSection from './components/StaffSection';
import RankPrices from './components/RankPrices';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Network, Zap, BookOpen, ShoppingBag, MessageSquare, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'beranda' | 'koneksi' | 'fitur' | 'rules' | 'store' | 'kontak'>('beranda');

  const handlePageChange = (page: 'beranda' | 'koneksi' | 'fitur' | 'rules' | 'store' | 'kontak') => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const portalCards = [
    {
      id: 'koneksi' as const,
      title: 'Koneksi Server',
      desc: 'Dapatkan IP & Port resmi untuk Java & Bedrock dengan fitur salin instan.',
      icon: Network,
      color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-[#00F0FF]',
    },
    {
      id: 'fitur' as const,
      title: 'Fitur Unggulan',
      desc: 'Jelajahi berbagai sistem seru seperti GSit, Player Shop, dan Custom Items kami.',
      icon: Zap,
      color: 'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-400',
    },
    {
      id: 'rules' as const,
      title: 'Aturan & Rank Gratis',
      desc: 'Pelajari regulasi komunitas dan cara mendapatkan kedudukan VIP secara cuma-cuma.',
      icon: BookOpen,
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400',
    },
    {
      id: 'store' as const,
      title: 'Rank Store & Staff',
      desc: 'Dukung keberlangsungan server, lihat harga VIP Rank, serta roster moderator kami.',
      icon: ShoppingBag,
      color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400',
    },
    {
      id: 'kontak' as const,
      title: 'Hubungi Kami',
      desc: 'Kontak WhatsApp official, Vote server harian, dan link Discord komunitas Smawl.',
      icon: MessageSquare,
      color: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20 text-indigo-400',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F1117] relative selection:bg-[#00F0FF]/30 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Noise Texture Overlay for premium AAA look */}
      <div className="noise-overlay" />

      <div>
        {/* Navigation Header */}
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main Content Layout */}
        <main className="relative z-10 pt-20">
          {/* Active View / Tab-based Router with high-performance light DOM footprint */}
          {currentPage === 'beranda' && (
            <div className="animate-fade-in">
              {/* Cinematic Hero Banner */}
              <Hero />

              {/* Quick Info Grid Section */}
              <section className="py-12 bg-gradient-to-b from-[#0F1117] to-[#12151D] relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <QuickInfo />
                </div>
              </section>

              {/* Bento Navigation Dashboard Hub (Solves Performance, Anti-lag, Mobile-first) */}
              <section className="py-16 bg-[#12151D] border-t border-b border-white/[0.03] relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-widest font-mono">PILIH MENU UTAMA</span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 font-sans tracking-tight">
                      Jelajahi Smawl SMP
                    </h2>
                    <p className="text-xs sm:text-sm text-[#B7BDC8] mt-3">
                      Pilih dari menu di bawah untuk langsung menuju halaman informasi spesifik secara instan dan bebas lag.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portalCards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <button
                          key={card.id}
                          onClick={() => handlePageChange(card.id)}
                          className={`bg-gradient-to-br ${card.color} border hover:border-[#00F0FF]/30 rounded-2xl p-6 text-left transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,240,255,0.05)] cursor-pointer group flex flex-col justify-between h-[200px]`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">
                                <Icon size={22} />
                              </div>
                              <ArrowRight size={18} className="text-[#B7BDC8] opacity-40 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                            </div>
                            <h3 className="text-lg font-bold text-white font-sans group-hover:text-glow transition-all">{card.title}</h3>
                            <p className="text-xs text-[#B7BDC8] mt-2 leading-relaxed">{card.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          )}

          {currentPage === 'koneksi' && (
            <div className="animate-fade-in pt-6 md:pt-12">
              <ServerInfo />
              <KeepInventoryCard />
            </div>
          )}

          {currentPage === 'fitur' && (
            <div className="animate-fade-in pt-6 md:pt-12">
              <ServerFeatures />
            </div>
          )}

          {currentPage === 'rules' && (
            <div className="animate-fade-in pt-6 md:pt-12">
              <ServerRules />
              <FreeRank />
            </div>
          )}

          {currentPage === 'store' && (
            <div className="animate-fade-in pt-6 md:pt-12">
              <RankPrices />
              <StaffSection />
            </div>
          )}

          {currentPage === 'kontak' && (
            <div className="animate-fade-in pt-6 md:pt-12">
              <ContactSection />
            </div>
          )}
        </main>
      </div>

      {/* Dynamic Footer with Developer credentials */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
