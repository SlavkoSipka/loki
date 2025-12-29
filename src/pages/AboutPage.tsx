import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Award, Users, Target, History, Gem, Shield, Phone } from 'lucide-react';
import { CONTACT_INFO, WORKING_HOURS } from '../constants/config';
import { Footer } from '../components/Footer/Footer';

export const AboutPage = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dij7ynio3/image/upload/v1741875553/o_nama_ovaj_korv1h.jpg"
            alt="Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 mt-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-[#0066CC]">Naša Priča</h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Više od dve decenije gradimo poverenje kroz kvalitet i inovacije
          </p>
        </div>
      </section>

      {/* History & Values Section */}
      <section ref={elementRef} className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 relative z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwNjZDQyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="relative">
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-600/10 rounded-full" />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 sm:w-32 h-20 sm:h-32 bg-blue-600/10 rounded-full" />
                <img
                  src="https://res.cloudinary.com/dij7ynio3/image/upload/v1741875718/o_nama_mala_slika_kttpyi.jpg"
                  alt="Our History"
                  className="relative z-10 rounded-2xl shadow-xl w-full h-[250px] sm:h-auto object-cover"
                />
              </div>
            </div>
            
            <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <History className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Naša Istorija</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Od 2015. godine, LOKI N-4 postavlja standarde u proizvodnji građevinskog materijala.
                  Počeli smo kao mala porodična firma u Vrnjcima, a danas smo jedan od vodećih proizvođača
                  betonskih blokova i cevi u regionu. Naš put je obeležen konstantnim ulaganjem u
                  najsavremeniju tehnologiju i stručno usavršavanje našeg tima.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Award, title: 'Kvalitet', text: 'Sertifikovani proizvodi najvišeg kvaliteta' },
                  { icon: Users, title: 'Tim', text: 'Stručni i posvećeni profesionalci' },
                  { icon: Target, title: 'Cilj', text: 'Kontinuirani razvoj i inovacije' },
                  { icon: Shield, title: 'Garancija', text: 'Pouzdanost u svakom projektu' }
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600 mb-2 sm:mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 bg-[#1a365d] relative">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dij7ynio3/image/upload/v1741876320/sekcija_pozadina_dsdes1.jpg" 
            alt="Mission background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-900/85 to-black/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 backdrop-blur-sm bg-black/30 p-4 sm:p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
              Misija i Vizija
            </h2>
            <p className="text-white text-sm sm:text-lg font-medium">
              Posvećeni smo stvaranju vrednosti za naše klijente kroz inovativna rešenja i održivi razvoj
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 sm:p-8 border border-white/10 hover:bg-black/60 transition-all duration-300">
              <div className="flex items-start mb-3 sm:mb-6">
                <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg">
                  <Gem className="w-5 sm:w-8 h-5 sm:h-8 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">
                    Naša Misija
                  </h3>
                  <p className="text-white leading-relaxed font-medium text-xs sm:text-base">
                    Proizvodnja visokokvalitetnih građevinskih materijala uz primenu najsavremenije tehnologije. 
                    Pružamo kompletnu podršku i profesionalne savete našim klijentima.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 sm:p-8 border border-white/10 hover:bg-black/60 transition-all duration-300">
              <div className="flex items-start mb-3 sm:mb-6">
                <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg">
                  <Target className="w-5 sm:w-8 h-5 sm:h-8 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">
                    Naša Vizija
                  </h3>
                  <p className="text-white leading-relaxed font-medium text-xs sm:text-base">
                    Postati regionalni lider u proizvodnji građevinskog materijala. Fokusirani smo na 
                    inovativnost, kvalitet i održivo poslovanje kroz kontinuirano unapređenje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Location Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Lokacija</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Posetite nas na našoj lokaciji u industrijskoj zoni. Naš stručni tim vas očekuje.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 space-y-4 sm:space-y-6 border border-white/10">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white">LOKI N-4</h3>
                <p className="text-gray-300">{CONTACT_INFO.address}</p>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-medium">Radno vreme:</span>
                  </p>
                  <p className="text-gray-300">Pon - Pet: {WORKING_HOURS.weekdays}</p>
                  <p className="text-gray-300">Subota: {WORKING_HOURS.saturday}</p>
                  <p className="text-gray-300">Nedelja: {WORKING_HOURS.sunday}</p>
                </div>
                <div className="pt-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-3 border border-white/20 rounded-lg text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Pozovite nas
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.522250618742!2d20.925208!3d43.638599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757625aba56f975%3A0x6a7b10fd6e0e5e89!2sHajduk%20Veljkova%2054%2C%20Vrnjci!5e0!3m2!1sen!2srs!4v1710444444444!5m2!1sen!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija LOKI N-4"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};