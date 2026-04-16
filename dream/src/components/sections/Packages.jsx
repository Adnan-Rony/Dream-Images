import { PACKAGES } from '../../data/packages';
import SectionHeader from '../common/SectionHeader';

export default function Packages() {
  const openWhatsApp = (pkg) => {
    const message = encodeURIComponent(
      `Hi Kayem Islam! I'm interested in the *${pkg.name} Package* (${pkg.price}). Please share more details.`
    );
    window.open(`https://wa.me/${pkg.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Pricing" 
          title="Choose Your Package"
          subtitle="Every package includes a personal consultation with Kayem Islam."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white border p-10 group hover:-translate-y-3 transition-all duration-500 ${
                pkg.popular 
                  ? 'border-[#B8860B] shadow-2xl scale-[1.02]' 
                  : 'border-[#E5D9C0]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8860B] text-white text-xs tracking-widest px-8 py-2.5">
                  MOST POPULAR
                </div>
              )}

              <div className="text-4xl mb-6 text-[#D4AF37]">{pkg.icon}</div>
              <h3 className="font-serif text-4xl font-light">{pkg.name}</h3>
              <p className="text-5xl font-light text-[#B8860B] mt-3 mb-10">{pkg.price}</p>

              <ul className="space-y-5 mb-12">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#B8860B] mt-1 text-lg">◆</span>
                    <span className="text-[#444]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openWhatsApp(pkg)}
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-4 text-sm tracking-widest transition-all flex items-center justify-center gap-3"
              >
                💬 BOOK VIA WHATSAPP
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}