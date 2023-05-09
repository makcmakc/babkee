import { defineStore } from "pinia"
import { fireStore } from "@/firebase/firebaseInit"
import { collection, getDocs } from "firebase/firestore"

export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      loading: false,
      users: [],
      roles: ["ADMIN", "USER", "BUYER"],
      tableSize: "default",
    }
  },
  getters: {
    // your getters here, check the Offical Pinia above
    getReport: state => state.report,
    getRows: state => state.report?.rows ?? [],
  },
  actions: {
    async fetchReport() {
      this.loading = true

      const items = []
      const roles = []

      const users = await getDocs(collection(fireStore, "users"))
      users.forEach(row => {
        items.push(row.data())
        roles.push(row.data())
      })

      this.users = items
      this.roles = roles
      this.loading = false
    },
  },
})
