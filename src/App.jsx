import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
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
        
        {/* Russian Routes */}
        <Route path="/ru/home" element={<Home />} />
        <Route path="/ru/analysis" element={<Analysis />} />
        <Route path="/ru/contact" element={<Contact />} />
        <Route path="/ru/dashboard" element={<Dashboard />} />
        <Route path="/ru/features" element={<Features />} />
        <Route path="/ru/gallery" element={<Gallery />} />
        <Route path="/ru/login" element={<Login />} />
        
        {/* Catch all - redirect to /en/home */}
        <Route path="*" element={<Navigate to="/en/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
