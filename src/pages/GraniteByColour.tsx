import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, X, ChevronLeft, ChevronRight, Sparkles, Shield, Flame, Droplets } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageBanner } from '../components/PageBanner';
import { AlternatingCard } from '../components/ScrollReveal';
import { graniteByColours } from '../data/marbleGranite';
import type { GraniteColourCategory } from '../data/marbleGranite';

export const GraniteByColour: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredCategories = selectedColor === 'all'
    ? graniteByColours
    : graniteByColours.filter((c) => c.slug === selectedColor || c.id === selectedColor);

  const activeCategory = graniteByColours.find((c) => c.slug === selectedColor || c.id === selectedColor);

  return (
    <div>
      <PageBanner
        title="Granite by Colour"
        description="Explore nature's strongest stone across 8 majestic colour spectrums — Black, Blue, Brown, Green, Grey, Red, White, and Golden Yellow."
        currentPage="Granite by Colour"
      />

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-[var(--accent)] text-sm uppercase tracking-[3px] flex items-center gap-2">
                <Shield size={16} />
                Eternal Strength & Palette
              </span>
              <span className="h-[2px] w-16 bg-[var(--accent)]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
              Enduring Granite in Every Hue
            </h2>

            <p className="mt-5 text-[var(--text-secondary)] leading-8">
              Granite is formed deep beneath the earth under immense volcanic pressure, creating an ultra-dense crystalline matrix that resists heat, scratches, and stains. At GET STONE Kota, we supply gangsaw-cut, calibrated granite slabs in 8 rich colour profiles.
            </p>
          </div>

          {/* Interactive Color Filter Bar */}
          <div className="mb-14">
            <div className="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 scrollbar-none">
              <button
                onClick={() => setSelectedColor('all')}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap rounded-xs flex items-center gap-2 ${
                  selectedColor === 'all'
                    ? 'bg-[var(--accent)] text-white shadow-sm'
                    : 'bg-white text-[var(--text-primary)] border border-[var(--border-light)] hover:border-[var(--accent)]'
                }`}
              >
                All Colours ({graniteByColours.length})
              </button>

              {graniteByColours.map((col) => {
                const isActive = selectedColor === col.slug || selectedColor === col.id;
                return (
                  <button
                    key={col.id}
                    onClick={() => setSelectedColor(col.slug)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap rounded-xs flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-[var(--accent)] text-white shadow-sm'
                        : 'bg-white text-[var(--text-primary)] border border-[var(--border-light)] hover:border-[var(--accent)]'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-xs inline-block"
                      style={{ backgroundColor: col.colorHex }}
                    />
                    {col.name.replace(' Granite', '')}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Header if filtered */}
          {activeCategory && selectedColor !== 'all' && (
            <div className="mb-12 p-6 bg-white border-l-4 border-[var(--accent)] border-y border-r border-[var(--border-light)] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="w-4 h-4 rounded-full border border-black/20 inline-block"
                    style={{ backgroundColor: activeCategory.colorHex }}
                  />
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    {activeCategory.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{activeCategory.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedColor('all')}
                className="text-xs uppercase tracking-wider font-semibold text-[var(--accent)] hover:underline self-start md:self-auto"
              >
                Show All 8 Colours &rarr;
              </button>
            </div>
          )}

          {/* Main 8 Granite Colour Cards Grid with Alternating Direction Reveals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCategories.map((cat: GraniteColourCategory, idx: number) => {
              const fullIdx = graniteByColours.findIndex((c) => c.id === cat.id);

              return (
                <AlternatingCard key={cat.id} index={idx}>
                  <div
                    className="bg-white border border-[var(--border-light)] hover:border-[var(--accent)] transition-all duration-300 flex flex-col group hover:shadow-2xl h-full"
                  >
                    {/* Photo Container */}
                    <div
                      onClick={() => setLightboxIndex(fullIdx)}
                      className="relative h-80 w-full overflow-hidden bg-black cursor-pointer"
                    >
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Color Swatch Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-xs border border-white/20">
                          <span
                            className="w-3 h-3 rounded-full border border-white/40"
                            style={{ backgroundColor: cat.colorHex }}
                          />
                          {cat.name}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="text-[11px] font-mono text-white/80 bg-black/50 px-2 py-1 backdrop-blur-xs">
                          0{fullIdx + 1}
                        </span>
                      </div>

                      {/* Overlay Text & Quick View */}
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs uppercase tracking-wider underline underline-offset-4 font-medium">
                          Click to Zoom Slabs
                        </span>
                      </div>
                    </div>

                    {/* Body Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                          {cat.tagline}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {cat.name}
                        </h3>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 mt-4 border-t border-[var(--border-light)] flex items-center gap-2">
                        <a
                          href={`https://wa.me/919214567181?text=Hello%20GET%20STONE%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                            cat.name
                          )}%20slabs%20for%20my%20project.%20Please%20share%20stock%20photos%20and%20rates.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs active:scale-97"
                        >
                          <WhatsAppIcon size={16} />
                          WhatsApp Quote
                        </a>

                        <Link
                          to="/contact"
                          className="px-3.5 py-2.5 border border-[var(--border-light)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] text-xs font-semibold transition-colors flex items-center justify-center active:scale-97"
                          title="Contact GET STONE"
                        >
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AlternatingCard>
              );
            })}
          </div>

          {/* Technical Performance Highlights */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-[var(--border-light)] p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)]">
                <Flame size={20} />
              </div>
              <h4 className="text-lg font-semibold text-[var(--text-primary)]">Heat & Burn Resistant</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Withstands direct contact with scorching hot pans, cooktops, and boiling pots without cracking or discolouration.
              </p>
            </div>

            <div className="bg-white border border-[var(--border-light)] p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)]">
                <Shield size={20} />
              </div>
              <h4 className="text-lg font-semibold text-[var(--text-primary)]">Mohs Hardness 6 – 7</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                High quartz and feldspar content resists cutlery scratching, heavy equipment impact, and decades of foot traffic.
              </p>
            </div>

            <div className="bg-white border border-[var(--border-light)] p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)]">
                <Droplets size={20} />
              </div>
              <h4 className="text-lg font-semibold text-[var(--text-primary)]">Zero Moisture Stains</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ultra-low porosity under 0.2% repels oils, spices, citrus acids, and water seepage when factory-sealed.
              </p>
            </div>

            <div className="bg-white border border-[var(--border-light)] p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)]">
                <Sparkles size={20} />
              </div>
              <h4 className="text-lg font-semibold text-[var(--text-primary)]">Permanent Polish</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Our Italian multi-head line polishing machines ensure diamond-gloss mirror reflection that lasts for generations.
              </p>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-20 bg-[var(--primary)] text-white p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-5 relative z-10">
              <span className="text-[var(--accent)] text-xs uppercase tracking-[3px] font-semibold block">
                Wholesale Quarry Supply
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold">
                Direct Wholesale Granite Supply from Kota, Rajasthan
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Bulk container orders, builder project supplies, calibrated slabs, and export packaging with pan-India insured logistics.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="https://wa.me/919214567181?text=Hello%20GET%20STONE%2C%20I%20need%20granite%20slabs%20for%20a%20project.%20Please%20share%20current%20rates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp Granite Specialist
                </a>

                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white text-[var(--primary)] hover:bg-[var(--accent)] hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Request Wholesale Quotation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[var(--bg-primary)] border border-[var(--border-light)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev === 0 ? graniteByColours.length - 1 : prev - 1) : null
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Previous Colour"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev === graniteByColours.length - 1 ? 0 : prev + 1) : null
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Next Colour"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
              <div className="md:col-span-7 bg-black flex items-center justify-center min-h-[350px] md:min-h-[500px]">
                <img
                  src={graniteByColours[lightboxIndex].image}
                  alt={graniteByColours[lightboxIndex].name}
                  className="max-h-[550px] w-auto max-w-full object-contain"
                />
              </div>

              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/30 inline-block"
                      style={{ backgroundColor: graniteByColours[lightboxIndex].colorHex }}
                    />
                    <span className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">
                      {graniteByColours[lightboxIndex].tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold text-[var(--text-primary)]">
                    {graniteByColours[lightboxIndex].name}
                  </h3>

                  <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {graniteByColours[lightboxIndex].description}
                  </p>

                  <div className="mt-6 space-y-3">
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--text-primary)] block">
                      Prominent Granite Varieties:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {graniteByColours[lightboxIndex].varieties.map((v, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs bg-white border border-[var(--border-light)] text-[var(--text-primary)] font-medium"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--text-primary)] block">
                      Available Finishes:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-[var(--text-secondary)]">
                      {graniteByColours[lightboxIndex].finishes.map((f, i) => (
                        <span key={i} className="inline-flex items-center gap-1">
                          <Check size={12} className="text-[var(--accent)]" /> {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-light)]">
                  <a
                    href={`https://wa.me/919214567181?text=Hello%20GET%20STONE%2C%20I%20am%20viewing%20${encodeURIComponent(
                      graniteByColours[lightboxIndex].name
                    )}%20on%20your%20website%20and%20would%20like%20rates%20and%20slab%20photos.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <WhatsAppIcon size={18} />
                    Inquire on WhatsApp (+91 92145 67181)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
