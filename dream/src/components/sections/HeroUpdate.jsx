'use client';

import { useState, useEffect } from "react";

const SLIDES = [
  {
    id: 1,
    image: "https://i.ibb.co.com/b5LTB7Jg/528608489-785837727304089-8432253396881977071-n.jpg",
    alt: "Cinematic Wedding",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/G4dzJR5W/659669627-970685918819268-1606658858022304221-n.jpg",
    alt: "Luxury Bride & Groom",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dnpycgwch/image/upload/v1776422683/sg6e0qvylwxab6fin8qd.jpg",
    alt: "Golden Hour Couple",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dnpycgwch/image/upload/v1776406352/tgu0ujamdtlfkkonqqfa.jpg",
    alt: "Romantic Wedding Moment",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dnpycgwch/image/upload/v1776422687/mns0l099t6rrjxjxnu6x.jpg",
    alt: "Elegant Wedding Ceremony",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dnpycgwch/image/upload/v1776422690/lvpsxrx2xo2m6c2bmajm.jpg",
    alt: "Elegant Wedding Ceremony",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Soft Dreamy Overlay - Slightly stronger on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/85 md:via-black/55" />
          </div>
        ))}
      </div>

      {/* Centered Content - Fully Responsive */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Website Name - Scales nicely on mobile */}
          <h1 className="text-[#D4AF37] text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl 
                         font-light tracking-[2px] sm:tracking-widest leading-none mb-4 md:mb-6">
            Moments of Dreams
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl 
                       max-w-[320px] sm:max-w-md mx-auto font-light leading-relaxed">
            Cinematic Wedding Films • Bangladesh
          </p>
        </div>
      </div>

      {/* Slide Indicators - Better touch targets on mobile */}
      <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[3px] sm:h-1 rounded-full transition-all duration-500 active:scale-110 ${
              index === currentIndex 
                ? "bg-[#D4AF37] w-8 sm:w-10" 
                : "bg-white/40 w-5 sm:w-6 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator - Hidden on very small screens if needed */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 
                      text-white/50 flex flex-col items-center gap-1.5 text-[10px] tracking-[2px] hidden sm:flex">
        SCROLL TO DISCOVER
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </div>
    </section>
  );
}