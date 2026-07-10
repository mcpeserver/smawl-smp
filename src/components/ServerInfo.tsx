import React, { useState } from 'react';
import { Copy, Terminal, Smartphone, CopyCheck, AlertCircle } from 'lucide-react';
import Toast from './Toast';

export default function ServerInfo() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [copiedSection, setCopiedSection] = useState<'both' | 'java' | 'bedrock' | null>(null);

  const handleCopy = (text: string, section: 'both' | 'java' | 'bedrock') => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage('IP berhasil disalin');
      setShowToast(true);
      setCopiedSection(section);
      
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      setTimeout(() => {
        setCopiedSection(null);
      }, 1500);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <section id="informasi" className="py-20 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-[30%] left-[-20%] w-[60%] aspect-square bg-[#00F0FF]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] aspect-square bg-purple-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-widest font-minecraft block mb-3">CONECTIVITY</span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight mb-4">
            Informasi Server Smawl SMP
          </h2>
          <p className="text-sm md:text-base text-[#B7BDC8]">
            Hubungkan client Minecraft milikmu dan langsung mainkan bersama player lainnya.
          </p>
        </div>

        {/* IP Cards Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Java Edition Connect Card */}
          <div className="relative bg-[#1A1E29] border border-white/5 hover:border-[#00F0FF]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl group transition-all duration-300">
            <div>
              {/* Card Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center border border-[#00F0FF]/20 text-[#00F0FF]">
                  <Terminal size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white font-sans">Java Edition</h3>
                  <p className="text-xs text-[#B7BDC8]">Untuk PC / Mac / Launcher</p>
                </div>
              </div>

              {/* Server connection fields */}
              <div className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div>
                    <span className="text-[10px] font-bold text-[#00F0FF] uppercase tracking-wider block mb-0.5">Server IP Address</span>
                    <p className="font-mono text-sm md:text-base text-white font-medium select-all">play.smawlsmp.my.id</p>
                  </div>
                  <span className="text-[10px] font-semibold text-white/40 bg-white/5 px-2.5 py-1 rounded border border-white/5 uppercase font-minecraft sm:self-center self-start">DEFAULT</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div>
                    <span className="text-[10px] font-bold text-[#00F0FF] uppercase tracking-wider block mb-0.5">Port Koneksi</span>
                    <p className="font-mono text-sm md:text-base text-white font-medium">25604</p>
                  </div>
                  <span className="text-[10px] font-semibold text-white/40 bg-white/5 px-2.5 py-1 rounded border border-white/5 uppercase font-minecraft sm:self-center self-start">CUSTOM</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div>
              <button
                onClick={() => handleCopy('play.smawlsmp.my.id:25604', 'java')}
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-white/5 hover:bg-[#00F0FF]/10 text-white hover:text-[#00F0FF] font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-[#00F0FF]/20 rounded-xl transition-all duration-200 cursor-pointer"
              >
                {copiedSection === 'java' ? (
                  <>
                    <CopyCheck size={16} className="text-[#00F0FF]" />
                    Berhasil Disalin!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Java
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bedrock Edition Connect Card */}
          <div className="relative bg-[#1A1E29] border border-white/5 hover:border-[#00F0FF]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl group transition-all duration-300">
            <div>
              {/* Card Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400">
                  <Smartphone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white font-sans">Bedrock Edition</h3>
                  <p className="text-xs text-[#B7BDC8]">Untuk HP / Android / iOS / Win10 / Console</p>
                </div>
              </div>

              {/* Server connection fields */}
              <div className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">Server IP Address</span>
                    <p className="font-mono text-sm md:text-base text-white font-medium select-all">play.smawlsmp.my.id</p>
                  </div>
                  <span className="text-[10px] font-semibold text-white/40 bg-white/5 px-2.5 py-1 rounded border border-white/5 uppercase font-minecraft sm:self-center self-start">DEFAULT</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">Port Koneksi</span>
                    <p className="font-mono text-sm md:text-base text-white font-medium">25604</p>
                  </div>
                  <span className="text-[10px] font-semibold text-white/40 bg-white/5 px-2.5 py-1 rounded border border-white/5 uppercase font-minecraft sm:self-center self-start">CUSTOM</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div>
              <button
                onClick={() => handleCopy('play.smawlsmp.my.id:25604', 'bedrock')}
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-white/5 hover:bg-amber-400/10 text-white hover:text-amber-400 font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-amber-400/20 rounded-xl transition-all duration-200 cursor-pointer"
              >
                {copiedSection === 'bedrock' ? (
                  <>
                    <CopyCheck size={16} className="text-amber-400" />
                    Berhasil Disalin!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Bedrock
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Global Connection Action Bar */}
        <div className="relative bg-gradient-to-r from-[#1A1E29] to-[#12151D] border border-white/5 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3.5">
            <div className="text-[#00F0FF] p-1.5 rounded-lg bg-[#00F0FF]/10">
              <AlertCircle size={18} />
            </div>
            <p className="text-xs md:text-sm text-[#B7BDC8] text-center sm:text-left font-sans font-normal">
              Server ini mendukung teknologi crossplay yang lancar sehingga Java &amp; Bedrock dapat bertemu di dunia yang sama.
            </p>
          </div>
          <button
            onClick={() => handleCopy('play.smawlsmp.my.id', 'both')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#00F0FF] text-[#0F1117] hover:bg-[#00D1FF] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_14px_rgba(0,240,255,0.2)] cursor-pointer shrink-0"
          >
            {copiedSection === 'both' ? (
              <>
                <CopyCheck size={14} />
                IP Berhasil Disalin!
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy IP Utama
              </>
            )}
          </button>
        </div>

      </div>

      {/* Embedded Toast Notification */}
      <Toast message={toastMessage} isVisible={showToast} />
    </section>
  );
}
