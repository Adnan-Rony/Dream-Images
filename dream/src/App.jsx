import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Packages from './components/sections/Packages';
import Process from './components/sections/Process.jsx';
import Awards from './components/sections/Awards';
import Testimonials from './components/sections/Testimonials.jsx';
import FeaturedClients from './components/sections/FeaturedClients.jsx';
import InstagramFeed from './components/sections/InstagramFeed';
import FAQ from './components/sections/FAQ';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Packages />
        <Process />
        <Awards />
        <Testimonials />
        <FeaturedClients />
        <InstagramFeed />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
