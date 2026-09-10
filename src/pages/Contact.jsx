import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SectionTitle from '../components/SectionTitle';
import ContactCard from '../components/ContactCard';
import { companyInfo } from '../data/companyInfo';
import { products } from '../data/products';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  Building, 
  ExternalLink 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productOrService: 'Solid Carbide Drills',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Deccan Toolings | Coimbatore & Chennai Units";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            productOrService: 'Solid Carbide Drills',
            message: ''
          });
    }, 2500);
  };

  const productAndServiceOptions = [
    'Solid Carbide Drills',
    'Solid Carbide End Mills',
    'Burnishing Drills',
    'Solid Carbide Reamers',
    'Taper End Mills',
    'Woodruff Cutters',
    'Custom Special Tools',
    'Precision Broaching Tools',
    'Carbide Brazed Cutters',
    'Workrest Blades',
    'Solid Carbide Gundrills',
    'Tool Re-Sharpening & Regrinding Service',
    'PVD Tool Recoating',
    'Other Engineering Enquiry'
  ];

  return (
    <div className="bg-slate-50">
      {/* Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800 relative">
        <div className="absolute inset-0 industrial-grid-dark opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} dark={true} />

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-950/80 text-brandRed-400 border border-brandRed-900/60 mb-4">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Manufacturing & Engineering Inquiries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              Contact Deccan Toolings
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Reach out to our manufacturing units in Coimbatore and Chennai for tool manufacturing, customized geometries, and re-sharpening technology.
            </p>
          </div>
        </div>
      </section>

      {/* Unit Cards Section */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Facilities"
          title="Our Manufacturing Units"
          subtitle="Direct contact information for Unit-1 in Coimbatore and Unit-2 in Chennai."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactCard unit={companyInfo.units.unit1} isPrimary={true} />
          <ContactCard unit={companyInfo.units.unit2} isPrimary={false} />
        </div>
      </section>

      {/* Contact Form & Working Hours */}
      <section className="py-16 lg:py-24 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-industrial">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brandRed-600/10 text-brandRed-600 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase text-slate-900">
                      Send Tooling Enquiry
                    </h3>
                    <p className="text-xs text-slate-500">Fill in your requirements below for technical consultation and quotation.</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold uppercase text-slate-900">
                      Enquiry Successfully Sent!
                    </h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Deccan Toolings. Your enquiry for <span className="font-semibold text-slate-900">{formData.productOrService}</span> has been received. Our team will review your specifications and get in touch.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          productOrService: 'Solid Carbide Drills',
                          message: ''
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="e.g. 9566729173"
                          className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Organization or Facility"
                          className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Product / Service */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Product / Service *
                      </label>
                      <select
                        value={formData.productOrService}
                        onChange={(e) => setFormData({...formData, productOrService: e.target.value})}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors"
                      >
                        {productAndServiceOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Message / Specifications *
                      </label>
                      <textarea
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Please specify tool dimensions, material to machine, quantities or re-sharpening requirements..."
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-8 py-4 rounded text-sm font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all shadow-glow-red hover:scale-101 cursor-pointer"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-900 mb-3">
                  Direct Response Guarantee
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every tooling inquiry is reviewed directly by our technical operations team. Whether you need standard carbide drills or high-complexity custom profile tooling ground on our 5-axis CNC grinders, we provide rapid quotation and delivery estimates.
                </p>
              </div>

              {/* Operating Hours */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-brandRed-600" />
                  <span>Working Hours</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1.5">
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span>Monday – Saturday:</span>
                    <span className="font-semibold text-slate-900">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Sunday:</span>
                    <span className="font-semibold text-brandRed-600">Weekly Off</span>
                  </div>
                </div>
              </div>

              {/* Location Reference / Google Maps Ready Areas */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Unit Location Reference:
                </h4>

                {/* Coimbatore Unit Preview */}
                <div className="bg-navy-950 text-white p-5 rounded-xl border border-navy-800 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brandRed-400">Unit 1 • Coimbatore</span>
                    <MapPin className="w-4 h-4 text-brandRed-500" />
                  </div>
                  <p className="text-xs text-slate-300">
                    No. 271/1, Valluvar Nagar, Kamarajar Road, Peelamedu, Coimbatore - 641004
                  </p>
                  <a
                    href="https://maps.google.com/?q=Kamarajar+Road+Peelamedu+Coimbatore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-slate-300 hover:text-white pt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>

                {/* Chennai Unit Preview */}
                <div className="bg-slate-100 text-slate-900 p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brandRed-600">Unit 2 • Chennai</span>
                    <MapPin className="w-4 h-4 text-brandRed-600" />
                  </div>
                  <p className="text-xs text-slate-600">
                    No-2, Ponniamman Nagar, Metro City Road, Ayanambakkam, Chennai-60009
                  </p>
                  <a
                    href="https://maps.google.com/?q=Metro+City+Road+Ayanambakkam+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-slate-700 hover:text-slate-900 pt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
