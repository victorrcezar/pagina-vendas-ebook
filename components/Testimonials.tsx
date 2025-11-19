import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewCard = ({ name, role, text }: { name: string, role: string, text: string }) => (
  <div className="bg-up-offWhite p-10 hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full border-t-4 border-up-gold shadow-lg rounded-lg">
    <div className="mb-6 text-up-primary/20">
       <Quote size={40} />
    </div>
    <p className="text-up-neutral text-lg leading-relaxed italic mb-8 flex-grow font-normal">"{text}"</p>
    <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-6">
      <div>
        <p className="font-bold text-up-primary text-sm uppercase tracking-wide font-heading">{name}</p>
        <p className="text-xs text-gray-500 mt-1 font-medium">{role}</p>
      </div>
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-up-gold fill-current" />)}
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-up-primary">
            Quem aplicou, <span className="text-up-gold italic font-medium">vendeu.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ReviewCard 
            name="Camila S." 
            role="Estética Avançada" 
            text="Eu nunca imaginei que atendimento fazia tanta diferença. Só aplicando a técnica do link aumentei em 3x o faturamento da clínica." 
          />
          <ReviewCard 
            name="Rafael M." 
            role="Consultor Financeiro" 
            text="Eu não sabia conduzir, ficava esperando o cliente decidir. Agora eu sei guiar. Esse guia mudou a postura e a percepção de valor do meu negócio." 
          />
          <ReviewCard 
            name="Juliana P." 
            role="Social Media" 
            text="Vendo serviços high-ticket há anos e NUNCA tive tanta clareza do que dizer. Os scripts de follow-up são simplesmente geniais." 
          />
        </div>
      </div>
    </section>
  );
};