import { useState } from "react";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "../../data/gallery.js";
import Lightbox from "../ui/Lightbox.jsx";

const ITEMS_PER_PAGE = 9;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Filtered images
  const filteredImages =
    activeFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = filteredImages.slice(start, start + ITEMS_PER_PAGE);

  // Lightbox Navigation (Simple functions - No useCallback)
  const handlePrev = () => {
    if (!lightboxImage) return;
    const currentIdx = filteredImages.findIndex(
      (img) => img.id === lightboxImage.id
    );
    if (currentIdx > 0) {
      setLightboxImage(filteredImages[currentIdx - 1]);
    }
  };

  const handleNext = () => {
    if (!lightboxImage) return;
    const currentIdx = filteredImages.findIndex(
      (img) => img.id === lightboxImage.id
    );
    if (currentIdx < filteredImages.length - 1) {
      setLightboxImage(filteredImages[currentIdx + 1]);
    }
  };

  return (
    <section id="gallery" className="bg-[#0F0F0F] text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-serif text-center mb-12">Full Gallery</h1>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.id);
                setCurrentPage(1);
              }}
              className={`px-8 py-3 border text-sm uppercase tracking-widest transition-all ${
                activeFilter === cat.id
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "border-white/20 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {currentImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightboxImage(img)}
              className="mb-6 break-inside-avoid cursor-pointer rounded-xl overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-3">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-5 py-2.5 border text-sm transition-all ${
                  currentPage === i + 1
                    ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                    : "border-white/20 text-white/70 hover:border-white/40"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        <p className="text-center text-white/40 text-sm mt-10">
          Showing {currentImages.length} of {filteredImages.length} photos
        </p>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={lightboxImage}
        images={filteredImages}
        onClose={() => setLightboxImage(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}