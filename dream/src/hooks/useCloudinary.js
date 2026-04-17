import { useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export function useCloudinary() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  // Helper: Compress and resize image client-side
  const compressImage = (file, maxWidth = 1200, quality = 0.75) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          // Maintain aspect ratio and limit max width
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          // Convert to Blob (compressed JPEG by default, falls back to PNG if needed)
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Compression failed"));
                return;
              }

              // Create new File object with original name + .jpg extension
              const compressedFile = new File(
                [blob],
                file.name.replace(/\.[^/.]+$/, "") + ".jpg",
                { type: "image/jpeg" }
              );

              resolve(compressedFile);
            },
            "image/jpeg",
            quality   // 0.75 = good balance between size and quality
          );
        };

        img.onerror = () => reject(new Error("Failed to load image"));
      };

      reader.onerror = () => reject(new Error("Failed to read file"));
    });
  };

  const uploadImage = async (file) => {
    setUploading(true);
    setProgress(0);
    setError(null);

    try {
      // Step 1: Compress the image first
      const compressedFile = await compressImage(file, 1200, 0.75);

      console.log(`Original: ${(file.size / 1024 / 1024).toFixed(2)} MB → Compressed: ${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`);

      const formData = new FormData();
      formData.append("file", compressedFile);
      formData.append("upload_preset", UPLOAD_PRESET);

      // Optional: You can still set transformation in preset for extra optimization
      // formData.append("transformation", "c_limit,w_1200,q_auto,f_auto"); // but may not work with unsigned

      const url = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            setProgress(Math.round((e.loaded / e.total) * 100));
          }
        };

        xhr.onload = () => {
          const data = JSON.parse(xhr.responseText);
          if (xhr.status === 200) {
            resolve(data.secure_url);
          } else {
            reject(new Error(data.error?.message || "Upload failed"));
          }
        };

        xhr.onerror = () => reject(new Error("Network error during upload"));

        xhr.open(
          "POST",
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        );
        xhr.send(formData);
      });

      return url;
    } catch (err) {
      setError(err.message);
      console.error(err);
      return null;
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  return { uploadImage, uploading, progress, error };
}