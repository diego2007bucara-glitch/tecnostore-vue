<script setup>
import { computed } from 'vue';
import { ShoppingCart, Tag, Laptop } from 'lucide-vue-next';
import { formatearCOP } from '../utils/formato';
import { useTiendaStore } from '../stores/tiendaStore';

const props = defineProps({ producto: { type: Object, required: true } });
const store = useTiendaStore();

const valorConDescuento = computed(() => Math.round(props.producto.valor * (1 - props.producto.descuento / 100)));
const ahorro = computed(() => props.producto.valor - valorConDescuento.value);
</script>

<template>
  <div class="bg-white rounded-2xl border border-slate-200 p-4 relative flex flex-col justify-between hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
    <span v-if="producto.descuento > 0" class="absolute top-3 right-3 bg-amber-700 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm z-10 flex items-center gap-1">
      <Tag class="w-3 h-3" /> -{{ producto.descuento }}%
    </span>
    <div>
      <div class="w-full h-40 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-teal-700 group-hover:bg-teal-50/50 transition-colors">
        <component :is="producto.icon || Laptop" class="w-20 h-20 stroke-[1.2] transition-transform duration-300 group-hover:scale-110" />
      </div>
      <span class="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">{{ producto.categoria }}</span>
      <h3 class="font-semibold text-slate-800 text-sm mt-1 mb-3 line-clamp-2 min-h-[2.5rem]">{{ producto.descripcion }}</h3>
    </div>
    <div>
      <div class="space-y-0.5 mb-3">
        <template v-if="producto.descuento > 0">
          <span class="text-xs text-slate-400 line-through block">{{ formatearCOP(producto.valor) }}</span>
          <div class="text-lg font-bold text-slate-900">{{ formatearCOP(valorConDescuento) }}</div>
          <span class="text-xs font-semibold text-amber-700 block">Ahorras {{ formatearCOP(ahorro) }}</span>
        </template>
        <template v-else>
          <span class="text-xs text-slate-400 block">Precio regular</span>
          <div class="text-lg font-bold text-slate-900">{{ formatearCOP(producto.valor) }}</div>
          <span class="text-xs text-transparent block select-none">-</span>
        </template>
      </div>
      <button @click="store.agregarAlCarrito(producto)" class="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-2 px-4 rounded-xl text-sm flex items-center justify-center space-x-2 transition-colors active:scale-[0.98] shadow-sm">
        <ShoppingCart class="w-4 h-4" />
        <span>Comprar</span>
      </button>
    </div>
  </div>
</template>
