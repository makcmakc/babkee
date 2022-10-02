import { createApp } from "vue"

// Enter Point
import App from "./App.vue"

// WindiCSS
import "virtual:windi.css"
import "virtual:windi-devtools"

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Custom Styles
import "./styles/index.scss"

import { setupStore } from "./stores"
import { setupRouter } from "./router"

const setupApp = () => {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  app.use(ElementPlus)

  app.mount("#app")
}

setupApp()
