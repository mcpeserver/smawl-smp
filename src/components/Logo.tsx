import React from 'react';
import logoImg from '../assets/images/smawl_smp_logo_1783675891058.jpg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  // Dimension helper based on size preset
  let widthClass = 'w-12 h-12';
  
  if (size === 'sm') {
    widthClass = 'w-9 h-9 sm:w-10 sm:h-10';
  } else if (size === 'lg') {
    widthClass = 'w-24 h-24 md:w-32 md:h-32';
  } else if (size === 'hero') {
    widthClass = 'w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80';
  }

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {size === 'hero' ? (
        // Grand heroic badge with dual ring glows & subtle rotation float
        <div className="relative group">
          {/* Cyberpunk circular/hex neon background glows */}
          <div className="absolute inset-0 bg-[#00F0FF]/25 rounded-3xl blur-[35px] group-hover:bg-[#00F0FF]/35 transition-all duration-500 scale-95" />
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00F0FF] via-[#00A2C2] to-[#8B5CF6] rounded-3xl opacity-60 blur-md group-hover:opacity-85 transition-opacity duration-500 animate-pulse-slow" />
          
          {/* Professional Beveled Gold/Cyan frame for the AI logo */}
          <div className="relative p-1.5 bg-[#121622] border-2 border-[#00F0FF]/40 rounded-3xl shadow-[0_20px_50px_rgba(0,240,255,0.3)] overflow-hidden">
            <img
              src={logoImg}
              alt="Smawl SMP Official AI Logo"
              className="rounded-2xl object-cover animate-float"
              style={{ width: '320px', height: '320px', maxWidth: '100%' }}
              referrerPolicy="no-referrer"
            />
            
            {/* Subtle gloss overlay across the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
      ) : (
        // Clean compact badge for Headers, Footers, Info Cards
        <div className={`relative ${widthClass} rounded-2xl overflow-hidden p-0.5 bg-[#121622] border border-[#00F0FF]/30 shadow-[0_4px_15px_rgba(0,240,255,0.15)] hover:border-[#00F0FF]/60 hover:shadow-[0_4px_20px_rgba(0,240,255,0.35)] transition-all duration-300`}>
          <img
            src={logoImg}
            alt="Smawl SMP Logo"
            className="w-full h-full rounded-xl object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}
