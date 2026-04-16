import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Gallery from '../components/sections/Gallery';
import Hero from '../components/sections/Hero';
import Packages from '../components/sections/Packages';
import Stats from '../components/sections/Stats';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Gallery />
      <Packages />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;