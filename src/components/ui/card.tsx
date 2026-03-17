import React from 'react';
import { motion } from 'motion/react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  delay?: number;
  key?: React.Key;
}

export const Card = ({ 
  children, 
  className = '', 
  hover = true,
  animate = true,
  delay = 0,
  ...props
}: CardProps) => {
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden';
  const hoverStyles = hover ? 'hover:shadow-xl transition-all hover:border-primary/30' : '';
  
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`${baseStyles} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};
