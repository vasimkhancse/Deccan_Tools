import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import { qualitySteps } from '../data/companyInfo';
import { ShieldCheck, Cpu, CheckCircle2, Eye, Wrench, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Quality() {
  useEffect(() => {
    document.title = "Quality is the Best Policy | Deccan Toolings";
  }, []);

  const qualityFeatures = [
    {
      title: 'Superior Materials',
      desc: 'Selected premium sub-micron and ultra-fine grain tungsten carbide substrates with high cobalt cohesion and hardness.',
      icon: Layers
    },
    {
      title: 'Advanced Equipment',
      desc: 'Ground on 5-Axis CNC WIDMA and ANCA grinding centers with direct-drive linear scales and high-pressure flood cooling.',
      icon: Cpu
    },
    {
      title: 'Strict Inspection',
      desc: 'Comprehensive optical inspection on ZOLLER SMILE 420 and SPERONI MAGIS 400 with high-magnification edge verification.',
      icon: Eye
    },
    {
      title: 'Professional Techniques',
      desc: 'Over twenty years of specialized craftsmanship in cutter geometry, rake angle control, and micro-finishing.',
      icon: Wrench
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800 relative">
        <div className="absolute inset-0 industrial-grid-dark opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Quality' }]} dark={true} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Inspection & Manufacturing Standards</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Quality is the Best Policy
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Every detail is monitored with attention to quality and modern manufacturing trends.
            </p>
          </div>
        </div>
      </section>

      {/* Core Quality Statement */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block p-4 rounded-2xl bg-brandRed-50 border border-brandRed-200 text-brandRed-600 mb-2">
              <ShieldCheck className="w-12 h-12 mx-auto" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">
              Uncompromising Precision in Every Tool
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              <p className="p-6 bg-slate-50 rounded-xl border-l-4 border-brandRed-600 text-slate-800">
                "We select superior carbide material to produce cutting tools through advanced equipment and professional techniques."
              </p>
              <p>
                "Each product needs to pass strict inspection processes before it comes to the customer."
              </p>
              <p>
                "Every detail is monitored with attention to quality and modern manufacturing trends."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Features */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Foundations"
            title="Four Pillars of Tool Reliability"
            subtitle="How Deccan Toolings maintains repeatable cutting performance across standard and custom tool orders."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-navy-900 group-hover:bg-brandRed-600 text-white flex items-center justify-center transition-colors mb-6 shadow">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900 group-hover:text-brandRed-600 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-brandRed-600 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                    <span>Quality Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Process Flow */}
      <section className="py-20 lg:py-28 bg-navy-950 text-white border-b border-navy-800 relative">
        <div className="absolute inset-0 industrial-grid-dark opacity-35"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Inspection Workflow"
            title="Quality Assurance Process"
            subtitle="From raw sintered carbide blank to final micron verification and protective delivery."
            dark={true}
            center={true}
          />

          <ProcessTimeline steps={qualitySteps} dark={true} />

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded text-sm font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all shadow-glow-red"
            >
              <span>Consult On Your Quality Requirements</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
