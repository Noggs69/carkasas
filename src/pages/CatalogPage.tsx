import Catalog from '../components/Catalog'
import styles from './CatalogPage.module.css'

const CatalogPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1>Nuestro Catálogo</h1>
        <p>Encuentra accesorios para todas las marcas y modelos</p>
      </div>
      <Catalog />
    </main>
  )
}

export default CatalogPage
