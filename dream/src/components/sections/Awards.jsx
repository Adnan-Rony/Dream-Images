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
    <section id="awards" className="py-28 bg-[#F9F5EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Recognition & Honors"
          title="Awards & Achievements"
          subtitle="A legacy of excellence recognized by industry leaders across South Asia."
        />

        {/* Milestones Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E5D9C0] border border-[#E5D9C0] mb-20">
          {MILESTONES.map((m, i) => (
            <div key={i} className="bg-[#F9F5EE] py-10 px-6 text-center">
              <p className="font-serif text-5xl font-light text-[#1A1A1A]">{m.value}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B8860B] mt-3">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Awards Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/30 hidden md:block" />

          <div className="space-y-10">
            {AWARDS.map((award, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-[calc(50%-2rem)] group">
                  <div className="bg-white border border-[#E5D9C0] p-8 hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{award.icon}</span>
                      <span
                        className="text-xs font-bold tracking-[0.3em] px-3 py-1 border"
                        style={{ color: award.color, borderColor: award.color + "40" }}
                      >
                        {award.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-light text-[#1A1A1A] mb-1">
                      {award.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#B8860B] mb-4">
                      {award.org}
                    </p>
                    <p className="text-[#5A5A5A] leading-relaxed text-sm">{award.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#F9F5EE] top-8 z-10" />

                {/* Spacer */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Quote */}
        <div className="mt-20 text-center border border-[#D4AF37]/40 p-12 bg-white">
          <p className="font-serif text-3xl md:text-4xl italic text-[#1A1A1A] leading-relaxed">
            "Photography is not just my profession — it is how I honor the moments that define us."
          </p>
          <p className="mt-6 text-[#B8860B] text-sm uppercase tracking-[0.3em]">— Kayem Islam, Dream Image</p>
        </div>
      </div>
    </section>
  );
}
