import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

export const Benefits: React.FC = () => {
  const benefits = [
    "Aumentar suas vendas imediatamente",
    "Saber exatamente o que dizer em cada situação",
    "Parar de perder clientes por atendimento ruim",
    "Transformar mensagens em oportunidades reais",
    "Responder com segurança e autoridade",
    "Fazer fechamentos naturais e elegantes",
    "Diminuir drasticamente as objeções",
    "Vender mais com o mesmo tráfego"
  ];

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-up-offWhite relative overflow-hidden">
      
      {/* Background Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-up-gold/5 blur-3xl rounded-full -z-10"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative reveal">
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-up-gold/20 rounded-2xl z-0 hidden md:block transition-transform duration-700 hover:translate-x-2 hover:translate-y-2"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-up-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Profissional em reunião" 
               className="w-full h-[500px] object-cover transform transition-transform duration-1000 group-hover:scale-105"
             />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-float hidden md:flex">
             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Check size={20} strokeWidth={3} />
             </div>
             <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Resultado</p>
                <p className="text-up-primary font-bold">Vendas Reais</p>
             </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 reveal delay-200">
          <h2 className="font-heading text-3xl md:text-4xl text-up-primary font-bold mb-8 leading-tight">
            O que você vai conquistar <br/> <span className="italic text-up-gold font-medium relative">
              após aplicar o guia?
              <svg className="absolute w-full h-2 bottom-0 left-0 text-up-gold/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
            </span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6 mb-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="mt-1 w-5 h-5 rounded-full bg-up-green/10 flex items-center justify-center shrink-0 group-hover:bg-up-green group-hover:scale-110 transition-all duration-300">
                  <Check className="w-3 h-3 text-up-green group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium group-hover:text-up-primary transition-colors">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-start gap-4 border-t border-gray-200 pt-8">
             <Button onClick={scrollToOffer} variant="primary" className="shadow-xl hover:shadow-2xl">
               Quero Ter Esses Resultados
             </Button>
             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-heading font-semibold pl-1 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Disponível para leitura imediata
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};