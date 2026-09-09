import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

export default function ProcessTimeline({ steps, dark = false }) {
  return (
    <div className="w-full">
      {/* Desktop / Large Screen: Horizontal Connected Flow */}
      <div className="hidden lg:grid grid-cols-6 gap-3">
        {steps.map((item, index) => {
          const isLast = index === steps.length - 1;
          return (
            <div key={index} className="relative flex flex-col">
              <div className={`p-5 rounded-xl border flex-1 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                dark 
                  ? 'bg-navy-900/90 border-navy-700 hover:border-brandRed-600 shadow-md' 
                  : 'bg-white border-slate-200 hover:border-brandRed-600 shadow-sm'
              }`}>
                <div>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold font-heading text-brandRed-600">
                      {item.step}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${dark ? 'bg-navy-700' : 'bg-slate-200'}`}></span>
                  </div>

                  {/* Title */}
                  <h4 className={`text-sm font-bold uppercase tracking-wider leading-snug ${
                    dark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h4>

                  {/* Description */}
                  {item.desc && (
                    <p className={`mt-2 text-xs leading-relaxed ${
                      dark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.desc}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100/10 flex items-center justify-between text-[11px] font-semibold text-brandRed-500">
                  <span>Phase {index + 1}</span>
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Arrow connector between cards */}
              {!isLast && (
                <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 z-10 hidden xl:flex items-center justify-center w-5 h-5 rounded-full bg-brandRed-600 text-white shadow-sm">
                  <ChevronRight className="w-3 h-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tablet & Mobile: Vertical Stack with Connecting Line */}
      <div className="lg:hidden space-y-4 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-brandRed-600/30 before:h-full">
        {steps.map((item, index) => (
          <div key={index} className="relative flex items-start space-x-4 pl-2">
            {/* Step badge on timeline */}
            <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-brandRed-600 text-white font-extrabold text-xs shadow-md shrink-0">
              {item.step}
            </div>

            {/* Step Card */}
            <div className={`flex-1 p-5 rounded-lg border transition-all ${
              dark 
                ? 'bg-navy-900 border-navy-700 text-white' 
                : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}>
              <h4 className="text-base font-bold uppercase tracking-wider">
                {item.title}
              </h4>
              {item.desc && (
                <p className={`mt-1 text-xs leading-relaxed ${
                  dark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
