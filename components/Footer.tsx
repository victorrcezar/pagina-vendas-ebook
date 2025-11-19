import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-up-primary text-gray-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-10 flex justify-center">
           <img 
             src="https://static.wixstatic.com/media/1f17f3_1e2b54d2fd894dd997c6cbc18e940576~mv2.png" 
             alt="UP! Company" 
             className="h-28 md:h-40 w-auto object-contain opacity-100 transition-all duration-500 hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
           />
        </div>
        
        <div className="flex justify-center gap-8 mb-10 text-xs font-medium uppercase tracking-wider">
          <a href="#" className="hover:text-up-gold transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-up-gold transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-up-gold transition-colors">Contato</a>
        </div>

        <p className="text-[10px] text-gray-600 leading-relaxed max-w-md mx-auto">
          © {new Date().getFullYear()} UP! Company. Todos os direitos reservados. <br/>
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
        </p>
      </div>
    </footer>
  );
};