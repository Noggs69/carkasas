import styles from './ContactPage.module.css'

const ContactPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte</p>
      </div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.icon}>📍</div>
              <h3>Ubicación</h3>
              <p>[Dirección completa]</p>
              <p>[Ciudad], [Barrio]</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.icon}>📞</div>
              <h3>Teléfono</h3>
              <p>+34 000 000 000</p>
              <a href="https://wa.me/000000000" target="_blank" rel="noopener">WhatsApp</a>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.icon}>🕐</div>
              <h3>Horario</h3>
              <p>Lunes a Viernes: 10:00 - 20:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>
          <div className={styles.ctaBlock}>
            <h2>¿Tienes dudas?</h2>
            <p>Escríbenos por WhatsApp y te respondemos al instante</p>
            <a className={styles.button} href="https://wa.me/000000000" target="_blank" rel="noopener">Contactar por WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
