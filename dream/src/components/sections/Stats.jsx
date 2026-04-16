export default function Stats() {
  const stats = [
    { num: "500+", label: "Happy Clients" },
    { num: "1200+", label: "Sessions Done" },
    { num: "8+", label: "Years Experience" },
    { num: "50K+", label: "Photos Delivered" },
  ];

  return (
    <div className="bg-[#1A1A1A] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="font-serif text-5xl md:text-6xl text-[#D4AF37] font-light">
                {stat.num}
              </div>
              <div className="text-xs tracking-[0.15em] uppercase text-white/50 mt-4">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}