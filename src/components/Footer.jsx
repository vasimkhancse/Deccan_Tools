import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, ExternalLink, Navigation } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Col 1: Company Profile */}
          <div className="space-y-4">
            <img 
              src="/images/logo.png" 
              alt="DECCAN TOOLINGS" 
              className="h-12 w-auto object-contain brightness-105"
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              Solid Carbide Cutting Tools Manufacturing & Re-Sharpening. Established in 1998 with conventional cutter grinder technology; 5-axis CNC technology added in 2014.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-brandRed-400 bg-brandRed-950/60 border border-brandRed-900/80 px-3 py-1.5 rounded">
                <ShieldCheck className="w-4 h-4 text-brandRed-500" />
                <span>Over Two Decades of Industry Experience</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 border-l-2 border-brandRed-600 pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600 group-hover:text-brandRed-500 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600 group-hover:text-brandRed-500 transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600 group-hover:text-brandRed-500 transition-colors" />
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/inspection" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600 group-hover:text-brandRed-500 transition-colors" />
                  Inspection
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600 group-hover:text-brandRed-500 transition-colors" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/coating" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600 group-hover:text-brandRed-500 transition-colors" />
                  Coating
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600 group-hover:text-brandRed-500 transition-colors" />
                  Quality
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-600 group-hover:text-brandRed-500 transition-colors" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 border-l-2 border-brandRed-600 pl-2.5">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/drills" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-brandRed-500"></span>
                  Solid Carbide Drills
                </Link>
              </li>
              <li>
                <Link to="/products/endmills" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-brandRed-500"></span>
                  Solid Carbide End Mills
                </Link>
              </li>
              <li>
                <Link to="/products/reamers" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-brandRed-500"></span>
                  Solid Carbide Reamers
                </Link>
              </li>
              <li>
                <Link to="/products/special-tools" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-brandRed-500"></span>
                  Special Tools
                </Link>
              </li>
              <li>
                <Link to="/products/gundrills" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-brandRed-500"></span>
                  Solid Carbide Gundrills
                </Link>
              </li>
              <li>
                <Link to="/products/brazed-cutters" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-brandRed-500"></span>
                  Carbide Brazed Cutters
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Dedicated Unit 1 & Unit 2 Google Maps / Locations Grid */}
        <div className="mt-1 pt-8 border-t border-navy-800/80">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Unit 1 Map Card */}
            <div className="bg-navy-900/60 rounded-xl border border-navy-800 overflow-hidden flex flex-col hover:border-navy-700 transition-all">
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-brandRed-950 text-brandRed-400 border border-brandRed-900/80">
                      Unit-1 • Coimbatore
                    </span>
                    <span className="text-xs text-slate-400">Headquarters & Main Plant</span>
                  </div>
                  <h5 className="text-base font-bold text-white uppercase tracking-wide mt-1">
                    Deccan Toolings — Coimbatore
                  </h5>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {companyInfo.units.unit1.addressLine1}, {companyInfo.units.unit1.addressLine2}, {companyInfo.units.unit1.cityStateZip}
                  </p>
                    <a
                      href={`tel:${companyInfo.units.unit1.phone}`}
                      className="text-xs text-slate-400 mt-1 cursor-pointer"
                      aria-label="Call Deccan Toolings"
                    >
                      Phone: <span className="text-slate-200">{companyInfo.units.unit1.phone}
                        <a
                      href={`tel:${9566729173}`}
                      className="text-xs text-slate-400 mt-1 cursor-pointer"
                      aria-label="Call Deccan Toolings"
                    >
                      <span className="text-slate-200"> / 9566729173</span>
                      </a>
                      </span>
                      </a>
                </div>

              </div>

              {/* Map Embed Frame */}
              <div className="h-44 w-full bg-navy-950 border-t border-navy-800 relative">
                <iframe
                  title="Deccan Toolings Unit 1 Coimbatore Map"
                  src="https://maps.google.com/maps?q=Deccan+Toolings+Valluvar+Nagar+Kamarajar+Road+Peelamedu+Coimbatore+641004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale-[40%] contrast-[110%] opacity-90 hover:opacity-100 hover:grayscale-0 transition-all"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Unit 2 Map Card */}
            <div className="bg-navy-900/60 rounded-xl border border-navy-800 overflow-hidden flex flex-col hover:border-navy-700 transition-all">
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-brandRed-950 text-brandRed-400 border border-brandRed-900/80">
                      Unit-2 • Chennai
                    </span>
                    <span className="text-xs text-slate-400">Chennai Manufacturing Branch</span>
                  </div>
                  <h5 className="text-base font-bold text-white uppercase tracking-wide mt-1">
                    Deccan Toolings — Chennai
                  </h5>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {companyInfo.units.unit2.addressLine1}, {companyInfo.units.unit2.addressLine2}, {companyInfo.units.unit2.cityStateZip}
                  </p>
                    <a
                      href={`tel:${companyInfo.units.unit2.contacts[0].phone}`}
                      className="text-xs text-slate-400 mt-1 cursor-pointer"
                      aria-label="Call Deccan Toolings"
                    >
                      Phone: <span className="text-slate-200">{companyInfo.units.unit2.contacts[0].phone}
                        <a
                      href={`tel:${9566729173}`}
                      className="text-xs text-slate-400 mt-1 cursor-pointer"
                      aria-label="Call Deccan Toolings"
                    >
                      <span className="text-slate-200"> / 9566729173</span>
                      </a>
                      </span>
                      </a>
                </div>

                
              </div>

              {/* Map Embed Frame */}
              <div className="h-44 w-full bg-navy-950 border-t border-navy-800 relative">
                <iframe
                  title="Deccan Toolings Unit 2 Chennai Map"
                  src="https://maps.google.com/maps?q=/DECCAN+TOOLINGS,+Plot+no-2,+Ponniaman+Nagar,+Maduravoyal,+Thiruverkadu,+Tamil+Nadu+600095&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale-[40%] contrast-[110%] opacity-90 hover:opacity-100 hover:grayscale-0 transition-all"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-navy-950 border-t border-navy-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Deccan Toolings. All Rights Reserved.</p>
          <p className="text-slate-400">
            Solid Carbide Cutting Tools Manufacturing & Re-Sharpening Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
