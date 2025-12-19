
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-24 h-24 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1454165833767-1316b0215b3f?auto=format&fit=crop&q=80&w=1000"
                alt="Corporate Meeting"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-950/80 to-transparent p-8">
                <p className="text-white text-xl font-semibold italic">"Empowering global connectivity through trusted trade and travel solutions."</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Our Legacy</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 font-poppins text-slate-900">
              Pioneering Excellence in <span className="text-emerald-700">International Commerce</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Emaan Group of Companies is a diversified conglomerate dedicated to bridging the gap between Pakistan and the global market. With deep roots in international trading and a robust presence in travel and logistics, we provide end-to-end solutions that drive business growth and personal success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0 bg-white shadow-md rounded-lg p-2 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
