
import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Fallback loader
const Loader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-slate-950">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
      <p className="text-white mt-4 font-medium tracking-widest text-xs uppercase">Emaan Group</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Hero />
        <About />
        <Companies />
        <section id="services" className="bg-white py-24 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-4 font-poppins">Global Coverage</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 grayscale opacity-50">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl">🇵🇰</span>
                        <span className="text-xs font-bold">PAKISTAN</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl">🇨🇳</span>
                        <span className="text-xs font-bold">CHINA</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl">🇦🇪</span>
                        <span className="text-xs font-bold">UAE</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl">🇸🇦</span>
                        <span className="text-xs font-bold">SAUDI ARABIA</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl">🇲🇾</span>
                        <span className="text-xs font-bold">MALAYSIA</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl">🇸🇬</span>
                        <span className="text-xs font-bold">SINGAPORE</span>
                    </div>
                </div>
            </div>
        </section>
        <Contact />
        <Footer />
      </Suspense>
      
      {/* Sticky Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <a 
          href="https://wa.me/923005921560"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce hover:scale-110 active:scale-95 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.39l-.721 2.633 2.693-.706c.805.515 1.761.815 2.7.815 3.181 0 5.767-2.586 5.767-5.767s-2.586-5.767-5.767-5.767zm3.387 8.263c-.141.402-.821.731-1.127.76-.279.026-.641.047-1.026-.067-.233-.067-.534-.155-1.139-.413-2.571-1.082-4.242-3.69-4.372-3.863-.129-.173-.949-1.265-.949-2.41 0-1.144.593-1.706.804-1.936.21-.23.461-.287.615-.287h.438c.141 0 .331.003.513.44.184.44.629 1.529.684 1.643.056.114.093.247.018.397-.074.15-.113.247-.225.375-.113.129-.236.287-.337.385-.113.114-.232.239-.099.467.133.228.589.967 1.265 1.571.87 1.265 1.597 1.66 1.823 1.774.228.114.363.097.498-.056.136-.153.585-.684.743-.918.156-.234.316-.197.53-.12s1.36.641 1.594.757c.234.116.39.174.446.269.057.096.057.55-.084.952z" />
          </svg>
        </a>
      </div>
    </main>
  );
};

export default App;
