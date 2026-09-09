import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
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
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800 relative">
        <div className="absolute inset-0 industrial-grid-dark opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: 'Manufacturing', to: '/manufacturing' },
              { label: 'Inspection' }
            ]} 
            dark={true} 
          />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Micron-Level Metrology & Tool Presetting</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              Inspection & Precision Measurement
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Equipped with high-end optical presetting systems, computerized image processing, and profile projectors to guarantee cutting edge accuracy before dispatch.
            </p>
          </div>
        </div>
      </section>

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
