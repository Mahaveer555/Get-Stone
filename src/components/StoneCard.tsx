import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { StoneProduct } from '../data/products';

interface StoneCardProps {
  product: StoneProduct;
  featured?: boolean;
}

export const StoneCard: React.FC<StoneCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white border border-sandstone/30 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-bronze hover:shadow-2xl">
      {/* Image Container with Zoom */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-charcoal">
        <img
          src={product.heroImage}
          alt={product.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Dynamic Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Badge (Primary or Catalogue Concept) */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
          {product.isCatalogueConcept ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal-dark/90 border border-sandstone/40 text-[10px] uppercase tracking-widest text-sandstone backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-bronze" />
              Catalogue Concept
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 bg-white/90 border border-charcoal/10 text-[10px] uppercase tracking-widest font-semibold text-charcoal backdrop-blur-md">
              Kota • Rajasthan Origin
            </span>
          )}
        </div>

        {/* Finishes Pills preview on bottom of image */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-1.5 opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {product.finishes.slice(0, 2).map((finish, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-black/60 text-sandstone-light border border-white/10 backdrop-blur-sm"
            >
              {finish}
            </span>
          ))}
          {product.finishes.length > 2 && (
            <span className="px-1.5 py-0.5 text-[10px] text-white/70 bg-black/40">
              +{product.finishes.length - 2} more
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between bg-ivory">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[1px] bg-bronze transition-all duration-300 group-hover:w-8" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-stonegray">
              {product.specifications.materialType.split(' ')[0]}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-medium text-charcoal group-hover:text-bronze-dark transition-colors duration-300">
            {product.name}
          </h3>

          <p className="mt-3 text-sm text-stonegray leading-relaxed line-clamp-3">
            {product.shortDescription}
          </p>
        </div>

        {/* Card Action Buttons */}
        <div className="mt-6 pt-5 border-t border-sandstone/30 flex items-center justify-between">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charcoal hover:text-bronze transition-colors group/link"
          >
            <span>Explore Stone</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="text-[11px] uppercase tracking-wider text-stonegray hover:text-charcoal transition-colors underline underline-offset-4 decoration-sandstone/60"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
};
