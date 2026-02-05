import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>Mascarksas</h3>
            <p>Tu tienda de confianza para proteger tu móvil.</p>
          </div>
          
          <div className={styles.column}>
            <h4>Enlaces</h4>
            <ul className={styles.links}>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/catalogo">Catálogo</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Contacto</h4>
            <ul className={styles.info}>
              <li>Centro Comercial El Teler</li>
              <li>Pintor Segrelles, 1 local 114</li>
              <li>Ontinyent (46870)</li>
              <li><a href="https://wa.me/000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Horario</h4>
            <ul className={styles.info}>
              <li>Lunes - Sábado</li>
              <li>10:00 - 14:00</li>
              <li>17:00 - 21:00</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Mascarksas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
