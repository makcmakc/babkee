import { defineStore } from "pinia"
import { fireDatabase } from "@/firebase/firebaseInit.js"

export const useUserStore = defineStore('user', {
  state: () => {
    return {

    }
  } ,
  getters: {
    // your getters here, check the Offical Pinia above
  },
  actions: {
    // your actions and mutations here, also check the offical Pinia Docs
    async register({email, password}) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (!response) throw new Error('Unable to register user')
      
      context.commit('SET_USER', response.user)
      response.user.updateProfile({displayName: name})
    },

    async login(context, { email, password }){
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
          context.commit('SET_USER', response.user)
      } else {
          throw new Error('login failed')
      }
    },

    async logout(context){
      await signOut(auth)
      context.commit('SET_USER', null)
    }
  }
})