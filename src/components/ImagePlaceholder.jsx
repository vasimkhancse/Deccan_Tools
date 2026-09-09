import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ImagePlaceholder({ 
  src, 
  alt, 
  className = '', 
  fallbackTitle = 'Precision Tool' 
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-navy-950 flex items-center justify-center ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-navy-900 animate-pulse flex items-center justify-center text-slate-500">
          <ImageIcon className="w-8 h-8 opacity-40" />
        </div>
      )}

      {error ? (
        <div className="p-6 text-center text-slate-400 flex flex-col items-center">
          <ImageIcon className="w-10 h-10 text-brandRed-500 mb-2 opacity-60" />
          <span className="text-xs uppercase font-bold tracking-wider">{fallbackTitle}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
