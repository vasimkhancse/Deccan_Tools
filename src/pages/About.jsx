import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import { companyInfo } from '../data/companyInfo';
import { ShieldCheck, Cpu, Calendar, Award, CheckCircle2, Wrench, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = "About Us | Deccan Toolings — Established 1998";
  }, []);

  return (
    <div className="bg-slate-50">
      {/* Top Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800 relative">
        <div className="absolute inset-0 industrial-grid-dark opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} dark={true} />
          
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Established 1998 • Over Two Decades of Industry Experience</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              About Deccan Toolings
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Solid Carbide Cutting Tools Manufacturing & Re-Sharpening Technology with 5-Axis Precision Capability.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Company Story & Vision */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-industrial bg-navy-950 aspect-[4/3] relative group">
                <img
                  src="/images/machinery/widma-lx5.png"
                  alt="Deccan Toolings 5-Axis CNC Grinder"
                  className="w-full h-full object transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                
                {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-900/90 backdrop-blur-md border border-navy-700 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase font-bold text-brandRed-400">Timeline Milestone</div>
                      <div className="text-sm font-bold text-white">1998 Conventional Grinding → 2014 5-Axis CNC</div>
                    </div>
                    <Factory className="w-8 h-8 text-slate-400" />
                  </div>
                </div> */}
              </div>

              {/* Milestones Card Below */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-3xl font-extrabold font-heading text-slate-900">1998</span>
                  <p className="mt-1 text-xs text-slate-600 font-medium">
                    Established with conventional cutter grinder technology.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-3xl font-extrabold font-heading text-brandRed-600">2014</span>
                  <p className="mt-1 text-xs text-slate-600 font-medium">
                    Accompanied advanced 5-axis CNC grinding technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <SectionTitle
                badge="Company Profile"
                title="Precision & Vision"
                subtitle="Specializing in solid carbide cutting tools manufacturing and re-sharpening technology with over twenty years of industry experience."
              />

              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p className="p-4 bg-slate-50 rounded-lg border-l-4 border-brandRed-600 font-medium text-slate-800">
                  "Deccan Toolings was established in the year 1998 with conventional cutter grinder technology and 5-axis technology was accompanied in 2014."
                </p>

                <p>
                  "Deccan Toolings is a vision of solid carbide cutting tools manufacturing and re-sharpening technology and has over twenty years of experience in the industry."
                </p>

                <p>
                  "The vision is to be a leader in innovation and introduction of manufacturing and re-sharpening of solid carbide tools through cutting-edge technology and customized solutions."
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Core Highlights:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {companyInfo.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-200"
                    >
                      <div className="w-6 h-6 rounded-full bg-brandRed-600/10 text-brandRed-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="The Deccan Advantage"
            title="Why Choose Us"
            subtitle="Strict inspection processes, cutting-edge 5-axis CNC grinders, and proven tool re-sharpening economics."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.whyChooseUs.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Across Two Units */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Strategic Presence"
            title="Manufacturing Across Two Units"
            subtitle="Unit 1 located in Coimbatore and Unit 2 in Chennai, supporting manufacturing and re-sharpening demands across Tamil Nadu and the Indian industrial belt."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-navy-950 text-white border border-navy-800 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-brandRed-400">Main Facility</span>
              <h3 className="text-2xl font-bold uppercase mt-1">UNIT-1 (COIMBATORE)</h3>
              <p className="mt-2 text-sm text-slate-300">
                No. 271/1, Valluvar Nagar, Kamarajar Road, Peelamedu, Coimbatore - 641004
              </p>
              <div className="mt-4 pt-4 border-t border-navy-800 text-xs text-slate-300 space-y-1">
                <div>Phone: <span className="text-white font-semibold">0422-4974173</span></div>
                <div>Proprietor: <span className="text-white font-semibold">Alosci.T (9566729173)</span></div>
                <div>Technical Operations: <span className="text-white font-semibold">Biju Thomas .A (9600971294)</span></div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-md text-slate-900">
              <span className="text-xs font-bold uppercase tracking-wider text-brandRed-600">Expansion Facility</span>
              <h3 className="text-2xl font-bold uppercase mt-1">UNIT-2 (CHENNAI)</h3>
              <p className="mt-2 text-sm text-slate-600">
                No-2, Ponniamman Nagar, Metro City Road, Ayanambakkam, Chennai-60009
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-700 space-y-1">
                <div>Manager: <span className="text-slate-900 font-semibold">Charles Daniel.T (9003242702)</span></div>
                <div>Email: <span className="text-slate-900 font-semibold">deccantoolings2021@gmail.com</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
