import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronDown, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { openQuoteDrawer } from '../utils/quoteDrawer';

export const Header: React.FC = () => {
  const [showTopbar, setShowTopbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<'kota' | 'marble' | 'granite' | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowTopbar(false);
      } else {
        setShowTopbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const currentPath = location.pathname;
  const [prevPath, setPrevPath] = useState(currentPath);

  if (prevPath !== currentPath) {
    setPrevPath(currentPath);
    setMobileMenuOpen(false);
    setOpenMobileSection(null);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const kotaStoneLinks = [
    { name: 'Kota Stone Slabs', path: '/products/kota-stone', desc: 'Natural & High Polish Blue Slabs' },
    { name: 'River Wash Stone', path: '/products/river-wash-stone', desc: 'Textured Non-Slip Outdoor Paving' },
    { name: 'Kota & Golden Tiles', path: '/products/kota-tiles', desc: 'Calibrated Commercial Flooring Tiles' },
    { name: 'Red Mandana Stone', path: '/products/red-mandana-stone', desc: 'Acid-Proof Traditional Red Stone' },
    { name: 'Kota Cobbles', path: '/products/kota-cobbles', desc: 'Hand-Cut 4×4 Heavy Duty Cobblestones' },
  ];

  const marbleLinks = [
    { name: 'Popular Marble', path: '/products/popular-marble', desc: 'Statuario, Flawless White & Italian' },
    { name: 'Marble by Colours', path: '/products/marble-by-colours', desc: '10 Signature Mineral Colour Hues' },
    { name: 'Marble by Spaces', path: '/products/marble-by-spaces', desc: 'Living Room, Kitchen & Bathroom Slabs' },
  ];

  const graniteLinks = [
    { name: 'Exotic Granite', path: '/products/granite', desc: 'Black, Blue, Steel Grey & Red Granite' },
    { name: 'Granite by Colour', path: '/products/granite-by-colour', desc: '8 Deep Geological Colour Spectrum' },
    { name: 'Granite by Spaces', path: '/products/granite-by-spaces', desc: 'Front Cladding, Counters & Parking' },
  ];

  const isKotaActive =
    currentPath.includes('kota') || currentPath.includes('river-wash') || currentPath.includes('mandana');
  const isMarbleActive = currentPath.includes('marble');
  const isGraniteActive = currentPath.includes('granite');

  return (
    <>
      <motion.header
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-40 bg-[rgba(248,247,244,0.92)] backdrop-blur-lg border-b border-[var(--border-light)] shadow-xs"
      >
      {/* Topbar */}
      <div
        className={`hidden lg:block overflow-hidden transition-all duration-500 bg-[var(--primary)] text-white ${
          showTopbar ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="h-11 flex items-center justify-between text-xs tracking-wider">
            <div className="flex items-center gap-6">
              <a
                href="tel:+919214567181"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#007AFF]" />
                <span>+91 92145 67181</span>
              </a>

              <a
                href="mailto:getstonekota@gmail.com"
                className="flex items-center gap-2 hover:text-[var(--accent-light)] transition-colors"
              >
                <Mail size={14} className="text-[var(--accent)]" />
                <span>getstonekota@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={14} className="text-[var(--accent)]" />
              <span>G 3210, Road No. 6, Indraprastha Ind. Area, Kota (Raj.)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="h-20 sm:h-22 flex items-center justify-between">
          {/* Brand Logo - Clean Solid Luxury GET STONE Wordmark */}
          <Link to="/" className="flex items-center group">
            <span className="font-cinzel text-2xl sm:text-[28px] font-extrabold tracking-[0.14em] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors uppercase">
              GET STONE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                currentPath === '/' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] hover:text-[var(--accent)]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                currentPath === '/about' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] hover:text-[var(--accent)]'
              }`}
            >
              About
            </Link>

            {/* 1. KOTA STONE DROPDOWN */}
            <div className="group relative">
              <Link
                to="/products/kota-stone"
                className={`flex items-center gap-1 py-7 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isKotaActive ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-primary)] hover:text-[var(--accent)]'
                }`}
              >
                <span>Kota Stone</span>
                <ChevronDown size={13} className="transition-transform duration-300 group-hover:rotate-180 text-[var(--accent)]" />
              </Link>

              <div className="invisible opacity-0 -translate-y-3 scale-[0.97] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out origin-top absolute left-0 top-full w-72 bg-white border border-[var(--border-light)] shadow-2xl py-3 z-50">
                <div className="px-5 py-2 border-b border-[var(--border-light)] mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold flex items-center gap-1">
                    <Sparkles size={11} /> Natural Kota Products
                  </span>
                </div>
                {kotaStoneLinks.map((prod) => (
                  <Link
                    key={prod.name}
                    to={prod.path}
                    className="block px-5 py-2.5 hover:bg-[var(--bg-primary)] transition-colors group/item"
                  >
                    <div className="text-xs font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--accent)] transition-colors flex items-center justify-between">
                      <span>{prod.name}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[var(--accent)]" />
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 line-clamp-1">
                      {prod.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* 2. MARBLE DROPDOWN */}
            <div className="group relative">
              <Link
                to="/products/popular-marble"
                className={`flex items-center gap-1 py-7 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isMarbleActive ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-primary)] hover:text-[var(--accent)]'
                }`}
              >
                <span>Marble</span>
                <ChevronDown size={13} className="transition-transform duration-300 group-hover:rotate-180 text-[var(--accent)]" />
              </Link>

              <div className="invisible opacity-0 -translate-y-3 scale-[0.97] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out origin-top absolute left-0 top-full w-72 bg-white border border-[var(--border-light)] shadow-2xl py-3 z-50">
                <div className="px-5 py-2 border-b border-[var(--border-light)] mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold flex items-center gap-1">
                    <Sparkles size={11} /> Luxury Marble Slabs
                  </span>
                </div>
                {marbleLinks.map((prod) => (
                  <Link
                    key={prod.name}
                    to={prod.path}
                    className="block px-5 py-2.5 hover:bg-[var(--bg-primary)] transition-colors group/item"
                  >
                    <div className="text-xs font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--accent)] transition-colors flex items-center justify-between">
                      <span>{prod.name}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[var(--accent)]" />
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 line-clamp-1">
                      {prod.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. GRANITE DROPDOWN */}
            <div className="group relative">
              <Link
                to="/products/granite"
                className={`flex items-center gap-1 py-7 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isGraniteActive ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-primary)] hover:text-[var(--accent)]'
                }`}
              >
                <span>Granite</span>
                <ChevronDown size={13} className="transition-transform duration-300 group-hover:rotate-180 text-[var(--accent)]" />
              </Link>

              <div className="invisible opacity-0 -translate-y-3 scale-[0.97] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out origin-top absolute left-0 top-full w-72 bg-white border border-[var(--border-light)] shadow-2xl py-3 z-50">
                <div className="px-5 py-2 border-b border-[var(--border-light)] mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold flex items-center gap-1">
                    <Sparkles size={11} /> High-Strength Granite
                  </span>
                </div>
                {graniteLinks.map((prod) => (
                  <Link
                    key={prod.name}
                    to={prod.path}
                    className="block px-5 py-2.5 hover:bg-[var(--bg-primary)] transition-colors group/item"
                  >
                    <div className="text-xs font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--accent)] transition-colors flex items-center justify-between">
                      <span>{prod.name}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[var(--accent)]" />
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 line-clamp-1">
                      {prod.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/gallery"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                currentPath === '/gallery' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] hover:text-[var(--accent)]'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                currentPath === '/contact' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] hover:text-[var(--accent)]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Button -> Triggers Slide-Over Quote */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => openQuoteDrawer('Kota Stone')}
              className="group inline-flex items-center gap-2 bg-[var(--accent)] px-5 py-3 text-white transition-all duration-300 hover:bg-[var(--accent-light)] text-xs uppercase tracking-wider font-semibold shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>Get A Quote</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-md text-[var(--primary)] hover:text-[var(--accent)] hover:bg-black/5 active:scale-95 focus:outline-none touch-manipulation cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </motion.header>

    {/* Mobile Off-Canvas Slide-Over Drawer OUTSIDE motion.header */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Slide-In Panel from Right */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="absolute inset-y-0 right-0 w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col z-10"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[var(--border-light)] flex items-center justify-between">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-cinzel text-2xl tracking-[0.14em] text-[var(--text-primary)] font-extrabold uppercase">
                  GET STONE
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-[var(--bg-primary)] hover:bg-[var(--accent)] hover:text-white flex items-center justify-center transition-colors text-[var(--text-primary)] cursor-pointer active:scale-95 touch-manipulation"
                aria-label="Close Mobile Menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Links Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] py-1"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] py-1"
              >
                About Us
              </Link>

              {/* 1. Mobile Kota Stone Accordion */}
              <div className="border-t border-[var(--border-light)] pt-3">
                <button
                  onClick={() => setOpenMobileSection(openMobileSection === 'kota' ? null : 'kota')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] py-1 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    Kota Stone
                  </span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      openMobileSection === 'kota' ? 'rotate-180 text-[var(--accent)]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openMobileSection === 'kota' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2 border-l-2 border-[var(--accent)] overflow-hidden"
                    >
                      {kotaStoneLinks.map((prod) => (
                        <Link
                          key={prod.name}
                          to={prod.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] py-1"
                        >
                          {prod.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. Mobile Marble Accordion */}
              <div className="border-t border-[var(--border-light)] pt-3">
                <button
                  onClick={() => setOpenMobileSection(openMobileSection === 'marble' ? null : 'marble')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] py-1 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    Marble
                  </span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      openMobileSection === 'marble' ? 'rotate-180 text-[var(--accent)]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openMobileSection === 'marble' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2 border-l-2 border-[var(--accent)] overflow-hidden"
                    >
                      {marbleLinks.map((prod) => (
                        <Link
                          key={prod.name}
                          to={prod.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] py-1"
                        >
                          {prod.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. Mobile Granite Accordion */}
              <div className="border-t border-[var(--border-light)] pt-3">
                <button
                  onClick={() => setOpenMobileSection(openMobileSection === 'granite' ? null : 'granite')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] py-1 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    Granite
                  </span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      openMobileSection === 'granite' ? 'rotate-180 text-[var(--accent)]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openMobileSection === 'granite' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2 border-l-2 border-[var(--accent)] overflow-hidden"
                    >
                      {graniteLinks.map((prod) => (
                        <Link
                          key={prod.name}
                          to={prod.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] py-1"
                        >
                          {prod.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t border-[var(--border-light)] pt-3">
                <Link
                  to="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] py-1"
                >
                  Gallery
                </Link>
              </div>

              <div>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] py-1"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Drawer Bottom Actions */}
              <div className="pt-6 border-t border-[var(--border-light)] space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteDrawer('Kota Stone');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white text-xs uppercase tracking-wider font-semibold shadow-xs cursor-pointer active:scale-97 transition-all"
                >
                  <span>Get Instant Quote</span>
                  <ArrowUpRight size={14} />
                </button>

                <a
                  href="tel:+919214567181"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#007AFF] hover:bg-[#0066d6] text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm active:scale-97"
                >
                  <Phone size={14} />
                  <span>Call: +91 92145 67181</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </>
);
};
