import Services from '../components/Services'
import Process from '../components/Process'
import styles from './ServicesPage.module.css'

const ServicesPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1>Nuestros Servicios</h1>
        <p>Instalación perfecta y asesoramiento experto</p>
      </div>
      <Process />
      <Services />
    </main>
  )
}

export default ServicesPage
