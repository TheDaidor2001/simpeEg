<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="m-auto max-w-6xl mt-32 grid items-center justify-center">
        <h1 class="font-extrabold text-center text-transparent text-7xl lg:text-9xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">OOPS!</h1>
        <h3 class="text-center font-semibold text-lg lg:text-xl">404 - Página no encontrada</h3>
        <p class="text-center w-full px-10 lg:w-1/2 lg:px-0 mx-auto mt-5 text-gray-700">La pagina que estas tratando de encontrar no existe, tiene otro nombre o está temporalmente desabilitada.</p>
        <RouterLink
            :to="{name: 'home'}"
            class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center hover:bg-gradient-to-l transition-all w-1/2 md:w-1/3 mx-auto mt-10 py-2 px-5 rounded-2xl text-white"
        >
            Volver al inicio
        </RouterLink>
    </div>
</template>
