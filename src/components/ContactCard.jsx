import React from 'react';
import { MapPin, Phone, Mail, User, Building, ExternalLink } from 'lucide-react';

export default function ContactCard({ unit, isPrimary = false }) {
  return (
    <div className={`rounded-xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
      isPrimary 
        ? 'bg-navy-900 border-navy-700 text-white shadow-md' 
        : 'bg-white border-slate-200 text-slate-900 shadow-md'
    }`}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/20 mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isPrimary ? 'bg-brandRed-600 text-white' : 'bg-slate-100 text-brandRed-600'
            }`}>
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${isPrimary ? 'text-brandRed-400' : 'text-brandRed-600'}`}>
                Manufacturing Facility
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight">
                {unit.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-4 text-sm">
          <div className="flex items-start space-x-3">
            <MapPin className={`w-5 h-5 shrink-0 mt-0.5 ${isPrimary ? 'text-brandRed-400' : 'text-brandRed-600'}`} />
            <div>
              <p className="font-semibold">{unit.addressLine1}</p>
              <p className={isPrimary ? 'text-slate-300' : 'text-slate-600'}>{unit.addressLine2}</p>
              <p className={`font-medium ${isPrimary ? 'text-slate-200' : 'text-slate-800'}`}>{unit.cityStateZip}</p>
            </div>
          </div>

          {/* Unit Landline if available */}
          {unit.phone && (
            <div className="flex items-center space-x-3">
              <Phone className={`w-4 h-4 shrink-0 ${isPrimary ? 'text-brandRed-400' : 'text-brandRed-600'}`} />
              <span className={isPrimary ? 'text-slate-300' : 'text-slate-600'}>
                Phone: <a href={`tel:${unit.phone}`} className="font-semibold underline decoration-dotted hover:text-brandRed-500">{unit.phone}</a>
              </span>
            </div>
          )}

          {/* Unit Email */}
          <div className="flex items-center space-x-3">
            <Mail className={`w-4 h-4 shrink-0 ${isPrimary ? 'text-brandRed-400' : 'text-brandRed-600'}`} />
            <a 
              href={`mailto:${unit.email}`} 
              className={`font-semibold hover:underline truncate ${isPrimary ? 'text-brandRed-400 hover:text-brandRed-300' : 'text-brandRed-600 hover:text-brandRed-700'}`}
            >
              {unit.email}
            </a>
          </div>

          {/* Key Personnel */}
          <div className={`mt-6 pt-5 border-t ${isPrimary ? 'border-navy-800' : 'border-slate-100'} space-y-3`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isPrimary ? 'text-slate-400' : 'text-slate-500'}`}>
              Key Contact Persons:
            </h4>
            {unit.contacts.map((contact, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <User className={`w-4 h-4 ${isPrimary ? 'text-slate-400' : 'text-slate-500'}`} />
                  <div>
                    <span className="font-bold">{contact.name}</span>
                    <span className={`block text-[11px] ${isPrimary ? 'text-slate-400' : 'text-slate-500'}`}>
                      {contact.role}
                    </span>
                  </div>
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className={`inline-flex items-center px-3 py-1.5 rounded font-bold transition-colors ${
                    isPrimary 
                      ? 'bg-navy-800 hover:bg-brandRed-600 text-white' 
                      : 'bg-slate-100 hover:bg-brandRed-600 hover:text-white text-slate-800'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-4 border-t border-slate-200/20 flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${unit.contacts[0].phone}`}
          className={`flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all text-center ${
            isPrimary 
              ? 'bg-brandRed-600 hover:bg-brandRed-500 text-white shadow-glow-red' 
              : 'bg-brandRed-600 hover:bg-brandRed-700 text-white'
          }`}
        >
          <Phone className="w-3.5 h-3.5 mr-1.5" />
          Call {unit.city}
        </a>
        <a
          href={`mailto:${unit.email}?subject=Enquiry%20for%20Deccan%20Toolings%20(${unit.city})`}
          className={`flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all border text-center ${
            isPrimary 
              ? 'border-navy-700 bg-navy-800 hover:bg-navy-700 text-white' 
              : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800'
          }`}
        >
          <Mail className="w-3.5 h-3.5 mr-1.5" />
          Send Email
        </a>
      </div>
    </div>
  );
}
