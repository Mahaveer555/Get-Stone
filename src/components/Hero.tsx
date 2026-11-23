import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { openQuoteDrawer } from '../utils/quoteDrawer';

interface HeroSlide {
  image: string;
  badge: string;
  title: string;
  description: string;
  stoneCategory: string;
}

const slides: HeroSlide[] = [
  {
    image: '/assets/hero1-DZFgxiEf.png',
    badge: 'Direct Mining & Quarry Supply',
    title: 'Natural Kota Stone Slabs & Tiles',
    description: 'Precision cut, calibrated thickness, and high gloss mirror polish direct from the mines of Kota, Rajasthan.',
    stoneCategory: 'Kota Stone',
  },
  {
    image: '/assets/hero2-Dctt8k1A.png',
    badge: 'Luxury Architectural Collection',
    title: 'Exquisite Italian & Calcite Marble',
    description: 'Statuario, Flawless White, Onyx and 10 signature mineral colours for iconic residential and hospitality spaces.',
    stoneCategory: 'Marble',
  },
  {
    image: '/assets/hero3-CiX3YH6N.png',
    badge: 'Extreme Weather Resilience',
    title: 'High-Strength Gangsaw Granite',
    description: 'Absolute Black, Blue Dunes, and heavy-duty granite for elevation cladding, culinary counters, and parking driveways.',
    stoneCategory: 'Granite',
  },
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[90vh] min-h-[640px] overflow-hidden bg-black select-none">
      {/* Slides Background with Ken Burns Zoom */}
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                isActive ? 'scale-108' : 'scale-100'
              }`}
            />
            {/* Cinematic Luxury Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />
          </div>
        );
      })}

      {/* Animated Content Layer */}
      <div className="relative z-20 h-full max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center">
        <div className="max-w-3xl pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.05,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -14,
                  transition: { duration: 0.35, ease: 'easeIn' },
                },
              }}
            >
              {/* 1. Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="h-[2px] w-12 bg-[var(--accent)]" />
                <span className="text-[var(--accent)] text-xs sm:text-sm uppercase tracking-[3px] font-semibold">
                  {slides[current].badge}
                </span>
              </motion.div>

              {/* 2. Main Heading (0.8s smooth entrance) */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight overflow-hidden"
              >
                {slides[current].title}
              </motion.h1>

              {/* 3. Description (0.7s upward slide) */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: 'easeOut' },
                  },
                }}
                className="mt-6 text-base sm:text-xl text-white/80 leading-relaxed max-w-2xl font-light"
              >
                {slides[current].description}
              </motion.p>

              {/* 4. CTA Buttons (Staggered 0.5s) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openQuoteDrawer(slides[current].stoneCategory)}
                  className="group inline-flex items-center gap-2 bg-[var(--accent)] px-8 py-4 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[var(--accent-light)] shadow-lg hover:shadow-2xl cursor-pointer"
                >
                  <span>Get Instant Quote</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.button>

                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/products/kota-stone"
                    className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-white font-medium text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[var(--primary)] hover:border-white shadow-md"
                  >
                    <span>Explore Collections</span>
                  </Link>
                </motion.div>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={`https://wa.me/919214567181?text=Hello%20GET%20STONE%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                    slides[current].stoneCategory
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white px-3.5 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all bg-white/10 hover:bg-[#25D366] rounded-sm backdrop-blur-xs"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Specialist</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next controls */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 hidden sm:block">
        <button
          onClick={prevSlide}
          className="w-13 h-13 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[var(--accent)] transition-all duration-300 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden sm:block">
        <button
          onClick={nextSlide}
          className="w-13 h-13 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[var(--accent)] transition-all duration-300 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
              idx === current ? 'w-10 bg-[var(--accent)]' : 'w-3 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
