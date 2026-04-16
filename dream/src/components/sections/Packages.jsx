// src/components/sections/Packages.jsx
import { PACKAGES } from '../../data/packages';
import SectionHeader from '../common/SectionHeader';

const WA_NUMBER = "8801880719315"; // ← Kayem's number (no + or spaces)

export default function Packages() {
  const openWhatsApp = (pkg) => {
    const message = encodeURIComponent(
      `Hi Kayem Islam! I'm interested in the *${pkg.name} Package* (${pkg.price}). Please share more details.`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="packages" className="py-10 bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Pricing" 
          title="Choose Your Package"
          subtitle="Every package includes a personal consultation with Kayem Islam."
          dark
        />

        <div className="grid md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-[#1A1A1A] border p-10 group hover:-translate-y-3 transition-all duration-500 rounded-3xl overflow-hidden ${
                pkg.popular 
                  ? 'border-[#D4AF37] shadow-2xl scale-[1.03] ring-1 ring-[#D4AF37]/30' 
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#1A1A1A] text-xs font-medium tracking-[0.08em] px-10 py-2.5 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-8 text-[#D4AF37]">{pkg.icon}</div>

              {/* Package Name */}
              <h3 className="font-serif text-5xl font-light tracking-tight mb-2">
                {pkg.name}
              </h3>

              {/* Price */}
              <p className="text-6xl font-light text-[#D4AF37] mb-10">
                {pkg.price}
              </p>

              {/* Features */}
              <ul className="space-y-6 mb-14">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/80">
                    <span className="text-[#D4AF37] mt-1 text-xl flex-shrink-0">✦</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <button
                onClick={() => openWhatsApp(pkg)}
                className="w-full group relative overflow-hidden bg-[#25D366] hover:bg-[#1DA851] text-white py-5 rounded-2xl text-sm tracking-[0.08em] font-medium transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.985]"
              >
                <span className="text-xl transition-transform group-hover:scale-110">💬</span>
                <span>BOOK VIA WHATSAPP</span>
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>

              {/* Bottom subtle accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-white/50 text-sm mt-12 tracking-widest">
          All packages include high-resolution edited photos • Private online gallery • 
          Unlimited revisions on selected images
        </p>
      </div>
    </section>
  );
}