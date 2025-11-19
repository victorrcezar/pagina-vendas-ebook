
import React from 'react';
import { Zap, MessageSquare, DollarSign, ShieldCheck, Clock, MousePointerClick, HeartHandshake, Lock } from 'lucide-react';

const ChapterItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc?: string }) => (
  <div className="group flex gap-4 md:gap-5 p-5 md:p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1 border border-transparent hover:border-gray-100 cursor-default">
    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-up-primary flex items-center justify-center text-up-gold shadow-lg shadow-up-primary/10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-up-gold group-hover:text-up-primary group-hover:rotate-6">
      <Icon size={20} className="transition-transform duration-500 md:w-6 md:h-6" />
    </div>
    <div className="flex-1">
      <h4 className="font-heading font-bold text-base md:text-lg text-up-primary mb-1 md:mb-2 transition-colors duration-300 group-hover:text-up-secondary">{title}</h4>
      {desc && <p className="text-sm text-gray-500 font-normal leading-relaxed transition-colors duration-300 group-hover:text-gray-600">{desc}</p>}
    </div>
  </div>
);

export const ProductDetails: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-up-gold font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3 md:mb-4 block font-heading">Conteúdo Exclusivo</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-up-primary">
            16 Capítulos para dominar o WhatsApp
          </h2>
          <p className="text-up-neutral mt-4 md:mt-6 max-w-2xl mx-auto font-light text-base md:text-lg">
            Um manual direto e sofisticado. Estratégia pura, sem teoria desnecessária.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-12 md:mb-20">
          <ChapterItem icon={Zap} title="Velocidade Estratégica" desc="Como responder rápido sem parecer desesperado." />
          <ChapterItem icon={MessageSquare} title="Perguntas de Comando" desc="Conduza o cliente a dizer SIM antes do preço." />
          <ChapterItem icon={DollarSign} title="O Momento do Valor" desc="Quando enviar e como evitar objeções imediatas." />
          <ChapterItem icon={ShieldCheck} title="Autoridade Leve" desc="Gere segurança e confiança instantânea." />
          <ChapterItem icon={Clock} title="Urgência Real" desc="Como criar escassez com integridade." />
          <ChapterItem icon={MousePointerClick} title="O Link Perfeito" desc="Não jogue o link. Prepare o terreno." />
          <ChapterItem icon={HeartHandshake} title="Follow-up Elegante" desc="Recupere a venda sem ser inconveniente." />
          <ChapterItem icon={Lock} title="Fechamento Mestre" desc="Técnicas para fechar a venda sem fechar portas." />
          <ChapterItem icon={MessageSquare} title="Humanização" desc="Fuja dos scripts que parecem robôs." />
        </div>

        <div className="relative mt-8 md:mt-16 bg-up-secondary rounded-xl md:rounded-2xl p-6 md:p-16 text-white text-center shadow-2xl overflow-hidden mx-auto max-w-5xl group">
           <div className="relative z-10">
             <h3 className="font-heading font-bold text-xl md:text-3xl mb-6 md:mb-8 text-up-offWhite">
               Este guia é essencial para:
             </h3>
             <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {['Prestadores de Serviço', 'Esteticistas', 'Consultores', 'Vendas High Ticket', 'Social Media', 'Clínicas', 'Infoprodutores'].map(tag => (
                  <span key={tag} className="px-4 py-2 md:px-6 md:py-3 bg-up-primary/50 border border-white/10 text-up-gold rounded-lg text-xs md:text-sm uppercase tracking-wider font-bold hover:bg-up-primary transition-colors font-heading cursor-default hover:scale-105 duration-300">
                    {tag}
                  </span>
                ))}
             </div>
           </div>
           {/* Background pattern */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-up-gold rounded-full blur-[100px] opacity-10 transition-opacity duration-700 group-hover:opacity-20"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-up-green rounded-full blur-[100px] opacity-20 transition-opacity duration-700 group-hover:opacity-30"></div>
        </div>
      </div>
    </section>
  );
};
