
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Our Expertise</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We provide a wide range of digital and AI-powered services to help modern businesses stay ahead in a rapidly changing landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-8 ${service.color} transition-all duration-300`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="mt-auto">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Core Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-700">
                      <div className={`w-1.5 h-1.5 ${service.color.replace('text', 'bg')} rounded-full mr-2.5`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
