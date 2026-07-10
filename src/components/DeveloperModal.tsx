import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Phone, Briefcase, Globe, Users, MessageSquare, Loader2 } from 'lucide-react';
import { DeveloperConfig } from '../types';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  const [data, setData] = useState<DeveloperConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError(null);
      fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Gagal mengambil data developer.");
          }
          return res.json();
        })
        .then((jsonData) => {
          setData(jsonData);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Gagal memuat informasi developer. Silakan coba lagi.");
          setLoading(false);
        });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            className="relative w-full max-w-lg bg-[#1A1E29] border border-[#00F0FF]/20 rounded-2xl p-6 md:p-8 overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] z-10"
          >
            {/* Ambient Cyan Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#00D1FF]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-minecraft text-[#00F0FF] text-lg tracking-wide">
                INFORMASI DEVELOPER
              </h3>
              <button
                onClick={onClose}
                className="text-[#B7BDC8] hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors cursor-pointer"
                aria-label="Tutup modal"
              >
                <X size={18} />
              </button>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3 text-[#B7BDC8]">
                <Loader2 className="animate-spin text-[#00F0FF]" size={36} />
                <p className="text-sm">Menghubungi satelit developer...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-[#FF4A4A] mb-4 text-sm font-medium">{error}</p>
                <button
                  onClick={() => {
                    setLoading(true);
                    setError(null);
                    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
                      .then(res => res.json())
                      .then(setData)
                      .then(() => setLoading(false))
                      .catch(() => {
                        setError("Gagal memuat.");
                        setLoading(false);
                      });
                  }}
                  className="px-4 py-2 bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20 text-[#00F0FF] rounded-lg transition-colors text-xs font-minecraft border border-[#00F0FF]/20 cursor-pointer"
                >
                  ULANGI PROSES
                </button>
              </div>
            ) : data ? (
              <div className="space-y-6">
                {/* Developer Identity Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00F0FF]/10 rounded-xl flex items-center justify-center border border-[#00F0FF]/20 text-[#00F0FF]">
                      <User size={22} />
                    </div>
                    <div>
                      <span className="text-xs text-[#B7BDC8] uppercase tracking-widest font-semibold block">Developed By</span>
                      <p className="font-bold text-lg text-white font-sans">{data.name}</p>
                    </div>
                  </div>
                </div>

                {/* Developer Contacts */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-[#00F0FF]/80 uppercase tracking-widest block">Kontak &amp; Portfolio</span>
                  
                  {data.contact?.whatsapp && (
                    <a
                      href={`https://wa.me/${data.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-white/[0.02] hover:bg-[#00F0FF]/5 border border-white/5 hover:border-[#00F0FF]/20 rounded-xl p-3.5 transition-all group"
                    >
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                        <Phone size={18} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-[#B7BDC8]">WhatsApp</p>
                        <p className="text-sm font-medium text-white group-hover:text-[#00F0FF] transition-colors">
                          +{data.contact.whatsapp}
                        </p>
                      </div>
                    </a>
                  )}

                  {data.website?.portfolio && (
                    <a
                      href={data.website.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-white/[0.02] hover:bg-[#00F0FF]/5 border border-white/5 hover:border-[#00F0FF]/20 rounded-xl p-3.5 transition-all group"
                    >
                      <div className="w-10 h-10 bg-[#00F0FF]/10 rounded-lg flex items-center justify-center border border-[#00F0FF]/20 text-[#00F0FF] group-hover:scale-105 transition-transform">
                        <Briefcase size={18} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-[#B7BDC8]">Portfolio</p>
                        <p className="text-sm font-medium text-white group-hover:text-[#00F0FF] transition-colors break-all">
                          {data.website.portfolio}
                        </p>
                      </div>
                    </a>
                  )}
                </div>

                {/* Developer Community Section */}
                {data.community && (
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold text-[#00F0FF]/80 uppercase tracking-widest block">Komunitas Dev</span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {data.community.website && (
                        <a
                          href={data.community.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-white/[0.02] hover:bg-[#00F0FF]/5 border border-white/5 hover:border-[#00F0FF]/20 rounded-xl p-3 transition-all group"
                        >
                          <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20 text-blue-400">
                            <Globe size={16} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] text-[#B7BDC8] uppercase tracking-wider truncate">{data.community.name}</p>
                            <p className="text-xs font-medium text-white group-hover:text-[#00F0FF] transition-colors truncate">Kunjungi Website</p>
                          </div>
                        </a>
                      )}

                      {data.community.discord && (
                        <a
                          href={data.community.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-white/[0.02] hover:bg-[#00F0FF]/5 border border-white/5 hover:border-[#00F0FF]/20 rounded-xl p-3 transition-all group"
                        >
                          <div className="w-8 h-8 bg-[#5865F2]/10 rounded-lg flex items-center justify-center border border-[#5865F2]/20 text-[#5865F2]">
                            <MessageSquare size={16} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] text-[#B7BDC8] uppercase tracking-wider truncate">Discord Community</p>
                            <p className="text-xs font-medium text-white group-hover:text-[#00F0FF] transition-colors truncate">Gabung Server</p>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
