import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function FloatingContact() {
  return (
    <aside 
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
      aria-label="Quick contact links"
    >
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${companyInfo.primaryWhatsApp}?text=Hello%20Deccan%20Toolings,%20I%20would%20like%20to%20enquire%20about%20your%20solid%20carbide%20cutting%20tools%20and%20re-sharpening%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-600/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Chat on WhatsApp</span>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-navy-950 text-white text-xs font-semibold rounded shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-navy-700">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Call Button */}
      <a
        href={`tel:${companyInfo.primaryPhone}`}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-brandRed-600 hover:bg-brandRed-500 text-white shadow-lg hover:shadow-glow-red transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandRed-500"
        aria-label="Call Deccan Toolings"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="sr-only">Call Deccan Toolings</span>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-navy-950 text-white text-xs font-semibold rounded shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-navy-700">
          Call +91 {companyInfo.primaryPhone}
        </span>
      </a>
    </aside>
  );
}
