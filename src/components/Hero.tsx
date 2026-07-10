import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MessageSquare, Info } from 'lucide-react';
import Logo from './Logo';
import { SERVER_DATA } from '../config/serverData';

export default function Hero() {
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

  const heroBgImg = SERVER_DATA.images.heroBg;

  return (
    <section
      id="beranda"
      className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-between pt-24 pb-20 px-4 overflow-hidden"
    >
      {/* Immersive cinematic Minecraft-inspired background banner */}
      <div className="absolute inset-0 bg-[#07090F] pointer-events-none z-0">
        <img
          src={heroBgImg}
          alt={`${SERVER_DATA.serverName} World Landscape Backdrop`}
          className="w-full h-full object-cover opacity-75 md:opacity-80 filter brightness-[0.7] contrast-[1.2] transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Balanced premium radial and linear gradients to preserve absolute legibility while letting the landscape shine */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090F]/45 via-[#0F1117]/65 to-[#0F1117]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15)_0%,transparent_80%)]" />
      </div>

      {/* Ambient glowing clouds in the sky built with CSS circles */}
      <div className="absolute top-[15%] left-[-10%] w-[50%] aspect-square bg-[#00F0FF]/8 rounded-full blur-[120px] pointer-events-none animate-pulse-slow z-0" />
      <div className="absolute top-[35%] right-[-10%] w-[45%] aspect-square bg-[#00A2C2]/8 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Hero content container */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center z-10 select-none py-8">
          
          {/* Animated badge for premium status */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-ping" />
            {SERVER_DATA.serverBadge}
          </motion.div>

          {/* Floating Island Sword Logo Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.1 }}
            className="mb-4"
          >
            <Logo size="hero" />
          </motion.div>

          {/* Dynamic Tagline Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[#D1D5DB] hover:text-white transition-colors max-w-2xl font-sans font-medium leading-relaxed mb-8 px-4 text-shadow"
          >
            {SERVER_DATA.tagline}
          </motion.p>

          {/* Interactive Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
          >
            {/* Join WhatsApp Group Button */}
            <a
              href={SERVER_DATA.whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#00F0FF] to-[#00D1FF] text-[#0F1117] font-bold text-sm uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-[1.03] transition-all group duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,240,255,0.2)]"
            >
              <MessageSquare size={18} className="text-[#0F1117] group-hover:scale-115 transition-transform" />
              Gabung Grup
            </a>

            {/* Learn More Smooth Scroll Button */}
            <a
              href="#informasi"
              onClick={handleScrollToInfo}
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#121622]/80 text-white hover:text-[#00F0FF] font-bold text-sm uppercase tracking-wider rounded-xl border border-white/10 hover:border-[#00F0FF]/35 hover:bg-[#00F0FF]/10 hover:scale-[1.03] transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              <Info size={18} />
              Lihat Informasi
            </a>
          </motion.div>

        </div>
      </div>

      {/* Floating debris in viewport */}
      <div className="absolute top-[30%] left-[15%] w-8 h-8 border border-[#00F0FF]/15 rounded-lg transform rotate-45 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[25%] right-[12%] w-10 h-10 border border-[#00D1FF]/15 rounded-lg transform -rotate-12 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '2.5s' }} />

      {/* Animated Scroll Down Indicator - Perfectly positioned with safety margin to prevent CTA overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 0.8 }}
        className="relative mt-4 flex flex-col items-center gap-2 cursor-pointer z-20 hover:scale-105 transition-transform"
        onClick={() => {
          const target = document.querySelector('#informasi');
          if (target) {
            window.scrollTo({
              top: (target as HTMLElement).offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }}
      >
        <span className="text-[10px] text-[#A3AED0] hover:text-[#00F0FF] font-black tracking-widest uppercase font-mono transition-colors">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="p-2 bg-[#1A1E29]/90 border border-[#00F0FF]/25 rounded-full text-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.2)]"
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
