
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
