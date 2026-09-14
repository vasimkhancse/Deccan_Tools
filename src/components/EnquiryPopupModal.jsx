import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldAlert, Sparkles, Loader2, Phone, Mail, Building, User, MessageSquare } from 'lucide-react';
import { sendEnquiryEmail } from '../services/emailService';

const STORAGE_KEY = 'deccan_popup_last_shown_time';
const COOLDOWN_MS = 30 * 60 * 1000; // 30 minutes in milliseconds

export default function EnquiryPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    // Check if 30 minutes have passed since last shown
    const lastShown = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (lastShown && now - parseInt(lastShown, 10) < COOLDOWN_MS) {
      return; // Within 30 minutes cooldown, do not show
    }

    // Open modal 5 seconds after page loads
    const timer = setTimeout(() => {
      const currentLastShown = localStorage.getItem(STORAGE_KEY);
      const currentTime = Date.now();

      if (!currentLastShown || currentTime - parseInt(currentLastShown, 10) >= COOLDOWN_MS) {
        setIsOpen(true);
        // Record timestamp in local storage
        localStorage.setItem(STORAGE_KEY, currentTime.toString());
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Update timestamp on close so it will wait another 30 mins
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit phone number');
      return;
    }
    setPhoneError('');
    setIsSubmitting(true);

    try {
      await sendEnquiryEmail({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company: formData.company || 'Not Specified',
        message: formData.message,
        subject: `Quick Lead Enquiry from ${formData.name} [Deccan Toolings]`
      });

      setSubmitted(true);
      // Auto close after 3 seconds on success
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-sm animate-fadeIn"
      style={{ animation: 'fadeIn 0.25s ease-out' }}
      role="dialog"
      aria-modal="true"
    >
      {/* Centered Modal Card without inner scrollbars */}
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-scaleUp"
        style={{ animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Header Ribbon */}
        <div className="bg-navy-950 px-6 py-4 text-white flex items-center justify-between border-b border-navy-800 relative">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-brandRed-600/20 text-brandRed-500 border border-brandRed-600/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider text-white">
                Request Tooling Quote
              </h3>
              <p className="text-[11px] text-slate-300">
                Get precision manufacturing & re-sharpening consultation
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Close Modal"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-navy-800 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold uppercase text-slate-900 tracking-tight">
                Enquiry Submitted!
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your enquiry has been sent to our engineering desk. We will reach out promptly.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2 rounded text-xs font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Name (Required) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name <span className="text-brandRed-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone (Required) */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Phone Number <span className="text-brandRed-600">*</span>
                    </label>
                    <span className={`text-[10px] font-bold ${formData.phone.length === 10 ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {formData.phone.length}/10 digits
                    </span>
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      inputMode="numeric"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData({ ...formData, phone: val });
                        if (val.length === 10) setPhoneError('');
                      }}
                      placeholder="10-digit mobile number"
                      className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border ${phoneError ? 'border-brandRed-500' : 'border-slate-300'} rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors`}
                    />
                  </div>
                  {phoneError && (
                    <p className="text-[10px] text-brandRed-600 mt-1 font-semibold">{phoneError}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email (Required) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-brandRed-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Company Name (Optional) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company / Facility"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message (Required) */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Message / Requirement <span className="text-brandRed-600">*</span>
                </label>
                <div className="relative">
                  <textarea
                    rows="3"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe tool specifications, sizes, quantities, or re-sharpening requirements..."
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded focus:border-brandRed-500 focus:bg-white focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit and Cancel Buttons */}
              <div className="pt-2 flex items-center justify-between space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center px-6 py-2.5 rounded text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-brandRed-600 hover:bg-brandRed-700 transition-all shadow-glow-red disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
