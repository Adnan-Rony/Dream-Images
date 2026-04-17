// src/components/sections/Footer.jsx
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useGallery } from "../../hooks/useGallery";
import AdminLogin from "../admin/AdminLogin.jsx";

export default function Footer() {
  const { isAdmin } = useAuth();
  const { uploadNewImage } = useGallery();

  const [showLogin, setShowLogin] = useState(false);
  const [showUploadBox, setShowUploadBox] = useState(false);

  // Upload States
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageCategories, setImageCategories] = useState({});
  const [story, setStory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const MAX_IMAGES = 8;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const QUICK_LINKS = [
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Packages", id: "packages" },
    { label: "Awards", id: "awards" },
    { label: "FAQ", id: "faq" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleAdminClick = () => {
    if (isAdmin) {
      setShowUploadBox(true);
    } else {
      setShowLogin(true);
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);

    const initialCategories = {};
    files.forEach((_, index) => {
      initialCategories[index] = "wedding";
    });
    setImageCategories(initialCategories);
    setStory("");
  };

  const handleCategoryChange = (index, category) => {
    setImageCategories((prev) => ({ ...prev, [index]: category }));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0 || selectedFiles.length > MAX_IMAGES) return;

    setIsUploading(true);
    setUploadSuccess(false);

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const category = imageCategories[i] || "wedding";
        await uploadNewImage(file, category, story.trim() || undefined);
      }

      setUploadSuccess(true);

      setTimeout(() => {
        setUploadSuccess(false);
        setShowUploadBox(false);
        setSelectedFiles([]);
        setImageCategories({});
        setStory("");
      }, 2200);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const resetModal = () => {
    setShowUploadBox(false);
    setSelectedFiles([]);
    setImageCategories({});
    setStory("");
  };

  const canUpload = selectedFiles.length > 0 && 
                    selectedFiles.length <= MAX_IMAGES && 
                    !isUploading;

  return (
    <footer className="bg-[#0A0A0A] text-white/60 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="font-serif text-5xl font-light text-white mb-4 tracking-tight">
              Dream <span className="italic text-[#D4AF37]">Image</span>
            </div>
            <p className="text-white/40 leading-relaxed max-w-md">
              Professional photography that captures life's most meaningful moments. 
              Based in Dhaka, Bangladesh.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a 
                href="https://www.instagram.com/dream_images.bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.327.273 2.78.077 7.072.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.196 4.292 2.688 6.746 7.048 6.942 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.196 6.782-2.692 6.979-6.942.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.292-2.69-6.746-6.979-6.942C15.668.014 15.259 0 12 0z"/>
                </svg>
              </a>

              <a 
                href="https://www.facebook.com/bddreamimages" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:border-[#1877F2] hover:text-[#1877F2] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>

              <a 
                href="https://wa.me/+8801880719315" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:border-[#25D366] hover:text-[#25D366] transition-all text-2xl"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs uppercase tracking-[2px] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)} 
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Studio Access */}
          <div className="md:col-span-4">
            <h4 className="text-white text-xs uppercase tracking-[2px] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><span className="text-[#D4AF37]">📍</span> Savar, Dhaka, Bangladesh</li>
              <li className="flex gap-3"><span className="text-[#D4AF37]">📞</span> 
                <a href="tel:+8801880719315" className="hover:text-white">+880 18807 19315</a>
              </li>
              <li className="flex gap-3"><span className="text-[#D4AF37]">✉️</span> 
                <a href="mailto:dreamimages47@gmail.com" className="hover:text-white">dreamimages47@gmail.com</a>
              </li>
              <li className="flex gap-3"><span className="text-[#D4AF37]">⏰</span> Sat–Thu, 9AM–8PM</li>
            </ul>

            {/* Subtle Premium Admin Button */}
            <div className="mt-12">
              <button
                onClick={handleAdminClick}
                className="group flex items-center gap-2 text-xs uppercase tracking-[1.5px] text-white/40 hover:text-white/70 transition-all"
              >
                <span className="w-6 h-px bg-white/30 group-hover:bg-[#D4AF37]"></span>
                STUDIO ACCESS
                <span className="w-6 h-px bg-white/30 group-hover:bg-[#D4AF37]"></span>
              </button>
            </div>
          </div>
        </div>

                {/* Bottom Bar - Updated */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            Developed by{" "}
            <a 
              href="https://wa.me/+8801747430447" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D4AF37] transition-colors"
            >
              Adnan Rony
            </a>
          </p>
          <p>© {new Date().getFullYear()} Dream Image. All rights reserved.</p>
        </div>
      </div>

      {/* Admin Login Modal */}
      {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}

      {/* Premium Upload Modal */}
      {showUploadBox && isAdmin && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[200] flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-3xl bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 md:px-10 py-6 border-b border-white/10 flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-2xl md:text-4xl font-light tracking-tight text-white">Upload New Moments</h2>
                <p className="text-white/60 mt-1 text-sm">Add beautiful memories to the gallery</p>
              </div>
              <button 
                onClick={resetModal}
                className="text-3xl md:text-4xl text-white/50 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto p-6 md:p-10 space-y-8 custom-scroll">
              {/* Drag & Drop Area */}
              <label className="block border-2 border-dashed border-white/30 hover:border-[#D4AF37]/70 rounded-3xl p-12 md:p-16 text-center cursor-pointer transition-all group">
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
                <div className="space-y-6">
                  <div className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                    📸
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-light text-white">Drop images or click to select</p>
                    <p className="text-white/50 mt-2">Multiple images supported • Max {MAX_IMAGES} recommended at once</p>
                  </div>
                  {selectedFiles.length > 0 && (
                    <p className="text-[#D4AF37] text-lg font-medium">
                      {selectedFiles.length} image{selectedFiles.length > 1 ? "s" : ""} selected
                    </p>
                  )}
                </div>
              </label>

              {/* Selected Images - Horizontal Scroll on Mobile */}
              {selectedFiles.length > 0 && (
                <div className="space-y-5">
                  <p className="uppercase tracking-widest text-xs text-white/60">Customize Each Image</p>
                  <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory custom-scroll -mx-1 px-1">
                    {selectedFiles.map((file, index) => (
                      <div 
                        key={index} 
                        className="min-w-[280px] sm:min-w-[320px] bg-[#161616] rounded-2xl p-5 border border-white/10 snap-start flex-shrink-0"
                      >
                        <div className="flex gap-5">
                          <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border border-white/10">
                            <img 
                              src={URL.createObjectURL(file)} 
                              alt={file.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium truncate">{file.name}</p>
                            <p className="text-white/50 text-xs mt-1">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                            <div className="mt-6">
                              <label className="text-white/60 text-xs block mb-2">Category</label>
                              <select
                                value={imageCategories[index] || "wedding"}
                                onChange={(e) => handleCategoryChange(index, e.target.value)}
                                className="w-full bg-black border border-white/20 rounded-2xl px-5 py-3 text-white focus:border-[#D4AF37] outline-none"
                              >
                                <option value="wedding">Wedding</option>
                                <option value="portrait">Portrait</option>
                                <option value="event">Event</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Story / Caption */}
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Story / Caption (optional)</p>
                <textarea
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  placeholder="Write a short memory or story about these moments..."
                  className="w-full h-32 md:h-40 bg-black border border-white/10 rounded-3xl px-6 py-5 text-white placeholder-white/40 focus:border-[#D4AF37] resize-y outline-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-white/10 p-6 md:p-8 shrink-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={resetModal}
                  className="flex-1 py-4 border border-white/20 rounded-2xl text-white/70 hover:bg-white/5 transition-colors font-medium"
                >
                  Cancel
                </button>

                {selectedFiles.length > MAX_IMAGES ? (
                  <div className="flex-1 py-4 bg-red-500/10 text-red-400 rounded-2xl text-center text-sm font-medium flex items-center justify-center">
                    Too many images ({selectedFiles.length}/{MAX_IMAGES}). Please upload in smaller batches.
                  </div>
                ) : (
                  <button
                    onClick={handleUpload}
                    disabled={!canUpload}
                    className={`flex-1 py-4 rounded-2xl font-medium transition-all ${
                      canUpload
                        ? "bg-[#D4AF37] hover:bg-white text-black"
                        : "bg-white/10 text-white/40 cursor-not-allowed"
                    }`}
                  >
                    {isUploading 
                      ? "Uploading..." 
                      : `Upload ${selectedFiles.length} Image${selectedFiles.length !== 1 ? "s" : ""}`}
                  </button>
                )}
              </div>
            </div>

            {/* Success Message */}
            {uploadSuccess && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-10 py-4 rounded-2xl text-sm flex items-center gap-3 shadow-2xl">
                ✅ All images uploaded successfully!
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}