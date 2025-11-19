
import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="offer" className="py-16 md:py-24 bg-up-offWhite">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Offer Container */}
          <div className="bg-up-primary rounded-xl shadow-2xl overflow-hidden relative">
            
            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-up-gold rounded-full blur-[80px] md:blur-[120px] opacity-10 pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2">
              
              {/* Left Side: Value */}
              <div className="p-8 md:p-14 border-b md:border-b-0 md:border-r border-white/10 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-block bg-up-gold/20 text-up-gold text-xs font-bold px-3 py-1 rounded uppercase tracking-widest font-heading">
                    Oferta Exclusiva
                  </div>
                  <div className="inline-flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg shadow-red-600/20 animate-pulse">
                    <Flame size={12} className="fill-current" />
                    Mais Vendido
                  </div>
                </div>
                
                <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-2">Atendimento Que Vende</h3>
                <p className="text-gray-400 font-normal mb-8 md:mb-10 text-sm md:text-base">O Método Definitivo de Vendas</p>
                
                <div className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-up-gold shrink-0 mt-0.5" /> 
                      <span><strong className="text-white font-semibold">Livro Digital (Web Reader):</strong> 16 Capítulos Práticos</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-up-gold shrink-0 mt-0.5" /> 
                      <span>Estratégias de <strong className="text-white font-semibold">Negociação Avançada</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-up-gold shrink-0 mt-0.5" /> 
                      <span>Técnicas de <strong className="text-white font-semibold">Fechamento</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-up-gold shrink-0 mt-0.5" /> 
                      <span>Exemplos Reais de <strong className="text-white font-semibold">Conversas</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Investment */}
              <div className="bg-up-secondary p-8 md:p-14 flex flex-col justify-center items-center text-center relative z-10">
                <p className="text-gray-400 line-through text-base md:text-lg font-light mb-0">De R$ 47,90</p>
                <p className="text-gray-300 text-xs md:text-sm font-light uppercase tracking-widest mb-2">Por Apenas</p>
                
                <div className="animate-heartbeat origin-center mb-8 relative">
                   <div className="flex items-baseline justify-center gap-1 leading-none">
                      <span className="text-2xl md:text-3xl text-gray-400 font-light self-start mt-4 md:mt-8 mr-1">R$</span>
                      {/* Adjusted font size for mobile to prevent overflow */}
                      <span className="text-[6rem] sm:text-[8rem] md:text-[11rem] font-heading font-extrabold text-white tracking-tighter drop-shadow-2xl">
                        19
                      </span>
                      <span className="text-4xl md:text-7xl text-up-gold font-bold self-end mb-3 md:mb-6">,90</span>
                   </div>
                </div>
                
                <Button 
                  fullWidth 
                  onClick={() => window.location.href = 'https://pay.kiwify.com.br/qcaYry1'}
                  className="mb-6 w-full text-sm md:text-base tracking-widest uppercase bg-up-gold text-up-primary hover:bg-white font-heading font-bold shadow-up-gold/20 hover:shadow-up-gold/40 py-4 md:py-4"
                >
                  Acessar Agora
                </Button>

                <div className="flex flex-wrap justify-center items-center gap-2 text-gray-400 text-[10px] md:text-xs border border-white/10 px-3 md:px-4 py-2 rounded-full">
                  <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-up-gold" />
                  <span>Pagamento Único • Acesso Vitalício</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
