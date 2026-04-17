import SectionHeader from '../common/SectionHeader';

const STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    desc: "We sit down — in person or virtually — to deeply understand your vision, style, wedding theme, and the special moments you want captured forever.",
    icon: "💬"
  },
  {
    number: "02",
    title: "Creative Planning & Shooting",
    desc: "Meticulous planning, location scouting, and capturing raw, natural, candid moments using artistic composition and masterful natural light.",
    icon: "📸"
  },
  {
    number: "03",
    title: "Professional Editing",
    desc: "Expert color grading, refined skin retouching, and emotional enhancement to ensure every image reflects the true beauty and feeling of your day.",
    icon: "✨"
  },
  {
    number: "04",
    title: "Final Delivery",
    desc: "High-resolution digital gallery with private online access, plus optional luxurious printed albums. Your memories preserved beautifully for generations.",
    icon: "🎁"
  }
];

export default function Process() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="OUR PROCESS" 
          title="How We Create Magic"
          subtitle="A thoughtful, stress-free journey from your first conversation to timeless memories"
          dark
        />

        <div className="mt-20 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-28 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {STEPS.map((step, index) => (
              <div 
                key={index} 
                className="group relative bg-[#111111] border border-white/5 rounded-3xl p-10 
                           hover:border-[#D4AF37]/40 hover:bg-[#161616] 
                           transition-all duration-700 hover:-translate-y-2"
              >
                {/* Gold Accent Top Bar */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-10">
                  <div>
                    <div className="text-[#D4AF37] font-serif text-[72px] leading-none font-light tracking-[-4px] 
                                    transition-all duration-700 group-hover:text-[#E8C670]">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="text-6xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-[28px] font-light tracking-wide mb-6 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-[15.5px] leading-relaxed">
                  {step.desc}
                </p>

                {/* Subtle bottom highlight */}
                <div className="mt-10 h-px w-12 bg-[#D4AF37]/30 group-hover:w-20 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Signature Line */}
        <div className="mt-20 text-center">
          <p className="inline-flex items-center gap-3 text-white/60 text-sm tracking-[3px] font-light">
            <span className="w-8 h-px bg-white/30"></span>
            CRAFTED WITH PASSION & PRECISION
            <span className="w-8 h-px bg-white/30"></span>
          </p>
        </div>
      </div>
    </section>
  );
}