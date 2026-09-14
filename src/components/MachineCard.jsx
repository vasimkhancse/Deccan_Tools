import React from 'react';
import { Cpu, CheckCircle2, Terminal, Code2, Wrench, ShieldCheck } from 'lucide-react';

export default function MachineCard({ 
  machine, 
  alternate = false,
  variant = 'cnc' // 'cnc', 'inspection', 'conventional'
}) {
  if (variant === 'inspection' || variant === 'conventional') {
    return (
      <div className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
        <div className="relative aspect-[4/3] bg-navy-950 overflow-hidden border-b border-slate-100 flex items-center justify-center">
          <img
            src={machine.image}
            alt={machine.name}
            loading="lazy"
            className="w-full h-full object transition-transform duration-500 group-hover:scale-105"
          />
          {/* <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-navy-900/90 text-brandRed-400 backdrop-blur-sm rounded border border-navy-700">
              {variant === 'inspection' ? 'Inspection & Presetting' : 'Conventional Machining'}
            </span>
          </div> */}
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900 group-hover:text-brandRed-600 transition-colors">
              {machine.name}
            </h3>

            {machine.system && (
              <div className="mt-1 text-xs font-semibold text-brandRed-600 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>{machine.system}</span>
              </div>
            )}

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {machine.description}
            </p>

            {machine.features && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Capabilities:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {machine.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // CNC Machine Alternating Layout
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-center ${alternate ? 'lg:flex-row-reverse' : ''}`}>
        {/* Machine Image */}
        <div className={`lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-[420px] bg-navy-950 overflow-hidden group ${
          alternate ? 'lg:order-2' : 'lg:order-1'
        }`}>
          <img
            src={machine.image}
            alt={machine.name}
            loading="lazy"
            className="w-full h-full object transition-transform duration-500 group-hover:scale-105"
          />
          {/* <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-brandRed-600 text-white rounded shadow-glow-red">
              5 Axis CNC Tool & Cutter Grinder
            </span>
          </div> */}
        </div>

        {/* Machine Specs & Content */}
        <div className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 ${
          alternate ? 'lg:order-1' : 'lg:order-2'
        }`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
            <Cpu className="w-3.5 h-3.5 text-brandRed-600" />
            <span>5-Axis Grinding Precision</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900">
            {machine.name}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {machine.description}
          </p>

          {/* Technical Specs Pill Box */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
            {machine.system && (
              <div className="flex items-start gap-2">
                <Terminal className="w-4 h-4 text-brandRed-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 uppercase">System</div>
                  <div className="text-slate-600">{machine.system}</div>
                </div>
              </div>
            )}

            {machine.software && (
              <div className="flex items-start gap-2">
                <Code2 className="w-4 h-4 text-brandRed-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 uppercase">Software</div>
                  <div className="text-slate-600">{machine.software}</div>
                </div>
              </div>
            )}
          </div>

          {/* Suitable Tools */}
          {machine.suitableTools && (
            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Suitable For Manufacturing & Regrinding:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {machine.suitableTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded border border-slate-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brandRed-600 mr-1" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
