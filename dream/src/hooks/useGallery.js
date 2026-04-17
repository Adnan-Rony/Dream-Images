import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useCloudinary } from "./useCloudinary";

export function useGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { uploadImage, uploading, progress, error } = useCloudinary();

  const fetchImages = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("gallery_uploads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setImages(data || []);
    }

    setLoading(false);
  };

  // ✅ FIXED UPLOAD FLOW
  const uploadNewImage = async (file, category = "all") => {
    try {
      // 🔥 SAFETY CHECK
      if (!file || !(file instanceof File)) {
        throw new Error("Invalid file passed to uploadNewImage");
      }

      // 1. Upload to Cloudinary
      const url = await uploadImage(file);

      if (!url) throw new Error("Cloudinary upload failed");

      // 2. Save to Supabase
      const { error } = await supabase.from("gallery_uploads").insert([
        {
          src: url,
          alt: file.name?.replace(/\.[^/.]+$/, "") || "Gallery image",
          category,
        },
      ]);

      if (error) throw error;

      await fetchImages();
      return url;
    } catch (err) {
      console.error("Upload failed:", err);
      return null;
    }
  };

  const deleteImage = async (id) => {
    const { error } = await supabase
      .from("gallery_uploads")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      return false;
    }

    await fetchImages();
    return true;
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return {
    images,
    loading,
    uploadNewImage,
    deleteImage,
    uploading,
    progress,
    uploadError: error,
    refresh: fetchImages,
  };
}