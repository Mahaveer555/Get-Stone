import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Layers, CircleDollarSign, Truck, Building, HeartHandshake, Sparkles } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ScrollReveal, AlternatingCard, TextReveal } from '../components/ScrollReveal';

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
      whileHover={{ y: -6, scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="border border-[var(--border-light)] p-6 bg-white shadow-xs hover:border-[var(--accent)] transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h3 className="text-4xl font-bold text-[var(--accent)] flex items-center font-cinzel">
        {count}{suffix}
      </h3>
      <p className="mt-2 text-[var(--text-secondary)] text-sm font-medium">{label}</p>
    </motion.div>
  );
};

export const About: React.FC = () => {
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

  return (
    <div>
      <PageBanner
        title="About Us"
        description="Learn more about GET STONE, our journey, values and commitment to delivering premium quality stone solutions."
        currentPage="About Us"
      />

      {/* Main About Section - Alternating Left Image / Right Story */}
      <section className="py-24 bg-[var(--bg-primary)] overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image with Layered Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative group"
            >
              {/* Decorative Accent Gold Frame Behind */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-full h-full border-2 border-[var(--accent)]/30 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

              {/* Main Image with Zoom Effect */}
              <div className="overflow-hidden shadow-2xl border border-[var(--border-light)] bg-black">
                <img
                  src="/assets/about-D7LF0Ihh.jpg"
                  alt="About GET STONE"
                  className="w-full h-[540px] sm:h-[620px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Floating Glassmorphic Quality Assurance Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.6 },
                  scale: { delay: 0.5, duration: 0.6 },
                  y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                }}
                className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-8 bg-white/95 backdrop-blur-md border border-[var(--border-light)] p-4 sm:p-5 shadow-2xl flex items-center gap-4 max-w-[280px] sm:max-w-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0">
                  <Sparkles size={22} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--accent)] font-bold block">
                    Direct Quarry Sourcing
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    Kota, Rajasthan
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Story */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
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
                With a commitment to quality and customer satisfaction, we serve builders, contractors, architects and homeowners across India. Based in the stone capital of Kota, Rajasthan, we have direct quarry-level access to the finest geological deposits.
              </p>

              {/* Animated Stat Counters */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                <StatCounter target={500} suffix="+" label="Happy Customers" />
                <StatCounter target={20} suffix="+" label="Product Variants" />
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-[var(--accent-light)] hover:shadow-lg hover:shadow-[var(--accent)]/20 active:scale-95 cursor-pointer shadow-md"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Alternating Image Left / Steps Right */}
      <section className="py-24 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <TextReveal
            badge="Our Process"
            title="Our Simple & Transparent Process"
            description="From stone selection to doorstep dispatch, we ensure strict quality compliance at every single phase."
            className="mb-16"
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="relative group overflow-hidden border border-[var(--border-light)] shadow-xl bg-black">
                  <img
                    src="/assets/process-DNUGIkw_.jpg"
                    alt="Stone Processing"
                    className="w-full h-[580px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={0.15}>
                <div className="space-y-6">
                  {processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white border border-[var(--border-light)] flex items-start gap-6 shadow-xs hover:border-[var(--accent)] hover:shadow-md transition-all duration-300 group"
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
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Alternating Direction Cards */}
      <section className="py-24 bg-[var(--bg-primary)] overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <TextReveal
            badge="Why Choose Us"
            title="The Right Choice For Quality Stone Solutions"
            className="mb-16"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AlternatingCard key={idx} index={idx}>
                  <div
                    className="p-8 bg-white border border-[var(--border-light)] shadow-xs hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 h-full group"
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
                  </div>
                </AlternatingCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
