import styles from './Benefits.module.css'

const Benefits = () => {
  return (
    <section id="confianza" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>¿Por qué aquí?</h2>
          <p className={styles.lead}>Porque no buscas un vendedor. Buscas a alguien que te resuelva.</p>
        </div>
        <div className={styles.benefits}>
          <article className={styles.benefit}>
            <div className={styles.benefitIcon}>📦</div>
            <h3>Stock real en tienda</h3>
            <p>No promesas. Si lo tienes aquí, lo llevo instalado hoy. Si no, te lo conseguimos al momento.</p>
          </article>
          <article className={styles.benefit}>
            <div className={styles.benefitIcon}>✨</div>
            <h3>Instalación impecable</h3>
            <p>Protector alineado, sin burbujas, sin polvo. Perfecto a la primera. Garantizado.</p>
          </article>
          <article className={styles.benefit}>
            <div className={styles.benefitIcon}>🤝</div>
            <h3>Asesoramiento que vale</h3>
            <p>Te explico opciones reales. Compras lo que necesitas, no lo que sobra. Sin presión.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Benefits
