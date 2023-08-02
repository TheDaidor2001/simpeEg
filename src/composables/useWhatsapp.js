import {ref} from 'vue'

//https://api.whatsapp.com/send?phone=240222705408&text=hola,%20me%20gustaria%20comprar%20este%20producto
export default function useWhatsapp() {

    const baseUrl = ref('https://api.whatsapp.com/send?')
    const urlFinished = ref('')

    function sendMessage(phone, text) {

        const updatedText = text.split(' ').join('%20')

        const url = `${baseUrl.value}phone=${phone}&text=${updatedText}`
    
        urlFinished.value = url
        console.log(urlFinished.value);
    }

    return {
        sendMessage,
        urlFinished
    }
}