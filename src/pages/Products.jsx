import React, { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
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
      <PageBanner
        desktopImage="/images/section_banners/banner-products.png"
        mobileImage="/images/section_banners/banner-products-mobile.png"
        alt="Solid Carbide Cutting Tools - Engineered for Higher Productivity"
        title="Cutting Tools Program"
        breadcrumbItems={[{ label: 'Products' }]}
      />

      {/* Product Catalog Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid products={products} showFilters={true} />
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
