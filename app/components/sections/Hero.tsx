import React, { useRef, useEffect } from 'react';
import { Container } from '../ui/Container';
import { HeroBackground } from './Hero/HeroBackground';
import { HeroContent } from './Hero/HeroContent';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adicionar classe para animação após o componente ser montado
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <HeroBackground />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent heroRef={heroRef} />
          {/* Elemento visual pode ser mantido ou componentizado se desejar */}
        </div>
      </Container>
    </section>
  );
}
