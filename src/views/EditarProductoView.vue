<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UsbApi from "../api/UsbApi";
import { useUsbStore } from '../stores/usb'
const route = useRoute()
const router = useRouter()
const usbStore = useUsbStore()

const formData = ref({})
const name = ref('')

onMounted(() => {
   getOneProduct(route.params.id) 
})

async function getOneProduct(id) {

    try {
    const {data} = await UsbApi.getOne(id)
    formData.value = data
    
    } catch (error) {
    console.log(error);
    }finally {
    
    }
}

async function handleSumbit(data) {
    await usbStore.updateProduct(route.params.id, data)
    router.push({name: 'admin'})
}


</script>

<template>
    <h1 class="text-center mt-10 text-3xl font-bold text-blue-500 underline">Editar Producto</h1>
    <div class="max-w-3xl mx-auto w-full mt-10 px-10 lg:px-0">
        <FormKit type="form" submit-label="Guardar Cambios" @submit="handleSumbit">
            <FormKit v-model="formData.name" type="text" label="Nombre del producto" name="name" placeholder="Ej: Tarjeta de memora de 64 GB"
                validation="required" :validation-messages="{
                    required: 'El nombre es obligatorio',
                }" />
            <FormKit v-model="formData.detalle" type="text" label="Descripción del producto" name="detalle"
                placeholder="Ej: Usb 64gb una ganga de las buenas para todos" validation="required" :validation-messages="{
                    required: 'La descripción es obligatoria',
                }" />
            <FormKit v-model="formData.imagen" type="text" label="Imagen del producto" name="imagen"
                placeholder="Ej: https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg"
                validation="required" :validation-messages="{
                    required: 'La imagen es obligatoria',
                }" 
                :value="formData?.imagen"
            />
            <FormKit v-model="formData.precio" type="text" label="Precio del producto" name="precio" placeholder="Ej: 20000"
                validation="required|number" :validation-messages="{
                    required: 'El precio es obligatorio',
                    number: 'Deben ser numeros'
                }" 
                :value="formData?.precio"    
            />

        </FormKit>
    </div>
</template> 

