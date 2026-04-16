// src/components/sections/Awards.jsx
import SectionHeader from '../common/SectionHeader';

const AWARDS = [
  {
    year: "2024",
    title: "Best Wedding Photographer",
    org: "Bangladesh Photography Awards",
    desc: "Recognized for exceptional wedding storytelling and cinematic post-processing across 50+ weddings.",
    icon: "🏆",
    color: "#D4AF37",
  },
  {
    year: "2023",
    title: "Top 10 Portrait Artists",
    org: "South Asia Creative Summit",
    desc: "Selected among 1,200+ applicants for innovative use of natural light and environmental portraiture.",
    icon: "🥇",
    color: "#C0C0C0",
  },
  {
    year: "2023",
    title: "People's Choice Award",
    org: "Dhaka Photo Festival",
    desc: "Voted by festival attendees for the most emotionally resonant photography series of the year.",
    icon: "❤️",
    color: "#E8735A",
  },
  {
    year: "2022",
    title: "Excellence in Photojournalism",
    org: "Press Institute of Bangladesh",
    desc: "Awarded for documentary coverage of cultural events that preserve national heritage through imagery.",
    icon: "📰",
    color: "#7B9EA8",
  },
  {
    year: "2021",
    title: "Rising Star Award",
    org: "Asia Photography Council",
    desc: "Recognized as one of Asia's most promising emerging photographers under 30.",
    icon: "⭐",
    color: "#B8A9D9",
  },
  {
    year: "2020",
    title: "Best Commercial Portfolio",
    org: "Dhaka Brand Awards",
    desc: "Awarded for outstanding brand photography work across 20+ commercial campaigns in Bangladesh.",
    icon: "📸",
    color: "#82C09A",
  },
];

const MILESTONES = [
  { value: "8+", label: "Years of Experience" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "15+", label: "Awards Won" },
  { value: "50K+", label: "Photos Delivered" },
];

export default function Awards() {
  return (
    <section id="awards" className="py-28 bg-[#0F0F0F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Recognition & Honors"
          title="Awards & Achievements"
          subtitle="A legacy of excellence recognized by industry leaders across South Asia."
          dark
        />

        {/* Milestones Strip - Dark Version */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A1A] border border-white/10 mb-20 rounded-3xl overflow-hidden">
          {MILESTONES.map((m, i) => (
            <div 
              key={i} 
              className="bg-[#1A1A1A] py-12 px-6 text-center border-r border-white/10 last:border-r-0"
            >
              <p className="font-serif text-5xl md:text-6xl font-light text-[#D4AF37]">
                {m.value}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60 mt-4">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Awards Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/20 hidden md:block" />

          <div className="space-y-16">
            {AWARDS.map((award, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-10 items-center md:items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Award Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)] group">
                  <div className="bg-[#1A1A1A] border border-white/10 p-9 rounded-3xl hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 group-hover:shadow-2xl">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-5xl transition-transform group-hover:scale-110 duration-300">
                        {award.icon}
                      </span>
                      <span
                        className="text-xs font-medium tracking-[0.08em] px-5 py-2 border rounded-full"
                        style={{ 
                          color: award.color, 
                          borderColor: award.color + "60" 
                        }}
                      >
                        {award.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl font-light leading-tight mb-3">
                      {award.title}
                    </h3>
                    
                    <p className="text-[#D4AF37] text-sm uppercase tracking-widest mb-6">
                      {award.org}
                    </p>
                    
                    <p className="text-white/70 leading-relaxed text-[15px]">
                      {award.desc}
                    </p>
                  </div>
                </div>

                {/* Center Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#D4AF37] border-4 border-[#0F0F0F] top-10 z-10 shadow-lg" />

                {/* Spacer */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Quote - Dark */}
        <div className="mt-24 max-w-3xl mx-auto text-center border border-[#D4AF37]/30 bg-[#1A1A1A] rounded-3xl p-14">
          <p className="font-serif text-3xl md:text-4xl italic leading-relaxed text-white/90">
            "Photography is not just my profession — it is how I honor the moments that define us."
          </p>
          <p className="mt-10 text-[#D4AF37] text-sm uppercase tracking-[0.3em]">
            — Kayem Islam, Dream Image
          </p>
        </div>
      </div>
    </section>
  );
}