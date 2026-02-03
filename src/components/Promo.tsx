import styles from './Promo.module.css'

const Promo = () => {
  return (
    <section id="gancho" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.badge}>🎁 Promo exclusiva</span>
        <h2>Muestra esta web en tienda y elige</h2>
        <div className={styles.promoOptions}>
          <div className={styles.promoOption}>
            <span className={styles.promoLabel}>Opción A</span>
            <p><strong>10% dto</strong> en la segunda unidad</p>
          </div>
          <div className={styles.promoDivider}>o</div>
          <div className={styles.promoOption}>
            <span className={styles.promoLabel}>Opción B</span>
            <p><strong>Protector de cámara</strong> de regalo</p>
          </div>
        </div>
        <p className={styles.note}>Solo al mostrar esta web en tienda</p>
      </div>
    </section>
  )
}

export default Promo
