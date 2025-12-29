import React from 'react';
import { Ruler, Factory, Truck } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SERVICES } from '../../constants/config';

const Forklift = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 12H5a2 2 0 0 0-2 2v5" />
    <path d="M9 12V7h4" />
    <path d="M9 7H2" />
    <path d="M13 7h9v13h-3" />
    <circle cx="7" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
  </svg>
);

const iconMap = {
  Ruler,
  Factory,
  Truck,
  Forklift
};

export const Services = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={elementRef} id="usluge" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741946978/poadina_usluge_kwrszf.jpg"
          alt="Services background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Naše Usluge
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Pružamo kompletan spektar usluga u oblasti betonske industrije
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.title}
                className={`group bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10
                  shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-black/50
                  transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                  hover:-translate-y-2 relative overflow-hidden`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};