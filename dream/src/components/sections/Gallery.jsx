// src/components/sections/Gallery.jsx
import { useState } from "react";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "../../data/gallery.js";
import Lightbox from "../ui/Lightbox.jsx";
import { useGallery } from "../../hooks/useGallery";
import { Link } from "react-router-dom";

const HOME_LIMIT = 8;

export default function Gallery() {
  const {
    images: uploadedImages,
    // loading,     // You can keep if needed for future loading state
  } = useGallery();

  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  // Merge static images + uploaded images
  const allImages = [
    ...GALLERY_IMAGES,
    ...uploadedImages.map((img) => ({
      id: img.id,
      src: img.src,
      alt: img.alt || "Gallery image",
      category: img.category || "wedding",
    })),
  ];

  const filteredImages =
    activeFilter === "all"
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  const displayImages = filteredImages.slice(0, HOME_LIMIT);

  return (
    <section id="gallery" className="bg-[#0F0F0F] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="lg:text-5xl text-center text-2xl font-serif">Our Gallery</h1>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-7 py-3 border text-xs uppercase tracking-widest transition-all ${
                activeFilter === cat.id
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "border-white/20 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {displayImages.map((img) => {
            const isUploaded = typeof img.id === "string";

            return (
              <div
                key={img.id}
                className="mb-6 break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setLightboxImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />

                {/* Delete button only visible to admin for uploaded images */}
                {/* Note: Since admin logic is now in Footer, you may want to pass isAdmin as prop later if needed */}
              </div>
            );
          })}
        </div>

        {/* View Full Gallery */}
        <div className="text-center mt-16">
          <Link to="/gallery/full">
            <button className="border border-[#D4AF37] text-[#D4AF37] px-12 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
              View Full Gallery 
            </button>
          </Link>
        </div>

        {/* Lightbox */}
        <Lightbox
          image={lightboxImage}
          images={filteredImages}
          onClose={() => setLightboxImage(null)}
          onPrev={() => {
            const idx = filteredImages.findIndex((i) => i.id === lightboxImage?.id);
            if (idx > 0) setLightboxImage(filteredImages[idx - 1]);
          }}
          onNext={() => {
            const idx = filteredImages.findIndex((i) => i.id === lightboxImage?.id);
            if (idx < filteredImages.length - 1) setLightboxImage(filteredImages[idx + 1]);
          }}
        />
      </div>
    </section>
  );
}