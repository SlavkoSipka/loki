import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Footer } from '../components/Footer/Footer';
import { Image as ImageIcon } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/v1741992179/IMG-20250313-WA0057_fxpxjk.jpg",
    category: "proizvodi",
    title: "Betonski elementi"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/v1741992207/IMG-20250313-WA0087_suabbi.jpg",
    category: "proizvodi",
    title: "Proizvodni pogon"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990313/WhatsApp_Image_2025-03-14_at_16.01.58_0d3f7328_ezsqnq.jpg",
    category: "proizvodi",
    title: "Proizvodni pogon"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990337/WhatsApp_Image_2025-03-14_at_16.01.59_6c84be07_fpuko5.jpg",
    category: "proizvodi",
    title: "Betonski blokovi"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990357/WhatsApp_Image_2025-03-14_at_16.02.00_aabc3f12_cbdgvq.jpg",
    category: "proizvodi",
    title: "Proizvodna linija"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990371/WhatsApp_Image_2025-03-14_at_16.02.04_08791ab4_oo6smy.jpg",
    category: "proizvodi",
    title: "Skladište proizvoda"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990378/WhatsApp_Image_2025-03-14_at_16.02.04_aa19d8ce_t5xoae.jpg",
    category: "proizvodi",
    title: "Betonski elementi"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990385/WhatsApp_Image_2025-03-14_at_16.02.05_53ad9a98_t0dtvy.jpg",
    category: "proizvodi",
    title: "Proizvodna hala"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990395/WhatsApp_Image_2025-03-14_at_16.02.05_ddf8edb1_fgwii3.jpg",
    category: "proizvodi",
    title: "Skladište blokova"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990408/WhatsApp_Image_2025-03-14_at_16.02.29_0400b803_zuzog9.jpg",
    category: "proizvodi",
    title: "Betonski elementi"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990411/WhatsApp_Image_2025-03-14_at_16.02.28_4704ca70_ulgdon.jpg",
    category: "proizvodi",
    title: "Proizvodna linija"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990442/WhatsApp_Image_2025-03-14_at_16.02.32_2ac07db6_wb9eiv.jpg",
    category: "proizvodi",
    title: "Betonski blokovi"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990444/WhatsApp_Image_2025-03-14_at_16.02.32_4b7b489b_anwb7f.jpg",
    category: "proizvodi",
    title: "Skladište"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990447/WhatsApp_Image_2025-03-14_at_16.02.31_d84aa7a8_uvo3mm.jpg",
    category: "proizvodi",
    title: "Proizvodni pogon"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990447/WhatsApp_Image_2025-03-14_at_16.02.31_6e7131cd_omnfk1.jpg",
    category: "proizvodi",
    title: "Betonski elementi"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990462/WhatsApp_Image_2025-03-14_at_16.02.36_39993b7f_mrnfci.jpg",
    category: "proizvodi",
    title: "Skladište proizvoda"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990470/WhatsApp_Image_2025-03-14_at_16.02.38_457b9ad0_tmmd2i.jpg",
    category: "proizvodi",
    title: "Betonski blokovi"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990475/WhatsApp_Image_2025-03-14_at_16.02.38_5362f894_ogwqwc.jpg",
    category: "proizvodi",
    title: "Proizvodna linija"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990485/WhatsApp_Image_2025-03-14_at_16.02.44_1c8dc39e_e96bek.jpg",
    category: "proizvodi",
    title: "Skladište"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990507/WhatsApp_Image_2025-03-14_at_16.02.46_bc5c6ee1_i7bzep.jpg",
    category: "proizvodi",
    title: "Betonski elementi"
  },
  {
    src: "https://res.cloudinary.com/dfphzuddp/image/upload/q_80,fl_progressive/v1741990524/WhatsApp_Image_2025-03-14_at_16.02.45_f470cc6c_fhpxol.jpg",
    category: "proizvodi",
    title: "Proizvodni pogon"
  }
];

export const GalerijaPage = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741991288/WhatsApp_Image_2025-03-14_at_16.01.59_d8b4d0fc_ln1ygh.jpg"
            alt="Proizvodni pogon"
            className="w-full h-full object-cover fixed inset-0 animate-[fadeIn_1.5s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwNjZDQyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20 animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards]">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Naša <span className="text-blue-400">Galerija</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Pogledajte našu kolekciju proizvoda i projekata
            </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={elementRef} className="py-16 relative animate-[fadeIn_0.5s_ease-out_1.2s] opacity-0 [animation-fill-mode:forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm
                  transform transition-all duration-500 hover:-translate-y-2`}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <div className="flex items-center">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm">Kliknite za uvećani prikaz</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full animate-[scaleIn_0.3s_ease-out]">
            <img
              src={selectedImage}
              alt="Uvećana slika"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center
                hover:bg-black/70 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};