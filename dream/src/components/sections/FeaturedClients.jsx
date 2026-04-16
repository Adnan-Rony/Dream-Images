// src/components/sections/FeaturedClients.jsx
import SectionHeader from '../common/SectionHeader';

const CLIENTS = [
  {
    id: 1,
    name: "Radisson Blu Dhaka",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Radisson_Blu_logo.svg/800px-Radisson_Blu_logo.svg.png",
    category: "Luxury Hospitality"
  },
  {
    id: 2,
    name: "Aarong",
    logo: "https://seeklogo.com/images/A/aarong-logo-5B5B5B5B5B-seeklogo.com.png",
    category: "Fashion & Lifestyle"
  },
  {
    id: 3,
    name: "Grameenphone",
    logo: "https://seeklogo.com/images/G/grameenphone-logo-5B5B5B5B5B-seeklogo.com.png",
    category: "Telecom"
  },
  {
    id: 4,
    name: "BRAC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/BRAC_logo.png",
    category: "NGO & Development"
  },
  {
    id: 5,
    name: "Beximco",
    logo: "https://seeklogo.com/images/B/beximco-logo-5B5B5B5B5B-seeklogo.com.png",
    category: "Corporate"
  },
  {
    id: 6,
    name: "The Westin Dhaka",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Westin_Hotels_Resorts_logo.svg/800px-Westin_Hotels_Resorts_logo.svg.png",
    category: "Luxury Weddings"
  },
  {
    id: 7,
    name: "InterContinental Dhaka",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/InterContinental_Hotels_Group_logo.svg/800px-InterContinental_Hotels_Group_logo.svg.png",
    category: "Luxury Hospitality"
  },
  {
    id: 8,
    name: "Pan Pacific Sonargaon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pan_Pacific_Hotels_Group_logo.svg/800px-Pan_Pacific_Hotels_Group_logo.svg.png",
    category: "Premium Events"
  },
  {
    id: 9,
    name: "Yellow",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Yellow_Clothing_Logo.svg/800px-Yellow_Clothing_Logo.svg.png",
    category: "Fashion"
  },
  {
    id: 10,
    name: "Cats Eye",
    logo: "https://catseye.com.bd/wp-content/uploads/2023/01/logo.png",
    category: "Fashion & Apparel"
  },
  {
    id: 11,
    name: "Square Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Square_Group_Logo.svg/800px-Square_Group_Logo.svg.png",
    category: "Corporate"
  },
  {
    id: 12,
    name: "Dhaka Regency",
    logo: "https://www.dhakaregency.com.bd/wp-content/uploads/2022/01/logo.png",
    category: "Wedding & Events"
  }
];

export default function FeaturedClients() {
  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="TRUSTED BY THE BEST" 
          title="Featured Clients & Partners"
          subtitle="Proud to capture timeless moments for leading brands, luxury hotels, and wonderful families across Bangladesh"
          dark
        />

        {/* Logo Grid - Static & Professional */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
            {CLIENTS.map((client) => (
              <div 
                key={client.id}
                className="group flex flex-col items-center justify-center text-center"
              >
                {/* Logo Container */}
                <div className="h-20 flex items-center justify-center mb-8 transition-all duration-700">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-h-16 md:max-h-20 max-w-[180px] opacity-40 group-hover:opacity-100 
                               transition-all duration-700 grayscale group-hover:grayscale-0 
                               group-hover:scale-105 object-contain"
                  />
                </div>

                {/* Client Name */}
                <p className="font-light text-lg text-white tracking-wide">
                  {client.name}
                </p>

                {/* Category Tag */}
                <div className="mt-2">
                  <span className="inline-block text-[10px] uppercase tracking-[1.5px] text-[#D4AF37] font-medium border border-[#D4AF37]/30 px-4 py-1 rounded-full">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <div className="inline-flex items-center gap-3 bg-[#111111] border border-white/10 rounded-2xl px-8 py-4">
            <div className="text-2xl">🤍</div>
            <p className="text-white/70 text-sm md:text-base tracking-wide">
              Trusted by <span className="text-white font-medium">500+</span> happy couples, 
              families &amp; organizations across Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}