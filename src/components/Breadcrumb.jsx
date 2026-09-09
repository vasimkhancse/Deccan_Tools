import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items, dark = false }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-xs md:text-sm flex-wrap">
        <li>
          <Link
            to="/"
            className={`flex items-center transition-colors ${
              dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className={`w-3.5 h-3.5 ${dark ? 'text-slate-600' : 'text-slate-400'}`} />
              {isLast || !item.to ? (
                <span className={`font-semibold ${dark ? 'text-brandRed-400' : 'text-brandRed-600'}`}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={`transition-colors ${
                    dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
