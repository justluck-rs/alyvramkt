import React from 'react';

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default',
  className = '' 
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
    primary: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
    secondary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    outline: 'border border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
}
