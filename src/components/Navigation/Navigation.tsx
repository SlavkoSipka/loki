import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, PhoneCall } from 'lucide-react';
import { NAVIGATION_ITEMS, CONTACT_INFO } from '../../constants/config';

const PRODUCT_SUBMENU = [
  { title: 'Betonski blokovi', path: '/proizvodi/betonski-blokovi' },
  { title: 'Betonske cevi', path: '/proizvodi/betonske-cevi' },
  { title: 'Sahtovi i poklopci', path: '/proizvodi/sahtovi-i-poklopci' },
  { title: 'Euro Grill asortiman', path: '/proizvodi/euro-grill' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobilePhonesOpen, setIsMobilePhonesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and DOM update
      setTimeout(() => {
        const servicesSection = document.getElementById('usluge');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      const servicesSection = document.getElementById('usluge');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const PHONE_NUMBERS = [
    { number: '036611919', label: 'Fiksni 1' },
    { number: '036611172', label: 'Fiksni 2' },
    { number: '0606119193', label: 'Mobilni 1' },
    { number: '0606119194', label: 'Mobilni 2' },
    { number: '0659111113', label: 'Mobilni 3' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 border-b ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    } ${isScrolled ? 'border-white/10' : 'border-transparent'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          <div className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741944450/LOKI_N-4_my9hoe.png" 
              alt="LOKI N-4"
              className={`w-auto transform transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'h-12' : 'h-16'
              }`}
            />
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium relative px-4 py-2 transition-all duration-300 rounded-full
                  ${isActivePath('/') 
                    ? 'text-blue-400 bg-blue-400/10' 
                    : 'text-white hover:text-blue-400'}`}
              >
                Početna
              </Link>
              
              <div className="relative group">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={`font-medium px-4 py-2 transition-all duration-300 rounded-full flex items-center
                    ${isActivePath('/proizvodi') ? 'text-blue-400 bg-blue-400/10' : 'text-white hover:text-blue-400'}`}
                >
                  Proizvodi
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-black/80 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 border border-white/10
                    ${isProductsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                >
                  {PRODUCT_SUBMENU.map((item) => (
                    <a
                      key={item.title}
                      href={item.path}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="block px-4 py-2 text-white hover:bg-blue-600/20 transition-colors duration-300"
                      onClick={(e) => {
                        if (!item.isExternal) {
                          e.preventDefault();
                          navigate(item.path);
                          setIsProductsOpen(false);
                        }
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
              <div className="fixed inset-0 -z-10" onClick={() => setIsProductsOpen(false)} style={{ display: isProductsOpen ? 'block' : 'none' }} />
              
              {['O nama', 'Galerija', 'Usluge', 'Kontakt'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'O nama' ? '/o-nama' : 
                      item === 'Kontakt' ? '/kontakt' : 
                      item === 'Galerija' ? '/galerija' :
                     item === 'Usluge' ? '/' :
                     '/'}
                  onClick={(e) => {
                    if (item === 'Usluge') {
                      handleServicesClick(e);
                    }
                  }}
                  className={`font-medium relative px-4 py-2 transition-all duration-300 rounded-full
                    ${isActivePath(item === 'O nama' ? '/o-nama' : item === 'Kontakt' ? '/kontakt' : '')
                      ? 'text-blue-400 bg-blue-400/10' 
                      : 'text-white hover:text-blue-400'}`}
                >
                  {item}
                </Link>
              ))}
              
              <div
                className="relative ml-4"
              >
                <button
                  onClick={() => setIsPhoneMenuOpen(!isPhoneMenuOpen)}
                  className="flex items-center px-4 py-2 text-white bg-blue-600/20 rounded-full border border-blue-400/20 hover:bg-blue-600/30 transition-all duration-300 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  <span className="font-medium">Pozovite nas</span>
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${isPhoneMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Phone numbers dropdown */}
                <div className={`absolute top-full right-0 mt-2 w-48 bg-black/80 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 border border-white/10
                  ${isPhoneMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                  {PHONE_NUMBERS.map((phone, index) => (
                    <button
                      key={phone.number}
                      onClick={() => window.location.href = `tel:${phone.number}`}
                      className="flex items-center w-full px-4 py-3 text-white hover:bg-blue-600/20 transition-colors duration-300 border-b border-white/5 last:border-0"
                    >
                      <Phone className="w-4 h-4 mr-3 text-blue-400" />
                      <div>
                        <span className="block text-sm font-medium">{phone.number}</span>
                        <span className="block text-xs text-gray-400">{phone.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300
                before:absolute before:inset-0 before:rounded-full before:border before:border-white/10 before:scale-0 hover:before:scale-100
                before:transition-transform before:duration-300 before:ease-out"
            >
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`absolute inset-x-0 top-0 h-full bg-gradient-to-b transition-opacity duration-300 -z-10 pointer-events-none ${
        isScrolled ? 'opacity-0' : 'from-black/90 via-black/50 to-transparent opacity-100'
      }`} />
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 z-30 ${
            isOpen ? 'animate-[fadeInBg_0.3s_ease-out_forwards]' : 'animate-[fadeOutBg_0.3s_ease-out_forwards]'
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div 
          className={`fixed right-0 top-0 w-64 h-screen px-2 pt-20 pb-6 space-y-2 backdrop-blur-md z-40
            bg-black/80 border-l border-white/10 transition-all duration-300 transform
            ${isOpen ? 'animate-[slideInRight_0.3s_ease-out_forwards]' : 'animate-[slideOutRight_0.3s_ease-out_forwards]'}`}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full
              bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <X size={20} className="text-white" />
          </button>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300
              ${isActivePath('/')
                ? 'text-blue-400 bg-blue-400/10 border-blue-400/20'
                : 'text-white/80 hover:text-blue-400 border border-white/10'}`}
          >
            Početna
          </Link>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300
                ${location.pathname.includes('/proizvodi')
                  ? 'text-blue-400 bg-blue-400/10 border-blue-400/20'
                  : 'text-white/80 hover:text-blue-400 border border-white/10'}`}
            >
              <span>Proizvodi</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${isMobileProductsOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
              {PRODUCT_SUBMENU.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!item.isExternal) {
                      e.preventDefault();
                      navigate(item.path);
                      setIsOpen(false);
                    }
                  }}
                  className="block px-4 py-2 ml-4 mt-1 text-white/80 hover:text-blue-400 transition-colors duration-300 rounded-lg
                    border border-white/5 bg-white/5 backdrop-blur-sm"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {['O nama', 'Galerija', 'Usluge', 'Kontakt'].map((item) => (
            <Link
              key={item}
              to={item === 'O nama' ? '/o-nama' : 
                  item === 'Kontakt' ? '/kontakt' : 
                  item === 'Galerija' ? '/galerija' :
                  '/'}
              onClick={(e) => {
                if (item === 'Usluge') {
                  handleServicesClick(e);
                }
                setIsOpen(false);
              }}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300
                ${isActivePath(item === 'O nama' ? '/o-nama' : item === 'Kontakt' ? '/kontakt' : '')
                  ? 'text-blue-400 bg-blue-400/10 border-blue-400/20'
                  : 'text-white/80 hover:text-blue-400 border border-white/10'}`}
            >
              {item}
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-white/10">
            <button
              onClick={() => setIsMobilePhonesOpen(!isMobilePhonesOpen)}
              className="flex items-center px-4 py-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-all duration-300 border border-white/10 mb-2"
            >
              <Phone className="w-5 h-5 mr-3" />
              <div>
                <span className="block font-medium">Pozovite nas</span>
                <span className="block text-sm text-gray-400">Više brojeva</span>
              </div>
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${isMobilePhonesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`space-y-2 px-4 overflow-hidden transition-all duration-300 ${isMobilePhonesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {PHONE_NUMBERS.map((phone) => (
                <button
                  key={phone.number}
                  onClick={() => window.location.href = `tel:${phone.number}`}
                  className="flex items-center w-full py-2 px-3 rounded-lg text-white/80 hover:text-white transition-colors duration-300
                    hover:bg-white/5 backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <div>
                    <span className="block text-sm">{phone.number}</span>
                    <span className="block text-xs text-gray-400">{phone.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};