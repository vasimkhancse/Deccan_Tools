import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Wrench } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-industrial">
        <div className="w-16 h-16 rounded-2xl bg-brandRed-50 text-brandRed-600 flex items-center justify-center mx-auto">
          <Wrench className="w-8 h-8" />
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 uppercase font-heading">
          404 — Page Not Found
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed">
          The requested engineering resource or tooling specification could not be located. Return to the home page or browse our complete cutting tool catalog.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded text-xs font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4 mr-1.5" />
            Home Page
          </Link>
          <Link
            to="/products"
            className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
