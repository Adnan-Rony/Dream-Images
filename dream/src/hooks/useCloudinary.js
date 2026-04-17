import { useState } from "react";

export function useCloudinary() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  // 🔥 Compress image safely
  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      if (!file || !(file instanceof Blob)) {
        reject(new Error("Invalid file passed to compression"));
        return;
      }

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (event) => {
        const img = new Image();

        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const MAX_WIDTH = 1200;

          const scale = MAX_WIDTH / img.width;

          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scale;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Compression failed"));
                return;
              }
              resolve(blob);
            },
            "image/jpeg",
            0.7
          );
        };

        img.onerror = reject;
      };

      reader.onerror = reject;
    });
  };

  // 🔥 Upload to Cloudinary
  const uploadImage = async (file) => {
    try {
      setUploading(true);
      setProgress(0);
      setError(null);

      // ✅ VALIDATION (IMPORTANT FIX)
      if (!file || !(file instanceof File)) {
        throw new Error("No valid file provided to uploadImage");
      }

      // 1. Compress
      const compressedFile = await compressImage(file);

      const formData = new FormData();
      formData.append("file", compressedFile);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
      );

      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

      // 2. Upload
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!data.secure_url) {
        throw new Error("Cloudinary upload failed");
      }

      setUploading(false);
      return data.secure_url;
    } catch (err) {
      console.error("Cloudinary error:", err);
      setError(err.message);
      setUploading(false);
      return null;
    }
  };

  return {
    uploadImage,
    uploading,
    progress,
    error,
  };
}