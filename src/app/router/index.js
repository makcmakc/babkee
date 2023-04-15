import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/OverviewReport/components/OverviewReport.vue"),
    },
    // report
    {
      path: "/adgroup",
      name: "adgroup",
      component: () => import("@/views/AdGroupReport/components/AdGroupReport.vue"),
    },
    {
      path: "/tq-dashboard",
      name: "tq-dashboard",
      component: () => import("@/views/TqDashboard/components/TqDashboard.vue"),
    },    
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/UsersReport/components/UsersReport.vue"),
    },

    // system
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/components/Login.vue"),
      meta: {
        layout: "empty",
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("@/views/Login/components/ForgotPassword.vue"),
      meta: {
        layout: "empty",
        title: "Forgot Password"
      },
    },    
  ],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export const resetRouter = () => {
  const resetWhiteNameList = ["Redirect", "Login", "NoFind", "Root"]
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

console.log("ROUTER - INITIALIZED 🎉")

export const setupRouter = (app) => {
  app.use(router)
}

export default router
