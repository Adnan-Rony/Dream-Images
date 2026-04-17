// src/components/sections/Gallery.jsx
import { useState } from "react";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "../../data/gallery.js";
import Lightbox from "../ui/Lightbox.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useGallery } from "../../hooks/useGallery";
import { Link } from "react-router-dom";
import AdminLogin from "../admin/AdminLogin.jsx";

const HOME_LIMIT = 8;

export default function Gallery() {
  const { isAdmin } = useAuth();
  const {
    images: uploadedImages,
    loading,
    uploadNewImage,
    deleteImage,
    uploading,
  } = useGallery();

  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showUploadBox, setShowUploadBox] = useState(false);

  // Upload States
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageCategories, setImageCategories] = useState({}); // Per image category
  const [story, setStory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Merge static + uploaded images
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

  const handleAdminClick = () => {
    if (isAdmin) setShowUploadBox(true);
    else setShowLogin(true);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    
    // Initialize default category for each file
    const initialCategories = {};
    files.forEach((file, index) => {
      initialCategories[index] = "wedding";
    });
    setImageCategories(initialCategories);
  };

  const handleCategoryChange = (index, category) => {
    setImageCategories(prev => ({
      ...prev,
      [index]: category
    }));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setIsUploading(true);
    setUploadSuccess(false);

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const category = imageCategories[i] || "wedding";
        
        await uploadNewImage(file, category, story || undefined);
      }

      setUploadSuccess(true);
      
      // Auto hide success message after 3 seconds
      setTimeout(() => {
        setUploadSuccess(false);
        setShowUploadBox(false);
        setSelectedFiles([]);
        setStory("");
        setImageCategories({});
      }, 3000);

    } catch (error) {
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this image?")) {
      await deleteImage(id);
    }
  };

  return (
    <section className="bg-[#0F0F0F] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-serif">Our Gallery</h1>

          <button
            onClick={handleAdminClick}
            className={`px-6 py-2 border text-sm tracking-widest transition-all ${
              isAdmin
                ? "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                : "border-white/20 text-white/40 hover:border-white/40"
            }`}
          >
            {isAdmin ? "Upload Images +" : "Admin"}
          </button>
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

                {isAdmin && isUploaded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(img.id);
                    }}
                    className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* View Full Gallery */}
        <div className="text-center mt-16">
          <Link to="/gallery/full">
            <button className="border border-[#D4AF37] text-[#D4AF37] px-12 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
              View Full Gallery →
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

        {/* ==================== PREMIUM UPLOAD MODAL ==================== */}
        {showUploadBox && isAdmin && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[100] p-4">
            <div className="w-full max-w-lg bg-[#111111] border border-[#D4AF37]/20 rounded-3xl overflow-hidden">
              
              {/* Header */}
              <div className="px-8 py-6 border-b border-white/10 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-light">Upload New Moments</h2>
                  <p className="text-white/50 text-sm mt-1">Add beautiful memories to your gallery</p>
                </div>
                <button onClick={() => setShowUploadBox(false)} className="text-3xl text-white/60 hover:text-white">✕</button>
              </div>

              <div className="p-8 space-y-8">
                {/* Multiple File Upload */}
                <label className="block border-2 border-dashed border-white/20 hover:border-[#D4AF37]/60 rounded-2xl p-12 text-center cursor-pointer transition-all group">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="space-y-4">
                    <div className="mx-auto w-20 h-20 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                      📸
                    </div>
                    <p className="text-white text-lg font-light">Click or drop images here</p>
                    <p className="text-white/50 text-sm">Multiple images supported</p>
                    {selectedFiles.length > 0 && (
                      <p className="text-[#D4AF37] font-medium">
                        {selectedFiles.length} image{selectedFiles.length > 1 ? "s" : ""} selected
                      </p>
                    )}
                  </div>
                </label>

                {/* Per Image Category Selection */}
                {selectedFiles.length > 0 && (
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Assign Category to Each Image</p>
                    <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                          <div className="text-xs text-white/70 w-20 truncate">{file.name}</div>
                          <select
                            value={imageCategories[index] || "wedding"}
                            onChange={(e) => handleCategoryChange(index, e.target.value)}
                            className="flex-1 bg-black border border-white/10 rounded-lg px-4 py-2 text-sm text-white"
                          >
                            <option value="wedding">Wedding</option>
                            <option value="portrait">Portrait</option>
                            <option value="event">Event</option>
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Story / Caption */}
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Story / Caption (Optional)</p>
                  <textarea
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    placeholder="Write a short memory or story about these photos..."
                    className="w-full h-28 bg-black border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:border-[#D4AF37]/50 outline-none resize-y"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="border-t border-white/10 p-6 flex gap-4">
                <button
                  onClick={() => setShowUploadBox(false)}
                  className="flex-1 py-4 border border-white/20 rounded-2xl text-white/70 hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  disabled={selectedFiles.length === 0 || isUploading}
                  className={`flex-1 py-4 rounded-2xl font-medium transition-all ${
                    selectedFiles.length > 0 && !isUploading
                      ? "bg-[#D4AF37] text-black hover:bg-white"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  {isUploading ? "Uploading..." : `Upload ${selectedFiles.length} Photo${selectedFiles.length !== 1 ? "s" : ""}`}
                </button>
              </div>

              {/* Success Message */}
              {uploadSuccess && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 shadow-lg">
                  ✅ Images uploaded successfully!
                </div>
              )}
            </div>
          </div>
        )}

        {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}
      </div>
    </section>
  );
}