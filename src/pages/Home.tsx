import { useEffect, useMemo, useState } from 'react'
import styles from './Home.module.css'
import Testimonials from '../components/Testimonials'

type DeviceModel = {
  name: string
  available: boolean
}

type DeviceBrand = {
  name: string
  models: DeviceModel[]
}

const deviceBrands: DeviceBrand[] = [
  {
    name: 'Apple',
    models: [
      { name: 'iPhone 17', available: true },
      { name: 'iPhone 17 Pro', available: true },
      { name: 'iPhone 16', available: true },
      { name: 'iPhone 16 Pro Max', available: true },
      { name: 'iPhone 15', available: true },
      { name: 'iPhone 14', available: true },
      { name: 'iPhone SE 2022', available: true },
    ],
  },
  {
    name: 'Samsung',
    models: [
      { name: 'Galaxy S25', available: true },
      { name: 'Galaxy S24 Ultra', available: true },
      { name: 'Galaxy S23', available: true },
      { name: 'Galaxy A55', available: true },
      { name: 'Galaxy A35', available: true },
      { name: 'Galaxy Z Fold6', available: true },
    ],
  },
  {
    name: 'Xiaomi',
    models: [
      { name: 'Xiaomi 15', available: true },
      { name: 'Xiaomi 14T Pro', available: true },
      { name: 'Redmi Note 14 Pro', available: true },
      { name: 'Redmi Note 13', available: true },
      { name: 'POCO X7 Pro', available: true },
    ],
  },
  {
    name: 'Huawei',
    models: [
      { name: 'Pura 70', available: true },
      { name: 'Mate 60', available: false },
      { name: 'Nova 12', available: true },
      { name: 'P50 Pro', available: false },
    ],
  },
  {
    name: 'OPPO',
    models: [
      { name: 'Find X8', available: true },
      { name: 'Find X7', available: true },
      { name: 'Reno 12 Pro', available: true },
      { name: 'A79', available: true },
    ],
  },
  {
    name: 'Realme',
    models: [
      { name: 'GT 6', available: true },
      { name: 'GT Neo 6', available: true },
      { name: 'Realme 12 Pro+', available: true },
      { name: 'C67', available: true },
    ],
  },
  {
    name: 'Google',
    models: [
      { name: 'Pixel 9 Pro XL', available: true },
      { name: 'Pixel 9', available: true },
      { name: 'Pixel 8 Pro', available: true },
      { name: 'Pixel 8a', available: true },
      { name: 'Pixel Fold', available: false },
    ],
  },
  {
    name: 'Honor',
    models: [
      { name: 'Magic7 Pro', available: true },
      { name: 'Magic6 Lite', available: true },
      { name: 'Honor 200 Pro', available: true },
      { name: 'X9b', available: true },
    ],
  },
  {
    name: 'Motorola',
    models: [
      { name: 'Edge 50 Pro', available: true },
      { name: 'Razr 50 Ultra', available: true },
      { name: 'Moto G85', available: true },
      { name: 'Moto G55', available: true },
    ],
  },
  {
    name: 'Vivo',
    models: [
      { name: 'Vivo V30', available: true },
      { name: 'Vivo X100', available: true },
      { name: 'Vivo Y200', available: true },
      { name: 'Vivo Y100', available: false },
    ],
  },
]

const bestsellers = [
  'Funda personalizada con nombre',
  'Funda transparente antiamarilleo',
  'Cristal templado premium',
  'Pack funda + protección cámara',
]

