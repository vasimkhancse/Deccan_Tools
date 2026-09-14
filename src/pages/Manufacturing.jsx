import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import MachineCard from '../components/MachineCard';
import ManufacturingTable from '../components/ManufacturingTable';
import CTASection from '../components/CTASection';
import { cncMachinery, conventionalMachinery } from '../data/machinery';
import { Cpu, PenTool, Table, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Manufacturing() {
  useEffect(() => {
    document.title = "Manufacturing Excellence | Deccan Toolings — 5-Axis CNC Infrastructure";
  }, []);

  return (
    <div className="bg-slate-50">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800 relative">
        <div className="absolute inset-0 industrial-grid-dark opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Manufacturing' }]} dark={true} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>5-Axis CNC Tool & Cutter Grinding Infrastructure</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              Manufacturing Excellence
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Our manufacturing capabilities combine precision grinding technology, inspection systems and experienced engineering practices.
            </p>
          </div>
        </div>
      </section>

      {/* CNC Machineries Section (Alternating Image/Content Layout) */}
      <section id="cnc" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="5-Axis CNC Precision"
            title="5 Axis CNC Tool & Cutter Grinders"
            subtitle="Equipped with high-performance Siemens and ANCA AMC5 G2 control systems, enabling production and regrinding of complex helical, form, and multi-flute geometries."
          />

          <div className="space-y-12">
            {cncMachinery.map((machine, index) => (
              <MachineCard 
                key={machine.id} 
                machine={machine} 
                alternate={index % 2 !== 0} 
                variant="cnc"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conventional Machineries Section */}
      <section id="conventional" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Established Foundation"
            title="Conventional Machineries"
            subtitle="Universal tool and cutter grinders and precision cylindrical grinding equipment providing flexible blank preparation and specialized manual grinding operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conventionalMachinery.map((machine) => (
              <MachineCard 
                key={machine.id} 
                machine={machine} 
                variant="conventional"
              />
            ))}
          </div>

          <div className="mt-10 p-6 bg-white rounded-xl border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-8 h-8 text-brandRed-600 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 uppercase">Looking for Inspection Systems?</h4>
                <p className="text-xs text-slate-600">Discover our ZOLLER SMILE 420, SPERONI MAGIS 400 and Mitutoyo Profile Projector setup.</p>
              </div>
            </div>
            <Link
              to="/inspection"
              className="px-5 py-2.5 bg-brandRed-600 hover:bg-brandRed-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors whitespace-nowrap"
            >
              Go to Inspection Systems →
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities Exact Table Section */}
      <section id="capabilities" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Equipment Inventory"
            title="Manufacturing Capabilities"
            subtitle="Documented shop-floor equipment and quantity breakdown verified across our manufacturing facilities."
          />

          <ManufacturingTable />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
