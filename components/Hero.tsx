import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [messageStep, setMessageStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.scrollY * 0.15);
      });
    };
    window.addEventListener('scroll', handleScroll);
    
    // Chat Animation Sequence
    const timeouts = [
      setTimeout(() => setMessageStep(1), 800),  // Msg 1 (Client)
      setTimeout(() => setMessageStep(2), 2000), // Msg 2 (Seller)
      setTimeout(() => setMessageStep(3), 3500), // Msg 3 (Client)
      setTimeout(() => setMessageStep(4), 5000), // Msg 4 (Seller)
    ];

    return () => {
      window.removeEventListener('scroll', handleScroll);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-up-primary text-up-offWhite min-h-screen flex flex-col justify-center pt-24 pb-12 md:pt-0 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-l from-[#0B1A26] to-transparent opacity-60 z-0 pointer-events-none"></div>
      
      {/* Animated Glow Spot */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-up-gold/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-10 lg:gap-20 items-center h-full">
        
        {/* Left Column: Text */}
        <div className="text-left animate-in fade-in slide-in-from-bottom-8 duration-1000 order-2 md:order-1 flex flex-col items-start">
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full border border-up-gold/30 bg-up-gold/5 mb-6 md:mb-8 backdrop-blur-sm">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-up-gold font-heading">
                • Método Prático
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
              Transforme seu <br/>
              WhatsApp em uma <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-up-gold to-[#F5D77F] italic font-serif font-light">máquina de vendas</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 md:mb-10 font-light leading-relaxed">
              O guia definitivo para dominar conversas, conduzir decisões e vender todos os dias com elegância — sem scripts robóticos.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button onClick={scrollToOffer} className="w-full sm:w-auto px-8 py-4 text-base font-bold bg-up-gold text-up-primary hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Quero Vender Mais <span className="ml-2">→</span>
              </Button>
              <span className="hidden sm:block text-xs text-gray-500 font-medium tracking-wide opacity-80">
                Acesso imediato • Compra Segura
              </span>
            </div>
            {/* Mobile safe text */}
            <div className="sm:hidden mt-4 text-center w-full">
                <span className="text-xs text-gray-500 font-medium tracking-wide opacity-80">Acesso imediato • Compra Segura</span>
            </div>
        </div>

        {/* Right Column: Phone Mockup */}
        <div 
          className="relative perspective-1000 flex justify-center md:justify-end animate-in fade-in zoom-in duration-1000 delay-200 order-1 md:order-2"
          style={{ transform: window.innerWidth > 768 ? `translateY(${offset * 0.1}px)` : 'none' }}
        >
             {/* Phone Frame */}
             <div className="relative w-[280px] md:w-[340px] bg-[#111] rounded-[45px] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.02]">
                
                {/* Status Bar */}
                <div className="h-12 bg-[#0B141A] flex items-center justify-between px-6 pt-2 select-none z-30 relative">
                    <span className="text-[10px] text-white font-medium">19:41</span>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
                        <div className="w-4 h-1.5 bg-white rounded-full opacity-50"></div>
                    </div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3 border-b border-[#2A3942] z-20 relative shadow-md">
                    <div className="w-10 h-10 rounded-full border border-up-gold/50 flex items-center justify-center text-up-gold font-bold text-xs bg-[#111]">CL</div>
                    <div>
                        <p className="text-white text-sm font-semibold">Cliente Interessado</p>
                        <p className="text-[10px] text-up-gold/80 flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-up-gold animate-pulse"></span> online
                        </p>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="bg-[#0B141A] p-4 h-[420px] md:h-[480px] space-y-4 flex flex-col font-sans relative overflow-hidden">
                    {/* Wallpaper Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none"></div>

                    {/* Date Bubble */}
                    <div className="self-center bg-[#1F2C34] px-3 py-1 rounded-lg mb-2 z-10 shadow-sm opacity-80">
                        <span className="text-[10px] text-[#8696A0] font-medium">Hoje</span>
                    </div>

                    {/* Msg 1 - Client */}
                    <div className={`self-start bg-[#1F2C34] p-3 rounded-lg rounded-tl-none max-w-[90%] z-10 shadow-sm transition-all duration-500 ease-out transform ${messageStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className="text-white text-[13px] leading-relaxed">Vi o anúncio do guia. Funciona mesmo para quem é iniciante?</p>
                        <span className="text-[10px] text-[#8696A0] float-right mt-1 ml-2">19:42</span>
                    </div>

                    {/* Msg 2 - Seller */}
                    <div className={`self-end bg-[#005C4B] p-3 rounded-lg rounded-tr-none max-w-[90%] z-10 shadow-sm transition-all duration-500 ease-out transform ${messageStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className="text-white text-[13px] leading-relaxed">Funciona sim! O método começa do zero. Você aprende a não cometer erros que queimam vendas logo de cara. 🚀</p>
                        <div className="flex justify-end items-center gap-1 mt-1">
                            <span className="text-[10px] text-[#C1E8E0]">19:43</span>
                            <span className="text-[#53BDEB] text-[10px]">✓✓</span>
                        </div>
                    </div>

                    {/* Msg 3 - Client */}
                    <div className={`self-start bg-[#1F2C34] p-3 rounded-lg rounded-tl-none max-w-[90%] z-10 shadow-sm transition-all duration-500 ease-out delay-100 transform ${messageStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className="text-white text-[13px] leading-relaxed">Tenho medo de parecer chato cobrando o cliente depois...</p>
                        <span className="text-[10px] text-[#8696A0] float-right mt-1 ml-2">19:44</span>
                    </div>

                    {/* Msg 4 - Seller */}
                    <div className={`self-end bg-[#005C4B] p-3 rounded-lg rounded-tr-none max-w-[90%] z-10 shadow-sm transition-all duration-500 ease-out transform ${messageStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className="text-white text-[13px] leading-relaxed">Essa é a melhor parte. O capítulo de <span className="font-bold text-white">"Follow-up Elegante"</span> ensina a cobrar gerando valor, não pressão.</p>
                        <div className="flex justify-end items-center gap-1 mt-1">
                            <span className="text-[10px] text-[#C1E8E0]">19:45</span>
                            <span className="text-[#53BDEB] text-[10px]">✓✓</span>
                        </div>
                    </div>
                    
                    {/* Gradient Fade at bottom to smooth out scrolling/content */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0B141A] to-transparent z-10"></div>
                </div>

                {/* Input Area */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#1F2C34] p-3 px-4 flex items-center gap-3 z-20 border-t border-[#2A3942]">
                   <div className="text-[#8696A0] text-xl font-light cursor-pointer hover:text-white transition-colors">+</div>
                   <div className="flex-1 bg-[#2A3942] rounded-full py-2 px-4 text-[13px] text-[#8696A0] flex items-center">
                      <span className="animate-pulse">|</span>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center text-white cursor-pointer shadow-lg hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                   </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};