import { useState } from 'react';
import { GALLERY_IMAGES } from '../../data/gallery';
import Lightbox from '../ui/Lightbox';
import SectionHeader from '../common/SectionHeader';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages = activeFilter === "all" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="bg-[#F9F5EE] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Portfolio" title="Our Work" />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {["all", "wedding", "portrait", "event"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3.5 text-sm uppercase tracking-widest border transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
                  : 'border-[#E5D9C0] text-[#5A5A5A] hover:border-[#1A1A1A]'
              }`}
            >
              {filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightboxImage(img)}
              className="group relative mb-6 overflow-hidden cursor-pointer break-inside-avoid rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <p className="text-white text-sm tracking-widest uppercase font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
}