import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = false,
  dark = false,
  className = ''
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-3 ${
          dark 
            ? 'bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60' 
            : 'bg-brandRed-50 text-brandRed-600 border border-brandRed-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brandRed-500 animate-pulse"></span>
          {badge}
        </div>
      )}

      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-tight ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-4 flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
        <div className="w-12 h-1 bg-brandRed-600 rounded"></div>
        <div className="w-3 h-1 bg-brandRed-400 rounded"></div>
        <div className="w-1.5 h-1 bg-brandRed-300 rounded"></div>
      </div>
    </div>
  );
}
