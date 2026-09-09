import React from 'react';
import { X, FileText, Phone, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function CompanyProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-900 text-white p-6 flex justify-between items-start border-b border-navy-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-brandRed-600/20 border border-brandRed-600 flex items-center justify-center text-brandRed-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="text-xl font-bold uppercase tracking-wider">
                Company Profile
              </h3>
              <p className="text-xs text-slate-400">DECCAN TOOLINGS Official Documentation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-800 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
            <div>
              <p className="font-bold">Catalogue Revision in Progress</p>
              <p className="mt-1 text-xs text-amber-700 leading-relaxed">
                Our company profile and technical catalog (<code className="text-amber-900 font-mono">/company-profile.pdf</code>) is undergoing documentation update to reflect our expanded 5-axis CNC grinding capabilities.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            We are pleased to share customized tool profiles, capability statements, or specific product drawings directly with your engineering department.
          </p>

          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2 text-xs">
            <div className="font-bold uppercase tracking-wider text-slate-700">Immediate Direct Assistance:</div>
            <div className="flex items-center justify-between py-1 border-b border-slate-200">
              <span className="text-slate-600">Unit-1 (Coimbatore):</span>
              <a href={`tel:${companyInfo.units.unit1.phone}`} className="font-bold text-brandRed-600 hover:underline">
                {companyInfo.units.unit1.phone}
              </a>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-200">
              <span className="text-slate-600">Proprietor (Alosci.T):</span>
              <a href="tel:9566729173" className="font-bold text-brandRed-600 hover:underline">
                9566729173
              </a>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-slate-600">Email:</span>
              <a href={`mailto:${companyInfo.primaryEmail}`} className="font-bold text-brandRed-600 hover:underline">
                {companyInfo.primaryEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded transition-colors"
          >
            Close
          </button>
          <a
            href={`mailto:${companyInfo.primaryEmail}?subject=Request%20Company%20Profile%20and%20Product%20Catalogue`}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 rounded transition-colors shadow-sm"
          >
            Request Via Email
          </a>
        </div>
      </div>
    </div>
  );
}
