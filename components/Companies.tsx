
import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { COMPANIES } from '../constants';

const Companies: React.FC = () => {
  return (
    <section id="companies" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Diversified Excellence</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 font-poppins text-slate-900">
            The <span className="text-amber-600 underline decoration-amber-500/30">Emaan Group</span> Ecosystem
          </h2>
          <p className="text-slate-600 text-lg">
            A synergy of independent business units working together to provide seamless international solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANIES.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-lg ${
                company.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                company.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                company.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                'bg-indigo-50 text-indigo-600'
              }`}>
                {company.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {company.title}
              </h3>
              
              <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                {company.description}
              </p>

              <div className="space-y-3 mb-8">
                {company.features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`flex items-center justify-between px-6 py-3 rounded-xl font-bold text-sm transition-all group-hover:gap-4 ${
                  company.color === 'emerald' ? 'bg-emerald-600 text-white hover:bg-emerald-700' :
                  company.color === 'amber' ? 'bg-amber-500 text-white hover:bg-amber-600' :
                  company.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                  'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {company.cta}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
