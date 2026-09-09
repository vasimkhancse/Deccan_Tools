import React from 'react';
import { ShieldCheck, Cpu, Award, RefreshCw } from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Award: Award,
  RefreshCw: RefreshCw
};

export default function FeatureCard({ feature, index }) {
  const IconComponent = iconMap[feature.icon] || ShieldCheck;

  return (
    <div className="group relative bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-industrial transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-brandRed-600 transition-colors duration-300"></div>

      <div>
        {/* Icon & Index */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-14 h-14 rounded-lg bg-navy-900 group-hover:bg-brandRed-600 text-white flex items-center justify-center transition-colors duration-300 shadow-md">
            <IconComponent className="w-7 h-7" />
          </div>
          <span className="text-3xl font-heading font-bold text-slate-200 group-hover:text-brandRed-100 transition-colors">
            0{index + 1}
          </span>
        </div>

        {/* Heading */}
        <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-900 group-hover:text-brandRed-600 transition-colors">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-brandRed-600 transition-colors">
        <span>Precision Engineering Standard</span>
      </div>
    </div>
  );
}
