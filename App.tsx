import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { ProductDetails } from './components/ProductDetails';
import { Benefits } from './components/Benefits';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-up-primary antialiased bg-up-offWhite overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <ProductDetails />
      <Benefits />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;