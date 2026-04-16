import SectionHeader from '../common/SectionHeader';

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    desc: "We discuss your vision, style preferences, and event details over a friendly call or meeting."
  },
  {
    number: "02",
    title: "Planning & Shooting",
    desc: "Careful planning followed by on-location or studio photography with natural light and artistic composition."
  },
  {
    number: "03",
    title: "Editing & Retouching",
    desc: "Professional color grading, retouching, and enhancement to bring out the true emotion in every frame."
  },
  {
    number: "04",
    title: "Delivery",
    desc: "High-resolution photos delivered via private online gallery + printed albums (in premium packages)."
  }
];

export default function Process() {
  return (
    <section className="bg-[#1A1A1A] text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Our Process" 
          title="How We Create Magic"
          subtitle="A simple, stress-free experience from start to finish"
        />

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {STEPS.map((step, index) => (
            <div key={index} className="group">
              <div className="text-[#D4AF37] font-serif text-7xl font-light mb-6 transition-all group-hover:scale-110">
                {step.number}
              </div>
              <h3 className="text-2xl font-light mb-4">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}