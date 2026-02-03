import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>Accesorios para móviles y tablets</p>
        <h1>
          Tu móvil protegido hoy,
          <span> instalado perfecto</span>
        </h1>
        <p className={styles.subtitle}>
          Fundas, protectores, cargadores, auriculares y smartwatches.
          Stock real. Asesoramiento honesto. Solución en minutos.
        </p>
        <div className={styles.heroActions}>
          <Link className={`${styles.button} ${styles.primary}`} to="/catalogo">Ver nuestro catálogo</Link>
          <a className={`${styles.button} ${styles.secondary}`} href="https://wa.me/000000000" target="_blank" rel="noopener">Consultar stock</a>
        </div>
      </div>
    </header>
  )
}

export default Hero
