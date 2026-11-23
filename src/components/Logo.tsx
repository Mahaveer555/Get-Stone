import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isScrolled?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ isScrolled = false, className = '' }) => {
  return (
    <Link to="/" className={`group flex items-center gap-3 transition-opacity ${className}`}>
      {/* Geometric Stone Icon Concept */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 44 44" className="w-10 h-10 transition-transform duration-500 group-hover:rotate-45" fill="none">
          <polygon
            points="22,3 39,12 39,32 22,41 5,32 5,12"
            className={`transition-colors duration-300 ${
              isScrolled
                ? 'stroke-bronze fill-charcoal/5'
                : 'stroke-sandstone fill-charcoal/40'
            }`}
            strokeWidth="2"
          />
          <polygon
            points="22,9 33,16 33,28 22,35 11,28 11,16"
            className={`transition-colors duration-300 ${
              isScrolled ? 'stroke-charcoal/40' : 'stroke-white/30'
            }`}
            strokeWidth="1.2"
          />
          <circle
            cx="22"
            cy="22"
            r="3"
            className={`transition-colors duration-300 ${
              isScrolled ? 'fill-bronze' : 'fill-sandstone'
            }`}
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-display text-2xl font-bold tracking-[0.2em] leading-none transition-colors duration-300 ${
            isScrolled ? 'text-charcoal' : 'text-white'
          }`}
        >
          GET STONE
        </span>
        <span
          className={`text-[9px] uppercase tracking-[0.28em] font-medium transition-colors duration-300 mt-1 ${
            isScrolled ? 'text-bronze' : 'text-sandstone'
          }`}
        >
          Kota • Rajasthan
        </span>
      </div>
    </Link>
  );
};
