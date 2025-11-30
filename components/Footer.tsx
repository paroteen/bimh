import React from 'react';
import { Hexagon, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 text-white">
               <div className="p-1 rounded bg-brand-500 mr-2">
                 <Hexagon size={20} className="text-stone-900" fill="currentColor"/>
               </div>
              <span className="font-bold text-xl">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm mb-6">
              Providing solid foundations for the future with sustainably sourced stone and aggregate materials.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="text-stone-400 hover:text-brand-500 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="hover:text-brand-500 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>{CONTACT_ADDRESS}</li>
              <li>{CONTACT_PHONE}</li>
              <li>{CONTACT_EMAIL}</li>
              <li className="pt-2 text-xs text-stone-500">Mon - Fri: 7:00 AM - 5:00 PM</li>
              <li className="text-xs text-stone-500">Sat: 8:00 AM - 1:00 PM</li>
            </ul>
          </div>

          {/* Certifications / Compliance */}
          <div>
             <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Compliance</h3>
             <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-stone-800 rounded text-xs border border-stone-700">ISO 9001</span>
                <span className="px-3 py-1 bg-stone-800 rounded text-xs border border-stone-700">ISO 14001</span>
                <span className="px-3 py-1 bg-stone-800 rounded text-xs border border-stone-700">SafeContractor</span>
             </div>
             <p className="mt-4 text-xs">
               Fully licensed and compliant with National Environmental Management Authority regulations.
             </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};