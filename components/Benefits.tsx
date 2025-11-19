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
    <section className="py-24 bg-up-offWhite">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-up-gold/30 rounded-xl z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Profissional em reunião" 
            className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="font-heading text-3xl md:text-4xl text-up-primary font-bold mb-10 leading-tight">
            O que você vai conquistar <br/> <span className="italic text-up-gold font-medium">após aplicar o guia?</span>
          </h2>
          <div className="space-y-5 mb-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="mt-1 bg-up-green/10 p-1 rounded-full group-hover:bg-up-green/20 transition-colors">
                  <Check className="w-4 h-4 text-up-green" />
                </div>
                <p className="text-lg text-up-neutral font-normal">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-start gap-4 border-t border-gray-200 pt-8">
             <Button onClick={scrollToOffer} variant="primary">
               Quero Ter Esses Resultados
             </Button>
             <p className="text-xs uppercase tracking-widest text-gray-400 font-heading font-semibold pl-1">Disponível para leitura imediata</p>
          </div>
        </div>

      </div>
    </section>
  );
};