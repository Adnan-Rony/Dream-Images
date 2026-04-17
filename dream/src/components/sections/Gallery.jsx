import { useState } from "react";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "../../data/gallery.js";
import Lightbox from "../ui/Lightbox.jsx";

import AdminLogin from "../admin/AdminLogin.jsx";
import AdminUploadPanel from "../admin/AdminUploadPanel.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

const ITEMS_PER_PAGE = 9;

// Load previously uploaded images from localStorage
function loadUploadedImages() {
  try {
    return JSON.parse(localStorage.getItem("kayem_gallery_uploads") || "[]");
  } catch {
    return [];
  }
}

export default function Gallery() {
  const { isAdmin } = useAuth();

  const [uploadedImages, setUploadedImages] = useState(loadUploadedImages);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  // Merge static + uploaded images
  const allImages = [
    ...GALLERY_IMAGES,
    ...uploadedImages.map((img, i) => ({ id: 10000 + i, ...img })),
  ];

  const filteredImages =
    activeFilter === "all"
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = filteredImages.slice(start, start + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (!lightboxImage) return;
    const idx = filteredImages.findIndex((img) => img.id === lightboxImage.id);
    if (idx > 0) setLightboxImage(filteredImages[idx - 1]);
  };

  const handleNext = () => {
    if (!lightboxImage) return;
    const idx = filteredImages.findIndex((img) => img.id === lightboxImage.id);
    if (idx < filteredImages.length - 1) setLightboxImage(filteredImages[idx + 1]);
  };

  // Called when admin uploads a new image
  const handleUploaded = (newImg) => {
    const updated = [...uploadedImages, newImg];
    setUploadedImages(updated);
    localStorage.setItem("kayem_gallery_uploads", JSON.stringify(updated));
  };

  // Admin delete uploaded photo
  const handleDelete = (imgId) => {
    const updated = uploadedImages.filter((_, i) => 10000 + i !== imgId);
    setUploadedImages(updated);
    localStorage.setItem("kayem_gallery_uploads", JSON.stringify(updated));
  };

  const handleAdminClick = () => {
    if (isAdmin) {
      setShowUpload(true);
    } else {
      setShowLogin(true);
    }
  };

  return (
    <section id="gallery" className="bg-[#0F0F0F] text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title row with admin button */}
        <div className="flex items-center justify-center relative mb-12">
          <h1 className="text-5xl font-serif text-center">Gallery</h1>
          <button
            onClick={handleAdminClick}
            title={isAdmin ? "Upload Photos" : "Admin Login"}
            className={`absolute right-0 w-9 h-9 border flex items-center justify-center text-xs transition-all ${
              isAdmin
                ? "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                : "border-white/15 text-white/20 hover:border-white/30 hover:text-white/40"
            }`}
          >
            {isAdmin ? "+" : "⚙"}
          </button>
        </div>

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
          {currentImages.map((img) => {
            const isUploaded = img.id >= 10000;
            return (
              <div
                key={img.id}
                className="mb-6 break-inside-avoid cursor-pointer rounded-xl overflow-hidden group relative"
                onClick={() => setLightboxImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Admin delete button on uploaded photos */}
                {isAdmin && isUploaded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(img.id);
                    }}
                    className="absolute top-2 right-2 w-7 h-7 bg-red-600/80 hover:bg-red-600 text-white text-xs flex items-center justify-center rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Delete photo"
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {currentImages.length === 0 && (
          <div className="text-center py-24 text-white/30">
            <p className="text-lg">No photos in this category yet.</p>
            {isAdmin && (
              <button
                onClick={() => setShowUpload(true)}
                className="mt-4 text-[#D4AF37] text-sm underline"
              >
                Upload photos
              </button>
            )}
          </div>
        )}

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

      {/* Admin Login Modal */}
      {showLogin && (
        <AdminLogin onClose={() => setShowLogin(false)} />
      )}

      {/* Admin Upload Panel */}
      {showUpload && isAdmin && (
        <AdminUploadPanel
          onUploaded={handleUploaded}
          onClose={() => setShowUpload(false)}
        />
      )}
    </section>
  );
}
