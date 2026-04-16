import SectionHeader from '../common/SectionHeader';

export default function About() {
  return (
    <section id="about" className="bg-[#1A1A1A] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-8 border border-[#D4AF37]/30 rounded-xl" />
            <img
              src="https://i.ibb.co.com/9HgZYpkj/476191135-1345010133479845-3189441927015777337-n.jpg"
              alt="Kayem Islam - Photographer"
              className="relative w-full h-auto rounded-xl grayscale-[0.25] object-cover"
            />
          </div>

          {/* Text Side */}
          <div>
            <SectionHeader 
              eyebrow="About the Artist" 
              title="The Artist Behind the Lens"
            />

            <div className="mt-10 space-y-8 text-lg leading-relaxed text-white/75">
              <p>
                I'm <span className="text-white font-medium">Kayem Islam</span>, a professional photographer based in Dhaka, Bangladesh. 
                With over 4 years of experience, I specialize in capturing the raw emotion of weddings, portraits, and events.
              </p>
              
              <p>
                My philosophy is simple — every photograph should tell a meaningful story. 
                I blend natural light with thoughtful composition to create timeless images that families treasure for generations.
              </p>
              
              <p>
                From intimate wedding ceremonies to grand corporate events, Dream Image delivers visual storytelling at its finest.
              </p>
            </div>

            <div className="mt-12">
              <p className="font-serif text-4xl italic text-[#D4AF37]">— Kayem Islam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}