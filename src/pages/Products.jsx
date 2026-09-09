import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import ProductGrid from '../components/ProductGrid';
import CTASection from '../components/CTASection';
import { products } from '../data/products';
import { ShieldCheck, Wrench } from 'lucide-react';

export default function Products() {
  useEffect(() => {
    document.title = "Solid Carbide Cutting Tools Range | Deccan Toolings";
  }, []);

  return (
    <div className="bg-slate-50">
      {/* Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800 relative">
        <div className="absolute inset-0 industrial-grid-dark opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Products' }]} dark={true} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>11 Core Precision Cutting Tool Families</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              Cutting Tools Program
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Solid Carbide Drills, End Mills, Burnishing Drills, Reamers, Taper Cutters, Woodruff Cutters, Custom Special Tools, and Specialized Tooling for Indian Industry.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid products={products} showFilters={true} />
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
