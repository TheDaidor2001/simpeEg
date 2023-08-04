<script setup>
import { useUserStore } from '../stores/user';

const userStore = useUserStore()

function handleSubmit({ password_confirm, ...formData }) {
    userStore.registerUser(formData)
}
</script>


<template>
    <h1 class="text-center text-4xl mt-10 uppercase font-bold">Registro de usuarios</h1>

    <div class="max-w-6xl px-10 lg:px-0 w-full lg:w-1/3 mx-auto mt-10">
        <FormKit 
                type="form" 
                submit-label="Crear Producto" 
                @submit="handleSubmit"
                id="register_form"
            >
                <FormKit 
                    type="text" 
                    label="Username" 
                    name="username" 
                    placeholder="Ej: Juan"
                    validation="required" 
                    :validation-messages="{
                        required: 'El email es obligatorio'
                    }"  
                />
                <FormKit 
                    type="password" 
                    label="Contraseña del usuario" 
                    name="password" 
                    placeholder="*********"
                    validation="required | length:8" 
                    :validation-messages="{
                        required: 'El nombre es obligatorio',
                        length: 'La contraseña debe tener mínimo 8 carácteres'
                    }"  
                />
                <FormKit
                    type="password"
                    name="password_confirm"
                    label="Confirmar contraseña"
                    validation="required|confirm"
                    :validation-messages="{
                        required: 'La contraseña es obligatoria',
                        confirm: 'Las contraseñas no coinciden'
                    }"  
                />
                
        </FormKit>
    </div>
</template>