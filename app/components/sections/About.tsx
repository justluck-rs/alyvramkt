import React from 'react';
import { Container } from '../ui/Container';
import { AboutHeader } from './About/AboutHeader';
import { AboutImage } from './About/AboutImage';
import { AboutContent } from './About/AboutContent';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Elementos decorativos com maior contraste */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-24 h-24 rounded-full bg-purple-400/8 animate-pulse blur-3xl"></div>
      
      <Container className="relative z-10">
        <AboutHeader />
        <div className="grid grid-cols-1 items-center">
          {/* <AboutImage /> */}
          <AboutContent />
        </div>
      </Container>
    </section>
  );
}
