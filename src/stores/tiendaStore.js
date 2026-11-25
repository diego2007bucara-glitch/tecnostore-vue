import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { PRODUCTOS_INICIALES } from '../data/productos';

export const useTiendaStore = defineStore('tienda', () => {
  const productos = ref(PRODUCTOS_INICIALES);
  const carrito = ref([]);
  const mostrarFactura = ref(false);
  const numeroConsecutivo = ref(1);

  const cantidadTotalItems = computed(() =>
    carrito.value.reduce((acc, item) => acc + item.cantidad, 0)
  );

  const subtotalSinDescuento = computed(() =>
    carrito.value.reduce((acc, item) => acc + item.producto.valor * item.cantidad, 0)
  );

  const totalDescuentos = computed(() =>
    carrito.value.reduce((acc, item) => {
      const valConDesc = Math.round(item.producto.valor * (1 - item.producto.descuento / 100));
      return acc + (item.producto.valor - valConDesc) * item.cantidad;
    }, 0)
  );

  const subtotalConDescuento = computed(() =>
    subtotalSinDescuento.value - totalDescuentos.value
  );

  const iva = computed(() => Math.round(subtotalConDescuento.value * 0.19));
  const totalFactura = computed(() => subtotalConDescuento.value + iva.value);
  const numeroFacturaFormateado = computed(() => `FAC-${String(numeroConsecutivo.value).padStart(4, '0')}`);
  const fechaActual = computed(() => new Date().toLocaleDateString('es-CO'));

  const agregarAlCarrito = (producto) => {
    const itemExistente = carrito.value.find((item) => item.producto.id === producto.id);
    if (itemExistente) {
      itemExistente.cantidad += 1;
    } else {
      carrito.value.push({ producto, cantidad: 1 });
    }
  };

  const incrementarCantidad = (id) => {
    const item = carrito.value.find((item) => item.producto.id === id);
    if (item) item.cantidad += 1;
  };

  const decrementarCantidad = (id) => {
    const index = carrito.value.findIndex((item) => item.producto.id === id);
    if (index !== -1) {
      if (carrito.value[index].cantidad > 1) {
        carrito.value[index].cantidad -= 1;
      } else {
        carrito.value.splice(index, 1);
      }
    }
  };

  const eliminarDelCarrito = (id) => {
    carrito.value = carrito.value.filter((item) => item.producto.id !== id);
  };

  const finalizarCompra = () => {
    if (carrito.value.length > 0) mostrarFactura.value = true;
  };

  const nuevaCompra = () => {
    carrito.value = [];
    mostrarFactura.value = false;
    numeroConsecutivo.value += 1;
  };

  return {
    productos, carrito, mostrarFactura,
    cantidadTotalItems, subtotalSinDescuento, totalDescuentos,
    subtotalConDescuento, iva, totalFactura, numeroFacturaFormateado, fechaActual,
    agregarAlCarrito, incrementarCantidad, decrementarCantidad,
    eliminarDelCarrito, finalizarCompra, nuevaCompra
  };
});
