import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeader = ({ 
  label, 
  title, 
  description, 
  align = 'center',
  light = false 
}: SectionHeaderProps) => {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  const textColor = light ? 'text-white' : 'text-slate-900';
  const descColor = light ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className={`${alignmentClass} mb-16 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {label && (
        <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">
          {label}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase mb-4 ${textColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};
