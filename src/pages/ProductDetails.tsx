import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight, Phone, Sparkles, Layers } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { ScrollReveal, AlternatingCard } from '../components/ScrollReveal';
import { StoneCard } from '../components/StoneCard';
import { EnquiryForm } from '../components/EnquiryForm';
import { stoneProducts } from '../data/products';
import { businessInfo } from '../data/business';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = stoneProducts.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = stoneProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const currentMainImage =
    product.galleryImages[activeImageIndex] || product.heroImage;

  const whatsappMessage = encodeURIComponent(
    `Hello GET STONE, I am interested in inquiring about ${product.name} (Origin: ${product.specifications.origin}). Please share specifications and sample availability.`
  );

  return (
    <div className="w-full pt-20">
      {/* 1. Breadcrumbs & Top Bar */}
      <div className="bg-ivory border-b border-sandstone/25 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-wider text-stonegray">
            <Link to="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link to="/products" className="hover:text-charcoal transition-colors">
              Our Stones
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-bronze font-semibold">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* 2. Product Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sandstone hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Stone Collection</span>
            </Link>

            <div className="flex items-center gap-3 mb-3">
              {product.isCatalogueConcept ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 border border-sandstone/40 text-[11px] uppercase tracking-widest text-sandstone">
                  <Sparkles className="w-3 h-3 text-bronze" />
                  Catalogue Concept (Pending Inventory)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sandstone/20 border border-sandstone/40 text-[11px] uppercase tracking-widest text-sandstone">
                  Verified Sourcing • Kota, Rajasthan
                </span>
              )}
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-normal text-white">
              {product.name}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-ivory/85 leading-relaxed font-light">
              {product.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/919214567181?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md"
              >
                <WhatsAppIcon size={16} />
                <span>Enquire via WhatsApp</span>
              </a>

              <a
                href={`tel:${businessInfo.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#007AFF] hover:bg-[#0066d6] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 92145 67181</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Gallery and Detailed Characteristics */}
      <section className="py-20 sm:py-24 bg-white text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Gallery & Zoomable Main Image */}
            <div className="lg:col-span-7 space-y-4">
              <ScrollReveal direction="left">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal border border-sandstone/30 shadow-xl group">
                  <img
                    src={currentMainImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-mono backdrop-blur-sm">
                    {product.name} • Finish Sample
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {product.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[4/3] overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-bronze scale-95 shadow-md'
                          : 'border-sandstone/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Stone Overview & Appearance */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="up">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze block mb-2">
                    Material Overview
                  </span>
                  <h2 className="font-display text-3xl font-normal text-charcoal">
                    Authentic Geological Character
                  </h2>
                  <p className="mt-4 text-sm text-stonegray leading-relaxed font-light">
                    {product.overview}
                  </p>
                </div>

                {/* Appearance Details */}
                <div className="p-6 bg-ivory border border-sandstone/30 space-y-4 mt-6">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal border-b border-sandstone/30 pb-2">
                    Appearance & Characteristics
                  </h3>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-bronze font-mono block">
                      Color Spectrum
                    </span>
                    <p className="text-xs text-charcoal mt-0.5">
                      {product.appearance.colorRange}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-bronze font-mono block">
                      Grain & Texture
                    </span>
                    <p className="text-xs text-charcoal mt-0.5">
                      {product.appearance.grainTexture}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-bronze font-mono block">
                      Visual Character
                    </span>
                    <p className="text-xs text-charcoal mt-0.5">
                      {product.appearance.visualCharacter}
                    </p>
                  </div>
                </div>

                {/* Surface Finishes */}
                <div className="mt-6">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal mb-3">
                    Available Surface Finishes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map((finish, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white border border-sandstone/40 text-xs text-charcoal uppercase tracking-wider flex items-center gap-1.5 shadow-2xs"
                      >
                        <Layers className="w-3 h-3 text-bronze" />
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Architectural Applications & Key Features */}
      <section className="py-20 bg-ivory border-y border-sandstone/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Typical Applications */}
            <div className="p-8 bg-white border border-sandstone/30">
              <h3 className="font-display text-2xl font-normal text-charcoal mb-4">
                Recommended Applications
              </h3>
              <p className="text-xs text-stonegray mb-6">
                Material suitability depends on product specifications, calibrated thickness, and site installation parameters.
              </p>
              <ul className="space-y-3">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-charcoal">
                    <Check className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div className="p-8 bg-white border border-sandstone/30">
              <h3 className="font-display text-2xl font-normal text-charcoal mb-4">
                Architectural Highlights
              </h3>
              <p className="text-xs text-stonegray mb-6">
                Intrinsic benefits of utilizing authentic natural stone in modern building envelopes.
              </p>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-charcoal">
                    <span className="w-2 h-2 rounded-full bg-bronze shrink-0 mt-1.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Specifications Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze block mb-2">
              Dimensions & Technical Profile
            </span>
            <h2 className="font-display text-3xl font-normal text-charcoal">
              Product Specifications
            </h2>
            <p className="text-xs text-stonegray mt-2">
              Standard commercial specifications. Custom saw-cutting, gangsaw slabs, and calibrated tolerances can be confirmed upon enquiry.
            </p>
          </div>

          <div className="overflow-x-auto border border-sandstone/30 shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <tbody>
                <tr className="border-b border-sandstone/20 bg-ivory">
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-charcoal w-1/3">
                    Material Type
                  </th>
                  <td className="py-4 px-6 text-stonegray">
                    {product.specifications.materialType}
                  </td>
                </tr>

                <tr className="border-b border-sandstone/20">
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-charcoal">
                    Quarry / Sourcing Origin
                  </th>
                  <td className="py-4 px-6 text-stonegray">
                    {product.specifications.origin}
                  </td>
                </tr>

                {product.specifications.density && (
                  <tr className="border-b border-sandstone/20 bg-ivory">
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-charcoal">
                      Typical Apparent Density
                    </th>
                    <td className="py-4 px-6 text-stonegray">
                      {product.specifications.density}
                    </td>
                  </tr>
                )}

                {product.specifications.waterAbsorption && (
                  <tr className="border-b border-sandstone/20">
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-charcoal">
                      Water Absorption
                    </th>
                    <td className="py-4 px-6 text-stonegray">
                      {product.specifications.waterAbsorption}
                    </td>
                  </tr>
                )}

                <tr className="border-b border-sandstone/20 bg-ivory">
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-charcoal">
                    Standard Thickness Options
                  </th>
                  <td className="py-4 px-6 text-stonegray">
                    {product.specifications.standardThickness}
                  </td>
                </tr>

                <tr className="border-b border-sandstone/20">
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-charcoal">
                    Available Dimensions
                  </th>
                  <td className="py-4 px-6 text-stonegray">
                    {product.specifications.availableSizes}
                  </td>
                </tr>

                <tr className="bg-ivory">
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-charcoal">
                    Edge & Finish Options
                  </th>
                  <td className="py-4 px-6 text-stonegray">
                    {product.specifications.finishOptions}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Product Enquiry Section */}
      <section className="py-20 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze block mb-2">
              Direct Enquiry
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-normal">
              Request Quotation for {product.name}
            </h2>
            <p className="text-xs text-stonegray mt-2">
              Share your required sq ft, thickness, and site address to receive material rates.
            </p>
          </div>

          <EnquiryForm defaultStone={product.name} />
        </div>
      </section>

      {/* 7. Related Stones */}
      <section className="py-20 bg-ivory border-t border-sandstone/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze block mb-1">
                Explore More
              </span>
              <h2 className="font-display text-3xl font-normal text-charcoal">
                Related Natural Stones
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-bronze flex items-center gap-1"
            >
              All Stones <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relProduct, idx) => (
              <AlternatingCard key={relProduct.id} index={idx}>
                <StoneCard product={relProduct} />
              </AlternatingCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
