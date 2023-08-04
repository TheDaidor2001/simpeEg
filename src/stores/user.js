import {defineStore} from 'pinia'
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import UserApi from '../api/AuthApi'


export const useUserStore = defineStore('user', () => {

    const router = useRouter()
    const toast = inject('toast')


    async function registerUser(user) {
        try {
            const {data} = await UserApi.register(user);
            toast.open({
                message: 'Usuario creado con éxito',
                type: 'success'
            })
            router.push('/login')
            
        } catch (error) {
            toast.open({
                message: error,
                type: 'error'
            })
        }
    }

    async function loginUser(user) {
        try {
            const {data} = await UserApi.login(user);
            console.log(data);
            toast.open({
                message: 'Sesión iniciada con éxito',
            })
            router.push({name: 'admin'})
        }
         catch (error) {
            toast.open({
                message: error.response.data.error,
                type: 'error'
            })
            console.log(error);
        }
    }



    return {
        registerUser,
        loginUser
    }
})