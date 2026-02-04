import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ImageSlider.module.css'

const ImageSlider = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=400&fit=crop',
      title: 'Protección Premium',
      subtitle: 'Las mejores fundas para tu móvil',
      link: '/catalogo',
      buttonText: 'Ver Catálogo'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&h=400&fit=crop',
      title: 'Amplio Catálogo',
      subtitle: 'Modelos para todas las marcas',
      link: '/catalogo',
      buttonText: 'Explorar Productos'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=1200&h=400&fit=crop',
      title: 'Instalación Profesional',
      subtitle: 'Servicio experto en tienda',
      link: '/servicios',
      buttonText: 'Nuestros Servicios'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1200&h=400&fit=crop',
      title: 'Stock Disponible',
      subtitle: 'Llévate tu funda hoy mismo',
      link: '/contacto',
      buttonText: 'Visítanos'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.slideContent}>
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <Link to={slide.link} className={styles.slideButton}>
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.sliderButton} ${styles.prev}`}
          onClick={prevSlide}
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          className={`${styles.sliderButton} ${styles.next}`}
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          ›
        </button>

        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageSlider
