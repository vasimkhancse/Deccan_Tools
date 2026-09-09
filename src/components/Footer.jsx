import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      {/* Top industrial banner */}
      <div className="bg-navy-900 border-b border-navy-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded bg-brandRed-600/20 border border-brandRed-600 flex items-center justify-center text-brandRed-500">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wider">
                  DECCAN TOOLINGS
                </h4>
                <p className="text-xs text-slate-400">
                  Precision Solid Carbide Cutting Tools Manufacturing & 5-Axis Re-Sharpening Technology
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-brandRed-600 hover:bg-brandRed-700 text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-all duration-200"
              >
                Request Tool Quote
              </Link>
              <Link
                to="/manufacturing"
                className="px-5 py-2.5 bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-bold uppercase tracking-wider rounded border border-navy-700 transition-all duration-200"
              >
                View 5-Axis Setup
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 border-l-2 border-brandRed-600 pl-2.5">
              Contact Units
            </h3>

            {/* Coimbatore */}
            <div className="text-xs space-y-1 bg-navy-900/70 p-3 rounded border border-navy-800">
              <div className="font-bold text-brandRed-400 uppercase">Unit-1 (Coimbatore)</div>
              <p className="text-slate-300">{companyInfo.units.unit1.addressLine1}, {companyInfo.units.unit1.addressLine2}</p>
              <p className="text-slate-300">{companyInfo.units.unit1.cityStateZip}</p>
              <div className="pt-1 flex items-center gap-1.5 text-slate-300 font-medium">
                <Phone className="w-3.5 h-3.5 text-brandRed-500" />
                <a href={`tel:${companyInfo.units.unit1.phone}`} className="hover:text-white">
                  {companyInfo.units.unit1.phone} / 9566729173
                </a>
              </div>
            </div>

            {/* Chennai */}
            <div className="text-xs space-y-1 bg-navy-900/70 p-3 rounded border border-navy-800">
              <div className="font-bold text-brandRed-400 uppercase">Unit-2 (Chennai)</div>
              <p className="text-slate-300">{companyInfo.units.unit2.addressLine1}, {companyInfo.units.unit2.addressLine2}</p>
              <p className="text-slate-300">{companyInfo.units.unit2.cityStateZip}</p>
              <div className="pt-1 flex items-center gap-1.5 text-slate-300 font-medium">
                <Phone className="w-3.5 h-3.5 text-brandRed-500" />
                <a href={`tel:${companyInfo.units.unit2.contacts[0].phone}`} className="hover:text-white">
                  {companyInfo.units.unit2.contacts[0].phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="pt-1 text-xs flex items-center gap-2 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-brandRed-500" />
              <a href={`mailto:${companyInfo.primaryEmail}`} className="hover:text-white transition-colors">
                {companyInfo.primaryEmail}
              </a>
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
