import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
    routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/OverviewReport/components/OverviewReport.vue"),
      // component: HomeView,
      // redirect: to => {
      //   return 'overview'
      // }
    },
    // report
    {
      path: "/overview",
      name: "overview",
      component: () => import("@/views/OverviewReport/components/OverviewReport.vue"),
    },    
    {
      path: "/sites",
      name: "sites",
      component: () => import("@/views/sitesReport/components/SitesReport.vue"),
    },
    {
      path: "/overview",
      name: "overview",
      component: () => import("@/views/overviewReport/components/OverviewReport.vue"),
    },
    {
      path: "/adgroup",
      name: "adgroup",
      component: () => import("@/views/adGroupReport/components/AdGroupReport.vue"),
    },
    {
      path: "/charts",
      name: "charts",
      component: () => import("@/views/Charts.vue"),
    },

    // system
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/system/Login/index.vue"),
    },
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = () => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

console.log('ROUTER - INITIALIZED 🎉')

export const setupRouter = app => {
  app.use(router)
}

export default router
