import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Sparkles, CheckCircle2, MapPin, Building2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface SlideOverQuoteProps {
  isOpen: boolean;
  onClose: () => void;
  initialStone?: string;
}

export const SlideOverQuote: React.FC<SlideOverQuoteProps> = ({ isOpen, onClose, initialStone = 'Kota Stone' }) => {
  const [selectedCategory, setSelectedCategory] = useState<'kota' | 'marble' | 'granite'>('kota');
  const [selectedProduct, setSelectedProduct] = useState<string>(initialStone);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [prevInitialStone, setPrevInitialStone] = useState(initialStone);
  if (prevInitialStone !== initialStone) {
    setPrevInitialStone(initialStone);
    if (initialStone.toLowerCase().includes('marble')) {
      setSelectedCategory('marble');
    } else if (initialStone.toLowerCase().includes('granite')) {
      setSelectedCategory('granite');
    } else {
      setSelectedCategory('kota');
    }
    setSelectedProduct(initialStone);
  }

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }

  // Lock body scroll when slide-over is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const categoryOptions = {
    kota: [
      'Kota Stone Mirror Polish',
      'Kota Stone Rough Slabs',
      'River Wash Stone',
      'Golden Kota Tiles',
      'Red Mandana Stone',
      'Kota Cobbles 4x4',
    ],
    marble: [
      'Statuario Marble',
      'Flawless White Marble',
      'Italian Marble',
      'Beige Marble',
      'Grey Marble',
      'Black Marble',
      'Marble for Living Room',
      'Marble for Washroom',
    ],
    granite: [
      'Absolute Black Granite',
      'Black Galaxy Granite',
      'Blue Dunes Granite',
      'Steel Grey Granite',
      'Ruby Red Granite',
      'Granite for Kitchen Tops',
      'Granite for Front Cladding',
      'Granite for Parking',
    ],
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Quote Request - GET STONE*%0A%0A*Name:* ${fullName || 'Client'}%0A*Phone:* ${phone || 'Not shared'}%0A*Category:* ${selectedCategory.toUpperCase()}%0A*Product:* ${selectedProduct}%0A*Project Location:* ${location || 'India'}%0A*Approx Quantity:* ${quantity || 'TBD'} sq.ft%0A*Requirements:* ${message || 'Please share catalogue and factory rates.'}`;
    window.open(`https://wa.me/919214567181?text=${text}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            {/* Slide-Over Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="w-screen max-w-md sm:max-w-lg bg-[var(--bg-primary)] shadow-2xl flex flex-col border-l border-[var(--border-light)] relative z-10"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 bg-white border-b border-[var(--border-light)] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[var(--accent)] text-xs font-bold uppercase tracking-[2px] flex items-center gap-1">
                      <Sparkles size={12} />
                      Factory Direct
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                    Get Instant Stone Quote
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Direct mining & factory rates from Kota, Rajasthan
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-[var(--bg-primary)] hover:bg-[var(--accent)] hover:text-white text-[var(--text-primary)] flex items-center justify-center transition-all duration-300"
                  aria-label="Close Drawer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-white border border-[var(--border-light)] text-center space-y-4 my-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="text-2xl font-semibold text-[var(--text-primary)]">
                      Quotation Request Received!
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      Thank you <strong className="text-[var(--text-primary)]">{fullName || 'Sir/Ma’am'}</strong>. Our stone specialist in Kota will review your requirement for <strong>{selectedProduct}</strong> and connect with you shortly on <strong>{phone}</strong>.
                    </p>

                    <div className="pt-4 flex flex-col gap-3">
                      <button
                        onClick={handleWhatsAppSend}
                        className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <WhatsAppIcon size={16} />
                        Continue on WhatsApp Now
                      </button>

                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] underline uppercase tracking-wider"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* 1. Category Switcher */}
                    <div>
                      <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block mb-2.5">
                        1. Select Material Category:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['kota', 'marble', 'granite'] as const).map((cat) => {
                          const labels = { kota: 'Kota Stone', marble: 'Marble', granite: 'Granite' };
                          const isSelected = selectedCategory === cat;
                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => {
                                setSelectedCategory(cat);
                                setSelectedProduct(categoryOptions[cat][0]);
                              }}
                              className={`py-2.5 px-2 text-xs font-semibold uppercase tracking-wider transition-all border rounded-xs ${
                                isSelected
                                  ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-xs'
                                  : 'bg-white text-[var(--text-secondary)] border-[var(--border-light)] hover:border-[var(--accent)]'
                              }`}
                            >
                              {labels[cat]}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Stone Item Selection */}
                    <div>
                      <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block mb-2">
                        2. Choose Variety / Product:
                      </label>
                      <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="w-full p-3 text-xs sm:text-sm bg-white border border-[var(--border-light)] focus:border-[var(--accent)] outline-none transition-colors"
                      >
                        {categoryOptions[selectedCategory].map((prod) => (
                          <option key={prod} value={prod}>
                            {prod}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 3. Client Contact Details */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Rajesh Sharma / Architect Mehta"
                          className="w-full p-3 text-xs sm:text-sm bg-white border border-[var(--border-light)] focus:border-[var(--accent)] outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full p-3 text-xs sm:text-sm bg-white border border-[var(--border-light)] focus:border-[var(--accent)] outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block mb-1">
                            City / Delivery Location
                          </label>
                          <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="e.g. Jaipur, Delhi, Mumbai"
                            className="w-full p-3 text-xs sm:text-sm bg-white border border-[var(--border-light)] focus:border-[var(--accent)] outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block mb-1">
                          Approx. Quantity (Sq. Ft. / Truckload)
                        </label>
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="e.g. 2,500 sq.ft or 1 full trailer"
                          className="w-full p-3 text-xs sm:text-sm bg-white border border-[var(--border-light)] focus:border-[var(--accent)] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider block mb-1">
                          Specific Requirements or Sizes
                        </label>
                        <textarea
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about thickness, mirror polish vs river wash, project timeline..."
                          className="w-full p-3 text-xs sm:text-sm bg-white border border-[var(--border-light)] focus:border-[var(--accent)] outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="space-y-3 pt-2">
                      <button
                        type="button"
                        onClick={handleWhatsAppSend}
                        className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-2 hover:shadow-md cursor-pointer"
                      >
                        <WhatsAppIcon size={16} />
                        Get Instant Quote on WhatsApp
                      </button>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[var(--primary)] hover:bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
                      >
                        <Send size={15} />
                        Submit Request to Factory
                      </button>
                    </div>
                  </form>
                )}

                {/* Direct Factory Assurances */}
                <div className="mt-8 pt-6 border-t border-[var(--border-light)] space-y-3 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2.5">
                    <Building2 size={15} className="text-[var(--accent)] shrink-0" />
                    <span>Direct supply from Kota, Rajasthan — No middleman commission</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin size={15} className="text-[var(--accent)] shrink-0" />
                    <span>Indraprastha Industrial Area, Kota, Rajasthan 324005</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-[#007AFF] shrink-0" />
                    <a href="tel:+919214567181" className="text-[var(--primary)] font-semibold hover:text-[#007AFF] transition-colors">
                      Call Direct: +91 92145 67181
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
