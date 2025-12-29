import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BetonskiBlokoviPage } from './pages/BetonskiBlokoviPage';
import { BetonskeCeviPage } from './pages/BetonskeCeviPage';
import { SahtoviiPoklopciPage } from './pages/SahtoviiPoklopciPage';
import { EuroGrillPage } from './pages/EuroGrillPage';
import { GalerijaPage } from './pages/GalerijaPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [currentContent, setCurrentContent] = useState(children);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    
    setIsPageLoading(true);
    window.scrollTo(0, 0);

    const loadingTimer = setTimeout(() => {
      setCurrentContent(children);
      setIsPageLoading(false);
    }, 800);

    return () => clearTimeout(loadingTimer);
  }, [pathname, children]);

  return (
    <>
      <LoadingScreen isLoading={isPageLoading} />
      <div className={`${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>
        {currentContent}
      </div>
    </>
  );
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative">
        <LoadingScreen isLoading={initialLoading} />
        <PageTransition>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nama" element={<AboutPage />} />
            <Route path="/proizvodi/betonski-blokovi" element={<BetonskiBlokoviPage />} />
            <Route path="/proizvodi/betonske-cevi" element={<BetonskeCeviPage />} />
            <Route path="/proizvodi/sahtovi-i-poklopci" element={<SahtoviiPoklopciPage />} />
            <Route path="/proizvodi/euro-grill" element={<EuroGrillPage />} />
            <Route path="/galerija" element={<GalerijaPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/izrada-sajta" element={<CaseStudyPage />} />
          </Routes>
        </PageTransition>
      </div>
    </BrowserRouter>
  );
}

export default App;