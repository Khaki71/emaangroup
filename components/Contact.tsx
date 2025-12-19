
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { ContactFormData } from '../types.ts';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'trading',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', service: 'trading', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8 font-poppins">
              Start Your <span className="text-emerald-400">Global Strategy</span> Today
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              Whether you're looking to import goods, expand your logistics network, or plan your next international move, our team is ready to assist.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-amber-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-slate-400">emaangroupofcompanies@proton.me</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-emerald-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call/WhatsApp Us</h4>
                  <p className="text-slate-400">+86 187 5757 1294 (China)</p>
                  <p className="text-slate-400">+92 300 592 1560 (Pakistan)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-slate-400">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a 
                    href="https://wa.me/8618757571294" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-emerald-500/20"
                >
                    <MessageCircle className="w-5 h-5" /> WhatsApp (China)
                </a>
                <a 
                    href="https://wa.me/923005921560" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-emerald-500/20"
                >
                    <MessageCircle className="w-5 h-5" /> WhatsApp (Pakistan)
                </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Select Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all appearance-none bg-no-repeat bg-[right_1rem_center]"
                  >
                    <option value="trading">Emaan Trading</option>
                    <option value="travel">Emaan Travel & Tourism</option>
                    <option value="logistics">Emaan Logistics</option>
                    <option value="sourcing">Emaan Sourcing & Warehousing</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>

              {isSuccess && (
                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl text-center font-medium animate-fade-in">
                  Thank you! Your inquiry has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
