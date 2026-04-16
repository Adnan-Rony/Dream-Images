// src/components/sections/Testimonials.jsx
import { useState, useEffect } from 'react';
import SectionHeader from '../common/SectionHeader';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Farhana Akhter",
    role: "নববধূ (Newlywed)",
    image: "https://i.ibb.co.com/dJ6fCS8G/484176172-672832831937913-5935569141713806452-n.jpg",
    text: "কায়েম ভাই আমাদের বিয়ের সবচেয়ে সুন্দর মুহূর্তগুলো ধরে রেখেছে। প্রতিটি ছবি দেখলে চোখে পানি চলে আসে। দুই বছর পরও আমরা প্রতিদিন অ্যালবাম দেখি!",
    rating: 5
  },
  {
    id: 2,
    name: "Adnan Rony",
    role: "কর্পোরেট ক্লায়েন্ট",
    image: "https://i.ibb.co.com/1tDsT7q9/photo-2026-03-09-00-58-22.jpg",
    text: "অত্যন্ত প্রফেশনাল এবং সময়ানুবর্তী। আমাদের কোম্পানির ইভেন্টের ছবিগুলো খুবই উন্নতমানের হয়েছে। ভবিষ্যতে আবার কাজ করবো ইনশাআল্লাহ।",
    rating: 5
  },
  {
    id: 3,
    name: "Nadia Islam",
    role: "পোর্ট্রেট ক্লায়েন্ট",
    image: "https://i.ibb.co.com/7xPhXVMD/628006474-927439533143907-1345248021762769773-n.jpg",
    text: "সেশনটা খুবই স্বাচ্ছন্দ্যপূর্ণ ছিল। কায়েম আমাকে খুব সহজ করে দিয়েছে এবং ছবিগুলো দেখে আমি মুগ্ধ। এত সুন্দর পোর্ট্রেট আশা করিনি!",
    rating: 5
  }
];
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Client Love" 
          title="What Our Clients Say"
          subtitle="Real stories from couples, families, and professionals we've had the honor to work with."
          dark
        />

        <div className="max-w-5xl mx-auto mt-20">
          <div className="relative bg-[#111111] border border-white/10 rounded-3xl p-10 md:p-16 lg:p-20">
            
            {/* Large Quote Icon */}
            <div className="absolute -top-6 left-10 text-[120px] text-[#D4AF37]/10 font-serif leading-none">
              “
            </div>

            {/* Testimonial Text */}
            <div className="min-h-[180px] flex items-center">
              <p className="text-[22px] md:text-2xl leading-tight text-white/90 italic font-light tracking-wide">
                “{TESTIMONIALS[current].text}”
              </p>
            </div>

            {/* Client Info + Rating */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mt-16 pt-10 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img 
                    src={TESTIMONIALS[current].image} 
                    alt={TESTIMONIALS[current].name}
                    className="w-20 h-20 rounded-2xl object-cover ring-4 ring-[#D4AF37]/20"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#D4AF37] text-black text-xs font-bold w-7 h-7 rounded-xl flex items-center justify-center">
                    ★
                  </div>
                </div>

                <div>
                  <p className="text-2xl font-light text-white">{TESTIMONIALS[current].name}</p>
                  <p className="text-[#D4AF37] text-sm uppercase tracking-[2px] mt-1">
                    {TESTIMONIALS[current].role}
                  </p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mt-6 md:mt-0">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <span key={i} className="text-4xl text-[#D4AF37]">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 px-4">
            <button 
              onClick={prevTestimonial}
              className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 border border-white/30 rounded-2xl flex items-center justify-center text-2xl group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all">
                ←
              </div>
              <span className="hidden md:block text-sm uppercase tracking-widest">Previous</span>
            </button>

            {/* Dots */}
            <div className="flex gap-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index 
                      ? 'bg-[#D4AF37] scale-125' 
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <span className="hidden md:block text-sm uppercase tracking-widest">Next</span>
              <div className="w-12 h-12 border border-white/30 rounded-2xl flex items-center justify-center text-2xl group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all">
                →
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}