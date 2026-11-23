import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SlideOverQuote } from './components/SlideOverQuote';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { KotaStone } from './pages/KotaStone';
import { RiverWashStone } from './pages/RiverWashStone';
import { KotaTiles } from './pages/KotaTiles';
import { RedMandanaStone } from './pages/RedMandanaStone';
import { KotaCobbles } from './pages/KotaCobbles';
import { PopularMarble } from './pages/PopularMarble';
import { Granite } from './pages/Granite';
import { MarbleBySpaces } from './pages/MarbleBySpaces';
import { MarbleByColours } from './pages/MarbleByColours';
import { GraniteByColour } from './pages/GraniteByColour';
import { GraniteBySpaces } from './pages/GraniteBySpaces';

export const App: React.FC = () => {
  const [quoteDrawerOpen, setQuoteDrawerOpen] = useState(false);
  const [quoteInitialStone, setQuoteInitialStone] = useState('Kota Stone');

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const custom = e as CustomEvent<{ stone?: string }>;
      if (custom.detail?.stone) {
        setQuoteInitialStone(custom.detail.stone);
      }
      setQuoteDrawerOpen(true);
    };
    window.addEventListener('open-quote-drawer', handleOpen);
    return () => window.removeEventListener('open-quote-drawer', handleOpen);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Products */}
            <Route path="/products" element={<Navigate to="/products/kota-stone" replace />} />
            <Route path="/products/kota-stone" element={<KotaStone />} />
            <Route path="/products/river-wash-stone" element={<RiverWashStone />} />
            <Route path="/products/kota-tiles" element={<KotaTiles />} />
            <Route path="/products/red-mandana-stone" element={<RedMandanaStone />} />
            <Route path="/products/mandana-stone" element={<RedMandanaStone />} />
            <Route path="/products/kota-cobbles" element={<KotaCobbles />} />
            
            {/* Marble & Granite from RK Marble */}
            <Route path="/products/popular-marble" element={<PopularMarble />} />
            <Route path="/products/marble" element={<PopularMarble />} />
            <Route path="/popular-marble" element={<PopularMarble />} />
            <Route path="/products/granite" element={<Granite />} />
            <Route path="/granite" element={<Granite />} />
            
            {/* Marble by Spaces from RK Marble */}
            <Route path="/products/marble-by-spaces" element={<MarbleBySpaces />} />
            <Route path="/marble-by-spaces" element={<MarbleBySpaces />} />

            {/* Marble by Colours from RK Marble */}
            <Route path="/products/marble-by-colours" element={<MarbleByColours />} />
            <Route path="/marble-by-colours" element={<MarbleByColours />} />
            <Route path="/products/marble-by-colors" element={<MarbleByColours />} />
            <Route path="/marble-by-colors" element={<MarbleByColours />} />

            {/* Granite by Colour from RK Marble */}
            <Route path="/products/granite-by-colour" element={<GraniteByColour />} />
            <Route path="/granite-by-colour" element={<GraniteByColour />} />
            <Route path="/products/granite-by-colours" element={<GraniteByColour />} />
            <Route path="/granite-by-colours" element={<GraniteByColour />} />
            <Route path="/products/granite-by-color" element={<GraniteByColour />} />
            <Route path="/granite-by-color" element={<GraniteByColour />} />

            {/* Granite by Spaces from RK Marble */}
            <Route path="/products/granite-by-spaces" element={<GraniteBySpaces />} />
            <Route path="/granite-by-spaces" element={<GraniteBySpaces />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
        <SlideOverQuote
          isOpen={quoteDrawerOpen}
          onClose={() => setQuoteDrawerOpen(false)}
          initialStone={quoteInitialStone}
        />
      </div>
    </Router>
  );
};

export default App;
