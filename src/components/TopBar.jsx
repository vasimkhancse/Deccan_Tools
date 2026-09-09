import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function TopBar() {
  return (
    <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-800/80 hidden md:block select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Left: Locations & Estd */}
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center text-brandRed-500 font-semibold uppercase tracking-wider text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-brandRed-500 mr-1.5 animate-pulse"></span>
              EST. {companyInfo.established} • 5-AXIS CNC PRECISION
            </span>
            <div className="flex items-center space-x-1.5 text-slate-400 hover:text-slate-200 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brandRed-500" />
              <span>Unit 1: Coimbatore | Unit 2: Chennai</span>
            </div>
          </div>

          {/* Right: Quick Contacts */}
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${companyInfo.primaryPhone}`} 
              className="flex items-center space-x-1.5 text-slate-300 hover:text-brandRed-400 transition-colors font-medium"
              title="Call Deccan Toolings"
            >
              <Phone className="w-3.5 h-3.5 text-brandRed-500" />
              <span>+91 {companyInfo.primaryPhone}</span>
            </a>

            <a 
              href={`mailto:${companyInfo.primaryEmail}`} 
              className="flex items-center space-x-1.5 text-slate-300 hover:text-brandRed-400 transition-colors"
              title="Email Deccan Toolings"
            >
              <Mail className="w-3.5 h-3.5 text-brandRed-500" />
              <span>{companyInfo.primaryEmail}</span>
            </a>

            <div className="flex items-center space-x-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