const Home = () => {
  const [selectedBrand, setSelectedBrand] = useState(deviceBrands[0].name)
  const [modelQuery, setModelQuery] = useState('')
  const [selectedModel, setSelectedModel] = useState(deviceBrands[0].models[0].name)
  const [searchedBrand, setSearchedBrand] = useState('')
  const [searchedModel, setSearchedModel] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  const selectedBrandData = useMemo(
    () => deviceBrands.find((brand) => brand.name === selectedBrand) ?? deviceBrands[0],
    [selectedBrand]
  )

  const filteredModels = useMemo(() => {
    const query = modelQuery.trim().toLowerCase()
    return selectedBrandData.models.filter((model) => model.name.toLowerCase().includes(query))
  }, [modelQuery, selectedBrandData])

  useEffect(() => {
    if (filteredModels.length === 0) {
      if (selectedModel !== '') {
        setSelectedModel('')
      }
      return
    }

    const hasSelectedModelInResults = filteredModels.some((model) => model.name === selectedModel)

    if (!hasSelectedModelInResults) {
      setSelectedModel(filteredModels[0].name)
    }
  }, [filteredModels, selectedModel])

  const searchedBrandData = useMemo(
    () => deviceBrands.find((brand) => brand.name === searchedBrand) ?? null,
    [searchedBrand]
  )

  const searchedModelData = useMemo(
    () => searchedBrandData?.models.find((model) => model.name === searchedModel),
    [searchedBrandData, searchedModel]
  )

  const handleBrandChange = (brandName: string) => {
    const brand = deviceBrands.find((item) => item.name === brandName) ?? deviceBrands[0]
    setSelectedBrand(brand.name)
    setModelQuery('')
    setSelectedModel(brand.models.find((model) => model.available)?.name ?? brand.models[0]?.name ?? '')
    setHasSearched(false)
  }

  const handleModelSearch = (query: string) => {
    setModelQuery(query)
    setHasSearched(false)
  }

  const handleSearch = () => {
    if (!selectedModel) {
      return
    }

    setSearchedBrand(selectedBrand)
    setSearchedModel(selectedModel)
    setHasSearched(true)
  }

  const isSearchDisabled = !selectedModel || filteredModels.length === 0

  const contactLink = `https://wa.me/34637942667?text=${encodeURIComponent(
    hasSearched && searchedModelData?.available
      ? `Hola, quiero consultar una funda para ${searchedBrand} ${searchedModelData.name}.`
      : hasSearched && searchedBrandData
        ? `Hola, quiero preguntar por disponibilidad para ${searchedBrand} ${searchedModel || searchedBrand}.`
        : `Hola, quiero consultar la disponibilidad de una funda para mi móvil.`
  )}`

  return (
    <main className={styles.page}>
      <section id="inicio" className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>+Carksas · Ontinyent, España</span>
            <h1>Fundas y accesorios para todos tus dispositivos.</h1>
            <p>
              Fundas, accesorios y personalización en Ontinyent, con asesoramiento cercano
              y una presentación cuidada al detalle.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#fundas">Ver productos</a>
              <a className={styles.secondaryAction} href="#tienda-fisica">Tienda física</a>
              <a
                className={styles.secondaryAction}
                href="https://www.instagram.com/mascarksas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className={styles.heroStats}>
              <div>
                <strong>+300</strong>
                <span>modelos y acabados</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>respuesta por WhatsApp</span>
              </div>
              <div>
                <strong>Ontinyent</strong>
                <span>tienda física y asesoramiento</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCardLarge}>
              <img
                src="/images/carkasas-Apple/iphone_17/1_imagen_de_la_categor_a_apple_iphone_17.jpg"
                alt="Selección impecable de fundas para iPhone"
              />
            </div>
            <div className={styles.heroCardFloatOne}>
              <img
                src="/images/carkasas-Apple/iphone_16/2_funda_personalizada_para_iphone_16.jpg"
                alt="Funda personalizada para tu dispositivo móvil"
              />
            </div>
            <div className={styles.heroCardFloatTwo}>
              <img
                src="/images/carkasas-Apple/iphone_15/8_funda_puffy_para_iphone_15.jpg"
                alt="Accesorio para móvil"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="fundas" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Buscador de compatibilidad</span>
          <h2>Comprueba en segundos si trabajamos con tu móvil.</h2>
          <p>
            Selecciona la marca, busca tu modelo y te confirmamos al instante si podemos ayudarte.
          </p>
        </div>
        <div className={styles.deviceFinder}>
          <div className={styles.deviceFinderControls}>
            <label className={styles.field}>
              <span>Marca</span>
              <select
                value={selectedBrand}
                onChange={(event) => handleBrandChange(event.target.value)}
                className={styles.select}
              >
                {deviceBrands.map((brand) => (
                  <option key={brand.name} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.field}>
              <span>Buscar modelo</span>
              <input
                type="search"
                value={modelQuery}
                onChange={(event) => handleModelSearch(event.target.value)}
                placeholder={`Ej. ${selectedBrandData.models[0]?.name ?? 'Tu modelo'}`}
                className={styles.input}
              />
            </label>

            <label className={styles.field}>
              <span>Modelo disponible</span>
              <select
                value={selectedModel}
                onChange={(event) => setSelectedModel(event.target.value)}
                className={styles.select}
              >
                {filteredModels.length > 0 ? (
                  filteredModels.map((model) => (
                    <option key={model.name} value={model.name}>
                      {model.name}
                    </option>
                  ))
                ) : (
                  <option value="">No hay coincidencias</option>
                )}
              </select>
            </label>

            <button type="button" className={styles.searchAction} onClick={handleSearch} disabled={isSearchDisabled}>
              Buscar
            </button>
          </div>

          <article className={styles.deviceResult}>
            <div className={styles.deviceResultHeader}>
              <span className={styles.customBadge}>Comprobación rápida</span>
              <h3>
                {!hasSearched
                  ? 'Selecciona marca y modelo y pulsa Buscar.'
                  : !searchedModelData && searchedBrandData
                    ? 'No hemos encontrado coincidencias para esta búsqueda.'
                    : searchedModelData?.available
                  ? '¡Sí! Trabajamos con fundas para este modelo.'
                  : 'Actualmente no trabajamos con este modelo.'}
              </h3>
              <p>
                {!hasSearched
                  ? 'El botón Buscar confirma la disponibilidad y nos ayuda a atenderte mejor por WhatsApp.'
                  : !searchedModelData && searchedBrandData
                    ? 'Prueba con otro término o escríbenos por WhatsApp para que lo revisemos contigo.'
                    : searchedModelData?.available
                    ? `Tenemos soluciones para ${searchedBrand} ${searchedModelData.name}. Escríbenos y te atendemos personalmente.`
                    : 'Si tienes cualquier duda, puedes escribirnos por WhatsApp y te orientamos sobre alternativas compatibles.'}
              </p>
            </div>

            <div className={styles.deviceResultMeta}>
              <div>
                <strong>Marca</strong>
                <span>{hasSearched ? searchedBrand : 'Pendiente'}</span>
              </div>
              <div>
                <strong>Modelo</strong>
                <span>{!hasSearched ? 'Pendiente' : searchedModelData?.name ?? 'Sin coincidencia'}</span>
              </div>
              <div>
                <strong>Estado</strong>
                <span>{!hasSearched ? 'Sin buscar' : !searchedModelData ? 'No encontrado' : searchedModelData.available ? 'Disponible' : 'No disponible'}</span>
              </div>
            </div>

            <div className={styles.deviceResultActions}>
              <a href={contactLink} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
                Hablar por WhatsApp
              </a>
              <span className={styles.deviceHint}>
                No mostramos catálogo directo: te guiamos por WhatsApp para cerrar la compra correctamente.
              </span>
            </div>
          </article>
        </div>
      </section>


      <section id="personalizadas" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Bestsellers y ofertas</span>
          <h2>Los favoritos que mejor convierten en tienda.</h2>
          <p>Productos con demanda constante, visualmente atractivos y fáciles de recomendar.</p>
        </div>
        <div className={styles.offerGrid}>
          {bestsellers.map((item, index) => (
            <article key={item} className={styles.offerCard}>
              <span className={styles.offerIndex}>0{index + 1}</span>
              <h3>{item}</h3>
              <p>Diseñado para ofrecer un equilibrio fuerte entre protección, estilo y precio.</p>
            </article>
          ))}
        </div>
      </section>

      <Testimonials />

      <section id="tienda-fisica" className={styles.section}>
        <div className={styles.storeLayout}>
          <div className={styles.storeGallery}>
            <img src="/images/local/foto-izquierda.jpeg" alt="Interior de la tienda +Carksas" />
            <img src="/images/local/foto-lateral.jpeg" alt="Vista lateral de la tienda +Carksas" />
          </div>
          <div className={styles.storeInfo}>
            <span className={styles.sectionLabel}>Tienda física / Contacto</span>
            <h2>Visitarnos en Ontinyent es la mejor forma de ver acabados y sentir la calidad.</h2>
            <p>
              Centro Comercial El Teler, Pintor Segrelles 1, local 114. Atención cercana, catálogo actualizado y soporte inmediato.
            </p>
            <div className={styles.storeMeta}>
              <div>
                <strong>Horario</strong>
                <span>Lunes a sábado · 10:00 - 14:00 / 17:00 - 21:00</span>
              </div>
              <div>
                <strong>Contacto</strong>
                <span>+34 637 94 26 67</span>
              </div>
            </div>
            <div className={styles.storeActions}>
              <a href="https://wa.me/34637942667" target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
                WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Centro+Comercial+El+Teler,+Pintor+Segrelles+1,+Ontinyent,+46870"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryAction}
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
