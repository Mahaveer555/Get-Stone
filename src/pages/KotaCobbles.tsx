import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Trees, Car, Building2, Footprints, Landmark } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { AlternatingCard } from '../components/ScrollReveal';

export const KotaCobbles: React.FC = () => {
  const variants = [
    {
      title: 'Kota Cobbles 4×4',
      image: '/products/cobbles.jpg',
      description: 'Hand-cut Kota Cobbles available in 4×4 size with natural cleft texture and strong load-bearing durability.',
    },
    {
      title: 'Natural Kota Cobbles',
      image: '/products/cobbles2.jpg',
      description: 'Suitable for outdoor paving, garden pathways, rustic courtyards, and heavy landscape interventions.',
    },
  ];

  const applications = [
    { icon: Footprints, title: 'Pedestrian Pathways', desc: 'Non-slip outdoor walkways with natural grip.' },
    { icon: Car, title: 'Driveways & Parking', desc: 'High compressive strength that withstands vehicular weight.' },
    { icon: Trees, title: 'Garden Landscaping', desc: 'Seamlessly blends with lawns, ponds, and greenery.' },
    { icon: Building2, title: 'Courtyards & Patios', desc: 'Timeless stone appearance for residential verandas.' },
    { icon: Landmark, title: 'Heritage Projects', desc: 'Traditional hand-dressed stone aesthetics.' },
    { icon: Compass, title: 'Public Plazas', desc: 'Heavy foot-traffic resilience across seasons.' },
  ];

  return (
    <div>
      <PageBanner
        title="Kota Cobbles 4×4"
        description="Durable Kota Cobbles suitable for pathways, landscaping and outdoor paving applications."
        currentPage="Kota Cobbles"
      />

      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-[var(--accent)] text-sm uppercase tracking-[3px]">
              Kota Cobbles
            </span>
            <span className="h-[2px] w-16 bg-[var(--accent)]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Durable 4×4 Kota Cobbles For Outdoor Spaces
          </h2>

          <p className="mt-6 text-[var(--text-secondary)] leading-8">
            Kota Cobbles are widely used for pathways, landscaping, courtyards and paving applications due to their strength, natural appearance and long-lasting performance.
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
                  className="w-full h-[450px] object-cover"
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

      {/* Ideal Applications */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold text-[var(--text-primary)]">
              Ideal Applications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <AlternatingCard key={idx} index={idx} className="bg-white border border-[var(--border-light)] p-8 shadow-xs">
                  <Icon size={36} className="text-[var(--accent)] mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {app.desc}
                  </p>
                </AlternatingCard>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white text-sm uppercase tracking-wider font-medium hover:bg-[var(--accent-light)] transition-all"
            >
              <span>Enquire For Kota Cobbles</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
