import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { coatingBenefits, coatingTypes } from '../data/coatings';
import { 
  Sparkles, 
  Flame, 
  Zap, 
  ShieldCheck, 
  RefreshCw, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const benefitIcons = {
  hardness: ShieldCheck,
  speed: Zap,
  heat: Flame,
  resistance: Sparkles,
  reuse: RefreshCw
};

export default function Coating() {
  useEffect(() => {
    document.title = "Advanced PVD Coating Solutions | Deccan Toolings";
  }, []);

  return (
    <div className="bg-navy-950 text-white selection:bg-brandRed-600 selection:text-white">
      {/* 1. Header Banner */}
      <section className="relative py-16 lg:py-24 border-b border-navy-800 overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-35"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brandRed-600/15 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Coating' }]} dark={true} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Physical Vapor Deposition (PVD) Technology</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Advanced PVD Coating Solutions
            </h1>

            {/* Main Statement */}
            <div className="mt-6 flex items-center space-x-4 text-2xl sm:text-3xl font-heading font-extrabold tracking-widest text-brandRed-500">
              <span>HARD.</span>
              <span>•</span>
              <span className="text-white">SHARP.</span>
              <span>•</span>
              <span className="text-slate-300">DURABLE.</span>
            </div>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              High-performance PVD coatings designed to withstand extreme thermal stresses, abrasive cutting conditions, and aggressive metal removal rates.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visual & Main Statement Section */}
      <section className="py-20 bg-navy-900 border-b border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-navy-700 shadow-2xl bg-navy-950 aspect-[3/2] relative group">
                <img
                  src="/images/coating/pvd-coating.png"
                  alt="Advanced PVD Coating Technology"
                  className="w-full h-full object transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Statements & Key Value */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-navy-800 text-brandRed-400 border border-navy-700">
                <Cpu className="w-3.5 h-3.5" />
                Nanocomposite Multi-Layer Films
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Engineered For Superior Tool Life
              </h2>

              <p className="text-slate-300 leading-relaxed text-base">
                Physical Vapor Deposition (PVD) produces an extremely dense, ultra-smooth micro-grain surface film. It preserves the razor-sharp cutting edge geometry ground on our 5-axis CNC machines while delivering phenomenal micro-hardness and oxidation barriers.
              </p>

              <div className="p-5 rounded-xl bg-navy-950 border border-navy-800 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-brandRed-400">Re-Sharpening + Re-Coating Synergy:</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Re-sharpening and recoating a PVD coated tool can make it cut like new and can be more economical than buying a new tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Five Core Benefits */}
      <section className="py-20 lg:py-28 bg-navy-950 border-b border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Performance Advantages"
            title="5 Core Benefits of PVD Coating"
            subtitle="Extending cutting tool capability across high hardness, temperature, and speed boundaries."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coatingBenefits.map((benefit, index) => {
              const IconComp = benefitIcons[benefit.id] || ShieldCheck;
              return (
                <div
                  key={benefit.id}
                  className="bg-navy-900 rounded-xl p-8 border border-navy-800 hover:border-brandRed-600 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-lg bg-navy-800 group-hover:bg-brandRed-600 text-white flex items-center justify-center transition-colors shadow">
                        <IconComp className="w-6 h-6 text-brandRed-400 group-hover:text-white" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold uppercase tracking-wide text-white group-hover:text-brandRed-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <div className="text-xs font-semibold text-brandRed-500 uppercase tracking-wider mt-1 mb-3">
                      {benefit.highlight}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy-800 flex items-center text-xs font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-brandRed-500" />
                    <span>Industrial Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Seven Coating Cards */}
      <section className="py-20 lg:py-28 bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Formulation Range"
            title="Our 7 Specialized PVD Coatings"
            subtitle="Tailored surface solutions for high speed milling, deep drilling, and difficult exotic materials."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coatingTypes.map((coating, idx) => (
              <div
                key={coating.id}
                className="bg-navy-950 rounded-xl p-6 border border-navy-800 hover:border-brandRed-600 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: coating.accentColor }}></span>
                    <span className="text-[13px] font-mono text-slate-500">GRADE-0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-wider text-white group-hover:text-brandRed-400 transition-colors">
                    {coating.name}
                  </h3>

                  <div className="text-xs font-medium text-slate-400 mt-1 mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                    <span>Appearance: {coating.color}</span>
                  </div>

                  <p className="text-xl sm:text-sm text-slate-300 leading-relaxed">
                    {coating.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800/80">
                  <div className="text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Best Suited For:
                  </div>
                  <p className="text-[13px] text-brandRed-400 font-medium">
                    {coating.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
