<script setup>
import { useUserStore } from '../stores/user';

const userStore = useUserStore()
    
    function handleSubmit(data) {
        console.log(data);
        userStore.loginUser(data);
    }

</script>


<template>
    <h1 class="text-center text-4xl mt-10 uppercase font-bold">Iniciar Sesión</h1>
    <div class="max-w-6xl px-10 lg:px-0 w-full lg:w-1/3 mx-auto mt-10">
        <FormKit 
                type="form" 
                submit-label="Iniciar Sesión" 
                @submit="handleSubmit"
                id="register_form"
            >
                <FormKit 
                    type="text" 
                    label="Usuario" 
                    name="username" 
                    placeholder="Ej: Juan"
                    validation="required" 
                    :validation-messages="{
                        required: 'El usuario es obligatorio',
                    }"  
                />
                <FormKit 
                    type="password" 
                    label="Contraseña del usuario" 
                    name="password" 
                    placeholder="*********"
                    validation="required | length:8" 
                    :validation-messages="{
                        required: 'La contraseña es obligatoria',
                        length: 'La contraseña debe tener mínimo 8 carácteres'
                    }"  
                />
        </FormKit>
        <p class=" text-gray-700">¿Aún no tienes cuenta?</p>
        <RouterLink class="text-center mx-auto text-blue-500" :to="{name: 'registro'}">Crear una cuenta</RouterLink>
    </div>
</template>

