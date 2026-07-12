import React from 'react';
import { Flame, Compass } from 'lucide-react';
import { SERVER_DATA } from '../config/serverData';

export default function KeepInventoryCard() {
  const info = SERVER_DATA.keepInventoryInfo;

  return (
    <div className="max-w-4xl mx-auto px-4 mb-20">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1C1115] to-[#120B0D] border border-red-500/20 rounded-2xl p-6 md:p-10 shadow-[0_15px_40px_rgba(239,68,68,0.06)] flex flex-col md:flex-row items-center justify-between gap-8 group">
        
        {/* Animated Crimson Glow Effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-red-600/15 transition-colors duration-500" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/5 rounded-full blur-[50px] pointer-events-none" />

        {/* Content text */}
        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold font-minecraft uppercase tracking-wider mb-4">
            <Flame size={12} className="animate-pulse" />
            {info.tag}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold font-sans text-white tracking-tight mb-3">
            {info.title}
          </h3>
          
          <p className="text-sm text-[#B7BDC8] font-sans leading-relaxed max-w-xl">
            {info.description}
          </p>
        </div>

        {/* Nether Dimension Badge */}
        <div className="relative flex flex-col items-center justify-center p-6 bg-[#25131A] border border-red-500/30 rounded-2xl min-w-[200px] shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group-hover:border-red-500/50 transition-all duration-300 w-full md:w-auto">
          {/* Custom SVG Nether Portal Visual representation */}
          <div className="absolute inset-0.5 bg-gradient-to-t from-purple-950/40 to-red-950/40 rounded-xl opacity-50" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 text-red-500 mb-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <Compass size={28} />
            </div>
            
            <span className="text-xs text-[#B7BDC8] font-bold uppercase tracking-widest font-sans mb-1">{info.dimensionLabel}</span>
            <p className="font-minecraft text-xl text-red-500 font-bold tracking-wider text-glow uppercase">
              {info.dimensionName}
            </p>
          </div>

          {/* Accent bottom bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-b-2xl" />
        </div>

      </div>
    </div>
  );
}
