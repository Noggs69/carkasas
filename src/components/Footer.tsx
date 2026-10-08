import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>+Carksas</h3>
            <p>Fundas premium, accesorios y personalización con base en Ontinyent.</p>
          </div>
          
          <div className={styles.column}>
            <h4>Navegación</h4>
            <ul className={styles.links}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#fundas">Fundas</a></li>
              <li><a href="#personalizadas">Personalizadas</a></li>
              <li><a href="#tienda-fisica">Tienda física</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Contacto</h4>
            <ul className={styles.info}>
              <li>Centro Comercial El Teler</li>
              <li>Pintor Segrelles, 1 local 114</li>
              <li>Ontinyent (46870)</li>
              <li><a href="https://wa.me/34637942667" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
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

          <div className={styles.column}>
            <h4>Redes</h4>
            <ul className={styles.links}>
              <li><a href="https://www.instagram.com/mascarksas/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://wa.me/34637942667" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} +Carksas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
