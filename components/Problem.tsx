import React from 'react';
import { X, MessageCircle, Clock, AlertTriangle } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: string }) => (
  <div 
    className={`bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-red-100 group reveal ${delay}`}
  >
    <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="font-heading font-bold text-xl text-up-primary mb-3 group-hover:text-red-600 transition-colors">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm md:text-base">{desc}</p>
  </div>
);

export const Problem: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-up-offWhite relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-up-primary mb-6">
            Por que você <span className="text-red-500 relative inline-block">
              perde vendas
              <svg className="absolute w-full h-2 bottom-0 left-0 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
            </span> todos os dias?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            O problema não é o seu produto, nem o preço. É a forma como você conduz a conversa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProblemCard 
            icon={MessageCircle}
            title="Respostas Robóticas"
            desc="Scripts prontos que mostram que você não está ouvindo o cliente, matando a conexão na hora."
            delay=""
          />
          <ProblemCard 
            icon={Clock}
            title="Timing Errado"
            desc="Demorar para responder ou enviar o preço rápido demais antes de gerar valor suficiente."
            delay="delay-[100ms]"
          />
          <ProblemCard 
            icon={AlertTriangle}
            title="Medo de Cobrar"
            desc="Achar que está incomodando ao fazer o follow-up e deixar o cliente esfriar."
            delay="delay-[200ms]"
          />
        </div>

      </div>
    </section>
  );
};