import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { ProductDetails } from './components/ProductDetails';
import { Benefits } from './components/Benefits';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Pequeno delay para garantir que o DOM foi renderizado
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans text-up-primary antialiased bg-up-offWhite overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <ProductDetails />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;