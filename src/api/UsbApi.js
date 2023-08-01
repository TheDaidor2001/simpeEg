import api from '../lib/axios'


export default {
    all(){
        return api.get('/getAll')
    },
    create(product) {
        return api.post('/post', product)
    },
    delete(id) {
        return api.delete(`/delete/${id}`)
    },
    getOne(id) {
        return api.get(`/getOne/${id}`)
    },
    update(id, product) {
        return api.patch (`/update/${id}`, product)
    }
}