<script setup>
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-vue-next';
import { formatearCOP } from '../utils/formato';
import { useTiendaStore } from '../stores/tiendaStore';

const store = useTiendaStore();
const calcularValorConDescuento = (producto) => Math.round(producto.valor * (1 - producto.descuento / 100));
</script>

<template>
  <div class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div class="bg-white rounded-3xl border border-slate-200 max-w-3xl w-full shadow-2xl overflow-hidden my-8">
      <div class="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div class="flex items-center space-x-2">
            <Building2 class="w-6 h-6 text-teal-400" />
            <h2 class="text-2xl font-bold tracking-tight">Factura de compra</h2>
          </div>
          <p class="text-xs text-slate-400 mt-1">TecnoStore S.A.S · NIT 900.000.000-0</p>
        </div>
        <div class="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 text-right w-full sm:w-auto">
          <div class="text-sm font-mono font-bold text-teal-400">N.º {{ store.numeroFacturaFormateado }}</div>
          <div class="text-xs text-slate-300">Fecha: {{ store.fechaActual }}</div>
        </div>
      </div>

      <div class="p-6 sm:p-8 space-y-6">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider bg-slate-50/50">
                <th class="py-3 px-3">DESCRIPCIÓN</th>
                <th class="py-3 px-2 text-center">CANT.</th>
                <th class="py-3 px-3 text-right">VALOR UNIT.</th>
                <th class="py-3 px-2 text-center">DESC.</th>
                <th class="py-3 px-3 text-right">VALOR C/DESC.</th>
                <th class="py-3 px-3 text-right">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              <tr v-for="{ producto, cantidad } in store.carrito" :key="producto.id" class="hover:bg-slate-50/50">
                <td class="py-3 px-3 font-medium text-slate-900 max-w-[200px] truncate">{{ producto.descripcion }}</td>
                <td class="py-3 px-2 text-center font-semibold">{{ cantidad }}</td>
                <td class="py-3 px-3 text-right text-slate-500">{{ formatearCOP(producto.valor) }}</td>
                <td class="py-3 px-2 text-center text-amber-700 font-semibold">{{ producto.descuento > 0 ? `${producto.descuento}%` : '0%' }}</td>
                <td class="py-3 px-3 text-right font-medium">{{ formatearCOP(calcularValorConDescuento(producto)) }}</td>
                <td class="py-3 px-3 text-right font-bold text-slate-900">{{ formatearCOP(calcularValorConDescuento(producto) * cantidad) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end pt-4 border-t border-slate-200 gap-6">
          <div class="text-xs text-slate-500 space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 max-w-sm w-full">
            <div class="flex items-center space-x-2 text-slate-700 font-semibold mb-1">
              <ShieldCheck class="w-4 h-4 text-teal-600" />
              <span>Garantía & Soporte</span>
            </div>
            <p>Esta factura sirve como comprobante oficial para efectos de garantía técnica por 12 meses.</p>
          </div>
          <div class="w-full sm:w-72 space-y-2 text-xs">
            <div class="flex justify-between text-slate-500"><span>Total sin descuento</span><span>{{ formatearCOP(store.subtotalSinDescuento) }}</span></div>
            <div class="flex justify-between text-amber-700 font-medium"><span>Total descuentos</span><span>- {{ formatearCOP(store.totalDescuentos) }}</span></div>
            <div class="flex justify-between text-slate-700 font-medium pt-1"><span>Subtotal</span><span>{{ formatearCOP(store.subtotalConDescuento) }}</span></div>
            <div class="flex justify-between text-slate-700 font-medium"><span>IVA (19 %)</span><span>{{ formatearCOP(store.iva) }}</span></div>
            <div class="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-200">
              <span>Total a pagar</span>
              <span class="text-teal-700">{{ formatearCOP(store.totalFactura) }}</span>
            </div>
          </div>
        </div>

        <div class="pt-4 flex justify-between items-center border-t border-slate-100">
          <div class="flex items-center space-x-2 text-xs text-teal-700">
            <CheckCircle2 class="w-4 h-4" />
            <span>Transacción procesada exitosamente</span>
          </div>
          <button @click="store.nuevaCompra()" class="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 px-6 rounded-xl text-sm transition-all shadow-md active:scale-95 flex items-center space-x-2">
            <span>Nueva compra</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
