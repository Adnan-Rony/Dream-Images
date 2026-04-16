import { useEffect } from 'react';

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/70 hover:text-white text-4xl transition-colors"
        aria-label="Close"
      >
        ✕
      </button>

      <img 
        src={image.src} 
        alt={image.alt} 
        className="max-w-full max-h-[92vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}