import React from 'react';
import { Container } from '../ui/Container';
import { TestimonialsHeader } from './Testimonials/TestimonialsHeader';
import { TestimonialsGrid } from './Testimonials/TestimonialsGrid';
import { MetricsSection } from './Testimonials/MetricsSection';
import { useSiteData } from '../../hooks/useSiteData';

export function Testimonials() {
  const { images } = useSiteData();
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background com imagem */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={images.testimonials}
          alt="Testimonials background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-990/90 via-purple-950/80 to-blue-950/90 mix-blend-multiply"></div>
      </div>
      
      {/* Elementos decorativos com maior contraste */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-purple-400/8 animate-pulse blur-3xl"></div>
      
      <Container className="relative z-10">
        <TestimonialsHeader />
        <TestimonialsGrid />
        <MetricsSection />
      </Container>
    </section>
  );
}
