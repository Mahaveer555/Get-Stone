import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { StoneCard } from '../components/StoneCard';
import { ScrollReveal, AlternatingCard } from '../components/ScrollReveal';
import { stoneProducts } from '../data/products';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Stones' },
    { id: 'sandstone', label: 'Sandstone' },
    { id: 'bijolia-stone', label: 'Bijolia Stone' },
    { id: 'kota-stone', label: 'Kota Stone' },
    { id: 'basalt', label: 'Basalt' },
    { id: 'marble', label: 'Marble (Concept)' },
    { id: 'granite', label: 'Granite (Concept)' },
  ];

  const filteredProducts = useMemo(() => {
    return stoneProducts.filter((product) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || product.slug === selectedCategory;

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.finishes.some((f) => f.toLowerCase().includes(query)) ||
        product.applications.some((a) => a.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="relative py-24 sm:py-28 bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=80"
            alt="Natural Stone Slabs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="up">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze block mb-4">
              Catalogue & Sourcing
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-normal text-white">
              Our Stone Collection
            </h1>
            <div className="w-16 h-[2px] bg-sandstone mx-auto my-6" />
            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-light">
              Explore natural stone materials for architectural, interior, exterior and landscaping applications.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="py-8 bg-ivory border-b border-sandstone/25 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-ivory/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-bronze shrink-0 mr-1 hidden sm:block" />
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all border ${
                    selectedCategory === tab.id
                      ? 'bg-charcoal text-ivory border-charcoal shadow-sm'
                      : 'bg-white text-stonegray border-sandstone/30 hover:border-bronze hover:text-charcoal'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-stonegray absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stone, finish, use..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-sandstone/40 text-xs text-charcoal placeholder-stonegray focus:outline-none focus:border-bronze transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stonegray hover:text-charcoal"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16 sm:py-24 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Concept Banner notice if marble/granite selected */}
          {(selectedCategory === 'marble' || selectedCategory === 'granite') && (
            <div className="mb-10 p-4 bg-sandstone/15 border border-sandstone/40 text-xs text-charcoal flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-bronze shrink-0" />
              <span>
                <strong>Catalogue Notice:</strong> {selectedCategory === 'marble' ? 'Marble' : 'Granite'} is presented as a design concept pending direct supplier inventory and batch confirmation.
              </span>
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-ivory border border-dashed border-sandstone/40 p-8 max-w-md mx-auto">
              <p className="font-display text-2xl text-charcoal">No stones match your search</p>
              <p className="text-xs text-stonegray mt-2">
                Try clearing your search query or choosing another stone category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-6 px-6 py-2.5 bg-charcoal text-white text-xs uppercase tracking-wider hover:bg-bronze transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <AlternatingCard key={product.id} index={idx}>
                  <StoneCard product={product} />
                </AlternatingCard>
              ))}
            </div>
          )}

          {/* Sourcing Guidance Footer Note */}
          <div className="mt-20 p-8 bg-ivory border border-sandstone/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-2xl text-charcoal font-medium">
                Need Custom Sizes, Finishes, or Sawn Gangsaw Slabs?
              </h4>
              <p className="text-xs text-stonegray mt-1 max-w-2xl">
                GET STONE provides tailored dimensions, hand-dressed edges, rock-face treatments, and shotblasted finishes upon direct consultation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+919214567181"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#007AFF] hover:bg-[#0066d6] text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm whitespace-nowrap"
              >
                <Phone size={14} />
                <span>Call +91 92145 67181</span>
              </a>
              <a
                href="https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20inquiring%20about%20custom%20stone%20sizes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm whitespace-nowrap"
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
