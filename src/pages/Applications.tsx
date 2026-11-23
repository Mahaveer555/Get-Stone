import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { applicationsData } from '../data/products';

export const Applications: React.FC = () => {
  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="relative py-24 sm:py-32 bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Architectural Stone Applications"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="up">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze block mb-4">
              Design & Architecture
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-white">
              Natural Stone for Every Space
            </h1>
            <div className="w-16 h-[2px] bg-sandstone mx-auto my-6" />
            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-light">
              From resilient exterior building envelopes to cool underfoot interior pavings, explore how natural stone transforms spaces.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Advisory Banner */}
      <section className="bg-sandstone/15 border-b border-sandstone/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 text-xs text-charcoal text-center">
          <Info className="w-4 h-4 text-bronze shrink-0" />
          <span>
            <strong>Architectural Note:</strong> Material suitability depends on stone thickness, specific surface finishes, sub-base preparation, and regional climatic exposure.
          </span>
        </div>
      </section>

      {/* 6 Large Application Cards */}
      <section className="py-20 sm:py-28 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {applicationsData.map((app, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={app.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <ScrollReveal direction={isEven ? 'left' : 'right'}>
                      <div className="relative aspect-[16/10] overflow-hidden border border-sandstone/30 shadow-2xl group">
                        <img
                          src={app.image}
                          alt={app.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-charcoal/15" />
                        <div className="absolute bottom-4 left-4 bg-charcoal-dark/85 text-white text-[11px] uppercase tracking-widest px-3 py-1 font-mono backdrop-blur-sm">
                          {app.subtitle}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ScrollReveal direction="up">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-bronze">
                          Application 0{index + 1}
                        </span>
                        <span className="w-8 h-[1px] bg-bronze" />
                      </div>

                      <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-normal">
                        {app.title}
                      </h2>

                      <p className="text-sm sm:text-base text-stonegray leading-relaxed font-light">
                        {app.description}
                      </p>

                      <div className="p-4 bg-white border border-sandstone/30">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-charcoal block mb-2">
                          Recommended Stone Materials:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {app.recommendedStones.map((stoneName, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-ivory border border-sandstone/40 text-xs text-charcoal flex items-center gap-1 font-medium"
                            >
                              <CheckCircle2 className="w-3 h-3 text-bronze" />
                              {stoneName}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          to="/products"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white text-xs uppercase tracking-widest font-semibold hover:bg-bronze transition-colors"
                        >
                          <span>Explore Suitable Stones</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white text-charcoal border-t border-sandstone/25 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-charcoal">
            Planning a Distinctive Architectural Detail?
          </h2>
          <p className="text-sm text-stonegray">
            Send architectural blueprints, site photos, or schedules to GET STONE for material suitability reviews and quotations.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-bronze text-white text-xs uppercase tracking-widest font-semibold hover:bg-bronze-light transition-colors"
            >
              Consult with Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
