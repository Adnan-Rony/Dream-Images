import { useEffect, useCallback } from 'react';

export default function Lightbox({ 
  image, 
  images = [], 
  onClose, 
  onPrev, 
  onNext 
}) {
  
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight' && onNext) onNext();
    if (e.key === 'ArrowLeft' && onPrev) onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    if (!image) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.paddingRight = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  const currentIndex = images.findIndex((img) => img.id === image.id);
  const total = images.length;

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center overflow-hidden"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-11 h-11 border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all text-xl"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Counter */}
      {total > 1 && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 text-white/50 text-xs tracking-[0.3em] uppercase">
          {currentIndex + 1} / {total}
        </div>
      )}

      {/* Prev Button */}
      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 md:left-12 z-20 w-14 h-14 border border-white/30 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all text-3xl"
          aria-label="Previous"
        >
          ←
        </button>
      )}

      {/* Image Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center p-6 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-6xl w-full">
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="max-h-[88vh] w-full object-contain rounded-lg"
            style={{ animation: 'lightboxFadeIn 0.3s ease' }}
          />

          {/* Caption */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
            <p className="text-white/70 text-base tracking-wide">{image.alt}</p>
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] border border-[#D4AF37]/50 px-5 py-1.5 inline-block">
              {image.category}
            </span>
          </div>
        </div>
      </div>

      {/* Next Button */}
      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 md:right-12 z-20 w-14 h-14 border border-white/30 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all text-3xl"
          aria-label="Next"
        >
          →
        </button>
      )}

      <style jsx>{`
        @keyframes lightboxFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}