import { useMemo, useState } from 'react'
import styles from './Catalog.module.css'

type Product = {
  id: number
  name: string
  brand: string
  image: string
  price?: number
  info?: string
}

const Catalog = () => {
  const products: Product[] = [
    { id: 1, name: 'iPhone 15 Pro Max', brand: 'iPhone', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=800&fit=crop', price: 29.99, info: 'Funda de silicona premium.' },
    { id: 2, name: 'iPhone 15 Pro', brand: 'iPhone', image: 'https://images.unsplash.com/photo-1609707236989-ee95e93df76d?w=800&h=800&fit=crop', price: 24.99 },
    { id: 3, name: 'iPhone 15', brand: 'iPhone', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=800&fit=crop', price: 19.99 },
    { id: 4, name: 'Samsung Galaxy S24', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=800&h=800&fit=crop', price: 24.99 },
    { id: 5, name: 'Galaxy A54', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop', price: 14.99 },
    { id: 6, name: 'Xiaomi 14', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=800&fit=crop', price: 17.99 },
    { id: 7, name: 'Redmi Note 13', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop', price: 12.99 },
    { id: 8, name: 'Oppo Find X6', brand: 'Oppo', image: 'https://images.unsplash.com/photo-1511338941349-3c1029d9f25f?w=800&h=800&fit=crop', price: 21.99 },
    { id: 9, name: 'Motorola Edge 50 Pro', brand: 'Motorola', image: 'https://images.unsplash.com/photo-1606933248051-5ce9bebdc31e?w=800&h=800&fit=crop', price: 23.99 },
  ]

  const brands = useMemo(() => Array.from(new Set(products.map(p => p.brand))), [products])

  const [activeBrand, setActiveBrand] = useState<string | null>(null)
  const [activeModelType, setActiveModelType] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const brandTypes: Record<string, string[]> = {
    iPhone: ['15 Pro Max', '15 Pro', '15'],
    Samsung: ['Galaxy S24', 'A54'],
    Xiaomi: ['14', 'Redmi Note 13'],
    Oppo: ['Find X6'],
    Motorola: ['Edge 50 Pro'],
  }

  const filteredProducts = useMemo(() => {
    let result = products.slice()
    if (activeBrand) result = result.filter(p => p.brand === activeBrand)
    if (activeModelType) result = result.filter(p => p.name.includes(activeModelType))
    return result
  }, [products, activeBrand, activeModelType])

  const openWhatsApp = (productName: string) => {
    const text = `Hola, quiero consultar el modelo: ${productName}`
    window.open(`https://wa.me/000000000?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2>¿Tienes tu modelo?</h2>
          <p className={styles.lead}>Selecciona la marca y el modelo para ver la funda.</p>
        </header>

        <div className={styles.brandsRow}>
          {brands.map(brand => (
            <button
              key={brand}
              className={`${styles.brandButton} ${activeBrand === brand ? styles.activeBrand : ''}`}
              onClick={() => { setActiveBrand(brand); setActiveModelType(''); setSelectedProduct(null) }}
            >
              {brand}
            </button>
          ))}
        </div>

        {activeBrand && (
          <div className={styles.typeRow}>
            <select
              className={styles.select}
              value={activeModelType}
              onChange={e => setActiveModelType(e.target.value)}
            >
              <option value="">Todos los modelos</option>
              {(brandTypes[activeBrand] || []).map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        )}

        <div className={styles.productsGrid}>
          {filteredProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productMain}>
                <div>
                  <h4>{product.name}</h4>
                  <p className={styles.brand}>{product.brand}</p>
                </div>
                <img src={product.image} alt={product.name} className={styles.productImageSmall} />
              </div>

              <div className={styles.priceRow}>
                <span className={styles.price}>{product.price ? product.price.toFixed(2) + '€' : ''}</span>
                <button className={styles.button} onClick={() => setSelectedProduct(product)}>Ver</button>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <>
            <div className={styles.overlay} onClick={() => setSelectedProduct(null)} />
            <div className={styles.infoBox} role="dialog" aria-labelledby="product-title">
              <button className={styles.closeButton} onClick={() => setSelectedProduct(null)} aria-label="Cerrar">×</button>
              <img src={selectedProduct.image} className={styles.infoImage} alt={selectedProduct.name} />
              <div className={styles.infoDetails}>
                <h3 id="product-title">{selectedProduct.name}</h3>
                <p className={styles.infoPrice}>{selectedProduct.price ? selectedProduct.price.toFixed(2) + '€' : ''}</p>
                <p className={styles.infoText}>{selectedProduct.info}</p>
                <p className={styles.infoAnnouncement}><strong>Anuncio:</strong> Funda disponible en varios colores y materiales.</p>
                <div className={styles.infoActions}>
                  <button className={styles.button} onClick={() => openWhatsApp(selectedProduct.name)}>Consultar por WhatsApp</button>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  )
}

export default Catalog
