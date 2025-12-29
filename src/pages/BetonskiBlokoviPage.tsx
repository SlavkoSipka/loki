import React from 'react';
import { SEO } from '../components/SEO/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { ProductSchema } from '../components/ProductSchema/ProductSchema';
import { ImageMeta } from '../components/ImageOptimization/ImageMeta';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Footer } from '../components/Footer/Footer';
import { Shield, Award, Factory, Ruler, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants/config';

const BLOCK_TYPES = [
  {
    name: 'Betonski blok 12x20x40cm',
    dimensions: '12x20x40 cm',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/c_scale,w_3000,q_100/v1741984747/12x20_jxoivn.jpg',
    specs: [
      { label: 'Težina', value: '10 kg/kom' },
      { label: 'Potrošnja', value: '12.5 kom/m²' }
    ]
  },
  {
    name: 'Betonski blok 14x20x40cm',
    dimensions: '14x20x40 cm',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741984993/14_malb5p.jpg',
    specs: [
      { label: 'Težina', value: '13 kg/kom' },
      { label: 'Potrošnja', value: '12.5 kom/m²' }
    ]
  },
  {
    name: 'Betonski blok 20x20x40cm',
    dimensions: '20x20x40 cm',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741985458/Betonski-blok-20cm-01_jdzudw.webp',
    specs: [
      { label: 'Težina', value: '16 kg/kom' },
      { label: 'Potrošnja', value: '12.5 kom/m²' }
    ]
  },
  {
    name: 'Betonski blok 25x20x40cm',
    dimensions: '25x20x40 cm',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/c_scale,w_800,q_90/v1741985258/BLOK_20_21.10.2021_anaq4d.png',
    specs: [
      { label: 'Težina', value: '20 kg/kom' },
      { label: 'Potrošnja', value: '12.5 kom/m²' }
    ]
  },
  {
    name: 'Punioc blok 20x20x40cm',
    dimensions: '20x20x40 cm',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741985725/Nenaslovljeni_dizajn_86_pgdiye.png',
    specs: [
      { label: 'Težina', value: '16 kg/kom' },
      { label: 'Potrošnja', value: '12.5 kom/m²' }
    ]
  },
  {
    name: 'Punioc blok 24x20x40cm',
    dimensions: '24x20x40 cm',
    image: 'https://res.cloudinary.com/dfphzuddp/image/upload/v1741985725/Nenaslovljeni_dizajn_86_pgdiye.png',
    specs: [
      { label: 'Težina', value: '18 kg/kom' },
      { label: 'Potrošnja', value: '12.5 kom/m²' }
    ]
  }
];

export const BetonskiBlokoviPage = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <main>
      <SEO 
        title="Betonski Blokovi Vrnjačka Banja ➤ od 250din | Cene 2024 LOKI N-4"
        description="Betonski blokovi Vrnjačka Banja ★ Cene od 250 dinara ★ Blokovi od betona i šljake ★ Sve dimenzije na stanju ★ Najpovoljnije cene 2024 ☎ Pozovite!"
        keywords="betonski blokovi Vrnjačka Banja cena, betonski blokovi cena 2024, blokovi od šljake Vrnjačka Banja, pregradni blokovi Vrnjačka Banja, termo blokovi cena, građevinski materijal Vrnjačka Banja"
        canonicalUrl="https://lokin4.com/proizvodi/betonski-blokovi"
      />
      <ImageMeta 
        src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741951542/galerija-betonski-blokovi-04_bxcnwz.jpg"
        alt="Betonski blokovi LOKI N-4"
        width={1200}
        height={630}
      />
      <ProductSchema
        name="Betonski blokovi"
        description="Vrhunski kvalitet betonskih blokova za sve vrste građevinskih projekata. Dostupni u različitim dimenzijama i materijalima."
        image="https://res.cloudinary.com/dfphzuddp/image/upload/v1741951542/galerija-betonski-blokovi-04_bxcnwz.jpg"
        category="Građevinski materijal"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-24 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>
        <div className="fixed inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741951542/galerija-betonski-blokovi-04_bxcnwz.jpg"
            alt="Betonski blokovi"
            className="w-full h-full object-cover object-right fixed inset-0 animate-[fadeIn_1.5s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 animate-[fadeInUp_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Betonski <span className="text-[#0066CC]">Blokovi</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
            Vrhunski kvalitet i precizna izrada za sve vaše građevinske projekte
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
            {[
              { icon: Shield, text: 'Garantovan Kvalitet' },
              { icon: Factory, text: 'Moderna Proizvodnja' },
              { icon: Ruler, text: 'Precizne Dimenzije' },
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
      <section ref={elementRef} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-100 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 sm:mb-8 rounded-lg">
            <h3 className="text-blue-900 font-semibold mb-2">Napomena o materijalima</h3>
            <p className="text-blue-800 text-sm sm:text-base">
              Svaki tip bloka je dostupan u dve varijante materijala: izrađen od betona ili od šljake.
              Obe varijante prolaze stroge kontrole kvaliteta i nude odličan odnos cene i kvaliteta.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {BLOCK_TYPES.map((block, index) => (
              <div
                key={`${block.name}-${index}`}
                className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={block.image}
                    alt={block.name}
                    className="w-full h-72 object-cover hover:scale-110 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{block.name}</h3>
                    <p className="text-sm opacity-90">{block.dimensions}</p>
                    <div className="mt-2 flex items-center space-x-2 text-xs">
                      <span className="px-2 py-1 bg-blue-500/20 rounded-full">Betonski</span>
                      <span className="px-2 py-1 bg-blue-500/20 rounded-full">Šljaka</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-2 transform transition-all duration-500 hover:bg-gray-50">
                  {block.specs.map((spec) => (
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
          <div className={`mt-8 sm:mt-12 md:mt-16 overflow-x-auto transform transition-all duration-1000 -mx-4 sm:mx-0 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="min-w-[800px] sm:rounded-lg bg-white shadow-md">
              <table className="w-full border-collapse">
                <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Proizvod</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Materijal</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Težina elementa</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Na paleti</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Težina palete</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Broj komada</th>
                </tr>
                </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Blok 12x20x40cm', material: 'Beton', weight: '10 kg/kom', palette: '100 kom', paletteWeight: '1000 kg', pieces: '12,5 kom/m2' },
                  { name: 'Blok 12x20x40cm', material: 'Šljaka', weight: '8 kg/kom', palette: '120 kom', paletteWeight: '960 kg', pieces: '12,5 kom/m2' },
                  { name: 'Blok 14x20x40cm', material: 'Beton', weight: '13 kg/kom', palette: '70 kom', paletteWeight: '910 kg', pieces: '12,5 kom/m2' },
                  { name: 'Blok 14x20x40cm', material: 'Šljaka', weight: '10 kg/kom', palette: '90 kom', paletteWeight: '900 kg', pieces: '12,5 kom/m2' },
                  { name: 'Blok 20x20x40cm', material: 'Beton', weight: '16 kg/kom', palette: '60 kom', paletteWeight: '960 kg', pieces: '12,5 kom/m2' },
                  { name: 'Blok 20x20x40cm', material: 'Šljaka', weight: '13 kg/kom', palette: '75 kom', paletteWeight: '975 kg', pieces: '12,5 kom/m2' },
                  { name: 'Blok 25x20x40cm', material: 'Beton', weight: '20 kg/kom', palette: '50 kom', paletteWeight: '1000 kg', pieces: '12,5 kom/m2' },
                  { name: 'Blok 25x20x40cm', material: 'Šljaka', weight: '16 kg/kom', palette: '60 kom', paletteWeight: '960 kg', pieces: '12,5 kom/m2' },
                  { name: 'Punioc blok 20x20x40cm', material: 'Beton', weight: '16 kg/kom', palette: '60 kom', paletteWeight: '960 kg', pieces: '12,5 kom/m2' },
                  { name: 'Punioc blok 20x20x40cm', material: 'Šljaka', weight: '13 kg/kom', palette: '75 kom', paletteWeight: '975 kg', pieces: '12,5 kom/m2' },
                  { name: 'Punioc blok 24x20x40cm', material: 'Beton', weight: '18 kg/kom', palette: '55 kom', paletteWeight: '990 kg', pieces: '12,5 kom/m2' },
                  { name: 'Punioc blok 24x20x40cm', material: 'Šljaka', weight: '15 kg/kom', palette: '65 kom', paletteWeight: '975 kg', pieces: '12,5 kom/m2' }
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      <span className={`px-2 py-1 rounded-full ${
                        item.material === 'Beton' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.material}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right">{item.weight}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right">{item.palette}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right">{item.paletteWeight}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right">{item.pieces}</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};