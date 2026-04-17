import SectionHeader from '../common/SectionHeader';

export default function About() {
  return (
    <section id="about" className="bg-[#0F0F0F] text-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Text Side - Comes first on mobile */}
          <div className="order-1 md:order-2">
            <SectionHeader 
              eyebrow="About the Artist" 
              title="The Artist Behind the Lens"
            />

            <div className="mt-10 space-y-8 text-[17px] leading-relaxed text-white/80">
              <p>
                I'm <span className="text-white font-medium">Kayem Islam</span>, a professional photographer based in Dhaka, Bangladesh. 
                With over 4 years of experience, I specialize in capturing the raw emotion of weddings, portraits, and events.
              </p>
              
              <p>
                My philosophy is simple — every photograph should tell a meaningful story. 
                I blend natural light with thoughtful composition to create timeless images that families treasure for generations.
              </p>
              
              <p>
                From intimate wedding ceremonies to grand corporate events, 
                <span className="text-[#D4AF37] font-medium"> Dream Image </span> 
                delivers visual storytelling at its finest.
              </p>
            </div>

            <div className="mt-14">
              <p className="font-serif lg:text-4xl text-xl md:text-5xl italic text-[#D4AF37] tracking-tight">
                — Kayem Islam
              </p>
            </div>
          </div>

          {/* Image Side - Comes second on mobile */}
          <div className="order-2 md:order-1 relative group">
            {/* Elegant decorative frame */}
            <div className="absolute -inset-6 md:-inset-10 border border-[#D4AF37]/20 rounded-2xl" />
            <div className="absolute -inset-3 border border-white/10 rounded-2xl" />
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://i.ibb.co.com/fVyGxvYC/491238030-1401881314459393-6131981177170629525-n.jpg"
                alt="Kayem Islam - Photographer"
                className="w-full h-auto aspect-[4/3] md:aspect-square object-cover 
                           transition-all duration-700 group-hover:scale-105 grayscale-[0.15]"
              />
              
              {/* Subtle overlay shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}