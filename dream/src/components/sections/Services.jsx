import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

const SERVICES = [
  {
    id: 1,
    icon: "👤",
    title: "Portrait Sessions",
    description:
      "Studio or outdoor — we create portraits that reveal character, depth, and authenticity. Every session is tailored to you.",
    features: ["Studio Lighting", "Outdoor Locations", "Professional Editing", "Same-Week Delivery"],
    image: "https://i.ibb.co.com/b5LTB7Jg/528608489-785837727304089-8432253396881977071-n.jpg",
  },
  {
    id: 2,
    icon: "💍",
    title: "Wedding Photography",
    description:
      "From intimate ceremonies to grand celebrations, we capture every tear, laugh, and stolen glance.",
    features: ["Ceremony & Reception", "Candid Moments", "Couple Portraits", "Family Formals"],
    image: "https://i.ibb.co.com/8gtPVRNR/481512915-667469695807560-9208120819402486446-n.jpg",
  },
  {
    id: 3,
    icon: "🏢",
    title: "Corporate Events",
    description:
      "Professional coverage of conferences, product launches, and company milestones.",
    features: ["Event Documentation", "Speaker & Stage Shots", "Team Headshots", "Quick Turnaround"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: 4,
    icon: "🌸",
    title: "Pre-Wedding & Engagement",
    description:
      "Romantic sessions that capture the anticipation and joy before the big day.",
    features: ["Location Scouting", "Outfit Guidance", "Golden Hour Timing", "Edited Album"],
    image: "https://i.ibb.co.com/dJ6fCS8G/484176172-672832831937913-5935569141713806452-n.jpg",
  },
  {
    id: 5,
    icon: "🎂",
    title: "Family & Lifestyle",
    description:
      "Candid, joyful sessions that document the bonds of family.",
    features: ["Home Sessions", "Outdoor Parks", "Newborn & Baby", "Milestone Events"],
    image: "https://i.ibb.co.com/G4dzJR5W/659669627-970685918819268-1606658858022304221-n.jpg",
  },
  {
    id: 6,
    icon: "✈️",
    title: "Destination Photography",
    description:
      "Travel with us anywhere in Bangladesh or abroad.",
    features: ["Nationwide Travel", "International Available", "Flexible Scheduling", "Full-Day Coverage"],
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const active = SERVICES[activeService];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#0F0F0F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="From intimate portraits to grand events — every frame tells your story."
          dark
        />

        {/* Mobile: Vertical Stack */}
        <div className="mt-12 lg:hidden space-y-10">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-[260px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="text-2xl font-light text-white">{service.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-white/70 leading-relaxed">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-white/80 text-xs px-4 py-2 rounded-full border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Side by Side with Sticky */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 mt-16 items-start">
          {/* Left: Service List */}
          <div className="space-y-3">
            {SERVICES.map((service, i) => (
              <button
                key={service.id}
                onClick={() => setActiveService(i)}
                className={`w-full text-left px-8 py-7 border transition-all duration-300 group flex items-center justify-between rounded-xl ${
                  activeService === i
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-5">
                  <span className="text-3xl flex-shrink-0">{service.icon}</span>
                  <div>
                    <p
                      className={`font-serif text-2xl font-light transition-colors ${
                        activeService === i ? "text-[#D4AF37]" : "text-white group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </p>
                    {activeService === i && (
                      <p className="text-white/60 text-[15px] mt-2 leading-relaxed pr-8">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>

                <span
                  className={`text-2xl transition-transform duration-300 flex-shrink-0 ${
                    activeService === i ? "text-[#D4AF37] rotate-90" : "text-white/30 group-hover:text-white/50"
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Right: Sticky Preview */}
          <div className="sticky top-28">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              <img
                key={activeService} // Forces re-animation when service changes
                src={active.image}
                alt={active.title}
                className="w-full h-[520px] object-cover transition-all duration-700"
                style={{ animation: "fadeIn 0.6s ease-out" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/90 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{active.icon}</span>
                  <h3 className="text-3xl font-light text-white">{active.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {active.features.map((f, i) => (
                    <span
                      key={i}
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm px-5 py-2.5 rounded-full tracking-wider"
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
          from { 
            opacity: 0; 
            transform: scale(1.06); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
      `}</style>
    </section>
  );
}