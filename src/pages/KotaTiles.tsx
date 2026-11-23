import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, PackageCheck } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { AlternatingCard } from '../components/ScrollReveal';

export const KotaTiles: React.FC = () => {
  const variants = [
    {
      title: 'Premium Kota Tiles',
      image: '/products/premium-kota-tiles.jpg',
      description: 'Precision cut tiles with uniform thickness and calibrated edges for residential and commercial flooring.',
    },
    {
      title: 'Golden Kota Tiles',
      image: '/products/golden-kota-tiles.jpg',
      description: 'Warm golden hues that bring earthy elegance to traditional and modern interiors alike.',
    },
    {
      title: 'Export Quality Box Packaging',
      image: '/products/kota-tiles-box.jpg',
      description: 'Carefully strapped and packed in corrugated boxes to ensure zero damage during long-distance road transport.',
    },
  ];

  return (
    <div>
      <PageBanner
        title="Kota Tiles"
        description="Premium quality calibrated Kota Tiles and Golden Kota Tiles for flooring and interior applications."
        currentPage="Kota Tiles"
      />

      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-[var(--accent)] text-sm uppercase tracking-[3px]">
              Kota Tiles Collection
            </span>
            <span className="h-[2px] w-16 bg-[var(--accent)]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Precision Calibrated Kota Tiles
          </h2>

          <p className="mt-6 text-[var(--text-secondary)] leading-8">
            Our Kota Stone tiles are calibrated using modern bridge saws to ensure exact geometric accuracy, uniform thickness, and clean corner finishes.
          </p>
        </div>
      </section>

      {/* 3 Cards Grid */}
      <section className="pb-24 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {variants.map((v, idx) => (
              <AlternatingCard
                key={idx}
                index={idx}
                className="bg-white border border-[var(--border-light)] overflow-hidden shadow-xs hover:border-[var(--accent)] transition-all"
              >
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-[380px] object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-[var(--text-secondary)] leading-7 text-sm">
                    {v.description}
                  </p>
                </div>
              </AlternatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Dispatch Section */}
      <section className="py-20 bg-[var(--bg-secondary)] border-t border-[var(--border-light)]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <PackageCheck size={48} className="text-[var(--accent)] mx-auto mb-4" />
          <h3 className="text-3xl font-semibold text-[var(--text-primary)]">
            Safe Pallet & Box Packaging
          </h3>
          <p className="mt-4 text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Every shipment of calibrated tiles is strapped and packed with corner protectors to guarantee safe transit to any site in India.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white text-sm uppercase tracking-wider font-medium hover:bg-[var(--accent-light)] transition-all"
            >
              <span>Get Kota Tiles Pricing</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
