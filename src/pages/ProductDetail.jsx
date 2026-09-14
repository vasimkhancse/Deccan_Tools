import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { getProductBySlug, products } from '../data/products';
import { companyInfo } from '../data/companyInfo';
import { 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  PhoneCall, 
  Mail, 
  Cpu, 
  Sparkles, 
  Layers,
  ZoomIn
} from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Simple enquiry modal state
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });

  useEffect(() => {
    const found = getProductBySlug(slug);
    if (found) {
      setProduct(found);
      document.title = `${found.name} | Deccan Toolings`;
    } else {
      // Fallback
      navigate('/products', { replace: true });
    }
  }, [slug, navigate]);

  if (!product) {
    return null;
  }

  // Related products (exclude current)
  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEnquiryOpen(false);
      setFormData({ name: '', email: '', phone: '', company: '', notes: '' });
    }, 2500);
  };

  return (
    <div className="bg-slate-50">
      {/* Breadcrumb strip */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Products', to: '/products' },
              { label: product.name }
            ]}
          />
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Product Image with Zoom preview */}
            <div className="lg:col-span-6">
              <div 
                className="relative bg-navy-950 rounded-2xl overflow-hidden border border-slate-200 shadow-industrial cursor-zoom-in group aspect-[4/3]"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object transition-transform duration-500 ${
                    isZoomed ? 'scale-150 cursor-zoom-out' : 'group-hover:scale-105'
                  }`}
                />

                {/* <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-navy-900/90 text-brandRed-400 backdrop-blur rounded border border-navy-700 shadow">
                    {product.category}
                  </span>
                </div> */}

                {/* <div className="absolute bottom-4 right-4 bg-navy-900/80 backdrop-blur text-white text-xs px-3 py-1.5 rounded flex items-center gap-1.5 border border-navy-700 pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5 text-brandRed-500" />
                  <span>Click to Zoom</span>
                </div> */}
              </div>

              {/* Manufacturing & Re-sharpening Guarantee Box */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="w-9 h-9 rounded-lg bg-brandRed-600/10 text-brandRed-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Deccan Toolings Manufacturing Standard</span>
                    <span className="text-slate-500">100% Inspected on ZOLLER SMILE 420 & SPERONI</span>
                  </div>
                </div>

                <Link
                  to="/coating"
                  className="text-xs font-bold text-brandRed-600 hover:text-brandRed-700 uppercase tracking-wider whitespace-nowrap"
                >
                  PVD Coatings Available →
                </Link>
              </div>
            </div>

            {/* Right: Product Details & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest bg-brandRed-50 text-brandRed-600 border border-brandRed-200 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandRed-500 animate-pulse"></span>
                  Solid Carbide Cutting Tool
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
                  {product.name}
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              {product.features && (
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Tool Characteristics:
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brandRed-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applications List */}
              {product.applications && (
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Target Applications:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.applications.map((app, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded border border-slate-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brandRed-600 shrink-0"></span>
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Enquiry CTAs */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
                {/* <button
                  onClick={() => setEnquiryOpen(true)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all shadow-glow-red hover:scale-102 cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Request Tool Quote
                </button> */}

                <a
                  href={`tel:${companyInfo.primaryPhone}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-brandRed-600" />
                  Call: {companyInfo.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brandRed-600">Complementary Range</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900 mt-1">
              Related Cutting Tools
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-bold uppercase tracking-wider text-brandRed-600 hover:text-brandRed-700 flex items-center"
          >
            All 11 Products <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Reusable CTA */}
      <CTASection />

      {/* Quote / Enquiry Modal */}
      {enquiryOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-navy-900 text-white p-6 flex justify-between items-center border-b border-navy-800">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider">
                  Enquire for {product.name}
                </h3>
                <p className="text-xs text-slate-400">Direct response from engineering team</p>
              </div>
              <button
                onClick={() => setEnquiryOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold uppercase text-slate-900">Enquiry Received!</h4>
                <p className="text-sm text-slate-600">
                  Thank you for your interest in Deccan Toolings {product.name}. Our technical team will reach out promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="p-6 space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:border-brandRed-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="engineer@company.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:border-brandRed-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:border-brandRed-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Company / Industry
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Company name or manufacturing sector"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:border-brandRed-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Technical Requirements / Quantities
                  </label>
                  <textarea
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Specify dimensions, material to be cut, or re-sharpening requirements..."
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:border-brandRed-500 focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setEnquiryOpen(false)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 rounded shadow"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
