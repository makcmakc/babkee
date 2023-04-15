import { createApp } from "vue"

// Enter Point
import App from "./App.vue"

// WindiCSS
import "virtual:windi.css"
import "virtual:windi-devtools"

// Element Plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

// Custom Styles
import "./styles/index.scss"

// Modules
import axios from '@/app/utils/axios'

import { setupStore } from "@/app/store"
import { setupRouter } from "@/app/router"

// Firebase
// import {firebase} from "firebase/app";


const setupApp = () => {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  app.use(ElementPlus)

  // app.use(axios, {
  //     app,
  //     baseUrl: 'https://cataas.com/',
  // })

  app.mount("#app")
}

setupApp()
