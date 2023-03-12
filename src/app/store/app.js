import { defineStore } from "pinia"

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      variantColors: [
        [64, 158, 255], //primary - blue
        [103, 194, 58], //success - green
        [230, 162, 60], //warning - orange
        [245, 108, 108], //danger - red
        // [247, 137, 137], //danger - red

        [156, 3, 247], // purple
        [19, 206, 102], // lime
        [64,158,255], // blue
        [245, 111, 111], // red
        [230, 162, 60], // orange
        [53, 185, 197], // turquoise
        [239, 204, 162], // biscuit
        [67, 56, 202], // indigo
        [154, 187, 29], // yellow
        [228, 53, 188], // pink
        [4, 120, 87], // emerald
        [3, 105, 161], // sky
        // [65, 47, 97], // dark gray
      ] 
    }
  } ,
  getters: {
    // your getters here, check the Offical Pinia above
  },
  actions: {
    // your actions and mutations here, also check the offical Pinia Docs
  }
})
