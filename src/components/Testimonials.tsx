import { useEffect, useState } from 'react'
import styles from './Testimonials.module.css'

const ELFSIGHT_SCRIPT_ID = 'elfsight-platform-script'
const ELFSIGHT_SCRIPT_SRC = 'https://elfsightcdn.com/platform.js'

const Testimonials = () => {
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    let isMounted = true

    const handleLoad = () => {
      const existingScript = document.getElementById(ELFSIGHT_SCRIPT_ID) as HTMLScriptElement | null
      if (existingScript) {
        existingScript.dataset.loaded = 'true'
      }
    }

    const handleError = () => {
      if (isMounted) {
        setLoadError(true)
      }
    }

    const existingScript = document.getElementById(ELFSIGHT_SCRIPT_ID) as HTMLScriptElement | null

    if (existingScript) {
      existingScript.addEventListener('load', handleLoad)
      existingScript.addEventListener('error', handleError)

      if (existingScript.dataset.loaded === 'true') {
        handleLoad()
      }
    } else {
      const script = document.createElement('script')
      script.id = ELFSIGHT_SCRIPT_ID
      script.src = ELFSIGHT_SCRIPT_SRC
      script.async = true
      script.defer = true
      script.crossOrigin = 'anonymous'
      script.addEventListener('load', handleLoad)
      script.addEventListener('error', handleError)
      document.head.appendChild(script)
    }

    return () => {
      isMounted = false
      const script = document.getElementById(ELFSIGHT_SCRIPT_ID)
      script?.removeEventListener('load', handleLoad)
      script?.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <section id="testimonios" className={styles.section}>
      <div className={styles.container}>
        {loadError ? (
          <div className={styles.fallback}>
            <p>No hemos podido cargar las reseñas en este momento.</p>
            <a
              href="https://www.google.com/search?q=%2BCarksas+rese%C3%B1as"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver reseñas en Google
            </a>
          </div>
        ) : (
          <div className="elfsight-app-02437dd1-b5c8-4557-90ae-158bd23966a4" data-elfsight-app-lazy></div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
