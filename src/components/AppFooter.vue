<script setup>
import { Mail, Phone, MapPin } from 'lucide-vue-next';
defineProps({
  nombreTienda: { type: String, required: true },
  anio: { type: Number, required: true },
  contacto: { type: String, required: true }
});
</script>

<template>
  <footer id="contacto" class="bg-slate-900 text-slate-400 mt-16 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800 text-sm">
        <div class="space-y-3">
          <div class="flex items-center space-x-2 text-white font-bold text-lg">
            <div class="w-7 h-7 bg-teal-500 rounded-lg flex items-center justify-center text-slate-900 font-black text-sm">T</div>
            <span>{{ nombreTienda }}</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            Proyecto académico práctico de Vue 3 + Pinia implementando arquitectura basada en componentes y gestión de estado global.
          </p>
        </div>
        <div class="space-y-2">
          <h4 class="text-white font-semibold text-sm">Contacto & Ubicación</h4>
          <div class="space-y-1.5 text-xs">
            <div class="flex items-center space-x-2"><Mail class="w-3.5 h-3.5 text-teal-400" /><span>{{ contacto }}</span></div>
            <div class="flex items-center space-x-2"><Phone class="w-3.5 h-3.5 text-teal-400" /><span>+57 (604) 789 0000</span></div>
            <div class="flex items-center space-x-2"><MapPin class="w-3.5 h-3.5 text-teal-400" /><span>Montería, Córdoba · Colombia</span></div>
          </div>
        </div>
        <div class="space-y-2">
          <h4 class="text-white font-semibold text-sm">Información Académica</h4>
          <p class="text-xs text-slate-400">
            Asignatura: Fundamentos de Programación<br />
            Tema: Gestión de Estado con Pinia<br />
            Arquitectura: Vue 3 Composition API
          </p>
        </div>
      </div>
      <div class="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
        <span>© {{ anio }} {{ nombreTienda }}. Todos los derechos reservados.</span>
        <span>Vue 3 + Pinia Store Architecture</span>
      </div>
    </div>
  </footer>
</template>
