import { useParams } from 'react-router-dom';
import { products } from '../components/Catalog';
import styles from './ProductPage.module.css';
import { useMemo, useState } from 'react';

const badges = [
  { icon: '🛡️', label: 'Carcasa Antideslizante' },
  { icon: '✂️', label: 'Corte Preciso' },
  { icon: '🦾', label: 'Laterales Reforzados' },
  { icon: '🛡️', label: 'Resistente a Golpes y Arañazos' },
  { icon: '📱', label: 'Silicona Flexible' },
];

const ProductPage = () => {
  const { brand, model } = useParams();
  const normalizedModel = (model || '').replace(/-/g, ' ').toLowerCase();
  const normalizedBrand = (brand || '').replace(/-/g, ' ').toLowerCase();
  const product = useMemo(() =>
    products.find((p: any) =>
      p.name.toLowerCase().replace(/ /g, '-') === normalizedModel.replace(/ /g, '-') &&
      p.brand.toLowerCase().replace(/ /g, '-') === normalizedBrand.replace(/ /g, '-')
    ),
    [normalizedModel, normalizedBrand]
  );


  const [mainImg, setMainImg] = useState(product?.image || '');
  const [selectedMaterial, setSelectedMaterial] = useState(product?.materials?.[0] || '');

  if (!product) {
    return <main className={styles.productPageContainer}><h2>Producto no encontrado</h2></main>;
  }

  return (
    <main className={styles.productPageContainer}>
      <section className={styles.productImageSection}>
        <img className={styles.mainImage} src={mainImg} alt={product.name} />
        <div className={styles.thumbnails}>
          {[product.image, ...product.images.filter((img: string) => img !== product.image)].map((img: string, idx: number) => (
            <img
              key={idx}
              src={img}
              alt={product.name + ' miniatura ' + idx}
              className={mainImg === img ? styles.thumbnail + ' ' + styles.selected : styles.thumbnail}
              onClick={() => setMainImg(img)}
            />
          ))}
        </div>
        <div style={{ marginTop: 18, width: '100%' }}>
          <strong>Colores disponibles:</strong>
          <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
            {product.colors.map((color: any, idx: number) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: color.hex, display: 'inline-block', border: '1px solid #ccc' }} title={color.name}></span>
                <span>{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.productInfoSection}>
        <div>
          <div className={styles.productTitle}>{product.name}</div>
          <div className={styles.productBrand}>{product.brand}</div>
          <div className={styles.productDescription}>{product.info}</div>
        </div>
        {product.materials && product.materials.length > 0 && (
          <div className={styles.section} style={{ marginTop: 0 }}>
            <div className={styles.sectionTitle}>Material de la funda</div>
            <select
              value={selectedMaterial}
              onChange={e => setSelectedMaterial(e.target.value)}
              style={{
                marginTop: 8,
                padding: '10px 16px',
                borderRadius: 8,
                border: '1.5px solid var(--accent)',
                background: 'var(--bg-soft)',
                color: 'var(--text)',
                fontWeight: 600,
                fontSize: '1rem',
                outline: 'none',
                cursor: 'pointer',
                minWidth: 180,
                maxWidth: 260,
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
              }}
            >
              {product.materials.map((mat: string) => (
                <option key={mat} value={mat}>{mat}</option>
              ))}
            </select>
          </div>
        )}
        <div className={styles.badges}>
          {badges.map((badge, idx) => (
            <span className={styles.badge} key={idx}>
              <span>{badge.icon}</span> {badge.label}
            </span>
          ))}
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Descripción del producto</div>
          <div className={styles.sectionContent}>{product.info || 'Sin descripción.'}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Detalles del producto</div>
          <div className={styles.sectionContent}>
            Marca: {product.brand}<br />
            Modelo: {product.name}<br />
            Colores: {product.colors.map((c: any) => c.name).join(', ')}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;