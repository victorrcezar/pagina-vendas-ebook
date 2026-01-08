import React from 'react';
import { Button } from './ui/Button';
import { Check, ShieldCheck, Zap } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="offer" className="py-20 md:py-24 bg-up-primary text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-up-secondary to-transparent opacity-50"></div>
      {/* Shine effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row reveal">
          
          {/* Left Side: Value Stack */}
          <div className="p-8 md:p-12 md:w-3/5 text-up-primary flex flex-col justify-between">
            <div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">Atendimento que Vende</h3>
                <p className="text-gray-500 mb-8 font-medium">O guia definitivo de conversão.</p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Acesso Vitalício ao Material",
                    "Leitura via Web Reader (Estilo Kindle)",
                    "16 Capítulos Práticos",
                    "Scripts de Fechamento",
                    "Técnicas de Negociação"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-up-gold/20 flex items-center justify-center shrink-0 group-hover:bg-up-gold group-hover:text-white transition-colors">
                        <Check size={12} className="text-up-goldDark group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-up-primary transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-50 p-3 rounded-lg border border-gray-100">
               <ShieldCheck size={16} className="text-up-gold" />
               <span>Garantia de 7 dias ou seu dinheiro de volta.</span>
            </div>
          </div>

          {/* Right Side: Price Action */}
          <div className="bg-gray-50 p-8 md:p-12 md:w-2/5 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-gray-100 text-center relative overflow-hidden">
             
             {/* Decor */}
             <div className="absolute top-0 right-0 w-24 h-24 bg-up-gold/10 rounded-full blur-2xl"></div>

             <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 animate-pulse">
               Oferta Limitada
             </span>
             
             <div className="mb-6 relative">
                <p className="text-gray-400 line-through text-sm mb-1">De R$ 47,90</p>
                <div className="flex items-center justify-center text-up-primary font-heading font-bold leading-none scale-110">
                  <span className="text-2xl mt-2">R$</span>
                  <span className="text-6xl mx-1 tracking-tighter">9</span>
                  <div className="flex flex-col items-start">
                    <span className="text-2xl">,90</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 font-medium">Pagamento único</p>
             </div>

             <Button 
               fullWidth 
               onClick={() => window.location.href = 'https://pay.kiwify.com.br/qcaYry1'}
               className="mb-4 shadow-xl shadow-up-gold/20 hover:shadow-up-gold/40 hover:-translate-y-1 transform transition-all duration-300 relative overflow-hidden group"
             >
               <span className="relative z-10">Acessar Agora</span>
               <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
             </Button>
             
             <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
               <Zap size={12} className="fill-up-gold text-up-gold" />
               <span>Acesso imediato via e-mail</span>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};