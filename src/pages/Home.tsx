import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  ShieldCheck,
  Layers,
  CircleDollarSign,
  Truck,
  Building,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { Hero } from '../components/Hero';
import { ScrollReveal, AlternatingCard, TextReveal } from '../components/ScrollReveal';
import { openQuoteDrawer } from '../utils/quoteDrawer';
import { popularMarbles, popularGranites, marbleBySpaces, marbleByColours, graniteByColours, graniteBySpaces } from '../data/marbleGranite';

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let frameId: number;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="border border-[var(--border-light)] p-6 bg-white shadow-xs hover:border-[var(--accent)] transition-colors group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-4xl font-bold text-[var(--accent)] flex items-center font-cinzel">
        {count}{suffix}
      </h3>
      <p className="mt-2 text-[var(--text-secondary)] text-sm font-medium">{label}</p>
    </motion.div>
  );
};

export const Home: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeStoneTab, setActiveStoneTab] = useState<'marble' | 'granite' | 'spaces' | 'colours' | 'granite-colours' | 'granite-spaces'>('marble');

  const products = [
    {
      id: 1,
      title: 'Kota Stone',
      image: '/products/kota-stone.jpg',
      link: '/products/kota-stone',
      description: 'Available in multiple sizes and thickness options with fine natural finish.',
    },
    {
      id: 2,
      title: 'Popular Marble',
      image: '/marble/flawless-white.jpg',
      link: '/products/popular-marble',
      description: 'Flawless White, Statuario, Italian Marble and Onyx for luxury living.',
    },
    {
      id: 3,
      title: 'Exotic Granite',
      image: '/granite/black-granite.jpg',
      link: '/products/granite',
      description: 'Black, Blue, Green and Brown granites for kitchen tops and facades.',
    },
    {
      id: 4,
      title: 'Marble by Spaces',
      image: '/spaces/living-room.jpg',
      link: '/products/marble-by-spaces',
      description: 'Living room, kitchen, bathroom and wall cladding marble solutions.',
    },
    {
      id: 5,
      title: 'Marble by Colours',
      image: '/marble-colors/marble-by-colours-banner.jpg',
      link: '/products/marble-by-colours',
      description: 'Explore 10 curated stone colour spectrums: White, Beige, Grey, Black & Blue.',
    },
    {
      id: 6,
      title: 'Granite by Colour',
      image: '/granite-colors/granite-by-colour-banner.jpg',
      link: '/products/granite-by-colour',
      description: 'Explore 8 granite colour spectrums: Black, Blue, Brown, Green, Grey, Red & Gold.',
    },
    {
      id: 7,
      title: 'Granite by Spaces',
      image: '/granite-spaces/kitchen-top.jpg',
      link: '/products/granite-by-spaces',
      description: 'Front wall cladding, kitchen islands, wall highlighters, parking & table tops.',
    },
    {
      id: 8,
      title: 'Golden Kota Tiles',
      image: '/products/golden-kota.jpg',
      link: '/products/kota-tiles',
      description: 'Elegant golden hue stone with smooth finish for luxury spaces.',
    },
    {
      id: 9,
      title: 'River Wash Stone',
      image: '/products/river-wash.jpg',
      link: '/products/river-wash-stone',
      description: 'Naturally textured surface ideal for outdoor paving and walkways.',
    },
    {
      id: 10,
      title: 'Kota Tiles',
      image: '/products/kota-tiles.jpg',
      link: '/products/kota-tiles',
      description: 'Precision cut tiles for commercial and residential flooring.',
    },
    {
      id: 11,
      title: 'Red Mandana Stone',
      image: '/products/red-mandana-stone.jpg',
      link: '/products/red-mandana-stone',
      description: 'Traditional natural red stone with high durability and character.',
    },
    {
      id: 12,
      title: 'Kota Cobbles',
      image: '/products/cobbles.jpg',
      link: '/products/kota-cobbles',
      description: 'Heavy duty hand-cut 4×4 cobbles for landscaping and driveways.',
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: 'Premium Quality Stone',
      description: 'Carefully selected Kota Stone with consistent quality, strength and finish.',
    },
    {
      icon: Layers,
      title: 'Wide Product Range',
      description: 'From Kota Stone and Tiles to River Wash and Golden Kota Stone.',
    },
    {
      icon: CircleDollarSign,
      title: 'Competitive Pricing',
      description: 'Quality products at fair and competitive prices.',
    },
    {
      icon: Truck,
      title: 'Timely Delivery',
      description: 'Efficient packing, loading and dispatch for every order.',
    },
    {
      icon: Building,
      title: 'Trusted Supplier',
      description: 'Reliable stone solutions for builders and homeowners.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Satisfaction',
      description: 'Focused on quality service and long-term relationships.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Stone Selection',
      description: 'Carefully selected Kota Stone to ensure quality, durability and consistency.',
    },
    {
      number: '02',
      title: 'Quality Inspection',
      description: 'Every batch is inspected to maintain proper finish, size and standards.',
    },
    {
      number: '03',
      title: 'Packing',
      description: 'Products are packed securely to minimize damage during transportation.',
    },
    {
      number: '04',
      title: 'Loading',
      description: 'Efficient loading process with proper handling and safety measures.',
    },
    {
      number: '05',
      title: 'Dispatch',
      description: 'Timely dispatch to ensure smooth and reliable delivery of orders.',
    },
  ];

  const galleryImages = [
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/4.jpg',
    '/gallery/5.jpg',
    '/gallery/6.jpg',
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section with Fluid Animations */}
      <section className="py-24 bg-[var(--bg-primary)] overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-3">
                <span className="text-[var(--accent)] text-sm uppercase tracking-[3px] font-semibold">
                  About Us
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="h-[2px] bg-[var(--accent)]"
                />
              </div>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[var(--text-primary)] leading-tight">
                Trusted Name In Quality Kota Stone
              </h2>

              <p className="mt-6 text-[var(--text-secondary)] leading-8 text-base">
                GET STONE is engaged in supplying premium quality Kota Stone, Kota Tiles, Golden Kota Stone and River Wash Stone. We focus on delivering durable, aesthetically appealing and reliable stone solutions for residential, commercial and industrial projects.
              </p>

              <p className="mt-4 text-[var(--text-secondary)] leading-8 text-base">
                With a commitment to quality and customer satisfaction, we serve builders, contractors, architects and homeowners across India.
              </p>

              {/* Animated Stat Counters */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                <StatCounter target={500} suffix="+" label="Happy Customers" />
                <StatCounter target={20} suffix="+" label="Product Variants" />
              </div>

              <div className="mt-10">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-[var(--accent-light)] hover:shadow-lg hover:shadow-[var(--accent)]/20 active:scale-95 cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Right Photo with Layered Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="relative group"
            >
              {/* Decorative Accent Gold Frame Behind */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full border-2 border-[var(--accent)]/30 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

              {/* Main Image with Zoom Effect */}
              <div className="overflow-hidden shadow-2xl border border-[var(--border-light)] bg-black">
                <img
                  src="/assets/about-D7LF0Ihh.jpg"
                  alt="About GET STONE Kota"
                  className="w-full h-[520px] sm:h-[580px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Floating Glassmorphic Quality Assurance Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.6 },
                  scale: { delay: 0.6, duration: 0.6 },
                  y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                }}
                className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-8 bg-white/95 backdrop-blur-md border border-[var(--border-light)] p-4 sm:p-5 shadow-2xl flex items-center gap-4 max-w-[280px] sm:max-w-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0">
                  <Sparkles size={22} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--accent)] font-bold block">
                    Direct Quarry Sourcing
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    Indraprastha Ind. Area, Kota
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Products Grid Section with Alternating Card Reveals */}
      <section className="py-24 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <TextReveal
            badge="Our Products"
            title="Our Stone Collection"
            description="Explore our collection of Kota Stone, Golden Kota Stone, River Wash Stone, Kota Tiles, Kota Cobbles and Mandana Stone suitable for residential, commercial and landscaping projects."
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, idx) => (
              <AlternatingCard key={p.id} index={idx}>
                <Link
                  to={p.link}
                  className="group bg-white border border-[var(--border-light)] overflow-hidden block shadow-xs hover:border-[var(--accent)] hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {p.title}
                    </h3>

                    <p className="mt-3 text-[var(--text-secondary)] text-sm leading-7">
                      {p.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-[var(--border-light)] text-sm font-medium text-[var(--accent)]">
                      <span>View Details</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </Link>
              </AlternatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 POPULAR MARBLE & EXOTIC GRANITE SHOWCASE */}
      <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-light)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[var(--accent)] text-sm uppercase tracking-[3px] font-medium">
                  Premium Slabs & Sourcing
                </span>
                <span className="h-[2px] w-16 bg-[var(--accent)]" />
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
                Popular Marble & Exotic Granite
              </h2>

              <p className="mt-3 text-[var(--text-secondary)] text-base max-w-2xl">
                Explore our selection of Italian Statuario, Flawless White, Onyx, and high-strength Exotic Granites by colour.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveStoneTab('marble')}
                className={`px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border ${
                  activeStoneTab === 'marble'
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                    : 'bg-white text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                Popular Marble ({popularMarbles.length})
              </button>

              <button
                onClick={() => setActiveStoneTab('granite')}
                className={`px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border ${
                  activeStoneTab === 'granite'
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                    : 'bg-white text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                Exotic Granite ({popularGranites.length})
              </button>

              <button
                onClick={() => setActiveStoneTab('spaces')}
                className={`px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border ${
                  activeStoneTab === 'spaces'
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                    : 'bg-white text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                Marble by Spaces ({marbleBySpaces.length})
              </button>

              <button
                onClick={() => setActiveStoneTab('colours')}
                className={`px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border ${
                  activeStoneTab === 'colours'
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                    : 'bg-white text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                Marble by Colours ({marbleByColours.length})
              </button>

              <button
                onClick={() => setActiveStoneTab('granite-colours')}
                className={`px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border ${
                  activeStoneTab === 'granite-colours'
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                    : 'bg-white text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                Granite by Colour ({graniteByColours.length})
              </button>

              <button
                onClick={() => setActiveStoneTab('granite-spaces')}
                className={`px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border ${
                  activeStoneTab === 'granite-spaces'
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                    : 'bg-white text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                Granite by Spaces ({graniteBySpaces.length})
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeStoneTab === 'granite-spaces' ? (
              graniteBySpaces.map((space) => (
                <div
                  key={space.id}
                  className="group bg-white border border-[var(--border-light)] overflow-hidden shadow-xs hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-[280px] w-full overflow-hidden bg-black">
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />

                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 text-[10px] uppercase tracking-wider font-semibold text-[var(--primary)] backdrop-blur-sm">
                          <Sparkles size={11} className="text-[var(--accent)]" />
                          Granite Space
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                        {space.subtitle}
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {space.title}
                      </h3>
                      <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                        {space.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-[var(--border-light)] mt-2 flex items-center justify-between">
                    <a
                      href={`https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                        space.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider font-semibold text-[#25D366] hover:text-[#20bd5a] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp</span>
                    </a>

                    <Link
                      to="/products/granite-by-spaces"
                      className="text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))
            ) : activeStoneTab === 'granite-colours' ? (
              graniteByColours.slice(0, 8).map((col) => (
                <div
                  key={col.id}
                  className="group bg-white border border-[var(--border-light)] overflow-hidden shadow-xs hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-[280px] w-full overflow-hidden bg-black">
                      <img
                        src={col.image}
                        alt={col.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/95 text-[10px] uppercase tracking-wider font-semibold text-[var(--primary)] backdrop-blur-sm">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: col.colorHex }}
                          />
                          {col.name}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                        {col.tagline}
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {col.name}
                      </h3>
                      <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                        {col.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-[var(--border-light)] mt-2 flex items-center justify-between">
                    <a
                      href={`https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                        col.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider font-semibold text-[#25D366] hover:text-[#20bd5a] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp</span>
                    </a>

                    <Link
                      to="/products/granite-by-colour"
                      className="text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))
            ) : activeStoneTab === 'colours' ? (
              marbleByColours.slice(0, 8).map((col) => (
                <div
                  key={col.id}
                  className="group bg-white border border-[var(--border-light)] overflow-hidden shadow-xs hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-[280px] w-full overflow-hidden bg-black">
                      <img
                        src={col.image}
                        alt={col.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/95 text-[10px] uppercase tracking-wider font-semibold text-[var(--primary)] backdrop-blur-sm">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: col.colorHex }}
                          />
                          {col.name}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                        {col.tagline}
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {col.name}
                      </h3>
                      <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                        {col.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-[var(--border-light)] mt-2 flex items-center justify-between">
                    <a
                      href={`https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                        col.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider font-semibold text-[#25D366] hover:text-[#20bd5a] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp</span>
                    </a>

                    <Link
                      to="/products/marble-by-colours"
                      className="text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))
            ) : activeStoneTab === 'spaces' ? (
              marbleBySpaces.map((space) => (
                <div
                  key={space.id}
                  className="group bg-white border border-[var(--border-light)] overflow-hidden shadow-xs hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-[280px] w-full overflow-hidden bg-black">
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />

                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 text-[10px] uppercase tracking-wider font-semibold text-[var(--primary)] backdrop-blur-sm">
                          <Sparkles size={11} className="text-[var(--accent)]" />
                          Curated Space
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                        {space.subtitle}
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {space.title}
                      </h3>
                      <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                        {space.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-[var(--border-light)] mt-2 flex items-center justify-between">
                    <a
                      href={`https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                        space.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider font-semibold text-[#25D366] hover:text-[#20bd5a] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp</span>
                    </a>

                    <Link
                      to="/products/marble-by-spaces"
                      className="text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              (activeStoneTab === 'marble' ? popularMarbles.slice(0, 8) : popularGranites.slice(0, 8)).map(
                (item) => (
                  <div
                    key={item.id}
                    className="group bg-white border border-[var(--border-light)] overflow-hidden shadow-xs hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative h-[280px] w-full overflow-hidden bg-black">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />

                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 text-[10px] uppercase tracking-wider font-semibold text-[var(--primary)] backdrop-blur-sm">
                            <Sparkles size={11} className="text-[var(--accent)]" />
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="p-5 pt-0 border-t border-[var(--border-light)] mt-2 flex items-center justify-between">
                      <a
                        href={`https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20interested%20in%20${encodeURIComponent(
                          item.name
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-wider font-semibold text-[#25D366] hover:text-[#20bd5a] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <WhatsAppIcon size={14} />
                        <span>WhatsApp</span>
                      </a>

                      <Link
                        to={activeStoneTab === 'marble' ? '/products/popular-marble' : '/products/granite'}
                        className="text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                      >
                        <span>Explore</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                )
              )
            )}
          </div>

          {/* View Full Collection Button */}
          <div className="mt-12 text-center">
            <Link
              to={
                activeStoneTab === 'marble'
                  ? '/products/popular-marble'
                  : activeStoneTab === 'granite'
                  ? '/products/granite'
                  : activeStoneTab === 'spaces'
                  ? '/products/marble-by-spaces'
                  : activeStoneTab === 'colours'
                  ? '/products/marble-by-colours'
                  : activeStoneTab === 'granite-colours'
                  ? '/products/granite-by-colour'
                  : '/products/granite-by-spaces'
              }
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white text-sm uppercase tracking-wider font-medium hover:bg-[var(--accent-light)] transition-all shadow-md"
            >
              <span>
                {activeStoneTab === 'marble'
                  ? `View All ${popularMarbles.length} Popular Marbles`
                  : activeStoneTab === 'granite'
                  ? `View All ${popularGranites.length} Exotic Granites`
                  : activeStoneTab === 'spaces'
                  ? `Explore All ${marbleBySpaces.length} Living Spaces`
                  : activeStoneTab === 'colours'
                  ? `Explore All ${marbleByColours.length} Marble Colours`
                  : activeStoneTab === 'granite-colours'
                  ? `Explore All ${graniteByColours.length} Granite Colours`
                  : `Explore All ${graniteBySpaces.length} Granite Spaces`}
              </span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section with Alternating Entrances */}
      <section className="py-24 bg-[var(--bg-primary)] overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <TextReveal
            badge="Why Choose Us"
            title="The Right Choice For Quality Stone Solutions"
            description="Delivering premium stone products with a commitment to quality, reliability and client satisfaction."
            className="mb-16"
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Feature Cards - Slide from Left */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <div className="grid sm:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="p-8 bg-white border border-[var(--border-light)] shadow-xs hover:border-[var(--accent)] hover:shadow-xl transition-colors group cursor-default"
                      >
                        <div className="w-12 h-12 rounded bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] mb-5 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                          <Icon size={24} />
                        </div>

                        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>

            {/* Photo Column - Slide from Right with Hover Parallax Zoom */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.15}>
                <div className="relative group overflow-hidden border border-[var(--border-light)] shadow-xl bg-black">
                  <img
                    src="/assets/whychoose-wC6puNtn.jpg"
                    alt="Why Choose GET STONE"
                    className="w-full h-[620px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section - Alternating: Image Left / Content Right */}
      <section className="py-24 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <TextReveal
            badge="Our Process"
            title="Our Simple & Transparent Process"
            description="From raw stone selection to doorstep dispatch, we ensure strict quality compliance at every single phase."
            className="mb-16"
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo - Slide from Left */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="relative group overflow-hidden border border-[var(--border-light)] shadow-xl bg-black">
                  <img
                    src="/assets/process-DNUGIkw_.jpg"
                    alt="Stone Processing"
                    className="w-full h-[580px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Steps - Slide from Right */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={0.15}>
                <div className="space-y-6">
                  {processSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 6, y: -2 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="p-6 bg-white border border-[var(--border-light)] flex items-start gap-6 shadow-xs hover:border-[var(--accent)] hover:shadow-lg transition-colors group cursor-default"
                    >
                      <span className="text-3xl font-bold text-[var(--accent)] shrink-0 font-mono group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery Section with Alternating Image Cards */}
      <section className="py-24 bg-[var(--bg-primary)] overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <TextReveal
            badge="Our Gallery"
            title="Explore Our Stone Collection"
            description="Browse through our premium Kota Stone, Golden Kota Stone, River Wash Stone and project collection."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
              <AlternatingCard key={idx} index={idx}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="cursor-pointer overflow-hidden group border border-[var(--border-light)] relative shadow-xs hover:border-[var(--accent)] hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={src}
                    alt={`Gallery Image ${idx + 1}`}
                    className="h-[320px] w-full object-cover transition duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white/90 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-md">
                      View Photo
                    </span>
                  </div>
                </div>
              </AlternatingCard>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 bg-[var(--accent)] px-8 py-4 text-white transition-all duration-300 hover:bg-[var(--accent-light)] hover:shadow-xl text-sm uppercase tracking-wider font-semibold active:scale-95"
            >
              <span>View All Gallery</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA Banner Section with Fade + Scale Reveal */}
      <section className="relative py-24 bg-[var(--bg-dark)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/cta-CAjaxljm.png"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal direction="zoom">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                Ready To Start Your Next Project?
              </h2>

              <p className="mt-6 text-white/70 text-lg max-w-2xl font-light">
                Get in touch with us for product availability, pricing and bulk orders. We are here to help you find the right stone solution for your project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-16 pt-10 border-t border-white/10">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#007AFF]/20 flex items-center justify-center mb-3">
                  <Phone size={24} className="text-[#007AFF]" />
                </div>
                <h3 className="text-xl font-medium text-white">Call Us</h3>
                <p className="mt-2 text-white/70 text-sm">
                  <a href="tel:+919214567181" className="hover:text-[#007AFF] transition-colors font-medium">
                    +91 92145 67181
                  </a>
                </p>
              </div>

              <div>
                <Mail size={28} className="text-[var(--accent)]" />
                <h3 className="mt-4 text-xl font-medium text-white">Email</h3>
                <p className="mt-3 text-white/70 text-sm">
                  <a href="mailto:getstonekota@gmail.com" className="hover:text-[var(--accent-light)]">
                    getstonekota@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <MapPin size={28} className="text-[var(--accent)]" />
                <h3 className="mt-4 text-xl font-medium text-white">Address</h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  G 3210, Road Number 6, near Bhamashah Mandi Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openQuoteDrawer('Kota Stone')}
                className="inline-flex items-center gap-2 bg-[var(--accent)] px-8 py-4 text-white text-sm uppercase tracking-wider font-semibold hover:bg-[var(--accent-light)] transition-all shadow-lg hover:shadow-2xl active:scale-95 cursor-pointer"
              >
                <span>Instant Stone Quote (Slide-Over)</span>
                <ArrowUpRight size={16} />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-white text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-[var(--primary)] transition-all active:scale-95"
              >
                <span>Contact Us</span>
                <ArrowUpRight size={16} />
              </Link>

              <a
                href="https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20interested%20in%20Kota%20Stone%20supplies."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 text-sm uppercase tracking-wider font-semibold transition-all shadow-lg active:scale-95"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
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
                (prev) => (prev! - 1 + galleryImages.length) % galleryImages.length
              )
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[var(--accent)] p-2 z-50"
          >
            <ChevronLeft size={36} />
          </button>

          <img
            src={galleryImages[lightboxIndex]}
            alt="Gallery Full"
            className="max-h-[85vh] max-w-[90vw] object-contain border border-white/20 shadow-2xl"
          />

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! + 1) % galleryImages.length)
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
