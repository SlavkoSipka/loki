import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { PRODUCTS } from '../../constants/config';

export const Products = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const navigate = useNavigate();

  return (
    <section id="proizvodi" ref={elementRef} className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwNjZDQyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Naši Proizvodi
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Proizvodimo širok asortiman betonskih elemenata visokog kvaliteta, prilagođenih vašim potrebama
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {PRODUCTS.map((product, index) => (
            <Link
              key={product.title}
              to={
                product.title === 'Betonski Blokovi' ? '/proizvodi/betonski-blokovi' :
                product.title === 'Betonske Cevi' ? '/proizvodi/betonske-cevi' :
                product.title === 'Šahtovi i poklopci' ? '/proizvodi/sahtovi-i-poklopci' :
                '/'
              }
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className={`w-full h-[300px] sm:h-[400px] object-cover transform transition-all duration-700 ${
                  isVisible ? 'scale-100 opacity-100 filter-none' : 'scale-95 opacity-0 blur-lg'
                } group-hover:scale-110`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{product.title}</h3>
                  <p className="text-gray-200 mb-4">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-300 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#0066CC] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Euro Grill Partnership Section */}
        <div className={`mt-24 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Euro Grill Proizvodi
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
              U saradnji sa kompanijom Euro Grill, ponosno predstavljamo njihov kompletan asortiman proizvoda.
              Kao ekskluzivni uvoznik, nudimo vrhunski kvalitet i profesionalnu podršku.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Profesionalna Oprema za Ugostiteljstvo
                </h3>
                <p className="text-gray-300 mb-6">
                  Euro Grill je vodeći proizvođač profesionalne opreme za ugostiteljstvo. Njihov asortiman uključuje:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Profesionalni roštilji i skare
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Pekarska i poslastičarska oprema
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Žardinjere
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Stolovi, klupe
                  </li>
                </ul>
                <a 
                  onClick={() => navigate('/proizvodi/euro-grill')}
                  className="inline-flex items-center mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl
                    hover:bg-blue-700 transition-all duration-300 group"
                >
                  Pogledajte sve proizvode
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741988959/por8_zce3wa.jpg"
                  alt="Euro Grill proizvodi"
                  className="rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl">
                  <p className="font-semibold">Ekskluzivni uvoznik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};