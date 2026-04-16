export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const QUICK_LINKS = [
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Packages", id: "packages" },
    { label: "Awards", id: "awards" },
    { label: "FAQ", id: "faq" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-5xl font-light text-white mb-4">
              Dream <span className="italic text-[#D4AF37]">Image</span>
            </div>
            <p className="text-white/40 leading-relaxed max-w-xs">
              Professional photography capturing life's most meaningful moments. Based in Dhaka, Bangladesh.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com/dreamimage.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/+8801880719315`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#25D366] hover:text-[#25D366] transition-all text-sm"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/40 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">📍</span>
                <span>Savar,Dhaka, Bangladesh</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">📞</span>
                <a href="tel:+8801880719315" className="hover:text-[#D4AF37] transition-colors">+8801880719315</a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">✉️</span>
                <a href="mailto:dreamimages47@gmail.com" className="hover:text-[#D4AF37] transition-colors">dreamimages47@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37]">⏰</span>
                <span>Sat–Thu, 9AM–8PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>Develop by Adnan Rony</p>
          <p>© {new Date().getFullYear()} Dream Image. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
