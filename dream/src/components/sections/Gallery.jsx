import { useState } from "react";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "../../data/gallery.js";
import Lightbox from "../ui/Lightbox.jsx";

import AdminLogin from "../admin/AdminLogin.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useGallery } from "../../hooks/useGallery";

const ITEMS_PER_PAGE = 9;

export default function Gallery() {
  const { isAdmin } = useAuth();

  const {
    images: uploadedImages,
    loading,
    uploadNewImage,
    deleteImage,
    uploading,
    uploadError,
  } = useGallery();

  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImage, setLightboxImage] = useState(null);

  const [showLogin, setShowLogin] = useState(false);
  const [showUploadBox, setShowUploadBox] = useState(false);

  // upload states
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Merge images
  const allImages = [
    ...GALLERY_IMAGES,
    ...uploadedImages.map((img) => ({
      id: img.id,
      src: img.src,
      alt: img.alt || "Gallery image",
      category: img.category || "all",
    })),
  ];

  const filteredImages =
    activeFilter === "all"
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = filteredImages.slice(start, start + ITEMS_PER_PAGE);

  // LIGHTBOX
  const handlePrev = () => {
    if (!lightboxImage) return;
    const idx = filteredImages.findIndex((i) => i.id === lightboxImage.id);
    if (idx > 0) setLightboxImage(filteredImages[idx - 1]);
  };

  const handleNext = () => {
    if (!lightboxImage) return;
    const idx = filteredImages.findIndex((i) => i.id === lightboxImage.id);
    if (idx < filteredImages.length - 1)
      setLightboxImage(filteredImages[idx + 1]);
  };

  // ADMIN BUTTON CLICK
  const handleAdminClick = () => {
    if (isAdmin) setShowUploadBox(true);
    else setShowLogin(true);
  };

  // FILE CHANGE (IMPORTANT FIX HERE)
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
  };

  // UPLOAD IMAGE (FIXED FLOW)
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    const result = await uploadNewImage(selectedFile, selectedCategory);

    if (result) {
      setSelectedFile(null);
      setShowUploadBox(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this image?")) {
      await deleteImage(id);
    }
  };

  return (
    <section className="bg-[#0F0F0F] text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-center relative mb-12">
          <h1 className="text-5xl font-serif">Gallery</h1>

          <button
            onClick={handleAdminClick}
            className={`absolute right-0 w-10 h-10 border flex items-center justify-center ${
              isAdmin
                ? "border-yellow-500 text-yellow-500"
                : "border-white/20 text-white/40"
            }`}
          >
            {isAdmin ? "+" : "⚙"}
          </button>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.id);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 border text-sm uppercase ${
                activeFilter === cat.id
                  ? "bg-yellow-500 text-black"
                  : "border-white/20 text-white/70"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* UPLOAD BOX (INSIDE SAME FILE) */}
        {/* PREMIUM UPLOAD MODAL */}
{showUploadBox && isAdmin && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
    
    <div className="w-[420px] bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 shadow-2xl">

      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-light tracking-wide">
          Upload Moment
        </h2>
        <p className="text-white/40 text-sm mt-1">
          Add a new memory to your gallery
        </p>
      </div>

      {/* File Input Box */}
      <label className="flex flex-col items-center justify-center border border-dashed border-white/20 rounded-xl p-8 cursor-pointer hover:border-white/40 transition">
        
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="text-center">
          <p className="text-white/70 text-sm">
            {selectedFile ? selectedFile.name : "Click to upload image"}
          </p>
          <p className="text-white/30 text-xs mt-1">
            PNG, JPG up to 10MB
          </p>
        </div>
      </label>

      {/* Category */}
      <div className="mt-5">
        <p className="text-xs text-white/40 mb-2">Category</p>

        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none"
        >
          <option value="all">All</option>
          <option value="wedding">Wedding</option>
          <option value="portrait">Portrait</option>
          <option value="event">Event</option>
        </select>
      </div>

      {/* Upload status */}
      {uploading && (
        <div className="mt-4 text-center">
          <p className="text-yellow-400 text-sm animate-pulse">
            Uploading...
          </p>
        </div>
      )}

      {uploadError && (
        <p className="text-red-500 text-xs mt-3 text-center">
          {uploadError}
        </p>
      )}

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        
        <button
          onClick={() => setShowUploadBox(false)}
          className="flex-1 py-2.5 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition"
        >
          Cancel
        </button>

        <button
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
          className={`flex-1 py-2.5 rounded-lg font-medium transition ${
            selectedFile && !uploading
              ? "bg-white text-black hover:bg-white/90"
              : "bg-white/10 text-white/30 cursor-not-allowed"
          }`}
        >
          Upload
        </button>

      </div>
    </div>
  </div>
)}

        {/* LOADING */}
        {loading && (
          <p className="text-center text-white/50 py-20">
            Loading...
          </p>
        )}

        {/* GRID */}
        {!loading && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {currentImages.map((img) => {
              const isUploaded = typeof img.id === "string";

              return (
                <div
                  key={img.id}
                  className="mb-6 relative cursor-pointer group"
                  onClick={() => setLightboxImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full rounded-lg transition-transform group-hover:scale-105"
                  />

                  {/* DELETE BUTTON */}
                  {isAdmin && isUploaded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(img.id);
                      }}
                      className="absolute top-2 right-2 bg-red-600 text-white w-7 h-7 opacity-0 group-hover:opacity-100"
                    >
                      ✕
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && currentImages.length === 0 && (
          <p className="text-center text-white/30 py-20">
            No images found
          </p>
        )}

        {/* PAGINATION */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border ${
                  currentPage === i + 1
                    ? "bg-yellow-500 text-black"
                    : "border-white/20"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* LIGHTBOX */}
        <Lightbox
          image={lightboxImage}
          images={filteredImages}
          onClose={() => setLightboxImage(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {/* ADMIN LOGIN */}
        {showLogin && (
          <AdminLogin onClose={() => setShowLogin(false)} />
        )}
      </div>
    </section>
  );
}