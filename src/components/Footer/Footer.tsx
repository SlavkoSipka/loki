import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Facebook, Instagram, Clock, Building2, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, WORKING_HOURS } from '../../constants/config';

export const Footer = () => {
  const navigate = useNavigate();

  const NAVIGATION_LINKS = [
    { label: 'Početna', path: '/' },
    { label: 'O nama', path: '/o-nama' },
    { label: 'Kontakt', path: '/kontakt' }
  ];

  const PRODUCT_LINKS = [
    { label: 'Betonski blokovi', path: '/proizvodi/betonski-blokovi' },
    { label: 'Betonske cevi', path: '/proizvodi/betonske-cevi' },
    { label: 'Šahtovi i poklopci', path: '/proizvodi/sahtovi-i-poklopci' }
  ];

  return (
    <footer className="relative bg-[#111827] text-gray-300">
      {/* Main Footer */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company Info */}
            <div>
              <img 
                src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741944450/LOKI_N-4_my9hoe.png" 
                alt="LOKI N-4"
                className="h-14 w-auto mb-4 opacity-90 hover:opacity-100 transition-all duration-300"
              />
              <p className="text-sm leading-relaxed mb-6 text-gray-400">
                Više od 20 godina iskustva u proizvodnji građevinskog materijala. 
                Kvalitet i pouzdanost su naš zaštitni znak.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600/20 transition-colors duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600/20 transition-colors duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Brzi linkovi</h3>
              <div className="grid grid-cols-1 gap-3">
                {NAVIGATION_LINKS.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </button>
                ))}
              </div>
              <h3 className="text-base font-semibold text-white mt-6 mb-4">Proizvodi</h3>
              <div className="grid grid-cols-1 gap-3">
                {PRODUCT_LINKS.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Radno vreme</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Ponedeljak - Petak</p>
                    <p className="text-gray-400">{WORKING_HOURS.weekdays}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Subota</p>
                    <p className="text-gray-400">{WORKING_HOURS.saturday}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Nedelja</p>
                    <p className="text-gray-400">{WORKING_HOURS.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">LOKI N-4</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                  <p className="text-sm text-gray-400">{CONTACT_INFO.address}</p>
                </div>
                <div className="space-y-2">
                  {CONTACT_INFO.phones.map((phone) => (
                    <div key={phone.number} className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">{phone.number}</p>
                        <p className="text-sm text-gray-500">{phone.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                  <p className="text-sm text-gray-400">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-[#0d1420]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} LOKI N-4. Sva prava zadržana.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-sm text-gray-500">
                Website by:{' '}
                <a 
                  href="https://aisajt.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  AiSajt
                </a>
              </p>
              <span className="hidden sm:inline text-gray-600">|</span>
              <Link 
                to="/izrada-sajta"
                className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
              >
                O projektu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};