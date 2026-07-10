import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export default function Toast({ message, isVisible }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1A1E29] border border-emerald-500/40 text-white px-5 py-4 rounded-xl shadow-[0_4px_24px_rgba(16,185,129,0.15)] backdrop-blur-md"
        >
          <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <p className="text-sm font-medium font-sans">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
