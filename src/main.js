import { createApp } from "vue"

// Enter Point
import App from "./App.vue"

// UnoCSS
import 'virtual:uno.css'
import 'virtual:unocss-devtools'

// Element Plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

// Custom Styles
import "./styles/index.scss"

// Modules
import { setupStore } from "@/app/store"
import { setupRouter } from "@/app/router"


const setupApp = () => {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  app.use(ElementPlus)

  app.mount("#app")
}

setupApp()
