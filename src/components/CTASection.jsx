import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Shield, PhoneCall } from 'lucide-react';
import CompanyProfileModal from './CompanyProfileModal';

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 overflow-hidden border-t border-b border-navy-800">
        {/* Subtle grid background */}
        <div className="absolute inset-0 industrial-grid-dark opacity-40"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brandRed-600/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-navy-700/20 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900/80 backdrop-blur border border-navy-700/80 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>Established 1998 • Precision Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Discover Deccan Toolings
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Explore our manufacturing capabilities, cutting tools, inspection systems and coating solutions. Customized tooling and re-sharpening for the Indian industry.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a href="/DECCAN_TOOLINGS_PROFILE.pdf" target="_blank" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all shadow-glow-red hover:scale-102 cursor-pointer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Company Profile
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-slate-200 bg-navy-800 hover:bg-navy-700 hover:text-white border border-navy-700 transition-all text-center"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-brandRed-500" />
                  Contact Engineering Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyProfileModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
