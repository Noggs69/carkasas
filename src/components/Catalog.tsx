import { useMemo, useState } from 'react'
import styles from './Catalog.module.css'

type Product = {
  id: number
  name: string
  brand: string
  image: string
  images: string[]
  price?: number
  info?: string
  colors: { name: string; hex: string }[]
}

const Catalog = () => {
  const products: Product[] = [
    // Apple iPhone
    { id: 1, name: 'iPhone 11', brand: 'Apple', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda de protección completa con diseño elegante.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Transparente', hex: '#f5f5f5' }, { name: 'Rojo', hex: '#dc143c' }] },
    { id: 2, name: 'iPhone 12', brand: 'Apple', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Funda slim con soporte MagSafe.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Azul', hex: '#1e3a5f' }, { name: 'Verde', hex: '#4a7c59' }] },
    { id: 3, name: 'iPhone 13', brand: 'Apple', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Carcasa de silicona premium resistente.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Rosa', hex: '#ffc0cb' }, { name: 'Azul Claro', hex: '#87ceeb' }] },
    { id: 4, name: 'iPhone 14', brand: 'Apple', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Funda antigolpes con bordes reforzados.', colors: [{ name: 'Negro', hex: '#1c1c1e' }, { name: 'Morado', hex: '#9370db' }, { name: 'Blanco', hex: '#f5f5f5' }] },
    { id: 5, name: 'iPhone 15', brand: 'Apple', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Funda de cuero sintético elegante.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Marrón', hex: '#8b4513' }, { name: 'Azul Marino', hex: '#000080' }] },
    { id: 6, name: 'iPhone 16', brand: 'Apple', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Protección premium con MagSafe integrado.', colors: [{ name: 'Titanio', hex: '#778899' }, { name: 'Oro', hex: '#ffd700' }, { name: 'Negro', hex: '#1a1a1a' }] },
    { id: 7, name: 'iPhone 17', brand: 'Apple', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Última generación de protección iPhone.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Blanco', hex: '#ffffff' }, { name: 'Azul', hex: '#4169e1' }] },
    { id: 8, name: 'iPhone SE (2ª Gen)', brand: 'Apple', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda compacta y resistente.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Rojo', hex: '#ff0000' }] },
    { id: 9, name: 'iPhone SE (3ª Gen)', brand: 'Apple', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Protección actualizada para SE.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Blanco', hex: '#f5f5f5' }] },
    
    // Samsung
    { id: 10, name: 'Galaxy S10', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Funda transparente ultrafina.', colors: [{ name: 'Transparente', hex: '#ffffff' }, { name: 'Negro', hex: '#000000' }] },
    { id: 11, name: 'Galaxy S20', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Protección completa con estilo.', colors: [{ name: 'Azul', hex: '#4169e1' }, { name: 'Negro', hex: '#1a1a1a' }] },
    { id: 12, name: 'Galaxy S21', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Carcasa de silicona premium.', colors: [{ name: 'Violeta', hex: '#9370db' }, { name: 'Negro', hex: '#000000' }, { name: 'Blanco', hex: '#f5f5f5' }] },
    { id: 13, name: 'Galaxy S22', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda con protección de cámara.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Rosa Gold', hex: '#b76e79' }] },
    { id: 14, name: 'Galaxy S23', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Diseño moderno y resistente.', colors: [{ name: 'Lavanda', hex: '#e6e6fa' }, { name: 'Negro', hex: '#000000' }, { name: 'Verde', hex: '#228b22' }] },
    { id: 15, name: 'Galaxy S24', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Funda de última generación.', colors: [{ name: 'Menta', hex: '#98ff98' }, { name: 'Coral', hex: '#ff7f50' }, { name: 'Negro', hex: '#1a1a1a' }] },
    { id: 16, name: 'Galaxy S25', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Protección avanzada S25.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Blanco', hex: '#ffffff' }] },
    { id: 17, name: 'Galaxy S26', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Funda futurista para S26.', colors: [{ name: 'Titanio', hex: '#708090' }, { name: 'Negro', hex: '#1a1a1a' }] },
    { id: 18, name: 'Galaxy Note 10', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Compatible con S-Pen.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#1e90ff' }] },
    { id: 19, name: 'Galaxy Note 20', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Funda premium para Note 20.', colors: [{ name: 'Bronce', hex: '#cd7f32' }, { name: 'Negro', hex: '#1a1a1a' }] },
    { id: 20, name: 'Galaxy Z Fold', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Protección para plegable.', colors: [{ name: 'Negro', hex: '#000000' }] },
    { id: 21, name: 'Galaxy Z Fold 2', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda especial plegable.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Bronce', hex: '#b87333' }] },
    { id: 22, name: 'Galaxy Z Fold 3', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Protección avanzada Fold 3.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Verde', hex: '#2e8b57' }] },
    { id: 23, name: 'Galaxy Z Fold 4', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Fold 4 resistente.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Beige', hex: '#f5f5dc' }] },
    { id: 24, name: 'Galaxy Z Fold 5', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Fold 5 premium.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#4682b4' }] },
    { id: 25, name: 'Galaxy Z Fold 6', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Última gen Fold 6.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Plata', hex: '#c0c0c0' }] },
    { id: 26, name: 'Galaxy Z Fold 7', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Fold 7 innovadora.', colors: [{ name: 'Negro', hex: '#000000' }] },
    { id: 27, name: 'Galaxy Z Flip', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Protección compacta Flip.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Morado', hex: '#9370db' }] },
    { id: 28, name: 'Galaxy Z Flip 2', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Flip 2 elegante.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Blanco', hex: '#ffffff' }] },
    { id: 29, name: 'Galaxy Z Flip 3', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Flip 3 con estilo.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Lavanda', hex: '#e6e6fa' }, { name: 'Verde', hex: '#90ee90' }] },
    { id: 30, name: 'Galaxy Z Flip 4', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Flip 4.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Rosa', hex: '#ffb6c1' }] },
    { id: 31, name: 'Galaxy Z Flip 5', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Flip 5 moderna.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Menta', hex: '#98ff98' }] },
    { id: 32, name: 'Galaxy Z Flip 6', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Flip 6 premium.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Amarillo', hex: '#ffd700' }] },
    { id: 33, name: 'Galaxy Z Flip 7', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Última gen Flip 7.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#4169e1' }] },
    { id: 34, name: 'Galaxy A Series', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas para toda la serie A (A10-A90).', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#4169e1' }, { name: 'Rosa', hex: '#ff69b4' }] },
    { id: 35, name: 'Galaxy M Series', brand: 'Samsung', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas para serie M (M10-M54).', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Azul', hex: '#1e90ff' }] },
    
    // Xiaomi
    { id: 36, name: 'Xiaomi Mi 9', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Mi 9 resistente.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Transparente', hex: '#f5f5f5' }] },
    { id: 37, name: 'Xiaomi Mi 10', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Mi 10 completa.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Azul', hex: '#4169e1' }] },
    { id: 38, name: 'Xiaomi Mi 11', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Mi 11 premium.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Verde', hex: '#32cd32' }] },
    { id: 39, name: 'Xiaomi Mi 12', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Mi 12 con estilo.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Gris', hex: '#808080' }] },
    { id: 40, name: 'Xiaomi Mi 13', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Mi 13 moderna.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Blanco', hex: '#ffffff' }] },
    { id: 41, name: 'Xiaomi Mi 14', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Mi 14 avanzada.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Azul Eléctrico', hex: '#00bfff' }] },
    { id: 42, name: 'Xiaomi Mi 15', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Mi 15 última gen.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Rojo', hex: '#ff0000' }] },
    { id: 43, name: 'Xiaomi Mi 16', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Mi 16 futurista.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Plata', hex: '#c0c0c0' }] },
    { id: 44, name: 'Xiaomi Mi 17', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Mi 17 innovadora.', colors: [{ name: 'Negro', hex: '#000000' }] },
    { id: 45, name: 'Redmi Note 8', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Note 8 económica.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Azul', hex: '#4682b4' }] },
    { id: 46, name: 'Redmi Note 9', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Note 9 protección completa.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Verde', hex: '#228b22' }] },
    { id: 47, name: 'Redmi Note 10', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Note 10 resistente.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Gris', hex: '#696969' }] },
    { id: 48, name: 'Redmi Note 11', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Note 11 con estilo.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#1e90ff' }] },
    { id: 49, name: 'Redmi Note 12', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Note 12.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Rosa', hex: '#ffb6c1' }] },
    { id: 50, name: 'Redmi Note 13', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Note 13 moderna.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Morado', hex: '#8a2be2' }] },
    { id: 51, name: 'Redmi Note 14', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Note 14 última gen.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Verde Lima', hex: '#32cd32' }] },
    { id: 52, name: 'Redmi Note 15', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Note 15.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Naranja', hex: '#ff8c00' }] },
    { id: 53, name: 'POCO Series', brand: 'Xiaomi', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas POCO (C, M, X, F Series).', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Amarillo', hex: '#ffd700' }, { name: 'Azul', hex: '#4169e1' }] },
    
    // OPPO
    { id: 54, name: 'Find X2', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Find X2 premium.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#191970' }] },
    { id: 55, name: 'Find X3', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Find X3.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Blanco', hex: '#f5f5f5' }] },
    { id: 56, name: 'Find X4', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Find X4 elegante.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Plateado', hex: '#c0c0c0' }] },
    { id: 57, name: 'Find X5', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Find X5 con estilo.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Verde', hex: '#2e8b57' }] },
    { id: 58, name: 'Find X6', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Find X6.', colors: [{ name: 'Negro', hex: '#0d0d0d' }, { name: 'Rosa Gold', hex: '#b76e79' }] },
    { id: 59, name: 'Find X7', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Find X7 moderna.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#4169e1' }] },
    { id: 60, name: 'Find X8', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Find X8 última gen.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Gris', hex: '#708090' }] },
    { id: 61, name: 'Find X8 Pro', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Protección X8 Pro premium.', colors: [{ name: 'Negro Mate', hex: '#1a1a1a' }, { name: 'Dorado', hex: '#ffd700' }] },
    { id: 62, name: 'Find N Series', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Find N (N, N2, N3).', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Blanco', hex: '#ffffff' }] },
    { id: 63, name: 'Find Flip', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Find Flip plegable.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Morado', hex: '#9370db' }] },
    { id: 64, name: 'Reno Series', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Reno (2-14).', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#1e90ff' }, { name: 'Rosa', hex: '#ff69b4' }] },
    { id: 65, name: 'OPPO A Series', brand: 'OPPO', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas para serie A.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Verde', hex: '#32cd32' }] },
    
    // vivo
    { id: 66, name: 'vivo X50', brand: 'vivo', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda X50 elegante.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#4169e1' }] },
    { id: 67, name: 'vivo X60', brand: 'vivo', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Protección X60 premium.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Naranja', hex: '#ff8c00' }] },
    { id: 68, name: 'vivo X70', brand: 'vivo', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda X70 moderna.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Blanco', hex: '#ffffff' }] },
    { id: 69, name: 'vivo X80', brand: 'vivo', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'X80 con estilo.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Verde', hex: '#228b22' }] },
    { id: 70, name: 'vivo X90', brand: 'vivo', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Protección X90.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Rojo', hex: '#dc143c' }] },
    { id: 71, name: 'vivo X100', brand: 'vivo', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda X100 avanzada.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Azul', hex: '#1e90ff' }] },
    { id: 72, name: 'vivo X100 Pro', brand: 'vivo', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'X100 Pro premium.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Plateado', hex: '#c0c0c0' }] },
    { id: 73, name: 'vivo V Series', brand: 'vivo', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas serie V.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Rosa', hex: '#ffb6c1' }] },
    { id: 74, name: 'vivo Y Series', brand: 'vivo', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas serie Y.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#4682b4' }] },
    
    // Realme
    { id: 75, name: 'Realme GT', brand: 'Realme', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Funda GT deportiva.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Amarillo', hex: '#ffd700' }] },
    { id: 76, name: 'Realme GT 2', brand: 'Realme', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'GT 2 con estilo.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Verde', hex: '#32cd32' }] },
    { id: 77, name: 'Realme GT 3', brand: 'Realme', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Protección GT 3.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#4169e1' }] },
    { id: 78, name: 'Realme GT 4', brand: 'Realme', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda GT 4 moderna.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Naranja', hex: '#ff8c00' }] },
    { id: 79, name: 'Realme Pro Series', brand: 'Realme', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Realme Pro (9-14).', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#1e90ff' }, { name: 'Morado', hex: '#9370db' }] },
    { id: 80, name: 'Realme C Series', brand: 'Realme', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas serie C.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Verde', hex: '#228b22' }] },
    
    // Google
    { id: 81, name: 'Pixel 4a', brand: 'Google', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Pixel 4a compacta.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Blanco', hex: '#ffffff' }] },
    { id: 82, name: 'Pixel 5', brand: 'Google', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Pixel 5.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Verde', hex: '#9acd32' }] },
    { id: 83, name: 'Pixel 6', brand: 'Google', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Pixel 6 moderna.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Rosa Coral', hex: '#ff7f50' }] },
    { id: 84, name: 'Pixel 6a', brand: 'Google', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Pixel 6a económico.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Blanco', hex: '#f5f5f5' }] },
    { id: 85, name: 'Pixel 7', brand: 'Google', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Pixel 7.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul Claro', hex: '#87ceeb' }] },
    { id: 86, name: 'Pixel 7a', brand: 'Google', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Pixel 7a.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Coral', hex: '#ff6b6b' }] },
    { id: 87, name: 'Pixel 8', brand: 'Google', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Pixel 8 premium.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#4169e1' }] },
    { id: 88, name: 'Pixel 8 Pro', brand: 'Google', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Pixel 8 Pro.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Celeste', hex: '#b0e0e6' }] },
    { id: 89, name: 'Pixel 9', brand: 'Google', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Pixel 9.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Rosa', hex: '#ffb6c1' }] },
    { id: 90, name: 'Pixel 9 Pro XL', brand: 'Google', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Pixel 9 Pro XL premium.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Blanco', hex: '#ffffff' }] },
    { id: 91, name: 'Pixel Fold', brand: 'Google', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Pixel Fold plegable.', colors: [{ name: 'Negro', hex: '#000000' }] },
    
    // Motorola
    { id: 92, name: 'Moto G Series', brand: 'Motorola', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Moto G (varios modelos).', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Azul', hex: '#4169e1' }, { name: 'Verde', hex: '#32cd32' }] },
    { id: 93, name: 'Edge Series', brand: 'Motorola', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Edge (Edge, Edge+, Edge Pro).', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Gris Grafito', hex: '#36454f' }] },
    { id: 94, name: 'Razr', brand: 'Motorola', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Razr clásico.', colors: [{ name: 'Negro', hex: '#1c1c1c' }] },
    { id: 95, name: 'Razr 5G', brand: 'Motorola', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Razr 5G.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Dorado', hex: '#ffd700' }] },
    { id: 96, name: 'Razr 40', brand: 'Motorola', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Razr 40 moderna.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Rosa', hex: '#ff69b4' }] },
    { id: 97, name: 'Razr 40 Ultra', brand: 'Motorola', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Razr 40 Ultra premium.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#1e90ff' }] },
    
    // Sony
    { id: 98, name: 'Xperia 1 Series', brand: 'Sony', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Xperia 1 (I-VI).', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Gris', hex: '#808080' }, { name: 'Morado', hex: '#9370db' }] },
    { id: 99, name: 'Xperia 5 Series', brand: 'Sony', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Xperia 5 (I-V).', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Azul', hex: '#4169e1' }] },
    { id: 100, name: 'Xperia 10 Series', brand: 'Sony', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Xperia 10 (I-VI).', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Blanco', hex: '#ffffff' }, { name: 'Verde', hex: '#228b22' }] },
    
    // Honor
    { id: 101, name: 'Magic 4', brand: 'Honor', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Magic 4 elegante.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Plateado', hex: '#c0c0c0' }] },
    { id: 102, name: 'Magic 4 Pro', brand: 'Honor', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Magic 4 Pro premium.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Dorado', hex: '#ffd700' }] },
    { id: 103, name: 'Magic 5', brand: 'Honor', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Magic 5.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Verde', hex: '#32cd32' }] },
    { id: 104, name: 'Magic 5 Pro', brand: 'Honor', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Magic 5 Pro.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Azul', hex: '#1e90ff' }] },
    { id: 105, name: 'Magic 6', brand: 'Honor', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Magic 6 moderna.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Blanco', hex: '#ffffff' }] },
    { id: 106, name: 'Magic 6 Pro', brand: 'Honor', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=1000&fit=crop'], price: 0, info: 'Protección Magic 6 Pro.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Morado', hex: '#9370db' }] },
    { id: 107, name: 'Magic 7', brand: 'Honor', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=1000&fit=crop'], price: 0, info: 'Funda Magic 7 avanzada.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Rojo', hex: '#dc143c' }] },
    { id: 108, name: 'Magic 7 Pro', brand: 'Honor', image: 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1603891219031-7c0e9f5e5e15?w=800&h=1000&fit=crop'], price: 0, info: 'Magic 7 Pro premium.', colors: [{ name: 'Negro', hex: '#1c1c1c' }, { name: 'Azul', hex: '#4169e1' }] },
    { id: 109, name: 'Honor X Series', brand: 'Honor', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Honor serie X.', colors: [{ name: 'Negro', hex: '#000000' }, { name: 'Azul', hex: '#4682b4' }] },
    { id: 110, name: 'Honor N Series', brand: 'Honor', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=1000&fit=crop'], price: 0, info: 'Fundas Honor serie N.', colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Verde', hex: '#228b22' }] },
  ]

  const brands = useMemo(() => Array.from(new Set(products.map(p => p.brand))), [products])

  const [activeBrand, setActiveBrand] = useState<string | null>(null)
  const [activeModelType, setActiveModelType] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const handleNextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length)
    }
  }

  const handlePrevImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      )
    }
  }

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
  }

  const brandTypes: Record<string, string[]> = {
    Apple: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 16', 'iPhone 17', 'iPhone SE'],
    Samsung: ['Galaxy S', 'Galaxy Note', 'Galaxy Z Fold', 'Galaxy Z Flip', 'Galaxy A Series', 'Galaxy M Series'],
    Xiaomi: ['Xiaomi Mi', 'Redmi Note', 'POCO'],
    OPPO: ['Find X', 'Find N', 'Reno', 'A Series'],
    vivo: ['X Series', 'V Series', 'Y Series'],
    Realme: ['GT', 'Pro Series', 'C Series'],
    Google: ['Pixel 4a', 'Pixel 5', 'Pixel 6', 'Pixel 7', 'Pixel 8', 'Pixel 9', 'Pixel Fold'],
    Motorola: ['Moto G', 'Edge', 'Razr'],
    Sony: ['Xperia 1', 'Xperia 5', 'Xperia 10'],
    Honor: ['Magic 4', 'Magic 5', 'Magic 6', 'Magic 7', 'X Series', 'N Series'],
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

        {(activeBrand || activeModelType) && (
          <div className={styles.clearFiltersRow}>
            <button
              className={styles.clearFiltersButton}
              onClick={() => { setActiveBrand(null); setActiveModelType(''); setSelectedProduct(null) }}
            >
              ✕ Limpiar filtros
            </button>
          </div>
        )}

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
            <div 
              key={product.id} 
              className={styles.productCard}
              onClick={() => handleProductSelect(product)}
            >
              <div className={styles.productMain}>
                <div>
                  <h4>{product.name}</h4>
                  <p className={styles.brand}>{product.brand}</p>
                  <div className={styles.colorsRow}>
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className={styles.colorDot}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
                <img src={product.image} alt={product.name} className={styles.productImageSmall} />
              </div>

              <div className={styles.priceRow}>
                <span className={styles.price}>{product.price ? product.price.toFixed(2) + '€' : ''}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <>
            <div className={styles.overlay} onClick={() => setSelectedProduct(null)} />
            <div className={styles.infoBox} role="dialog" aria-labelledby="product-title">
              <button className={styles.closeButton} onClick={() => setSelectedProduct(null)} aria-label="Cerrar">×</button>
              <div className={styles.imageCarousel}>
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <button 
                    className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
                    onClick={handlePrevImage}
                    aria-label="Imagen anterior"
                  >
                    ‹
                  </button>
                )}
                <img 
                  src={selectedProduct.images ? selectedProduct.images[currentImageIndex] : selectedProduct.image} 
                  className={styles.infoImage} 
                  alt={`${selectedProduct.name} - Imagen ${currentImageIndex + 1}`} 
                />
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <button 
                    className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
                    onClick={handleNextImage}
                    aria-label="Imagen siguiente"
                  >
                    ›
                  </button>
                )}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <div className={styles.imageIndicators}>
                    {selectedProduct.images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`${styles.indicator} ${idx === currentImageIndex ? styles.indicatorActive : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`Ir a imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.infoDetails}>
                <h3 id="product-title">{selectedProduct.name}</h3>
                <p className={styles.infoPrice}>{selectedProduct.price ? selectedProduct.price.toFixed(2) + '€' : ''}</p>
                <p className={styles.infoText}>{selectedProduct.info}</p>
                <div className={styles.colorsSection}>
                  <p className={styles.colorsLabel}><strong>Colores disponibles:</strong></p>
                  <div className={styles.colorsGrid}>
                    {selectedProduct.colors.map((color, idx) => (
                      <div key={idx} className={styles.colorOption}>
                        <div
                          className={styles.colorCircle}
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className={styles.colorName}>{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className={styles.infoAnnouncement}><strong>Nota:</strong> Todos los colores incluyen la misma protección de calidad premium.</p>
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
