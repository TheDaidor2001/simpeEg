<script setup>
import { onMounted } from 'vue'
import { useUsbStore } from '../stores/usb';
import vProduct from '../components/v-product.vue';
import VLoading from '../components/v-loading.vue';

const usbStore = useUsbStore()



onMounted(() => {
    try {
        usbStore.getAllData()
    } catch (error) {

    }
})

</script>

<template>
    <h1 class="text-center text-3xl font-bold mt-10 uppercase">Administra
        <span class="font-black text-blue-500 underline">tus
            productos
        </span>
    </h1>

    <div v-if="usbStore.loading" class="flex justify-center items-center h-screen">
          <VLoading 
          />
      </div>
    <div class=" container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 mt-10 mx-w-5xl px-10 w-full  lg:w-2/3 " v-else>
        <vProduct 
            v-for="producto in usbStore.productos"
            :producto="producto"
        />
    </div>
</template>

