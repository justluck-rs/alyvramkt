import React from 'react';
import { Container } from '../../ui/Container';
import { AboutHeader } from './AboutHeader';
import { AboutImage } from './AboutImage';
import { AboutContent } from './AboutContent';

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <AboutHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </Container>
    </section>
  );
} 