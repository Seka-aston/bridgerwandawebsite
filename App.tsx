
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Apply from './pages/Apply';
import HowToApply from './pages/HowToApply';
import SuccessStories from './pages/SuccessStories';
import Resources from './pages/Resources';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';

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
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:programId" element={<ProgramDetail />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/how-to-apply" element={<HowToApply />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
