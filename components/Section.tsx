import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, className = "", children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${dark ? 'text-white' : 'text-stone-900'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <div className={`w-24 h-1 mx-auto mb-6 ${dark ? 'bg-brand-500' : 'bg-brand-600'}`}></div>
            )}
            {subtitle && (
              <p className={`max-w-2xl mx-auto text-lg ${dark ? 'text-stone-300' : 'text-stone-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};