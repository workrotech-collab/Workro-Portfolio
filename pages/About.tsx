
import React from 'react';
import { Target, Eye, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">We Are Workro</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your partner in digital excellence and AI-driven growth. We bridge the gap between complex technology and real-world business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
             <img src="https://picsum.photos/800/600?grayscale" alt="Team Work" className="rounded-3xl shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <span className="text-4xl font-bold text-[#00A3FF]">Global</span>
                <p className="text-slate-500 font-medium">Remote Support</p>
             </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <p className="text-slate-600 leading-relaxed">
              Workro started as a team of passionate developers and AI experts who saw that businesses were struggling to keep up with the pace of digital transformation. We decided to create an agency that focuses on more than just code; we focus on solutions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, we serve clients globally, delivering high-impact websites, intelligent automation, and data systems that allow entrepreneurs to focus on what they do best while we handle the tech.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
               <div>
                  <p className="text-3xl font-bold text-slate-900">100%</p>
                  <p className="text-sm text-slate-500">Client Satisfaction</p>
               </div>
               <div>
                  <p className="text-3xl font-bold text-slate-900">24/7</p>
                  <p className="text-sm text-slate-500">Global Support</p>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Target className="text-sky-400" />, title: "Mission", desc: "To empower businesses with intelligent technology that simplifies complexity." },
            { icon: <Eye className="text-sky-400" />, title: "Vision", desc: "To become the global leader in AI-driven digital transformation for startups and SMEs." },
            { icon: <Users className="text-sky-400" />, title: "Trust", desc: "We build long-term partnerships through transparency and consistent results." },
            { icon: <Zap className="text-sky-400" />, title: "Speed", desc: "Rapid development cycles without ever sacrificing the quality of the final product." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
