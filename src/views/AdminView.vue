<script setup>
import { onMounted } from 'vue'
import { useUsbStore } from '../stores/usb';
import vProduct from '../components/v-product.vue';
import VLoading from '../components/v-loading.vue';
import vDropDown from '../components/v-dropDown.vue';

const usbStore = useUsbStore()



onMounted(() => {
    try {
        usbStore.getAllData()
    } catch (error) {

    }
})

</script>

<template>
    <nav class="bg-white">
      <div class="max-w-4xl mx-auto flex justify-around p-5 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 lg:w-10 lg:h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <RouterLink :to="{name: 'home'}" class="text-xl lg:text-3xl text-center">Simple<span class="font-bold ml-1 border-b-2 border-black pb-1">eg</span></RouterLink>
        <div class="flex gap-5 items-center">
            <vDropDown />
        </div>
      </div>
    </nav>
    <h1 class="text-center text-3xl font-bold mt-10 uppercase">Administra
        <span class="font-black text-blue-500 underline">tus
            productos
        </span>
    </h1>

    <div v-if="usbStore.loading" class="flex justify-center items-center h-screen">
          <VLoading 
          />
      </div>
    <div class=" container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 mt-10 mx-w-5xl px-5 lg:px-0 w-full  lg:w-2/3 " v-else>
        <vProduct 
            v-for="producto in usbStore.productos"
            :producto="producto"
        />
    </div>
</template>

