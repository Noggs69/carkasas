import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'
import styles from './Navbar.module.css'

const Navbar = () => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const logoSrc = theme === 'dark' ? '/images/Logo-Modo-Oscuro.png' : '/images/Logo-de-la-tienda.png'

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logoSrc} alt="Logo de la tienda" />
        </Link>
        
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></span>
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          <Link to="/" className={styles.link} onClick={closeMenu}>Inicio</Link>
          <Link to="/catalogo" className={styles.link} onClick={closeMenu}>Catálogo</Link>
          <Link to="/servicios" className={styles.link} onClick={closeMenu}>Servicios</Link>
          <Link to="/contacto" className={styles.link} onClick={closeMenu}>Contacto</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
