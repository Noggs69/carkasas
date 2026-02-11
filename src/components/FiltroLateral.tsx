import React from "react";
import styles from "./FiltroLateral.module.css";

interface ColorOption {
  name: string;
  hex: string;
}

interface FiltroLateralProps {
  categorias: string[];
  marcas: string[];
  materiales: string[];
  colores: ColorOption[];
  rangoPrecio: [number, number];
  filtros: {
    categoria: string | null;
    marca: string | null;
    material: string | null;
    colores: string[];
    precio: [number, number];
  };
  onFiltroChange: (nuevo: Partial<FiltroLateralProps["filtros"]>) => void;
  onReset: () => void;
}

const FiltroLateral: React.FC<FiltroLateralProps> = ({
  categorias,
  marcas,
  materiales,
  colores,
  rangoPrecio,
  filtros,
  onFiltroChange,
  onReset,
}) => {
  // Estado para acordeones y Drawer móvil
  const [open, setOpen] = React.useState({
    categoria: true,
    marca: true,
    material: false,
    colores: true,
    precio: true,
  });


  const handleAccordion = (key: keyof typeof open) => {
    setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };



  // Slider de precio
  const [localPrecio, setLocalPrecio] = React.useState<[number, number]>(filtros.precio);
  React.useEffect(() => { setLocalPrecio(filtros.precio); }, [filtros.precio]);

  // Render principal
  const sidebarContent = (
    <aside className={styles.sidebarFilters}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <span className="font-bold text-lg" style={{ color: 'var(--text, #222)' }}>Filtros</span>
        <button className={styles.resetButton} onClick={onReset}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M18 6L6 18M6 6l12 12"/></svg>
          Limpiar
        </button>
      </div>
      {/* Categoría */}
      <div className={styles.filterSection}>
        <div className={styles.filterTitle} onClick={() => handleAccordion('categoria')}>
          <span>Categoría</span>
          <span>{open.categoria ? '▲' : '▼'}</span>
        </div>
        {open.categoria && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
            {categorias.map(cat => (
              <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input
                  type="radio"
                  checked={filtros.categoria === cat}
                  onChange={() => onFiltroChange({ categoria: filtros.categoria === cat ? null : cat })}
                  style={{ accentColor: 'var(--accent, #ff3b6b)' }}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      {/* Marca */}
      <div className={styles.filterSection}>
        <div className={styles.filterTitle} onClick={() => handleAccordion('marca')}>
          <span>Marca</span>
          <span>{open.marca ? '▲' : '▼'}</span>
        </div>
        {open.marca && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
            {marcas.map(marca => (
              <label key={marca} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input
                  type="radio"
                  checked={filtros.marca === marca}
                  onChange={() => onFiltroChange({ marca: filtros.marca === marca ? null : marca })}
                  style={{ accentColor: 'var(--accent, #ff3b6b)' }}
                />
                <span>{marca}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      {/* Material */}
      <div className={styles.filterSection}>
        <div className={styles.filterTitle} onClick={() => handleAccordion('material')}>
          <span>Material</span>
          <span>{open.material ? '▲' : '▼'}</span>
        </div>
        {open.material && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
            {materiales.map(mat => (
              <label key={mat} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input
                  type="radio"
                  checked={filtros.material === mat}
                  onChange={() => onFiltroChange({ material: filtros.material === mat ? null : mat })}
                  style={{ accentColor: 'var(--accent, #ff3b6b)' }}
                />
                <span>{mat}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      {/* Colores */}
      <div className={styles.filterSection}>
        <div className={styles.filterTitle} onClick={() => handleAccordion('colores')}>
          <span>Colores</span>
          <span>{open.colores ? '▲' : '▼'}</span>
        </div>
        {open.colores && (
          <div className={styles.swatchRow}>
            {colores.map(color => (
              <button
                key={color.name}
                className={
                  styles.swatch +
                  (filtros.colores.includes(color.name) ? ' ' + styles.selected : '')
                }
                style={{ background: color.hex }}
                title={color.name}
                aria-label={color.name}
                onClick={() => {
                  if (filtros.colores.includes(color.name)) {
                    onFiltroChange({ colores: filtros.colores.filter(c => c !== color.name) });
                  } else {
                    onFiltroChange({ colores: [...filtros.colores, color.name] });
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>
      {/* Precio */}
      <div className={styles.filterSection}>
        <div className={styles.filterTitle} onClick={() => handleAccordion('precio')}>
          <span>Precio</span>
          <span>{open.precio ? '▲' : '▼'}</span>
        </div>
        {open.precio && (
          <div className={styles.priceSlider}>
            <div className={styles.priceInputs}>
              <input
                type="number"
                min={rangoPrecio[0]}
                max={localPrecio[1]}
                value={localPrecio[0]}
                onChange={e => {
                  const val = Number(e.target.value);
                  setLocalPrecio([val, localPrecio[1]]);
                  onFiltroChange({ precio: [val, localPrecio[1]] });
                }}
                style={{ width: 60, borderRadius: 6, border: '1px solid #e0e0e0', padding: '2px 6px' }}
              />
              <span>-</span>
              <input
                type="number"
                min={localPrecio[0]}
                max={rangoPrecio[1]}
                value={localPrecio[1]}
                onChange={e => {
                  const val = Number(e.target.value);
                  setLocalPrecio([localPrecio[0], val]);
                  onFiltroChange({ precio: [localPrecio[0], val] });
                }}
                style={{ width: 60, borderRadius: 6, border: '1px solid #e0e0e0', padding: '2px 6px' }}
              />
              <span>€</span>
            </div>
            <input
              type="range"
              min={rangoPrecio[0]}
              max={rangoPrecio[1]}
              value={localPrecio[0]}
              onChange={e => {
                const val = Number(e.target.value);
                setLocalPrecio([val, localPrecio[1]]);
                onFiltroChange({ precio: [val, localPrecio[1]] });
              }}
              style={{ width: '100%', accentColor: 'var(--accent, #ff3b6b)' }}
            />
            <input
              type="range"
              min={rangoPrecio[0]}
              max={rangoPrecio[1]}
              value={localPrecio[1]}
              onChange={e => {
                const val = Number(e.target.value);
                setLocalPrecio([localPrecio[0], val]);
                onFiltroChange({ precio: [localPrecio[0], val] });
              }}
              style={{ width: '100%', accentColor: 'var(--accent, #ff3b6b)' }}
            />
          </div>
        )}
      </div>
    </aside>
  );

  // Drawer móvil eliminado, control solo desde Catalog.tsx
  return sidebarContent;
};

export default FiltroLateral;
