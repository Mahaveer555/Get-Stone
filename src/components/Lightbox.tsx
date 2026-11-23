import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import type { GalleryItem } from '../data/products';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Stone Photo Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in p-4 sm:p-8"
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-sandstone">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-xs uppercase tracking-wider text-stonegray hidden sm:inline">
            • {currentItem.categoryLabel}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-sandstone hover:text-charcoal transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-sandstone hover:text-charcoal transition-colors hidden sm:flex items-center justify-center"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center">
        <img
          src={currentItem.image}
          alt={currentItem.alt}
          className="max-h-[72vh] max-w-full object-contain rounded-sm shadow-2xl border border-white/10"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h4 className="font-display text-xl sm:text-2xl text-white font-medium">
            {currentItem.title}
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-ivory/80">
            {currentItem.description}
          </p>
          {currentItem.illustrativeNote && (
            <p className="mt-1 text-[11px] text-sandstone/70 flex items-center justify-center gap-1 font-mono">
              <Info className="w-3 h-3" />
              {currentItem.illustrativeNote}
            </p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-sandstone hover:text-charcoal transition-colors hidden sm:flex items-center justify-center"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Mobile Bottom Arrows */}
      <div className="sm:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-6">
        <button
          onClick={onPrev}
          className="px-5 py-2 bg-white/10 text-white text-xs uppercase tracking-wider flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <button
          onClick={onNext}
          className="px-5 py-2 bg-white/10 text-white text-xs uppercase tracking-wider flex items-center gap-1"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
