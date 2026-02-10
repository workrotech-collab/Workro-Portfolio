
import React from 'react';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import { EMAIL_CONTACT, WHATSAPP_LINK, PHONE_CONTACT } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Let's Build <br className="hidden sm:block" /> Something Great Together
          </h1>
          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to take your business to the next level? Get in touch with us through any of the channels below for a free consultation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-[#00A3FF] mx-auto mb-6 group-hover:bg-[#00A3FF] group-hover:text-white transition-colors">
                <Mail size={28} />
              </div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Email Us</h4>
              <a 
                href={`mailto:${EMAIL_CONTACT}`} 
                className="text-sm font-bold text-slate-900 hover:text-[#00A3FF] transition-colors break-words block"
              >
                {EMAIL_CONTACT}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mx-auto mb-6 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageCircle size={28} />
              </div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">WhatsApp</h4>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-bold text-slate-900 hover:text-[#25D366] transition-colors block"
              >
                {PHONE_CONTACT}
              </a>
            </div>

            {/* Call Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Call Us</h4>
              <a 
                href={`tel:${PHONE_CONTACT.replace(/\s+/g, '')}`} 
                className="text-sm font-bold text-slate-900 hover:text-emerald-500 transition-colors block"
              >
                {PHONE_CONTACT}
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 mx-auto mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Location</h4>
              <p className="text-sm font-bold text-slate-900">
                Global Remote Services
              </p>
            </div>
          </div>
          
          <div className="mt-20">
            <p className="text-slate-400 text-sm italic">
              Available 24/7 for urgent consultations and ongoing project support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
