import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import DeveloperModal from './DeveloperModal';
import { SERVER_DATA } from '../config/serverData';

interface HeaderProps {
  currentPage: 'beranda' | 'koneksi' | 'fitur' | 'rules' | 'store' | 'kontak';
  setCurrentPage: (page: 'beranda' | 'koneksi' | 'fitur' | 'rules' | 'store' | 'kontak') => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [devModalOpen, setDevModalOpen] = useState(false);

  // Tracks window scroll to change header background transparency & add responsive slide down look
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Beranda', id: 'beranda' as const },
    { name: 'Koneksi', id: 'koneksi' as const },
    { name: 'Fitur', id: 'fitur' as const },
    { name: 'Aturan & Rank', id: 'rules' as const },
    { name: 'Rank Store', id: 'store' as const },
    { name: 'Hubungi Kami', id: 'kontak' as const },
  ];

  const handlePageChange = (pageId: 'beranda' | 'koneksi' | 'fitur' | 'rules' | 'store' | 'kontak') => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const firstWord = SERVER_DATA.serverName.split(' ')[0];
  const remainingWords = SERVER_DATA.serverName.split(' ').slice(1).join(' ');

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-[#0F1117]/95 backdrop-blur-md border-b border-[#00F0FF]/20 py-2.5 shadow-[0_4px_30px_rgba(0,240,255,0.08)] translate-y-0'
            : 'bg-[#0F1117]/40 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <button
            onClick={() => handlePageChange('beranda')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            aria-label={`Kembali ke Beranda ${SERVER_DATA.serverName}`}
          >
            <Logo size="sm" />
            <span className="font-mono font-black text-white text-base sm:text-lg tracking-widest group-hover:text-[#00F0FF] transition-colors uppercase">
              {firstWord} {remainingWords && <span className="text-[#00F0FF]">{remainingWords}</span>}
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/35 shadow-[0_0_15px_rgba(0,240,255,0.15)] text-glow'
                      : 'text-[#B7BDC8] hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button (Clean Web Dev modal link) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setDevModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 text-[#D1D5DB] hover:text-white border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <Terminal size={14} className="text-purple-400" />
              Dev Info
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDevModalOpen(true)}
              className="px-2.5 py-1.5 bg-white/5 text-[#B7BDC8] hover:text-white border border-white/10 rounded-lg text-[10px] uppercase font-bold tracking-wider cursor-pointer"
              aria-label="Lihat info developer"
            >
              Dev Info
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#B7BDC8] hover:text-white p-2 rounded-lg cursor-pointer transition-colors"
              aria-label="Buka menu navigasi"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0F1117] border-b border-[#00F0FF]/10 px-4 py-6 flex flex-col gap-3 shadow-2xl z-50 animate-fade-in">
            <nav className="flex flex-col gap-1.5" aria-label="Navigasi Seluler">
              {menuItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 shadow-[0_0_12px_rgba(0,240,255,0.1)]'
                        : 'text-[#B7BDC8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Developer Modal Popup */}
      <DeveloperModal isOpen={devModalOpen} onClose={() => setDevModalOpen(false)} />
    </>
  );
}
