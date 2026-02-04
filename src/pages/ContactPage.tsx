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
              <div className={styles.iconBox}>
                <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Ubicación</h3>
              <p>Centro Comercial El Teler.</p>
              <p>Pintor Segrelles, 1 local 114</p>
              <p>Ontinyent (46870)</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.iconBox}>
                <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Teléfono</h3>
              <p>+34 000 000 000</p>
              <a href="https://wa.me/000000000" target="_blank" rel="noopener">WhatsApp</a>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.iconBox}>
                <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Horario</h3>
              <p>Lunes a Viernes: 10:00 - 20:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>
          
          <div className={styles.mapContainer}>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Centro+Comercial+El+Teler,+Carrer+del+Pintor+Segrelles+1+Ontinyent+46870&zoom=16"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la tienda"
            />
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Centro+Comercial+El+Teler,+Pintor+Segrelles+1,+Ontinyent,+46870"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/>
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>
              </svg>
              Cómo llegar
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
