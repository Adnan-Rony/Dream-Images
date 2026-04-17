// src/components/sections/FAQ.jsx
import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 3–6 months in advance for weddings, especially during peak season (October–February). For portraits and corporate events, 2–4 weeks is usually sufficient. Popular dates fill up quickly, so reach out early!",
  },
  {
    q: "What is your photography style?",
    a: "Our style blends documentary realism with fine-art aesthetics. We focus on natural light, authentic emotions, and thoughtful composition — creating images that feel timeless rather than trendy. Every shoot has a cinematic, editorial quality.",
  },
  {
    q: "How long does it take to receive the edited photos?",
    a: "Portraits and events are typically delivered within 5–7 business days. Wedding galleries are delivered within 3–4 weeks. Rush delivery is available for corporate clients. All photos are delivered via a private online gallery.",
  },
  {
    q: "Do you travel outside Dhaka?",
    a: "Absolutely! We regularly photograph across Bangladesh and are available for destination shoots internationally. Travel costs are discussed during booking based on the location and duration of the assignment.",
  },
  {
    q: "What happens if the weather is bad on our shoot day?",
    a: "We monitor weather closely and will contact you 48 hours in advance if rescheduling is needed. Outdoor sessions can often be adjusted for light rain with creative use of umbrellas and locations. Your comfort and safety always comes first.",
  },
  {
    q: "How many photos will I receive?",
    a: "The number varies by package: Silver (100 photos), Gold (300 photos), Diamond (500+). All delivered photos are fully edited and color-corrected. We do not deliver raw, unedited files.",
  },
  {
    q: "Can I request specific shots or a shot list?",
    a: "Yes! We encourage clients to share a mood board or shot list before the session. For weddings, we do a detailed consultation to cover must-have moments, family groupings, and any special requests.",
  },
  {
    q: "Do you offer videography services?",
    a: "Yes, videography is included in the Diamond Package. For other packages, videography can be added as an upgrade. We have a dedicated videography team that works in seamless coordination with our photographers.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bKash, Nagad, bank transfer, and cash. A 30% deposit is required to secure your booking date, with the remaining balance due on the day of the event.",
  },
  {
    q: "Will you be the photographer personally?",
    a: "Kayem Islam personally photographs all bookings unless clearly discussed otherwise. For larger events requiring a second photographer, Kayem leads the team and maintains quality control over all delivered images.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-12 bg-[#0F0F0F] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before booking. Still have questions? Just message us."
          dark
        />

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                openIndex === i
                  ? "border-[#D4AF37] bg-[#1A1A1A]"
                  : "border-white/10 bg-[#1A1A1A] hover:border-white/30"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-8 py-7 text-left gap-6 hover:bg-white/5 transition-colors"
              >
                <span
                  className={`font-serif text-lg font-light transition-colors flex-1 ${
                    openIndex === i ? "text-[#D4AF37]" : "text-white"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center text-xl transition-all duration-300 ${
                    openIndex === i
                      ? "bg-[#D4AF37] border-[#D4AF37] text-[#1A1A1A] rotate-45"
                      : "border-white/30 text-white hover:border-white/60"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out px-8 ${
                  openIndex === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/70 leading-relaxed text-[15px]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below FAQ - Enhanced */}
        {/* <div className="mt-20 text-center bg-[#1A1A1A] border border-white/10 rounded-3xl py-16 px-10">
          <p className="text-white/60 text-sm uppercase tracking-[0.3em] mb-4">Still have questions?</p>
          <h3 className="font-serif text-4xl text-white font-light mb-6 leading-tight">
            We're here to help you
          </h3>
          <a
            href={`https://wa.me/+8801880719315?text=${encodeURIComponent("Hi Kayem, I have a question about your photography services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#1DA851] text-white px-12 py-5 rounded-2xl text-sm tracking-widest font-medium transition-all duration-300 active:scale-95"
          >
            💬 ASK ON WHATSAPP
          </a>
          <p className="text-white/40 text-xs mt-6 tracking-widest">
            Usually replies within minutes • Mon–Sat, 9AM–8PM
          </p>
        </div> */}
      </div>
    </section>
  );
}