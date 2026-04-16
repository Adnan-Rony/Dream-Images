export default function Hero() {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const scrollToServices = () => {
    document.getElementById("contact")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0C0A]"
    >
      {/* Google Fonts + Custom Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');
        
        @keyframes kenburns {
          0% { transform: scale(1.05) translate(0%, 0%); }
          100% { transform: scale(1.13) translate(-2%, -1%); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }

        .animate-kenburns { animation: kenburns 28s ease-in-out infinite alternate; }
        .animate-fadeinup-1 { animation: fadeInUp 0.9s 0.2s ease both; }
        .animate-fadeinup-2 { animation: fadeInUp 1s 0.4s ease both; }
        .animate-fadeinup-3 { animation: fadeInUp 1s 0.6s ease both; }
        .animate-fadeinup-4 { animation: fadeInUp 1s 0.75s ease both; }
        .animate-fadeinup-5 { animation: fadeInUp 1s 0.9s ease both; }
        .animate-fadeinup-6 { animation: fadeInUp 1s 1.05s ease both; }
        .animate-fadeinup-7 { animation: fadeInUp 1s 1.2s ease both; }
        .animate-fadeinup-8 { animation: fadeInUp 1s 1.5s ease both; }
        .animate-fadeinleft { animation: fadeInLeft 1.6s ease both; }
        .animate-fadeinright { animation: fadeInRight 1.6s ease both; }
        .animate-scrollline { animation: scrollLine 2.5s ease-in-out infinite; }

        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }

        /* Gold Button Hover Effect */
        .btn-gold { 
          position: relative; 
          overflow: hidden; 
        }
        .btn-gold::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #fff;
          transform: translateX(-101%);
          transition: transform 0.45s ease;
          z-index: 0;
        }
        .btn-gold:hover::after { 
          transform: translateX(0); 
        }
        .btn-gold > span { 
          position: relative; 
          z-index: 1; 
        }
      `}</style>

      {/* Background Image with Ken Burns Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?w=2000&q=80')",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

      {/* Left Vertical Bar */}
      <div className="absolute left-10 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center gap-4 z-20 animate-fadeinleft">
        <div className="w-px flex-1 bg-gradient-to-b from-transparent via-[#C9A96E]/40 to-transparent" />
        <span
          className="font-montserrat text-[#C9A96E]/50 text-[10px] tracking-[0.35em] uppercase font-light"
          style={{ writingMode: "vertical-rl" }}
        >
          Est. 2019
        </span>
        <div className="w-px flex-1 bg-gradient-to-b from-transparent via-[#C9A96E]/40 to-transparent" />
      </div>

      {/* Right Social Bar */}
      <div className="absolute right-10 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center gap-6 z-20 animate-fadeinright">
        {["FB", "IG", "YT"].map((s) => (
          <span
            key={s}
            className="font-montserrat text-white/30 text-[11px] tracking-widest font-light hover:text-[#C9A96E] transition-colors duration-300 cursor-pointer"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8 animate-fadeinup-1">
            <div className="w-8 h-px bg-[#C9A96E]" />
            {/* <p className="font-montserrat text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-light">
              WEDDING & PORTRAIT PHOTOGRAPHY
            </p> */}
          </div>

          {/* Headline */}
          <h1 className="font-cormorant font-light text-white leading-none text-[5.5rem] md:text-[8rem] animate-fadeinup-2">
            Dream
            <br />
            <em className="text-[#C9A96E]">Image</em>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 my-8 animate-fadeinup-3">
            <div className="w-16 h-px bg-white/20" />
            <div className="w-1.5 h-1.5 border border-[#C9A96E]/60 rotate-45" />
            <div className="w-16 h-px bg-white/20" />
          </div>

          {/* Description */}
          <p className="font-montserrat font-light text-white/55 text-sm md:text-[15px] max-w-sm leading-relaxed tracking-wide animate-fadeinup-4">
            Capturing the quiet moments, the stolen glances, the joy that overflows — 
            love stories told through light and time.
          </p>

          {/* Photographer Info */}
          <div className="flex items-center gap-3 mt-6 animate-fadeinup-5">
            <div className="w-8 h-8 rounded-full border border-[#C9A96E]/40 flex items-center justify-center shrink-0">
              <span className="font-montserrat text-[#C9A96E] text-xs">DI</span>
            </div>
            <p className="font-montserrat font-light text-white/50 text-xs tracking-widest">
              Dream Image · Dhaka, Bangladesh
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-6 mt-12 animate-fadeinup-6">
            <button
              onClick={scrollToGallery}
              className="btn-gold bg-[#C9A96E] text-[#0D0C0A] px-10 py-4 font-montserrat font-medium text-[11px] tracking-[0.3em] uppercase cursor-pointer border-0"
            >
              <span>Works</span>
            </button>

            {/* Updated Book a Session Button */}
            {/* <button
              onClick={scrollToServices}
              className="font-montserrat font-light text-white/70 hover:text-[#C9A96E] text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 flex items-center gap-2"
            >
              Book a Session 
              <span className="text-lg">→</span>
            </button> */}
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16 pt-10 border-t border-white/10 animate-fadeinup-7">
            {[
              { num: "500+", label: "Couples" },
              { num: "4+", label: "Years" },
              { num: "3", label: "Awards" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-cormorant font-light text-white text-2xl">{num}</p>
                <p className="font-montserrat font-light text-white/35 text-[10px] tracking-[0.3em] uppercase mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 animate-fadeinup-8">
        <div className="w-px h-14 overflow-hidden bg-[#C9A96E]/20">
          <div className="w-full h-[40%] bg-[#C9A96E] animate-scrollline" />
        </div>
        <p className="font-montserrat font-light text-white/30 text-[9px] tracking-[0.4em] uppercase">
          Scroll
        </p>
      </div>
    </section>
  );
}