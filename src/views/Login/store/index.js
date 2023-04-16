import { defineStore } from "pinia"
import { fireAuth, signInWithEmailAndPassword, signOut } from "@/firebase/firebaseInit"


export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      email: '',
      password: ''
    }
  } ,
  getters: {
    getEmail: () => this.email,
  },
  actions: {
    async login({ email, password }) {
      const response = await signInWithEmailAndPassword(fireAuth, email, password)
      if (!response) throw new Error('login failed')

      this.email = email
      this.password = password
    },

    async logout() {
      await signOut(fireAuth)
    },
  }
})