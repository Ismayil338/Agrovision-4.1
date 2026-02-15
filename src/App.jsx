import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import i18n from './utils/i18n';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import Login from './pages/Login';

function SyncLanguage() {
  const location = useLocation();
  useEffect(() => {
    const lang = location.pathname.startsWith('/az') ? 'az' : 'en';
    i18n.changeLanguage(lang);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SyncLanguage />
      <Routes>
        {/* Redirect root to /en/home */}
        <Route path="/" element={<Navigate to="/en/home" replace />} />
        
        {/* English Routes */}
        <Route path="/en/home" element={<Home />} />
        <Route path="/en/analysis" element={<Analysis />} />
        <Route path="/en/contact" element={<Contact />} />
        <Route path="/en/dashboard" element={<Dashboard />} />
        <Route path="/en/features" element={<Features />} />
        <Route path="/en/gallery" element={<Gallery />} />
        <Route path="/en/login" element={<Login />} />
        
        {/* Azerbaijani Routes */}
        <Route path="/az/home" element={<Home />} />
        <Route path="/az/analysis" element={<Analysis />} />
        <Route path="/az/contact" element={<Contact />} />
        <Route path="/az/dashboard" element={<Dashboard />} />
        <Route path="/az/features" element={<Features />} />
        <Route path="/az/gallery" element={<Gallery />} />
        <Route path="/az/login" element={<Login />} />
        
        {/* Catch all - redirect to /en/home */}
        <Route path="*" element={<Navigate to="/en/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
