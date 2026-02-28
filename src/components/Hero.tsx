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
          Carcasas para móviles en Ontinyent. Tienda de fundas en Ontinyent con stock real, asesoramiento honesto y solución en minutos.
        </p>
      </div>
    </header>
  )
}

export default Hero
