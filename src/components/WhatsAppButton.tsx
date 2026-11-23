import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ customMessage }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const encodedMessage = encodeURIComponent(
    customMessage ||
      "Hello GET STONE, I am interested in your natural stone products (Sandstone, Kota Stone, Bijolia, Basalt). Please share more details."
  );

  const href = `https://wa.me/919214567181?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Optional Help Pill */}
      {showTooltip && (
        <div className="bg-charcoal text-ivory text-xs px-4 py-2.5 shadow-xl border border-sandstone/30 flex items-center gap-3 animate-fade-in mb-1 max-w-xs">
          <span>Chat directly with GET STONE on WhatsApp for instant stone enquiries.</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stonegray hover:text-white"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat with GET STONE on WhatsApp"
        className="group relative flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon size={20} />
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
          WhatsApp Us
        </span>

        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 group-hover:hidden" />
      </a>
    </div>
  );
};
