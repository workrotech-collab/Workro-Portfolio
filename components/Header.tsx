
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img 
              src="https://iili.io/fydTqNe.png" 
              alt="Workro Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = "https://freeimage.host/i/fydTqNe";
              }}
            />
            <span className="text-2xl font-bold tracking-tight text-slate-900">Workro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#00A3FF] ${
                  location.pathname === link.path ? 'text-[#00A3FF]' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#00A3FF] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-sky-500 transition-all shadow-md shadow-sky-100"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 transition-all duration-300 ${isOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-4 text-base font-medium border-b border-slate-50 last:border-0 ${
                location.pathname === link.path ? 'text-[#00A3FF]' : 'text-slate-600'
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <Link
              to="/contact"
              className="block w-full text-center bg-[#00A3FF] text-white px-5 py-3 rounded-xl text-base font-semibold"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
