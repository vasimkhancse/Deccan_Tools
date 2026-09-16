import React, { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import MachineCard from '../components/MachineCard';
import CTASection from '../components/CTASection';
import { inspectionEquipment } from '../data/machinery';
import { Shield, Eye, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Inspection() {
  useEffect(() => {
    document.title = "Inspection & Precision Measurement | Deccan Toolings";
  }, []);

  return (
    <div className="bg-slate-50">
      {/* Banner */}
      <PageBanner
        desktopImage="/images/section_banners/banner-quality.png"
        mobileImage="/images/section_banners/banner-quality-mobile.png"
        alt="Inspection & Precision Measurement - Quality Assurance Process"
        title="Inspection & Precision Measurement"
        breadcrumbItems={[
          { label: 'Manufacturing', to: '/manufacturing' },
          { label: 'Inspection' }
        ]}
      />

      {/* Equipment Cards Grid */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Advanced Metrology"
            title="Precision Measurement Systems"
            subtitle="Strict inspection processes using leading German, Italian, and Japanese metrology platforms for tool geometry verification, concentricity check, and presetting."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspectionEquipment.map((equipment) => (
              <MachineCard
                key={equipment.id}
                machine={equipment}
                variant="inspection"
              />
            ))}
          </div>

          {/* Quality Assurance Link */}
          <div className="mt-16 p-8 rounded-xl bg-navy-900 text-white border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brandRed-400">Quality Commitment</span>
              <h3 className="text-2xl font-bold uppercase mt-1">Quality is the Best Policy</h3>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                Each product needs to pass strict inspection processes before it comes to the customer. Every detail is monitored with attention to quality and modern manufacturing trends.
              </p>
            </div>
            <Link
              to="/quality"
              className="px-6 py-3 bg-brandRed-600 hover:bg-brandRed-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-glow-red"
            >
              Explore Quality Process →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
