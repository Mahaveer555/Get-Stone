import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  description: string;
  currentPage: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  description,
  currentPage,
}) => {
  return (
    <section className="relative pt-44 pb-28 overflow-hidden bg-[var(--primary)] text-white">
      {/* Background Image with Cinematic Subtle Scale Entrance */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/banner-BwjAbYfl.png"
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
      </motion.div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4 uppercase tracking-wider"
        >
          <Link to="/" className="hover:text-[var(--accent-light)] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-[var(--accent)]" />
          <span className="text-[var(--accent-light)] font-medium">{currentPage}</span>
        </motion.div>

        {/* Title Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white"
        >
          {title}
        </motion.h1>

        {/* Expanding Accent Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="h-[2px] bg-[var(--accent)] mx-auto my-5"
        />

        {/* Description Fade */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed font-light"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};
