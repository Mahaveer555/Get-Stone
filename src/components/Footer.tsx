import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.15 });

  const colVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <footer ref={footerRef} className="bg-[#171717] text-white overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-12"
        >
          {/* Brand Info */}
          <motion.div variants={colVariants}>
            <Link to="/" className="inline-flex items-center group">
              <span className="font-cinzel text-3xl tracking-[0.14em] text-white font-extrabold group-hover:text-[var(--accent)] transition-colors uppercase">
                GET STONE
              </span>
            </Link>

            <p className="mt-6 text-white/60 leading-7 text-sm">
              Premium supplier of Kota Stone, Golden Kota Stone, River Wash Stone and Kota Tiles with a commitment to quality and customer satisfaction.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={colVariants}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <div className="mt-3 h-[2px] w-12 bg-[var(--accent)]" />
            </div>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/"
                  className="group flex items-center gap-2 text-white/60 text-sm transition-all duration-300 hover:text-[var(--accent)]"
                >
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="group flex items-center gap-2 text-white/60 text-sm transition-all duration-300 hover:text-[var(--accent)]"
                >
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products/kota-stone"
                  className="group flex items-center gap-2 text-white/60 text-sm transition-all duration-300 hover:text-[var(--accent)]"
                >
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="group flex items-center gap-2 text-white/60 text-sm transition-all duration-300 hover:text-[var(--accent)]"
                >
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-white/60 text-sm transition-all duration-300 hover:text-[var(--accent)]"
                >
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={colVariants}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">Our Collections</h3>
              <div className="mt-3 h-[2px] w-12 bg-[var(--accent)]" />
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[var(--accent)] uppercase tracking-wider font-bold block mb-1.5">
                  1. Kota Stone
                </span>
                <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-white/60">
                  <Link to="/products/kota-stone" className="hover:text-white transition-colors">Kota Slabs</Link>
                  <span>•</span>
                  <Link to="/products/river-wash-stone" className="hover:text-white transition-colors">River Wash</Link>
                  <span>•</span>
                  <Link to="/products/kota-tiles" className="hover:text-white transition-colors">Tiles</Link>
                  <span>•</span>
                  <Link to="/products/red-mandana-stone" className="hover:text-white transition-colors">Mandana</Link>
                  <span>•</span>
                  <Link to="/products/kota-cobbles" className="hover:text-white transition-colors">Cobbles</Link>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[var(--accent)] uppercase tracking-wider font-bold block mb-1.5">
                  2. Marble Collection
                </span>
                <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-white/60">
                  <Link to="/products/popular-marble" className="hover:text-white transition-colors">Popular Marble</Link>
                  <span>•</span>
                  <Link to="/products/marble-by-colours" className="hover:text-white transition-colors">By Colours (10)</Link>
                  <span>•</span>
                  <Link to="/products/marble-by-spaces" className="hover:text-white transition-colors">By Spaces (6)</Link>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[var(--accent)] uppercase tracking-wider font-bold block mb-1.5">
                  3. Granite Collection
                </span>
                <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-white/60">
                  <Link to="/products/granite" className="hover:text-white transition-colors">Exotic Granite</Link>
                  <span>•</span>
                  <Link to="/products/granite-by-colour" className="hover:text-white transition-colors">By Colour (8)</Link>
                  <span>•</span>
                  <Link to="/products/granite-by-spaces" className="hover:text-white transition-colors">By Spaces (5)</Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={colVariants}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">Contact Info</h3>
              <div className="mt-3 h-[2px] w-12 bg-[var(--accent)]" />
            </div>

            <div className="mt-6 space-y-4 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#007AFF] shrink-0" />
                <a
                  href="tel:+919214567181"
                  className="hover:text-[#007AFF] transition-colors"
                >
                  +91 92145 67181
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--accent)] shrink-0" />
                <a
                  href="mailto:getstonekota@gmail.com"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  getstonekota@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--accent)] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  G 3210, Road Number 6, near Bhamashah Mandi Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India.
                </address>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/50"
        >
          <p>© 2026 GET STONE. All Rights Reserved. Kota, Rajasthan.</p>
          <p className="flex items-center gap-1.5">
            <span>Design &amp; Developed by</span>
            <a
              href="https://digiteeworld.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-white font-medium underline underline-offset-4 transition-colors"
            >
              Digitee World
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
