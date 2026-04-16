// src/components/sections/FeaturedClients.jsx
import SectionHeader from '../common/SectionHeader';

const CLIENTS = [
  {
    id: 1,
    name: "DIU",
    logo: "https://sustainability4d.daffodilvarsity.edu.bd/frontend/img/diu.jpg",
    category: "university & education"
  },
  {
    id: 2,
    name: "City  University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38TxrsjmaE7Ms95XxKGtMwjMbYbtFkrMfcQ&s",
    category: "university & education"
  },
  
  {
    id: 5,
    name: "Aarong",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWdqmZLNz_2AW3HBKYbtuGX7q40zVpG0g_nA&s",
    category: "Fashion & Lifestyle"
  },
  {
    id: 3,
    name: "Grameenphone",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQND0gdtXnwz0H189NtO5GEeRwrfFJCk8BCVg&s",
    category: "Telecom"
  },
  {
    id: 4,
    name: "BRAC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/BRAC_logo.png",
    category: "NGO & Development"
  },
  
  {
    id: 6,
    name: "The Westin Dhaka",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWx-prRXmPhzWsy_1zFwuh_Aky4Z5KYejRFA&s",
    category: "Luxury Weddings"
  },
  
];

export default function FeaturedClients() {
  return (
    <section className="bg-[#0A0A0A] py-12 md:py-28 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="TRUSTED BY THE BEST" 
          title="Featured Clients & Partners"
          subtitle="Proud to capture timeless moments for leading brands, luxury hotels, and wonderful families across Bangladesh"
          dark
        />

        {/* Logo Grid - Static & Professional */}
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
            {CLIENTS.map((client) => (
              <div 
                key={client.id}
                className="group flex flex-col items-center justify-center text-center"
              >
                {/* Logo Container */}
                <div className="h-20 w-12 flex items-center justify-center mb-8 transition-all duration-700">
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