import { useState } from 'react'
import PhoneSimulator from '../components/PhoneSimulator'
import styles from './SimulatorPage.module.css'

// Lista de teléfonos disponibles (basado en tu catálogo)
const phones = [
  // Apple
  { id: 'iphone_11', name: 'iPhone 11', brand: 'Apple' },
  { id: 'iphone_12', name: 'iPhone 12', brand: 'Apple' },
  { id: 'iphone_13', name: 'iPhone 13', brand: 'Apple' },
  { id: 'iphone_14', name: 'iPhone 14', brand: 'Apple' },
  { id: 'iphone_15', name: 'iPhone 15', brand: 'Apple' },
  { id: 'iphone_16', name: 'iPhone 16', brand: 'Apple' },
  { id: 'iphone_se_2022', name: 'iPhone SE (2022)', brand: 'Apple' },
  // Samsung
  { id: 'galaxy_s24', name: 'Galaxy S24', brand: 'Samsung' },
  { id: 'galaxy_s23', name: 'Galaxy S23', brand: 'Samsung' },
  { id: 'galaxy_s22', name: 'Galaxy S22', brand: 'Samsung' },
  // Xiaomi
  { id: 'xiaomi_14', name: 'Xiaomi Mi 14', brand: 'Xiaomi' },
  { id: 'redmi_note_13', name: 'Redmi Note 13', brand: 'Xiaomi' },
]

const SimulatorPage = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedPhone, setSelectedPhone] = useState<string | null>(null)
  
  const brands = Array.from(new Set(phones.map(p => p.brand)))
  const filteredPhones = selectedBrand 
    ? phones.filter(p => p.brand === selectedBrand)
    : []

  if (selectedPhone) {
    const phone = phones.find(p => p.id === selectedPhone)
    return (
      <main className={styles.page}>
        <div className={styles.header}>
          <button 
            className={styles.backLink}
            onClick={() => setSelectedPhone(null)}
          >
            ← Volver a selección
          </button>
          <h1>{phone?.name}</h1>
          <p>Visualiza cómo quedará tu funda</p>
        </div>
        <PhoneSimulator phoneId={selectedPhone} />
      </main>
    )
  }

  if (selectedBrand) {
    return (
      <main className={styles.page}>
        <div className={styles.header}>
          <button 
            className={styles.backLink}
            onClick={() => setSelectedBrand(null)}
          >
            ← Volver a marcas
          </button>
          <h1>Selecciona tu {selectedBrand}</h1>
        </div>
        <div className={styles.phoneGrid}>
          {filteredPhones.map(phone => (
            <button
              key={phone.id}
              className={styles.phoneCard}
              onClick={() => setSelectedPhone(phone.id)}
            >
              <div className={styles.phoneIcon}>📱</div>
              <h3>{phone.name}</h3>
            </button>
          ))}
        </div>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1>Simulador de Fundas 3D</h1>
        <p>Elige tu marca de teléfono para comenzar</p>
      </div>
      <div className={styles.brandGrid}>
        {brands.map(brand => (
          <button
            key={brand}
            className={styles.brandCard}
            onClick={() => setSelectedBrand(brand)}
          >
            <div className={styles.brandIcon}>
              {brand === 'Apple' && (
                <svg viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z" fill="currentColor"/>
                </svg>
              )}
              {brand === 'Samsung' && (
                <img src="https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_4.png?$512_N_PNG$" alt="Samsung" />
              )}
              {brand === 'Xiaomi' && (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/512px-Xiaomi_logo.svg.png" alt="Xiaomi" />
              )}
            </div>
            <h2>{brand}</h2>
            <span>{phones.filter(p => p.brand === brand).length} modelos</span>
          </button>
        ))}
      </div>
    </main>
  )
}

export default SimulatorPage
