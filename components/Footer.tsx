
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white font-poppins">
                EMAAN<span className="text-amber-500">GROUP</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-[-4px]">Of Companies</span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Empowering international trade and personal growth through a synergy of specialized global services. Headquartered in Pakistan, connected worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Our Companies</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#companies" className="hover:text-amber-500 transition-colors">Emaan Trading Company</a></li>
              <li><a href="#companies" className="hover:text-amber-500 transition-colors">Emaan Travel & Tourism</a></li>
              <li><a href="#companies" className="hover:text-amber-500 transition-colors">Emaan Logistics</a></li>
              <li><a href="#companies" className="hover:text-amber-500 transition-colors">Emaan Products Sourcing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Get a Quote</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Subscribe</h4>
            <p className="text-sm mb-4">Stay updated with global trade news.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 w-full text-white text-sm focus:outline-none focus:border-amber-500"
              />
              <button className="bg-amber-500 text-slate-950 px-4 py-2 rounded-lg font-bold text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Emaan Group of Companies. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            Back to Top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
