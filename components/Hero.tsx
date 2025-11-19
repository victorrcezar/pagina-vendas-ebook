
import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.scrollY * 0.15);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-up-primary text-up-offWhite overflow-hidden pt-28 pb-16 md:pt-32 md:pb-40">
      {/* Decorative Background Elements - Subtle & Premium */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-up-secondary rounded-full blur-3xl opacity-40"></div>
         <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-up-green rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 border border-up-gold/30 bg-up-gold/10 px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-up-gold"></span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-up-gold font-heading">Método Prático</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Transforme seu WhatsApp em uma <span className="text-up-gold italic font-medium">máquina de vendas</span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              O guia definitivo para dominar conversas, conduzir decisões e vender todos os dias com elegância — sem scripts robóticos.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start mb-10">
               <Button onClick={scrollToOffer} className="w-full sm:w-auto">
                 Quero Vender Mais
               </Button>
               <p className="text-xs md:text-sm text-gray-400 font-light">
                 Acesso imediato • Compra Segura
               </p>
            </div>
          </div>

          {/* Visual Representation (2025 Mockup) */}
          <div 
            className="w-full lg:w-1/2 relative hidden md:block will-change-transform"
            style={{ transform: `translateY(${offset}px)` }}
          >
             <div className="relative mx-auto w-[320px] lg:w-[350px] h-[680px] transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out group">
                
                {/* Glow/Shadow behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-up-gold/20 to-up-primary/30 blur-[60px] rounded-[4rem] group-hover:opacity-75 transition-opacity duration-500"></div>

                {/* The Device Frame (Titanium/Metal Look) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4a4a4a] via-[#2a2a2a] to-[#1a1a1a] rounded-[3rem] p-[3px] shadow-2xl ring-1 ring-white/10 z-20">
                    
                    {/* Screen Bezel (Black border) */}
                    <div className="absolute inset-[3px] bg-black rounded-[2.8rem] border-[4px] border-black overflow-hidden flex flex-col ring-1 ring-gray-800">
                        
                        {/* Dynamic Island / Top Bar */}
                        <div className="absolute top-0 left-0 right-0 h-12 z-30 flex justify-center items-start pt-3 pointer-events-none">
                             <div className="w-28 h-7 bg-black rounded-full flex items-center justify-center gap-3 px-3 ring-1 ring-white/5 shadow-lg">
                                 {/* Camera sensors */}
                                 <div className="w-2 h-2 rounded-full bg-[#121212] ring-1 ring-white/10"></div>
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]"></div>
                             </div>
                        </div>

                        {/* Screen Content */}
                        <div className="flex-1 bg-[#0b141a] relative flex flex-col h-full w-full">
                            
                            {/* Status Bar overlay */}
                            <div className="h-12 px-8 flex items-center justify-between text-white text-[10px] font-medium pt-2 z-20 select-none">
                               <span>19:41</span>
                               <div className="flex gap-1.5 items-center">
                                   <div className="h-2.5 w-2.5 rounded-full bg-white"></div> {/* Signal */}
                                   <div className="h-2.5 w-2.5 rounded-full bg-white"></div> {/* WiFi */}
                                   <div className="w-4 h-2.5 rounded-sm border border-white/30 flex items-center justify-start px-[1px]"><div className="w-[60%] h-[60%] bg-white rounded-[1px]"></div></div>
                               </div>
                            </div>

                            {/* App Header (WhatsApp style) */}
                            <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between shadow-md z-10 border-b border-[#2a3942] select-none">
                                <div className="flex items-center gap-3">
                                    {/* Avatar */}
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-up-gold to-yellow-600 p-0.5">
                                        <img src="https://ui-avatars.com/api/?name=C+L&background=0A1F2E&color=C49B66" alt="Cliente" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-100 font-semibold text-sm leading-tight font-sans">Cliente Interessado</span>
                                        <span className="text-up-gold text-[10px] leading-tight font-medium">online</span>
                                    </div>
                                </div>
                                <div className="flex gap-5 text-up-gold pr-2">
                                   <div className="w-4 h-4 border-2 border-current rounded-full opacity-60"></div>
                                   <div className="w-1 h-4 border-r-2 border-current opacity-60"></div>
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 p-4 space-y-4 overflow-hidden relative flex flex-col">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-[0.04] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
                                
                                {/* Date Divider */}
                                <div className="flex justify-center mb-2 z-10">
                                    <span className="bg-[#1f2c34] text-[#8696a0] text-[10px] px-3 py-1 rounded-lg shadow-sm font-medium">Hoje</span>
                                </div>

                                {/* Message 1: Client */}
                                <div className="flex justify-start z-10 animate-in slide-in-from-left-4 duration-500 fill-mode-backwards">
                                    <div className="bg-[#1f2c34] text-white text-[13px] p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative leading-snug">
                                         <span className="absolute -top-0 -left-2">
                                             <svg viewBox="0 0 8 13" height="13" width="8" className="fill-[#1f2c34]"><path d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
                                         </span>
                                         Vi o anúncio do guia. Funciona mesmo para quem é iniciante?
                                         <div className="text-[9px] text-[#8696a0] text-right mt-1 font-medium">19:42</div>
                                    </div>
                                </div>

                                {/* Message 2: User (Seller) */}
                                <div className="flex justify-end z-10 animate-in slide-in-from-right-4 duration-500 delay-300 fill-mode-backwards">
                                     <div className="bg-[#005c4b] text-white text-[13px] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] relative leading-snug">
                                         <span className="absolute -top-0 -right-2 rotate-180">
                                             <svg viewBox="0 0 8 13" height="13" width="8" className="fill-[#005c4b]"><path d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
                                         </span>
                                         Funciona sim! O método começa do zero. Você aprende a não cometer erros que queimam vendas logo de cara. 🚀
                                         <div className="text-[9px] text-[#aebac1] text-right mt-1 flex justify-end items-center gap-1 font-medium">
                                             19:43 <span className="text-[#53bdeb] font-bold text-[10px]">✓✓</span>
                                         </div>
                                     </div>
                                </div>

                                {/* Message 3: Client */}
                                <div className="flex justify-start z-10 animate-in slide-in-from-left-4 duration-500 delay-700 fill-mode-backwards">
                                    <div className="bg-[#1f2c34] text-white text-[13px] p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative leading-snug">
                                         <span className="absolute -top-0 -left-2">
                                             <svg viewBox="0 0 8 13" height="13" width="8" className="fill-[#1f2c34]"><path d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
                                         </span>
                                         Tenho medo de parecer chato cobrando o cliente depois...
                                         <div className="text-[9px] text-[#8696a0] text-right mt-1 font-medium">19:44</div>
                                    </div>
                                </div>
                                
                                 {/* Message 4: User (Seller) */}
                                <div className="flex justify-end z-10 animate-in slide-in-from-right-4 duration-500 delay-1000 fill-mode-backwards">
                                     <div className="bg-[#005c4b] text-white text-[13px] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[90%] relative leading-snug">
                                         <span className="absolute -top-0 -right-2 rotate-180">
                                             <svg viewBox="0 0 8 13" height="13" width="8" className="fill-[#005c4b]"><path d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
                                         </span>
                                         Essa é a melhor parte. O capítulo de <strong>"Follow-up Elegante"</strong> ensina a cobrar gerando valor, não pressão. O cliente te agradece no final.
                                         <div className="text-[9px] text-[#aebac1] text-right mt-1 flex justify-end items-center gap-1 font-medium">
                                             19:45 <span className="text-[#53bdeb] font-bold text-[10px]">✓✓</span>
                                         </div>
                                     </div>
                                </div>

                                 {/* Typing Indicator */}
                                <div className="flex justify-start z-10 animate-in fade-in duration-300 delay-[1500ms] fill-mode-backwards">
                                    <div className="bg-[#1f2c34] text-white text-sm p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1 h-9">
                                         <div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce"></div>
                                         <div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce delay-75"></div>
                                         <div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce delay-150"></div>
                                    </div>
                                </div>

                            </div>

                             {/* Input Area */}
                             <div className="h-[70px] bg-[#1f2c34] px-2 flex items-start pt-3 gap-2 z-10">
                                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#8696a0] hover:bg-white/5 transition-colors">
                                    <span className="text-2xl font-light leading-none pb-1">+</span>
                                 </div>
                                 <div className="flex-1 bg-[#2a3942] h-10 rounded-2xl px-4 flex items-center text-sm text-[#8696a0] font-normal">
                                     Quero saber mais...
                                 </div>
                                 <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform">
                                     <svg viewBox="0 0 24 24" width="18" height="18" className="fill-white ml-0.5"><path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                                 </div>
                             </div>

                             {/* Home Indicator */}
                             <div className="absolute bottom-1 left-0 right-0 flex justify-center h-6 z-30 items-end pb-2">
                                 <div className="w-36 h-1.5 bg-white/20 rounded-full"></div>
                             </div>

                        </div>
                    </div>
                </div>

                {/* Physical Buttons (Side) */}
                <div className="absolute top-24 -left-[3px] w-[3px] h-7 bg-gray-600 rounded-l-md shadow-sm opacity-90"></div> {/* Silent switch */}
                <div className="absolute top-36 -left-[3px] w-[3px] h-14 bg-gray-600 rounded-l-md shadow-sm opacity-90"></div> {/* Vol Up */}
                <div className="absolute top-52 -left-[3px] w-[3px] h-14 bg-gray-600 rounded-l-md shadow-sm opacity-90"></div> {/* Vol Down */}
                <div className="absolute top-40 -right-[3px] w-[3px] h-20 bg-gray-600 rounded-r-md shadow-sm opacity-90"></div> {/* Power */}

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
