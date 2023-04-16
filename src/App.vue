<script setup>
import { RouterLink, RouterView } from "vue-router"
import AppLayout from "@/layouts/Layout.vue"

import { ref, onMounted } from "vue"

import { fireStore } from "./firebase/firebaseInit"
import { collection, getDocs } from "firebase/firestore"

let items = []

onMounted(async () => {
  const querySnapshot = await getDocs(collection(fireStore, "todos"))
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, doc.data())
    const data = {
      id: doc.id,
      content: doc.data().content,
      done: doc.data().done,
    }
    items.push(data)
  })

  // const overviewReportRows = await getDocs(collection(fireStore, "overview"))
  // overviewReportRows.forEach((doc) => {
  //   const data = {

  //   }
  // })
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
.el-header {
  background: #fff;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
