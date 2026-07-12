import React, { useState, useEffect } from 'react';
import { Globe, Github, MessageSquare, Briefcase, ExternalLink, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { DeveloperConfig } from '../types';
import { SERVER_DATA } from '../config/serverData';

interface FooterProps {
  setCurrentPage: (page: 'beranda' | 'koneksi' | 'fitur' | 'rules' | 'store' | 'kontak') => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [devData, setDevData] = useState<DeveloperConfig | null>(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        return res.json();
      })
      .then((data) => {
        setDevData(data);
      })
      .catch((err) => {
        console.error("Failed to load developer info in footer: ", err);
      });
  }, []);

  const quickLinks = [
    { name: 'Beranda', id: 'beranda' as const },
    { name: 'Koneksi', id: 'koneksi' as const },
    { name: 'Fitur', id: 'fitur' as const },
    { name: 'Rules & Rank', id: 'rules' as const },
    { name: 'Rank Store', id: 'store' as const },
    { name: 'Hubungi Kami', id: 'kontak' as const },
  ];

  const handlePageChange = (pageId: 'beranda' | 'koneksi' | 'fitur' | 'rules' | 'store' | 'kontak') => {
    setCurrentPage(pageId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const firstWord = SERVER_DATA.serverName.split(' ')[0];
  const remainingWords = SERVER_DATA.serverName.split(' ').slice(1).join(' ');

  return (
    <footer className="bg-[#0B0D13] border-t border-white/5 pt-16 pb-8 text-sans relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00F0FF]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Left Column: Brand & Copyright */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              <Logo size="sm" />
              <span className="font-minecraft text-white text-lg tracking-wider font-bold">
                {firstWord} {remainingWords && <span className="text-[#00F0FF]">{remainingWords}</span>}
              </span>
            </div>
            
            <p className="text-xs md:text-sm text-[#B7BDC8] mb-6 max-w-sm leading-relaxed">
              {SERVER_DATA.tagline}
            </p>

            <span className="text-xs text-white/50 font-medium">
              &copy; 2026 {SERVER_DATA.serverName}. All rights reserved.
            </span>
          </div>

          {/* Middle Column: Quick Nav */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-minecraft text-sm font-bold text-white tracking-widest uppercase mb-5">
              Navigasi Cepat
            </h4>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-4 text-left" aria-label="Navigasi Kaki">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handlePageChange(link.id)}
                  className="text-xs md:text-sm text-[#B7BDC8] hover:text-[#00F0FF] transition-colors text-left cursor-pointer font-medium"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Column: Dynamic Developer Links */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-minecraft text-sm font-bold text-[#00F0FF] tracking-widest uppercase mb-5">
              Developer Info
            </h4>
            
            <div className="space-y-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] text-white/40 uppercase font-semibold font-sans tracking-wider">
                  DEVELOPER BY
                </span>
                <p className="text-xs md:text-sm text-white font-semibold">
                  {devData ? devData.name : 'Ran Dev'}
                </p>
              </div>

              {devData?.website?.portfolio && (
                <a
                  href={devData.website.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#B7BDC8] hover:text-[#00F0FF] transition-colors w-fit group"
                >
                  <Briefcase size={14} className="text-white/40 group-hover:text-[#00F0FF] transition-colors" />
                  <span>Portfolio Developer</span>
                  <ExternalLink size={10} className="opacity-50" />
                </a>
              )}

              {devData?.community && (
                <>
                  {devData.community.name && devData.community.website && (
                    <a
                      href={devData.community.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-[#B7BDC8] hover:text-[#00F0FF] transition-colors w-fit group"
                    >
                      <Globe size={14} className="text-white/40 group-hover:text-[#00F0FF] transition-colors" />
                      <span>{devData.community.name}</span>
                      <ExternalLink size={10} className="opacity-50" />
                    </a>
                  )}

                  {devData.community.discord && (
                    <a
                      href={devData.community.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-[#B7BDC8] hover:text-[#00F0FF] transition-colors w-fit group"
                    >
                      <MessageSquare size={14} className="text-[#5865F2] group-hover:text-[#00F0FF] transition-colors" />
                      <span>Discord Developer Community</span>
                      <ExternalLink size={10} className="opacity-50" />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>

        </div>

        {/* Legal disclaimer banner */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] text-white/30 text-center md:text-left leading-relaxed">
            <ShieldCheck size={14} className="shrink-0" />
            <p>
              Website ini dikembangkan secara independen dan tidak berafiliasi dengan Mojang Studios. Minecraft adalah merek dagang dari Mojang Synergies AB.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
