
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, EMAIL_CONTACT, WHATSAPP_LINK, PHONE_CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://iili.io/fydTqNe.png" 
                alt="Workro Logo" 
                className="h-9 w-auto object-contain"
              />
              <span className="text-2xl font-bold tracking-tight text-white">Workro</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Transform your business with smart digital solutions & AI-driven innovation. We help companies scale worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-[#00A3FF] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-[#00A3FF] transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-[#00A3FF] transition-colors">AI Automation</Link></li>
              <li><Link to="/services" className="hover:text-[#00A3FF] transition-colors">Data Analytics</Link></li>
              <li><Link to="/services" className="hover:text-[#00A3FF] transition-colors">Mobile Apps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#00A3FF] shrink-0" />
                <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-[#00A3FF] transition-colors">{EMAIL_CONTACT}</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#00A3FF] shrink-0" />
                <a href={`tel:${PHONE_CONTACT.replace(/\s+/g, '')}`} className="hover:text-[#00A3FF] transition-colors">{PHONE_CONTACT}</a>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircle size={18} className="text-[#00A3FF] shrink-0" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#00A3FF]">WhatsApp Chat</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#00A3FF] shrink-0" />
                <span>Global Remote Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Workro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
