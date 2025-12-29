import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const AboutUs = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section ref={elementRef} className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwNjZDQyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <img
              src="https://res.cloudinary.com/dij7ynio3/image/upload/v1741874145/gradimo_buducnost_y7gcuq.jpg"
              alt="Modern construction"
              className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-auto object-cover"
            />
            <div className={`absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-sm
              transform transition-all duration-500 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
              <h3 className="text-2xl sm:text-3xl font-bold">20+</h3>
              <p className="text-sm opacity-90">Godina iskustva</p>
            </div>
          </div>
          <div className={`transform transition-all duration-700 delay-100 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <h2 className={`text-3xl sm:text-4xl font-bold text-[#333333] mb-4 sm:mb-6 transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Gradimo budućnost zajedno
            </h2>
            <p className={`text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed transform transition-all duration-500 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Sa više od dve decenije iskustva u proizvodnji građevinskog materijala,
              LOKI N-4 je postao sinonim za kvalitet i pouzdanost. Naša posvećenost
              inovacijama i održivom razvoju čini nas idealnim partnerom za vaše
              građevinske projekte.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                { title: 'Kvalitet', desc: 'Najviši standardi u industriji' },
                { title: 'Inovacije', desc: 'Moderna proizvodna tehnologija' },
                { title: 'Podrška', desc: 'Stručno savetovanje' },
                { title: 'Dostava', desc: 'Brza i pouzdana isporuka' }
              ].map(({ title, desc }, index) => (
                <div
                  key={title}
                  className={`transform transition-all duration-700 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-16 opacity-0'
                  }`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-[#0066CC] mb-2">{title}</h4>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};