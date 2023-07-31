import { defineStore } from "pinia";
import {ref} from 'vue'
import UsbApi from "../api/UsbApi";




export const useUsbStore = defineStore("usb", () => {

  const productos = ref([])
  const loading = ref(false)


  async function getAllData() {
    loading.value = true
    try {
      const {data} = await UsbApi.all()
      productos.value = data
    } catch (error) {
      console.log(error);
    }finally {
      loading.value = false
    }
  }

  async function createProduct(producto) {
   try {
    await UsbApi.create(producto) 
    const {data} = await UsbApi.all()
    productos.value = data
   } catch (error) {
      console.log(error);
   }
  }

  async function deleteProduct(id) {
    const confirmation = confirm('¿Está seguro que desea eliminar el producto?')

    if(confirmation) {
      try {
        await UsbApi.delete(id)
        getAllData()
      } catch (error) {
        console.log(error);
      }
    }
    
  }

  return {
    productos,
    loading,
    getAllData,
    createProduct,
    deleteProduct
  };
});
