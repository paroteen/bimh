import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/' ? 'bg-stone-900/95 backdrop-blur-sm shadow-md py-2 border-b border-stone-800' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => setIsOpen(false)}
          >
            <div className={`p-2 rounded-lg mr-2 transition-colors ${scrolled || location.pathname !== '/' ? 'bg-brand-500 text-white' : 'bg-brand-500 text-white'}`}>
                <Hexagon size={28} fill="currentColor" className="text-stone-900" />
            </div>
            <span className={`font-bold text-2xl tracking-tighter ${scrolled || location.pathname !== '/' ? 'text-white' : 'text-white'}`}>
              BIMH <span className="text-brand-500">LTD</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  isActive(item.path)
                    ? 'text-brand-500' 
                    : (scrolled || location.pathname !== '/' ? 'text-stone-300' : 'text-stone-100')
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
                to="/contact"
                className="ml-4 bg-brand-500 hover:bg-brand-600 text-stone-900 px-5 py-2.5 rounded-md font-bold text-sm transition-all transform hover:scale-105"
            >
                Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled || location.pathname !== '/' ? 'text-white' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-stone-900 absolute top-full left-0 w-full shadow-xl border-t border-stone-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path) ? 'text-brand-500 bg-stone-800' : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};