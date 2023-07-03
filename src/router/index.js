import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/register",
    name: "RegisterView",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "LoginView",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/query",
    name: "QueryListView",
    component: () => import("@/views/QueryListView.vue"),
  },
  {
    path: "/crud",
    name: "CrudView",
    component: () => import("@/views/CrudView.vue"),
  },
  {
    path: "/sql",
    name: "SqlView",
    component: () => import("@/views/SqlView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
