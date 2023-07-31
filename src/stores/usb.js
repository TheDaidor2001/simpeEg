import { defineStore } from "pinia";
import {ref} from 'vue'
import UsbApi from "../api/UsbApi";




export const useUsbStore = defineStore("usb", () => {

  const productos = ref([])


  async function getAllData() {
    try {
      const {data} = await UsbApi.all()
      productos.value = data
    } catch (error) {
      console.log(error);
    }
  }

  async function createProduct(producto) {
   try {
    await UsbApi.create(producto) 
    
   } catch (error) {
      console.log(error);
   }
  }

  return {
    productos,
    getAllData,
    createProduct
   };
});
