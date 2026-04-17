import { useState } from "react";
import { PACKAGES } from "../../data/packages";

const WA_NUMBER = "+8801880719315";

/* ---------------------------------------
   FEATURES
--------------------------------------- */
const ALL_FEATURES = [
  "Hours Coverage",
  "Colour Correction",
  "Photographers",
  "Cinematographers",
  "Drone",
  "Online Gallery",
  "Basic Retouching",
];

const FEATURE_MAP = {
  1: {
    "Hours Coverage": "5 Hours",
    "Colour Correction": true,
    "Photographers": "1",
    "Cinematographers": "1",
    Drone: false,
    "Online Gallery": true,
    "Basic Retouching": true,
  },
  2: {
    "Hours Coverage": "5 Hours",
    "Colour Correction": true,
    "Photographers": "2",
    "Cinematographers": "1",
    Drone: false,
    "Online Gallery": true,
    "Basic Retouching": true,
  },
  3: {
    "Hours Coverage": "5 Hours",
    "Colour Correction": true,
    "Photographers": "2",
    "Cinematographers": "2",
    Drone: false,
    "Online Gallery": true,
    "Basic Retouching": true,
  },
  4: {
    "Hours Coverage": "5 Hours",
    "Colour Correction": true,
    "Photographers": "3",
    "Cinematographers": "2",
    Drone: true,
    "Online Gallery": true,
    "Basic Retouching": true,
  },
};

/* ---------------------------------------
   TIERS
--------------------------------------- */
const TIERS = {
  1: {
    accent: "#9CA3AF",
    accentHex: "156,163,175",
    label: "silver",
    gradient: "from-gray-500/10 to-transparent",
  },
  2: {
    accent: "#D4AF37",
    accentHex: "212,175,55",
    label: "gold",
    gradient: "from-[#D4AF37]/10 to-transparent",
  },
  3: {
    accent: "#93C5FD",
    accentHex: "147,197,253",
    label: "diamond",
    gradient: "from-blue-300/10 to-transparent",
  },
  4: {
    accent: "#E2C4FF",
    accentHex: "226,196,255",
    label: "platinum",
    gradient: "from-purple-200/10 to-transparent",
  },
};

/* ---------------------------------------
   ICONS
--------------------------------------- */
function CheckIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8.5" stroke={color} strokeOpacity="0.35" />
      <path
        d="M5.5 9L8 11.5L12.5 7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8.5" stroke="white" strokeOpacity="0.08" />
      <path
        d="M6 12L12 6M12 12L6 6"
        stroke="white"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------------------------------
   COMPONENT
