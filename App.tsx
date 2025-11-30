import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Download } from 'lucide-react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-stone-50 text-stone-800">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        
          {/* Global Call to Action Bar */}
          <div className="bg-brand-500 py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-stone-900">
                  <div className="flex items-center mb-4 md:mb-0">
                      <Download className="mr-3 h-6 w-6" />
                      <span className="font-bold text-lg">Download our Corporate Profile</span>
                  </div>
                  <button className="px-6 py-2 bg-stone-900 text-white font-semibold rounded hover:bg-stone-800 transition-colors text-sm">
                      Download PDF
                  </button>
              </div>
          </div>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;