import styles from './Services.module.css'

const Services = () => {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Lo que te llevas</h2>
          <p className={styles.lead}>Instalación, asesoramiento y garantía de compatibilidad.</p>
        </div>
        <div className={styles.serviceGrid}>
          <article className={styles.service}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Instalación perfecta</h3>
            <p>Protector alineado, sin burbujas. Pantalla protegida desde hoy. Garantizado.</p>
          </article>
          <article className={styles.service}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Asesoramiento honesto</h3>
            <p>Te recomiendo según tu uso real. Trabajo, ocio, deporte. Sin venderte de más.</p>
          </article>
          <article className={styles.service}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="7" y1="7" x2="7.01" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Compatibilidad al 100%</h3>
            <p>Verifico que todo encaje perfecto antes de vender. Sin arrepentimientos.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services
