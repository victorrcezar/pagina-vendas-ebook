import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-up-primary/95 backdrop-blur-md py-3 shadow-lg border-b border-white/5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <img 
             src="https://static.wixstatic.com/media/1f17f3_faf8f8e2f6fc4776b301d807c7ff80e6~mv2.png" 
             alt="UP! Company" 
             className={`transition-all duration-300 ${scrolled ? 'h-8 opacity-90' : 'h-10'}`}
           />
        </div>

        {/* CTA */}
        <button 
          onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
          className={`
            text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest px-6 py-2 rounded-md border transition-all duration-300
            ${scrolled 
              ? 'bg-up-gold border-up-gold text-up-primary hover:bg-white hover:border-white' 
              : 'bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-up-primary'
            }
          `}
        >
          Acessar Guia
        </button>
      </div>
    </header>
  );
};