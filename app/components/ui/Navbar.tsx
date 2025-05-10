import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: React.ReactNode;
  navItems?: NavItem[];
}

export function Navbar({ 
  logo = 'Alyvra',
  navItems = [
    { label: 'Início', href: '#' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Agende sua Consulta', href: '#cta' },
  ]
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar rolagem para mudar a aparência da barra de navegação
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desabilitar rolagem quando menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Variantes de animação para o menu móvel
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { 
      opacity: 0, 
      y: 20 
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };
  
  const menuBackdropVariants = {
    closed: { 
      opacity: 0 
    },
    open: { 
      opacity: 1 
    }
  };

  // Variantes de animação para o ícone do menu
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0
    },
    open: {
      rotate: 45,
      y: 6
    }
  };

  const lineVariants2 = {
    closed: {
      opacity: 1
    },
    open: {
      opacity: 0
    }
  };

  const lineVariants3 = {
    closed: {
      rotate: 0,
      y: 0
    },
    open: {
      rotate: -45,
      y: -6
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'shadow-lg border-purple-800/20 bg-gray-950/95' : 'border-purple-800/10 bg-gray-950/80'
    } backdrop-blur-md border-b`}>
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
              {logo}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-all hover:text-purple-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 border-none">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              // Ícone X com gradiente
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="url(#closeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="url(#closeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="closeGradient" x1="6" y1="6" x2="18" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              // Ícone de hambúrguer com gradiente
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21" stroke="url(#menuGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H21" stroke="url(#menuGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="url(#menuGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="menuGradient" x1="3" y1="6" x2="21" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu com AnimatePresence para controlar a animação de entrada/saída */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop com blur */}
            <motion.div 
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuBackdropVariants}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu móvel animado */}
            <motion.div 
              className="md:hidden fixed top-0 right-0 z-40 bg-gradient-to-b from-gray-900 to-purple-950 flex flex-col w-full max-w-sm h-screen rounded-l-2xl shadow-2xl border-l border-purple-800/30"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex-1 overflow-y-auto flex flex-col">
                {/* Cabeçalho do menu */}
                <div className="flex items-center justify-center p-6 border-b border-purple-800/20">
                  <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    {logo}
                  </a>
                </div>
                
                {/* Itens do menu */}
                <nav className="flex flex-col gap-2 py-8 px-6">
                  {navItems.map((item, index) => (
                    <motion.div key={item.label} variants={menuItemVariants}>
                      <a
                        href={item.href}
                        className="flex items-center space-x-2 p-4 rounded-xl group hover:bg-purple-900/30 transition-all text-lg font-medium text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span className="group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:text-transparent group-hover:bg-clip-text transition-all">
                          {item.label}
                        </span>
                      </a>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Efeitos de decoração */}
                <div className="absolute bottom-40 left-0 w-full h-24 bg-gradient-to-t from-purple-700/10 to-transparent"></div>
                <div className="absolute top-1/3 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl"></div>
                <div className="absolute top-2/3 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl"></div>
              </div>
              
              {/* Footer do menu */}
              <motion.div 
                variants={menuItemVariants}
                className="p-6 mt-auto border-t border-purple-800/20"
              >
                <Button 
                  variant="primary" 
                  fullWidth 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 border-none shadow-lg shadow-purple-900/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fale Conosco
                </Button>
                
                <div className="mt-6 text-center text-sm text-purple-300/70">
                  Transformando marcas digitais desde 2023
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
