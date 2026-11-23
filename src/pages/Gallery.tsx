import React, { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { AlternatingCard } from '../components/ScrollReveal';
import { popularMarbles, popularGranites } from '../data/marbleGranite';

interface GalleryPhoto {
  src: string;
  title: string;
  category: 'kota' | 'marble' | 'granite';
}

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allPhotos: GalleryPhoto[] = useMemo(() => {
    const kotaPhotos: GalleryPhoto[] = Array.from({ length: 12 }, (_, i) => ({
      src: `/gallery/${i + 1}.jpg`,
      title: `Kota Stone Project Showcase 0${i + 1}`,
      category: 'kota',
    }));

    const marblePhotos: GalleryPhoto[] = popularMarbles.map((m) => ({
      src: m.image,
      title: m.name,
      category: 'marble',
    }));

    const granitePhotos: GalleryPhoto[] = popularGranites.map((g) => ({
      src: g.image,
      title: g.name,
      category: 'granite',
    }));

    return [...kotaPhotos, ...marblePhotos, ...granitePhotos];
  }, []);

  const filterTabs = [
    { id: 'all', label: `All Photos (${allPhotos.length})` },
    { id: 'kota', label: 'Kota Stone' },
    { id: 'marble', label: `Popular Marble (${popularMarbles.length})` },
    { id: 'granite', label: `Exotic Granite (${popularGranites.length})` },
  ];

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') return allPhotos;
    return allPhotos.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, allPhotos]);

  return (
    <div>
      <PageBanner
        title="Gallery"
        description="Explore our collection of stone products, marble slabs, granites, and project showcases."
        currentPage="Gallery"
      />

      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-[var(--accent)] text-sm uppercase tracking-[3px]">
                Our Gallery
              </span>
              <span className="h-[2px] w-16 bg-[var(--accent)]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
              Explore Our Stone & Marble Collection
            </h2>

            <p className="mt-6 text-[var(--text-secondary)] leading-8 max-w-2xl mx-auto">
              Browse through authentic Kota Stone slabs, Popular Marbles (Statuario, Flawless White, Onyx), and Exotic Granites.
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((item, idx) => (
              <AlternatingCard
                key={idx}
                index={idx}
                onClick={() => setLightboxIndex(idx)}
                className="cursor-pointer overflow-hidden group border border-[var(--border-light)] relative shadow-xs bg-white"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition duration-500 flex flex-col justify-end p-6">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold text-lg">
                    {item.title}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-[var(--accent-light)] uppercase tracking-wider mt-1">
                    Click to Enlarge
                  </span>
                </div>
              </AlternatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
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
                (prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length
              )
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[var(--accent)] p-2 z-50"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-h-[72vh] max-w-full object-contain border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="text-2xl font-semibold">{filteredPhotos[lightboxIndex].title}</h4>
            </div>
          </div>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length)
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
