import styles from './Process.module.css'

const Process = () => {
  return (
    <section id="proceso" className={styles.section}>
      <div className={styles.container}>
        <h2>Cómo funciona aquí</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineNumber}>1</div>
            <h3>Dime tu modelo</h3>
            <p>En tienda o por WhatsApp. Confirmo al instante.</p>
          </div>
          <div className={styles.timelineConnector}></div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineNumber}>2</div>
            <h3>Te asesoro</h3>
            <p>Opciones reales para tu uso y presupuesto.</p>
          </div>
          <div className={styles.timelineConnector}></div>
          <div className={styles.timelineItem}>
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
