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
            <h3>Instalación perfecta</h3>
            <p>Protector alineado, sin burbujas. Pantalla protegida desde hoy. Garantizado.</p>
          </article>
          <article className={styles.service}>
            <h3>Asesoramiento honesto</h3>
            <p>Te recomiendo según tu uso real. Trabajo, ocio, deporte. Sin venderte de más.</p>
          </article>
          <article className={styles.service}>
            <h3>Compatibilidad al 100%</h3>
            <p>Verifico que todo encaje perfecto antes de vender. Sin arrepentimientos.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services
