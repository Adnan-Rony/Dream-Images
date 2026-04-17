import About from "../components/sections/About.jsx";
import Contact from "../components/sections/Contact.jsx";
import FAQ from "../components/sections/FAQ.jsx";
import FeaturedClients from "../components/sections/FeaturedClients.jsx";
import Gallery from "../components/sections/Gallery.jsx";
import HeroCarousel from "../components/sections/HeroUpdate.jsx";
import InstagramFeed from "../components/sections/InstagramFeed.jsx";
import Packages from "../components/sections/Packages.jsx";
import Process from "../components/sections/Process.jsx";
import Services from "../components/sections/Services.jsx";
import Stats from "../components/sections/Stats.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";


export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <Stats />
      <Gallery />
      <About />
      <Packages />
      <Services />
      {/* <Process/> */}
      <Testimonials />
      <FeaturedClients />
      <InstagramFeed />
      <FAQ />
      <Contact />
    </main>
  );
}