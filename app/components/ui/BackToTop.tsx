import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Controla a visibilidade do botão e o progresso de rolagem
  useEffect(() => {
    const toggleVisibility = () => {
      // Calcula a porcentagem de rolagem
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentPosition = window.scrollY;
      const scrollPercentage = Math.min(100, Math.max(0, (currentPosition / scrollHeight) * 100));
      
      setScrollProgress(scrollPercentage);
      
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolar para o topo com animação suave
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`back-to-top-button fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 group ${!isHovering ? 'animate-float' : ''}`}
          aria-label="Voltar ao topo"
        >
          {/* Círculo de progresso */}
          <svg 
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="5" 
            />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="white" 
              strokeWidth="5"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * scrollProgress) / 100}
              className="transition-all duration-300"
            />
          </svg>

          {/* Ícone de seta */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="arrow-icon w-5 h-5 relative z-10 transition-transform"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>

          {/* Efeito de pulso */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur opacity-20 group-hover:opacity-40 transition-opacity"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 