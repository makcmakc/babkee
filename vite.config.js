import { resolve } from 'path'
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import WindiCSS from "vite-plugin-windicss"
import { createHtmlPlugin } from "vite-plugin-html"
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import PurgeIcons from 'vite-plugin-purge-icons'

// ROOT
const root = process.cwd()

function pathResolve(dir) {
  return resolve(root, ".", dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    createSvgIconsPlugin({
      iconDirs: [pathResolve('src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: true
    }),
    PurgeIcons(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Babkee RevPush',
          injectScript: `<script src="./inject.js"></script>`,
        }
      }
    })
  ],
  server: {
    port: 3000,
    proxy: {
      // Variant spelling
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    hmr: {
      overlay: false,
    },
    host: "0.0.0.0",
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "@iconify/iconify",
      "@vueuse/core",
      "axios",
      "echarts",
    ],
  },
  resolve: {
    alias: {
      "@": `${pathResolve('src')}/`
    },
  },
})
