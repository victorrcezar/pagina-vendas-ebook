import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group bg-transparent transition-all"
      >
        <span className={`font-heading font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-up-gold' : 'text-up-primary group-hover:text-up-secondary'}`}>
          {question}
        </span>
        <div className={`ml-4 p-2 rounded-full transition-all duration-300 shrink-0 ${isOpen ? 'bg-up-gold text-white rotate-180 shadow-md' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-500 font-normal leading-relaxed text-base pr-4 md:pr-12 pl-2 border-l-2 border-up-gold/20">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Serve para quem nunca vendeu pelo WhatsApp?",
      answer: "Com certeza. O guia começa dos fundamentos e avança para estratégias complexas. Se você é iniciante, vai aprender a forma certa desde o primeiro dia, evitando vícios que matam vendas. Se já é experiente, vai refinar sua técnica para converter mais."
    },
    {
      question: "Como funciona o acesso ao material?",
      answer: "O acesso é imediato e 100% digital. Assim que seu pagamento for confirmado, você receberá um e-mail com seu login e senha para acessar nossa área de membros exclusiva, onde poderá acessar o Web Reader (estilo Kindle) e ler todo o material online."
    },
    {
      question: "O pagamento é mensal?",
      answer: "Não! O pagamento é único. Você paga apenas uma vez e tem acesso vitalício ao conteúdo e a todas as futuras atualizações do guia, sem pegadinhas ou taxas extras."
    },
    {
      question: "Serve para produtos físicos e serviços?",
      answer: "Absolutamente. A metodologia é baseada em comportamento humano e princípios universais de negociação. Nossos alunos vendem desde imóveis e consultorias high-ticket até roupas e suplementos."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 bg-up-gold/10 text-up-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-heading mb-4">
            <HelpCircle size={14} />
            Dúvidas Frequentes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-up-primary mb-6">
            Não saia com dúvidas
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Tudo o que você precisa saber para tomar a decisão certa agora.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 md:p-10 reveal delay-100">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};