<script setup>
import { inject } from 'vue'
import {useRouter} from 'vue-router'
import {useUsbStore} from '../stores/usb'
const usbStore = useUsbStore()
const router = useRouter()
const toast = inject('toast')


async function handleSubmit(data) {
   try {
        usbStore.createProduct(data)
        router.push({name: 'home'})
        toast.open({
            message: 'Producto creado con éxito',
            type: 'success'
        })
   } catch (error) {
        console.log(error);
   }
}

</script>
<template>
    <h1 class="text-center text-4xl font-bold mt-10">Añade <span class="text-blue-500 underline font-black">nuevos
            productos</span></h1>

    <div class="max-w-3xl mx-auto w-full mt-10 px-10 lg:px-0">
        <FormKit 
            type="form" 
            :actions="false"
            @submit="handleSubmit"
        >
            <FormKit 
                type="text" 
                label="Nombre del producto" 
                name="name" 
                placeholder="Ej: Tarjeta de memora de 64 GB"
                validation="required" 
                :validation-messages="{
                    required: 'El nombre es obligatorio',
                }"  
            />
            <FormKit 
                type="text" 
                label="Descripción del producto" 
                name="detalle" 
                placeholder="Ej: Usb 64gb una ganga de las buenas para todos"
                validation="required" 
                :validation-messages="{
                    required: 'La descripción es obligatoria',
                }"  
            />
            <FormKit 
                type="text" 
                label="Imagen del producto" 
                name="imagen" 
                placeholder="Ej: https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg"
                validation="required" 
                :validation-messages="{
                    required: 'La imagen es obligatoria',
                }"  
            />
            <FormKit 
                type="text" 
                label="Imagen del producto" 
                name="precio" 
                placeholder="Ej: 20000"
                validation="required|number" 
                :validation-messages="{
                    required: 'El precio es obligatorio',
                    number: 'Deben ser numeros'
                }"  
            />
            <FormKit
                type="submit"
            />
        </FormKit>
    </div>
</template>



