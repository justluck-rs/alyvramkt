import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import { useSiteData } from '../../../hooks/useSiteData';
import { useState } from 'react';

interface HeroContentProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
}

export function HeroContent({ heroRef }: HeroContentProps) {
  const { hero } = useSiteData();
  const [hoverButton, setHoverButton] = useState<string | null>(null);

  // Configurações das animações para os elementos
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, delay: 0.2, ease: "easeOut" }
    }
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, delay: 0.4, ease: "easeOut" }
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.6,
        duration: 0.5
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div ref={heroRef} className="lg:max-w-xl">
      {/* Título com gradiente animado */}
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 animate-gradient-text">
          {hero.title}
        </span>
      </motion.h1>

      {/* Subtítulo com animação de entrada */}
      <motion.p 
        className="text-xl text-purple-100/90 mb-8 leading-relaxed"
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
      >
        {hero.subtitle}
      </motion.p>

      {/* Botões com efeitos hover aprimorados */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        variants={buttonsVariants}
        initial="hidden"
        animate="visible"
      >
        <Button 
          variant="primary" 
          size="lg" 
          className={`relative overflow-hidden group animate-pulse-shadow ${hoverButton === 'primary' ? 'shadow-lg shadow-purple-600/30' : ''}`}
          onMouseEnter={() => setHoverButton('primary')}
          onMouseLeave={() => setHoverButton(null)}
        >
          <span className="relative z-10">{hero.cta}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Efeito de partículas no hover */}
          {hoverButton === 'primary' && (
            <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md rounded-full"></span>
          )}
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm"
          onMouseEnter={() => setHoverButton('secondary')}
          onMouseLeave={() => setHoverButton(null)}
        >
          <span className="relative z-10">{hero.secondaryCta}</span>
          
          {/* Efeito de brilho no hover */}
          {hoverButton === 'secondary' && (
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full animate-pulse"></span>
          )}
        </Button>
      </motion.div>

      {/* Decorações adicionais */}
      <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-30"></div>
    </div>
  );
} 