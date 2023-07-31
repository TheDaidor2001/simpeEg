import axios from "axios";

const api = axios.create({
    baseURL: 'https://simpleegapi.onrender.com/api'
})

export default api;