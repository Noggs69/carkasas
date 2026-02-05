import styles from './Testimonials.module.css'

const Testimonials = () => {
  const testimonials = [
    { quote: "Tiene bastantes modelos de carcasas para móviles. La empleada muy amable y atenta.", author: "Jose Luis Moreno", rating: 5, link: "https://share.google/72nAlnLk1eO4iDcRB" },
    { quote: "Super! La atención necesitaba un cargador y me lo facilitaron gracias!!", author: "Cristian González", rating: 5, link: "https://share.google/OLLYgQQGP50ibxXbg" },
    { quote: "Excelente servicio y atención al cliente.", author: "Ernesto Calatayud", rating: 5, link: "https://www.google.com/search?sca_esv=f553bdcaa43fd66a&sxsrf=ANbL-n6I-ZN0eF7oD1SkZJd_lswRX4DMKQ:1770278195584&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZWvP2_am0_Qbd9jcb0imWfpxucVESqpXtdkO2PWmVZPTW6X3IzW6DnD4xHjUPWRhReUc3JlscVdVOBxFKIZ38__KnsU&q=Mascarksas+Rese%C3%B1as&sa=X&ved=2ahUKEwiFnIGY8MGSAxXzKvsDHdOyHuwQ0bkNegQIKxAF&biw=1920&bih=953&dpr=1&aic=0" }
  ]

  return (
    <section id="prueba" className={styles.section}>
      <div className={styles.container}>
        <h2>Qué dicen de nosotros</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <article key={i} className={styles.testimonial}>
              <div className={styles.stars}>
                {[...Array(t.rating)].map((_, index) => (
                  <span key={index} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.authorSection}>
                <span className={styles.author}>{t.author}</span>
                <a 
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewReview}
                >
                  Ver reseña
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.reviewsButton}>
          <a 
            href="https://www.google.com/search?sca_esv=f553bdcaa43fd66a&sxsrf=ANbL-n6I-ZN0eF7oD1SkZJd_lswRX4DMKQ:1770278195584&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZWvP2_am0_Qbd9jcb0imWfpxucVESqpXtdkO2PWmVZPTW6X3IzW6DnD4xHjUPWRhReUc3JlscVdVOBxFKIZ38__KnsU&q=Mascarksas+Rese%C3%B1as&sa=X&ved=2ahUKEwiFnIGY8MGSAxXzKvsDHdOyHuwQ0bkNegQIKxAF&biw=1920&bih=953&dpr=1&aic=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleButton}
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
