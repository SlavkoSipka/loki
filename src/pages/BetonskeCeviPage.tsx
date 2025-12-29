import React from 'react';
import { SEO } from '../components/SEO/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { ProductSchema } from '../components/ProductSchema/ProductSchema';
import { ImageMeta } from '../components/ImageOptimization/ImageMeta';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Footer } from '../components/Footer/Footer';
import { Shield, Award, Factory, Ruler, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants/config';

const PIPE_TYPES = [
  {
    name: 'AB cev F 1000/0.25m',
    dimensions: 'F 1000/0.25m',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741950735/cev-kratka-400x173_swxagv.png',
    specs: [
      { label: 'Dužina', value: '1000 mm' },
      { label: 'Težina', value: '200 kg/kom' }
    ]
  },
  {
    name: 'AB cev F 1000/0.5m',
    dimensions: 'F 1000/0.5m',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741950741/cev-kraca-400x262_do0aqd.png',
    specs: [
      { label: 'Dužina', value: '1000 mm' },
      { label: 'Težina', value: '400 kg/kom' }
    ]
  },
  {
    name: 'AB cev F 1000/1m',
    dimensions: 'F 1000/1m',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741950741/cev-200x228_idt3iv.png',
    specs: [
      { label: 'Dužina', value: '1000 mm' },
      { label: 'Težina', value: '800 kg/kom' }
    ]
  },
];

export const BetonskeCeviPage = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <main>
      <SEO 
        title="Betonske Cevi Vrnjačka Banja ➤ Armiranobetonske cevi | Cene 2024"
        description="Betonske cevi Vrnjačka Banja ★ AB cevi sve dimenzije ★ Kanalizacione cevi ★ Najpovoljnije cene 2024 ★ Dostava na gradilište ☎ Pozovite!"
        keywords="betonske cevi Vrnjačka Banja, armiranobetonske cevi cena, kanalizacione cevi Vrnjačka Banja, betonske cevi cena 2024, AB cevi Vrnjačka Banja"
        canonicalUrl="https://lokin4.com/proizvodi/betonske-cevi"
      />
      <ImageMeta 
        src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741951372/STAVI_zadafo.jpg"
        alt="Betonske cevi LOKI N-4"
        width={1200}
        height={630}
      />
      <ProductSchema
        name="Betonske cevi"
        description="Robusne i dugotrajne betonske cevi za sve vrste infrastrukturnih projekata. Dostupne u različitim dimenzijama."
        image="https://res.cloudinary.com/dfphzuddp/image/upload/v1741951372/STAVI_zadafo.jpg"
        category="Građevinski materijal"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-24 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>
        <div className="fixed inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741951372/STAVI_zadafo.jpg"
            alt="Betonske cevi"
            className="w-full h-full object-cover fixed inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mt-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Betonske <span className="text-[#0066CC]">Cevi</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Robusne i dugotrajne cevi za sve vrste infrastrukturnih projekata
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Shield, text: 'Vodonepropusnost' },
              { icon: Factory, text: 'Visoka Čvrstoća' },
              { icon: Ruler, text: 'Precizne Mere' },
              { icon: Award, text: 'Sertifikovano' }
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={elementRef} className="py-24 bg-gradient-to-br from-gray-100 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PIPE_TYPES.map((pipe, index) => (
              <div
                key={`${pipe.name}-${index}`}
                className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={pipe.image}
                    alt={pipe.name}
                    className="w-full h-48 object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{pipe.name}</h3>
                    <p className="text-sm opacity-90">{pipe.dimensions}</p>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  {pipe.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between text-sm">
                      <span className="text-gray-600">{spec.label}:</span>
                      <span className="text-gray-900 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Specifications Table */}
          <div className="mt-16 overflow-x-auto">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-lg">
              <p className="text-blue-900 font-medium">
                Sve betonske cevi su dostupne u dve varijante: armirane (AB) i betonske
              </p>
            </div>
            <table className="w-full border-collapse bg-white rounded-lg shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Proizvod</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Specifikacija</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Težina</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'F 200', specs: '200x1000mm', weight: '76 kg/kom' },
                  { name: 'F 300', specs: '300x1000mm', weight: '110 kg/kom' },
                  { name: 'F 400', specs: '400x1000mm', weight: '150 kg/kom' },
                  { name: 'F 500', specs: '500x1000mm', weight: '200 kg/kom' },
                  { name: 'F 600', specs: '600x1000mm', weight: '360 kg/kom' },
                  { name: 'F 800', specs: '800x1000mm', weight: '420 kg/kom' },
                  { name: 'F 1000', specs: '1000x1000mm', weight: '800 kg/kom' },
                  { name: 'F 1500/0.55', specs: '1500x550mm', weight: '660 kg/kom' },
                  { name: 'F 2000/0.55', specs: '2000x550mm', weight: '880 kg/kom' },
                  { name: 'F 500/500', specs: '500x500mm', weight: '100 kg/kom' },
                  { name: 'F 600/500', specs: '600x500mm', weight: '180 kg/kom' },
                  { name: 'F 800/500', specs: '800x500mm', weight: '210 kg/kom' },
                  { name: 'F 1000/250', specs: '1000x250mm', weight: '200 kg/kom' },
                  { name: 'F 1000/500', specs: '1000x500mm', weight: '400 kg/kom' },
                  { name: 'F 1000/750', specs: '1000x750mm', weight: '800 kg/kom' }
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right">{item.specs}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right">{item.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};