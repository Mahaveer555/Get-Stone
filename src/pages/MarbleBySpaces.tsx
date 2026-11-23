import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageBanner } from '../components/PageBanner';
import { ScrollReveal } from '../components/ScrollReveal';
import { marbleBySpaces } from '../data/marbleGranite';
import type { SpaceCategory } from '../data/marbleGranite';

export const MarbleBySpaces: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <PageBanner
        title="Marble by Spaces"
        description="Explore curated natural stone and marble solutions tailored for Living Rooms, Kitchens, Washrooms, Bedrooms, Flooring and Architectural Walls."
        currentPage="Marble by Spaces"
      />

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-[var(--accent)] text-sm uppercase tracking-[3px]">
                Architectural Curation
              </span>
              <span className="h-[2px] w-16 bg-[var(--accent)]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
              Curated Stone for Every Living Space
            </h2>

            <p className="mt-5 text-[var(--text-secondary)] leading-8">
              Every area in a residence or commercial project possesses unique functional demands — from moisture resilience in washrooms to heat tolerance in kitchens and grand scale in living foyers.
            </p>
          </div>

          {/* 6 Large Spaces Cards with Alternating Direction Reveals */}
          <div className="space-y-16">
            {marbleBySpaces.map((space: SpaceCategory, idx: number) => {
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
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/95 text-[11px] uppercase tracking-wider font-semibold text-[var(--primary)] backdrop-blur-sm">
                              <Sparkles size={12} className="text-[var(--accent)]" />
                              Space 0{idx + 1}
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
                            Recommended Marble & Granite:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {space.recommendedStones.map((stone, sIdx) => (
                              <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]">
                                <Check size={14} className="text-[var(--accent)] shrink-0" />
                                <span>{stone}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-2 flex flex-wrap items-center gap-4">
                          <a
                            href={`https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                              space.title
                            )}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-sm active:scale-97"
                          >
                            <WhatsAppIcon size={16} />
                            <span>Enquire For This Space</span>
                          </a>

                          <Link
                            to="/products/popular-marble"
                            className="inline-flex items-center gap-1.5 px-6 py-3.5 border border-[var(--border-light)] text-xs uppercase tracking-wider font-medium text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all bg-white active:scale-97"
                          >
                            <span>View Marble Catalogue</span>
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
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-[var(--accent)] z-50 p-2"
          >
            <X size={32} />
          </button>

          <button
            onClick={() =>
              setLightboxIndex(
                (prev) => (prev! - 1 + marbleBySpaces.length) % marbleBySpaces.length
              )
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[var(--accent)] p-2 z-50"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={marbleBySpaces[lightboxIndex].image}
              alt={marbleBySpaces[lightboxIndex].title}
              className="max-h-[72vh] max-w-full object-contain border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="text-2xl font-semibold">{marbleBySpaces[lightboxIndex].title}</h4>
              <p className="text-sm text-white/70 mt-1">{marbleBySpaces[lightboxIndex].subtitle}</p>
            </div>
          </div>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! + 1) % marbleBySpaces.length)
            }
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[var(--accent)] p-2 z-50"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
};
