import React from 'react';
import { Container } from '../../ui/Container';
import { TestimonialsHeader } from './TestimonialsHeader';
import { TestimonialsGrid } from './TestimonialsGrid';
import { MetricsSection } from './MetricsSection';

export function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <TestimonialsHeader />
        <TestimonialsGrid />
        <MetricsSection />
      </Container>
    </section>
  );
} 