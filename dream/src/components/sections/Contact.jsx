import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

const WA_NUMBER = "8801747430447";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. Kayem will contact you soon.");
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Kayem Islam! I'd like to inquire about your photography services.");
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="bg-[#F9F5EE] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Get in Touch" 
          title="Let's Create Together"
          subtitle="Ready to capture your special moments? We'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-16 mt-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="font-serif text-3xl font-light mb-8 text-[#1A1A1A]">
                Visit Our Studio
              </h3>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-3xl flex-shrink-0">📍</div>
                  <div>
                    <p className="uppercase text-xs tracking-[0.2em] text-[#B8860B] font-medium">Location</p>
                    <p className="mt-2 text-[#1A1A1A] leading-relaxed">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-3xl flex-shrink-0">📞</div>
                  <div>
                    <p className="uppercase text-xs tracking-[0.2em] text-[#B8860B] font-medium">Phone &amp; WhatsApp</p>
                    <p className="mt-2 text-[#1A1A1A] text-lg">+880 1747-430447</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-3xl flex-shrink-0">✉️</div>
                  <div>
                    <p className="uppercase text-xs tracking-[0.2em] text-[#B8860B] font-medium">Email</p>
                    <a href="mailto:dreamimage@gmail.com" className="mt-2 block text-[#1A1A1A] hover:text-[#B8860B] transition-colors">
                      dreamimage@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-3xl flex-shrink-0">⏰</div>
                  <div>
                    <p className="uppercase text-xs tracking-[0.2em] text-[#B8860B] font-medium">Availability</p>
                    <p className="mt-2 text-[#1A1A1A]">Saturday – Thursday • 9:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refined WhatsApp Button with Premium Animations */}
            <div className="pt-8 border-t border-[#E5D9C0]">
              <button
                onClick={openWhatsApp}
                className="group relative w-full overflow-hidden bg-[#25D366] hover:bg-[#1DA851] text-white py-5 rounded-2xl text-sm tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-4 active:scale-[0.985]"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Icon */}
                <span className="text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  💬
                </span>
                
                <span className="relative z-10">CHAT WITH KAYEM ON WHATSAPP</span>
                
                {/* Sliding arrow */}
                <span className="relative z-10 text-lg transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
              
              <p className="text-center text-xs text-[#9A9A9A] mt-4 tracking-widest">
                Fastest way to get a response • Usually replies within minutes
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-10 md:p-14 rounded-2xl shadow-sm border border-[#E5D9C0]">
            <h3 className="font-serif text-3xl font-light mb-10 text-[#1A1A1A]">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-6 py-4 bg-[#FDFAF5] border border-[#E5D9C0] focus:border-[#B8860B] outline-none rounded-xl transition-all"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-[#FDFAF5] border border-[#E5D9C0] focus:border-[#B8860B] outline-none rounded-xl transition-all"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone / WhatsApp"
                  className="w-full px-6 py-4 bg-[#FDFAF5] border border-[#E5D9C0] focus:border-[#B8860B] outline-none rounded-xl transition-all"
                />
                <input
                  type="text"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  placeholder="Event Type (Wedding, Portrait, Event)"
                  className="w-full px-6 py-4 bg-[#FDFAF5] border border-[#E5D9C0] focus:border-[#B8860B] outline-none rounded-xl transition-all"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your vision, date, and any special requirements..."
                rows="7"
                className="w-full px-6 py-4 bg-[#FDFAF5] border border-[#E5D9C0] focus:border-[#B8860B] outline-none rounded-2xl resize-y transition-all"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#1A1A1A] hover:bg-[#B8860B] text-white hover:text-[#1A1A1A] py-5 rounded-xl text-sm tracking-[0.08em] font-medium transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}