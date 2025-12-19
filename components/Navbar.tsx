
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-blur py-2 shadow-lg border-b border-slate-700/30' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-white font-poppins">
                EMAAN<span className="text-amber-500 underline decoration-amber-500/50 underline-offset-4">GROUP</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-300 font-semibold mt-[-4px]">Of Companies</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-200 hover:text-amber-400 transition-colors font-medium text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all hover:shadow-lg active:scale-95"
            >
              Consult Now <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2 px-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-amber-500 text-slate-950 py-3 rounded-xl font-bold"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
