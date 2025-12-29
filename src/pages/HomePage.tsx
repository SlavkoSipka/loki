import React from 'react';
import { SEO } from '../components/SEO/SEO';
import { Hero } from '../components/Hero/Hero';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { Stats } from '../components/Stats/Stats';
import { Products } from '../components/Products/Products';
import { Services } from '../components/Services/Services';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

export const HomePage = () => {
  return (
    <main>
      <SEO 
        title="LOKI N-4 ➤ Betonski elementi Vrnjačka Banja | Najpovoljnije cene 2024"
        description="Najveći proizvođač betonskih elemenata u Vrnjačkoj Banji ★ Betonski blokovi od 250din ★ Šahtovi ★ Cevi ★ 20+ godina iskustva ✓ Brza dostava ✓ Vrhunski kvalitet"
        keywords="betonski elementi Vrnjačka Banja, betonski blokovi Vrnjačka Banja, betonara Vrnjačka Banja, građevinski materijal Vrnjačka Banja, betonski proizvodi Vrnjačka Banja, betonski blokovi cena 2024, gradnja Vrnjačka Banja, betonski elementi cena"
      />
      <Hero />
      <AboutUs />
      <Stats />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};