import { Laptop, Smartphone, Headphones, Watch, Mouse, Tablet, Keyboard, Monitor } from 'lucide-vue-next';

export const PRODUCTOS_INICIALES = [
  { id: 1, descripcion: 'Portátil 14" Ryzen 5, 16 GB RAM', valor: 2899000, descuento: 15, categoria: 'Portátiles', icon: Laptop },
  { id: 2, descripcion: 'Smartphone 128 GB, cámara 50 MP', valor: 1150000, descuento: 10, categoria: 'Móviles', icon: Smartphone },
  { id: 3, descripcion: 'Audífonos inalámbricos canceladores de ruido', valor: 420000, descuento: 25, categoria: 'Audio', icon: Headphones },
  { id: 4, descripcion: 'Reloj inteligente deportivo con GPS', valor: 560000, descuento: 0, categoria: 'Wearables', icon: Watch },
  { id: 5, descripcion: 'Mouse ergonómico inalámbrico', valor: 95000, descuento: 20, categoria: 'Accesorios', icon: Mouse },
  { id: 6, descripcion: 'Tablet 10" 64 GB con lápiz óptico', valor: 980000, descuento: 5, categoria: 'Tablets', icon: Tablet },
  { id: 7, descripcion: 'Teclado Mecánico RGB Switch Red', valor: 350000, descuento: 0, categoria: 'Accesorios', icon: Keyboard },
  { id: 8, descripcion: 'Monitor Gamer 24" Full HD 144Hz', valor: 890000, descuento: 12, categoria: 'Monitores', icon: Monitor }
];
