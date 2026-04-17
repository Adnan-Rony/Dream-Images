import { useState, useRef } from "react";
import { useCloudinary } from "../../hooks/useCloudinary";
import { useAuth } from "../../context/AuthContext";
import { GALLERY_CATEGORIES } from "../../data/gallery";

export default function AdminUploadPanel({ onUploaded, onClose }) {
  const { uploadImage, uploading, progress, error } = useCloudinary();
  const { logout } = useAuth();
  const fileInputRef = useRef(null);

  const [files, setFiles] = useState([]); // [{ file, preview, category, alt, status }]
  const [dragOver, setDragOver] = useState(false);
  const [successCount, setSuccessCount] = useState(0);

  const categories = GALLERY_CATEGORIES.filter((c) => c.id !== "all");

  const addFiles = (rawFiles) => {
    const newEntries = Array.from(rawFiles)
      .filter((f) => f.type.startsWith("image/"))
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        category: "wedding",
        alt: "",
        status: "pending", // pending | uploading | done | error
        url: null,
      }));
    setFiles((prev) => [...prev, ...newEntries]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    addFiles(e.dataTransfer.files);
  };

  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateField = (idx, field, value) => {
    setFiles((prev) =>
      prev.map((f, i) => (i === idx ? { ...f, [field]: value } : f))
    );
  };

  const handleUploadAll = async () => {
    const pending = files.filter((f) => f.status === "pending");
    if (!pending.length) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].status !== "pending") continue;

      setFiles((prev) =>
        prev.map((f, idx) => (idx === i ? { ...f, status: "uploading" } : f))
      );

      const url = await uploadImage(files[i].file);

      if (url) {
        setFiles((prev) =>
          prev.map((f, idx) =>
            idx === i ? { ...f, status: "done", url } : f
          )
        );
        onUploaded({
          src: url,
          category: files[i].category,
          alt: files[i].alt || files[i].category,
        });
        setSuccessCount((c) => c + 1);
      } else {
        setFiles((prev) =>
          prev.map((f, idx) =>
            idx === i ? { ...f, status: "error" } : f
          )
        );
      }
    }
  };

  const pendingCount = files.filter((f) => f.status === "pending").length;

  return (
    <div className="fixed inset-0 z-[9997] flex items-start justify-end bg-black/70 backdrop-blur-sm">
      <div className="bg-[#0F0F0F] border-l border-white/10 w-full max-w-lg h-full overflow-y-auto flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 sticky top-0 bg-[#0F0F0F] z-10">
          <div>
            <p className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase">
              Admin Panel
            </p>
            <h2 className="text-xl font-serif text-white mt-0.5">
              Upload Photos
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              className="text-white/30 hover:text-white/70 text-xs tracking-widest uppercase transition-colors"
            >
              Logout
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 px-6 py-6 space-y-6">

          {/* Drop Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-all ${
              dragOver
                ? "border-[#D4AF37] bg-[#D4AF37]/5"
                : "border-white/15 hover:border-white/30"
            }`}
          >
            <div className="text-4xl mb-3 text-white/20">↑</div>
            <p className="text-white/60 text-sm">
              Drag & drop images here
            </p>
            <p className="text-white/30 text-xs mt-1">
              or click to browse — JPG, PNG, WEBP
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => addFiles(e.target.files)}
            />
          </div>

          {/* Success message */}
          {successCount > 0 && (
            <div className="bg-green-900/20 border border-green-500/30 px-4 py-3 rounded text-green-400 text-sm">
              ✓ {successCount} photo{successCount > 1 ? "s" : ""} uploaded
              successfully to gallery
            </div>
          )}

          {/* Global error */}
          {error && (
            <div className="bg-red-900/20 border border-red-500/30 px-4 py-3 rounded text-red-400 text-sm">
              ✕ {error}
            </div>
          )}

          {/* File List */}
          {files.length > 0 && (
            <div className="space-y-4">
              {files.map((item, idx) => (
                <div
                  key={idx}
                  className={`border rounded-lg overflow-hidden transition-all ${
                    item.status === "done"
                      ? "border-green-500/30 bg-green-900/5"
                      : item.status === "error"
                      ? "border-red-500/30 bg-red-900/5"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex gap-3 p-3">
                    {/* Preview */}
                    <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-black">
                      <img
                        src={item.preview}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                      {item.status === "uploading" && (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                          <div className="text-[#D4AF37] text-xs font-bold">
                            {progress}%
                          </div>
                        </div>
                      )}
                      {item.status === "done" && (
                        <div className="absolute inset-0 bg-green-900/60 flex items-center justify-center">
                          <span className="text-green-400 text-xl">✓</span>
                        </div>
                      )}
                      {item.status === "error" && (
                        <div className="absolute inset-0 bg-red-900/60 flex items-center justify-center">
                          <span className="text-red-400 text-xl">✕</span>
                        </div>
                      )}
                    </div>

                    {/* Fields */}
                    <div className="flex-1 space-y-2">
                      <p className="text-white/50 text-xs truncate">
                        {item.file.name}
                      </p>
                      <select
                        value={item.category}
                        onChange={(e) =>
                          updateField(idx, "category", e.target.value)
                        }
                        disabled={item.status !== "pending"}
                        className="w-full bg-[#1a1a1a] border border-white/15 text-white/80 text-xs px-3 py-2 focus:outline-none focus:border-[#D4AF37] disabled:opacity-50"
                      >
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        value={item.alt}
                        onChange={(e) =>
                          updateField(idx, "alt", e.target.value)
                        }
                        disabled={item.status !== "pending"}
                        placeholder="Caption (optional)"
                        className="w-full bg-[#1a1a1a] border border-white/15 text-white/80 text-xs px-3 py-2 focus:outline-none focus:border-[#D4AF37] disabled:opacity-50 placeholder:text-white/20"
                      />
                    </div>

                    {/* Remove */}
                    {item.status === "pending" && (
                      <button
                        onClick={() => removeFile(idx)}
                        className="text-white/20 hover:text-red-400 transition-colors self-start text-sm mt-1"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Progress bar */}
                  {item.status === "uploading" && (
                    <div className="h-0.5 bg-white/10">
                      <div
                        className="h-full bg-[#D4AF37] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {files.length > 0 && (
          <div className="sticky bottom-0 bg-[#0F0F0F] border-t border-white/10 px-6 py-4 flex gap-3">
            <button
              onClick={() => setFiles([])}
              className="flex-1 py-3 border border-white/20 text-white/50 text-sm tracking-widest hover:border-white/40 hover:text-white/80 transition-all"
            >
              Clear All
            </button>
            <button
              onClick={handleUploadAll}
              disabled={uploading || pendingCount === 0}
              className="flex-1 py-3 bg-[#D4AF37] text-black text-sm font-bold tracking-widest disabled:opacity-40 hover:bg-[#c9a430] transition-colors"
            >
              {uploading
                ? `Uploading...`
                : `Upload ${pendingCount > 0 ? pendingCount : ""} Photo${pendingCount !== 1 ? "s" : ""}`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
