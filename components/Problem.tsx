
import React from 'react';
import { XCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const Problem: React.FC = () => {
  const problems = [
    "Respostas frias que afastam o cliente",
    "Demora para responder e perder o timing",
    "Enviar o preço na hora errada (o maior erro)",
    "Falta de direção na conversa",
    "Follow-up chato que parece cobrança",
    "Conversas que morrem no 'vou ver e te aviso'"
  ];

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-up-offWhite">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-up-primary mb-4 md:mb-6">
            Você não perde vendas por preço.
          </h2>
          <p className="text-base md:text-lg text-up-neutral font-normal leading-relaxed">
            Nem por falta de produto. Nem por falta de tráfego. <br className="hidden md:block"/>
            <span className="text-red-700 font-bold border-b border-red-200 pb-0.5">Você perde pelo atendimento.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-12">
          <div className="order-2 md:order-1">
            <div className="bg-white p-6 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 rounded-lg">
              <h3 className="text-lg md:text-xl font-heading font-bold text-up-primary mb-6 md:mb-8 flex items-center gap-3">
                <AlertCircle className="text-up-gold" />
                O ciclo da venda perdida:
              </h3>
              <ul className="space-y-4 md:space-y-5">
                {problems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 md:gap-4 group">
                    <XCircle className="w-5 h-5 text-gray-300 group-hover:text-red-400 transition-colors shrink-0 mt-0.5" />
                    <span className="text-up-neutral font-normal text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl text-up-primary font-heading font-medium leading-relaxed">
              Isso te faz pensar que <strong>“o problema é o anúncio”</strong> ou que <strong>“o público não tem dinheiro”</strong>.
            </p>
            <p className="text-base md:text-lg text-up-neutral font-normal leading-relaxed">
              Mas a verdade é simples: você não precisa de mais clientes agora. Você precisa <span className="bg-up-gold/20 px-2 py-0.5 text-up-primary font-semibold rounded">aproveitar melhor os que já chegam</span>.
            </p>
            <div className="p-6 md:p-8 bg-up-primary text-up-offWhite border-l-4 border-up-gold shadow-2xl shadow-up-primary/10 rounded-r-lg">
              <p className="font-heading italic font-medium text-base md:text-lg">
                "Imagine vender sem parecer vendedor, sem forçar a barra e com o cliente te agradecendo no final?"
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={scrollToOffer} className="bg-red-700 hover:bg-red-800 text-white shadow-red-900/20 shadow-xl border-none ring-offset-2 ring-red-700 w-full md:w-auto">
            Chega de Perder Clientes
          </Button>
        </div>
      </div>
    </section>
  );
};
