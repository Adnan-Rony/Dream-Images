import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Farhana Ahmed",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    text: "Kayem captured our wedding day so beautifully. Every photo tells a story. We can't stop looking at our album even after 2 years!",
    rating: 5
  },
  {
    id: 2,
    name: "Rahim Khan",
    role: "Corporate Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    text: "Professional, creative, and punctual. Our company event photos were outstanding. Highly recommended for corporate photography.",
    rating: 5
  },
  {
    id: 3,
    name: "Nadia Islam",
    role: "Portrait Client",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    text: "The studio session was relaxed and fun. Kayem made me feel comfortable and the final portraits exceeded my expectations.",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Client Love" 
          title="What Our Clients Say"
        />

        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Testimonial Card */}
          <div className="bg-[#F9F5EE] rounded-3xl p-12 md:p-16 text-center transition-all duration-500">
            <div className="flex justify-center mb-8">
              {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                <span key={i} className="text-2xl text-[#D4AF37]">★</span>
              ))}
            </div>

            <p className="text-xl md:text-2xl leading-relaxed text-[#1A1A1A] italic mb-10">
              “{TESTIMONIALS[current].text}”
            </p>

            <div className="flex items-center justify-center gap-4">
              <img 
                src={TESTIMONIALS[current].image} 
                alt={TESTIMONIALS[current].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
              />
              <div className="text-left">
                <p className="font-medium text-lg">{TESTIMONIALS[current].name}</p>
                <p className="text-sm text-[#5A5A5A]">{TESTIMONIALS[current].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:bg-[#F9F5EE] transition-all"
          >
            ←
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:bg-[#F9F5EE] transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}