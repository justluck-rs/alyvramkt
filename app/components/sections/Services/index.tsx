import React from 'react';
import { Container } from '../../ui/Container';
import { useSiteData } from '../../../hooks/useSiteData';
import { ServicesHeader } from './ServicesHeader';
import { ServiceCard } from './ServiceCard';
import { DifferentialCard } from './DifferentialCard';

export function Services() {
  const { services, images, icons } = useSiteData();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

      <Container>
        <ServicesHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.items.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              image={images.services[index]}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
                  <path d={icons.services[index].path} />
                </svg>
              }
              benefits={service.benefits}
            />
          ))}
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.differentials.map((differential, index) => (
              <DifferentialCard
                key={index}
                title={differential.title}
                description={differential.description}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white h-6 w-6">
                    <path d={icons.differentials[index].path} />
                  </svg>
                }
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