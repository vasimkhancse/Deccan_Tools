import React, { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
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
    <div className="bg-slate-50 text-slate-900 selection:bg-brandRed-600 selection:text-white">
      {/* 1. Header Banner */}
      <PageBanner
        desktopImage="/images/section_banners/banner-coating.png"
        mobileImage="/images/section_banners/banner-coating-mobile.png"
        alt="Advanced PVD Coatings Solutions - Surface Engineering for Superior Performance"
        title="Advanced PVD Coating Solutions"
        breadcrumbItems={[{ label: 'Coating' }]}
      />

      {/* 2. Visual & Main Statement Section */}
      <section className="py-10 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[3/2] relative group">
                <img
                  src="/images/coating/pvd-coating.png"
                  alt="Advanced PVD Coating Technology"
                  className="w-full h-full object transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Statements & Key Value */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-50 text-brandRed-600 border border-brandRed-200">
                <Cpu className="w-3.5 h-3.5" />
                Nanocomposite Multi-Layer Films
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">
                Engineered For Superior Tool Life
              </h2>

              <p className="text-slate-600 leading-relaxed text-base">
                Physical Vapor Deposition (PVD) produces an extremely dense, ultra-smooth micro-grain surface film. It preserves the razor-sharp cutting edge geometry ground on our 5-axis CNC machines while delivering phenomenal micro-hardness and oxidation barriers.
              </p>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-brandRed-600 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-brandRed-600">Re-Sharpening + Re-Coating Synergy:</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Re-sharpening and recoating a PVD coated tool can make it cut like new and can be more economical than buying a new tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Five Core Benefits */}
      <section className="py-10 lg:py-18 bg-slate-50 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Performance Advantages"
            title="5 Core Benefits of PVD Coating"
            subtitle="Extending cutting tool capability across high hardness, temperature, and speed boundaries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coatingBenefits.map((benefit, index) => {
              const IconComp = benefitIcons[benefit.id] || ShieldCheck;
              return (
                <div
                  key={benefit.id}
                  className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-brandRed-500 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-lg bg-brandRed-50 group-hover:bg-brandRed-600 text-brandRed-600 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                        <IconComp className="w-6 h-6 text-brandRed-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-900 group-hover:text-brandRed-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <div className="text-xs font-semibold text-brandRed-600 uppercase tracking-wider mt-1 mb-3">
                      {benefit.highlight}
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 group-hover:text-slate-700 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-brandRed-600" />
                    <span>Industrial Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Seven Coating Cards */}
      <section className="py-10 lg:py-18 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Formulation Range"
            title="Our 7 Specialized PVD Coatings"
            subtitle="Tailored surface solutions for high speed milling, deep drilling, and difficult exotic materials."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coatingTypes.map((coating, idx) => (
              <div
                key={coating.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-brandRed-500 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-4 h-4 rounded-full border border-slate-300 shadow-sm" style={{ backgroundColor: coating.accentColor }}></span>
                    <span className="text-[13px] font-mono text-slate-400 group-hover:text-slate-600 transition-colors">GRADE-0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-wider text-slate-900 group-hover:text-brandRed-600 transition-colors">
                    {coating.name}
                  </h3>

                  <div className="text-xs font-medium text-slate-500 mt-1 mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <span>Appearance: {coating.color}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {coating.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="text-[12px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Best Suited For:
                  </div>
                  <p className="text-xs sm:text-[13px] text-brandRed-600 font-semibold leading-snug">
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
