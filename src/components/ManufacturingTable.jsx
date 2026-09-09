import React from 'react';
import { manufacturingCapabilities } from '../data/capabilities';
import { Cpu, CheckCircle } from 'lucide-react';

export default function ManufacturingTable() {
  const totalMachines = manufacturingCapabilities.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Table Header Strip */}
      <div className="bg-navy-900 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-800">
        <div className="flex items-center space-x-2.5">
          <Cpu className="w-5 h-5 text-brandRed-500" />
          <h3 className="text-lg font-bold uppercase tracking-wider">
            Machinery & Equipment Inventory
          </h3>
        </div>
        <div className="inline-flex items-center text-xs font-semibold text-brandRed-400 bg-navy-950 px-3 py-1 rounded border border-navy-700">
          <span>Total Operational Machines: </span>
          <span className="ml-1 text-white font-bold">{totalMachines} Units</span>
        </div>
      </div>

      {/* Desktop & Tablet Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-slate-100 text-slate-700 uppercase text-xs font-bold tracking-wider border-b border-slate-200">
              <th scope="col" className="py-3.5 px-6">
                Description
              </th>
              <th scope="col" className="py-3.5 px-6">
                Make
              </th>
              <th scope="col" className="py-3.5 px-6 text-center">
                Quantity
              </th>
              <th scope="col" className="py-3.5 px-6 text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {manufacturingCapabilities.map((item, index) => (
              <tr 
                key={index} 
                className="hover:bg-slate-50 transition-colors group"
              >
                <td className="py-4 px-6 font-semibold text-slate-900 group-hover:text-brandRed-600 transition-colors">
                  {item.description}
                </td>
                <td className="py-4 px-6 font-bold text-navy-800 tracking-wide">
                  <span className="inline-block px-2.5 py-1 bg-slate-100 group-hover:bg-brandRed-50 group-hover:text-brandRed-700 rounded text-xs transition-colors">
                    {item.make}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 font-extrabold text-sm border border-slate-200 group-hover:bg-brandRed-600 group-hover:text-white group-hover:border-brandRed-600 transition-all">
                    {item.quantity}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <span className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3 mr-1 text-emerald-600" />
                    In-House Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>Verified shop-floor equipment deployed across Deccan Toolings manufacturing units.</span>
        <span className="font-semibold text-slate-700">Strict Micron-Level Precision Standards</span>
      </div>
    </div>
  );
}
