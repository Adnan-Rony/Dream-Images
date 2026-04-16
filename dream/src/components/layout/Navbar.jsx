import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Packages", id: "packages" },
  { label: "Awards", id: "awards" },
  { label: "FAQ", id: "faq" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className={`text-3xl font-light tracking-[0.08em] font-serif transition-colors ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
        >
          Dream <span className="italic text-[#D4AF37]">Image</span>
        </button>

        <ul className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#D4AF37] after:w-0 hover:after:w-full after:transition-all ${scrolled ? 'text-[#5A5A5A] hover:text-[#1A1A1A]' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Book Now CTA */}
        <button
          onClick={() => scrollTo('contact')}
          className="hidden lg:block border border-[#D4AF37] text-[#D4AF37] px-6 py-2 text-xs tracking-widest hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
        >
          BOOK NOW
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden w-10 h-10 flex flex-col justify-center gap-1.5 ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
        >
          <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0F0F0F] z-40 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-3xl font-serif font-light text-white/80 hover:text-[#D4AF37] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-4 border border-[#D4AF37] text-[#D4AF37] px-10 py-3 text-sm tracking-widest hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all"
          >
            BOOK NOW
          </button>
        </div>
      )}
    </nav>
  );
}
