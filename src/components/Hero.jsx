import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, Cpu, RefreshCw } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-navy-950 text-white overflow-hidden">
      {/* Background Image with Dark Industrial Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-industrial.png"
          alt="Deccan Toolings 5-Axis CNC Precision Grinding"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transform motion-safe:animate-in motion-safe:zoom-in-105 duration-1000"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60"></div>
        <div className="absolute inset-0 industrial-grid-dark opacity-35 pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-brandRed-950/80 border border-brandRed-800 text-brandRed-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-brandRed-500 animate-pulse"></span>
            <span>Est. {companyInfo.established} • Coimbatore & Chennai Units</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading uppercase tracking-tight text-white leading-[1.05]">
            PRECISION CUTTING TOOLS.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandRed-500 to-rose-400">
              ENGINEERED FOR PERFORMANCE.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
            {companyInfo.description}
          </p>

          {/* Three Key Pillars: SOLID CARBIDE • 5 AXIS CNC • RE-SHARPENING */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 sm:gap-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="flex items-center space-x-2 text-slate-200">
              <ShieldCheck className="w-5 h-5 text-brandRed-500 shrink-0" />
              <span>SOLID CARBIDE</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-200">
              <Cpu className="w-5 h-5 text-brandRed-500 shrink-0" />
              <span>5 AXIS CNC</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-200">
              <RefreshCw className="w-5 h-5 text-brandRed-500 shrink-0" />
              <span>RE-SHARPENING</span>
            </div>
          </div>

          {/* Buttons: Explore Products & Contact Us */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all duration-300 shadow-glow-red hover:scale-102 group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm sm:text-base font-bold uppercase tracking-wider text-slate-200 bg-navy-900/80 hover:bg-navy-800 hover:text-white border border-navy-700 transition-all duration-300 backdrop-blur-sm"
            >
              <PhoneCall className="w-5 h-5 mr-2 text-brandRed-500" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brandRed-600 to-transparent"></div>
    </section>
  );
}
