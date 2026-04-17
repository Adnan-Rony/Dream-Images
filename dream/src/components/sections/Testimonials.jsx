// src/components/sections/Testimonials.jsx
import { useState, useEffect } from 'react';
import SectionHeader from '../common/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume autoplay after 10s
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Client Love" 
          title="What Our Clients Say"
          subtitle="Real stories from couples, families, and professionals we've had the honor to work with."
          dark
        />

        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative">
            
            {/* Glassmorphic Card */}
            <div className="relative bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl">
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 text-[180px] text-[#D4AF37]/5 font-serif leading-none pointer-events-none">
                “
              </div>
              <div className="absolute -bottom-12 -right-6 text-[140px] text-[#D4AF37]/5 font-serif leading-none rotate-12 pointer-events-none">
                ”
              </div>

              {/* Testimonial Content with Smooth Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="min-h-[220px] flex items-center"
                >
                  <p className="text-2xl md:text-[28px] leading-relaxed text-white/90 font-light tracking-wide italic">
                    “{TESTIMONIALS[current].text}”
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mt-16 pt-12 border-t border-white/10">
                <div className="flex items-center gap-6">
                  <motion.div 
                    key={current}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <img 
                      src={TESTIMONIALS[current].image} 
                      alt={TESTIMONIALS[current].name}
                      className="w-24 h-24 rounded-3xl object-cover ring-4 ring-[#D4AF37]/30 shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-black text-sm font-bold w-8 h-8 rounded-2xl flex items-center justify-center shadow-lg">
                      ★
                    </div>
                  </motion.div>

                  <div>
                    <p className="text-3xl font-light text-white tracking-tight">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-[#D4AF37] text-base mt-1 tracking-widest uppercase">
                      {TESTIMONIALS[current].role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <motion.div 
                  key={`rating-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-1.5 mt-8 md:mt-0"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span 
                      key={i} 
                      className="text-5xl text-[#D4AF37] drop-shadow-sm"
                    >
                      ★
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-12 px-4">
              <button 
                onClick={prevTestimonial}
                className="group flex items-center gap-4 text-white/70 hover:text-white transition-all duration-300"
              >
                <div className="w-14 h-14 border border-white/30 rounded-3xl flex items-center justify-center text-3xl group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-300">
                  ←
                </div>
                <span className="hidden md:block text-sm uppercase tracking-[3px] font-medium">Previous</span>
              </button>

              {/* Progress Dots */}
              <div className="flex gap-4">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`transition-all duration-500 rounded-full ${
                      current === index 
                        ? 'w-10 h-2.5 bg-[#D4AF37]' 
                        : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="group flex items-center gap-4 text-white/70 hover:text-white transition-all duration-300"
              >
                <span className="hidden md:block text-sm uppercase tracking-[3px] font-medium">Next</span>
                <div className="w-14 h-14 border border-white/30 rounded-3xl flex items-center justify-center text-3xl group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-300">
                  →
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}