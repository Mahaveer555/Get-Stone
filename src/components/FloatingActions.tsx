import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { openQuoteDrawer } from '../utils/quoteDrawer';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating Quick Quote Tab on Middle-Right Edge (Mobile Optimized) */}
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.8, type: 'spring', damping: 20 }}
        onClick={() => openQuoteDrawer('Kota Stone')}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white py-2.5 px-1.5 sm:py-3.5 sm:px-2 shadow-2xl flex flex-col items-center gap-1.5 sm:gap-2 rounded-l-md cursor-pointer group transition-all touch-manipulation active:scale-95"
        title="Open Instant Quote Drawer"
      >
        <Sparkles size={13} className="text-white animate-pulse" />
        <span className="[writing-mode:vertical-rl] rotate-180 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
          Quick Quote
        </span>
      </motion.button>

      {/* Floating Action Buttons Container on RIGHT SIDE (Mobile Ergonomic) */}
      <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3 select-none pb-[env(safe-area-inset-bottom,0px)]">
        {/* Scroll to Top Button (Above Call) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#202321] text-white shadow-xl hover:bg-[var(--accent)] flex items-center justify-center transition-all duration-300 cursor-pointer border border-white/15 touch-manipulation active:scale-90"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp size={16} className="sm:w-[18px] sm:h-[18px]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Call Button with Pulsing Wave & Radiant Lighting Effect */}
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Wave Radar */}
          <motion.span
            animate={{ scale: [1, 1.45, 1.9], opacity: [0.65, 0.25, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
            className="absolute inset-0 rounded-full bg-[#007AFF] pointer-events-none -z-10"
          />
          {/* Inner Breathing Glow Aura */}
          <motion.span
            animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute -inset-1 rounded-full bg-[#007AFF]/40 blur-xs pointer-events-none -z-10"
          />

          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            href="tel:+919214567181"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#007AFF] hover:bg-[#0066d6] text-white shadow-[0_4px_22px_rgba(0,122,255,0.6)] hover:shadow-[0_4px_32px_rgba(0,122,255,0.9)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 group relative touch-manipulation overflow-hidden"
            aria-label="Call GET STONE (+91 92145 67181)"
            title="Direct Call: +91 92145 67181"
          >
            {/* Shimmer Light Streak Reflection */}
            <motion.div
              animate={{ x: ['-120%', '220%'] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', repeatDelay: 1.5 }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
            />

            {/* Periodic Vibrate / Ring Animation on Phone Icon */}
            <motion.div
              animate={{ rotate: [0, -14, 14, -10, 10, -4, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut', repeatDelay: 4 }}
              className="flex items-center justify-center z-10"
            >
              <Phone size={22} className="sm:w-6 sm:h-6" />
            </motion.div>

            {/* Desktop Tooltip */}
            <span className="absolute right-full mr-3 px-2.5 py-1 bg-black/85 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide rounded-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block shadow-md">
              Call: +91 92145 67181
            </span>
          </motion.a>
        </div>

        {/* Floating WhatsApp Button with Pulsing Wave & Radiant Lighting Effect */}
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Wave Radar */}
          <motion.span
            animate={{ scale: [1, 1.45, 1.9], opacity: [0.65, 0.25, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none -z-10"
          />
          {/* Inner Breathing Glow Aura */}
          <motion.span
            animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-xs pointer-events-none -z-10"
          />

          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            href="https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20interested%20in%20natural%20stone%20supplies."
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_22px_rgba(37,211,102,0.65)] hover:shadow-[0_4px_32px_rgba(37,211,102,0.95)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 group relative touch-manipulation overflow-hidden"
            aria-label="WhatsApp GET STONE (+91 92145 67181)"
            title="Chat on WhatsApp (+91 92145 67181)"
          >
            {/* Shimmer Light Streak Reflection */}
            <motion.div
              animate={{ x: ['-120%', '220%'] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', repeatDelay: 1 }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -skew-x-12 pointer-events-none"
            />

            {/* Periodic Wiggle / Pop Animation on WhatsApp Icon */}
            <motion.div
              animate={{ rotate: [0, -12, 14, -10, 10, -3, 3, 0], scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut', repeatDelay: 3 }}
              className="flex items-center justify-center z-10"
            >
              <WhatsAppIcon size={26} className="sm:w-[30px] sm:h-[30px]" />
            </motion.div>

            {/* Desktop Tooltip */}
            <span className="absolute right-full mr-3 px-2.5 py-1 bg-black/85 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide rounded-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block shadow-md">
              WhatsApp Us
            </span>
          </motion.a>
        </div>
      </div>
    </>
  );
};
