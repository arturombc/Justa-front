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
    path: "/abogados-registrar",
    name: "ARegisterView",
    component: () => import("@/views/Abogados/ARegisterView.vue"),
  },
  {
    path: "/abogados-lista",
    name: "AListaView",
    component: () => import("@/views/Abogados/AListaView.vue"),
  },
  {
    path: "/departamentos-registrar",
    name: "DRegisterView",
    component: () => import("@/views/Departamentos/DRegisterView.vue"),
  },
  {
    path: "/departamentos-lista",
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
