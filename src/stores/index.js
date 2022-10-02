import { createPinia } from 'pinia'

const store = createPinia()

console.log('STORE - INITIALIZED 🎉')

export const setupStore = app => {
  app.use(store)
}

export default store
