import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends Omit<React.ComponentPropsWithoutRef<'button'>, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all rounded disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-slate-900 hover:bg-primary/90',
    secondary: 'bg-[#080808] text-[#f0ebe3] hover:bg-[#333333]',
    outline: 'border-2 border-[#080808] text-[#080808] hover:bg-[#080808] hover:text-[#f0ebe3]',
    ghost: 'text-slate-600 hover:text-primary hover:bg-primary/10',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-10 py-4 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
