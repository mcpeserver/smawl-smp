import React from 'react';
import { Shield, Hammer } from 'lucide-react';
import { SERVER_DATA } from '../config/serverData';

interface StaffMember {
  name: string;
  role: 'Owner / Admin' | 'Helper';
  skinSeed: string; // Used to select unique pixel art face colors
}

export default function StaffSection() {
  const staffList = SERVER_DATA.staffList as StaffMember[];

  // Generates custom Minecraft pixel face SVG based on seed
  const renderMinecraftFace = (seed: string) => {
    switch (seed) {
      case 'bocil':
        return (
          // Crimson warrior with red hair and headband
          <svg viewBox="0 0 8 8" className="w-full h-full shape-rendering-crisp">
            <rect x="0" y="0" width="8" height="8" fill="#D36B41" /> {/* Hair/base */}
            <rect x="0" y="0" width="8" height="2" fill="#2E3033" /> {/* Dark headband */}
            <rect x="1" y="2" width="6" height="5" fill="#F7C8A4" /> {/* Face */}
            <rect x="1" y="3" width="1" height="1" fill="#FFFFFF" /> {/* Eyes */}
            <rect x="2" y="3" width="1" height="1" fill="#FF4A4A" />
            <rect x="5" y="3" width="1" height="1" fill="#FFFFFF" />
            <rect x="6" y="3" width="1" height="1" fill="#FF4A4A" />
            <rect x="3" y="5" width="2" height="1" fill="#C84831" /> {/* Mouth */}
            <rect x="0" y="6" width="1" height="2" fill="#D36B41" /> {/* Sideburns */}
            <rect x="7" y="6" width="1" height="2" fill="#D36B41" />
          </svg>
        );
      case 'jessz':
        return (
          // Cyan King/Queen with golden details
          <svg viewBox="0 0 8 8" className="w-full h-full shape-rendering-crisp">
            <rect x="0" y="0" width="8" height="8" fill="#F4D068" /> {/* Golden Crown Base */}
            <rect x="0" y="1" width="8" height="1" fill="#00D1FF" /> {/* Cyan gems */}
            <rect x="1" y="2" width="6" height="5" fill="#E8C39E" /> {/* Face */}
            <rect x="1" y="3" width="1" height="1" fill="#FFFFFF" /> {/* Eyes */}
            <rect x="2" y="3" width="1" height="1" fill="#005B9E" />
            <rect x="5" y="3" width="1" height="1" fill="#FFFFFF" />
            <rect x="6" y="3" width="1" height="1" fill="#005B9E" />
            <rect x="3" y="5" width="2" height="1" fill="#A47B5E" /> {/* Mouth */}
            <rect x="0" y="0" width="1" height="2" fill="#00F0FF" /> {/* crown peaks */}
            <rect x="3" y="0" width="2" height="1" fill="#00F0FF" />
            <rect x="7" y="0" width="1" height="2" fill="#00F0FF" />
          </svg>
        );
      case 'zrex':
        return (
          // Lime green Dinosaur/Lizard Hoodie skin
          <svg viewBox="0 0 8 8" className="w-full h-full shape-rendering-crisp">
            <rect x="0" y="0" width="8" height="8" fill="#589E35" /> {/* Green Hood */}
            <rect x="1" y="1" width="6" height="1" fill="#76C449" />
            <rect x="2" y="2" width="4" height="5" fill="#F0C39C" /> {/* Face */}
            <rect x="2" y="3" width="1" height="1" fill="#FFFFFF" /> {/* Eyes */}
            <rect x="3" y="3" width="1" height="1" fill="#3A5FCD" />
            <rect x="4" y="3" width="1" height="1" fill="#FFFFFF" />
            <rect x="5" y="3" width="1" height="1" fill="#3A5FCD" />
            <rect x="3" y="5" width="2" height="1" fill="#936D53" /> {/* Mouth */}
            <rect x="1" y="5" width="1" height="2" fill="#FFFFFF" /> {/* Dino Teeth */}
            <rect x="6" y="5" width="1" height="2" fill="#FFFFFF" />
          </svg>
        );
      case 'kaikai':
        return (
          // Purple Enderman gamer themed skin
          <svg viewBox="0 0 8 8" className="w-full h-full shape-rendering-crisp">
            <rect x="0" y="0" width="8" height="8" fill="#1C0E28" /> {/* Dark base */}
            <rect x="1" y="2" width="6" height="5" fill="#E2B492" /> {/* Skin */}
            <rect x="0" y="0" width="8" height="3" fill="#6A0DAD" /> {/* Purple hair */}
            <rect x="1" y="4" width="1" height="1" fill="#FFFFFF" /> {/* Eyes */}
            <rect x="2" y="4" width="1" height="1" fill="#D000FF" />
            <rect x="5" y="4" width="1" height="1" fill="#FFFFFF" />
            <rect x="6" y="4" width="1" height="1" fill="#D000FF" />
            <rect x="3" y="5.5" width="2" height="0.5" fill="#754C24" /> {/* Mouth */}
          </svg>
        );
      case 'sopyan':
        return (
          // Classic Explorer / Builder Steve skin
          <svg viewBox="0 0 8 8" className="w-full h-full shape-rendering-crisp">
            <rect x="0" y="0" width="8" height="8" fill="#3D2B1F" /> {/* Brown hair */}
            <rect x="1" y="2.5" width="6" height="4.5" fill="#EAD2AC" /> {/* Face skin */}
            <rect x="1" y="3.5" width="1" height="1" fill="#FFFFFF" /> {/* Eyes */}
            <rect x="2" y="3.5" width="1" height="1" fill="#5D92A5" />
            <rect x="5" y="3.5" width="1" height="1" fill="#FFFFFF" />
            <rect x="6" y="3.5" width="1" height="1" fill="#5D92A5" />
            <rect x="3" y="5" width="2" height="1" fill="#402010" /> {/* Beard/Mouth */}
            <rect x="2" y="5" width="4" height="1" fill="#402010" />
          </svg>
        );
      default:
        return (
          // Standard Steve
          <svg viewBox="0 0 8 8" className="w-full h-full shape-rendering-crisp">
            <rect x="0" y="0" width="8" height="8" fill="#402613" />
            <rect x="1" y="2" width="6" height="5" fill="#E0B088" />
            <rect x="1" y="3" width="1" height="1" fill="#FFFFFF" />
            <rect x="2" y="3" width="1" height="1" fill="#4E82A5" />
            <rect x="5" y="3" width="1" height="1" fill="#FFFFFF" />
            <rect x="6" y="3" width="1" height="1" fill="#4E82A5" />
            <rect x="3" y="5" width="2" height="1" fill="#804020" />
          </svg>
        );
    }
  };

  return (
    <section id="staff" className="py-20 relative bg-gradient-to-b from-[#0F1117] to-[#12151D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-widest font-minecraft block mb-3">Jajaran Staff</span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight mb-4">
            Staff &amp; Pengelola Smawl SMP
          </h2>
          <p className="text-sm md:text-base text-[#B7BDC8]">
            Tim pengembang, administrator, dan pembimbing ramah yang siap mendampingi perjalanan bermainmu.
          </p>
        </div>

        {/* Staff Cards Premium Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl mx-auto">
          {staffList.map((member) => {
            const isOwner = member.role === 'Owner / Admin';
            return (
              <div
                key={member.name}
                className="relative w-full sm:w-[260px] bg-[#1A1E29] border border-white/5 hover:border-[#00F0FF]/30 rounded-2xl p-6 flex flex-col items-center shadow-lg transition-all duration-300 group hover:-translate-y-1.5"
              >
                {/* Ambient glow color based on role */}
                <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl ${isOwner ? 'bg-gradient-to-r from-red-500 to-[#00F0FF]' : 'bg-emerald-400'}`} />

                {/* Pixel Art Minecraft Avatar Container */}
                <div className="w-24 h-24 bg-[#0F1117] border-2 border-white/5 rounded-xl overflow-hidden p-1.5 mb-5 shadow-inner group-hover:border-[#00F0FF]/40 group-hover:scale-105 transition-all duration-300">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    {renderMinecraftFace(member.skinSeed)}
                  </div>
                </div>

                {/* Staff Name */}
                <h3 className="font-minecraft text-white text-base font-bold tracking-wide mb-1 text-center group-hover:text-[#00F0FF] transition-colors">
                  {member.name}
                </h3>

                {/* Role Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10 mt-2">
                  {isOwner ? (
                    <Shield size={12} className="text-[#00F0FF] shrink-0" />
                  ) : (
                    <Hammer size={12} className="text-emerald-400 shrink-0" />
                  )}
                  <span className={`text-[10px] font-bold font-sans tracking-wide uppercase ${isOwner ? 'text-[#00F0FF]' : 'text-emerald-400'}`}>
                    {member.role}
                  </span>
                </div>

                {/* Hover indicator accent */}
                <div className="absolute bottom-3 right-3 w-1 h-1 bg-white/5 group-hover:bg-[#00F0FF] rounded-full transition-colors" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
