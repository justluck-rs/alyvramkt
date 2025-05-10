import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
  benefits: string[];
}

export function ServiceCard({ index, title, description, image, icon, benefits }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:shadow-xl hover-lift">
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        </div>

        <div className="relative z-10 p-8 md:p-10">
          <div className="w-16 h-16 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/40 to-blue-500/40 animate-pulse"></div>
            <div className="relative">
              {icon}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>

          <p className="text-purple-100/90 mb-6 leading-relaxed">
            {description}
          </p>

          <ul className="space-y-2 mb-8">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center text-purple-100/90">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mr-2 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
} 