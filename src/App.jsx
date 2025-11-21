import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import VirtualAssistance from './pages/VirtualAssistance'
import ITSupport from './pages/ITSupport'
import DigitalMarketing from './pages/DigitalMarketing'
import TalentTraining from './pages/TalentTraining'
import Services from './pages/Services'
import Hire from './pages/Hire'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import Disclaimer from './pages/Disclaimer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <NavBar />
        <main className="hero">
          <div className="hero-inner">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/virtual-assistance" element={<VirtualAssistance />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/it-support" element={<ITSupport />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/talent-training" element={<TalentTraining />} />
              <Route path="/hire" element={<Hire />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
