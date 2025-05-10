import React from 'react';

interface TestimonialProps {
  content: string;
  author: {
    name: string;
    title: string;
    avatar?: string;
  };
  className?: string;
  index?: number;
}

export function Testimonial({
  content,
  author,
  className = '',
  index = 0
}: TestimonialProps) {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover-lift ${className}`}>
      {/* Decoração de fundo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
      <div className="absolute top-0 right-0">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path d="M120 0H0C66.2741 0 120 53.7259 120 120V0Z" fill="currentColor" className="text-purple-500" />
        </svg>
      </div>

      <div className="p-8 relative z-10">
        {/* Aspas decorativas */}
        <div className="absolute -top-2 -left-2 text-purple-600/10 dark:text-purple-400/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-20 w-20"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>

        {/* Estrelas de avaliação */}
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-5 w-5 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        {/* Conteúdo do depoimento */}
        <p className="text-gray-700 dark:text-gray-300 mb-8 relative z-10 leading-relaxed">
          "{content}"
        </p>

        {/* Linha divisória */}
        <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-blue-500 mb-6"></div>

        {/* Autor */}
        <div className="flex items-center">
          {author.avatar && (
            <div className="mr-4 relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-sm"></div>
              <img
                src={author.avatar}
                alt={author.name}
                className="relative h-14 w-14 rounded-full object-cover border-2 border-white dark:border-gray-800"
              />
            </div>
          )}
          <div>
            <p className="font-bold text-gray-900 dark:text-white text-lg">
              {author.name}
            </p>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
              {author.title}
            </p>
          </div>
        </div>

        {/* Indicador de índice */}
        <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400">
          0{index + 1}
        </div>
      </div>
    </div>
  );
}
