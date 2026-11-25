<script setup>
import { ShoppingCart, Plus, Minus, X, Laptop } from 'lucide-vue-next';
import { formatearCOP } from '../utils/formato';
import { useTiendaStore } from '../stores/tiendaStore';

const store = useTiendaStore();
const calcularPrecioUnitario = (producto) => Math.round(producto.valor * (1 - producto.descuento / 100));
</script>

<template>
  <aside class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm sticky top-20 flex flex-col justify-between max-h-[calc(100vh-6rem)]">
    <div>
      <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
        <div class="flex items-center space-x-2">
          <ShoppingCart class="w-5 h-5 text-teal-700" />
          <h2 class="text-lg font-bold text-slate-900">Tu carrito</h2>
        </div>
        <span class="text-xs font-semibold text-slate-400">{{ store.cantidadTotalItems }} ítems</span>
      </div>

      <div v-if="store.carrito.length === 0" class="py-12 text-center text-slate-400 space-y-3">
        <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
          <ShoppingCart class="w-6 h-6" />
        </div>
        <p class="text-sm font-medium">El carrito está vacío</p>
        <p class="text-xs text-slate-400">Agrega productos del catálogo para comenzar</p>
      </div>

      <div v-else class="space-y-3 overflow-y-auto max-h-[280px] pr-1 scrollbar-thin">
        <div v-for="{ producto, cantidad } in store.carrito" :key="producto.id" class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
          <div class="flex items-center space-x-3 min-w-0 flex-1">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-teal-700 shrink-0 border border-slate-100">
              <component :is="producto.icon || Laptop" class="w-5 h-5" />
            </div>
            <div class="min-w-0 flex-1">
              <h4 class="text-xs font-semibold text-slate-800 truncate">{{ producto.descripcion }}</h4>
              <div class="text-[11px] text-slate-500 font-medium">{{ formatearCOP(calcularPrecioUnitario(producto)) }} c/u</div>
            </div>
          </div>

          <div class="flex items-center space-x-2 shrink-0 ml-2">
            <div class="flex items-center border border-slate-200 rounded-lg bg-white">
              <button @click="store.decrementarCantidad(producto.id)" class="p-1 hover:bg-slate-100 text-slate-600 rounded-l-lg transition-colors"><Minus class="w-3 h-3" /></button>
              <span class="px-2 text-xs font-bold text-slate-800 min-w-[1.5rem] text-center">{{ cantidad }}</span>
              <button @click="store.incrementarCantidad(producto.id)" class="p-1 hover:bg-slate-100 text-slate-600 rounded-r-lg transition-colors"><Plus class="w-3 h-3" /></button>
            </div>
            <button @click="store.eliminarDelCarrito(producto.id)" class="text-slate-400 hover:text-red-600 p-1 transition-colors"><X class="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-4 border-t border-slate-100 mt-4 space-y-3">
      <div class="space-y-1.5 text-xs">
        <div class="flex justify-between text-slate-500"><span>Subtotal sin descuento</span><span>{{ formatearCOP(store.subtotalSinDescuento) }}</span></div>
        <div class="flex justify-between text-amber-700 font-medium"><span>Descuentos</span><span>- {{ formatearCOP(store.totalDescuentos) }}</span></div>
        <div class="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-100">
          <span>Total</span>
          <span class="text-teal-700">{{ formatearCOP(store.subtotalConDescuento) }}</span>
        </div>
      </div>
      <button :disabled="store.carrito.length === 0" @click="store.finalizarCompra()" class="w-full bg-teal-700 hover:bg-teal-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl text-sm transition-all shadow-md shadow-teal-700/10 active:scale-[0.99]">
        Finalizar compra
      </button>
    </div>
  </aside>
</template>
