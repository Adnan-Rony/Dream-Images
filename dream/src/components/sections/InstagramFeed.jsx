import SectionHeader from '../common/SectionHeader';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    likes: "1.2K",
    caption: "Golden hour wedding magic ✨",
    tags: ["#weddingphotography", "#dhaka"],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&q=80",
    likes: "876",
    caption: "The portrait that speaks",
    tags: ["#portrait", "#naturallight"],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    likes: "2.1K",
    caption: "A moment frozen in time 💍",
    tags: ["#engagement", "#love"],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80",
    likes: "654",
    caption: "Family is everything",
    tags: ["#family", "#lifestyle"],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=600&q=80",
    likes: "1.8K",
    caption: "Candid joy, unfiltered",
    tags: ["#candid", "#wedding"],
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    likes: "943",
    caption: "Sunset ceremonies 🌅",
    tags: ["#sunset", "#ceremony"],
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=600&q=80",
    likes: "1.1K",
    caption: "Emotions captured forever",
    tags: ["#emotional", "#real"],
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
    likes: "2.4K",
    caption: "Bridal beauty, timeless grace",
    tags: ["#bride", "#bridal"],
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&q=80",
    likes: "788",
    caption: "Love in every frame",
    tags: ["#loveshots", "#couple"],
  },
];

export default function InstagramFeed() {
  const IG_HANDLE = "@dreamimage.bd";
  const IG_URL = "https://instagram.com/dreamimage.bd";

  return (
    <section id="instagram" className="py-28 bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm font-medium mb-3">
              Follow Our Journey
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-none">
              Instagram Feed
            </h2>
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#D4AF37] px-8 py-4 text-sm tracking-widest transition-all duration-300 hover:bg-[#D4AF37]/10 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>{IG_HANDLE}</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group aspect-square"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A1A1A]/70 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-3 p-4">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-white font-medium text-sm">{post.likes}</span>
                </div>
                <p className="text-white/90 text-center text-xs leading-relaxed">{post.caption}</p>
                <div className="flex flex-wrap justify-center gap-1">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-[#D4AF37] text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm mb-6 tracking-widest uppercase">
            Over 12,000 followers sharing our journey
          </p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-10 py-4 text-sm tracking-widest hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            FOLLOW ON INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
}
