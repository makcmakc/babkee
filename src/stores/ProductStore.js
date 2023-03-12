import { defineStore } from "pinia";

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products: ['Apple', 'Orange']
    }
  }
})