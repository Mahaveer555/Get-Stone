import React, { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageBanner } from '../components/PageBanner';
import { AlternatingCard, ScrollReveal } from '../components/ScrollReveal';
import { popularMarbles } from '../data/marbleGranite';
import type { StoneItem } from '../data/marbleGranite';

export const PopularMarble: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Marble' },
    { id: 'Italian Marble', label: 'Italian Marble' },
    { id: 'Popular Marble', label: 'Popular White' },
    { id: 'Imported Marble', label: 'Imported Marble' },
    { id: 'Exotic Marble', label: 'Exotic & Onyx' },
  ];

  const filteredMarbles = useMemo(() => {
    if (selectedCategory === 'all') return popularMarbles;
    if (selectedCategory === 'Exotic Marble') {
      return popularMarbles.filter(
        (m) => m.category === 'Exotic Marble' || m.category === 'Exotic Onyx' || m.category === 'Travertine'
      );
    }
    return popularMarbles.filter((m) => m.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <PageBanner
        title="Popular Marble Collection"
        description="Explore our premium collection of Flawless White, Italian Marble, Statuario, Onyx and Imported Marbles for luxury living and architectural spaces."
        currentPage="Popular Marble"
      />

      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-[var(--accent)] text-sm uppercase tracking-[3px]">
                GET STONE Selection
              </span>
              <span className="h-[2px] w-16 bg-[var(--accent)]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
              Popular Marble Slabs & Tiles
            </h2>

            <p className="mt-5 text-[var(--text-secondary)] leading-8">
              Sourced from the world's most prestigious quarries in Italy, Greece, and Rajasthan, our marble collection combines timeless metamorphic beauty with mirror-polished luxury.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all border ${
                  selectedCategory === tab.id
                    ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm'
                    : 'bg-white text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Marble Cards Grid with Alternating Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMarbles.map((item: StoneItem, idx: number) => (
              <AlternatingCard key={item.id} index={idx}>
                <div
                  className="group bg-white border border-[var(--border-light)] overflow-hidden shadow-xs hover:border-[var(--accent)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Photo Container */}
                    <div
                      onClick={() => setLightboxIndex(idx)}
                      className="relative h-[340px] w-full overflow-hidden bg-black cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/95 text-[10px] uppercase tracking-wider font-semibold text-[var(--primary)] backdrop-blur-sm">
                          <Sparkles size={12} className="text-[var(--accent)]" />
                          {item.category}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs uppercase tracking-wider underline underline-offset-4 font-medium">
                          Click to Zoom Slab
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-5 pt-0">
                    <a
                      href={`https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(
                        item.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs active:scale-97"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </AlternatingCard>
            ))}
          </div>

          {/* Sourcing Yard Consultation Banner with Zoom Entrance */}
          <ScrollReveal direction="zoom" className="mt-20">
            <div className="p-8 sm:p-10 bg-white border border-[var(--border-light)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                  Looking For Specific Vein Patterns or Gangsaw Slabs?
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1.5 max-w-2xl leading-relaxed">
                  GET STONE coordinates gangsaw book-matched slabs, cut-to-size floor tiles, and custom polishing upon consultation from our Kota sourcing hub.
                </p>
              </div>

              <a
                href="tel:+919214567181"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] hover:bg-[#0066d6] text-white text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors shadow-sm active:scale-97"
              >
                <Phone size={14} />
                <span>Call +91 92145 67181</span>
              </a>
            </div>
          </ScrollReveal>
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
                (prev) => (prev! - 1 + filteredMarbles.length) % filteredMarbles.length
              )
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[var(--accent)] p-2 z-50"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredMarbles[lightboxIndex].image}
              alt={filteredMarbles[lightboxIndex].name}
              className="max-h-[72vh] max-w-full object-contain border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="text-2xl font-semibold">{filteredMarbles[lightboxIndex].name}</h4>
              <p className="text-sm text-white/70 mt-1">{filteredMarbles[lightboxIndex].description}</p>
            </div>
          </div>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! + 1) % filteredMarbles.length)
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
