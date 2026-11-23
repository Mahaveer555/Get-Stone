import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowDown } from 'lucide-react';

interface Slide {
  image: string;
  stoneType: string;
  tagline: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    stoneType: "Rajasthan Sandstone Facades",
    tagline: "Warm Terracotta & Desert Sand Tones",
  },
  {
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85",
    stoneType: "Authentic Kota Stone",
    tagline: "Cool Underfoot, Unrivaled Durability",
  },
  {
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=2000&q=85",
    stoneType: "Volcanic Basalt Monoliths",
    tagline: "Deep Charcoal Contrast for Modern Architecture",
  },
  {
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=85",
    stoneType: "Rugged Bijolia Stone",
    tagline: "Authentic Natural Cleft Paving & Masonry",
  },
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const scrollToContent = () => {
    const el = document.getElementById('about-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden bg-charcoal-dark select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase"
    >
      {/* Background Slides with Ken-Burns and Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].stoneType}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Multi-layered Dark Vignette Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal-dark via-transparent to-black/60" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          {/* Small Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 mb-6 border border-sandstone/30 bg-black/40 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-sandstone">
              Premium Natural Stone | Kota, Rajasthan
            </span>
          </motion.div>

          {/* Main Architectural Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.08] text-balance"
          >
            Timeless Stone.
            <br />
            <span className="italic font-light text-sandstone">Endless Possibilities.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-ivory/85 font-light leading-relaxed max-w-2xl text-balance"
          >
            Discover the natural beauty of Sandstone, Bijolia Stone, Kota Stone, and Basalt for architectural spaces that leave a lasting impression.
          </motion.p>

          {/* Dynamic Stone Material Caption */}
          <motion.div
            key={slides[current].stoneType}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-sandstone/80 tracking-widest uppercase font-mono"
          >
            <span className="w-6 h-[1px] bg-bronze" />
            <span>Featuring: {slides[current].stoneType}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-sandstone text-charcoal-dark font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-sandstone/10"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-medium text-xs sm:text-sm uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-sandstone hover:bg-white/10"
            >
              <span>Get a Quote</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls (Bottom Right) */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-20 flex items-center gap-4">
        {/* Progress Bar & Indicators */}
        <div className="hidden sm:flex items-center gap-2 mr-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 transition-all duration-300 ${
                current === idx ? 'w-8 bg-sandstone' : 'w-3 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/20 bg-black/40 text-white hover:bg-sandstone hover:text-charcoal hover:border-sandstone transition-colors backdrop-blur-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/20 bg-black/40 text-white hover:bg-sandstone hover:text-charcoal hover:border-sandstone transition-colors backdrop-blur-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group opacity-75 hover:opacity-100 transition-opacity"
        role="button"
        tabIndex={0}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-sandstone font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-sandstone" />
        </motion.div>
      </div>
    </section>
  );
};
