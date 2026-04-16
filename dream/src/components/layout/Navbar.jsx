import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Packages", id: "packages" },
  // { label: "Awards", id: "awards" },
  { label: "FAQ", id: "faq" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    // Small delay lets the menu close animation start before scrolling
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0F0F0F]/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* LOGO */}
          <button
            onClick={() => scrollTo("home")}
            className="text-2xl sm:text-3xl font-light tracking-[0.08em] font-serif text-white z-50 relative"
          >
            Dream <span className="italic text-[#D4AF37]">Image</span>
          </button>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-widest">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-white/70 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#D4AF37] after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden lg:block border border-[#D4AF37] text-[#D4AF37] px-6 py-2 text-xs tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            BOOK NOW
          </button>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-[6px]"
          >
            <span
              className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY — rendered outside nav so it's truly fullscreen */}
      <div
        className={`lg:hidden fixed inset-0 z-40 flex flex-col transition-all duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#0F0F0F" }}
      >
        {/* Top gradient for depth */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

        {/* Nav links — centered vertically */}
        <div className="flex flex-col items-center justify-center flex-1 gap-2 px-6 pt-20 pb-10">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="w-full max-w-xs text-center py-3 text-2xl sm:text-3xl font-serif font-light text-white/75 hover:text-[#D4AF37] active:text-[#D4AF37] transition-colors duration-200 border-b border-white/5 last:border-none"
              style={{
                transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                opacity: menuOpen ? 1 : 0,
                transition: `color 0.2s, opacity 0.35s ease ${i * 40}ms, transform 0.35s ease ${i * 40}ms`,
              }}
            >
              {link.label}
            </button>
          ))}

          {/* CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-6 border border-[#D4AF37] text-[#D4AF37] px-10 py-3 text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black active:bg-[#D4AF37] active:text-black transition-all duration-300"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(12px)",
              transition: `all 0.35s ease ${NAV_LINKS.length * 40}ms`,
            }}
          >
            BOOK NOW
          </button>
        </div>

        {/* Bottom info strip */}
        <div
          className="px-6 pb-8 text-center"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.4s ease ${NAV_LINKS.length * 40 + 80}ms`,
          }}
        >
          <p className="text-white/30 text-xs tracking-widest">+880 1880-719315</p>
          <p className="text-white/20 text-xs mt-1 tracking-widest">Savar, Dhaka, Bangladesh</p>
        </div>
      </div>
    </>
  );
}