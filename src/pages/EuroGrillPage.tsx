import React from 'react';
import { SEO } from '../components/SEO/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { Footer } from '../components/Footer/Footer';
import { Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EURO_GRILL_PRODUCTS = [
  { image: "/images/1.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/2.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/3.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/4.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/5.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/6.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/7.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/8.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/9.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/10.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/11.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/12.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/13.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/14.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/15.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/16.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/17.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/18.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/19.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/20.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/21.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/22.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/23.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/24.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/25.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/26.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/27.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/28.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/29.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/30.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/31.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/32.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/33.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/34.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/35.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/36.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/37.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/38.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/39.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/40.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/41.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/42.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/43.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/44.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/45.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/46.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/47.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/48.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/49.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/50.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/51.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/52.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/53.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/54.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/55.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/56.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/57.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/58.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" },
  { image: "/images/59.png", title: "Euro Grill Proizvod", description: "Profesionalna oprema za ugostiteljstvo" }
];

export const EuroGrillPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/kontakt');
  };

  return (
    <main>
      <SEO 
        title="Euro Grill Asortiman | LOKI N-4"
        description="Kompletan asortiman Euro Grill proizvoda. Profesionalna oprema za ugostiteljstvo, roštilji, pekarska oprema i više."
        keywords="euro grill, profesionalna oprema, ugostiteljska oprema, roštilji, pekarska oprema"
      />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-24 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>
        <div className="fixed inset-0 w-full h-full">
          <img
            src="/images/por18.jpg"
            alt="Euro Grill proizvodi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mt-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Euro Grill <span className="text-[#0066CC]">Asortiman</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Profesionalna oprema za ugostiteljstvo
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {EURO_GRILL_PRODUCTS.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{`Proizvod ${index + 1}`}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <button
                    onClick={handleContactClick}
                    className="group flex items-center justify-center w-full px-6 py-4 bg-blue-600 text-white rounded-xl font-medium
                      hover:bg-blue-700 transition-all duration-300 space-x-2 shadow-lg hover:shadow-blue-500/25"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Kontaktirajte nas</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};