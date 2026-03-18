import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  type?: string;
  error?: string;
}

export const Input = ({ label, className = '', error, ...props }: InputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold uppercase tracking-wide text-slate-500 block">
        {label}
      </label>
      <input
        className={`w-full px-4 py-3 rounded border bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white focus:ring-2 outline-none transition-all ${className}`}
        style={
          error
            ? { borderColor: '#f87171', boxShadow: '0 0 0 2px rgba(248, 113, 113, 0.3)' }
            : {}
        }
        {...props}
      />
      {error && (
        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', fontWeight: 500 }}>
          {error}
        </p>
      )}
    </div>
  );
};

interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  rows?: number;
  error?: string;
}

export const Textarea = ({ label, className = '', error, ...props }: TextareaProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold uppercase tracking-wide text-slate-500 block">
        {label}
      </label>
      <textarea
        className={`w-full px-4 py-3 rounded border bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white focus:ring-2 outline-none transition-all ${className}`}
        style={
          error
            ? { borderColor: '#f87171', boxShadow: '0 0 0 2px rgba(248, 113, 113, 0.3)' }
            : {}
        }
        {...props}
      />
      {error && (
        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', fontWeight: 500 }}>
          {error}
        </p>
      )}
    </div>
  );
};
