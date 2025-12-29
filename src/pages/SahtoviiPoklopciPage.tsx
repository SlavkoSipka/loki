import React from 'react';
import { SEO } from '../components/SEO/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { ProductSchema } from '../components/ProductSchema/ProductSchema';
import { ImageMeta } from '../components/ImageOptimization/ImageMeta';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Footer } from '../components/Footer/Footer';
import { Shield, Award, Factory, Ruler, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants/config';

const PRODUCT_TYPES = [
  {
    name: 'AB Poklopac sa rupom',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741951064/ab-poklopac-sa-rupom-400x400_zez96e.png',
    description: 'AB poklopac sa otvorom za ventilaciju'
  },
  {
    name: 'Trodelni poklopac',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741951060/trodelni-poklopac-400x391_py56yd.png',
    description: 'Trodelni poklopac za šahtove'
  },
  {
    name: 'Liveni poklopac',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741951058/liveni-poklopac-400x265_hzj4ri.png',
    description: 'Liveno gvozdeni poklopac'
  },
  {
    name: 'AB Kadica',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741951057/armirana-betonska-kadica-400x201_ycmrhq.png',
    description: 'Armirana betonska kadica za šahtove'
  },
  {
    name: 'Kineta',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741951058/kineta-400x354_eosgvt.png',
    description: 'Betonska kineta za šahtove'
  },
  {
    name: 'AB Konus S',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741951062/ab-konus-s-400x292_avpi5t.png',
    description: 'Simetrični armirano betonski konus'
  },
  {
    name: 'AB Konus A',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741951061/ab-konus-a-400x279_kwtxhq.png',
    description: 'Asimetrični armirano betonski konus'
  }
];

export const SahtoviiPoklopciPage = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <main>
      <SEO 
        title="Šahtovi Vrnjačka Banja ➤ Betonski i liveni poklopci | Cene 2024"
        description="Šahtovi Vrnjačka Banja ★ Betonski i liveni poklopci ★ Kinete ★ Revizioni silazi ★ Najpovoljnije cene 2024 ★ Dostava i ugradnja ☎ Pozovite!"
        keywords="šahtovi Vrnjačka Banja, betonski šahtovi cena, poklopci za šahtove Vrnjačka Banja, liveni poklopci cena 2024, kinete Vrnjačka Banja, revizioni silazi cena"
        canonicalUrl="https://lokin4.com/proizvodi/sahtovi-i-poklopci"
      />
      <ImageMeta 
        src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741951723/IMG-20250313-WA0053_raawou.jpg"
        alt="Šahtovi i poklopci LOKI N-4"
        width={1200}
        height={630}
      />
      <ProductSchema
        name="Šahtovi i poklopci"
        description="Kompletan asortiman šahtova i poklopaca za sve vrste primene. Betonski i liveni poklopci, kinete i revizioni silazi."
        image="https://res.cloudinary.com/dfphzuddp/image/upload/v1741951723/IMG-20250313-WA0053_raawou.jpg"
        category="Građevinski materijal"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-24 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>
        <div className="fixed inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741951723/IMG-20250313-WA0053_raawou.jpg"
            alt="Šahtovi i poklopci"
            className="w-full h-full object-cover fixed inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mt-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Šahtovi i <span className="text-[#0066CC]">Poklopci</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Kompletan asortiman šahtova i poklopaca za sve vrste primene
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Shield, text: 'Visoka Nosivost' },
              { icon: Factory, text: 'Precizna Izrada' },
              { icon: Ruler, text: 'Tačne Dimenzije' },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_TYPES.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Specifications Table */}
          <div className="mt-16 overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dimenzije</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Proizvod</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'F 800 - 600, visina 300' },
                  { name: 'F 600' },
                  { name: 'F 800' },
                  { name: 'F 800 sa 30x30 poklopcem' },
                  { name: 'F 1000' },
                  { name: 'F 1000 sa 30x30' },
                  { name: 'F 1000 sa 60x60' },
                  { name: 'F 1500' },
                  { name: 'F 1500 sa 30x30' },
                  { name: 'F 1500 sa 60x60' },
                  { name: 'F 2000' },
                  { name: 'F 2000 sa 30x30' },
                  { name: 'F 2000 sa 60x60' },
                  { name: 'F 1000 teretni, duplo armirani 25+ tona nosivost' },
                  { name: 'F 1500 teretni, duplo armirani 25+ tona nosivost' },
                  { name: 'F 2000 teretni, duplo armirani 25+ tona nosivost' }
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{index === 0 ? 'Svod' : 'Poklopac'}</td>
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