--------------------------------------- */
export default function Packages() {
  const [view, setView] = useState("cards");
  const [hovered, setHovered] = useState(null);

  const openWhatsApp = (pkg) => {
    const msg = encodeURIComponent(
      `Hi Kayem Islam! I'm interested in the *${pkg.name} Package* (${pkg.price}). Please share more details.`
    );

    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="packages"
      className="relative py-10 bg-[#080808] text-white overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-400/5 blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light leading-tight">
            Choose Your <br />
            <span className="italic text-[#D4AF37]">Experience</span>
          </h2>

          <p className="mt-5 text-white/40 max-w-xs mx-auto text-sm leading-relaxed">
            Every package includes a personal consultation with Kayem Islam.
          </p>
        </div>

        {/* TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="flex border border-white/10 p-1 gap-px w-full sm:w-auto">
            {[
              ["cards", "Cards View"],
              ["compare", "Compare All"],
            ].map(([v, label]) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`flex-1 sm:flex-none px-5 sm:px-7 py-3 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  view === v
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "text-white/35 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ==========================================
            CARDS VIEW
        ========================================== */}
        {view === "cards" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGES.map((pkg) => {
              const t = TIERS[pkg.id];
              const isHov = hovered === pkg.id;

              return (
                <div
                  key={pkg.id}
                  onMouseEnter={() => setHovered(pkg.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative flex flex-col border border-white/10 bg-[#0D0D0D] transition-all duration-500 overflow-hidden rounded-xl"
                  style={{
                    transform: isHov ? "translateY(-6px)" : "translateY(0)",
                    boxShadow: isHov
                      ? `0 24px 60px -12px rgba(${t.accentHex},0.22)`
                      : "none",
                  }}
                >
                  <div
                    className="h-px w-full"
                    style={{
                      background: `linear-gradient(to right, transparent, ${t.accent}, transparent)`,
                    }}
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${t.gradient} opacity-60`}
                  />

                  <div className="relative p-6 sm:p-8 flex flex-col flex-1">
                    <p
                      className="text-[10px] uppercase tracking-[0.35em] font-medium mb-4"
                      style={{ color: t.accent }}
                    >
                      0{pkg.id} — {t.label}
                    </p>

                    <h3 className="font-serif text-3xl sm:text-4xl font-light">
                      {pkg.name}
                    </h3>

                    <p
                      className="text-2xl sm:text-3xl font-light mt-3 mb-6"
                      style={{ color: t.accent }}
                    >
                      {pkg.price}
                    </p>

                    <div
                      className="h-px mb-6"
                      style={{
                        background: `linear-gradient(to right, rgba(${t.accentHex},0.3), transparent)`,
                      }}
                    />

                    <ul className="space-y-3 flex-1 mb-7">
                      {pkg.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-white/65"
                        >
                          <CheckIcon color={t.accent} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => openWhatsApp(pkg)}
                      className="w-full py-3.5 text-xs uppercase tracking-[0.18em] font-medium border rounded-lg"
                      style={{
                        borderColor: `rgba(${t.accentHex},0.4)`,
                        color: t.accent,
                      }}
                    >
                      💬 Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==========================================
            COMPARE VIEW
        ========================================== */}
        {view === "compare" && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-5 pr-4 text-white/25 text-[10px] uppercase tracking-[0.3em] border-b border-white/10 sticky left-0 bg-[#080808] z-10">
                    Features
                  </th>

                  {PACKAGES.map((pkg) => {
                    const t = TIERS[pkg.id];

                    return (
                      <th
                        key={pkg.id}
                        className="py-5 px-4 text-center border-b border-white/10 min-w-[150px]"
                      >
                        <span
                          className="block text-[9px] uppercase tracking-[0.35em] mb-2"
                          style={{ color: t.accent }}
                        >
                          {t.label}
                        </span>

                        <span className="block font-serif text-xl sm:text-2xl">
                          {pkg.name}
                        </span>

                        <span
                          className="block text-sm sm:text-lg mt-1"
                          style={{ color: t.accent }}
                        >
                          {pkg.price}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {ALL_FEATURES.map((feat, fi) => (
                  <tr
                    key={feat}
                    className={`${
                      fi % 2 === 0 ? "bg-white/[0.018]" : ""
                    } hover:bg-white/[0.035]`}
                  >
                    <td className="py-4 pr-4 text-white/40 text-[11px] uppercase tracking-[0.2em] border-b border-white/5 sticky left-0 bg-[#080808] z-10">
                      {feat}
                    </td>

                    {PACKAGES.map((pkg) => {
                      const t = TIERS[pkg.id];
                      const val = FEATURE_MAP[pkg.id][feat];

                      return (
                        <td
                          key={pkg.id}
                          className="py-4 px-4 text-center border-b border-white/5"
                        >
                          {val === true ? (
                            <span className="flex justify-center">
                              <CheckIcon color={t.accent} />
                            </span>
                          ) : val === false ? (
                            <span className="flex justify-center">
                              <CrossIcon />
                            </span>
                          ) : (
                            <span
                              className="text-xs font-medium"
                              style={{ color: t.accent }}
                            >
                              {val}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* BOOK ROW */}
                <tr>
                  <td className="pt-8 sticky left-0 bg-[#080808]" />

                  {PACKAGES.map((pkg) => {
                    const t = TIERS[pkg.id];

                    return (
                      <td key={pkg.id} className="pt-8 px-4 text-center">
                        <button
                          onClick={() => openWhatsApp(pkg)}
                          className="w-full py-3 text-xs uppercase tracking-[0.18em] font-medium border rounded-lg"
                          style={{
                            borderColor: `rgba(${t.accentHex},0.35)`,
                            color: t.accent,
                          }}
                        >
                          💬 Book
                        </button>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* TRUST STRIP */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            "High-resolution exports",
            "Private online gallery",
            "Personal consultation included",
            "WhatsApp support",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-[10px] text-white/25 uppercase tracking-[0.25em]"
            >
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}