import SectionHeader from '../common/SectionHeader';

const STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    desc: "We sit down (in person or virtually) to understand your vision, style preferences, wedding theme, and special moments you want to capture.",
    icon: "💬"
  },
  {
    number: "02",
    title: "Creative Planning & Shooting",
    desc: "Detailed planning, location scouting, and capturing beautiful, natural, and candid moments with artistic composition and perfect lighting.",
    icon: "📸"
  },
  {
    number: "03",
    title: "Professional Editing",
    desc: "Expert color grading, skin retouching, and emotional enhancement so every photograph reflects the true beauty and feeling of your day.",
    icon: "✨"
  },
  {
    number: "04",
    title: "Final Delivery",
    desc: "High-resolution digital gallery + beautifully designed printed albums (optional). Your memories preserved beautifully for a lifetime.",
    icon: "🎁"
  }
];

export default function Process() {
  return (
    <section className="bg-[#0F0F0F] py-20 md:py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="OUR PROCESS" 
          title="How We Create Magic"
          subtitle="A smooth, stress-free journey from your first conversation to timeless memories"
          dark
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {STEPS.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-[#1A1A1A] border border-white/10 rounded-3xl p-10 hover:border-[#D4AF37]/30 transition-all duration-500"
            >
              {/* Step Number + Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-[#D4AF37] font-serif text-7xl font-light tracking-tighter transition-all group-hover:scale-110">
                  {step.number}
                </div>
                <div className="text-5xl opacity-30 group-hover:opacity-60 transition-opacity">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-light mb-6 tracking-wide">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed text-[15.5px]">
                {step.desc}
              </p>

              {/* Subtle Line */}
              {index !== STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-white/50 text-sm tracking-widest">
            Every step is handled with care, passion, and attention to detail
          </p>
        </div>
      </div>
    </section>
  );
}