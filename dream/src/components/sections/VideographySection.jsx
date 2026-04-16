import { useState } from "react";
import SectionHeader from "../common/SectionHeader";

const VIDEOS = [
  {
    id: 1,
    title: "We Met Online, Now We're on a Honeymoon in Andaman",
    url: "https://www.youtube.com/watch?v=XgmzG4bP91c",
    thumbnail: "https://img.youtube.com/vi/XgmzG4bP91c/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Wedding Cinematic Film",
    url: "https://www.youtube.com/watch?v=_hr_ljSQnRM",
    thumbnail: "https://img.youtube.com/vi/_hr_ljSQnRM/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Luxury Wedding Story",
    url: "https://www.youtube.com/watch?v=_hr_ljSQnRM",
    thumbnail: "https://img.youtube.com/vi/_hr_ljSQnRM/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Cinematic Event Highlights",
    url: "https://www.youtube.com/watch?v=_hr_ljSQnRM",
    thumbnail: "https://img.youtube.com/vi/_hr_ljSQnRM/maxresdefault.jpg",
  },
];

const getEmbedUrl = (url) => {
  const id = url.split("v=")[1]?.split("&")[0] || url.split("/embed/")[1];
  return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
};

export default function PremiumVideographySection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="VIDEOGRAPHY"
          title="Cinematic Wedding Films"
          subtitle="Timeless stories captured with emotion, light, and cinematic mastery."
          dark
        />

        {/* Premium Horizontal Carousel */}
        <div className="mt-20 flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group snap-center min-w-[320px] sm:min-w-[380px] md:min-w-[460px] cursor-pointer relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37] transition-all duration-700 shadow-2xl"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                {/* Luxury Golden Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-300 group-hover:scale-110">
                    <span className="text-black text-3xl md:text-4xl translate-x-0.5">▶</span>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-lg md:text-xl font-medium tracking-wide leading-tight line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Modal Player */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            className="w-full max-w-6xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-16 right-4 text-5xl text-white/60 hover:text-white transition-colors"
            >
              ×
            </button>

            <div className="aspect-video bg-black rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <iframe
                src={getEmbedUrl(activeVideo.url)}
                title={activeVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide">
                {activeVideo.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}