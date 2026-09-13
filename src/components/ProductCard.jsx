import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Wrench } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-industrial transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image container with zoom effect */}
      <div className="relative aspect-[4/3] bg-navy-950 overflow-hidden border-b border-slate-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object transition-transform duration-500 ease-out group-hover:scale-108"
        />

        {/* Badge overlay
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-navy-900/90 text-slate-200 backdrop-blur-sm rounded border border-navy-700 shadow">
            {product.category || 'Precision Tool'}
          </span>
        </div> */}

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="w-8 h-8 rounded-full bg-brandRed-600 text-white flex items-center justify-center shadow-glow-red">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900 group-hover:text-brandRed-600 transition-colors">
            {product.name}
          </h3>

          <p className="mt-2.5 text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-brandRed-500" />
              Solid Carbide
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Wrench className="w-3.5 h-3.5 text-slate-400" />
              Re-sharpenable
            </span>
          </div>
        </div>

        {/* View Product CTA */}
        <div className="mt-6 pt-2">
          <Link
            to={`/products/${product.slug}`}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-brandRed-600 hover:text-white rounded transition-all duration-200 group-hover:bg-brandRed-600 group-hover:text-white shadow-sm"
          >
            <span>View Product Details</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
