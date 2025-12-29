import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_IMAGES } from '../../constants/config';

const scrollToProducts = () => {
  const productsSection = document.querySelector('#proizvodi');
  productsSection?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 w-full h-full">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Građevinski projekat ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 pointer-events-none ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-4xl w-full pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-[1.2] tracking-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] [text-wrap:balance]">
            Gradimo temelje<br />
            <span className="text-[#0066CC]">vaše budućnosti</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 font-light tracking-wider max-w-2xl opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards] leading-relaxed">
            Više od 20 godina iskustva u proizvodnji<br className="hidden sm:block" />
            vrhunskog građevinskog materijala
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.4s_forwards]">
            <button
              onClick={scrollToProducts}
              className="group relative overflow-hidden bg-[#0066CC] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl
              font-bold text-base uppercase tracking-widest transition-all duration-500
              hover:shadow-[0_8px_30px_rgb(0,102,204,0.3)] flex items-center gap-3 justify-center">
              Naši proizvodi
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
            </button>
            <button
              onClick={() => navigate('/kontakt')}
              className="group relative overflow-hidden bg-white/10 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl
              font-bold text-base uppercase tracking-widest transition-all duration-500 border border-white/20
              hover:bg-white/20 flex items-center gap-3 justify-center backdrop-blur-sm">
              Kontaktirajte nas
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
};