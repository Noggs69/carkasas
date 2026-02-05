import styles from './Process.module.css'

const Process = () => {
  return (
    <section id="proceso" className={styles.section}>
      <div className={styles.container}>
        <h2>Cómo funciona aquí</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.timelineNumber}>1</div>
            <h3>Dime tu modelo</h3>
            <p>En tienda o por WhatsApp. Confirmo al instante.</p>
          </div>
          <div className={styles.timelineConnector}></div>
          <div className={styles.timelineItem}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="10" r="1" fill="currentColor"/>
                <circle cx="12" cy="10" r="1" fill="currentColor"/>
                <circle cx="15" cy="10" r="1" fill="currentColor"/>
              </svg>
            </div>
            <div className={styles.timelineNumber}>2</div>
            <h3>Te asesoro</h3>
            <p>Opciones reales para tu uso y presupuesto.</p>
          </div>
          <div className={styles.timelineConnector}></div>
          <div className={styles.timelineItem}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.timelineNumber}>3</div>
            <h3>Sales protegido</h3>
            <p>Instalación perfecta. Móvil listo al momento.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
