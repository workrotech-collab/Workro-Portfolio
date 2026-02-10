
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Globe, Laptop } from 'lucide-react';
import { SERVICES, WHATSAPP_LINK } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-50 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-[#00A3FF] uppercase bg-sky-50 rounded-full">
            Digital Solutions Agency
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
            Transform Your Business <br /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-sky-400">Smart Digital Solutions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            We help businesses scale with AI-driven innovation, modern web solutions, and data-powered strategies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group w-full sm:w-auto px-8 py-4 bg-[#00A3FF] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-sky-500 transition-all shadow-lg shadow-sky-100">
              Get a Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold flex items-center justify-center hover:bg-slate-50 transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00A3FF] font-semibold text-sm tracking-widest uppercase">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">Everything You Need to Grow</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From web development to AI automation, we provide comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 ${service.color} transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center text-sm font-bold text-slate-900 border-b-2 border-slate-200 pb-1 hover:border-[#00A3FF] transition-all group">
              Explore All Services <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Workro Section - Updated Full-Width Balanced Grid */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00A3FF] font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6">Why Businesses Choose Workro</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We combine innovation, expertise, and dedication to deliver high-quality solutions that help businesses grow faster and operate smarter. Our client-focused approach ensures long-term success and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Affordable Pricing", 
                desc: "Competitive pricing that delivers maximum value without compromising quality.",
                symbol: "✔️",
                icon: <CheckCircle2 className="w-8 h-8" />,
                colorClass: "text-emerald-500",
                bgClass: "bg-emerald-50"
              },
              { 
                title: "Fast Delivery", 
                desc: "Quick turnaround time to help businesses launch and grow faster.",
                symbol: "⚡",
                icon: <Zap className="w-8 h-8" />,
                colorClass: "text-amber-500",
                bgClass: "bg-amber-50"
              },
              { 
                title: "Global Support", 
                desc: "Reliable 24/7 support for clients across different time zones.",
                symbol: "🌍",
                icon: <Globe className="w-8 h-8" />,
                colorClass: "text-blue-500",
                bgClass: "bg-blue-50"
              },
              { 
                title: "Modern Technology", 
                desc: "Advanced tools and technologies to build future-ready solutions.",
                symbol: "💻",
                icon: <Laptop className="w-8 h-8" />,
                colorClass: "text-indigo-500",
                bgClass: "bg-indigo-50"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-16 h-16 ${item.bgClass} rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 ${item.colorClass} transition-all duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-2">
                  <span className="text-lg opacity-70">{item.symbol}</span>
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Let's discuss how we can help transform your business with our digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#00A3FF] text-white rounded-xl font-bold hover:bg-sky-500 transition-all">
              Contact Us
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-all flex items-center gap-2">
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
