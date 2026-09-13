import React from 'react';
import { Phone } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function FloatingContact() {
  return (
    <aside 
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5"
      aria-label="Quick contact links"
    >
      {/* Official WhatsApp Button with Real WhatsApp Logo */}
      <a
        href={`https://wa.me/${companyInfo.primaryWhatsApp}?text=Hello%20Deccan%20Toolings,%20I%20would%20like%20to%20enquire%20about%20your%20solid%20carbide%20cutting%20tools%20and%20re-sharpening%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-23 h-23  rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Chat on WhatsApp"
      >
        {/* Real WhatsApp Vector SVG */}
        <svg
          viewBox="0 0 32 32"
          className="w-17 h-17  fill-current drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.766.804 5.342 2.19 7.514L2.054 29.24a1 1 0 001.218 1.218l5.86-2.128A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.644 19.38c-.32.902-1.59 1.66-2.584 1.874-.682.146-1.572.264-4.57-1.002-3.834-1.618-6.3-5.502-6.492-5.758-.186-.256-1.542-2.054-1.542-3.916 0-1.862.974-2.778 1.32-3.13.344-.352.754-.44 1.006-.44.254 0 .508.002.73.014.236.01.55-.09.86.654.32.77 1.09 2.664 1.186 2.858.096.196.16.424.032.68-.128.256-.192.416-.384.64-.192.224-.404.5-.578.672-.192.192-.394.4-.17.784.224.384.996 1.644 2.14 2.664 1.472 1.31 2.714 1.716 3.098 1.908.384.192.608.16.832-.096.224-.256.96-1.12 1.216-1.504.256-.384.512-.32.86-.192.352.128 2.234 1.054 2.618 1.246.384.192.64.288.736.448.096.16.096.93-.224 1.832z" />
        </svg>
        <span className="sr-only">Chat on WhatsApp</span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-navy-950 text-white text-xs font-semibold rounded shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-navy-700">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Call Button */}
      <a
        href={`tel:${companyInfo.primaryPhone}`}
        className="group relative flex items-center justify-center w-23 h-23  rounded-full bg-brandRed-600 hover:bg-brandRed-500 text-white shadow-xl hover:shadow-glow-red transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandRed-500"
        aria-label="Call Deccan Toolings"
      >
        <Phone className="w-12 h-12  animate-pulse" />
        <span className="sr-only">Call Deccan Toolings</span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-navy-950 text-white text-xs font-semibold rounded shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-navy-700">
          Call +91 {companyInfo.primaryPhone}
        </span>
      </a>
    </aside>
  );
}
