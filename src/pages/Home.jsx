import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import { products } from '../data/products';
import { companyInfo, resharpeningSteps } from '../data/companyInfo';
import { cncMachinery } from '../data/machinery';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  RefreshCw, 
  Sparkles, 
  Layers, 
  PhoneCall, 
  Clock, 
  Building2 
} from 'lucide-react';

export default function Home() {
  useEffect(() => {
    document.title = "Deccan Toolings | Solid Carbide Cutting Tools Manufacturer";
  }, []);

  // Featured 6 products for homepage
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Deccan Toolings Preview (Two-Column Layout) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Industrial Visual / Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-industrial bg-navy-950 aspect-[4/3]">
                <img
                  src="/images/machinery/widma-lx5-plus.png"
                  alt="Deccan Toolings 5-Axis CNC Precision Machinery"
                  className="w-full h-full object"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                
                {/* Floating Experience Badge */}
                {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-900/90 backdrop-blur-md border border-navy-700 text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-brandRed-600 flex items-center justify-center font-heading font-extrabold text-2xl text-white">
                      20+
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-300">Industry Heritage</div>
                      <div className="text-sm font-semibold text-white">Serving Indian Industry Since 1998</div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="text-xs uppercase font-bold text-brandRed-400">5-Axis CNC</div>
                    <div className="text-xs text-slate-300">Added in 2014</div>
                  </div>
                </div> */}
              </div>

              {/* Decorative background shape */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brandRed-600/10 rounded-2xl -z-10"></div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6">
              <SectionTitle
                badge="Established 1998"
                title="About Deccan Toolings"
                subtitle="Specializing in solid carbide cutting tools manufacturing and re-sharpening technology with over twenty years of industry experience."
              />

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  Deccan Toolings was established in the year 1998 with conventional cutter grinder technology and 5-axis technology was accompanied in 2014.
                </p>
                <p>
                  Deccan Toolings is a vision of solid carbide cutting tools manufacturing and re-sharpening technology and has over twenty years of experience in the industry.
                </p>
                <p>
                  The vision is to be a leader in innovation and introduction of manufacturing and re-sharpening of solid carbide tools through cutting-edge technology and customized solutions.
                </p>
              </div>

              {/* 5 Key Highlights */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Core Company Competencies:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {companyInfo.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm font-bold text-slate-800 bg-slate-50 p-2.5 rounded-md border border-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brandRed-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center space-x-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 rounded text-sm font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-colors shadow-sm"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/manufacturing"
                  className="inline-flex items-center px-6 py-3 rounded text-sm font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>Our Infrastructure</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (4 Cards) */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Engineering Standards"
            title="Why Choose Deccan Toolings"
            subtitle="Engineered for high performance, prolonged tool life, and significant cost savings through customized cutting and re-sharpening solutions."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.whyChooseUs.map((item, index) => (
              <FeatureCard key={item.id} feature={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Products Grid Preview */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-50 text-brandRed-600 border border-brandRed-200 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brandRed-500 animate-pulse"></span>
                Solid Carbide Tool Program
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
                Precision Cutting Tools
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl">
                Engineered for maximum rigidity, high cutting speeds, tight tolerances, and extended tool life across all industrial machining applications.
              </p>
            </div>

            <Link
              to="/products"
              className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 rounded text-sm font-bold uppercase tracking-wider text-brandRed-600 bg-brandRed-50 hover:bg-brandRed-600 hover:text-white border border-brandRed-200 transition-all shadow-sm"
            >
              <span>View All 11 Products</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Re-Sharpening Major Section */}
      <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 industrial-grid-dark opacity-35"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brandRed-600/15 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-3">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Cost-Saving Tool Recycling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
              Give Your Cutting Tools a Second Life
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Deccan Toolings provides value-added services through recycling of used cutting tools using re-sharpening technology.
            </p>
          </div>

          {/* 6-step Re-Sharpening Process Flow */}
          <ProcessTimeline steps={resharpeningSteps} dark={true} />

          {/* Re-Sharpening CTA */}
          <div className="mt-14 text-center">
            <Link
              to="/contact?subject=Re-Sharpening"
              className="inline-flex items-center justify-center px-8 py-4 rounded text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all shadow-glow-red hover:scale-102"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              <span>Enquire About Re-Sharpening</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Manufacturing Excellence Teaser */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="5-Axis Grinding Power"
            title="Manufacturing Excellence"
            subtitle="Our manufacturing capabilities combine precision grinding technology, inspection systems and experienced engineering practices."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cncMachinery.slice(0, 2).map((machine, idx) => (
              <div key={machine.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-industrial transition-all duration-300 flex flex-col justify-between group">
                <div className="relative aspect-[16/10] bg-navy-950 overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-brandRed-600 text-white rounded">
                      {machine.name}
                    </span>
                  </div> */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold uppercase text-slate-900 group-hover:text-brandRed-600 transition-colors">
                    {machine.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                    {machine.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">{machine.system}</span>
                    <Link
                      to="/manufacturing"
                      className="font-bold text-brandRed-600 hover:text-brandRed-700 flex items-center"
                    >
                      View Machine Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/manufacturing"
              className="inline-flex items-center px-8 py-3.5 rounded text-sm font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-colors"
            >
              <Cpu className="w-4 h-4 mr-2 text-brandRed-600" />
              <span>Explore Complete 5-Axis & Inspection Infrastructure</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Coating Quick Spotlight */}
      <section className="py-16 bg-navy-900 text-white border-b border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brandRed-400">
                PVD Surface Treatment
              </span>
              <h3 className="text-3xl font-extrabold uppercase tracking-tight">
                Advanced PVD Coating Solutions
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                HARD. SHARP. DURABLE. TINALOX SN², HYPERLOX, ALCRONA PRO, STEELCON, FERROCON, TIN COAT, and LATUMA.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/coating"
                className="px-6 py-3.5 bg-brandRed-600 hover:bg-brandRed-700 text-white font-bold uppercase text-xs tracking-wider rounded shadow-glow-red transition-all"
              >
                Explore Coating Benefits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Company Profile CTA */}
      <CTASection />
    </div>
  );
}
