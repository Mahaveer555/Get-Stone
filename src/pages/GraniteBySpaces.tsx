import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, X, ChevronLeft, ChevronRight, Sparkles, Building2, Flame, Car, Table } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageBanner } from '../components/PageBanner';
import { ScrollReveal } from '../components/ScrollReveal';
import { graniteBySpaces } from '../data/marbleGranite';
import type { SpaceCategory } from '../data/marbleGranite';

export const GraniteBySpaces: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getSpaceIcon = (slug: string) => {
    switch (slug) {
      case 'front-wall-cladding':
        return <Building2 size={18} className="text-[var(--accent)]" />;
      case 'kitchen-top':
        return <Flame size={18} className="text-[var(--accent)]" />;
      case 'parking':
        return <Car size={18} className="text-[var(--accent)]" />;
      case 'table-top':
        return <Table size={18} className="text-[var(--accent)]" />;
      default:
        return <Sparkles size={18} className="text-[var(--accent)]" />;
    }
  };

  return (
    <div>
      <PageBanner
        title="Granite by Spaces"
        description="Engineered by nature for heavy-duty performance — Front Wall Cladding, Wall Highlighters, Kitchen Countertops, Parking Driveways, and Executive Table Tops."
        currentPage="Granite by Spaces"
      />

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-[var(--accent)] text-sm uppercase tracking-[3px] flex items-center gap-2">
                <Sparkles size={16} />
                Application-Specific Granite Solutions
              </span>
              <span className="h-[2px] w-16 bg-[var(--accent)]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
              Heavy-Duty Granite Tailored for Every Space
            </h2>

            <p className="mt-5 text-[var(--text-secondary)] leading-8">
              Different architectural spaces demand specific granite thicknesses, surface finishes, and densities — from flame-textured anti-skid driveways to mirror-polished, heat-impervious culinary island tops. At GET STONE Kota, we calibrate slabs specifically for each application.
            </p>
          </div>

          {/* 5 Large Granite Spaces Cards with Alternating Direction Reveals */}
          <div className="space-y-16">
            {graniteBySpaces.map((space: SpaceCategory, idx: number) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={space.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-white border border-[var(--border-light)] p-6 sm:p-10 shadow-xs hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300"
                >
                  {/* Photo Column - Alternates Left/Right entrance */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <ScrollReveal direction={isEven ? 'right' : 'left'}>
                      <div
                        onClick={() => setLightboxIndex(idx)}
                        className="cursor-pointer overflow-hidden relative group"
                      >
                        <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden bg-black">
                          <img
                            src={space.image}
                            alt={space.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 text-[11px] uppercase tracking-wider font-semibold text-[var(--primary)] backdrop-blur-sm">
                              {getSpaceIcon(space.slug)}
                              Application 0{idx + 1}
                            </span>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs uppercase tracking-wider underline underline-offset-4 font-medium">
                              Click to View Space in Fullscreen
                            </span>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Content Column - Alternates Right/Left entrance */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ScrollReveal direction={isEven ? 'left' : 'right'} delay={0.15}>
                      <div className="space-y-6">
                        <div>
                          <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
                            {space.subtitle}
                          </span>
                          <h3 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)]">
                            {space.title}
                          </h3>
                        </div>

                        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                          {space.description}
                        </p>

                        {/* Recommended Stones */}
                        <div className="p-5 bg-[var(--bg-primary)] border border-[var(--border-light)]">
                          <span className="text-xs uppercase tracking-wider font-bold text-[var(--text-primary)] block mb-3">
                            Recommended Granite Varieties:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {space.recommendedStones.map((stone, sIdx) => (
                              <div key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                                <Check size={14} className="text-[var(--accent)] shrink-0" />
                                <span>{stone}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                          <a
                            href={`https://wa.me/919214567181?text=Hello%20GET%20STONE%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                              space.title
                            )}%20for%20my%20project.%20Please%20share%20catalogue%20and%20rates.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm active:scale-97"
                          >
                            <WhatsAppIcon size={16} />
                            Inquire on WhatsApp
                          </a>

                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] hover:bg-[var(--accent)] text-white text-xs font-semibold tracking-wider uppercase transition-colors active:scale-97"
                          >
                            <span>Request Custom Sizing</span>
                            <ArrowUpRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Propositions with Zoom Entrance */}
          <ScrollReveal direction="zoom" className="mt-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white border border-[var(--border-light)] p-8 sm:p-12 shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)]">
                <Building2 size={20} />
              </div>
              <h4 className="text-xl font-semibold text-[var(--text-primary)]">Custom Calibrated Thickness</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We supply 18mm, 20mm, 25mm, and 30mm heavy-duty slabs calibrated for structural loads, dry cladding clamps, or countertop drop-in sinks.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)]">
                <Flame size={20} />
              </div>
              <h4 className="text-xl font-semibold text-[var(--text-primary)]">Edge Profiling & CNC Cutting</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Full bullnose, half bullnose, chamfer, ogee, and bevel edge profiling executed with high-precision water-jet cutting machines at our factory.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)]">
                <Car size={20} />
              </div>
              <h4 className="text-xl font-semibold text-[var(--text-primary)]">Pan-India Direct Logistics</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Export-quality wooden crate packing with foam cushioning ensures zero chipping or edge breakage during long-distance transit.
              </p>
            </div>
            </div>
          </ScrollReveal>

          {/* Bottom CTA Banner */}
          <div className="mt-20 bg-[var(--primary)] text-white p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-5 relative z-10">
              <span className="text-[var(--accent)] text-xs uppercase tracking-[3px] font-semibold block">
                Direct Project Quotations
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold">
                Planning Cladding, Kitchen, or Parking Surfaces?
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Send your site dimensions, architectural bill of quantities (BOQ), or floor plan to GET STONE Kota for wholesale factory estimates.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="https://wa.me/919214567181?text=Hello%20GET%20STONE%2C%20I%20need%20a%20project%20quotation%20for%20Granite%20by%20Spaces."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp Project Specialist
                </a>

                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white text-[var(--primary)] hover:bg-[var(--accent)] hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Request Official Quote
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
                  prev !== null ? (prev === 0 ? graniteBySpaces.length - 1 : prev - 1) : null
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Previous Space"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev === graniteBySpaces.length - 1 ? 0 : prev + 1) : null
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Next Space"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
              <div className="md:col-span-7 bg-black flex items-center justify-center min-h-[350px] md:min-h-[500px]">
                <img
                  src={graniteBySpaces[lightboxIndex].image}
                  alt={graniteBySpaces[lightboxIndex].title}
                  className="max-h-[550px] w-auto max-w-full object-contain"
                />
              </div>

              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-2">
                    {graniteBySpaces[lightboxIndex].subtitle}
                  </span>

                  <h3 className="text-3xl font-semibold text-[var(--text-primary)]">
                    {graniteBySpaces[lightboxIndex].title}
                  </h3>

                  <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {graniteBySpaces[lightboxIndex].description}
                  </p>

                  <div className="mt-6 space-y-3">
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--text-primary)] block">
                      Recommended Stones:
                    </span>
                    <div className="space-y-2">
                      {graniteBySpaces[lightboxIndex].recommendedStones.map((st, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <Check size={14} className="text-[var(--accent)] shrink-0" />
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-light)]">
                  <a
                    href={`https://wa.me/919214567181?text=Hello%20GET%20STONE%2C%20I%20am%20viewing%20${encodeURIComponent(
                      graniteBySpaces[lightboxIndex].title
                    )}%20and%20would%20like%20photos%20and%20quotation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
                  >
                    <WhatsAppIcon size={16} />
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
