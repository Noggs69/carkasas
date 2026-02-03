import { Link } from 'react-router-dom'
import styles from './FinalCTA.module.css'

const FinalCTA = () => {
  return (
    <section id="cta-final" className={styles.section}>
      <div className={styles.container}>
        <h2>¿Listo para proteger tu móvil hoy?</h2>
        <p className={styles.finalSubtitle}>Pásate por la tienda o consulta por WhatsApp. Te esperamos en [Ciudad], [Barrio].</p>
        <div className={styles.finalActions}>
          <a className={`${styles.button} ${styles.primary}`} href="https://wa.me/000000000" target="_blank" rel="noopener">Consultar por WhatsApp</a>
          <Link className={`${styles.button} ${styles.secondary}`} to="/catalogo">Ver catálogo</Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
