import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const logoSrc = '/images/Logo-de-la-tienda.png'

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const goToSection = (sectionId: string) => {
    closeMenu()

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          <img src={logoSrc} alt="Logo de la tienda" />
        </a>
        
        <button className={styles.hamburger} onClick={toggleMenu} aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}>
          <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></span>
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          <button type="button" className={styles.link} onClick={() => goToSection('inicio')}>Inicio</button>
          <button type="button" className={styles.link} onClick={() => goToSection('fundas')}>Fundas</button>
          <button type="button" className={styles.link} onClick={() => goToSection('personalizadas')}>Personalizadas</button>
          <button type="button" className={styles.link} onClick={() => goToSection('tienda-fisica')}>Tienda Física / Contacto</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
