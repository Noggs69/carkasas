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
            <div className={styles.benefitIcon}>
              <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=400&h=300&fit=crop" alt="Stock en tienda" />
            </div>
            <h3>Stock real en tienda</h3>
            <p>No promesas. Si lo tienes aquí, lo llevo instalado hoy. Si no, te lo conseguimos al momento.</p>
          </article>
          <article className={styles.benefit}>
            <div className={styles.benefitIcon}>
              <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop" alt="Instalación profesional" />
            </div>
            <h3>Instalación impecable</h3>
            <p>Protector alineado, sin burbujas, sin polvo. Perfecto a la primera. Garantizado.</p>
          </article>
          <article className={styles.benefit}>
            <div className={styles.benefitIcon}>
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" alt="Asesoramiento personalizado" />
            </div>
            <h3>Asesoramiento que vale</h3>
            <p>Te explico opciones reales. Compras lo que necesitas, no lo que sobra. Sin presión.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Benefits
