import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';
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
  Building2,
  ChevronRight,
  Terminal,
  Code2,Download,
} from 'lucide-react';

export default function Home() {
  useEffect(() => {
    document.title = "Deccan Toolings | Solid Carbide Cutting Tools Manufacturer";
  }, []);

  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. Hero Section (6-Banner Carousel with High-Resolution Graphic Banners) */}
      <Hero />

      {/* 2. About Deccan Toolings Preview (Two-Column Layout) */}
      <section className="py-10 lg:py-18 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
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

              <div className="mt-8 flex flex-wrap items-center gap-4">
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
        
      </section>

      {/* 3. Why Choose Us (Carousel) */}
      <section className="py-10 lg:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Engineering Standards"
            title="Why Choose Deccan Toolings"
            subtitle="Engineered for high performance, prolonged tool life, and significant cost savings through customized cutting and re-sharpening solutions."
            center={true}
          />

          {/* Why Choose Us Carousel */}
          <Carousel
            autoplay={true}
            autoplayInterval={4000}
            pauseOnHover={true}
            showArrows={true}
            showDots={true}
            theme="light"
            itemsPerView={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
            gap={24}
            className="pb-4"
            ariaLabel="Why Choose Us Carousel"
          >
            {companyInfo.whyChooseUs.map((item, index) => (
              <div key={item.id} className="h-full">
                <FeatureCard feature={item} index={index} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 4. HOME PRODUCTS CAROUSEL */}
      <section className="py-10 lg:py-18 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-50 text-brandRed-600 border border-brandRed-200 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brandRed-500 animate-pulse"></span>
                Solid Carbide Tool Range
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
                OUR PRODUCTS
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl">
                Precision tools engineered for performance and reliability.
              </p>
            </div>

            <Link
              to="/products"
              className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 rounded text-sm font-bold uppercase tracking-wider text-brandRed-600 bg-brandRed-50 hover:bg-brandRed-600 hover:text-white border border-brandRed-200 transition-all shadow-sm self-start md:self-auto"
            >
              <span>View All 11 Products</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Reusable Product Carousel (4 desktop, 2-3 tablet, 1 mobile) */}
          <Carousel
            autoplay={true}
            autoplayInterval={4000}
            pauseOnHover={true}
            showArrows={true}
            showDots={true}
            theme="light"
            itemsPerView={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
            gap={24}
            className="pb-6"
            ariaLabel="Products Carousel"
          >
            {products.map((product) => (
              <div key={product.id} className="h-full">
                <ProductCard product={product} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 5. RE-SHARPENING FULL-WIDTH BANNER (Process Carousel) */}
      <section className="py-10 lg:py-18 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 industrial-grid-dark opacity-35 pointer-events-none"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brandRed-600/15 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-3">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Cost-Saving Tool Recycling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
              GIVE YOUR CUTTING TOOLS A SECOND LIFE
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Deccan Toolings provides value-added services through recycling of used cutting tools using re-sharpening technology.
            </p>
          </div>

          {/* 6-step Re-Sharpening Process Carousel */}
          <Carousel
            autoplay={true}
            autoplayInterval={3500}
            pauseOnHover={true}
            showArrows={true}
            showDots={true}
            theme="dark"
            itemsPerView={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
            gap={20}
            className="pb-4"
            ariaLabel="Re-Sharpening Process Carousel"
          >
            {resharpeningSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-navy-900/90 border border-navy-700/80 rounded-xl p-6 flex flex-col justify-between h-full shadow-lg hover:border-brandRed-500 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-lg bg-brandRed-600/20 text-brandRed-400 font-mono font-extrabold text-base flex items-center justify-center border border-brandRed-500/40">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Step {idx + 1} of 6
                    </span>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>

          {/* Re-Sharpening CTA */}
          <div className="mt-10 text-center">
            <Link
              to="/contact?subject=Re-Sharpening"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all shadow-glow-red hover:scale-102"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              <span>Enquire About Re-Sharpening</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. HOME MACHINERY CAROUSEL */}
      <section className="py-10 lg:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-50 text-brandRed-600 border border-brandRed-200 mb-3">
                <Cpu className="w-3.5 h-3.5 text-brandRed-600" />
                5-Axis CNC & Tool Room Infrastructure
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
                OUR MANUFACTURING TECHNOLOGY
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl">
                Advanced CNC tool and cutter grinding capabilities for high precision manufacturing and regrinding.
              </p>
            </div>

            <Link
              to="/manufacturing"
              className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 rounded text-sm font-bold uppercase tracking-wider text-brandRed-600 bg-brandRed-50 hover:bg-brandRed-600 hover:text-white border border-brandRed-200 transition-all shadow-sm self-start md:self-auto"
            >
              <span>View Full Infrastructure</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Machinery Carousel (2-3 desktop, 2 tablet, 1 mobile) */}
          <Carousel
            autoplay={true}
            autoplayInterval={4500}
            pauseOnHover={true}
            showArrows={true}
            showDots={true}
            theme="light"
            itemsPerView={{ base: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
            gap={24}
            className="pb-6"
            ariaLabel="Manufacturing Machinery Carousel"
          >
            {cncMachinery.map((machine) => (
              <div
                key={machine.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-industrial transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div className="relative aspect-[16/10] bg-navy-950 overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold uppercase text-slate-900 group-hover:text-brandRed-600 transition-colors">
                      {machine.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {machine.description}
                    </p>
                    {machine.system && (
                      <div className="mt-3 inline-flex items-center text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                        <Terminal className="w-3.5 h-3.5 mr-1.5 text-brandRed-600" />
                        {machine.system}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500">{machine.software || 'Precision CNC'}</span>
                    <Link
                      to="/manufacturing"
                      className="font-bold text-brandRed-600 hover:text-brandRed-700 flex items-center"
                    >
                      Machine Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 7. Coating Spotlight Section */}
      <section className="py-10 bg-navy-900 text-white border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brandRed-400">
                PVD Surface Treatment
              </span>
              <h3 className="text-3xl font-extrabold uppercase tracking-tight font-heading">
                Advanced PVD Coating Solutions
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                HARD. SHARP. DURABLE. TINALOX SN², HYPERLOX, ALCRONA PRO, STEELCON, FERROCON, TIN COAT, and LATUMA.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/coating"
                className="px-6 py-3.5 bg-brandRed-600 hover:bg-brandRed-700 text-white font-bold uppercase text-xs tracking-wider rounded shadow-glow-red transition-all"
              >
                Explore Coating
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPANY PROFILE FULL-WIDTH CTA BANNER */}
      <section className="relative bg-navy-950 text-white py-10 overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/machinery/widma-lx5-plus.png"
            alt="Deccan Toolings Industrial Workshop"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/85"></div>
          <div className="absolute inset-0 industrial-grid-dark opacity-35"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900/90 backdrop-blur-md border border-navy-700/80 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Established 1998 • Indian Manufacturing</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight font-heading">
                PRECISION. EXPERIENCE. TECHNOLOGY.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Discover Deccan Toolings and our capabilities in solid carbide cutting tools manufacturing and re-sharpening.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                 <a href="/DECCAN_TOOLINGS_PROFILE.pdf" target="_blank" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all shadow-glow-red hover:scale-102 cursor-pointer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Company Profile
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded text-sm font-bold uppercase tracking-wider text-slate-200 bg-navy-800 hover:bg-navy-700 hover:text-white border border-navy-700 transition-all text-center"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-brandRed-500" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
