import React from 'react';
import { Zap, MessageSquare, DollarSign, ShieldCheck, Clock, MousePointerClick, HeartHandshake, Lock } from 'lucide-react';

interface ChapterItemProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}

const ChapterItem: React.FC<ChapterItemProps> = ({ icon: Icon, title, desc, index }) => (
  <div 
    className="flex items-start gap-4 p-6 bg-up-offWhite rounded-xl hover:bg-white hover:shadow-card hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-gray-100 group reveal"
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    <div className="shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-up-primary group-hover:bg-up-primary group-hover:text-up-gold transition-colors duration-300">
      <Icon size={22} />
    </div>
    <div>
      <h4 className="font-heading font-bold text-lg text-up-primary mb-2 group-hover:text-up-goldDark transition-colors">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const ProductDetails: React.FC = () => {
  const chapters = [
    { icon: Zap, title: "Velocidade Estratégica", desc: "Responda rápido, mas do jeito certo para criar conexão imediata." },
    { icon: MessageSquare, title: "Comando da Conversa", desc: "Técnicas para liderar o chat e não ser apenas um tirador de dúvidas." },
    { icon: DollarSign, title: "Ancoragem de Valor", desc: "Prepare o terreno emocional antes de revelar o preço." },
    { icon: ShieldCheck, title: "Autoridade Instantânea", desc: "Gatilhos mentais que geram confiança na primeira mensagem." },
    { icon: Clock, title: "Urgência Ética", desc: "Como fazer o cliente agir agora sem parecer desesperado." },
    { icon: MousePointerClick, title: "O Link Mágico", desc: "O momento exato e a frase perfeita para enviar o checkout." },
    { icon: HeartHandshake, title: "Follow-up Invisível", desc: "Cobre o cliente gerando valor, não chatice." },
    { icon: Lock, title: "Quebra de Objeções", desc: "Respostas prontas para 'tá caro' e 'vou falar com meu marido'." },
    { icon: MessageSquare, title: "Anti-Robô", desc: "Humanização estratégica para conectar e vender." }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-up-primary mb-6">
            O que você vai dominar
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            16 capítulos desenhados para execução imediata. Sem enrolação, direto ao ponto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {chapters.map((chapter, idx) => (
             <ChapterItem key={idx} icon={chapter.icon} title={chapter.title} desc={chapter.desc} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};