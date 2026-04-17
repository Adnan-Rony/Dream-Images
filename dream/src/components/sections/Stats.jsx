export default function Stats() {
  const stats = [
    { num: "1200+", label: "Happy Clients" },
    { num: "120+", label: "Sessions Done" },
    { num: "4+", label: "Years Experience" },
    { num: "20K+", label: "Photos Delivered" },
  ];

  return (
    <div className="bg-[#1A1A1A] py-10">
      <div className="max-w-5xl mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="font-serif text-4xl md:text-6xl text-[#D4AF37] font-light">
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