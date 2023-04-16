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
   <RouterView />

  <!-- <div class="wrapper">
    <ul class="mt-12">
      <li v-for="item in items" :key="item.id" class="mb-2">
        <div class="flex gap-2">
          <div class="w-12/12 h-18 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-6">
            <span id="check1" class="w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center">
              <i class="text-white fa fa-check"></i>
            </span>
            <div id="strike1" class="text-sm ml-4 text-[#5b7a9d] font-semibold" style="flex: 0 1 100%;">{{ item.content }}</div>
            <span class="mr-4">{{ item.id }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div> -->
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
