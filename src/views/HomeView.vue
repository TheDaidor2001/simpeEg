<script setup>
import { onMounted } from 'vue';
import { useUsbStore } from '../stores/usb';
import Product from '../components/Product.vue'

const usb = useUsbStore()

onMounted(async () => {
  await usb.getAllData()
})


</script>

<template>
  <main>
    <nav class="bg-white">
      <div class="max-w-4xl mx-auto flex justify-between p-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <h1 class="text-3xl">Simple<span class="font-bold ml-1 border-b-2 border-black pb-1">eg</span></h1>
        <div class="flex gap-5 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>  
          <RouterLink class="bg-black px-2 py-1 rounded text-white hover:bg-gray-800 transition-colors" :to="{name: 'crear-producto'}">Crear Producto</RouterLink>
        </div>
      </div>

    </nav>

    <div>
      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 gap-10 w-2/3 mx-auto">
       <Product 
        v-for="producto in usb.productos"
        :producto="producto"
       />
      </div>
    </div>
  </main>
</template>
