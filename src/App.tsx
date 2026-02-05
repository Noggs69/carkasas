import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CatalogPage from './pages/CatalogPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </Router>
  )
}

export default App
