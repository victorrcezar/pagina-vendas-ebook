import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-up-primary text-gray-400 py-16 border-t border-white/5 reveal">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-10 flex justify-center">
           {/* Logo Placeholder - Mantendo a URL original mas adicionando efeito de brilho */}
           <div className="relative group">
             <div className="absolute inset-0 bg-up-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
             <img 
               src="https://static.wixstatic.com/media/1f17f3_1e2b54d2fd894dd997c6cbc18e940576~mv2.png" 
               alt="UP! Company" 
               className="relative z-10 h-28 md:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105"
             />
           </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-up-gold transition-colors hover:underline decoration-up-gold/50 underline-offset-4">Política de Privacidade</a>
          <a href="#" className="hover:text-up-gold transition-colors hover:underline decoration-up-gold/50 underline-offset-4">Termos de Uso</a>
          <a href="#" className="hover:text-up-gold transition-colors hover:underline decoration-up-gold/50 underline-offset-4">Contato</a>
        </div>

        <div className="border-t border-white/5 pt-8 max-w-lg mx-auto">
          <p className="text-[10px] text-gray-600 leading-relaxed">
            © {new Date().getFullYear()} UP! Company. Todos os direitos reservados. <br/>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. As estratégias e resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
};