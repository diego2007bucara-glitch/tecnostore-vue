<script setup>
import { ShoppingCart } from 'lucide-vue-next';
import { useTiendaStore } from '../stores/tiendaStore';

defineProps({ nombreTienda: { type: String, required: true } });
const emit = defineEmits(['verCarrito']);
const store = useTiendaStore();
</script>

<template>
  <header class="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-teal-600/20">T</div>
        <div>
          <h1 class="text-xl font-bold text-slate-900 leading-tight">{{ nombreTienda }}</h1>
          <span class="text-xs text-teal-600 font-medium tracking-wide">TECNOLOGÍA AL ALCANCE</span>
        </div>
      </div>
      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
        <a href="#catalogo" class="hover:text-teal-600 transition-colors">Inicio</a>
        <a href="#catalogo" class="hover:text-teal-600 transition-colors">Productos</a>
        <a href="#catalogo" class="hover:text-teal-600 transition-colors">Ofertas</a>
        <a href="#contacto" class="hover:text-teal-600 transition-colors">Contacto</a>
      </nav>
      <button @click="emit('verCarrito')" class="relative flex items-center space-x-2 bg-teal-50 hover:bg-teal-100 text-teal-800 px-4 py-2 rounded-full border border-teal-200 transition-all active:scale-95 font-semibold text-sm">
        <ShoppingCart class="w-4 h-4 text-teal-700" />
        <span>Carrito</span>
        <span v-if="store.cantidadTotalItems > 0" class="ml-1 bg-amber-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
          {{ store.cantidadTotalItems }}
        </span>
      </button>
    </div>
  </header>
</template>
