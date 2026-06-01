import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Remove BrowserRouter
import { Toaster } from 'react-hot-toast';

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingEnquiryButton from './components/FloatingEnquiryButton.jsx';
import EnquiryModal from './components/EnquiryModal.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Public pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Admission from './pages/Admission.jsx';
import Academics from './pages/Academics.jsx';
import Gallery from './pages/Gallery.jsx';
// import Announcement from './components/Announcement.jsx';
import Notice from './pages/Notice.jsx';
import Blog from './pages/Blog.jsx';
import Career from './pages/Career.jsx';
import LegalAid from './pages/LegalAid.jsx';
import Library from './pages/Library.jsx';
import MootCourt from './pages/MootCourt.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Facilities from './pages/Facilities.jsx';
import UdanBook from "./pages/UdanBook.jsx";
import Udan from "./pages/Udan.jsx";
import Grievance from './pages/Grievance.jsx';
import Feedback from './pages/Feedback.jsx';
import JadhavarGroup from './pages/JadhavarGroup.jsx';
import VicePresident from './pages/Vicepresident.jsx';
import President from './pages/President.jsx';
import Programmes from './pages/Programmes.jsx';
import Research from './pages/Research.jsx';
import LifeCampus from './pages/LifeCampus.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Disclaimer from './pages/Disclaimer.jsx';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import GalleryAdmin from './pages/admin/GalleryAdmin.jsx';
import AnnouncementAdmin from './pages/admin/AnnouncementAdmin.jsx';
import NoticeAdmin from './pages/admin/NoticeAdmin.jsx';
import BlogAdmin from './pages/admin/BlogAdmin.jsx';
import CareerAdmin from './pages/admin/CareerAdmin.jsx';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <Header onEnquiryClick={() => setEnquiryOpen(true)} />

        {/* Main Routes */}
        <main className="flex-1">
          <Routes>
            {/* ---------------- PUBLIC ROUTES ---------------- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/president" element={<President />} />
            <Route path="/about/vicepresident" element={<VicePresident />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/programs" element={<Programmes />} />
            <Route path="/research" element={<Research />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/jadhavar" element={<JadhavarGroup />} />
            {/* <Route path="/announcements" element={<Announcement />} /> */}
            <Route path="/notice" element={<Notice />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/legalaid" element={<LegalAid />} />
            <Route path="/library" element={<Library />} />
            <Route path="/moot" element={<MootCourt />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/grievance" element={<Grievance />} />
            <Route path="/life-campus" element={<LifeCampus />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/udan" element={<Udan />} />
            <Route path="/udan/:id" element={<UdanBook />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            {/* ---------------- ADMIN ROUTES ---------------- */}
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/gallery"
              element={
                <ProtectedRoute>
                  <GalleryAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/announcements"
              element={
                <ProtectedRoute>
                  <AnnouncementAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/notices"
              element={
                <ProtectedRoute>
                  <NoticeAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/blogs"
              element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/careers"
              element={
                <ProtectedRoute>
                  <CareerAdmin />
                </ProtectedRoute>
              }
            />

            {/* ---------------- REDIRECTS ---------------- */}
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Enquiry Button */}
        <FloatingEnquiryButton onClick={() => setEnquiryOpen(true)} />

        {/* Enquiry Modal */}
        <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      </div>
    </>
  );
}

export default App;
