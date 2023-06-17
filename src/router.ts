import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import index from "./views/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/calculator",
  },

  {
    path: "/",
    component: index,
    children: [
      {
        path: "",
        redirect: "/calculator",
      },
      {
        path: "calculator",
        component: () => import("./views/calculator.vue"),
      },
      {
        path: "config",
        component: () => import("./views/configuration.vue"),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;
