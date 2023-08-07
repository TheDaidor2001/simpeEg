<script setup>
import { onMounted } from 'vue';
import { useUsbStore } from '../stores/usb';
import vProduct from '../components/v-product.vue'
import vLoading from '../components/v-loading.vue'
import vDropDown from '../components/v-dropDown.vue';
import vLogin from '../components/v-login.vue';


const usb = useUsbStore()

onMounted(async () => {
  await usb.getAllData()
})


</script>

<template>
  <nav class="bg-white">
    <div class="max-w-4xl mx-auto flex justify-around p-5 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 lg:w-10 lg:h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
      <RouterLink :to="{name: 'home'}" class="text-xl lg:text-3xl text-center">Simple<span
          class="font-bold ml-1 border-b-2 border-black pb-1">eg</span></RouterLink>
      <!-- <div class="flex gap-5 items-center">
        <vDropDown />
      </div> -->
      <vLogin />
    </div>
  </nav>

  <div>
    <div v-if="usb.loading" class="flex justify-center items-center h-screen">
      <vLoading />
    </div>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 gap-10 px-5 lg:px-0 w-full lg:w-2/3 mx-auto">
      <vProduct v-for="producto in usb.productos" :producto="producto" :show="true" />
    </div>
  </div>
</template>
