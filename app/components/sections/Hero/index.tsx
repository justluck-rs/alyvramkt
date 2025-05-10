import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../../ui/Container';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { motion } from 'framer-motion';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para adicionar efeitos parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Efeito parallax para os elementos decorativos
  const parallaxValue = scrolled ? '-5%' : '0%';

  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <HeroBackground />

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

      {/* Linhas decorativas */}
      <div className="absolute top-1/4 left-0 w-1/4 h-px bg-gradient-to-r from-transparent to-purple-500/30"></div>
      <div className="absolute top-1/3 right-0 w-1/4 h-px bg-gradient-to-l from-transparent to-blue-500/30"></div>
      <div className="absolute bottom-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-purple-500/20"></div>

      {/* Formas geométricas */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 border border-purple-500/20 rounded-full"
        style={{ y: parallaxValue }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-32 right-20 w-24 h-24 border border-blue-500/20 rounded-full"
        style={{ y: parallaxValue }}
        animate={{ rotate: -360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      ></motion.div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent heroRef={heroRef} />
          
          {/* Elemento visual animado para a direita */}
          <motion.div 
            className="hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Círculo central */}
            <div className="relative w-64 h-64">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              
              {/* Anéis animados */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-purple-400/20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              
              <motion.div 
                className="absolute -inset-4 rounded-full border border-blue-400/10"
                animate={{ scale: [1.1, 1.3, 1.1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              ></motion.div>
              
              <motion.div 
                className="absolute -inset-8 rounded-full border border-purple-400/5"
                animate={{ scale: [1.2, 1.4, 1.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              ></motion.div>
              
              {/* Partículas */}
              <motion.div
                className="absolute top-1/4 left-0 w-3 h-3 rounded-full bg-purple-400/50"
                animate={{ 
                  x: [0, 20, 0], 
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              
              <motion.div
                className="absolute bottom-1/4 right-0 w-2 h-2 rounded-full bg-blue-400/50"
                animate={{ 
                  x: [0, -20, 0], 
                  y: [0, 20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              ></motion.div>
              
              <motion.div
                className="absolute top-0 right-1/4 w-4 h-4 rounded-full bg-purple-300/40"
                animate={{ 
                  x: [0, -10, 0], 
                  y: [0, 15, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decoração - círculos flutuantes */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-purple-500/20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-blue-500/20 blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-3/4 left-1/3 w-16 h-16 rounded-full bg-purple-300/20 blur-xl animate-pulse delay-1000"></div>

        {/* Indicador de scroll */}
        <motion.div 
          className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 items-center flex-col"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-xs text-purple-200/70 mb-2">Role para explorar</span>
          <motion.div 
            className="w-5 h-10 border border-purple-400/30 rounded-full flex justify-center p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-1 bg-purple-400 rounded-full"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 