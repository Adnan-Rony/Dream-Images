import SectionHeader from '../common/SectionHeader';

const CLIENTS = [
  {
    id: 1,
    name: "Radisson Blu Dhaka",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Radisson_Blu_logo.svg/800px-Radisson_Blu_logo.svg.png",
    category: "Hospitality & Events"
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
    category: "Corporate"
  },
  {
    id: 4,
    name: "BRAC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/BRAC_logo.png",
    category: "NGO & Social"
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
  }
];

export default function FeaturedClients() {
  return (
    <section className="bg-white py-24 border-t border-b border-[#E5D9C0]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="TRUSTED BY" 
          title="Featured Clients & Partners"
          subtitle="Proud to work with leading brands, hotels, and wonderful couples across Bangladesh"
        />

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center">
          {CLIENTS.map((client) => (
            <div 
              key={client.id}
              className="group flex flex-col items-center justify-center text-center w-full"
            >
              <div className="h-14 md:h-16 flex items-center justify-center mb-5 transition-all duration-500">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-[180px] opacity-70 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 object-contain"
                />
              </div>
              
              <p className="font-medium text-[#1A1A1A] text-sm tracking-wide">{client.name}</p>
              <p className="text-[#B8860B] text-xs uppercase tracking-[0.15em] mt-1">
                {client.category}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-[#5A5A5A] text-sm">
            + 500+ happy couples and families who trusted us with their precious moments
          </p>
        </div>
      </div>
    </section>
  );
}