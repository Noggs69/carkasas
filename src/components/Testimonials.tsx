import styles from './Testimonials.module.css'

const Testimonials = () => {
  const testimonials = [
    { quote: "Instalación perfecta, sin burbujas. Vuelvo seguro.", author: "Cliente de [Barrio]" },
    { quote: "Tenían exactamente lo que buscaba. Trato local de verdad.", author: "Vecino cercano" },
    { quote: "Sin presión de venta. Te aconsejan lo que necesitas realmente.", author: "Cliente habitual" }
  ]

  return (
    <section id="prueba" className={styles.section}>
      <div className={styles.container}>
        <h2>Qué dicen de nosotros</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <article key={i} className={styles.testimonial}>
              <p className={styles.quote}>"{t.quote}"</p>
              <span>{t.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
