import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Admin Components
import AdminLogin from './pages/admin/Login';
import DashboardLayout from './pages/admin/DashboardLayout';
import ProductsManager from './pages/admin/ProductsManager';
import GalleryManager from './pages/admin/GalleryManager';
import InquiriesManager from './pages/admin/InquiriesManager';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Prevent background scrolling when a modal is open
  useEffect(() => {
    const hasModalOpen = document.querySelector('.fixed.inset-0.z-\\[100\\]');
    if (hasModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return (
    <div className="font-sans text-slate-900 selection:bg-amber-200 selection:text-slate-900">
      <ScrollToTop />
      
      {/* 
        We use a wildcard for public routes so that we can have a separate 
        layout for /admin routes without the public Navbar and Footer.
      */}
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin">
          <Route index element={<AdminLogin />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="products" replace />} />
            <Route path="products" element={<ProductsManager />} />
            <Route path="gallery" element={<GalleryManager />} />
            <Route path="inquiries" element={<InquiriesManager />} />
            <Route path="settings" element={<div className="p-8">Settings coming soon</div>} />
          </Route>
        </Route>
        
        <Route path="*" element={
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </>
        } />
      </Routes>
    </div>
  );
}
