import { useEffect } from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';
import { BackToTop } from '../components/ui/BackToTop';
import { setupAnimations } from '../utils/animations';

export function HomePage() {
  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}
