import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewCard = ({ name, role, text, delay }: { name: string, role: string, text: string, delay: string }) => (
  <div className={`bg-white p-8 md:p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 rounded-2xl relative group reveal ${delay}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-up-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="mb-6 text-up-gold/20 group-hover:text-up-gold/40 transition-colors">
       <Quote size={40} className="fill-current transform group-hover:scale-110 transition-transform duration-500" />
    </div>
    <p className="text-gray-600 text-base md:text-lg leading-relaxed italic mb-8 flex-grow font-normal relative z-10">"{text}"</p>
    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
      <div>
        <p className="font-bold text-up-primary text-sm uppercase tracking-wide font-heading">{name}</p>
        <p className="text-xs text-gray-400 mt-1 font-medium">{role}</p>
      </div>
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-up-gold fill-current" />)}
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-up-offWhite relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-up-primary mb-4">
            Quem aplicou, <span className="text-up-gold italic font-medium bg-up-primary/5 px-2 rounded-lg">vendeu.</span>
          </h2>
          <p className="text-gray-500 text-lg">Histórias reais de quem transformou o atendimento.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <ReviewCard 
            name="Camila S." 
            role="Estética Avançada" 
            text="Eu nunca imaginei que atendimento fazia tanta diferença. Só aplicando a técnica do link aumentei em 3x o faturamento da clínica." 
            delay=""
          />
          <ReviewCard 
            name="Rafael M." 
            role="Consultor Financeiro" 
            text="Eu não sabia conduzir, ficava esperando o cliente decidir. Agora eu sei guiar. Esse guia mudou a postura e a percepção de valor do meu negócio." 
            delay="delay-100"
          />
          <ReviewCard 
            name="Juliana P." 
            role="Social Media" 
            text="Vendo serviços high-ticket há anos e NUNCA tive tanta clareza do que dizer. Os scripts de follow-up são simplesmente geniais." 
            delay="delay-200"
          />
        </div>
      </div>
    </section>
  );
};