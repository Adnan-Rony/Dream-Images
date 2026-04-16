import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

const SERVICES = [
  {
    id: 1,
    icon: "💍",
    title: "Wedding Photography",
    description:
      "From intimate ceremonies to grand celebrations, we capture every tear, laugh, and stolen glance. Our wedding coverage is a cinematic journey through your most sacred day.",
    features: ["Ceremony & Reception", "Candid Moments", "Couple Portraits", "Family Formals"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: 2,
    icon: "👤",
    title: "Portrait Sessions",
    description:
      "Studio or outdoor — we create portraits that reveal character, depth, and authenticity. Every session is tailored to you, ensuring images that feel natural and timeless.",
    features: ["Studio Lighting", "Outdoor Locations", "Professional Editing", "Same-Week Delivery"],
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    id: 3,
    icon: "🏢",
    title: "Corporate Events",
    description:
      "Professional coverage of conferences, product launches, and company milestones. We deliver polished, brand-aligned imagery that elevates your corporate identity.",
    features: ["Event Documentation", "Speaker & Stage Shots", "Team Headshots", "Quick Turnaround"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: 4,
    icon: "🌸",
    title: "Pre-Wedding & Engagement",
    description:
      "Romantic sessions that capture the anticipation and joy before the big day. We scout unique locations across Dhaka and beyond for a truly unforgettable shoot.",
    features: ["Location Scouting", "Outfit Guidance", "Golden Hour Timing", "Edited Album"],
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
  },
  {
    id: 5,
    icon: "🎂",
    title: "Family & Lifestyle",
    description:
      "Candid, joyful sessions that document the bonds of family. We specialize in relaxed, natural interactions that result in photographs you'll cherish for decades.",
    features: ["Home Sessions", "Outdoor Parks", "Newborn & Baby", "Milestone Events"],
    image: "https://images.unsplash.com/photo-1609220136736-443140cfeaa8?w=800&q=80",
  },
  {
    id: 6,
    icon: "✈️",
    title: "Destination Photography",
    description:
      "Travel with us anywhere in Bangladesh or abroad. We're available for destination weddings, elopements, and travel portraits wherever your story takes you.",
    features: ["Nationwide Travel", "International Available", "Flexible Scheduling", "Full-Day Coverage"],
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const active = SERVICES[activeService];

  return (
    <section id="services" className="py-28 bg-[#0F0F0F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="From intimate portraits to grand events — every frame tells your story."
          dark
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Service List */}
          <div className="space-y-3">
            {SERVICES.map((service, i) => (
              <button
                key={service.id}
                onClick={() => setActiveService(i)}
                className={`w-full text-left px-8 py-6 border transition-all duration-300 group flex items-center justify-between ${
                  activeService === i
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-white/10 hover:border-white/30 bg-transparent"
                }`}
              >
                <div className="flex items-center gap-5">
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <p
                      className={`font-serif text-xl font-light transition-colors ${
                        activeService === i ? "text-[#D4AF37]" : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </p>
                    {activeService === i && (
                      <p className="text-white/50 text-sm mt-1 leading-relaxed max-w-xs">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
                <span
                  className={`text-lg transition-transform duration-300 ${
                    activeService === i ? "text-[#D4AF37] rotate-90" : "text-white/30"
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Right: Active Service Image + Features */}
          <div className="sticky top-24">
            <div className="relative overflow-hidden rounded-sm">
              <img
                key={activeService}
                src={active.image}
                alt={active.title}
                className="w-full h-[480px] object-cover transition-all duration-700"
                style={{ animation: "fadeIn 0.5s ease-in-out" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-3">
                  {active.icon} {active.title}
                </p>
                <div className="flex flex-wrap gap-3">
                  {active.features.map((f, i) => (
                    <span
                      key={i}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-4 py-1.5 tracking-wider"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
