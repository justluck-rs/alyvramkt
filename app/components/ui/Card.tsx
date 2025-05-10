import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ 
  children, 
  className = '',
  hoverEffect = true
}: CardProps) {
  const hoverClasses = hoverEffect 
    ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' 
    : '';
  
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 bg-gray-50 dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function CardImage({ src, alt, className = '' }: CardImageProps) {
  return (
    <div className="w-full">
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto object-cover ${className}`} 
      />
    </div>
  );
}
