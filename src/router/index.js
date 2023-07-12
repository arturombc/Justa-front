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
    path: "/crud",
    name: "CrudView",
    component: () => import("@/views/CrudView.vue"),
  },
  {
    path: "/d-list",
    name: "DListView",
    component: () => import("@/views/Departamentos/DListView.vue"),
  },
  {
    path: "/feed-back",
    name: "FeedBack",
    component: () => import("@/views/FeedBack/FeedBack.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundView",
    component: () => import("@/views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
