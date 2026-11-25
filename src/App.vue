<script setup>
import { useTiendaStore } from './stores/tiendaStore';
import AppHeader from './components/AppHeader.vue';
import ListaProductos from './components/ListaProductos.vue';
import CarritoCompra from './components/CarritoCompra.vue';
import FacturaCompra from './components/FacturaCompra.vue';
import AppFooter from './components/AppFooter.vue';

const store = useTiendaStore();

const handleVerCarrito = () => {
  const el = document.getElementById('seccion-carrito');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-between font-sans text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
    <div>
      <AppHeader nombre-tienda="TecnoStore" @ver-carrito="handleVerCarrito" />
      <main id="catalogo" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div class="lg:col-span-2"><ListaProductos /></div>
          <div id="seccion-carrito" class="lg:col-span-1"><CarritoCompra /></div>
        </div>
      </main>
    </div>
    <FacturaCompra v-if="store.mostrarFactura" />
    <AppFooter nombre-tienda="TecnoStore S.A.S" :anio="2026" contacto="contacto@tecnostore.edu.co" />
  </div>
</template>
