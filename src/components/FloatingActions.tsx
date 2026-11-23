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
      {/* Floating Quick Quote Tab on Middle-Right Edge */}
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.8, type: 'spring', damping: 20 }}
        onClick={() => openQuoteDrawer('Kota Stone')}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white py-3.5 px-2 shadow-2xl flex flex-col items-center gap-2 rounded-l-md cursor-pointer group transition-all"
        title="Open Instant Quote Drawer"
      >
        <Sparkles size={14} className="text-white" />
        <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold tracking-widest uppercase">
          Quick Quote
        </span>
      </motion.button>

      {/* Floating Action Buttons Container on RIGHT SIDE */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-center gap-3 select-none">
        {/* Scroll to Top Button (Above Call) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-[#202321] text-white shadow-xl hover:bg-[var(--accent)] flex items-center justify-center transition-all duration-300 cursor-pointer border border-white/10"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Call Button (Original Dialer Blue Color #007AFF) */}
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
          href="tel:+919214567181"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#007AFF] hover:bg-[#0066d6] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Call GET STONE (+91 92145 67181)"
          title="Direct Call: +91 92145 67181"
        >
          <Phone size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute right-full mr-3 px-2.5 py-1 bg-black/80 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide rounded-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            Call: +91 92145 67181
          </span>
        </motion.a>

        {/* Floating WhatsApp Button (Original WhatsApp Brand Green #25D366) */}
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          href="https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20interested%20in%20natural%20stone%20supplies."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="WhatsApp GET STONE (+91 92145 67181)"
          title="Chat on WhatsApp (+91 92145 67181)"
        >
          <WhatsAppIcon size={30} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="absolute right-full mr-3 px-2.5 py-1 bg-black/80 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide rounded-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            WhatsApp Us
          </span>
        </motion.a>
      </div>
    </>
  );
};
