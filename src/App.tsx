import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CatalogPage from './pages/CatalogPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  )
}

export default App
