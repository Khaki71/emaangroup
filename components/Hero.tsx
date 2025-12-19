
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDER_DATA } from '../constants.tsx';

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDER_DATA.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === SLIDER_DATA.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? SLIDER_DATA.length - 1 : prev - 1));

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-950">
      {SLIDER_DATA.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent z-10" />
          
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.headline}
            className="h-full w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`max-w-2xl transform transition-all duration-1000 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg font-poppins">
                {slide.headline.split(' ').map((word, i) => (
                  <span key={i} className={i % 3 === 2 ? 'text-amber-500' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-xl">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#companies"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg text-center transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                >
                  {slide.ctaText}
                </a>
                <a
                  href="#contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg text-center transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-amber-500 hover:text-slate-950 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-amber-500 hover:text-slate-950 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {SLIDER_DATA.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? 'w-8 bg-amber-500' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
