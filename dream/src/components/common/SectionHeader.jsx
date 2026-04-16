export default function SectionHeader({ eyebrow, title, subtitle, dark = false }) {
  return (
    <div className="mb-16 text-center">
      {eyebrow && (
        <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-5xl md:text-6xl font-light mt-4 leading-none ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 max-w-md mx-auto ${dark ? 'text-white/50' : 'text-[#5A5A5A]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}