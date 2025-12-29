import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Code, Zap, Search, TrendingUp, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO/SEO';
import { Footer } from '../components/Footer/Footer';

export const CaseStudyPage = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <main>
      <SEO 
        title="Izrada sajta LOKI N-4 | Case Study | Web Dizajn i Razvoj"
        description="Pogledajte kako je kreiran moderni web sajt za LOKI N-4, proizvođača betonskih elemenata. Tehnički detalji, SEO optimizacija i rezultati projekta."
        keywords="izrada sajta, web dizajn, SEO optimizacija, web razvoj, case study"
        canonicalUrl="https://lokin4.com/izrada-sajta"
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dij7ynio3/image/upload/v1741875553/o_nama_ovaj_korv1h.jpg"
            alt="LOKI N-4 Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 mt-20">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Nazad na početnu
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-[#0066CC]">
            Izrada Web Sajta LOKI N-4
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Moderni pristup digitalnoj prezentaciji proizvođača betonskih elemenata
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={elementRef} className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 relative z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwNjZDQyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            
            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">O Projektu</h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                LOKI N-4 je vodeći proizvođač betonskih elemenata sa preko 20 godina iskustva u Vrnjačkoj Banji. 
                Firma je potrebovala moderan, performantan web sajt koji će efikasno prezentovati njihov asortiman 
                proizvoda i olakšati komunikaciju sa klijentima u regionu.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Cilj projekta bio je kreiranje profesionalnog digitalnog identiteta koji odražava kvalitet i 
                pouzdanost kompanije, uz fokus na brzinu učitavanja, optimizaciju za pretraživače i intuitivan 
                korisnički interfejs.
              </p>
            </div>

            {/* What Was Done */}
            <div className="space-y-6 pt-8 border-t border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Šta je Urađeno</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Code className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Web Dizajn i Razvoj</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Kreiran je responzivni dizajn koji se prilagođava svim uređajima. Implementirana je moderna 
                    React arhitektura sa TypeScript-om, što omogućava brzo učitavanje i glatko korisničko iskustvo.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Search className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">SEO Optimizacija</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Implementirana je kompleksna SEO strategija koja uključuje optimizaciju meta tagova, 
                    strukturisanih podataka, brzinu učitavanja i mobilnu optimizaciju. Sajt je optimizovan za 
                    lokalne pretrage u Vrnjačkoj Banji i okolnim gradovima.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Performanse</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Optimizovane su slike korišćenjem Cloudinary CDN-a, implementirano je lazy loading i 
                    optimizovani su JavaScript bundle-ovi. Rezultat je sajt koji se učitava za manje od 2 sekunde.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Korisničko Iskustvo</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Implementirana je intuitivna navigacija, brzi kontakt formular, galerija proizvoda sa 
                    detaljnim opisima i integracija sa Google Maps za jednostavno pronalaženje lokacije.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6 pt-8 border-t border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Rezultati i Benefiti</h2>
              
              <div className="space-y-4">
                {[
                  'Brzina učitavanja sajta poboljšana za preko 80% u odnosu na prethodnu verziju',
                  'Poboljšana vidljivost u Google pretrazi za ključne lokacijske termine',
                  'Povećan broj kontakt poruka i upita od potencijalnih klijenata',
                  'Profesionalna prezentacija proizvoda i usluga koja odražava kvalitet kompanije',
                  'Mobilna optimizacija koja omogućava pristup sajtu sa svih uređaja'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Section with Backlinks */}
            <div className="space-y-6 pt-8 border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tehnički Partner</h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Za realizaciju ovog projekta, LOKI N-4 je angažovao <a 
                  href="https://aisajt.com" 
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                  AiSajt
                </a> tim, koji je obezbedio kompletnu uslugu web dizajna i razvoja. 
                Stručnjaci iz <a 
                  href="https://aisajt.com/izrada-sajtova" 
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                  web dizajna i razvoja
                </a> su kreirali rešenje prilagođeno specifičnim potrebama proizvođača građevinskog materijala.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Projekat je uključivao detaljnu analizu potreba klijenta, kreiranje modernog dizajna, 
                implementaciju najboljih praksi u oblasti performansi i SEO optimizacije. Rezultat je 
                profesionalan sajt koji efikasno predstavlja LOKI N-4 u digitalnom prostoru i pomaže 
                kompaniji da privuče nove klijente.
              </p>
            </div>

            {/* Conclusion */}
            <div className="space-y-6 pt-8 border-t border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Zaključak</h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Uspešna realizacija web sajta za LOKI N-4 pokazuje važnost profesionalnog pristupa digitalnoj 
                prezentaciji. Kombinacija modernog dizajna, tehničke izvrsnosti i SEO optimizacije rezultira 
                sajtom koji ne samo što izgleda profesionalno, već i efikasno privlači nove klijente i 
                poboljšava poslovne rezultate.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Sajt je postao ključni alat za komunikaciju sa postojećim i potencijalnim klijentima, 
                omogućavajući LOKI N-4 da nastavi sa rastom i proširenjem poslovanja u digitalnom dobu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

