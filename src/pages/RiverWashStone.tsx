import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { AlternatingCard } from '../components/ScrollReveal';

export const RiverWashStone: React.FC = () => {
  const variants = [
    {
      title: 'River Wash Kota Stone',
      image: '/products/river-wash.jpg',
      description: 'Greenish-blue river washed finish providing organic non-slip texture for swimming pool decks, verandahs, and open gardens.',
    },
    {
      title: 'Brown River Wash Kota Stone',
      image: '/products/brown-river-wash.jpg',
      description: 'Earthy brown tones treated with high-pressure river washing to reveal fine crystalline relief without sharp edges.',
    },
  ];

  const benefits = [
    'Naturally slip-resistant underfoot even when wet',
    'Tactile leather-like texture that feels soft to touch',
    'Ideal for pool surroundings, outdoor verandahs, and pathways',
    'Maintains color vibrancy without synthetic chemical coatings',
  ];

  return (
    <div>
      <PageBanner
        title="River Wash Stone"
        description="Durable and naturally textured River Wash Kota Stone suitable for outdoor and landscaping applications."
        currentPage="River Wash Stone"
      />

      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-[var(--accent)] text-sm uppercase tracking-[3px]">
              River Wash Collection
            </span>
            <span className="h-[2px] w-16 bg-[var(--accent)]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Natural Finish For Outdoor Spaces
          </h2>

          <p className="mt-6 text-[var(--text-secondary)] leading-8">
            Our River Wash Kota Stone collection offers a naturally textured surface that enhances outdoor flooring, landscaping, and pathway projects while maintaining durability and long-lasting performance.
          </p>
        </div>
      </section>

      {/* 2 Big Cards */}
      <section className="pb-24 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10">
            {variants.map((v, idx) => (
              <AlternatingCard
                key={idx}
                index={idx}
                className="bg-white border border-[var(--border-light)] overflow-hidden shadow-xs hover:border-[var(--accent)] transition-all"
              >
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-semibold text-[var(--text-primary)]">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-[var(--text-secondary)] leading-8">
                    {v.description}
                  </p>
                </div>
              </AlternatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[var(--bg-secondary)] border-t border-[var(--border-light)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h3 className="text-3xl font-semibold text-[var(--text-primary)] mb-8">
            Why Choose River Wash Texture?
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {benefits.map((b, idx) => (
              <div key={idx} className="p-4 bg-white border border-[var(--border-light)] flex items-center gap-3">
                <Check size={18} className="text-[var(--accent)] shrink-0" />
                <span className="text-sm text-[var(--text-primary)]">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white text-sm uppercase tracking-wider font-medium hover:bg-[var(--accent-light)] transition-all"
            >
              <span>Enquire for River Wash Stone</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
