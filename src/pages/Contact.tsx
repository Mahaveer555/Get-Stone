import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PageBanner } from '../components/PageBanner';
import { ScrollReveal } from '../components/ScrollReveal';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Kota Stone',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      <PageBanner
        title="Contact Us"
        description="Get in touch with us for product details, pricing and bulk orders."
        currentPage="Contact Us"
      />

      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Info */}
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[var(--accent)] text-sm uppercase tracking-[3px] font-medium">
                    Get In Touch
                  </span>
                  <span className="h-[2px] w-16 bg-[var(--accent)]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] leading-tight">
                  Ready To Supply Quality Stone For Your Next Project
                </h2>

                <p className="mt-6 text-[var(--text-secondary)] leading-8">
                  Contact GET STONE for high quality Kota Stone, Kota Tiles, River Wash Stone, Kota Cobbles and Red Mandana Stone requirements. We provide reliable bulk supply across India with competitive rates.
                </p>

                <div className="mt-10 space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-5 p-6 bg-white border border-[var(--border-light)] shadow-xs hover:border-[#007AFF]/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded bg-[#007AFF]/10 flex items-center justify-center text-[#007AFF] shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">Call Us</h3>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">Direct sales desk and quotes:</p>
                      <a
                        href="tel:+919214567181"
                        className="mt-1 inline-block text-base font-semibold text-[#007AFF] hover:underline"
                      >
                        +91 92145 67181
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-5 p-6 bg-white border border-[var(--border-light)] shadow-xs hover:border-[#25D366]/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                      <WhatsAppIcon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">WhatsApp Support</h3>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">Instant quotes & stone video samples:</p>
                      <a
                        href="https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20am%20inquiring%20about%20stone%20supplies."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-base font-semibold text-[#25D366] hover:underline"
                      >
                        +91 92145 67181
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-5 p-6 bg-white border border-[var(--border-light)] shadow-xs hover:border-[var(--accent)]/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">Email Us</h3>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">Send drawings and project specifications:</p>
                      <a
                        href="mailto:getstonekota@gmail.com"
                        className="mt-1 inline-block text-base font-medium text-[var(--accent)] hover:underline"
                      >
                        getstonekota@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-5 p-6 bg-white border border-[var(--border-light)] shadow-xs hover:border-[var(--accent)]/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">Our Sourcing Yard & Office</h3>
                      <address className="not-italic mt-1 text-sm text-[var(--text-secondary)] leading-relaxed">
                        G 3210, Road Number 6, near Bhamashah Mandi Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India.
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Contact Form */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-white p-8 sm:p-10 border border-[var(--border-light)] shadow-sm">
                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                  Send Us An Enquiry
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-8">
                  Fill in the details below and we will get back to you with pricing and availability.
                </p>

                {formSubmitted ? (
                  <div className="p-8 text-center bg-[var(--bg-primary)] border border-[var(--border-light)] space-y-4">
                    <CheckCircle2 size={48} className="text-[var(--accent)] mx-auto" />
                    <h4 className="text-2xl font-semibold text-[var(--text-primary)]">Enquiry Received</h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Thank you! We have received your stone requirement. You can also chat with us directly on WhatsApp for faster dispatch updates.
                    </p>
                    <a
                      href="https://wa.me/919214567181?text=Hello%20GET%20STONE,%20I%20have%20submitted%20an%20enquiry%20on%20your%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#25D366] text-white text-sm uppercase tracking-wider font-semibold hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all shadow-md"
                    >
                      <WhatsAppIcon size={18} />
                      <span>Open in WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-light)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-light)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-light)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Stone Requirement *
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-light)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      >
                        <option value="Kota Stone">Kota Stone (Semi / High Polish / Diamond Cut)</option>
                        <option value="Golden Kota Tiles">Golden Kota Tiles</option>
                        <option value="River Wash Stone">River Wash Stone</option>
                        <option value="Kota Tiles">Kota Tiles (Calibrated Box)</option>
                        <option value="Red Mandana Stone">Red Mandana Stone</option>
                        <option value="Kota Cobbles">Kota Cobbles (4×4)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Message / Quantity / Dimensions *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify thickness, quantity (sq ft), delivery city, and surface finish..."
                        className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-light)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[var(--accent)] hover:bg-[var(--accent-light)] active:scale-[0.99] text-white text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>Send Message</span>
                      <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full border-t border-[var(--border-light)]">
        <iframe
          title="GET STONE Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.0!2d75.8756!3d25.1328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzU4LjEiTiA3NcKwNTInMzIuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        />
      </section>
    </div>
  );
};
