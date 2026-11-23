import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ScrollReveal } from '../components/ScrollReveal';

export const RedMandanaStone: React.FC = () => {
  const points = [
    'Natural Red Finish with Earthy Tones',
    'Suitable For Both Indoor & Outdoor Use',
    'Highly Durable, Weather-Proof & Easy To Maintain',
    'Available For Ready Bulk Sourcing & Custom Sizes',
  ];

  return (
    <div>
      <PageBanner
        title="Red Mandana Stone"
        description="Natural red stone widely used for flooring, pathways and traditional architectural applications."
        currentPage="Red Mandana Stone"
      />

      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <ScrollReveal direction="left">
              <img
                src="/products/red-mandana-stone.jpg"
                alt="Red Mandana Stone"
                className="w-full h-[550px] object-cover border border-[var(--border-light)] shadow-lg"
              />
            </ScrollReveal>

            {/* Right Story */}
            <ScrollReveal direction="right" delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[var(--accent)] text-sm uppercase tracking-[3px] font-medium">
                    Red Mandana Stone
                  </span>
                  <span className="h-[2px] w-16 bg-[var(--accent)]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] leading-tight">
                  Traditional Natural Stone For Timeless Spaces
                </h2>

                <p className="mt-6 text-[var(--text-secondary)] leading-8">
                  Red Mandana Stone is known for its natural reddish appearance, chemical resistance, and exceptional hardness. Quarried in Rajasthan, it is widely utilized in residential courtyards, temples, public pathways, and heritage restorations across India.
                </p>

                <div className="mt-8 space-y-4">
                  {points.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-[var(--accent)] rounded-full shrink-0" />
                      <p className="text-base text-[var(--text-primary)] font-medium">{p}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[var(--accent-light)] font-medium"
                  >
                    <span>Enquire For Red Mandana Stone</span>
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
