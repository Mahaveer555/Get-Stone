import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { businessInfo } from '../data/business';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const currentPath = location.pathname;
  const [prevPath, setPrevPath] = useState(currentPath);

  if (prevPath !== currentPath) {
    setPrevPath(currentPath);
    setMobileMenuOpen(false);
  }

  // Prevent background scroll when mobile menu is open
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Stones', path: '/products' },
    { name: 'Applications', path: '/applications' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Active state styling
  const headerBg = isScrolled
    ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-sandstone/25 py-3.5'
    : isHomePage
    ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
    : 'bg-charcoal text-white py-4 border-b border-white/10';

  const linkTextColor = isScrolled
    ? 'text-charcoal hover:text-bronze'
    : isHomePage
    ? 'text-white/90 hover:text-white'
    : 'text-ivory/90 hover:text-white';

  const activeLinkClass = isScrolled
    ? 'text-bronze font-semibold'
    : 'text-sandstone font-semibold';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo isScrolled={isScrolled && isHomePage ? true : !isHomePage && !isScrolled ? false : isScrolled} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative py-1 text-sm tracking-wider uppercase font-medium transition-colors duration-200 ${linkTextColor} ${
                      isActive ? activeLinkClass : ''
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-bronze transition-all duration-300 ease-out ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right side CTA */}
            <div className="hidden lg:flex items-center space-x-5">
              <a
                href={`tel:${businessInfo.phone}`}
                className={`flex items-center gap-2 text-xs uppercase tracking-widest font-semibold transition-colors duration-200 ${
                  isScrolled ? 'text-charcoal hover:text-bronze' : 'text-sandstone hover:text-white'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-bronze" />
                <span>{businessInfo.phoneDisplay}</span>
              </a>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none border ${
                  isScrolled
                    ? 'border-charcoal bg-charcoal text-ivory hover:bg-bronze hover:border-bronze hover:text-white'
                    : 'border-sandstone bg-sandstone/15 text-white backdrop-blur-sm hover:bg-sandstone hover:text-charcoal hover:border-sandstone'
                }`}
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-bronze ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-charcoal-dark text-ivory border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header in panel */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Logo isScrolled={false} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-sandstone hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium tracking-wider uppercase py-2 transition-colors border-b border-white/5 flex items-center justify-between ${
                      isActive ? 'text-sandstone' : 'text-ivory/80 hover:text-white'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={`tel:${businessInfo.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/15 text-sm uppercase tracking-widest text-sandstone"
            >
              <Phone className="w-4 h-4 text-bronze" />
              <span>Call: {businessInfo.phoneDisplay}</span>
            </a>

            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-bronze text-white text-sm uppercase tracking-widest font-semibold hover:bg-bronze-light transition-colors"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <p className="text-[11px] text-stonegray text-center pt-2">
              G 3210, Road No. 6, Indraprastha Ind. Area, Kota
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
