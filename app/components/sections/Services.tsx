import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { DifferentialCard } from './Services/DifferentialCard';
import { ServiceCard } from './Services/ServiceCard';
import { ServicesHeader } from './Services/ServicesHeader';
import { useSiteData } from '../../hooks/useSiteData';

export function Services() {
  const { services, images, icons } = useSiteData();

  // Ícones SVG modernos para os serviços
  const serviceIcons = [
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
      <path d="M12 20V10"></path>
      <path d="M18 20V4"></path>
      <path d="M6 20v-6"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  ];

  // Dados dos diferenciais 
  const differentials = services.differentials.map((differential) => ({
    title: differential.title,
    description: differential.description,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white h-6 w-6">
        {differential.gradientFrom === 'purple' ? (
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        ) : differential.title.includes('Equipe') ? (
          <>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </>
        ) : (
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        )}
      </svg>
    ),
    gradientFrom: differential.gradientFrom,
    gradientTo: differential.gradientTo,
    borderColor: differential.borderColor,
  }));

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Elementos decorativos com cores mais vibrantes para melhor contraste */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-purple-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl"></div>

      <Container>
        <ServicesHeader />

        {/* Cards de serviços modernos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.items.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              image={images.services[index]}
              icon={serviceIcons[index]}
              benefits={service.benefits}
            />
          ))}
        </div>

        {/* Seção de diferenciais */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <DifferentialCard
                key={index}
                title={differential.title}
                description={differential.description}
                icon={differential.icon}
                delay={index * 0.1}
                gradientFrom={differential.gradientFrom}
                gradientTo={differential.gradientTo}
                borderColor={differential.borderColor}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
