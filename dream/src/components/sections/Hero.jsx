export default function Hero() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-[#1A1A1A] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606800052052-a08af7148866?w=2000&q=80')] bg-cover bg-center scale-105 animate-[slowZoom_25s_ease-in-out_infinite_alternate]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-6">
          Photography by Kayem Islam
        </p>
        
        <h1 className="font-serif text-7xl md:text-[6.8rem] leading-[0.95] text-white font-light tracking-tighter">
          Dream<br />
          <span className="italic text-[#D4AF37]">Image</span>
        </h1>

        <p className="mt-8 text-xl text-white/70 max-w-md mx-auto">
          Capturing moments that last a lifetime • Dhaka, Bangladesh
        </p>

        <button
          onClick={scrollToGallery}
          className="mt-12 border border-[#D4AF37] text-[#D4AF37] px-12 py-4 text-sm tracking-widest hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
        >
          VIEW PORTFOLIO
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <p className="text-white/40 text-xs tracking-widest mb-2">SCROLL TO EXPLORE</p>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
      </div>
    </section>
  );
}