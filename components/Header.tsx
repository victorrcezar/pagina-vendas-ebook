
import React, { useEffect, useState } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = scrolled 
    ? "text-up-primary hover:text-up-gold" 
    : "text-white/90 hover:text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-3' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex items-center">
            {scrolled ? (
               <img 
                 src="https://static.wixstatic.com/media/1f17f3_faf8f8e2f6fc4776b301d807c7ff80e6~mv2.png" 
                 alt="UP! Company" 
                 className="h-8 md:h-10 w-auto object-contain"
               />
            ) : (
               <img 
                 src="https://static.wixstatic.com/media/1f17f3_1e2b54d2fd894dd997c6cbc18e940576~mv2.png" 
                 alt="UP! Company" 
                 className="h-9 md:h-12 w-auto object-contain"
               />
            )}
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#faq" 
              className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${linkClass}`}
            >
              FAQ
            </a>
          </nav>
        </div>
        
        <button 
          onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
          className={`font-medium text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 md:px-6 md:py-3 rounded transition-colors border ${
            scrolled 
              ? 'bg-up-gold text-up-primary border-up-gold hover:bg-up-primary hover:text-up-gold hover:border-up-primary' 
              : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-up-primary'
          }`}
        >
          Quero Vender Mais
        </button>
      </div>
    </header>
  );
};
