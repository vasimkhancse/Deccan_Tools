import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, PhoneCall, Shield, Cpu, RefreshCw, PenTool } from 'lucide-react';
import { products } from '../data/products';
import { companyInfo } from '../data/companyInfo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [manufacturingDropdownOpen, setManufacturingDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileMfgOpen, setMobileMfgOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const prodTimer = useRef(null);
  const mfgTimer = useRef(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setManufacturingDropdownOpen(false);
    setMobileProductsOpen(false);
    setMobileMfgOpen(false);
  }, [location.pathname]);

  // Handle sticky scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProdMouseEnter = () => {
    if (prodTimer.current) clearTimeout(prodTimer.current);
    setProductsDropdownOpen(true);
  };
  const handleProdMouseLeave = () => {
    prodTimer.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  const handleMfgMouseEnter = () => {
    if (mfgTimer.current) clearTimeout(mfgTimer.current);
    setManufacturingDropdownOpen(true);
  };
  const handleMfgMouseLeave = () => {
    mfgTimer.current = setTimeout(() => {
      setManufacturingDropdownOpen(false);
    }, 150);
  };

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-semibold transition-all duration-200 uppercase tracking-wide flex items-center gap-1 ${
      isActive
        ? 'text-brandRed-500 font-bold'
        : 'text-slate-200 hover:text-white'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2.5 text-base font-semibold transition-colors rounded-md ${
      isActive
        ? 'bg-brandRed-600 text-white'
        : 'text-slate-200 hover:bg-navy-800 hover:text-white'
    }`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-navy-900/95 backdrop-blur-md shadow-industrial-lg border-b border-navy-800' 
        : 'bg-navy-900 border-b border-navy-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Deccan Toolings Home">
            <img 
              src="/images/logo.png" 
              alt="DECCAN TOOLINGS" 
              className="h-11 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* Manufacturing Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMfgMouseEnter}
              onMouseLeave={handleMfgMouseLeave}
            >
              <NavLink 
                to="/manufacturing" 
                className={navLinkClass}
                onClick={(e) => {
                  // Allow navigation directly to /manufacturing
                }}
              >
                Manufacturing
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${manufacturingDropdownOpen ? 'rotate-180 text-brandRed-500' : ''}`} />
              </NavLink>

              {manufacturingDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-navy-950 border border-navy-700 rounded-lg shadow-2xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-navy-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Infrastructure & Capabilities
                  </div>
                  <Link
                    to="/manufacturing#cnc"
                    className="flex items-center px-4 py-2.5 text-sm text-slate-200 hover:bg-navy-800 hover:text-brandRed-400 transition-colors"
                  >
                    <Cpu className="w-4 h-4 mr-2.5 text-brandRed-500" />
                    <div>
                      <div className="font-semibold">CNC Machineries</div>
                      <div className="text-xs text-slate-400">WIDMA & ANCA 5-Axis Systems</div>
                    </div>
                  </Link>

                  <Link
                    to="/inspection"
                    className="flex items-center px-4 py-2.5 text-sm text-slate-200 hover:bg-navy-800 hover:text-brandRed-400 transition-colors"
                  >
                    <Shield className="w-4 h-4 mr-2.5 text-brandRed-500" />
                    <div>
                      <div className="font-semibold">Inspection</div>
                      <div className="text-xs text-slate-400">Zoller Smile 420 & Speroni Magis</div>
                    </div>
                  </Link>

                  <Link
                    to="/manufacturing#conventional"
                    className="flex items-center px-4 py-2.5 text-sm text-slate-200 hover:bg-navy-800 hover:text-brandRed-400 transition-colors"
                  >
                    <PenTool className="w-4 h-4 mr-2.5 text-brandRed-500" />
                    <div>
                      <div className="font-semibold">Conventional Machineries</div>
                      <div className="text-xs text-slate-400">Sigma UTC & HMT Cylindrical</div>
                    </div>
                  </Link>

                  <Link
                    to="/manufacturing#capabilities"
                    className="flex items-center px-4 py-2.5 text-sm text-slate-200 hover:bg-navy-800 hover:text-brandRed-400 transition-colors border-t border-navy-800"
                  >
                    <RefreshCw className="w-4 h-4 mr-2.5 text-brandRed-500" />
                    <div>
                      <div className="font-semibold">Manufacturing Capabilities</div>
                      <div className="text-xs text-slate-400">Complete Machine Inventory</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Products Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleProdMouseEnter}
              onMouseLeave={handleProdMouseLeave}
            >
              <NavLink 
                to="/products" 
                className={navLinkClass}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-brandRed-500' : ''}`} />
              </NavLink>

              {productsDropdownOpen && (
                <div className="absolute top-full -left-20 w-[580px] bg-navy-950 border border-navy-700 rounded-lg shadow-2xl p-4 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex justify-between items-center pb-2 mb-3 border-b border-navy-800">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Solid Carbide Cutting Tool Range
                    </span>
                    <Link to="/products" className="text-xs font-bold text-brandRed-400 hover:text-brandRed-300 flex items-center">
                      View All 11 Tools <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {products.map((prod) => (
                      <Link
                        key={prod.id}
                        to={`/products/${prod.slug}`}
                        className="flex items-center px-2.5 py-1.5 rounded text-sm text-slate-200 hover:bg-navy-800 hover:text-brandRed-400 transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-brandRed-500 mr-2.5 transition-colors"></span>
                        <span className="truncate font-medium">{prod.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/coating" className={navLinkClass}>
              Coating
            </NavLink>

            <NavLink to="/quality" className={navLinkClass}>
              Quality
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all rounded shadow-md hover:shadow-glow-red"
            >
              <PhoneCall className="w-4 h-4 mr-1.5" />
              Get A Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brandRed-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 pt-2 pb-6 space-y-2 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <NavLink to="/" className={mobileNavLinkClass} end>
            Home
          </NavLink>

          <NavLink to="/about" className={mobileNavLinkClass}>
            About Us
          </NavLink>

          {/* Mobile Manufacturing Accordion */}
          <div>
            <div className="flex items-center justify-between">
              <NavLink to="/manufacturing" className="flex-1 px-4 py-2.5 text-base font-semibold text-slate-200 hover:bg-navy-800 rounded-md">
                Manufacturing
              </NavLink>
              <button
                onClick={() => setMobileMfgOpen(!mobileMfgOpen)}
                className="p-2 text-slate-400 hover:text-white"
                aria-label="Toggle Manufacturing Menu"
              >
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileMfgOpen ? 'rotate-180 text-brandRed-500' : ''}`} />
              </button>
            </div>
            {mobileMfgOpen && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-900/60 rounded-md mt-1">
                <Link to="/manufacturing#cnc" className="block py-2 text-sm text-slate-300 hover:text-brandRed-400">
                  • CNC Machineries
                </Link>
                <Link to="/inspection" className="block py-2 text-sm text-slate-300 hover:text-brandRed-400">
                  • Inspection (Zoller & Speroni)
                </Link>
                <Link to="/manufacturing#conventional" className="block py-2 text-sm text-slate-300 hover:text-brandRed-400">
                  • Conventional Machineries
                </Link>
                <Link to="/manufacturing#capabilities" className="block py-2 text-sm text-slate-300 hover:text-brandRed-400">
                  • Manufacturing Capabilities Table
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Products Accordion */}
          <div>
            <div className="flex items-center justify-between">
              <NavLink to="/products" className="flex-1 px-4 py-2.5 text-base font-semibold text-slate-200 hover:bg-navy-800 rounded-md">
                Products
              </NavLink>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="p-2 text-slate-400 hover:text-white"
                aria-label="Toggle Products Menu"
              >
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-brandRed-500' : ''}`} />
              </button>
            </div>
            {mobileProductsOpen && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-900/60 rounded-md mt-1">
                {products.map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/products/${prod.slug}`}
                    className="block py-1.5 text-sm text-slate-300 hover:text-brandRed-400 truncate"
                  >
                    • {prod.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/coating" className={mobileNavLinkClass}>
            Coating
          </NavLink>

          <NavLink to="/quality" className={mobileNavLinkClass}>
            Quality
          </NavLink>

          <NavLink to="/contact" className={mobileNavLinkClass}>
            Contact Us
          </NavLink>

          <div className="pt-4 border-t border-navy-800 flex flex-col gap-2">
            <Link
              to="/contact"
              className="w-full text-center py-2.5 font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 rounded shadow"
            >
              Enquire Now
            </Link>
            <a
              href={`tel:${companyInfo.primaryPhone}`}
              className="w-full text-center py-2.5 font-semibold text-sm text-slate-300 bg-navy-800 hover:bg-navy-700 rounded flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-brandRed-500" />
              Call +91 {companyInfo.primaryPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
