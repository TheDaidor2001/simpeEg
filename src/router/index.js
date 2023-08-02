import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/crear-producto",
      name: "crear-producto",
      component: () => import("../views/CreateProductoView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
    },
    {
      path: "/editar-producto/:id",
      name: "editar-producto",
      component: () => import("../views/EditarProductoView.vue"),
    },
    {
      path: "/:notFound",
      component: NotFound,
    },
  ],
});

export default router;
