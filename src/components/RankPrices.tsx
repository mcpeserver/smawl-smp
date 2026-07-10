import React from 'react';
import { Sparkles, ShieldCheck, Gem, Crown, ShoppingBag, Coins, Swords } from 'lucide-react';

export default function RankPrices() {
  const tiers = [
    {
      name: 'VIP',
      price: '30K',
      fullPrice: 'Rp 30.000',
      icon: Sparkles,
      color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      shadow: 'hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]',
    },
    {
      name: 'VIP+',
      price: '50K',
      fullPrice: 'Rp 50.000',
      icon: ShieldCheck,
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      shadow: 'hover:shadow-[0_10px_30px_rgba(52,211,153,0.1)]',
    },
    {
      name: 'MVP',
      price: '80K',
      fullPrice: 'Rp 80.000',
      icon: Gem,
      color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      shadow: 'hover:shadow-[0_10px_30px_rgba(96,165,250,0.1)]',
    },
    {
      name: 'MVP+',
      price: '100K',
      fullPrice: 'Rp 100.000',
      icon: Crown,
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
      shadow: 'hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]',
      premium: true,
    },
  ];

  const donateItems = [
    {
      title: 'Beli Rank',
      desc: 'Dapatkan pangkat istimewa permanen (VIP, VIP+, MVP, MVP+) dengan keuntungan eksklusif di lobi dan dunia survival.',
      icon: Crown,
      badge: 'POPULER',
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    },
    {
      title: 'Beli SK',
      desc: 'Beli Surat Kepemilikan (SK) tanah tambahan atau item utilitas khusus untuk menunjang keamanan wilayahmu.',
      icon: Coins,
      badge: 'UTILITY',
      color: 'text-[#00F0FF] bg-[#00F0FF]/10 border-[#00F0FF]/20',
    },
    {
      title: 'Beli Senjata',
      desc: 'Dapatkan skin kosmetik, senjata custom tangguh, atau perlengkapan perang pelindung premium di dalam game.',
      icon: Swords,
      badge: 'COMBAT',
      color: 'text-red-400 bg-red-400/10 border-red-400/20',
    },
  ];

  return (
    <section id="rank" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#12151D] to-[#0F1117]">
      {/* Glow shapes */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] aspect-square bg-[#00F0FF]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] aspect-square bg-amber-500/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Rank Prices Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-widest font-minecraft block mb-3">Rankings Shop</span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight mb-4">
            List Rank Server Smawl SMP
          </h2>
          <p className="text-sm md:text-base text-[#B7BDC8]">
            Tingkatkan status pangkat karaktermu dan tunjukkan prestisemu di hadapan pemain lainnya.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative bg-[#1A1E29] border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2 ${tier.shadow} ${
                  tier.premium 
                    ? 'border-[#00F0FF]/40 shadow-[0_4px_24px_rgba(0,240,255,0.1)]' 
                    : 'border-white/5'
                }`}
              >
                {/* Premium tag */}
                {tier.premium && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-[#00F0FF] text-[#0F1117] font-bold text-[9px] uppercase tracking-widest rounded-full font-minecraft shadow-md">
                    BEST VALUE
                  </div>
                )}

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-2.5 rounded-xl border ${tier.color}`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-bold font-minecraft text-white/40">
                      RANK
                    </span>
                  </div>

                  {/* Rank Title */}
                  <h3 className="font-minecraft text-white text-xl font-bold tracking-wider mb-1 uppercase">
                    {tier.name}
                  </h3>

                  {/* Price display */}
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-white font-sans tracking-tight">
                      {tier.price}
                    </p>
                    <p className="text-xs text-[#B7BDC8] font-sans">
                      Sekali beli / {tier.fullPrice}
                    </p>
                  </div>
                </div>

                {/* Aesthetic support line */}
                <div className="pt-6 border-t border-white/[0.04] mt-6">
                  <div className="flex items-center gap-2 text-xs text-[#B7BDC8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>Akses Keuntungan Premium</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dukung Server CTA Section */}
        <div className="border-t border-white/5 pt-20">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-minecraft block mb-3">Support Us</span>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white tracking-tight mb-4">
              Bantu Perkembangan Server Smawl SMP
            </h2>
            <p className="text-sm md:text-base text-[#B7BDC8]">
              Seluruh dukungan keuangan yang kamu berikan dialokasikan langsung untuk biaya perawatan server, upgrade hardware, dan peningkatan kualitas permainan.
            </p>
          </div>

          {/* CTA Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donateItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#1A1E29] border border-white/5 hover:border-[#00F0FF]/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Icon & category */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3 rounded-xl border ${item.color}`}>
                        <Icon size={18} />
                      </div>
                      <span className="text-[9px] font-bold font-minecraft px-2.5 py-1 rounded-md bg-white/5 text-[#B7BDC8] tracking-widest">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-white mb-2 font-sans">{item.title}</h4>
                    <p className="text-xs md:text-sm text-[#B7BDC8] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Aesthetic label line */}
                  <div className="text-[10px] font-bold font-minecraft text-glow text-[#00F0FF] uppercase tracking-wider">
                    HUBUNGI ADMIN VIA WHATSAPP / PLUGINS
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
