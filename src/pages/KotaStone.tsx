import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageBanner } from '../components/PageBanner';
import { ScrollReveal, AlternatingCard } from '../components/ScrollReveal';

export const KotaStone: React.FC = () => {
  const variants = [
    {
      title: 'Semi Quality Kota Stone',
      image: '/products/kota-stone.jpg',
      description: 'Widely used economical Kota Stone suitable for general flooring, corridors, and large commercial projects.',
    },
    {
      title: 'High Polish Kota Stone',
      image: '/products/high-polish.jpg',
      description: 'Mirror polished Kota Stone with refined surface finish that delivers smooth gloss and premium appeal.',
    },
    {
      title: 'Multi Colour Kota Stone',
      image: '/products/multi-color.jpg',
      description: 'Naturally occurring shades of greenish-blue and warm brown creating distinctive organic patterns.',
    },
    {
      title: 'Diamond Cut Kota Stone',
      image: '/products/diamond-cut.jpg',
      description: 'Precision diamond machine-cut edges for seamless joint-free tile laying and laser-flat alignment.',
    },
  ];

  const specs = [
    { label: 'Stone Type', val: 'Fine-Grained Natural Limestone' },
    { label: 'Origin', val: 'Kota District, Rajasthan, India' },
    { label: 'Finishes', val: 'Rough, Semi-Polish, High Gloss Polish, River Wash' },
    { label: 'Sizes', val: '11×11, 17×11, 23×11, 23×17, 23×23, 35×23 inches and gangsaw slabs' },
    { label: 'Thickness', val: '18mm to 35mm (Calibrated options available)' },
    { label: 'Durability', val: 'Extremely high abrasion resistance and non-porous structure' },
  ];

  return (
    <div>
      <PageBanner
        title="Kota Stone"
        description="Explore our range of Kota Stone products including Semi Quality, High Polish, Multi Colour, Diamond Cut and Kota Tiles available in different sizes and finishes."
        currentPage="Kota Stone"
      />

      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-[var(--accent)] text-sm uppercase tracking-[3px]">
              Kota Stone
            </span>
            <span className="h-[2px] w-16 bg-[var(--accent)]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Quality Kota Stone Products
          </h2>

          <p className="mt-6 text-[var(--text-secondary)] leading-8">
            We offer a comprehensive range of Kota Stone products available in different dimensions, surface finishes, and quality grades suitable for residential, institutional, and commercial environments.
          </p>
        </div>
      </section>

      {/* Product Variants Grid */}
      <section className="pb-24 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {variants.map((v, idx) => (
              <AlternatingCard
                key={idx}
                index={idx}
                className="group bg-white border border-[var(--border-light)] overflow-hidden shadow-xs hover:border-[var(--accent)] transition-all"
              >
                <div className="overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {v.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <p className="mt-3 text-[var(--text-secondary)] leading-7 text-sm">
                    {v.description}
                  </p>
                </div>
              </AlternatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Ordering */}
      <section className="py-20 bg-[var(--bg-secondary)] border-t border-[var(--border-light)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold text-[var(--text-primary)]">
                Material Specifications
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Standard commercial specifications. Bulk interstate container dispatches available.
              </p>
            </div>

            <div className="bg-white border border-[var(--border-light)] divide-y divide-[var(--border-light)] shadow-xs">
              {specs.map((s, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row justify-between text-sm">
                  <span className="font-semibold text-[var(--text-primary)] w-1/3">{s.label}</span>
                  <span className="text-[var(--text-secondary)] sm:w-2/3">{s.val}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white text-sm uppercase tracking-wider font-medium hover:bg-[var(--accent)] transition-all"
              >
                <span>Request Kota Stone Quotation</span>
                <ArrowUpRight size={16} />
              </Link>

              <a
                href="https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20interested%20in%20Kota%20Stone%20supplies."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm uppercase tracking-wider font-semibold transition-all shadow-md"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
