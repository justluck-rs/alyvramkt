import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    outline: 'border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950',
    ghost: 'text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950',
  };
  
  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 py-3 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
