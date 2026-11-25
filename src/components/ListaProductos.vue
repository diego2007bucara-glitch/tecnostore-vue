<script setup>
import ProductoCard from './ProductoCard.vue';
import { useTiendaStore } from '../stores/tiendaStore';

const store = useTiendaStore();
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between border-b border-slate-200 pb-3">
      <div>
        <h2 class="text-2xl font-bold text-slate-900">Catálogo</h2>
        <p class="text-xs text-slate-500">Explora nuestros productos en oferta y precios regulares</p>
      </div>
      <span class="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{{ store.productos.length }} productos</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductoCard v-for="prod in store.productos" :key="prod.id" :producto="prod" />
    </div>
  </section>
</template>
