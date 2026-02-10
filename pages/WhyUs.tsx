
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Rocket, Globe, Layers, Lightbulb, HeartHandshake } from 'lucide-react';

const WhyUs: React.FC = () => {
  const reasons = [
    {
      title: "Affordable Pricing",
      icon: <DollarSign className="w-8 h-8" />,
      desc: "We offer premium agency-quality work at freelancer-friendly price points, ensuring ROI for businesses of all sizes.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Fast Delivery",
      icon: <Rocket className="w-8 h-8" />,
      desc: "Time is money. Our agile workflow ensures that your projects are delivered on time, every time, without delays.",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      title: "Global Support",
      icon: <Globe className="w-8 h-8" />,
      desc: "Our team operates globally. We provide 24/7 support and are available for meetings that fit your local time zone.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Modern Technology",
      icon: <Layers className="w-8 h-8" />,
      desc: "We stay ahead of the curve. Using the latest in React, Next.js, and AI models ensures your site is future-proof.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Custom Solutions",
      icon: <Lightbulb className="w-8 h-8" />,
      desc: "No templates. We build bespoke solutions tailored specifically to your business problems and user needs.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      title: "Long-term Partnerships",
      icon: <HeartHandshake className="w-8 h-8" />,
      desc: "We aren't just a service provider; we are your digital partners. We grow when you grow.",
      color: "text-rose-500",
      bgColor: "bg-rose-50"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Why Partner with Us?</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choosing the right agency is a critical decision. Here is why businesses around the world trust Workro with their digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-sky-50 rounded-3xl text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Quality Guaranteed</h2>
           <p className="text-slate-600 max-w-xl mx-auto mb-8">
             We pride ourselves on excellence. Every project undergoes rigorous testing and quality assurance before it ever reaches the client.
           </p>
           <Link to="/contact" className="inline-block px-8 py-3 bg-[#00A3FF] text-white rounded-xl font-bold hover:bg-sky-500 transition-all">
             Start Your Journey
           </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
