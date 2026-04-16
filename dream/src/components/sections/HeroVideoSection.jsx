import SectionHeader from "../common/SectionHeader";

const VIDEO_URL = "https://www.youtube.com/watch?v=_hr_ljSQnRM";

// convert youtube link → autoplay embed (HIDDEN STYLE)
const getEmbedUrl = (url) => {
  const id = url.split("v=")[1]?.split("&")[0];
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&modestbranding=1&rel=0`;
};

export default function HeroVideoSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      
      {/* 🎬 Background Video (Hidden UI) */}
      <iframe
        src={getEmbedUrl(VIDEO_URL)}
        className="absolute top-0 left-0 w-full h-full scale-125 pointer-events-none"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      />

      {/* 🌫️ Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* ✨ Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide">
            Cinematic Wedding Stories
          </h1>

          <p className="mt-6 text-white/60 max-w-xl mx-auto text-sm md:text-base">
            We don’t just capture moments — we create cinematic emotions that live forever.
          </p>

          <div className="mt-10">
            <button className="px-10 py-4 border border-[#D4AF37]/50 text-[#D4AF37] uppercase tracking-[0.25em] text-xs hover:bg-[#D4AF37]/10 transition">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}