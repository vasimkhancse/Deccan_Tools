import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Manufacturing from './pages/Manufacturing';
import Inspection from './pages/Inspection';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Coating from './pages/Coating';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brandRed-600 selection:text-white relative">
      {/* Centered Spanner Page Transition Loader on Every Route Change */}
      <PageLoader />

      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Top Bar for contact info & location */}
      <TopBar />

      {/* Sticky Responsive Header */}
      <Header />

      {/* Main Content Area with Subtle Page Transition */}
      <main
        id="main-content"
        className="flex-1 w-full overflow-x-hidden"
      >
        <div
          key={location.pathname}
          className="page-enter-animation"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/inspection" element={<Inspection />} />
            <Route path="/products" element={<Products />} />
            
            {/* Dynamic route for all 11 product detail pages */}
            <Route path="/products/:slug" element={<ProductDetail />} />
            
            <Route path="/coating" element={<Coating />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Phone quick contact buttons */}
      <FloatingContact />
    </div>
  );
}
