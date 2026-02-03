import styles from './Catalog.module.css'

const Catalog = () => {
  const brands = ['iPhone', 'Samsung', 'Xiaomi', 'Huawei', 'Oppo', 'Motorola']

  return (
    <section id="consulta" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>¿Tienes tu modelo?</h2>
          <p className={styles.lead}>Mira el catálogo visual. Si no lo ves, pregúntanos. Te respondemos al instante.</p>
        </div>
        <div className={styles.brandShowcase}>
          {brands.map(brand => (
            <div key={brand} className={styles.brandItem}>{brand}</div>
          ))}
        </div>
        <div className={styles.ctaBlock}>
          <a className={styles.button} href="https://wa.me/000000000" target="_blank" rel="noopener">Consultar por WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

export default Catalog
